export const lintCode = async (code: string) => {
  const res = await fetch(`https://${window.location.hostname}/api/lint`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: code }),
  });
  const json = await res.json();
  if (json.length === 0) {
    alert("No lint error found!");
  } else {
    console.log(json);
    lint2Table(json);
  }
};

function lint2Table(data) {
  const tableBody = document.getElementById("table-body");
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement("tr");

    const posCell = document.createElement("td");
    const posText = `${data[i].loc.start.line}-${data[i].loc.end.line}`;
    posCell.textContent = posText;
    posCell.classList.add("border", "px-4", "py-2");

    const messageCell = document.createElement("td");
    messageCell.textContent = data[i].message;
    messageCell.classList.add("border", "px-4", "py-2");

    const urlCell = document.createElement("td");
    const url = data[i].url
      ? `<a href="${data[i].url}" target="_blank" rel="noopener noreferrer">${data[i].url}</a>`
      : "";
    urlCell.innerHTML = url;
    urlCell.classList.add("border", "px-4", "py-2");

    row.appendChild(posCell);
    row.appendChild(messageCell);
    row.appendChild(urlCell);

    tableBody.appendChild(row);
  }
}
