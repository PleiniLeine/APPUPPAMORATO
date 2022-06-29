import fs from "fs";
import db_animais from "../config/animaisDatabase.js";

// Recuperar animais
export const getAnimais = (result) => {
    db_animais.query("select * from informacoes;", (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Inserir um novo animal
export const postAnimal = (data, result) => {
    db_animais.query("INSERT INTO informacoes SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

//Inserir novo Adotante
export const postAdotante = (data, result) => {
    db_animais.query("INSERT INTO adotantes SET ?", [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err,null);
        } else {
            result(null, results);
        }
    });
}