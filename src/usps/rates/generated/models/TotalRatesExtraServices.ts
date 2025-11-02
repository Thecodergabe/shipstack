/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtraService } from './ExtraService';
/**
 * Extra Service Codes requested. If omitted, all available extra services will be returned. To narrow the results, provide a specific set of extra service codes. For convenience, use `986` for `PRIORITY_MAIL_EXPRESS` or `920` for all other `mailClasses`.
 * * 415 - USPS Label Delivery Service
 * * 480 - Tracking Plus 6 Months
 * * 481 - Tracking Plus 1 Year
 * * 482 - Tracking Plus 3 Years
 * * 483 - Tracking Plus 5 Years
 * * 484 - Tracking Plus 7 Years
 * * 485 - Tracking Plus 10 Years
 * * 486 - Tracking Plus Signature 3 Years
 * * 487 - Tracking Plus Signature 5 Years
 * * 488 - Tracking Plus Signature 7 Years
 * * 489 - Tracking Plus Signature 10 Years
 * * 498 - PO Box Locker – Stocking Fee (NSA Only)
 * * 500 - PO Box Locker – Self-Service Pickup Fee (NSA Only)
 * * 501 - PO Box Locker – Clerk-Assisted Pickup Fee (NSA Only)
 * * 502 - PO Box Locker – Local Delivery Fee (NSA Only)
 * * 810 - Hazardous Materials - Air Eligible Ethanol
 * * 811 - Hazardous Materials - Class 1 – Toy Propellant/Safety Fuse Package
 * * 812 - Hazardous Materials - Class 3 - Flammable and Combustible Liquids
 * * 813 - Hazardous Materials - Class 7 – Radioactive Materials
 * * 814 - Hazardous Materials - Class 8 – Air Eligible Corrosive Materials
 * * 815 - Hazardous Materials - Class 8 – Nonspillable Wet Batteries
 * * 816 - Hazardous Materials - Class 9 - Lithium Battery Marked Ground Only
 * * 817 - Hazardous Materials - Class 9 - Lithium Battery Returns
 * * 818 - Hazardous Materials - Class 9 - Marked Lithium Batteries
 * * 819 - Hazardous Materials - Class 9 – Dry Ice
 * * 820 - Hazardous Materials - Class 9 – Unmarked Lithium Batteries
 * * 821 - Hazardous Materials - Class 9 – Magnetized Materials
 * * 822 - Hazardous Materials - Division 4.1 – Mailable Flammable Solids and Safety Matches
 * * 823 - Hazardous Materials - Division 5.1 – Oxidizers
 * * 824 - Hazardous Materials - Division 5.2 – Organic Peroxides
 * * 825 - Hazardous Materials - Division 6.1 – Toxic Materials
 * * 826 - Hazardous Materials - Division 6.2 Biological Materials
 * * 827 - Hazardous Materials - Excepted Quantity Provision
 * * 828 - Hazardous Materials - Ground Only Hazardous Materials
 * * 829 - Hazardous Materials - Air Eligible ID8000 Consumer Commodity
 * * 830 - Hazardous Materials - Lighters
 * * 831 - Hazardous Materials - Limited Quantity Ground
 * * 832 - Hazardous Materials - Small Quantity Provision (Markings Required)
 * * 853 - Special Handling - Perishable Material
 * * 856 - Live Animal Transportation Fee
 * * 857 - Hazardous Materials
 * * 858 - Cremated Remains
 * * 910 - Certified Mail
 * * 911 - Certified Mail Restricted Delivery
 * * 912 - Certified Mail Adult Signature Required
 * * 913 - Certified Mail Adult Signature Restricted Delivery
 * * 915 - Collect on Delivery
 * * 917 - Collect on Delivery Restricted Delivery
 * * 920 - USPS Tracking Electronic
 * * 921 - Signature Confirmation
 * * 922 - Adult Signature Required
 * * 923 - Adult Signature Restricted Delivery
 * * 924 - Signature Confirmation Restricted Delivery
 * * 925 - Priority Mail Express Merchandise Insurance
 * * 930 - Insurance <= $500
 * * 931 - Insurance > $500
 * * 934 - Insurance Restricted Delivery
 * * 940 - Registered Mail
 * * 941 - Registered Mail Restricted Delivery
 * * 955 - Return Receipt
 * * 957 - Return Receipt Electronic
 * * 972 - Live Animal and Perishable Handling Fee
 * * 981 - Signature Requested (PRIORITY_MAIL_EXPRESS only)
 * * 984 - Parcel Locker Delivery
 * * 986 - PO to Addressee (PRIORITY_MAIL_EXPRESS only)
 * * 991 - Sunday Delivery
 *
 */
export type TotalRatesExtraServices = Array<ExtraService>;
