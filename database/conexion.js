//Importar mongoose - encargado de crear conexion 
import mongoose from 'mongoose';

export async function conectar (){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectandose con la BD")

    }catch(error){
        console.log("Fallo en la conexion".error)
    }
}