// Datos de cada especie. La clave debe coincidir con el value de cada <option>.
// Las imágenes van en la carpeta img/ junto a index.html.
// Verifica estos datos con fuentes veterinarias: son de ejemplo.
const especies = {
  pogona: {
    nombre: 'Pogona vitticeps (Dragón Barbudo)',
    clase: 'Reptilia • Agamidae',
    origen: 'Zonas semiáridas de Australia',
    temp: '38°-42°C',
    img: null 
  },
  hurones: {
    nombre: 'Mustela putorius furo (Hurón)',
    clase: 'Mammalia • Mustelidae',
    origen: 'Domesticado en Europa',
    temp: '15°-24°C',
    img: 'img/hurones.jpg'
  },
  erizos: {
    nombre: 'Atelerix albiventris (Erizo de Tierra)',
    clase: 'Mammalia • Erinaceidae',
    origen: 'África central y oriental',
    temp: '22°-26°C',
    img: 'img/erizos.png'
  },
  geckos: {
    nombre: 'Eublepharis macularius (Gecko Leopardo)',
    clase: 'Reptilia • Eublepharidae',
    origen: 'Zonas áridas de Asia',
    temp: '30°-33°C',
    img: 'img/geckos.jpg'
  },
  psitacidas: {
    nombre: 'Aves Psitácidas',
    clase: 'Aves • Psittacidae',
    origen: 'Regiones tropicales del mundo',
    temp: '20°-25°C',
    img: 'img/psitacidas.jpg'
  },
  ajolotes: {
    nombre: 'Ambystoma mexicanum (Ajolote)',
    clase: 'Amphibia • Ambystomatidae',
    origen: 'Lago Xochimilco, México',
    temp: '14°-18°C',
    img: 'img/ajolotes.jpg'
  }
};

const select = document.getElementById('species-select');
const imagen = document.getElementById('species-img');


especies.pogona.img = imagen.src;

function mostrarEspecie(clave) {
  const e = especies[clave];
  if (!e) return;

  document.getElementById('species-name').textContent = e.nombre;
  document.getElementById('species-class').textContent = e.clase;
  document.getElementById('species-origin').textContent = e.origen;
  document.getElementById('species-temp').textContent = e.temp;

  imagen.src = e.img;
  imagen.alt = e.nombre;
}

select.addEventListener('change', () => mostrarEspecie(select.value));