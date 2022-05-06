import {modeloReserva} from '../models/habitacionModelo.js'

class ServicioReserva{

    constructor(){}

    

    async fechaIn(date){
        try{

            let reserva=await modeloReserva.findByDate(date)

            return reserva

        }catch(error){

            console.log("Upss"+error)
        }
    }

    async fechaOut(date){
        try{

            let habitacionReservada=new modeloHabitacion(date)
            return(await modeloReserva.date())

        }catch(error){
            console.log("Upss"+error)
        }
    }

    async costo(number){
        try{
            return (await modeloReserva.find(number))

        }catch(error){

            console.log("Upss"+error)
        }

    }

    async idCliente(id){
        try{
            return(await modeloHabitacion.findById(id))

        }catch(error){
            console.log("Upss"+error)
        }
    }

}