const axios = require('axios');

// Lista de sitios a monitorear
const sitios = [
  'https://nicolasmato.com.ar',
  'https://hexacore.com.ar',
  'https://theoutsidethorn.vercel.app', // Tu sitio
];

async function verificarSitios() {
  console.log('Verificando sitios web:');
  for (let sitio of sitios) {
    try {
      const respuesta = await axios.get(sitio);
      if (respuesta.status === 200) {
        console.log(`${sitio} está online`);
      }
    } catch (error) {
      console.log(`${sitio} está offline`);
    }
  }
}

// Ejecutar cada 10 segundos
setInterval(verificarSitios, 10000);

