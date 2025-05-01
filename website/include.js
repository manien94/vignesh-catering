// include.js
document.addEventListener("DOMContentLoaded", () => {
    const includeHTML = (elementId, filePath) => {
      fetch(filePath)
        .then(response => {
          if (!response.ok) throw new Error(`Failed to fetch ${filePath}`);
          return response.text();
        })
        .then(data => {
          document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
    };
  
    includeHTML("header", "header.html");
    includeHTML("footer", "footer.html");
  });
  