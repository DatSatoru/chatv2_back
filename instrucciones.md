# Recuperación de los 5 últimos mensajes

- Cuando se conecte un nuevo cliente -> recuperar los 5 últimos mensajes de la BD
    - ¿Cómo se recuperan los 5 últimos?
- Emitimos un evento 'chat_init' únicamente para el cliente que se conecta
    - ¿Cómo emitimos solo para el que se conecta?
    - Los datos para chat_init

```json
{
    "socket_id"
    "arr5UltimosMensajes"
}
```

- En la aplicación de angular,
    - Recuperamos el evento 'chat_init'
    - Mostramos los 5 últimos mensajes

## Registro - Login

### BACK
- Integrar una aplicación de express (API)
- Registro: POST /api/users/register
- Login: POST /api/users/login
- Modelo de Mongoose para User

### FRONT
- Modificar config de app
    - provideHttpClient()
- Rutas y páginas para registro y login
- Servicio para Users
- Formulario de registro y de login






- AuthGuard
- Resolver / Decode Token
- Asociar los mensajes a un usuario concreto

### SUBIR TODO A PRODUCCIÓN