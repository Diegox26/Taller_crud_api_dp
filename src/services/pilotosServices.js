import pilotos from "../models/data.js"

let mibl1 = pilotos;

export const Add_pilotos = (paramas) => {
    mibl1.push(paramas);
}

export const Get_pilotos = () => {
    return mibl1;
}