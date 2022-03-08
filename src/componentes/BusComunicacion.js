let BusComunicacion = {

    acciones: {},

    suscribir: function(servicio, callback){
        if(!this.acciones[servicio]) this.acciones[servicio] = [];
        this.acciones[servicio].push(callback);
        console.warn(`Servicio: ${servicio} con una nueva suscripcion.`);
    },

    publicar: function(servicio, datos){
        if(!this.acciones[servicio] || this.acciones[servicio].lenght < 1){
            console.warn(`En el servicio ${ servicio } no hay suscriptores para publicar`);
            return //Termina la ejecucion
        }

        this.acciones[servicio].forEach(callback => {
            if(callback) callback(datos || {})
        })
    },

    desuscribir: function(servicio){
        if(!this.acciones[servicio] || this.acciones[servicio].lenght < 1){
            console.warn(`En el servicio ${ servicio } no hay suscriptores para desuscribir`);
            return //Terminar la ejecucion
        }
        this.acciones[servicio] = [];
        console.warn(`Servicio: ${ servicio } desuscripto correctamente`);
    }
}