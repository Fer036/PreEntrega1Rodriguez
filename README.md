# Alumna: María Fernanda Rodríguez.

## Página firebase: https://geekstoreproducts-934c7.web.app

# PROYECTO GEEKSTORE:
### Se trata de un e-commerce dedicado a la venta de componentes para armar un set-up, además de artículos de colección. Está destinado a la venta al público, con la posibilidad de crear un usuario para realizar las compras desde la web. 

## CARACTERÍSTICAS DE LA PÁG: 
### Resumen: 
- Navegación fácil entre categorías de productos
- Funcionalidad de carrito de compras
- Procesamiento de pagos
- Registro e inicio de sesión de usuarios

>> Componentes: 
// NavBar: Logo, secciones y carrito de compra. 
// Footer: Copyright y redes sociales.
1. Home: (/) Contiene el nombre del comercio, a qué se dedica, un banner de novedades y la lista de productos. El logo nos dirige a esta página. 
2. Categoría: (/category) Lista de categorías de los productos disponibles. 
3. Contacto: (/contact) Medios de contacto con los proveedores: redes sociales y formulario de contacto.
4. Login: (/login) Medio para registrarse o ingresar a la cuenta del usuario. Sólo ingresando puede realizar las compras. También está la funcionalidad para cerrar sesión del usuario activo. Valida usuario creado y contraseña.
5. Carrito: (/chekout) Detalle de compra, permite agregar o quitar productos y muestra el total de la misma. 
6. Payment: (/payment) Último paso para confirmar la compra, se deben completar los datos correspondientes y genera un número de orden del pedido. 

## TECNOLOGÍAS QUE USE: 
>> ReactJS
>> Firebase
>> ChakraUI
>> Vite

## LA ESTRUCTURA DEL PROYECTO:
```sh
/src
-../assets
--.../img
-../components
--.../CartDetails
--.../CartWidget
--.../FeatureProducts
--.../Footer
--.../HomeBanner
--.../ItemDetailContainer
--.../ItemListContainer
--.../loginSignup
--.../Navbar
-../context
--.../CartContext
-../data
-../firebase
-../helpers
-../hooks
-../pages
-../routes
/App.jsx
/Main.jsx
/index.html
```

# Notas:
>> Se mantuvieron los archivos helpers y data como referencia de cómo se construyó mi proyecto. 