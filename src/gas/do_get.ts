export const doGet = (_: GoogleAppsScript.Events.DoGet) => {
  return HtmlService.createTemplateFromFile("index").evaluate();
};
global.doGet = doGet;
