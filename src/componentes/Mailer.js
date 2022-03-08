//Creacion de clase por prototipo:
let Mailer = function(){ }
Mailer.prototype = {
    enviarMail: function(mail){
        console.log('Enviando email...');
        setTimeout(() => {
            console.log('Email enviado a ' + mail);
        }, 2000);
    }
}

/*
//Creacion de clase actual: 
class Mailer {
    enviarMail(mail){
        console.log('Enviando mail...');
        setTimeout(() => {
            console.log('Email enviado a ' + mail);
        }, 2000);
    }
} 
*/