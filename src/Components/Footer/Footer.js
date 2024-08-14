import React, { useState } from 'react';
import styles from './Footer.module.css';
import { BsTelephone } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import Logo from '../../Images/LogoWhite.svg';

const handleButtonClick = () => {
  window.location.href = 'https://wa.me/message/ZZLRN6L3L2S4B1';
};

const Footer = () => {
  const [isHovered0, setIsHovered0] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <footer className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.Top}>
          <div>
            <h3>Grandes contas</h3>
            <p>Tem um negócio online, e fatura mais de 100 mil por mês? Entre em contato e podemos te ajudar com condições especiais.</p>
          </div>
          <div>
            <button onClick={handleButtonClick} className={styles.ContactButton}>
              <BsTelephone color='white' size={19} /> Fale com um especialista
            </button>
          </div>
        </div>
        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.40)', height: '1px', borderRadius: '20px', width: '100%'}}/>
        <div className={styles.Middle}>
          <div>
            <img src={Logo} draggable={false} alt="Logo" />
            <p>
              FLUCSUS MEIOS DE PAGAMENTO LTDA, uma entidade de direito privado, registrada sob o CNPJ nº 54.192.615/0001-96, com sede na Rua Goiânia, número 251, loja 4, bairro Henrique Jorge, Fortaleza/CE, CEP: 60.510-175 (doravante referida como "FLUCSUS"). A FLUCSUS encontra-se em conformidade com a Lei Geral de Proteção de Dados (LGPD), assegurando que os tratamentos de dados e os processos de negócios sejam realizados de forma adequada e transparente, conforme estabelecido em nossa Política de Privacidade e Proteção de Dados Pessoais.
            </p>
          </div>
          <div className={styles.List}>
            <div>
                <div>
                <h4 onMouseEnter={() => setIsHovered0(true)} onMouseLeave={() => setIsHovered0(false)}>Parceiros</h4>
                <div className={`${styles.bar} ${isHovered0 ? styles.barAnimation : ""}`} />
                </div>
            </div>
            <div>
                <div>
                <h4 onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>Vantagens</h4>
                <div className={`${styles.bar} ${isHovered1 ? styles.barAnimation : ""}`} />
                </div>
            </div>
            <div>
                <div>
                <h4 onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>Sistema</h4>
                <div className={`${styles.bar} ${isHovered2 ? styles.barAnimation : ""}`} />
                </div>
            </div>
            <div>
                <div>
                <h4 onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>Contato</h4>
                <div className={`${styles.bar} ${isHovered3 ? styles.barAnimation : ""}`} />
                </div>
            </div>
          </div>
          <div style={{display: 'flex', gap: '10px'}}>
            <IoLogoWhatsapp size={30} className={styles.IconWhatsapp} />
            <FaInstagramSquare size={30} className={styles.IconInstagram} />
          </div>
        </div>
        <div style={{backgroundColor: 'rgba(255, 255, 255, 0.40)', height: '1px', borderRadius: '20px', width: '100%'}}/>
        <p style={{color: '#9F9EE5', textAlign: 'center', fontSize: '16px', margin: '10px 0 0 0'}}>© 2024 - Todos os Direitos Reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
