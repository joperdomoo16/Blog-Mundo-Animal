tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#5a4302",
        "on-background": "#ebe1db",
        "tertiary": "#71daca",
        "surface-tint": "#e4c278",
        "outline": "#999080",
        "surface": "#171310",
        "primary": "#e6c479",
        "primary-fixed-dim": "#e4c278",
        "tertiary-fixed": "#8cf5e4",
        "surface-bright": "#3e3834",
        "surface-container-high": "#2e2926",
        "primary-fixed": "#ffdf9b",
        "secondary-fixed-dim": "#dcbce3",
        "on-error-container": "#ffdad6",
        "background": "#171310",
        "inverse-primary": "#745b1b",
        "on-surface": "#ebe1db",
        "on-surface-variant": "#d0c5b4",
        "error": "#ffb4ab",
        "surface-container-highest": "#393430",
        "on-tertiary-container": "#004a42",
        "on-tertiary-fixed-variant": "#005048",
        "surface-container": "#231f1b",
        "secondary-container": "#594061",
        "tertiary-container": "#53beaf",
        "on-secondary-fixed-variant": "#563e5e",
        "tertiary-fixed-dim": "#6fd8c8",
        "secondary-fixed": "#f9d8ff",
        "on-primary-container": "#533d00",
        "surface-variant": "#393430",
        "on-error": "#690005",
        "surface-container-low": "#1f1b17",
        "surface-dim": "#171310",
        "surface-container-lowest": "#110d0a",
        "on-secondary": "#3f2847",
        "error-container": "#93000a",
        "on-tertiary": "#003731",
        "inverse-surface": "#ebe1db",
        "primary-container": "#c9a961",
        "on-tertiary-fixed": "#00201c",
        "on-primary-fixed": "#251a00",
        "secondary": "#dcbce3",
        "inverse-on-surface": "#352f2c",
        "on-secondary-container": "#ceaed5",
        "on-secondary-fixed": "#281331",
        "on-primary": "#3f2e00",
        "outline-variant": "#4d4639"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      fontFamily: {
        "headline-md": ["Plus Jakarta Sans"],
        "headline-xl-mobile": ["Plus Jakarta Sans"],
        "label-lg": ["Plus Jakarta Sans"],
        "body-sm": ["Plus Jakarta Sans"],
        "label-sm": ["Plus Jakarta Sans"],
        "display-lg-mobile": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "display-lg": ["Plus Jakarta Sans"],
        "headline-sm": ["Plus Jakarta Sans"],
        "label-md": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "headline-xl": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-xl-mobile": ["28px", { lineHeight: "36px", fontWeight: "700" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.06em", fontWeight: "700" }],
        "display-lg-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-lg": ["56px", { lineHeight: "64px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-xl": ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "700" }]
      }
    }
  }
};
 
/* ===== 2. Comportamiento de la página ===== */
document.addEventListener('DOMContentLoaded', () => {
  // ---------- Menú móvil ----------
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
 
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const abierto = menu.classList.toggle('hidden') === false;
      toggle.setAttribute('aria-expanded', abierto);
    });
  }
 
  // ---------- Filtros de curiosidades ----------
  const botones = document.querySelectorAll('[data-filtro]');
  const tarjetas = document.querySelectorAll('[data-categoria]');
 
  const clasesActivo = ['bg-tertiary', 'text-surface-container-lowest'];
  const clasesInactivo = ['bg-secondary-container/50', 'text-primary', 'border', 'border-outline-variant/30'];
 
  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const filtro = boton.dataset.filtro;
 
      // 1. Marcar el botón activo
      botones.forEach((b) => {
        b.classList.remove(...clasesActivo, ...clasesInactivo);
        b.classList.add(...(b === boton ? clasesActivo : clasesInactivo));
      });
 
      // 2. Mostrar u ocultar tarjetas
      tarjetas.forEach((tarjeta) => {
        const categorias = tarjeta.dataset.categoria.split(' ');
        const visible = filtro === 'todas' || categorias.includes(filtro);
        tarjeta.classList.toggle('card-oculta', !visible);
      });
    });
  });
});