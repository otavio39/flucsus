import React, { useEffect } from 'react';
import styles from './PoliticaDePrivacidade.module.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

function App() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className={styles.Container}>
        <div className={styles.Main1} id='top'>
            <div className={styles.Main1_Container}>
                <Header/>
            </div>
        </div>
        <div className={styles.Main2}>
            <div className={styles.Main2_Container}>
                <h1>Política de Privacidade e Proteção de Dados</h1>
                <p>Versão 01/08/2024</p>

                <h2>I. Diretrizes</h2>

                <h3>1. Disposições Gerais</h3>
                <p>1.1. Esta Política visa demonstrar o compromisso da Flucsus em:</p>
                <ul>
                    <li>Zelar pela privacidade e proteção dos dados pessoais coletados dos clientes, colaboradores e parceiros;</li>
                    <li>Adotar diretrizes que assegurem o cumprimento de normas e boas práticas relativas à privacidade e proteção de dados pessoais;</li>
                    <li>Promover a transparência sobre a forma pela qual a Flucsus trata dados pessoais;</li>
                    <li>Adotar medidas de proteção em relação a riscos de incidentes de segurança que envolvam dados pessoais.</li>
                </ul>

                <h3>2. Informações Sujeitas à Política</h3>
                <p>2.1. Estão sujeitas a esta Política:</p>
                <ul>
                    <li>Todas as informações fornecidas ou coletadas no contexto da prestação dos serviços pela Flucsus aos seus clientes, incluindo captura, transporte, processamento de informações e liquidação de transações;</li>
                    <li>Todas as informações de colaboradores e parceiros coletadas no contexto de obrigação contratual ou legal.</li>
                </ul>

                <h3>3. Dados Coletados, Forma e Finalidade da Coleta</h3>
                <p>3.1. As informações serão coletadas por meios éticos e legais e armazenadas em ambiente seguro e controlado, mantidas íntegras, sem modificações indevidas, pelo prazo exigido na regulamentação vigente.</p>
                <p>3.2. O acesso de terceiros às informações coletadas pela Flucsus se dá exclusivamente para atendimento das finalidades informadas nesta Política e dentro do limite necessário ao desempenho das atividades relativas ao curso normal dos seus negócios.</p>

                <h3>4. Término do Tratamento dos Dados</h3>
                <p>4.1. A Flucsus poderá manter e tratar os dados pessoais durante todo o período em que forem pertinentes ao alcance das finalidades comerciais que vinculam as partes. Dados pessoais anonimizados poderão ser mantidos por período indefinido.</p>
                <p>4.2. O titular dos dados pode solicitar a eliminação dos dados pessoais não anonimizados a qualquer momento. No entanto, isso pode inviabilizar a continuidade do fornecimento de serviços pela Flucsus.</p>

                <h3>5. Relacionamento com Terceiros</h3>
                <p>5.1. A Flucsus exige que todos os terceiros mantenham a confidencialidade das informações compartilhadas ou acessadas em virtude de suas atividades, utilizando-as exclusivamente para os fins permitidos.</p>

                <h3>6. Segurança das Informações</h3>
                <p>6.1. A Flucsus dispõe de processos de segurança físicos, lógicos, técnicos e administrativos compatíveis com a sensibilidade das informações coletadas, cuja eficiência é periodicamente avaliada.</p>
                <p>6.2. A Flucsus implementa novos procedimentos e melhorias tecnológicas contínuas para proteger todos os dados pessoais coletados dos clientes.</p>

                <h3>7. Cooperação com Entidades Reguladoras</h3>
                <p>7.1. Nas hipóteses em que for necessária a divulgação de dados pessoais, seja em razão de cumprimento de lei, determinação judicial ou de órgão competente, tais informações serão reveladas nos estritos termos e limites requeridos.</p>

                <h3>8. Alterações na Política</h3>
                <p>8.1. Esta Política de Privacidade e Proteção de Dados poderá ser modificada a qualquer momento, conforme a necessidade para adequação e conformidade de disposição de lei ou sempre que a Flucsus julgar necessário.</p>

                <h2>II. Gestão de Consequências</h2>
                <p>Colaboradores, fornecedores ou outros stakeholders que observarem quaisquer desvios às diretrizes desta Política, poderão relatar o fato ao Departamento Jurídico da Flucsus através do canal de comunicação disponibilizado.</p>

                <h2>III. Responsabilidades</h2>
                <p>3.1. Administradores, colaboradores e terceiros devem observar e zelar pelo cumprimento desta Política. O Departamento Jurídico é responsável por manter atualizada esta Política e orientar sobre as práticas a serem tomadas em relação à proteção de dados pessoais.</p>

                <h2>IV. Disposições Gerais</h2>
                <p>4.1. Esta Política entra em vigor na data de sua aprovação e revoga quaisquer documentos em contrário.</p>

                <h2>V. Consentimento</h2>
                <p>5.1. Este documento visa registrar a manifestação livre, informada e inequívoca pela qual o titular concorda, em legítimo interesse, com o tratamento de seus dados pessoais para finalidade específica, em conformidade com a Lei nº 13.709 - Lei Geral de Proteção de Dados Pessoais (LGPD).</p>

                <p>Fortaleza/CE, quinta-feira, 1 de agosto de 2024.</p>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
