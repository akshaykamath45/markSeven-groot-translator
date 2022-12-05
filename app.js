const txtInput=document.querySelector("#txt-input");
const btnTranslate=document.querySelector("#btn-translate");
const OutputEl=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(input){
    return serverURL+"?"+"text="+input
}

function errorHandler(error){
    console.log("Error Occured",error)
}
function clickHandler(){

    var inputText=txtInput.value;//taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json=> {
        var translatedText=json.contents.translated;
        OutputEl.innerText=translatedText;//output
    })
    .catch(errorHandler)
};

// function onButtonClick(){
//     console.log("Its working")
// }
btnTranslate.addEventListener('click',clickHandler);