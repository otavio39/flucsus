import React from 'react';
import styles from './Esteira.module.css';

import Adoorei from '../../Images/Esteira/adoorei.png';
import Googleads from '../../Images/Esteira/googleads.png';
import Meta from '../../Images/Esteira/meta.png';
import Shopify from '../../Images/Esteira/shopify.png';
import Tiktok from '../../Images/Esteira/tiktok.png';
import Unicodrop from '../../Images/Esteira/unicodrop.png';
import Utmify from '../../Images/Esteira/utmify.png';
import Vega from '../../Images/Esteira/vega.png';
import Voxuy from '../../Images/Esteira/voxuy.webp';

const EsteiraLogos = () => {
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
