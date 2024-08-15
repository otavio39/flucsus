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

const EsteiraLogos = () => {
  useEffect(() => {
    const esteiraContent = document.querySelector(`.${styles.EsteiraContent}`);

    if (esteiraContent) {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          // Adiciona a classe de pausa
          esteiraContent.classList.add(styles.active);
          
          // Remove a classe de pausa após 50ms
          setTimeout(() => {
            esteiraContent.classList.remove(styles.active);
          }, 50); // Remove a classe 'active' após 50ms
          
        }, i * 1000); // 1000ms = 1 segundo de intervalo entre os cliques
      }
    }
  }, []);

  return (
    <div className={styles.Esteira}>
      <div className={styles.EsteiraContainer}>
        <div className={styles.EsteiraContent}>
            <div>
                <img src={Shopify} draggable="false" alt="Shopify" />
                <img src={Unicodrop} draggable="false" alt="Unicodrop" />
                <img src={Voxuy} draggable="false" alt="Voxuy" />
                <img src={Adoorei} draggable="false" alt="Adoorei" />
                <img src={Googleads} draggable="false" alt="Googleads" />
                <img src={Meta} draggable="false" alt="Meta" />
                <img src={Tiktok} draggable="false" alt="Tiktok" />
                <img src={Utmify} draggable="false" alt="Utmify" />
                <img src={Vega} draggable="false" alt="Vega" />
            </div>
            <div>
                <img src={Shopify} draggable="false" alt="Shopify" />
                <img src={Unicodrop} draggable="false" alt="Unicodrop" />
                <img src={Voxuy} draggable="false" alt="Voxuy" />
                <img src={Adoorei} draggable="false" alt="Adoorei" />
                <img src={Googleads} draggable="false" alt="Googleads" />
                <img src={Meta} draggable="false" alt="Meta" />
                <img src={Tiktok} draggable="false" alt="Tiktok" />
                <img src={Utmify} draggable="false" alt="Utmify" />
                <img src={Vega} draggable="false" alt="Vega" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default EsteiraLogos;
