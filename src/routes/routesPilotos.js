import {Router} from "express";
import { addPilotos, getPilotos } from "../controllers/controllersPilotos.js";

const routerPilotos = Router();

routerPilotos.post("/add", addPilotos);

routerPilotos.get("/", getPilotos);

export default routerPilotos;