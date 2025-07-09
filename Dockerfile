# Etapa de construcción
FROM node:18 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package.json package-lock.json* ./

# Instala dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye el proyecto Vite (para producción)
RUN npm run build

# Etapa para servir archivos estáticos
FROM nginx:stable-alpine

# Copia los archivos construidos al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuración personalizada de Nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80 para servir contenido
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
