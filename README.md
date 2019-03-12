# REST API FAKE jobby

WEB Services para jobby

## Routes
### GET

GET /api/students/{username-coordinador}

#### GET /api/students

Respuesta JSON LIST

* `id` (int) Identificador unico del estudiante
* `username` (String) Identificador unico del estudiante
* `name` (String) Nombres del estudiante
* `lastname` (String) Apellidos del estudiante
* `email` (String) Email del estudiante
* `avatar` (String) Direccion avatar del estudiante
* `state` (String) Estado del estudiante en el proceso (busqueda, proceso, culminado)
* `university` (String) Identificador unico de la universidad
* `place` (String) Identificador unico de la empresa donde realiza práctica
* `city` (String) Ciudad 
* `assignments` (Array) Array jsons con assigments del estudiante 

#### GET /api/tutors

Respuesta JSON LIST

* `id` (int) Identificador único del tutor
* `username` (String) Identificador único del tutor
* `name` (String) Nombres del tutor
* `lastname` (String) Apellidos del estudiante
* `email` (String) Email del estudiante
* `avatar` (String) Direccion avatar del estudiante
* `university` (String) Identificador unico de la universidad
* `role` (String) Rol del usuario
* `students` (lista) Lista de estudiantes

#### GET /api/next-assignments

Respuesta JSON LIST

* `id` (String) Identificador unico de la entrega
* `username` (String) Identificador unico del usuario responsable de la asignacion
* `role` (String) Rol del usuario (practicante, tutor, jefe)
* `avatar` (String) URL foto
* `activity` (String) Nombre de la actividad
* `deliveryDate` (String) Fecha de entrega
* `deliveryDays` (String) Número de días para la entrega

#### GET /api/expired-assignments

Respuesta JSON LIST

* `id` (String) Identificador unico de la entrega
* `username` (String) Identificador unico del usuario
* `role` (String) Rol del usuario
* `avatar` (String) URL foto
* `activity` (String) Nombre de la entrega
* `expiredDate` (String) Fecha de la entrega
* `expiredDays` (String) Número de días vencidos

#### GET /api/places

Respuesta JSON LIST

* `id` (String) Identificador unico de la empresa o centro de prácticas
* `username` (String) Identificador unico del usuario (jefe o tutor empresarial)
* `name` (String) Nombre de la compañía
* `lastname` (String) Nombre del representante de la empresa
* `avatar` (String) URL foto
* `email` (String) Email de la empresa
* `city` (String) Ciudad de la empresa
* `students` (json list) Practicantes de la empresa
* `jobs` (json list) lista de vacantes

#### GET /api/users

Respuesta JSON LIST

* `id` (String) Identificador unico
* `username` (String) email
* `password` (String) password
* `email` (String) email
* `emailToken` (String) URL foto
* `emailVerified` (Boolean)
* `passwordVerified` (Boolean)
* `updatedAt` (Date) Fecha de actualización

#### GET /api/coordinators

Respuesta JSON LIST

* `id` (String) Identificador unico
* `email` (String) email
* `university` (String) codigo universidad
* `updatedAt` (Date) Fecha de actualización


## Instalación

1. Clone
2. Instalar paquetes
3. npm run start-dev
4. Y consuma!

You can see a live demo at **https://powerful-mountain-15092.herokuapp.com/**
