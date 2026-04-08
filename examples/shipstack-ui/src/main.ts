const output = document.getElementById('output') as HTMLElement;
const resultsContainer = document.getElementById('results-container') as HTMLElement;
const carrierSelect = document.getElementById('carrier-select') as HTMLSelectElement;

let clientConfig: any = null;

const labelTextClientId = document.getElementById('label-text-client-id') as HTMLElement;
const labelTextClientSecret = document.getElementById('label-text-client-secret') as HTMLElement;
const wrapperAccountNumber = document.getElementById('wrapper-account-number') as HTMLElement;
const labelTextAccountNumber = document.getElementById('label-text-account-number') as HTMLElement;
const inputKey = document.getElementById('api-key') as HTMLInputElement;
const inputSecret = document.getElementById('api-secret') as HTMLInputElement;
const inputAccountNumber = document.getElementById('account-number') as HTMLInputElement;
const inputBaseUrl = document.getElementById('api-baseUrl') as HTMLInputElement;

carrierSelect.addEventListener('change', () => {
  const carrier = carrierSelect.value;
  
  // Reset cached config
  clientConfig = null;

  // Clear associated data fields
  inputKey.value = '';
  inputSecret.value = '';
  inputAccountNumber.value = '';
  inputBaseUrl.value = '';
  
  if (carrier === 'usps') {
    labelTextClientId.textContent = 'Consumer Key';
    inputKey.placeholder = 'Consumer Key';
    
    labelTextClientSecret.textContent = 'Consumer Secret';
    inputSecret.placeholder = 'Consumer Secret';
    
    wrapperAccountNumber.style.display = 'none';
  } else if (carrier === 'ups') {
    labelTextClientId.textContent = 'Client ID';
    inputKey.placeholder = 'Client ID';
    
    labelTextClientSecret.textContent = 'Client Secret';
    inputSecret.placeholder = 'Client Secret';
    
    wrapperAccountNumber.style.display = 'flex';
    labelTextAccountNumber.textContent = 'Shipper Number';
    inputAccountNumber.placeholder = 'Shipper Number';
  } else {
    // FedEx or default
    labelTextClientId.textContent = 'Client ID';
    inputKey.placeholder = 'Client ID';
    
    labelTextClientSecret.textContent = 'Client Secret';
    inputSecret.placeholder = 'Client Secret';
    
    wrapperAccountNumber.style.display = 'flex';
    labelTextAccountNumber.textContent = 'Account Number';
    inputAccountNumber.placeholder = 'Account Number';
  }
});

// Trigger change on load to set initial state
carrierSelect.dispatchEvent(new Event('change'));

// Logic for building client and making calls
function getConfig() {
  const carrier = carrierSelect.value;
  const config: any = {};
  config[carrier] = {
    enabled: true,
    clientId: (document.getElementById('api-key') as HTMLInputElement).value,
    clientSecret: (document.getElementById('api-secret') as HTMLInputElement).value,
    accountNumber: (document.getElementById('account-number') as HTMLInputElement).value,
    baseUrl: (document.getElementById('api-baseUrl') as HTMLInputElement).value || undefined
  };
  return config;
}

document.getElementById('build-client')?.addEventListener('click', () => {
  clientConfig = getConfig();
  resultsContainer.innerHTML = `<div style="padding:10px; color:#2563eb; font-weight:bold;">✓ Client Configured for ${carrierSelect.value}</div>`;
});

async function apiCall(path: string, request: any) {
  try {
    resultsContainer.innerHTML = '<div style="padding:40px; text-align:center; color:#64748b;">Fetching results...</div>';
    const res = await fetch(`http://localhost:4000/api/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ config: clientConfig || getConfig(), request })
    });
    const data = await res.json();
    displayResults(data);
  } catch (e) {
    resultsContainer.innerHTML = `<div style="color:#ef4444; background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:20px; margin-top:20px;"><b>Error:</b> ${e}</div>`;
  }
}

// Event Listeners
document.getElementById('validate-address')?.addEventListener('click', () => {
  apiCall('validate-address', {
    carrier: carrierSelect.value,
    address: {
      streetLines: [(document.getElementById('street') as HTMLInputElement).value],
      city: (document.getElementById('city') as HTMLInputElement).value,
      stateOrProvinceCode: (document.getElementById('state') as HTMLInputElement).value,
      postalCode: (document.getElementById('postal') as HTMLInputElement).value,
      countryCode: (document.getElementById('country') as HTMLInputElement).value,
    }
  });
});

document.getElementById('get-rates')?.addEventListener('click', () => {
  apiCall('get-rates', {
    carrier: carrierSelect.value,
    originZip: (document.getElementById('origin-zip') as HTMLInputElement).value,
    destZip: (document.getElementById('dest-zip') as HTMLInputElement).value,
    weightOz: Number((document.getElementById('weight') as HTMLInputElement).value),
    lengthInches: 10, widthInches: 5, heightInches: 5
  });
});

function displayResults(data: any) {
  // 1. Keep the Master JSON exactly as it is
  output.textContent = JSON.stringify(data, null, 2);
  
  // 2. Clear the UI container and build the information table
  resultsContainer.innerHTML = '';

  // --- INFO TABLE FOR RATES ---
  if (data.results?.result) {
    const table = document.createElement('table');
    table.className = 'results-table';
    table.innerHTML = `
      <thead>
        <tr>
          <th>Carrier</th>
          <th>Service</th>
          <th>Price</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody id="rate-data-body"></tbody>
    `;
    resultsContainer.appendChild(table);
    const tbody = document.getElementById('rate-data-body')!;

    data.results.result.forEach((rate: any) => {
      const tr = document.createElement('tr');
      // Extracting data from the raw FedEx response provided in your logs
      const weight = rate.raw?.ratedShipmentDetails?.[0]?.shipmentRateDetail?.totalBillingWeight?.value || 'N/A';
      const unit = rate.raw?.ratedShipmentDetails?.[0]?.shipmentRateDetail?.totalBillingWeight?.units || '';

      tr.innerHTML = `
        <td><span class="carrier-label">${rate.carrier.toUpperCase()}</span></td>
        <td style="font-weight:600;">${rate.serviceName}</td>
        <td><span class="price-tag">$${rate.cost?.amount?.toFixed(2) || 'N/A'}</span></td>
        <td style="color: #64748b;">${weight} ${unit}</td>
      `;
      tbody.appendChild(tr);
    });
  } 

  // --- INFO TABLE FOR ADDRESS VALIDATION ---
  else if (data.result?.result?.normalizedAddress) {
    const addr = data.result.result.normalizedAddress;
    const table = document.createElement('table');
    table.className = 'results-table';
    table.innerHTML = `
      <thead>
        <tr>
          <th>Field</th>
          <th>Verified Information</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><b>Address Line 1</b></td><td>${addr.street1}</td></tr>
        <tr><td><b>City / State</b></td><td>${addr.city}, ${addr.state}</td></tr>
        <tr><td><b>Postal Code</b></td><td>${addr.postalCode}</td></tr>
        <tr><td><b>Classification</b></td><td>${addr.classification || 'Unknown'}</td></tr>
        <tr><td><b>Country</b></td><td>${addr.country}</td></tr>
      </tbody>
    `;
    resultsContainer.appendChild(table);
  }
}