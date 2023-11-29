//---Iniciar proyecto en NODE: npm init -y  (el '-y' es para que ponga las configuraciones por defecto del proyecto)

//---Instalar express: npm install express --save (el '--save' es para que quede guardado en la configuración del proyecto de NODE (package.json)
//    que se está usando Expres, en el atributo 'dependencies')----

//---Después de hacer esto, verificar que el archivo 'main' (que es nuestro 'entry point') tenga el nombre correcto. Por defecto se llama 'index.js',
//   pero se puede cambiar en 'package.json'---

//---Después, dentro de 'package.json' en el objeto 'scripts' en su atributo 'test', configurarlo para que corra el script "node src/app.js" (o el nombre de nuestro entry point)

//console.log("Prueba npm");
// Correr con npm test

const path= require("path");

const express= require("express");

const app= express();

const port= process.env.port || 8000;

app.listen(port, () => console.log(`Servidor corriendo en: ${port}`));

app.use(express.static('public'));

console.log("el dirname es: ",__dirname);

/*---RUTAS---*/
//--Home--//
app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})
//--Registro--//
app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})
//--Login--//
app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})
