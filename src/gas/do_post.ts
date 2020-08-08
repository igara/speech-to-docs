export const doPost = (e: GoogleAppsScript.Events.DoPost) => {
  const params = JSON.parse((e.postData as any).getDataAsString());
  const text = params.text;
  if (text) {
    const docs = DocumentApp.getActiveDocument();
    const body = docs.getBody();
    body.clear();
    body.setText(text);
  }
  return HtmlService.createTemplateFromFile("index").evaluate();
};
global.doPost = doPost;
