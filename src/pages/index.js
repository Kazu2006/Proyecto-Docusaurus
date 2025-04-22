// src/pages/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';  ← ya no lo usas
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
          <Link className="button button--primary button--lg" to="/docs/Tutorial-Gestor-contraseña/gestor-contrasenas/">
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
            Aquí puedes explicar en detalle los beneficios, cómo usarlo paso a paso,
            e incluso enlazar a subsecciones de tu guía.
          </p>
        </section>

        {/* ————————— Custom Section 2 ————————— */}
        <section className={styles.featuresSection}>
          <div className={styles.card}>
            <h3>Seguridad</h3>
            <p>Encripta todas tus contraseñas con algoritmos de última generación.</p>
          </div>
          <div className={styles.card}>
            <h3>Accesibilidad</h3>
            <p>Disponible en web, móvil y escritorio, siempre a tu alcance.</p>
          </div>
          <div className={styles.card}>
            <h3>Sincronización</h3>
            <p>Sincroniza tus datos de forma segura entre todos tus dispositivos.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}