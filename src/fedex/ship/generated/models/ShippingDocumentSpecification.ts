/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CertificateOfOriginDetail } from './CertificateOfOriginDetail';
import type { CommercialInvoiceDetail } from './CommercialInvoiceDetail';
import type { GeneralAgencyAgreementDetail } from './GeneralAgencyAgreementDetail';
import type { Op900Detail } from './Op900Detail';
import type { ReturnInstructionsDetail } from './ReturnInstructionsDetail';
import type { UsmcaCertificationOfOriginDetail } from './UsmcaCertificationOfOriginDetail';
import type { UsmcaCommercialInvoiceCertificationOfOriginDetail } from './UsmcaCommercialInvoiceCertificationOfOriginDetail';
/**
 * Use this object to provide all data required for additional (non-label) shipping documents to be produced.
 */
export type ShippingDocumentSpecification = {
    generalAgencyAgreementDetail?: GeneralAgencyAgreementDetail;
    returnInstructionsDetail?: ReturnInstructionsDetail;
    op900Detail?: Op900Detail;
    usmcaCertificationOfOriginDetail?: UsmcaCertificationOfOriginDetail;
    usmcaCommercialInvoiceCertificationOfOriginDetail?: UsmcaCommercialInvoiceCertificationOfOriginDetail;
    /**
     * Conditionally required in order to obtain shipping documents.Indicates the types of shipping documents requested by the shipper<br>Example:RETURN_INSTRUCTIONS
     */
    shippingDocumentTypes?: Array<'CERTIFICATE_OF_ORIGIN' | 'COMMERCIAL_INVOICE' | 'CUSTOM_PACKAGE_DOCUMENT' | 'CUSTOM_SHIPMENT_DOCUMENT' | 'CUSTOMER_SPECIFIED_LABELS' | 'EXPORT_DECLARATION' | 'GENERAL_AGENCY_AGREEMENT' | 'LABEL' | 'USMCA_CERTIFICATION_OF_ORIGIN' | 'OP_900' | 'PENDING_SHIPMENT_EMAIL_NOTIFICATION' | 'PRO_FORMA_INVOICE' | 'RETURN_INSTRUCTIONS' | 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN'>;
    certificateOfOrigin?: CertificateOfOriginDetail;
    commercialInvoiceDetail?: CommercialInvoiceDetail;
};

