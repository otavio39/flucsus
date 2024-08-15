import React from 'react';
import styles from './EsteiraMec.module.css';

import Adoorei from '../../Images/Esteira/adoorei.svg';
import Googleads from '../../Images/Esteira/googleads.svg';
import Meta from '../../Images/Esteira/meta.svg';
import Shopify from '../../Images/Esteira/shopify.svg';
import Tiktok from '../../Images/Esteira/tiktok.svg';
import Unicodrop from '../../Images/Esteira/unicodrop.svg';
import Utmify from '../../Images/Esteira/utmify2.svg';
import Vega from '../../Images/Esteira/vega.svg';
import Voxuy from '../../Images/Esteira/voxuy.svg';

const EsteiraLogos = () => {
  return (
    <div className={styles.Esteira}>
        <div>
            <img src={Shopify} draggable="false" alt="Shopify" />
            <img src={Googleads} draggable="false" alt="Googleads" />
            <img src={Vega} draggable="false" alt="Vega" />
            <img src={Unicodrop} draggable="false" alt="Unicodrop" />
            <img src={Voxuy} draggable="false" alt="Voxuy" />
            <img src={Adoorei} draggable="false" alt="Adoorei" />
            <img src={Meta} draggable="false" alt="Meta" />
            <img src={Tiktok} draggable="false" alt="Tiktok" />
            <img src={Utmify} draggable="false" alt="Utmify" style={{ marginRight: '20px' }}/>
        </div>
    </div>
  );
}

export default EsteiraLogos;

