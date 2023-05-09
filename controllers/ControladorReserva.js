import { ServicioReserva } from "../services/ServicioReserva.js";
import { ServicioHabitacion } from "../services/ServicioHabitacion.js";
import { modeloReseva } from "../models/modeloReserva.js";
export class ControladorReservas{
    constructor(){}

    async buscandoReserva(req,res){
        let idReserva=req.params.idReserva
        let servicioReserva = new ServicioReserva() 
        try{
            res.status(200).json({
                "mensaje":"Exito buscando la reserva..."+idReserva,
                "Reserva":await servicioReserva.buscarPorId(idReserva)
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }


    async buscandoReservas(req,res){
        let servicioReserva=new ServicioReserva();
        try{
            res.status(200).json({
                "mensaje":"Exito buscando las reservas de los clientes....",
                "reservas":await servicioReserva.buscarTodas()
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }

    async creandoReservas(req,res){
        let datosReserva=req.body
        let servicioReserva = new ServicioReserva()
        try{

            if(datosReserva.idReserva)


            await servicioReserva.crearReserva(datosReserva)
            console.log(datosReserva)
            res.status(200).json({
                "mensaje":"Exito agreando una reserva..."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva"+error
            })
        }
    }

    async editandoReserva(req,res){
        let datosReserva=req.body;
        let editandoReserva=req.params.idReserva;
        console.log(datosReserva);
        console.log(editandoReserva);

        let servicioReserva=new ServicioReserva()

        try{
            await servicioReserva.editarReserva(idreserva,datosReserva)
            res.status(200).json({
                "mensaje":"Exito editando las habitaciones..."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion " + error
            })
        }
    }

}