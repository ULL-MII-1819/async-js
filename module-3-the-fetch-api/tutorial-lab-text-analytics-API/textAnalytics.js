document.getElementById("analyseButton").addEventListener("click", analyze);

function analyze() {
  let reqBody = {
    documents: [
      {
        language: "en",
        id: 1,
        text: document.getElementById("input").value
      }
    ]
  };
  let myHeaders = new Headers({
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": "7ba9dbac532a48e983b49e146923c93b" // Apim: Azure API Management
  });

  let initObject = {
    method: "POST",
    body: JSON.stringify(reqBody),
    headers: myHeaders
  };

  let request = new Request("https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases", initObject);

  fetch(request).then(function(response) {
    if (response.ok) {
      return response.json();
    }
    else {
      return Promise.reject(new Error(response.statusText));
    }
  }).then(function(response) {
    document.getElementById("output").innerHTML =
    "Total key phrases: "+response.documents[0].keyPhrases.length+
    "<br/>"+
    response.documents[0].keyPhrases;
  }).catch(function(err) {
    alert(err);
    document.getElementById("output").innerHTML = "";
  });
}
