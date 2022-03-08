import Mailer from './Mailer.js'

let Orden = function(mail){
    this.mail = mail;
}

Orden.prototype = {
    enviar: function(){
        console.log('Orden de compra almacenada');
        this.enviarMail(this.mail)
    },
    enviarMail: function(mail){
        let mailer = new Mailer();
        mailer.enviarMail(mail);
    }
}