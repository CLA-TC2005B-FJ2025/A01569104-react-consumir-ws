# react-consumir-ws

Este es un proyecto básico de React en donde se consume un servicio web con GET.

## Prerequisitos
Es importante que exista un servidor web como el del repositorio con petición GET /test/<id> que regrese JSON con id, name, email. Puedes revisar como es llamado en api.js y Consulta.js, por lo que será necesario modificar la línea 
   ```sh
   const response = await axios.get('http://localhost:2025/test/' + user_id, {
    });
   ```
con la URL del servicio web

## Instalación y ejecución

1. Clona el repositorio:
   
   ```sh
   git clone https://github.com/TMP-DESARROLLO-WEB/test-react.git
   cd test-react
   ```

2. Instala las dependencias:
   
   ```sh
   npm install
   ```

3. Inicia el servidor:
   
   ```sh
   npm start
   ```

4. Abre en tu navegador en la liga señalada

## Estructura del proyecto
```
📂 react-starter-project
 ┣ 📂 src/ → Código fuente de React
 ┣ 📂 .devcontainer/ → Configuración para Codespaces
 ┣ 📜 README.md → Instrucciones
 ┣ 📜 .gitignore → Archivos a ignorar
 ┣ 📜 package.json → Dependencias
 ┣ 📂 public/ index.html → Punto de entrada
```
## Tecnologías
- React
- GitHub Codespaces
- Node.js

