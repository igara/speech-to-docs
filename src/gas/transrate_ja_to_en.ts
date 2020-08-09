import { google } from "googleapis";

export const transrateJaToEn = (word)=> {
  return LanguageApp.translate(word, "ja", "en");
};
global.transrateJaToEn = transrateJaToEn;
