export const transrateJaToEn = (word) => {
  return LanguageApp.translate(word, "ja", "en");
};
global.transrateJaToEn = transrateJaToEn;
