/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactAndAddress } from './ContactAndAddress';
import type { CustomerSpecifiedLabelDetail } from './CustomerSpecifiedLabelDetail';
/**
 * These are label specification details includes the image type, printer format, and label stock for label. Can also specify specific details such as doc-tab content, regulatory labels, and masking data on the label.
 */
export type LabelSpecification = {
    /**
     * Specifies the label Format Type<br>Example: COMMON2D
     */
    labelFormatType?: LabelSpecification.labelFormatType;
    /**
     * This is the order of the Shipping label/documents to be generated.
     */
    labelOrder?: LabelSpecification.labelOrder;
    customerSpecifiedDetail?: CustomerSpecifiedLabelDetail;
    printedLabelOrigin?: ContactAndAddress;
    /**
     * Label Stock Type.<br>Example: PAPER_7X475
     */
    labelStockType: LabelSpecification.labelStockType;
    /**
     * This is applicable only to documents produced on thermal printers with roll stock.
     */
    labelRotation?: LabelSpecification.labelRotation;
    /**
     * Specifies the image type of this shipping document.<br>Example:PDF
     */
    imageType: LabelSpecification.imageType;
    /**
     * This is applicable only to documents produced on thermal printers with roll stock.
     */
    labelPrintingOrientation?: LabelSpecification.labelPrintingOrientation;
    /**
     * Specifies a particular way in which a kind of shipping document is to be produced and provided<br>Example:RETURNED
     */
    returnedDispositionDetail?: string;
    /**
     * Specifies the image resolution in DPI (Dots Per Inch). Valid values are 203 & 300. If not provided or for any other value, system will default it to 203.Note: 300 DPI resolution is only allowed for ZPLII image type.
     */
    resolution?: number;
};
export namespace LabelSpecification {
    /**
     * Specifies the label Format Type<br>Example: COMMON2D
     */
    export enum labelFormatType {
        COMMON2D = 'COMMON2D',
        LABEL_DATA_ONLY = 'LABEL_DATA_ONLY',
    }
    /**
     * This is the order of the Shipping label/documents to be generated.
     */
    export enum labelOrder {
        SHIPPING_LABEL_FIRST = 'SHIPPING_LABEL_FIRST',
        SHIPPING_LABEL_LAST = 'SHIPPING_LABEL_LAST',
    }
    /**
     * Label Stock Type.<br>Example: PAPER_7X475
     */
    export enum labelStockType {
        PAPER_4X6 = 'PAPER_4X6',
        STOCK_4X675 = 'STOCK_4X675',
        PAPER_4X675 = 'PAPER_4X675',
        PAPER_4X8 = 'PAPER_4X8',
        PAPER_4X9 = 'PAPER_4X9',
        PAPER_7X475 = 'PAPER_7X475',
        PAPER_85X11_BOTTOM_HALF_LABEL = 'PAPER_85X11_BOTTOM_HALF_LABEL',
        PAPER_85X11_TOP_HALF_LABEL = 'PAPER_85X11_TOP_HALF_LABEL',
        PAPER_LETTER = 'PAPER_LETTER',
        STOCK_4X675_LEADING_DOC_TAB = 'STOCK_4X675_LEADING_DOC_TAB',
        STOCK_4X8 = 'STOCK_4X8',
        STOCK_4X9_LEADING_DOC_TAB = 'STOCK_4X9_LEADING_DOC_TAB',
        STOCK_4X6 = 'STOCK_4X6',
        STOCK_4X675_TRAILING_DOC_TAB = 'STOCK_4X675_TRAILING_DOC_TAB',
        STOCK_4X9_TRAILING_DOC_TAB = 'STOCK_4X9_TRAILING_DOC_TAB',
        STOCK_4X9 = 'STOCK_4X9',
        STOCK_4X85_TRAILING_DOC_TAB = 'STOCK_4X85_TRAILING_DOC_TAB',
        STOCK_4X105_TRAILING_DOC_TAB = 'STOCK_4X105_TRAILING_DOC_TAB',
    }
    /**
     * This is applicable only to documents produced on thermal printers with roll stock.
     */
    export enum labelRotation {
        LEFT = 'LEFT',
        RIGHT = 'RIGHT',
        UPSIDE_DOWN = 'UPSIDE_DOWN',
        NONE = 'NONE',
    }
    /**
     * Specifies the image type of this shipping document.<br>Example:PDF
     */
    export enum imageType {
        ZPLII = 'ZPLII',
        EPL2 = 'EPL2',
        PDF = 'PDF',
        PNG = 'PNG',
    }
    /**
     * This is applicable only to documents produced on thermal printers with roll stock.
     */
    export enum labelPrintingOrientation {
        BOTTOM_EDGE_OF_TEXT_FIRST = 'BOTTOM_EDGE_OF_TEXT_FIRST',
        TOP_EDGE_OF_TEXT_FIRST = 'TOP_EDGE_OF_TEXT_FIRST',
    }
}

