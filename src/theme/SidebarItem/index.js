import React from 'react';
import OriginalSidebarItem from '@theme-original/SidebarItem';
// Nota: aquí no necesitas importar de nuevo los iconos, vienen en props.item.customProps.icon

export default function SidebarItem(props) {
  const { item } = props;
  const Icon = item.customProps?.icon;
  return (
    <OriginalSidebarItem
      {...props}
      // inyectamos delante del label:
      label={
        Icon ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em' }}>
            <Icon />
            {item.label}
          </span>
        ) : (
          item.label
        )
      }
    />
  );
}
