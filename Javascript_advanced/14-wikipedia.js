function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const pages = response.query.pages;
      const extract = pages[Object.keys(pages)[0]].extract;

      callback(extract); // Appel du callback avec le contenu
    }
  };

  xhr.onerror = function () {
    console.error("Erreur lors du chargement de l'article Wikipédia.");
  };

  xhr.send();
}

// Appel avec callback
queryWikipedia(createElement);
