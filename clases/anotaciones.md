# CLASE 03: JSX, WebPack & Transpiling. 

## Instalación de chakra:
>> UI - User interfaz
>> https://v2.chakra-ui.com/getting-started

```sh
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

```
## Sugar Syntax: 
>> Es una abreviación que tiene el objetivo de hacer más fácil y eficiente su utilización. 

## Retrocompatible: 
>> Tener en cuenta qué distribución tiene hoy el mundo, así como nuestro target de usuarios.

>> statcounter => GlobalStats.

>> Usar fetch => can i use....?: Muestra la compatibilidad de las distintas funciones en cada navegador. 
***** https://caniuse.com/ *****

>> Polyfills: permite hacer compatible la app con navegadores antiguos. 

## WEBPACK:
>> Es un module bundler o empaquetador de módulos. 
>> Construye la app leyendo uno por uno los archivos, y va empaquetando los archivos según su tipo. 

```sh
npm run build (crea carpeta dist para subir el archivo). 
```
----------------------------------------------------------
>> EJECT: Es una acción permantente que permite tener un control más específico del building ==> NO HACERLO.
```sh
npm run eject
```

## Transpiling:
>> Es el proceso de convertir código escrito en un lenguaje, a otro lenguaje representativo para simplificar la escritura del lenguaje. Logran niveles de simetricidad y simbiosis con el lenguaje original. 

>> Transpilador por defecto que se utiliza es **BABEL JS**

## JSX:
>> Es una extensión de JS recomendada para trabajar en react. 

<!-- ///////////////////////////////////////////////////// -->

>> CODEANDO: 
```sh
const App = () => {
    /* -------------------------------------------- */
    // Aplicar estilos desde el códgigo JSX.
    const isBlue = true;
    const myStyle = {
        color: isBlue ? 'blue' : 'red',
        backgroundColor: 'red',
        fontSize: '2rem'
    }

    return(
        // <div className='my-class'> Hola mundo!</div>
        // <div style={{backgroundColor: 'red', fontSize: '2rem'}}>Hola mundo2!</div>
        <div style={myStyle}>
            Hola mundo3!
        </div>
    )
    /* -------------------------------------------- */
};
```

<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->

# CLASE 04: Components I.
## Componentes:
>> Es una porción de código.
>> Única responsabilidad (hace una sola cosa).
>> Los componentes deben tener el nombre con la primera letra en mayúscula.

## Chakra: 
>> Templates: facilitan el código con plantillas ya creadas. 
>> Geting started: importar en App.jsx para que funcione el proveedor de Chakra. (Provee datos).

>> Importar cada componente a App.jsx

## Estados: 
>> Valor del componente. 
>> Se crea con hooks.

### Los hooks:
>> son funciones ya definidas por react que permiten manipular ciertas acciones, como el estado del componente. 

```sh
>> useState: Permite crear un estado en un componente funcional.
```
1. Se deine la variable. 
2. [variable, parámetro]
3. sintaxis: 
```sh
    const [count, setCount] = useState(0);
```
<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->
# Pre-entregas:
=> Carpeta MainLayout con el componente principal con el contenido de la página.

=> Existen varios MainLayout, por ejemplo cuando el cliente está logueado y cuando no lo está. 

<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->

# CLASE 05: Components II.

## Props: 
>> No son valores fijos, pueden ser cualquier cosa.

## Children: 
>> Permite proyectar, transcluír uno o más componentes uno dentro del otro. 

### Relación entre Props y Children:
>> React inyecta automáticamente children en las props, sólo si encuntra alguno. 
>> Si agregamos children en el JSX, lo inyecta como objeto si es único o como array si son muchos. 

## Ciclos de vida: 
>> Serie de estados por los cuales pasan los componentes a lo largo de su existencia. El primer paso es la inicialización, luego:  

1. MONTAJE: se produce la primera vez que el componente va a generarse, incluyéndose en el DOM.
2. ACTUALIZACIÓN: se produce cuando el componente generado se está actualizando. 
3. DESMONTAJE: se produce cuando el componente se elimina del DOM. 

>> Class based - eso se realizaba antes, hoy se realiza con useEffect():
1. componentWillMount(): es de tipo montaje, se ejecuta antes del primer renderizado del componente.
2. componentDidMount(): método de montaje, sólo se ejecuta del lado del cliente, se produce inmediatamente después del primer renderizado y al invocarlo ya está disponibles los elementos asociados al componente del DOM.
3. componentWillReceiveProps(): método de actualización que se invoca cuando las propiedades se van a actualizar, aunque no en el primer renderizado del componente, por lo que no se invoca antes de inicializar las propiedades por primera vez.

>> El children cambia todas las veces necesarias hasta que el componente que lo generó lo destruya. 

## HOOKS: 
=> import {hook} from 'react';

### Básicos: 
>> useState: 
crear un estado. 

>> useEffect: 
sincronizar componentes con sistemas externos. Controlar efectos secundarios provocados por cambios de estados. 

```sh
useEffect(fn) => todos los estados.
useEffect(fn, []) => ningún estado.
useEffect(fn,[esos, estados])
```

    recibe dos argumentos. 
        1 función de callback.
        2 array de dependencias que indica qué estados deben cambiar para que se ejecute la función del primer arg.
    
    se ejecuta siempre después del renderizado y al menos una vez al montar el componente.

La función se ejecuta **al menos una vez** al montar el componente, y la función callback se ejecutará al menos una vez al desmontar el componente.

En caso de tener dependencias de estados, la limpieza se ejecuta antes de volver a ejecutar el effect.

```sh
Acción => Limpieza => Acción => Limpieza
```
Debe ocuparse de una sola tarea. 

```sh
useEffect(() => {
    función de callback
}, [estado que cambia]);
```

**Ejemplo:**
    // Conviene importarla de esta manera:
    // Se ejecuta después de que el componente se renderiza, en el montaje. 

```sh
** 1) Evitar este método, ya que no tiene control.**
function App() {
    const [ state, setState ] = useState(0);

    React.useEffect(() => {
        console.log('Se renderizó');
    }); 

    return (
        .....
        <button onClick ={() => {setState(state+1);}}>
            hook useEffect.
        </>
    )
}
```
```sh
** 2) useEffect controlado, con dependencias vacías**
function App() {
    const [ state, setState ] = useState(0);

    React.useEffect(() => {
        console.log('Se renderizó');
    }, []); 

    return (
        .....
        <button onClick ={() => {setState(state+1);}}>
            hook useEffect.
        </>
    )
}
```
```sh
** 3) useEffect controlado, con dependencias**
function App() {
    const [ state, setState ] = useState(0);

    React.useEffect(() => {
        console.log('Se renderizó');
    }, [state]); 

    return (
        .....
        <button onClick ={() => {setState(state+1);}}>
            hook useEffect.
        </>
    )
}
```

>> useContext: 
usar contexto


### Adicionales: 
>> useReducer
>> useCallback
>> useMemo

>> useRef: 
crear una referencia mutable. Retorna un objeto con una propiedad current, que apunta a un valor mutable. Se suele utilizar para acceder a elementos del DOM y modificarlos. (útil cuando se utilizan librerías de tercero). También pueden utilizarse para mantener valores persistentes en el componente que no deben estar expuestos al estado del mismo.

```sh
    const objeto = useRef(null);

    const handleClick = () => {
        objeto.current.funcion = 'objeto content reference'
    }
    ...
    return (
        <>
        <NavBar />
        {children}
        <div ref={objeto}> footer <div>
        <button onClick={handleClick}> Click </>
        </>
    )

    // Al hacer click, el contenido del footer cambiará // 
```

>> useImperativeHandle
>> useLayoutEffect
>> useDebugValue
>> useDeferredValue
>> useTransition
>> useId


### De librerías: 
>> useSyncExternalStore
>> useInsertionEffect

## RENDER Y EFECTOS: 
Cuando se produce un cambio de estado, se ejecuta un nuevo proceso de renderizado para ese componente y sus componentes hijos.

Durante este proceso, se ejecuta de nuevo las funciones de los componentes para generar un nuevo árbol de elementos de la UI. 

Se puede llamar, a una api externa para controlar esos efectos.
O utilizamos el useEffect().

<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->

# CLASE 06: PROMISE, ASINCRONÍA Y MAP: 
>> Trabajamos con la librería AXIOS. 

## PROMISE: 
>> Es código no bloqueante.
Es un objeto que permite representar y seguir el ciclo de vida de una tarea/operación (función).

>> Existe una API => JSPromise: 
Crea y ejecuta distinas operaciones de manera asincrónica mediante promesas.

### Estados posibles:
>> *PENDING* - pendiente - => (*full filled* - completada - || *rejected* - rechazada -).

### SINCRONÍA VS ASINCRONÍA: 
La sincronicidad o asincronicidad depende de qué tarea le demos. Por defecto y diseño, lo úncio que ocurre de manera asincrónica es la entrega del resultado.

>> Sincronía: 
**Bloqueante** : *Cliente*: make request /petición/ ---- *Server*: waiting for response /espera la respuesta/ ---- *Cliente* /recibe respuesta/.

>> Asincronía: 
**No bloqueante** *Cliente*: make request /petición/ ---- *Cliente*: continue working /ejecuta código normalmente/ --- *Cliente*: get response, do something /obtiene respuesta/.
-------------------------------------------- *Server*: working with promise /trabaja en el la petición como promesa / --------------------------------------


### EJEMPLO: 
```sh
App.jsx

Asincrónica ------------------------

const myPromise = new Promise((resolve, reject) => {
    const nuumber = 5;

    if (number === 5) {
        resolve('El numero es 5');
    } else {
        ('El número no es 5');
    };
});


function ejecutarTareaNoBloqueante() {
    setTimeOut(() => {
        console.log('Tarea no bloqueante terminada');
    }, 3000);
};

console.log('Inicio de tarea'); (1)
ejecutarTareaNoBloqueante(); (3)
console.log('Fin de tarea'); (2)
```

```sh
Sincrónica --------------------------

function ejecutarTareaBloqueante() {
    const start = Date.now();
    while(Date.now() - start < 3000 ) {
        // Espera 3 segundos
    };
    console.log('inicio de tarea');
    ejecutarTareaBloqueante();
    console.log('Fin de tarea');
};
```

## ASINCRONÍA:
>> Para realizar varios procesos al mismo tiempo. 

>> Se utiliza:
```sh
.then
```

>> Todos los operadores then y catch son **Encadenables**,
```sh
.then().catch().then().then()
```

>> En algunos nav está disponible:
```sh
.finally()
```
Se llama al final de la cadena para saber cuando terminan los procesos completados o rechazados. 

>> Ejemplo de uso en promesa con los operadores:

```sh
myPromise
    .then((res) => {
    console.log(res);
}) 
    .catch((err) => {
    console.log(err);
}) 
    .finally(() => {
    console.log('Se ejecuta cuando finaliza la promesa')
}); 

```


**Las funciones callback son llamadas luego de la ejecución actual del bucle de eventos**

**Las funciones callback añadidas con .then() serán llamadas después del éxito o fracaso de la operación**

## MAP:
Función para mapear datos, los cuales se pueden mutar. 

>> Ejemplo:
```sh
myArray.map((item) => {
    console.log(item + 1);
});
```

>> Uso en REACT:
En el caso de realizar una base de datos en archivo interno para utilizar (js o json), lo utilizamos para poder recorrer y obtener cada uno de los items del array.


<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->


# CLASE 07: CONSUMIENDO API's:

## PARADIGMAS DE INFORMACIÓN:
La mayoría de las app generan experiencias de usuario gracias a la conexión a servicios de datos.
Carecer de una conexión a un servicio de datos es limitante. 

>> ---------------------- Client-Server Model ---------------------- >>
Server => PC / Celular / Notebook.

>> Existen dos protagonistas: **Cliente y Servidor.**
1. El cliente solicita la info.
2. El servidor envía la respuesta.
3. Fin de la comunicación.

## PUSH:
Es una forma de comunicación de celulares. Se invierte la lógica.
No gasta recursos. 
Ej: MQTT (protocolo)

1. El cliente se **suscribe**. (ejemplo activar notificaciones)
2. El servidor elige el momento del inicio de la transferencia y la envía a un servicio.
3. El servicio se la provee al cliente. 

>> Sirve para generar **Engagement**.

## POLLING:
>> No es óptima. Gasta muchos recursos. 

Configura nuestros client para que estén constantemente pidiendo información nueva de manera indefinida. 

## REQUEST VIA HTTP/S:
Ejemplo: https://dummyjson.com/docs / product / 123 => id que funciona como parámetro para traer el producto que queremos. 

Ayuda a realizar una solicitud a un servidor, y permite establecer un protocolo de transferencia definido por: 

1. URL.
2. GET(obtener) - POST(crear) - PUT(actualizar) - DELETE(borrar) => (métodos).
3. Parámetros (query o url). 
4. Headers. (Configuración que tiene la llamada).
5. Body. (Contenido de un POST, envia un token único con información).

-----------------------------------------------------------------------------
### CODEANDO
Lo válido es tener una API para las peticiones. 
Trabajamos de manera estática con un JSON para explicación. 

**Segunda pre-entrega puede hacerse mediante API o JSON**

>> UTILIZAMOS **AXIOS** => librería para peticiones mediante URL.

>> ***Dummyjson*** es una api que sirve para practicar. 

```sh
Consola: npm i axios
```

=>> Solicito todos los productos con axios.
=>> Usar siempre useEffect para llamar a las apis.

-----------------------------------------------------------------------------

<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->


# CLASE 08: WORKSHOP.

## ARCHIVOS BARRIL: 
>> Archivos .js en cada carpeta de cada componente para exportar todos los elementos de dicho componente. 
>> El principal (en la carpeta contenedora) contiene todas las exportaciones.
>> Sirve para organizar nuestro fichero.

## HOOKS:
Son funciones de React para ciertas tareas.

>> Custom Hooks: 
La primer letra es minúscula. Empiezan con 'use'.
Ej: useProduct.jsx

##### CAMBIAR HOOKS COSTUMIZADOS AL CAMBIAR LA BASE DE DATOS POR UNA API #####

-----------------------------------------------------------------------------

<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->


# CLASE 09: ROUTING Y NAVEGACIÓN:

## SPA: single page aplication:
React trabaja con una aplicación de página simple. 

## Navegabilidad:
Permite entender dónde están parados los users y marcar secciones en las que tienen más interés. Permite controlar las acciones de ir adelante, volver y conocer el nav history. Además, entender la estructura (crawlers) de la app y proveer acceso optimizado/visibilizado a las distintas secciones. 

>> Escalabilidad.
>> Simpleza para manipular y modificar el código. 
>> Mejora la UI. 

## ORGANIZAR LA APP / ROUTING:
>> Puntos de una app:
1. Inicio. *Ruta/ - Ruta/componenteInicio/:id*
2. Búsqueda. *Ruta/componenteInicio/item/:id*
3. Detalle. */componenteCarrito*
4. Confirmación. */componenteCheckOut*
5. Fin.

## REACT ROUTER:
>> Instalación: 
```sh
npm i react-router-dom
```
>> Configuración:
1. MainRouter.jsx:
```sh
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

2. Agregar funcionalidad: 
```sh
<BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path='' element= {<Page/>} />
        ...
    </Routes>
<BrowserRoutes>
```

>> Navegar una ruta: 
```sh
import React from 'react';
import { Link } from 'react-router-dom';

<etiqueta>
    <Link to={ '/pagina' }>
        título
    </Link>
</etiqueta>
```
>> Parámetro de URL: 
Es un dato dinámico que se puede pasar a una ruta.
```sh
<Route path='/:id'>
```


-----------------------------------------------------------------------------

<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->


# CLASE 10: EVENTOS:
>> ¿Qué es?:
Es un estímulo programático que puede ser provocado de manera automática o del resultado de una interacción del usuario con la UI.

## Tipo de eventos:
>> Eventos automáticos: 
Se genera por algún parámetro establecido de manera automática.

>> Manuales: 
Son las interacciones del usuario que producen alguna respuesta o efecto secundario.

## DOM Events:
>> Dispositivo/acción:
Mouse, input, keyboard, wheel, focus, etc.

>> Custom events:
Es posible definir eventos propios que disparen la info que queramos. 

## Event Listener:
Es un patrón de diseño que sirve para escuchar cuando un algo ocurre en algún elemento, librería o API y poder realizar una acción en consecuencia.

>> Configuración:
```sh
window.addEventListener('evento', referencia);
```

>> Removerlo después de utilizarlo:
```sh
return () => {
    console.log('desmontar evento');
    window.removeEventListener(referencia);
};
```
## React y eventos:
>> Synthetic events:
Los browsers suelen tener algunas variaciones en el contenido de los eventos, lo que hace difícil utilizarlos uniformemente en cada plataforma. Es por eso que React ayuda proveyendo una abstracción. 

1. Sirven para normalizar/estandarizar eventos.
2. Al registrar un evento onClick obtenendremos un evento sintético. 
3. Se destruyen al terminar la ejecución de la función vinculada.
4. Se puede acceder al evento nativo via evt.nativeEvent.

## Componentes basados en eventos: 
>> Unidirectional Symmetry:
Reacción (bajada de datos) => Acción (subida de eventos).

## Intercambiabilidad/Agnostic Behavior:
>> Intercambiabilidad: 
Implementando componentes de manera eficiente se puede generar un interccambio de guncionalidades sin mucho esfuerzo. 
Se puede generar variaciones del mismo componente con distinto layout y el mismo componente.

>> Abstracción:
Sirve como estrategia para ocultar el comportamiento interno de rendering  e implementación de change events. 

## Orientación a eventos:
1. Permite mover la lógica compleja a componentes de menor orden. 
2. Si ambos se comportan igual, el parent no lo sabrá aunque sus implementaciones sean distintas.
3. Permite que el parent se encargue del resultado final sin darle esa responsabilidad a sus children.

## Código en clases:
>> Creación de página Events.jsx + agregar en index.js;
>> Agregar en MainRouter.jsx;
>> Para agregar un addEventListener se utiliza dentro de un useEffect;
>> Se desmonta para que no entre en un bucle infinito de la función donde no lo deseamos tener;

```sh
const onScroll = () => {
    console.log('scrolling');
}
export const Event = () => {
    useEffect(() => {
        // Creación:
        window.addEventListener('scroll', onScroll);

        // Limpieza:
        return () => {
            console.log('componente desmontado');
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
};
```

-----------------------------------------------------------------------------

<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->


# CLASE 11: CONTEXT:
React trabaja con un flujo de datos unidireccional, y transmite los datos vía props.
Declarando un contexto podemos sacar todos los intermediarios. La variable debería ser global.

1. Permiten compartir un valor único cross-app-
2. Reducen el wrapper-hell (infierno de nesting);
3. No sólo pueden llevar values, sino cualquier tipo de fn, obj o referencia. 
4. Toman el valor del provider más cercano o el definido durante su declaración. 

/////

1. Puedo tener múltiples contextos del mismo corriendo en una app. 
2. El valor provisto por el hook de contexto será el del parent provider más próximo del árbol de mi componente. 

## Creación de un contexto: 
```sh
const ContextVariable = React.createContext();
```
>> Puedo darle un default value:
```sh
const ContextVariable = React.createContext(value);
```

## Context Provider:
Se debe envolver el nodo de React al que quiero que este provider propague hacia sus children. 

## Consumiendo un contexto:
```sh
import  React, { useContext } from 'react';

const ContextVariable = React.useContext();

function componentA2() {
    const isValueMode = useContext(ContextVariable);
    return <p> Modo del contexto: { isValueMode } </p>
}
```

## Declarando un Consumer (Modo alternativo):
Utilizando un consumer, podemos lograr un efecto similar, y si el value cambia React hará el re-render cuando cambbie el value del provider.
Son cómodos cuando no necesitamos el estado en el componente consumidor (ComponenteA2) para lograr otro efecto secundario. 

## Contexto dinámico: 
Pueden ser alterados en tiempo de ejecución, y sus efectos propagados al resto de los consumidores. 

## Configurando un Nodo Proveedor: 
1. Saber elefir cuál es el punto estratégico de mi app donde iniciaré el estado de ese context.
2. Combinarlo estratégicamente con un useState para poder mutarlo y que me auide a hacer trigger de renderings en consumers.

## Creando un Custom Provider: 
>> Context Dinámico:
1. Creamos un componente virtual de fachada.
2. Podemos agregar helpers.
3. Podemos hacer wrapping de cualquier nodo que quiera transformar en provider. 

## Consumir el Custom Provider: 
1. Envolvemos los componentes que querramos.
2. El custom Provider dará estado y hará sync con sus consumers de manera automática en updates.

## Código en clases: 
```sh
/CartWidget.jsx:

import { Box, Icon, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {
    const { cartState } = useContext(CartContext);

    return (
        <Box position='relative' display='inline-block' ml={4}>
            <Icon as={FaShoppingCart} w={5} h={5} />
            <Text
                position={'absolute'}
                top={'-2'}
                right={'-2'}
                bg={'red.500'}
                borderRadius={'50px'}
                color={'white'}
                px={1}
                fontSize={'0.6rem'}
            >
                {cartState}
            </Text>
        </Box>
    )
};
```

```sh
/CartContent.jsx:


import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState(0);

    return (
        <CartContext.Provider value={{ cartState }}> { children } </CartContext.Provider>
    );
};
```


-----------------------------------------------------------------------------

<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->


# CLASE 12: RENDERIZADO:

>> Rendering condicional:
Ejemplo: loading. Se condiciona que mientras esté cargando la página aparezca un spinner. Si la página se carga, aparecerá el contenedor con contenido. 
=> Elegimos que queremos renderizar.

>> ¿Para qué sirve?
1. Para aparecer y desaparecer nodos del render. 
2. Los eventos provocan dismounting y todos los efectos que ellos conlleva. 
3. Se llamará efecto de desmontaje y podremos detectarlo.
4. Podemos usar los cleanup effects para detectar algún dismounting si no sabemos con certeza si ocurre. 
5. A veces se producen sin internción y causan bugs o pérdida no intencionada del estado, dando inestabilidad.

>> ¿Que sucede cuando existe un cambio de estado en algún componente? 
En cada cambio de estado, el componente se renderiza. (el hijo).

>> React.memo:
Memoriza el estado en el que está ese elemento, lo que hace que no se renderice. 
No se debe usar indiscriminadamente. Se utiliza más que nada cuando tenemos código costoso o pesado para no afectar la performance de la página renderizándola. 
Cambia solamente cuando cambia la propiedad del mismo elemento envuelto. 

-----------------------------------------------------------------------------

<!-- ///////////////////////////////////////////////////// -->
<!-- ///////////////////////////////////////////////////// -->


# CLASE 13 y 14: FIREBASE

## WHYW:
Proceso de explorar nuevas tecnologías.
1. What?
Sorpresa, intriga. 

2. Hell Yeah!
Emoción de tener la respuesta y la adaptación.

3. What?
Cuando empezamos a usarla y no sabemos que estamos haciendo. 


## Desarrollo clásico:
1. SPA corre en el Browser
2. Consume API proviste por el BACKEND
3. Para llegar a la BASE DE DATOS accede y guarda vía SQL, noSQL, etc.