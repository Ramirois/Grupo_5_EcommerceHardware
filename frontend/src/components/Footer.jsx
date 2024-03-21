import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-xs py-4 fixed bottom-0 w-full z-10">
    <div className="container mx-auto text-center">
      <p>Tecnopoint</p>
      <p>© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
    </div>
  </footer>
);
}
