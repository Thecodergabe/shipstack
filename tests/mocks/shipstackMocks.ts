// Mocks for Shipstack API types and clients

export const mockConfig = {
  usps: { apiKey: 'test', apiSecret: 'test', baseUrl: 'https://sandbox.api.usps.com' },
  fedex: { apiKey: 'test', secretKey: 'test' },
  ups: { apiKey: 'test', apiSecret: 'test' }
};

export const mockAddress = {
  name: 'John Doe',
  streetLines: ['1600 Amphitheatre Pkwy'],
  city: 'Mountain View',
  state: 'CA',
  postalCode: '94043',
  country: 'US'
};

export const mockShipmentRequest = {
  carrier: 'usps',
  serviceCode: 'usps_priority',
  toAddress: { ...mockAddress },
  fromAddress: { ...mockAddress, streetLines: ['1 Infinite Loop'], city: 'Cupertino', postalCode: '95014' },
  package: {
    weightOz: 16,
    lengthInches: 10,
    widthInches: 5,
    heightInches: 5
  }
};

export const mockRateRequest = {
  carrier: 'usps',
  originZip: '90210',
  destZip: '10001',
  weightOz: 16,
  lengthInches: 10,
  widthInches: 5,
  heightInches: 5
};
