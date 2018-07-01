
## Tutorial Guidelines

The tutorial for this module is designed to teach you how to use the Fetch API with the Text Analytics API from Microsoft Cognitive Services to determine the key phrases in a paragraph of text.

* [Tutorial 3 Intro Video](https://youtu.be/p7PeC62jfBc)

Demo Link: Text Analytics Demo

To download the reference solutions you can right click the links below and press Save link as...

Reference Solution:

textAnalytics.html

textAnalytics.js


* Observaciones

- Tuve  que obtener nuevas claves y sustitur el punto de acceso en el código:

* Punto de conexión: https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0
* Clave 1: 7ba9dbac532a48e983b49e146923c93b
* Clave 2: db2f99581ad24d668081bd4d82008788

```
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
```

Véase [../api-key-faq.md](../api-key-faq.md)
