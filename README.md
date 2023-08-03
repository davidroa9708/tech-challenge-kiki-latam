
# Reto KIKI LATAM

## Requisitos para ejecucion en local:

1. nodejs y npm.
2. Una base datos postgresql o docker-compose.


## Pasos para ejecutar con docker:

1. Correr el comando `npm install`.
2. Crear el archivo .env teniendo encuenta los parametros obligatorios los cuales puede consultar en el fichero .env.example.
3. En caso de querer crear la base de datos postgres con Docker debera correr el comando `docker-compose up -d`.
4. Despues ejecute el comando `npm run start`, la aplicacion queda expuesta en el puerto 3000.

## Pasos para ejecutar las pruebas unitarias:

1. No se requiere correr el backend.
2. Ejecutar los test con el comando `npm run test`.

## Endpoints de Swagger:

1. Una vez se este ejecutando la aplicacion tiene a disposicion el enpoint `http://localhost:3000/swagger` para consultar todos los endpoints a su dispocision.

## Pruebas desde postman:

1. #### Enpoint /containers:
Devuelve los nombres de los contenedores que se deben
enviar teniendo en cuenta el presupuesto y los contenedores.

```http
http://localhost:3000/api/v1/containers METHOD POST
```

### Parametros Principales
| Parametro | Tipo     | ejemplo  | Descripción      |
| :-------- | :------- | :----- | :--------------- |
| `budget` | `number` |  13000|  Ingrese el presupuesto en moneda local (COP) |
| `containers` | `Container[]` | [Container](#parametros-container) | Ingrese los campos del contenedor los cuales se definen en la siguiente tabla |

### Parametros Container
| Parametro | Tipo     | ejemplo  | Descripción      |
| :-------- | :------- | :----- | :--------------- |
| `name` | `string` |  contenedor1| Ingrese el nombre del contenedor |
| `transport_cost` | `number` |  5000| Ingrese el costo de transporte |
| `value` | `number` |  5000| Ingrese el valor del contenedor |


### Parametros para realizar pruebas

```json
{
  "budget": 13000,
  "containers": [
    {
      "name": "contenedor1",
      "transport_cost": 5000,
      "value": 5000
    },
    {
      "name": "contenedor2",
      "transport_cost": 6000,
      "value": 10000
    },
    {
      "name": "contenedor3",
      "transport_cost": 7000,
      "value": 8000
    }
  ]
}
```


2. #### Enpoint /stats:
Devuelve un documento Json con estadísticas que muestran el valor total en dolares que la aplicación a despachado, el valor total en dolares de los contenedores que la aplicación no a despachado y por ultimo el presupesto total.

```http
http://localhost:3000/api/v1/stats  METHOD GET
```
No requiere parametros

