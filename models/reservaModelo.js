import mongoose from 'mongoose';

let Schema=mongoose.Schema

let Reserva=new Schema({
    
    fechaIn:{
        type:Date,
        required:true
    },

    fechaOut:{
        type:Date,
        required:true
    },

    costo:{
        type:Number,
        required:true
    },

    idCliente:{
        type:String,
        required:true

    },

    numeroPersonas:{
        type:Date,
        required:true
    }


})


export let modeloReserva=mongoose.model('reserva',Reserva)