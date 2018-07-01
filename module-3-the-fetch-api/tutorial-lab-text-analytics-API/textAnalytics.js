







document.getElementById("analyseButton").addEventListener("click", analyze);

function analyze(){


    var reqBody = {
        "documents": [
            {
            "language":"en",
            "id" : 1,
            "text": document.getElementById("input").value
            }
        ]
    };

    // 'Ocp-Apim-Subscription-Key':'e22e6a13987c4f919279cf15ed5d3fa6'
    var myHeader =  new Headers({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key':'7ba9dbac532a48e983b49e146923c93b'
    });

    var initObject = {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: myHeader
    }

    // Punto de conexión: https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0
    // var request = new Request('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases', initObject);
    var request = new Request('https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases', initObject);

    fetch(request).then(function(response){
        if(response.ok){
            return response.json();
        }
        else{
            return Promise.reject(new Error(response.statusText));
        }
    }).then(function(response){
        document.getElementById("output").innerHTML = "Total Key Phrases: " + response.documents[0].keyPhrases.length + "</br>" + response.documents[0].keyPhrases;
    }).catch(function(err){
        alert(err);
        document.getElementById("output").innerHTML = "";
    });

}
