import { propiedades_venta } from './propiedades.js'

let htmlVentas = ''

for (let venta of propiedades_venta) {
    htmlVentas += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${venta.src}" class="card-img-top" alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">${venta.nombre}</h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i>${venta.ubicacion}</p>
                    <p>
                    <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${venta.baños} Baños</p>
                    <p>
                    <i class="fas fa-dollar-sign"></i>${venta.costo}
                    </p>
                    ${venta.smoke ? 
                    `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` 
                    : `<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
                    ${venta.pets ? 
                    `<p class="text-success">
                    <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>` 
                    : `<p class="text-danger">
                    <i class="fas fa-ban"></i> No se permiten mascotas
                    </p>`}
                </div>
            </div>
        </div>
    `
}

const divVentas = document.querySelector('.ventas')
divVentas.innerHTML = htmlVentas