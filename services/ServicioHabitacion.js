//Importamos el modelo de datos 
import {modeloHabitacion} from '../models/habitacionModelo.js'

export class ServicioHabitacion{

    constructor(){}

       async buscarTodos(){
            
            let habitaciones=await modeloHabitacion.find()
            return habitaciones
        }

        async buscarPorId(id){
            let habitacion=await modeloHabitacion.findById(id)
            return habitacion
        }

        async registar(datosPeticion){
            let habitacionARegistrar=new modeloHabitacion(datosPeticion)
            return(await habitacionARegistrar.save())
        }

        async editar(id,datosPeticion){
                return (await modeloHabitacion.findByIdAnUpdate(id,datosPeticion))
        }

        async eliminar(id){
                return(await modeloHabitacion.findByIdAnDelete(id))
        }

}