export const setText = (text: string) => {
  if (text) {
    const docs = DocumentApp.getActiveDocument();
    const body = docs.getBody();
    body.clear();
    body.setText(text);
  }
};
global.setText = setText;
