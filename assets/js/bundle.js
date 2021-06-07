
//=require jquery/dist/jquery
//=require bootstrap/dist/js/bootstrap
//=require appInsights.js
//=require cookieconsent/build/cookieconsent.min



//CookieConsent Code
window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#000"
        },
        "button": {
          "background": "#f1d600"
        }
      }
    })});