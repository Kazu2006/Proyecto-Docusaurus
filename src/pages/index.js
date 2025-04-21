// src/pages/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  // Aquí cambiamos el h1
  return (
    <header className={styles.heroBanner}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Bienvenido a mi Guía</h1>
        <p className={styles.subtitle}>Manual práctico para tu gestor de contraseñas</p>

        <img
          src="/img/hero-gestor.png"
          alt="Ilustración gestor de contraseñas"
          className={styles.heroImage}
        />

        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Comenzar Guía 🔒
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Inicio"                // cambia la pestaña del navegador
      description="Manual práctico para implementar tu gestor de contraseñas"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
