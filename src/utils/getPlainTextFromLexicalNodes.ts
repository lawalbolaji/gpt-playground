/* 
  Editor State JSON example:
  {
  "root": {
    "children": [
      {
        "children": [],
        "direction": null,
        "format": "",
        "indent": 0,
        "type": "paragraph",
        "version": 1
      }
    ],
    "direction": null,
    "format": "",
    "indent": 0,
    "type": "root",
    "version": 1
  }
}
*/
export function getPlainTextFromLexicalNodes(editorState: any) {
  /*
        assumption here is that editor only supports plain text 
        ...and as a result will have only text nodes with optional line breaks
    */

  let plainTextPrompt = "";
  const containsOnlyLineBreaks = new RegExp(/^(\\n)+/);

  const { children } = editorState.root.children[0];
  children.forEach((data: { text?: string }) => {
    if (data.text !== undefined) {
      plainTextPrompt += data.text;
    } else plainTextPrompt += "\n";
  });

  if (containsOnlyLineBreaks.test(plainTextPrompt) || !plainTextPrompt) return undefined;

  return plainTextPrompt;
}
