import express from "express";
import routerPilotos from "./src/routes/routesPilotos.js";

const app = express();

app.use(express.json());

const PORT = 3000;

app.use("/api/pilotos", routerPilotos);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})
