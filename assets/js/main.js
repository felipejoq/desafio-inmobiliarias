import { getRentRealStates } from "./data/rent.data.js";
import { getSalesRealStates } from "./data/sale.data.js";

const salesRealStateElement = document.querySelector('#venta > .row');
const rentsRealStateElement = document.querySelector('#alquiler > .row');

const getPageLocation = () => {
    const arrPageLocation = location.href.split('/');
    return arrPageLocation[arrPageLocation.length - 1].toLowerCase();
}

const getTemplate = async (realState) => {
    return `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${realState.src}" class="card-img-top" alt="Imagen del departamento"/>
                        <div class="card-body">
                            <h5 class="card-title">
                                ${realState.title}
                            </h5>
                            <p class="card-text">
                                ${realState.description}
                            </p>
                            <p>
                                <i class="fas fa-map-marker-alt"></i> ${realState.location}
                            </p>
                            <p>
                                <i class="fas fa-bed"></i> ${realState.bedrooms} Habitaciones |
                                <i class="fas fa-bath"></i> ${realState.baths} Baños
                            </p>
                            <p>
                                <i class="fas fa-dollar-sign"></i> ${realState.price}
                            </p>
                            <p class="${realState.smoke ? 'text-success' : 'text-danger'}">
                                ${realState.smoke ? '<i class="fas fa-smoking"></i> Permitido fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
                            </p>
                            <p class="${realState.pets ? 'text-success' : 'text-danger'}">
                                ${realState.pets ? '<i class="fas fa-paw"></i> Mascotas permitidas' : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}
                            </p>
                        </div>
                    </div>
                </div>
            `;
}

const renderRealStates = async (type, count = 'all') => {
    let realStates;
    if (type === 'sale') {
        realStates = await getSalesRealStates();
    } else if (type === 'rent') {
        realStates = await getRentRealStates();
    }

    if (count === 'all') {
        count = realStates.length;
    }

    let htmlString = '';
    for (const [index, realState] of realStates.entries()) {
        htmlString += await getTemplate(realState);
        if (index >= count - 1) {
            break;
        }
    }

    if (type === 'sale') {
        salesRealStateElement.innerHTML = htmlString;
    } else if (type === 'rent') {
        rentsRealStateElement.innerHTML = htmlString;
    }
}

const runApp = async () => {
    if (getPageLocation() === '' || getPageLocation() === 'index.html') {
        await renderRealStates('sale', 3);
        await renderRealStates('rent', 3);
    } else if (getPageLocation() === 'propiedades_alquiler.html') {
        await renderRealStates('rent');
    } else if (getPageLocation() === 'propiedades_venta.html') {
        await renderRealStates('sale');
    }
}

runApp()