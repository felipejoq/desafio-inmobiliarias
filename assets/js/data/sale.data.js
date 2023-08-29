const sales_properties = [
    {
        title: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        location: '123 Luxury Lane, Prestige Suburb, CA 45678',
        bedrooms: 4,
        baths: 4,
        price: 5000,
        smoke: false,
        pets: false
    }, {
        title: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        description: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        location: '789 Mountain Road, Summit Peaks, CA 23456',
        bedrooms: 2,
        baths: 1,
        price: 1200,
        smoke: true,
        pets: true
    }, {
        title: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        description: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        location: '567 Skyline Avenue, Skyview City, CA 56789',
        bedrooms: 3,
        baths: 3,
        price: 4500,
        smoke: false,
        pets: true
    }, {
        title: 'Casa moderna con jardín exuberante',
        src: 'https://cdn.pixabay.com/photo/2013/08/30/12/56/holiday-house-177401_1280.jpg',
        description: 'Esta casa moderna cuenta con un amplio jardín exuberante perfecto para relajarse',
        location: '456 Garden Street, Greenview Estates, CA 34567',
        bedrooms: 5,
        baths: 4,
        price: 3800,
        smoke: false,
        pets: true
    }, {
        title: 'Apartamento en el corazón de la ciudad',
        src: 'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884_1280.jpg',
        description: 'Este apartamento se encuentra en una ubicación privilegiada en el centro de la ciudad',
        location: '789 Urban Avenue, Downtown Central, CA 45678',
        bedrooms: 1,
        baths: 1,
        price: 1800,
        smoke: true,
        pets: false
    }, {
        title: 'Casa rústica en el campo',
        src: 'https://cdn.pixabay.com/photo/2014/12/27/14/37/cottage-581080_1280.jpg',
        description: 'Una encantadora casa rústica situada en medio de un tranquilo entorno campestre',
        location: '123 Countryside Road, Serene Fields, CA 12345',
        bedrooms: 3,
        baths: 2,
        price: 2500,
        smoke: true,
        pets: true
    }, {
        title: 'Apartamento elegante con vista al mar',
        src: 'https://cdn.pixabay.com/photo/2018/01/23/06/58/modern-minimalist-lounge-3100785_1280.jpg',
        description: 'Elegante apartamento con impresionantes vistas panorámicas al océano',
        location: '456 Oceanview Avenue, Coastal Heights, CA 23456',
        bedrooms: 2,
        baths: 2,
        price: 3200,
        smoke: false,
        pets: true
    }, {
        title: 'Casa histórica con encanto colonial',
        src: 'https://cdn.pixabay.com/photo/2017/10/06/13/58/old-village-2823175_1280.jpg',
        description: 'Una casa histórica que conserva su encanto colonial y detalles arquitectónicos únicos',
        location: '789 Heritage Lane, Colonial District, CA 34567',
        bedrooms: 4,
        baths: 3,
        price: 4200,
        smoke: false,
        pets: false
    }, {
        title: 'Apartamento minimalista en torre moderna',
        src: 'https://cdn.pixabay.com/photo/2018/05/02/09/02/baby-boy-3368017_1280.jpg',
        description: 'Moderno apartamento con diseño minimalista en una torre residencial exclusiva',
        location: '123 Modern Tower, Contemporary Heights, CA 56789',
        bedrooms: 1,
        baths: 1,
        price: 2000,
        smoke: true,
        pets: true
    }
]

export const getSalesRealStates = async () => {
    return sales_properties;
}