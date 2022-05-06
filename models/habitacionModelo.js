import mongoose from 'mongoose';

//Clase para definir el esquema de datos de mi modelo
let Schema=mongoose.Schema

//Construyo mi esquema de datos 
let Habitacion=new Schema({
    
    nombre:{
        type:String,
        required:true
    },

    precio:{
        type:Number,
        required:true
    },

    numeroPersonas:{
        type:Number,
        required:true
       
    },

    foto:{
        type:String,
        required:true

    }
})

//Creo el modelo de datos

export let modeloHabitacion=mongoose.model('habitaciones',Habitacion)