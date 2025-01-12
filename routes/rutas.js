import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReserva.js'

let controladorHabitacion=new ControladorHabitaciones()

//VOY A SEPARAR Y PERSONALIZAR LAS RUTAS DE CADA SERVICIO
//DEL API REST
export let rutas=express.Router()

rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscandoHabitacion)
rutas.post('/registrarhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.put('/editarhabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)

//CREAMOS LA INSTANCIA PARA LAS RESERVAS....
let controladorReservas = new ControladorReservas()

rutas.get('/buscareserva', controladorReservas.buscandoReservas)
rutas.get('/buscareservas/:idReserva', controladorReservas.buscandoReserva)
rutas.post('/creareservas', controladorReservas.creandoReservas)
rutas.put('/editareserva/:idReserva',controladorReservas.editandoReserva)