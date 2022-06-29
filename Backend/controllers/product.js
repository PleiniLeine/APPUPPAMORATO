// Import function from Product Model
import { getAnimais, postAnimal, postAdotante} from "../models/animaisModel.js";

// Recuperar Animais
export const showAnimais = (req, res) => {
    getAnimais((err, results) => {
        if(err){
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Inserir Novo Animal
export const inserirAnimal = (req, res) => {
    const data = req.body;
    postAnimal(data, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}
//Inserir novo adotante
export const inserirAdotante = (req,res) => {
    const data = req.body;
    postAdotante (data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}