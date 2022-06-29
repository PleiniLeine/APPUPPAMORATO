// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";

import multer from "multer";

import path from "path"
 
// init express
const app = express();
 
// use express json
app.use(express.json());
 
// use cors
app.use(cors());
 
// use router
app.use(Router);

app.use(express.static('uploads/'))

const storage = multer.diskStorage({
    destination: (re,file,cb) => {
        cb(null,"src/resources/static/assets/uploads/")
    },
    filename: (req,file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

const upload = multer(
    { storage: storage,
    fileFilter: fileFilter}
);


app.post('/upload', upload.array('file'), async (req, res) => {
    console.log(req.file);
    res.send({upload: true, files:req.files});
});
 
app.listen(5000, () => console.log('Rodando em http://localhost:5000'));