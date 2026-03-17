/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LabelSpecification_Instruction } from './LabelSpecification_Instruction';
import type { LabelSpecification_LabelImageFormat } from './LabelSpecification_LabelImageFormat';
import type { LabelSpecification_LabelStockSize } from './LabelSpecification_LabelStockSize';
/**
 * Container used to define the properties required by the user to print and/or display the UPS shipping label.  Required for shipment without return service or shipments with PRL return service. Required for Electronic Return Label or Electronic Import Control Label shipments with SubVersion greater than or equal to 1707.
 */
export type ShipmentRequest_LabelSpecification = {
    LabelImageFormat: LabelSpecification_LabelImageFormat;
    /**
     * Browser HTTPUserAgent String. This is the preferred way of identifying GIF image type to be generated.  Required if /ShipmentRequest/LabelSpecificationLabelSpecification/LabelImageFormat/Code = Gif. Default to Mozilla/4.5 if this field is missing or has invalid value.
     */
    HTTPUserAgent?: string;
    LabelStockSize: LabelSpecification_LabelStockSize;
    Instruction?: Array<LabelSpecification_Instruction>;
    /**
     * Language character set expected on label.
     * Valid values:
     * dan = Danish (Latin-1)
     * nld = Dutch (Latin-1)
     * fin = Finnish (Latin-1)
     * fra = French (Latin-1)
     * deu = German (Latin-1)
     * itl = Italian (Latin-1)
     * nor = Norwegian (Latin-1)
     * pol  = Polish (Latin-2)
     * por = Poruguese (Latin-1)
     * spa = Spanish (Latin-1)
     * swe = Swedish (Latin-1)
     * ces = Czech (Latin-2)
     * hun = Hungarian (Latin-2)
     * slk = Slovak (Latin-2)
     * rus = Russian (Cyrillic)
     * tur = Turkish (Latin-5)
     * ron = Romanian (Latin-2)
     * bul = Bulgarian (Latin-2)
     * est = Estonian (Latin-2)
     * ell = Greek (Latin-2)
     * lav = Latvian (Latin-2)
     * lit = Lithuanian (Latin-2)
     * eng = English (Latin-1)  Default is English (Latin-1).
     */
    CharacterSet?: string;
};

