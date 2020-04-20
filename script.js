const objectTocsv = function (data) {
  const csvRows = [];

  //get the headers
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));
  // console.log(csvRows);

  //loop over the rows & format the data
  for (const row of data) {
    const values = headers.map((header) => {
      const escaped = ("" + row[header]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
};

// Method to download csv file from browser - Browsers that support HTML5 download attribute
const download = function (data) {
  const blob = new Blob([data], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", "exportedData.csv");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

//Fetching data from endpoint
const getRequest = async function () {
  const jsonUrl = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(jsonUrl);
  const json = await res.json();

  const csvData = objectTocsv(json);
  download(csvData);
};

// Button -- Calling getRequest function on click
<button id="myButton" onclick="getRequest()">
  Export Data
</button>;
