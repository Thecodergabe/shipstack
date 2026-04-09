import { getRates, type RateRequest } from "shipstack";

import { config } from "../config.example";

export async function POST(request: Request) {
	const body = (await request.json()) as Partial<RateRequest>;

	const rateRequest: RateRequest = {
		carrier: body.carrier ?? "usps",
		originZip: body.originZip ?? "90210",
		destZip: body.destZip ?? "10001",
		weightOz: body.weightOz ?? 16,
		lengthInches: body.lengthInches ?? 10,
		widthInches: body.widthInches ?? 5,
		heightInches: body.heightInches ?? 5,
		destCountryCode: body.destCountryCode
	};

	const rates = await getRates(rateRequest, config);

	return Response.json({ rates });
}
