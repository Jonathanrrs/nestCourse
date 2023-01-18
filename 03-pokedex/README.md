<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nest/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

4. Reconstruir la base de datos con la semilla

```
localhost:3000/api/v2/seed
```

5. Clonar el archivo **.env.templat** y renombrar la copia **.env**
6. Llenar las variables de entorno definidas en el **.env**
7. Ejecutar la app en dev:

```
yarn start:dev
```

## Stack usado

* MongoDB
* Nest

# Production build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
