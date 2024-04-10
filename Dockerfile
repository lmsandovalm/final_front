# Utilizamos una imagen base que contenga Node.js y npm
FROM node:14-alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias e instalamos las dependencias del proyecto
COPY package.json package-lock.json ./
RUN npm install

# Copiamos el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Construimos la aplicación
RUN npm run build

# Exponemos el puerto en el que corre la aplicación (por ejemplo, el puerto 3000)
EXPOSE 3000

# Comando para iniciar la aplicación cuando el contenedor se ejecute
CMD ["npm", "start"]
