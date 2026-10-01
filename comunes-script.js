document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('pet-selector');
  if (selector) {
    selector.addEventListener('change', () => {
      console.log('Mascota seleccionada:', selector.value);
    });
  }
});