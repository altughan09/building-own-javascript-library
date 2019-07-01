/*!
 * library.js JavaScript Library v0.0.1
 *
 * Author: Altughan Ozengi
 * Released under the MIT license
 *
 * Date: 2019-07-01
 */

export function addElement(text) {
  if (typeof text === "string" || text instanceof String) {
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    document.getElementsByTagName('body')[0].appendChild(newDiv);
  } else {
    console.log("incorrect input type - string not found");
  }
}

window.onload = addElement(text);