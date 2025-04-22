import React from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';
import LightMode from '@theme/Icon/LightMode';
import DarkMode  from '@theme/Icon/DarkMode';
import styles    from './styles.module.css';  // <-- importa tu CSS

export default function ColorModeToggle() {
  const {colorMode, setColorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <button
      className={clsx(styles.toggle)}      // <-- aplica la clase toggle
      onClick={() => setColorMode(isDark ? 'light' : 'dark')}
      aria-label="Cambiar tema claro/oscuro"
      title="Cambiar tema"
      type="button"
    >
      {isDark ? <DarkMode /> : <LightMode />}
    </button>
  );
}
