//Servdor.
const express = require("express");
const expressFileUpload = require("express-fileupload");
const app = express();
const fs = require("fs").promises;

//Apps de express.
app.use(express.static("public"));

//Middlewares
app.use(
  expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit:
      "El tamano del archivo que intentas subir supera el limite",
  })
);

//Rutas get.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/formulario.html");
});

app.get("/collage", (req, res) => {
  res.sendFile(__dirname + "/public/collage.html");
});

//Rutas post.
// app.post("/imagen", (req, res) => {
//   try {
//     const { target_file } = req.files
//     const { posicion } = req.body;
//     target_file.mv(`${__dirname}/public/imgs/imagen-${posicion}.jpg`, (err) => {
//       if (err) res.status(500).send(err)
//       res.redirect("/collage");
//     });
//   } catch (error) {
//     res.status(500).send("Algo salió mal en la carga de la imagen...")
//   }
// });
app.post("/imagen", (req, res) => {
  try {
    const { target_file } = req.files
    const { posicion } = req.body;
    target_file.mv(`${__dirname}/public/imgs/imagen-${posicion}.jpg`, (err) => {
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          res.status(400).send("El tamaño del archivo excede el límite permitido.");
        } else {
          res.status(500).send(err);
        }
      } else {
        res.redirect("/collage");
      }
    });
  } catch (error) {
    res.status(500).send("Algo salió mal en la carga de la imagen...")
  }
});

//Rutas delete.
app.get("/deleteImg/:imgName", async (req, res) => {
  try {
    const { imgName } = req.params;
    await fs.unlink(`./public/imgs/${imgName}`);
    res.sendFile(__dirname + "/public/collage.html");
  } catch (error) {
    res.status(500).send(error)
  }
});

app.listen(3000, () => console.log("Your app listening on port 3000"));