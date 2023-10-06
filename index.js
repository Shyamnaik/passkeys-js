export class Passkeys {

     static Register (publicKeyCredentialCreationOptions){
        navigator.credentials.create({publicKey: publicKeyCredentialCreationOptions })
    }

    static LoginWithAutofill (publicKeyCredentialRequestOptions){
        navigator.credentials.get({
            publicKey: publicKeyCredentialRequestOptions , 
            // Specify 'conditional' to activate conditional UI  
            mediation: 'conditional' 
        })
    }

}





