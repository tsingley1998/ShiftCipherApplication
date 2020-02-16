function rot13() {
    let secretMessage = document.getElementById('secretMessage').value;
    let result = document.getElementById('encryptedMessage');
    let arr = [];
   

    for(i = 0; i <= secretMessage.length; i++) {

        if((secretMessage.charCodeAt(i) >= 65 && secretMessage.charCodeAt(i) <= 77) || (secretMessage.charCodeAt(i) >= 97 && secretMessage.charCodeAt(i) <= 109)) {
           
            arr.push(String.fromCharCode(secretMessage.charCodeAt(i) + 13));

        } else if((secretMessage.charCodeAt(i) >= 78 && secretMessage.charCodeAt(i) <= 90) || (secretMessage.charCodeAt(i) >= 110 && secretMessage.charCodeAt(i) <= 122)) {
            
            arr.push(String.fromCharCode(secretMessage.charCodeAt(i) - 13));

        } else if(secretMessage.charCodeAt(i) < 65) {
            
            arr.push(secretMessage[i]);
        }
    }
    result.innerText = arr.join("");
}

function decryptRot13() {
    let superSecretMessage = document.getElementById('superSecretMessage').value;
    let result = document.getElementById('decryptedMessage');
    let arr = [];
   

    for(i = 0; i <= superSecretMessage.length; i++) {

        if((superSecretMessage.charCodeAt(i) >= 65 && superSecretMessage.charCodeAt(i) <= 77) || (superSecretMessage.charCodeAt(i) >= 97 && superSecretMessage.charCodeAt(i) <= 109)) {
           
            arr.push(String.fromCharCode(superSecretMessage.charCodeAt(i) + 13));

        } else if((superSecretMessage.charCodeAt(i) >= 78 && superSecretMessage.charCodeAt(i) <= 90) || (superSecretMessage.charCodeAt(i) >= 110 && superSecretMessage.charCodeAt(i) <= 122)) {
            
            arr.push(String.fromCharCode(superSecretMessage.charCodeAt(i) - 13));

        } else if(superSecretMessage.charCodeAt(i) < 65) {
            
            arr.push(superSecretMessage[i]);
        }
    }
    result.innerText = arr.join("");
}