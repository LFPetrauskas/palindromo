function createRow(text, isPalindrome) {
  const row = document.createElement("tr");
  row.className = "trowbody";
  const verificado = isPalindrome === "sim" ? "positivo" : "negativo";
  const tdText = createTd(text);
  const tdVerificado = createTd(isPalindrome, verificado);
  row.appendChild(tdText);
  row.appendChild(tdVerificado);
  return row;
}

function createTd(text, attr) {
  const td = document.createElement("td");
  td.textContent = text;
  if (attr !== undefined && attr !== null)
    td.setAttribute("data-verificado", attr);
  return td;
}

function clearData() {
  try {
    const table = document.querySelector(".tablebody");
    table.innerHTML = "";
  } catch (error) {
    return;
  }
}

function removeSpaces(value) {
  return Array.from(value.toLowerCase()).reduce((x, y) => x + y.trim());
}

function checkPalindrome(event) {
  if (event.key !== "Enter") return;
  let text = event.target.value;
  event.target.value = "";
  if (text.trim() === "") return;
  let reverseText = Array.from(text)
    .reverse()
    .reduce((x, y) => x + y);
  let isPalindrome =
    removeSpaces(reverseText) === removeSpaces(text) ? "sim" : "não";
  try {
    const table = document.querySelector("tbody");
    const row = createRow(text, isPalindrome);
    if (table.childElementCount > 0) {
      table.insertBefore(row, table.firstChild);
    } else {
      table.appendChild(row);
    }
  } catch (error) {
    return;
  }
}

function init() {
  const input = document.querySelector(".inputPalindromo");
  const button = document.querySelector(".btnApagarHistorico");
  console.log(button);
  input.addEventListener("keyup", checkPalindrome);
  button.addEventListener("click", clearData);
}

window.addEventListener("load", init);
