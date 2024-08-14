import React, { useEffect } from 'react';
import styles from './TermosDeUsoPage.module.css';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

function App() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className={styles.Container}>
        <div className={styles.Main1}>
            <div className={styles.Main1_Container}>
                <Header/>
            </div>
        </div>
        <div className={styles.Main2}>
            <div className={styles.Main2_Container}>
                <h1>Termos de Uso - Plataforma Flucsus</h1>
                <p>Versão 01/08/2024</p>

                <h2>1. DO CADASTRO DE USUÁRIO</h2>
                <p>1.1 Para acesso à Plataforma Flucsus, o usuário deverá obrigatoriamente efetuar o cadastro fornecendo os seus dados de modo exato, preciso e verdadeiro, dentre eles nome/razão social, endereço de e-mail válido, CPF/CNPJ ativo, nome do representante legal, e endereço.</p>
                <p>1.1.1 O Usuário é o único responsável pelos dados cadastrais fornecidos. O fornecimento de informações falsas ou incorretas poderá sujeitar o usuário à responsabilização nas esferas cível, administrativa e criminal, na forma prevista em lei, além da suspensão ou cancelamento da Conta Flucsus.</p>
                <p>1.1.2 Autorização para consulta ao SPC e banco de dados - os usuários autorizam a Flucsus a realizar consultas gerais relativas ao CNPJ e CPF, perante a Junta Comercial e Órgãos Estatais, no SPC/SERASA, mídias sociais, sistemas de banco de dados, entre outras pesquisas necessárias, para fins de aprovação do cadastro do usuário e manutenção da conta Flucsus.</p>

                <h2>2. DO CADASTRO DE PRODUTORES, CO-PRODUTORES E AFILIADOS</h2>
                <p>2.1 O cadastro de produtor, co-produtor e afiliado, segue as regras do cadastro de usuário.</p>
                <p>2.2 Os produtores, co-produtores e afiliados terão seu próprio cadastro e login, bem como são responsáveis por qualquer atividade conduzida por meio da sua conta na Plataforma, isentando a Flucsus de quaisquer danos, patrimoniais ou extrapatrimoniais, resultantes do uso indevido da sua conta por terceiros.</p>

                <h2>3. DAS FUNCIONALIDADES E OBRIGAÇÕES</h2>
                <p>3.1 A Flucsus é uma Plataforma de tecnologia de serviços de vendas online e consiste num sistema capaz de intermediar o processamento eletrônico de dados de transações de pagamento de produtos digitais e físicos, de forma totalmente segura e baseada em protocolo HTTPS, permitindo a configuração de múltiplos usuários compartilhando a mesma infraestrutura de processamento, com total isolamento e tem como principais características:</p>
                <ul>
                    <li>Interface de administração web para configuração;</li>
                    <li>Configuração de diferentes meios de pagamentos;</li>
                    <li>Extrato on-line atualizado para acompanhamento diário do número de transações realizadas por meio de pagamentos;</li>
                    <li>Possibilidade de utilização da Plataforma on-line;</li>
                    <li>Acesso ao relatório de todas as transações efetuadas no período, com identificação daquelas já aprovadas e já pagas.</li>
                </ul>

                <h2>4. DO PRAZO</h2>
                <p>4.1 O presente Contrato é celebrado pelo prazo de 30 (trinta) dias, iniciando-se a partir da ativação da conta Flucsus.</p>
                <p>4.2 Findo o prazo inicial de vigência e não havendo manifestação contrária por escrito de nenhuma das Partes antes deste prazo e nos termos deste Contrato, o presente fica automaticamente e sucessivamente renovado por iguais e sucessivos períodos, exceto se qualquer uma das partes notificar a outra, por escrito, manifestando sua opção pelo término, conforme regras expostas no capítulo de rescisão.</p>

                <h2>5. DO PREÇO</h2>
                <p>5.1 As taxas cobradas pela Flucsus podem ser consultadas na Tabela de Tarifas disponível na área logada do usuário.</p>

                <h2>6. DO PROCESSAMENTO DE PAGAMENTOS E TRANSFERÊNCIAS DE VALORES</h2>
                <p>6.1 Os valores transacionados na Conta Flucsus serão disponibilizados após solicitação de saque, diretamente na conta bancária da pessoa física ou jurídica vinculada ao cadastro na Plataforma, mediante pagamento das taxas aplicáveis, aprovação e preenchimento obrigatório dos requisitos mínimos.</p>

                <h2>7. DAS VENDAS CANCELADAS E MEDIDAS PREVENTIVAS</h2>
                <p>7.1 O usuário assume total responsabilidade pelas vendas canceladas, chargebacks, contestações e estornos, processados na sua conta Flucsus.</p>

                <h2>8. CONTAS INATIVAS</h2>
                <p>8.1 As contas que permanecerem sem utilização por 2 anos, serão consideradas inativas e a conta e seu conteúdo estarão qualificados para exclusão.</p>

                <h2>9. OBRIGAÇÕES GERAIS DOS USUÁRIOS</h2>
                <p>9.1 O usuário é responsável por manter a segurança e confidencialidade de suas informações de login e por todas as atividades realizadas sob sua conta.</p>

                <h2>10. RESCISÃO CONTRATUAL</h2>
                <p>10.1 A Flucsus pode interromper ou suspender o acesso do usuário à Plataforma e seu suporte a qualquer tempo, em casos de inadimplência ou violação destes Termos de Uso.</p>

                <h2>11. DA CONFIDENCIALIDADE E PROTEÇÃO DE DADOS</h2>
                <p>11.1 As partes concordam em manter a confidencialidade das informações trocadas durante a vigência deste contrato e após seu término, pelo prazo de 5 anos.</p>

                <h2>12. DISPOSIÇÕES GERAIS</h2>
                <p>12.1 O presente contrato obriga, além das partes, seus sucessores, qualquer que seja a forma de sucessão, em todos os direitos e obrigações nele assumidas.</p>
                <p>12.2 Este contrato é regido pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes da cidade sede da Flucsus.</p>

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