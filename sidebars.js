// sidebars.js
const { FaCogs, FaLock } = require('react-icons/fa');

const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introducción',
      customProps: { icon: FaCogs },
    },
    {
      type: 'doc',
      id: 'tutorial-basics/create-a-page',
      label: 'Crea una página',
      customProps: { icon: FaLock },
    },
    // etc.→ usa sólo IDs que sí existan
  ],
};

module.exports = sidebars;
