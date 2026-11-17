import { Add_pilotos, Get_pilotos } from "../services/pilotosServices.js";

export const addPilotos = (req, res) => {
    const myBody = req.body;
    Add_pilotos(myBody);
    res.status(200).json({
        mensaje: "Piloto insertado"
    })
}

export const getPilotos = (req, res) => {
    const pilotos = Get_pilotos();
    res.json(pilotos);
}