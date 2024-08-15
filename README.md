# CLASE 03:

## Instalación de chakra:
>> UI - User interfaz
>> https://v2.chakra-ui.com/getting-started

```sh
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

```
<!-- ///////////////////////////////////////////////////// -->
## Sugar Syntax: 
>> Es una abreviación que tiene el objetivo de hacer más fácil y eficiente su utilización. 

<!-- ///////////////////////////////////////////////////// -->
## Retrocompatible: 
>> Tener en cuenta qué distribución tiene hoy el mundo, así como nuestro target de usuarios.

>> statcounter => GlobalStats.

>> Usar fetch => can i use....?: Muestra la compatibilidad de las distintas funciones en cada navegador. 
***** https://caniuse.com/ *****

>> Polyfills: permite hacer compatible la app con navegadores antiguos. 

<!-- ///////////////////////////////////////////////////// -->
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

<!-- ///////////////////////////////////////////////////// -->
## Transpiling:
>> Es el proceso de convertir código escrito en un lenguaje, a otro lenguaje representativo para simplificar la escritura del lenguaje. Logran niveles de simetricidad y simbiosis con el lenguaje original. 

>> Transpilador por defecto que se utiliza es **BABEL JS**

<!-- ///////////////////////////////////////////////////// -->
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

# CLASE 04: 
## Componentes:
>> Es una porción de código.
>> Única responsabilidad (hace una sola cosa).
>> Los componentes deben tener el nombre con la primera letra en mayúscula.

## Chakra: 
>> Templates: facilitan el código con plantillas ya creadas. 
>> Geting started: importar en App.jsx para que funcione el proveedor de Chakra. (Provee datos).

>> Importar cada componente a App.jsx

<!-- ///////////////////////////////////////////////////// -->

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

