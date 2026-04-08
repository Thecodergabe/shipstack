import http from 'node:http';
import { URL } from 'node:url';
import { ShippingClient } from '../../dist/index.mjs';

const PORT = process.env.PORT || 4000;
const ALLOWED_ORIGIN = 'http://localhost:5173';

function sendJson(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(body));
}

async function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); } 
      catch (err) { reject(err); }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  try {
    if ((url.pathname === '/api/validate-address' || url.pathname === '/api/get-rates') && req.method === 'POST') {
      const body = await parseBody(req);
      
      if (!body.config || !body.request) {
        return sendJson(res, 400, { error: 'Missing config or request payload.' });
      }

      // 1. Create the Client
      const client = new ShippingClient(body.config);

      // 2. TRIGGER INITIALIZATION
      // If the library doesn't auto-init, we must call it here to get the OAuth Token
      if (typeof client.init === 'function') {
        await client.init();
      }

      // 3. Execute the Request
      const result = url.pathname === '/api/validate-address' 
        ? await client.validateAddress(body.request)
        : await client.getRates(body.request);

      return sendJson(res, 200, { result });
    }

    sendJson(res, 404, { error: 'Not found' });
  } catch (error) {
    // This logs the ACTUAL reason to your terminal
    console.error('--- PROXY ERROR ---');
    console.error(error); 
    sendJson(res, 500, { error: error?.message || 'Internal Server Error' });
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Shipstack Proxy running on http://localhost:${PORT}`);
});