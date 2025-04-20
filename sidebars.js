// sidebars.js
const { FaCogs, FaLock } = require('react-icons/fa');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introducción',
      className: 'sidebar-item--intro',
    },
    {
      type: 'doc',
      id: 'inspector-elementos',
      label: 'Inspector de Elementos',
      customProps: { icon: FaCogs },
    },
    {
      type: 'doc',
      id: 'gestor-contrasenas',
      label: 'Gestor de Contraseñas',
      customProps: { icon: FaLock },
    },
  ],
};

module.exports = sidebars;

