# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y las dependencias de la aplicación
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]

