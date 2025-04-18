import React from 'react';
import { FaBook, FaKey } from 'react-icons/fa';

const iconMap = {
  manual: <FaBook style={{ marginRight: '0.5rem' }} />,
  gestor: <FaKey style={{ marginRight: '0.5rem' }} />,
};

export default function SidebarItem({ item, ...props }) {
  const Icon = iconMap[item.id] || null;
  return (
    <OriginalSidebarItem
      {...props}
      item={item}
      // Renderizamos icono antes del label
      label={Icon ? <><Icon />{item.label}</> : item.label}
    />
  );
}
