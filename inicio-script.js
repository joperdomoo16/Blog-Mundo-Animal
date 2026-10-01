document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const abierto = menu.classList.toggle('hidden') === false;
      toggle.setAttribute('aria-expanded', abierto);
    });
  }

  const botones = document.querySelectorAll('[data-filtro]');
  const tarjetas = document.querySelectorAll('[data-categoria]');

  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const filtro = boton.dataset.filtro;
      botones.forEach((b) => {
        b.classList.remove('filter-active');
      });
      boton.classList.add('filter-active');

      tarjetas.forEach((tarjeta) => {
        const categorias = tarjeta.dataset.categoria.split(' ');
        const visible = filtro === 'todas' || categorias.includes(filtro);
        tarjeta.classList.toggle('card-oculta', !visible);
      });
    });
  });
});