// Mocks for Shipstack API types and clients

export const mockConfig = {
  usps: {
    enabled: true,
    clientId: 'test-usps-client',
    clientSecret: 'test-usps-secret',
    baseUrl: 'https://sandbox.api.usps.com'
  },
  fedex: {
    enabled: true,
    clientId: 'test-fedex-client',
    clientSecret: 'test-fedex-secret',
    accountNumber: '123456789'
  },
  ups: {
    enabled: true,
    clientId: 'test-ups-client',
    clientSecret: 'test-ups-secret',
    accountNumber: '1A2B3C'
  }
};

export const mockAddress = {
  name: 'John Doe',
  streetLines: ['1600 Amphitheatre Pkwy'],
  city: 'Mountain View',
  stateOrProvinceCode: 'CA',
  postalCode: '94043',
  countryCode: 'US'
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
