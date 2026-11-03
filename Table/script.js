const form = document.querySelector("#input-form");
const input = document.querySelector("#user-input");
const result = document.querySelector("#result");
const resultTitle = document.querySelector("#result-title");
const tableBody = document.querySelector("#table-body");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = Number(input.value);
  if (!Number.isFinite(number)) {
    return;
  }

  resultTitle.textContent = `Multiplication table for ${number}`;
  tableBody.replaceChildren();

  for (let multiplier = 1; multiplier <= 10; multiplier += 1) {
    const row = document.createElement("tr");
    const product = Number((number * multiplier).toPrecision(12));

    const stepCell = document.createElement("td");
    stepCell.className = "step";
    stepCell.textContent = String(multiplier).padStart(2, "0");

    const equationCell = document.createElement("td");
    equationCell.className = "equation";
    const numberValue = document.createElement("span");
    numberValue.textContent = String(number);
    const operator = document.createElement("span");
    operator.className = "operator";
    operator.textContent = "×";
    const multiplierValue = document.createElement("span");
    multiplierValue.textContent = String(multiplier);
    equationCell.append(numberValue, operator, multiplierValue);

    const answerCell = document.createElement("td");
    answerCell.className = "answer";
    answerCell.textContent = String(product);

    row.append(stepCell, equationCell, answerCell);
    tableBody.append(row);
  }

  result.hidden = false;
});
