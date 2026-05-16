# Azure AI Services - Integración Local
Proyecto básico que conecta una interfaz web (HTML y JavaScript) con los servicios de Inteligencia Artificial de Azure (Computer Vision y Language Service) utilizando un servidor intermedio en Node.js para proteger las credenciales.

```
├── node_modules/
├── public/
│   ├── js/
│   │   ├── imagen.js
│   │   └── sentimientos.js
│   ├── index.html
│   ├── imagen.html
│   └── sentimientos.html
├── .env
├── package.json
└── server.js
``` 

## Requisitos e Instalación
Descargar los archivos del proyecto.

Abrir una terminal en la raíz del proyecto.

Instalar las dependencias con el siguiente comando:

```Bash
npm install
```

## Configuración de Credenciales
Clonar o crear un archivo llamado .env en la raíz del proyecto y añadir las llaves y endpoints de Azure. Los endpoints no deben terminar con una barra diagonal /:

```
Fragmento de código
AZURE_VISION_KEY=
AZURE_VISION_ENDPOINT=

AZURE_LANGUAGE_KEY=
AZURE_LANGUAGE_ENDPOINT=
```

Ejecución
Iniciar el servidor desde la terminal:

```
node server.js
```

Abrir el navegador web e ingresar a la siguiente dirección:
http://localhost:3000