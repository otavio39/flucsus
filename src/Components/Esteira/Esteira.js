import React from 'react';
import styles from './Esteira.module.css';

import Iugu from '../../Images/Esteira/iugu.svg';
import Voxuy from '../../Images/Esteira/voxuy.svg';
import Transfeera from '../../Images/Esteira/transfeera.svg';
import Unicodrop from '../../Images/Esteira/unicodrop.svg';
import Shopify from '../../Images/Esteira/shopify.svg';

const EsteiraLogos = () => {
  return (
    <div className={styles.Esteira}>
      <div className={styles.EsteiraContainer}>
        <div className={styles.EsteiraContent}>
            <div>
                <img src={Shopify} draggable="false" alt="Shopify" />
                <img src={Unicodrop} draggable="false" alt="Unicodrop" />
                <img src={Voxuy} draggable="false" alt="Voxuy" />
                <img src={Iugu} draggable="false" alt="Iugu" />
                <img src={Transfeera} draggable="false" alt="Transfeera" />
            </div>
            <div>
                <img src={Shopify} draggable="false" alt="Shopify" />
                <img src={Unicodrop} draggable="false" alt="Unicodrop" />
                <img src={Voxuy} draggable="false" alt="Voxuy" />
                <img src={Iugu} draggable="false" alt="Iugu" />
                <img src={Transfeera} draggable="false" alt="Transfeera" />
            </div>
            <div>
                <img src={Shopify} draggable="false" alt="Shopify" />
                <img src={Unicodrop} draggable="false" alt="Unicodrop" />
                <img src={Voxuy} draggable="false" alt="Voxuy" />
                <img src={Iugu} draggable="false" alt="Iugu" />
                <img src={Transfeera} draggable="false" alt="Transfeera" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default EsteiraLogos;
