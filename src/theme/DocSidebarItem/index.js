// src/theme/DocSidebarItem/index.js
import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DocSidebarItemWrapper(props) {
  const {item, ...rest} = props;

  // 1) Pon un log para ver qué recibes
  console.log('🧩 DocSidebarItemWrapper item:', item);

  // 2) Determina si es tu doc de "gestor-contrasenas"
  const isGestor =
    item.type === 'doc' && item.id === 'gestor-contrasenas' ||
    (item.href && item.href.includes('gestor-contrasenas'));

  if (isGestor) {
    const iconUrl = useBaseUrl('/img/lock.svg');
    // 3) Otro log para confirmar la URL
    console.log('🧩 Inyectando icono para gestor, URL:', iconUrl);

    return (
      <OriginalDocSidebarItem
        {...rest}
        item={{
          ...item,
          label: (
            <>
              <img
                className="sidebar-icon"           // <- aquí
                src={iconUrl}
                alt=""
                style={{
                  width: '1em',
                  height: '1em',
                  verticalAlign: 'middle',
                  marginRight: '0.5em',
                }}
              />
              {item.label}
            </>
          ),
        }}
      />
    );
  }

  return <OriginalDocSidebarItem {...props} />;
}
