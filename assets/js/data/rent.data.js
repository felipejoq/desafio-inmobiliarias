const rent_properties = [
    {
        title: 'Villa de ensueño con vista a la montaña',
        src: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
        description: 'Una lujosa villa con impresionantes vistas panorámicas a las montañas',
        location: '123 Dreamy Valley, Majestic Peaks, CA 12345',
        bedrooms: 6,
        baths: 5,
        price: 8000,
        smoke: false,
        pets: false
    }, {
        title: 'Loft moderno en el corazón artístico',
        src: 'https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_1280.jpg',
        description: 'Amplio loft con diseño vanguardista en una zona llena de creatividad',
        location: '456 Art Avenue, Creative District, CA 23456',
        bedrooms: 1,
        baths: 2,
        price: 2800,
        smoke: true,
        pets: true
    }, {
        title: 'Casa junto al lago con muelle privado',
        src: 'https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_1280.jpg',
        description: 'Acogedora casa ubicada junto a un sereno lago y con su propio muelle privado',
        location: '789 Lakeside Lane, Tranquil Waters, CA 34567',
        bedrooms: 4,
        baths: 3,
        price: 5000,
        smoke: false,
        pets: true
    }, {
        title: 'Apartamento estilo vintage en edificio histórico',
        src: 'https://cdn.pixabay.com/photo/2017/02/24/12/19/apartment-2094666_1280.jpg',
        description: 'Encantador apartamento con detalles vintage en un edificio histórico restaurado',
        location: '123 Retro Street, Heritage Quarters, CA 45678',
        bedrooms: 2,
        baths: 1,
        price: 2200,
        smoke: true,
        pets: false
    },
    {
        title: 'Casa futurista con domótica avanzada',
        src: 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
        description: 'Una casa de vanguardia equipada con tecnología domótica de última generación',
        location: '456 Innovation Road, Tech Haven, CA 56789',
        bedrooms: 5,
        baths: 4,
        price: 7000,
        smoke: false,
        pets: true
    }, {
        title: 'Apartamento tranquilo en zona arbolada',
        src: 'https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg',
        description: 'Apartamento sereno rodeado de naturaleza en un vecindario arbolado',
        location: '789 Nature Lane, Woodland Retreat, CA 67890',
        bedrooms: 3,
        baths: 2,
        costo: 3000,
        smoke: false,
        pets: true
    }, {
        title: 'Casa playera con acceso directo a la playa',
        src: 'https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg',
        description: 'Espaciosa casa con puerta de acceso directo a la hermosa playa de arena blanca',
        location: '123 Beachfront Boulevard, Coastal Paradise, CA 78901',
        bedrooms: 4,
        baths: 3,
        price: 6000,
        smoke: true,
        pets: false
    }, {
        title: 'Apartamento en rascacielos con vistas impresionantes',
        src: 'https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_1280.jpg',
        description: 'Elegante apartamento en un rascacielos con vistas panorámicas de la ciudad',
        location: '456 Sky High Avenue, Urban Heights, CA 89012',
        bedrooms: 2,
        baths: 2,
        price: 3500,
        smoke: false,
        pets: true
    }, {
        title: 'Casa de campo moderna con piscina infinita',
        src: 'https://cdn.pixabay.com/photo/2016/10/16/03/33/vail-1744289_1280.jpg',
        description: 'Moderna casa de campo con una relajante piscina infinita y diseño contemporáneo',
        location: '789 Serenity Road, Countryside Oasis, CA 90123',
        bedrooms: 3,
        baths: 4,
        price: 4500,
        smoke: true,
        pets: true
    }
]

export const getRentRealStates = async () => {
    return rent_properties;
}