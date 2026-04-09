# Carrier‑Specific Behavior in Shipstack

Shipstack provides a unified API across USPS, FedEx, and UPS — but each carrier has unique rules, quirks, and constraints.  
This document explains those differences and how Shipstack handles them internally.

---

# Overview

Shipstack normalizes:

- Rate structures  
- Tracking events  
- Address validation responses  
- Shipment payloads  
- Error formats  

But each carrier still has its own behaviors that developers should understand.

This guide covers:

- USPS  
- FedEx  
- UPS  
- How Shipstack smooths out inconsistencies  

---

# USPS

USPS is the most rigid and rule‑driven carrier.  
It has strict formatting requirements and limited metadata in some APIs.

## Strengths

- Excellent address correction  
- Fast, lightweight APIs  
- Strong support for small parcels  
- Predictable service codes  

## Limitations

- Tracking events may lack timestamps  
- Delivery estimates are not always provided  
- Bulk tracking limit: **35 items**  
- Some services ignore dimensions  

## Shipstack Behavior

- Automatically chunks tracking requests into 35‑item batches  
- Normalizes missing timestamps to `null`  
- Maps USPS service names to consistent `serviceCode` values  
- Normalizes address corrections into a unified structure  

---

# FedEx

FedEx provides the richest data across all carriers, especially for tracking and shipments.

## Strengths

- Detailed tracking events  
- Reliable delivery estimates  
- Strong international support  
- Rich shipment metadata  

## Limitations

- Requires `accountNumber` for almost all operations  
- Rate requests may require dimensions even for small parcels  
- Tracking batch limit: **30 items**  

## Shipstack Behavior

- Automatically chunks tracking requests into 30‑item batches  
- Normalizes FedEx’s verbose response structure  
- Maps FedEx service codes to unified names  
- Converts FedEx timestamps into ISO strings  

---

# UPS

UPS is the strictest carrier in terms of authentication and rate limiting.

## Strengths

- Reliable tracking  
- Strong commercial shipping support  
- Good dimensional pricing  

## Limitations

- Tracking is **single‑inquiry only**  
- Aggressive rate limiting  
- Requires `accountNumber` for most services  
- OAuth tokens expire quickly  

## Shipstack Behavior

- Automatically throttles UPS tracking to avoid lockouts  
- Ensures single‑inquiry tracking is respected  
- Normalizes UPS’s deeply nested response structure  
- Converts UPS error codes into `ShipstackError`  

---

# Comparison Table

| Feature | USPS | FedEx | UPS |
|--------|------|--------|------|
| Tracking batch size | 35 | 30 | 1 |
| Address correction | Strong | Moderate | Moderate |
| Delivery estimates | Inconsistent | Strong | Strong |
| Requires account number | No | Yes | Yes |
| Rate limiting | Low | Moderate | High |
| International support | Limited | Strong | Strong |

---

# How Shipstack Normalizes Carrier Differences

Shipstack smooths out inconsistencies by:

### 1. Normalizing Field Names  
All carriers return:

- `serviceCode`  
- `serviceName`  
- `deliveryDays`  
- `cost.amount`  
- `cost.currency`  

### 2. Normalizing Tracking Events  
Regardless of carrier, tracking events become:

```ts
{
  description: string;
  dateTime: string;
  city?: string;
  stateOrProvinceCode?: string;
  postalCode?: string;
  countryCode?: string;
}
```

### 3. Handling Concurrency and Batching  
Shipstack automatically:

- Chunks USPS and FedEx tracking  
- Throttles UPS tracking  
- Ensures safe parallel execution  

### 4. Mapping Errors  
All carrier errors become `ShipstackError` with:

- `carrier`  
- `message`  
- `cause`  

### 5. Unifying Shipment Workflows  
Both staged and actual shipments use the same request structure, regardless of carrier.

---

# Summary

Shipstack abstracts away the differences between USPS, FedEx, and UPS by:

- Normalizing data  
- Handling batching and throttling  
- Mapping errors  
- Providing consistent request/response structures  
- Supporting both staged and actual shipments  

This allows you to build multi‑carrier workflows without worrying about carrier‑specific quirks.

---