// Snippets de código para poder componer el programa


//Usado?: yes

res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 
// Plantilla HTL de la página de inicio

//Usado?:yes
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: 

// Este es el codigo que si metemos la palabra correcta nos saldra que no estamos logado y si es incorrecta ns saldra palabra incorrecta


//Usado?: yes
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: 

// Bloque de codigo para codificar la palabra secreta


//Usado?: yes
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: 

// Este es el Midelwares que sirve para validar si la palabra es correcta o no


//Usado?: yes
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 

// Esto es otro midelwares para verificar la sección y si no te da un error



//Usado?:yes
module.exports = {
  setup,
};
//--- Explicación:

// sirve para exportar los archivos y poder importarlos en otro archivo diferente

//Usado?: yes
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:

// sirve para exportar los archivos y poder importarlos en otro archivo diferente

//Usado?:yes
routes.setup(app);
//--- Explicación: 

// aplica un Miderwares a la ruta


//Usado?: yes
const middlewares = require('./middlewares');
//--- Explicación: 

// Esto importa un midelwares


//Usado?: yes
const bodyParser = require('body-parser');
//--- Explicación:

// importa la dependencia bodyparse

//Usado?: yes
const session = require('express-session');
//--- Explicación:

// importa la dependencia de la sesión de expres

//Usado?: yes
const express = require('express');
//--- Explicación:

// importa express

//Usado?: yes
const bodyParser = require('body-parser');
//--- Explicación:

//  importa la dependencia bodyparse
//Usado?: yes
const session = require('express-session');
//--- Explicación:

// importa la dependencia de la sesión de express

//Usado?: yes
const dotenv = require('dotenv');
//--- Explicación:

// importa la dependencia de la sesión de dotenv

//Usado?: yes
const dotenv = require('dotenv');
//--- Explicación:

// importa la dependencia de la sesión de dotenv

//Usado?: yes
dotenv.config();
//--- Explicación:

// llama al metodo que configura dotenv


//Usado?: yes 
dotenv.config();
//--- Explicación:

// llama al metodo que configura dotenv

//Usado?: yes
const middlewares = require('./middlewares');
//--- Explicación:


// importa el archivo middlerwares


//Usado?: yes
const routes = require('./routes');
//--- Explicación:


// importa el archivo routes
//Usado?: yes
const app = express();
//--- Explicación:

//  inicializa express

//Usado?: yes
const PORT = 4000;
//--- Explicación:

// guarda el numero de puerto en una variable


//Usado?: yes
middlewares.setupApp(app);
//--- Explicación: 

// llamar al middlewares


//Usado?: yes
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 

// Esto es una plantilla HTML con un boton para cerrar la sesion 

//Usado?: yes
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 

// permite el uso de variables de otros archivos




//Usado?: yes
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 

// codifica la palaba secreta para poder acceder a ella

//Usado?: yes
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 

// escucha al puerto para abrir el servidore


//Usado?: yes
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 

// pagina inicial que se muestra al abrir el buscador 


//Usado?: yes
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 

// permite cerrar la sección y si hay algun error lo muestra
