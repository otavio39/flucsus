import React, { useEffect, useRef } from 'react';
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
import Smsfunnel from '../../Images/Esteira/smsfunnel.svg';
import WebHooks from '../../Images/Esteira/webhooks.svg';

const EsteiraLogos = () => {
  const esteiraRef = useRef(null);

  useEffect(() => {
    const handleScrollToCenter = () => {
      if (esteiraRef.current) {
        const scrollWidth = esteiraRef.current.scrollWidth;
        const clientWidth = esteiraRef.current.clientWidth;

        if (scrollWidth > clientWidth) {
          esteiraRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
        }
      }
    };

    // Adiciona um pequeno atraso para garantir que o layout esteja completo antes de ajustar o scroll
    const timeoutId = setTimeout(handleScrollToCenter, 600);

    // Cleanup function to clear timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.Esteira} ref={esteiraRef}>
        <div>
            <img src={Smsfunnel} draggable="false" alt="Smsfunnel" />
            <img src={Unicodrop} draggable="false" alt="Unicodrop" />
            <img src={Googleads} draggable="false" alt="Googleads" />
            <img src={Vega} draggable="false" alt="Vega" />
            <img src={Voxuy} draggable="false" alt="Voxuy" />
            <img src={Shopify} draggable="false" alt="Shopify" />
            <img src={Adoorei} draggable="false" alt="Adoorei" />
            <img src={Meta} draggable="false" alt="Meta" />
            <img src={Tiktok} draggable="false" alt="Tiktok" />
            <img src={WebHooks} draggable="false" alt="WebHooks" />
            <img src={Utmify} draggable="false" alt="Utmify" style={{ marginRight: '20px' }}/>
        </div>
    </div>
  );
}

export default EsteiraLogos;
