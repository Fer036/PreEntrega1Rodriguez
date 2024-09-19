const products = [
    {
        id: 2,
        category: 'pc',
        name: 'PC Gamer Ryzen 9',
        price: 8970760,
        stock: 20,
        description: 'PC gamer | Ryzen 7 5700x | TGraf. Asus RTX 4090 | 32gb | 1tb gen4 | WaterCooler Asus',
        image: 'https://images.unsplash.com/photo-1660855551550-2696677aaf28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
        id: 3,
        category: 'sillagamer',
        name: 'Redragon Gaia',
        price: 300000,
        stock: 20,
        description: 'Hasta 150kg, ByN',
        image: 'https://imgs.search.brave.com/tQ_HysTplrfaO8uA277fjnPE61eT1IglIcGc99OoNN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWxh/YmVsbGEuc2NlbmU3/LmNvbS9pcy9pbWFn/ZS9GYWxhYmVsbGFD/Ty8yODcxMTA3MV8x/P3dpZD04MDAmaGVp/PTgwMCZxbHQ9NzA',
    },

    {
        id: 4,
        category: 'perifericos',
        name: 'Mouse Logitech Lift',
        price: 60000,
        stock: 20,
        description: 'Vertical | Rueda scroll premium',
        image: 'https://futurefive.co.nz/uploads/story/2023/12/30/compatible_lift.jpg',
    },

    {
        id: 5,
        category: 'perifericos',
        name: 'Teclado Redragon k530',
        price: 80000,
        stock: 20,
        description: 'Mecánico | 60% | Inalámbrico',
        image: 'https://mhazz.com.ar/wp-content/uploads/2021/05/Teclado-Redragon-Draconic-K530RGB-Blanco-muestra2.jpg',
    },

    {
        id: 6,
        category: 'perifericos',
        name: 'Micófono Logitech Yeti',
        price: 230000,
        stock: 20,
        description: 'USB | Dinámico | Supercardioide',
        image: 'https://i0.wp.com/clipset.com/wp-content/uploads/2024/01/Logitech-G-Yeti-GX-2.jpg?resize=1024%2C554&ssl=1',
    },

    {
        id: 7,
        category: 'perifericos',
        name: 'WebCam Logitech Brio',
        price: 145000,
        stock: 20,
        description: 'UltraHD 4k',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe-Ip5WbS7KL5Ez6j_t-nTau6R2czraUmAxA&s',
    },

    {
        id: 8,
        category: 'perifericos',
        name: 'Auricular Logitech',
        price: 190000,
        stock: 20,
        description: 'Inalámbrico | Micrófono | ZoneVibe100',
        image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/ce613208-3b8b-4710-a28f-ccdb418c2fa8.__CR0,0,600,450_PT0_SX600_V1___.jpg',
    },

    {
        id: 9,
        category: 'perifericos',
        name: 'Monitor Gigabyte Edge',
        price: 350000,
        stock: 20,
        description: 'Curvo 27" | 180hz | FullHD',
        image: 'https://cdn.mos.cms.futurecdn.net/EaoHEVTxhDUL7UkkDXRPSV-480-80.jpg',
    },

    {
        id: 10,
        category: 'coleccionables',
        name: 'Figura DC Cómics',
        price: 60000,
        stock: 20,
        description: 'Plomo pintado a mano | 18cm | Consultar personaje',
        image: 'https://acdn.mitiendanube.com/stores/057/977/products/19642300_1335818543203021_6910933671369919564_n11-93f83f8beaf6c0006c15049179949109-640-0.jpg',
    },

    {
        id: 11,
        category: 'coleccionables',
        name: 'Figura MARVEL',
        price: 80000,
        stock: 20,
        description: 'Plomo pintado a mano | 24cm | Consultar personaje',
        image: 'https://http2.mlstatic.com/D_NQ_NP_814182-MLA51417030213_092022-O.webp',
    },

    {
        id: 12,
        category: 'coleccionables',
        name: 'Funko POP Batman',
        price: 60000,
        stock: 20,
        description: '16cm | Consultar personaje',
        image: 'https://http2.mlstatic.com/D_NQ_NP_602931-MLM74218919443_012024-O.webp',
    },

    {
        id: 13,
        category: 'coleccionables',
        name: 'Funko POP Superman',
        price: 60000,
        stock: 20,
        description: '16cm | Consultar personaje',
        image: 'https://www.creativefabrica.com/wp-content/uploads/2022/11/17/Funko-Pop-Superman-Figurine-47091822-1.png',
    },

    {
        id: 14,
        category: 'coleccionables',
        name: 'La muerte de superman',
        price: '$154.890',
        stock: 20,
        description: 'Libro deluxe | 800 páginas',
        image: 'https://content.eccediciones.com/productos/13062/PORTADA_JPG_WEB_la_muerta_de_superman_LaSagaCompleta_DEF.jpg',
    },

    {
        id: 15,
        category: 'coleccionables',
        name: 'DC: héroes y villanos',
        price: 60000,
        stock: 20,
        description: 'Libro tapa dura | entrega 1 al 60',
        image: 'https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2021/10/18/1BB91C8A-ED78-4A61-8B04-FFBCBF91031E/98.jpg?crop=674,379,x122,y0&width=1900&height=1069&optimize=high&format=webply',
    },

    {
        id: 17,
        category: 'coleccionables',
        name: 'Stormtrooper',
        price: 480000,
        stock: 20,
        description: 'Casco | Talla única',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQT9jpQJX7d-3d1133Nu0fI1fgQe4WZ7wIQw&s',
    },

    {
        id: 18,
        category: 'coleccionables',
        name: 'Marvel: Infinity Gauntlet',
        price: 70000,
        stock: 20,
        description: 'Réplica 1:1 | Articulado',
        image: 'https://shop.knowhere.com.ar/wp-content/uploads/2022/10/8f6f4250-8712-46fb-8635-ae0539d376f0.jpg',
    },

    {
        id: 19,
        category: 'coleccionables',
        name: 'Mario Bros',
        price: 125000,
        stock: 20,
        description: 'Mario Bros figura',
        image: 'https://st2.depositphotos.com/1000647/44385/i/380/depositphotos_443858006-stock-photo-moscow-russia-august-2020-super.jpg',
    },

    {
        id: 20,
        category: 'coleccionables',
        name: 'Martillo de Thor',
        price: 380000,
        stock: 20,
        description: 'Réplica 1:3 | Estático',
        image: 'https://fbi.cults3d.com/uploaders/14511199/illustration-file/827b053c-c5a2-4953-9ca5-44ab0f95c538/Thor_Hammer-3-X3.jpg',
    },

    {
        id: 21,
        category: 'coleccionables',
        name: 'Casco de Ironman',
        price: 540000,
        stock: 20,
        description: 'Eléctrico | Jarvis',
        image: 'https://i.ebayimg.com/images/g/qRYAAOSwKDJf5Axn/s-l500.jpg',
    },

    {
        id: 22,
        category: 'coleccionables',
        name: 'Puños de Hulk',
        price: 33000,
        stock: 20,
        description: 'Plástico',
        image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/92acfb6b-e919-43b2-a165-4616aae4d072.b4a627073515595c9cb1780b83eabef3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    },

    {
        id: 23,
        category: 'coleccionables',
        name: 'Cuadro GameBoy',
        price: 33000,
        stock: 20,
        description: 'Cuadro Gameboy desarmado',
        image: 'https://i.etsystatic.com/26830312/r/il/384f51/3282045585/il_1080xN.3282045585_1vkz.jpg',
    },
];

export default products;