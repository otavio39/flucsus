import React, { useEffect } from 'react';
import styles from './Esteira.module.css';

import Adoorei from '../../Images/Esteira/adoorei.svg';
import Googleads from '../../Images/Esteira/googleads.svg';
import Meta from '../../Images/Esteira/meta.svg';
import Shopify from '../../Images/Esteira/shopify.svg';
import Tiktok from '../../Images/Esteira/tiktok.svg';
import Unicodrop from '../../Images/Esteira/unicodrop.svg';
import Utmify from '../../Images/Esteira/utmify.svg';
import Vega from '../../Images/Esteira/vega.svg';
import Voxuy from '../../Images/Esteira/voxuy.svg';
import Rapid from '../../Images/Esteira/rapid.svg';

const logoImages = [Shopify, Unicodrop, Voxuy, Rapid, Adoorei, Googleads, Meta, Tiktok, Utmify, Vega];

const EsteiraLogos = () => {
  useEffect(() => {
    const esteiraContent = document.querySelector(`.${styles.EsteiraContent}`);

    if (esteiraContent) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          // Adiciona a classe de pausa
          esteiraContent.classList.add(styles.active);
          
          // Remove a classe de pausa após 50ms
          setTimeout(() => {
            esteiraContent.classList.remove(styles.active);
          }, 50); // Remove a classe 'active' após 50ms
          
        }, i * 200); // 1000ms = 1 segundo de intervalo entre os cliques
      }
    }
  }, []);

  return (
    <div className={styles.Esteira}>
      <div className={styles.EsteiraContainer}>
        <div className={styles.EsteiraContent}>
          {[...Array(2)].map((_, index) => (
            <div key={index}>
              {logoImages.map((logo, idx) => (
                <img key={idx} src={logo} draggable="false" alt={`Logo ${idx + 1}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EsteiraLogos;
