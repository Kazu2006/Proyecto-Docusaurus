// src/pages/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';


function HomepageHeader() {
  // Aquí cambiamos el h1
  return (
    <header className={styles.heroBanner}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Bienvenido a mi Guía</h1>
        <p className={styles.subtitle}>Manual práctico para tu gestor de contraseñas</p>

      <img         
        src={useBaseUrl('img/seguridad.png')}
        alt="Ilustración gestor de contraseñas"
        className={styles.heroImage}
      />


        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to={useBaseUrl('docs/gestor-contrasenas/')}>
            Comenzar Aqui
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="Manual práctico para implementar tu gestor de contraseñas"
    >
      <HomepageHeader />
      <main className={styles.mainContent}>
  {/* ————————— Custom Section 1 ————————— */}
  <section className={styles.infoSection}>
    <h2 className={styles.sectionTitle}>¿Por qué un gestor de contraseñas?</h2>
    <p className={styles.sectionText}>
      Un gestor de contraseñas te permite almacenar todas tus credenciales en un entorno cifrado de forma centralizada, 
      de modo que solo necesites recordar una contraseña maestra. Esto elimina la necesidad de reutilizar claves débiles y 
      mejora drásticamente tu higiene digital. Además, muchos gestores ofrecen funcionalidades como generación de contraseñas 
      seguras, auditorías automáticas de fuerza y comprobaciones de fugas de datos, para que estés siempre protegido.
    </p>
  </section>

  {/* ————————— Custom Section 2 ————————— */}
  <section className={styles.featuresSection}>
    <div className={styles.card}>
      <h3>Seguridad</h3>
      <p>
        Todas tus contraseñas se cifran localmente usando algoritmos de última generación (AES-256), 
        de modo que ni siquiera el proveedor del servicio puede acceder a ellas. 
        Además, puedes activar autenticación de dos factores (2FA) para proteger el acceso a tu bóveda.
      </p>
    </div>
    <div className={styles.card}>
      <h3>Accesibilidad</h3>
      <p>
        Tu bóveda está disponible desde clientes nativos (Windows, macOS, Linux) y aplicaciones móviles 
        (iOS, Android), así como extensiones para navegadores web.  
        Incluso puedes acceder desde la interfaz web si cambias de dispositivo.
      </p>
    </div>
    <div className={styles.card}>
      <h3>Sincronización</h3>
      <p>
        Cada vez que guardas o actualizas una entrada, los cambios se propagan automáticamente 
        a todos tus dispositivos en cuestión de segundos, ya sea usando la nube pública o 
        tu propio servidor autoalojado. Así, siempre tendrás la última versión de tus contraseñas.
      </p>
    </div>
  </section>
</main>

    </Layout>
  );
}