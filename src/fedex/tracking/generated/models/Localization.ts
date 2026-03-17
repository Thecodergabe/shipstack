/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifies the language details for email notification.
 */
export type Localization = {
    /**
     * Identifies two-letter code for the language (e.g. en/EN, fr/FR, es/ES etc..).<br> Example: en
     */
    languageCode: string;
    /**
     * Identifies the two-letter code for the region, used to further identify the requested language.  for example, if you request Spanish, you must include a locale code of <i>US</i> for North American Spanish, or <i>MX</i> for Mexico. <br> Example: US<br><a onclick='loadDocReference("locales")'>Click here to see Locales</a>
     */
    localeCode?: string;
};

