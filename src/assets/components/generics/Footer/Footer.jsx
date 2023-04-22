import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Accueil</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/app/classement" className={styles.navLink}>Classement</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/app/historique" className={styles.navLink}>Historique</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/app/contact" className={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.copyRight}>© 2023 - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;