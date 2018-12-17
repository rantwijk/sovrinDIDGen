var sovrinDID = require("sovrin-did");

//genDIDs(10);

testNonce();

function genDIDs(amount){
    for(let i=0;i<amount;i++){
        console.log(sovrinDID.gen());
        console.log('\n');
    }
}

function sign(){
    let sovrin = sovrinDID.gen();
    var signKey = sovrin.secret.signKey;
    var verifyKey = sovrin.verifyKey;
    var message = "Hello World!!";

    var signedMessage = sovrinDID.signMessage(message, signKey, verifyKey);

    console.log(sovrinDID.verifySignedMessage(signedMessage, verifyKey));
}

function getKeyPair(){
    let sovrin = sovrinDID.gen();
    var signKey = sovrin.secret.signKey;

    var keyPair = sovrinDID.getKeyPairFromSignKey(signKey);
    console.log(keyPair);
}

function testNonce(){
    let nonce = sovrinDID.getNonce();
    console.log(String.fromCharCode.apply(null, nonce));
}