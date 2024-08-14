import React, { useState } from 'react';
import { SlMenu } from "react-icons/sl";
import { CgClose } from 'react-icons/cg';
import styles from './Header.module.css';
import Logo from "../../Images/LogoBlack.svg";

const MobileMenu = () => {
  const handleLoginButtonClick = () => {
    window.location.href = 'https://app.flucsus.com.br/auth/login';
  };

  return (
    <div className={styles.headerMobile}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', width: '100%' }}>
        <div className={styles.logo}>
          <img src={Logo} alt="RapidChargeBack" draggable="false" />
        </div>
        <button className={styles.loginbutton} onClick={handleLoginButtonClick}>Login</button>
      </div>
    </div>
  );
};

const DesktopMenu = () => {
  const [isHovered0, setIsHovered0] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleLoginButtonClick = (url) => {
    window.location.href = 'https://app.flucsus.com.br/auth/login';
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.headerDesktop}>
      <img onClick={() => scrollToSection('Home')} src={Logo} alt="RapidChargeBack" draggable="false" style={{ userSelect: 'none' }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '40px' }}>
        <div className={styles.headerDesktopList}>
          <div>
            <p className={styles.paragraphblackmini} onMouseEnter={() => setIsHovered0(true)} onMouseLeave={() => setIsHovered0(false)} onClick={() => scrollToSection('Home')}>Home</p>
            <div className={`${styles.bar} ${isHovered0 ? styles.barAnimation : ""}`} />
          </div>
          <div>
            <p className={styles.paragraphblackmini} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} onClick={() => scrollToSection('Parceiros')}>Parceiros</p>
            <div className={`${styles.bar} ${isHovered1 ? styles.barAnimation : ""}`} />
          </div>
          <div>
            <p className={styles.paragraphblackmini} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} onClick={() => scrollToSection('Vantagens')}>Vantagens</p>
            <div className={`${styles.bar} ${isHovered2 ? styles.barAnimation : ""}`} />
          </div>
          <div>
            <p className={styles.paragraphblackmini} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} onClick={() => scrollToSection('Sistema')}>Sistema</p>
            <div className={`${styles.bar} ${isHovered3 ? styles.barAnimation : ""}`} />
          </div>
          <div>
            <p className={styles.paragraphblackmini} onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} onClick={() => scrollToSection('Contato')}>Contato</p>
            <div className={`${styles.bar} ${isHovered4 ? styles.barAnimation : ""}`} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <button className={styles.loginbutton} onClick={() => handleLoginButtonClick()}>Login</button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <div className={styles.headerDesktopContainer}>
        <DesktopMenu />
      </div>
      <div className={styles.headerMobileContainer}>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
