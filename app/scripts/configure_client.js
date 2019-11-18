const fs = require('fs');
const path = require('path');

let paramIndex = 2;
const CONFIG_FILE_PATH = process.argv[paramIndex++];
if(!CONFIG_FILE_PATH) {
    throw new Error('Config file path not set');
}
const API_URL = process.argv[paramIndex++];
if(!API_URL) {
    throw new Error('API URL not set');
}
const ASSETS_BASE_URL = process.argv[paramIndex++] || './';
const GOOGLE_API_KEY = process.argv[paramIndex++];
if(!GOOGLE_API_KEY) {
    throw new Error('Google API key not set');
}
const GOOGLE_TRACKER_ID = process.argv[paramIndex++];

const ENDANGERED_LANGUAGE = process.argv[paramIndex++];
if(!ENDANGERED_LANGUAGE) {
    throw new Error('Endangered language not set');
}

let TERMS_AND_CONDITIONS = process.argv[paramIndex++];
if(TERMS_AND_CONDITIONS) {
    TERMS_AND_CONDITIONS = TERMS_AND_CONDITIONS.trim();
}
const LANGUAGE_FILE_PATH = process.argv[paramIndex++];
if(TERMS_AND_CONDITIONS && !LANGUAGE_FILE_PATH) {
    throw new Error('Google API key not set');
}

let PARTNER_LOGO_URL = process.argv[paramIndex++];
if(PARTNER_LOGO_URL) {
    const partnerLogoPath = path.join(__dirname, `../client/src${PARTNER_LOGO_URL}`);
    if(!fs.existsSync(partnerLogoPath)) {
        PARTNER_LOGO_URL = '';
    }
}

const THEME_FILE_PATH = process.argv[paramIndex++];
const THEME = process.argv[paramIndex++];
if(THEME && !THEME_FILE_PATH) {
    throw new Error('Theme file path not set');
}

const configParams = {
    assetsBaseUrl: ASSETS_BASE_URL,
    googleApiKey: GOOGLE_API_KEY,
    googleTrackerId: GOOGLE_TRACKER_ID,
    apiUrl: API_URL,
    partnerLogoUrl: PARTNER_LOGO_URL,
    endangeredLanguage: ENDANGERED_LANGUAGE,
    termsAndPrivacyEnabled: !!TERMS_AND_CONDITIONS,
    termsAndPrivacyContent: TERMS_AND_CONDITIONS
};

const configFilePath = path.join(process.cwd(), CONFIG_FILE_PATH);
let configContent = `export const params = ${JSON.stringify(configParams)};`;
fs.writeFileSync(configFilePath, configContent);

if(THEME) {
    const themeFilePath = path.join(process.cwd(), THEME_FILE_PATH);
    let themeContent = `@import 'themes/${THEME}';`;
    fs.writeFileSync(themeFilePath, themeContent);
}
