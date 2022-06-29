// importar express
import express from "express";
 
// importar controller
import {showAnimais, inserirAnimal, inserirAdotante} from "../controllers/product.js";

// Iniciar express router
const router = express.Router();

//Recuperar animais
router.get('/animais', showAnimais);

//Inserir novo animal
router.post('/animais', inserirAnimal);

//Inserir novo adotante
router.post('/adotantes', inserirAdotante);

// exportar default router
export default router;