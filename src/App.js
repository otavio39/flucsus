import styles from './App.module.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Esteira from './Components/Esteira/Esteira';
import Cards from './Components/Cards/Cards';
import Seguranca from './Images/Cards/seguranca.svg';
import Taxas from './Images/Cards/taxas.svg';
import Integracao from './Images/Cards/integracao.svg';
import Suporte from './Images/Cards/suporte.svg';
import Main1Image from './Images/Main1Image.png'
import Mouser from './Images/Mouser.svg'
import Main4Image from './Images/Main4ImageMedium.png'
import ProgressBar from './Images/ProgressBar.png'
import ProgressBarMini from './Images/ProgressBarMini.svg'
import Main6Image from './Images/Main6Image.png'
import Main6ImageMini from './Images/Main6ImageMini.png'
import Main7Image from './Images/Main7Image.png'

function App() {
  return (
    <div className={styles.Container}>
      <div className={styles.Main1}>
        <div className={styles.Header}>
          <Header/>
        </div>
        <div className={styles.Main1_Inner}>
          <div className={styles.Main1_Container}>
            <div className={styles.Main1_Text_Content}>
              <div className={styles.Main1_Text_Sub_Content}>
                <div>
                  <h1 className={styles.titlebig}>Conectando fluxos,</h1>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className={styles.titlebig}><strong style={{ color: 'black', position: 'relative' }}>simplificando pagamentos</strong></h1>
                    <div className={styles.H1Bar}/>
                  </div>
                </div>
                <h2 className={styles.paragraphbig}>Tenha resultados extraordinários e veja seu negócio prosperar além do que você sempre sonhou.</h2>
                <div>
                  <button className={styles.buttongreen}>Cadastre-se agora</button>
                </div>
              </div>
              <div>
                <img src={Mouser} draggable={false} className={styles.Mouser}/>
              </div>
            </div>
            <div className={styles.Main1_Image_Content}>
              <img src={Main1Image}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Clip}></div>
      <div className={styles.Main2}>
        <div className={styles.Main2_Container}>
          <h3 className={styles.titleblack}>Aqui você tem <strong style={{ color: '#B1DF1E' }}>todas as soluções de pagamentos</strong> para o seu negócio digital</h3>
          <button className={styles.button}>Cadastre-se agora</button>
        </div>
      </div>
      <div className={styles.Main3}>
        <div className={styles.Main3_Container}>
          <h3 className={styles.titleblack}>Facilitamos seu crescimento com nossos <strong>parceiros e integrações</strong></h3>
          <Esteira/>
        </div>
      </div>
      <div className={styles.Main4}>
        <div className={styles.Main4_Inner}>
          <div className={styles.Main4_Container}>
            <div className={styles.Main4_Image_Content}>
              <img src={Main4Image} draggable={false}/>
            </div>
            <div className={styles.Main4_Text_Content}>
              <div className={styles.Main4_Title_Content}>
                <h3 className={styles.titleblack}>Tudo que você <strong>precisa em um só lugar</strong></h3>
                <p className={styles.paragraphblack}>Conheça os benefícios que te esperam na Flucsus.</p>
              </div>
              <div className={styles.Main4_List_Content}>
                <div>
                  <h4 className={styles.paragraphblue}>Aceite os Principais Meios de Pagamento</h4>
                  <p className={styles.paragraphblack}>Com a Flucsus, seus clientes têm acesso a uma ampla variedade de opções de pagamento, garantindo mais conveniência e flexibilidade na hora de finalizar suas compras.</p>
                </div>
                <div>
                  <h4 className={styles.paragraphblue}>Checkout personalizado</h4>
                  <p className={styles.paragraphblack}>Oferecemos um checkout que se adapta às necessidades do seu negócio. Personalize cada etapa com seu logotipo, cores e mensagens, proporcionando uma experiência de pagamento única e fluida para seus clientes.</p>
                </div>
                <div>
                  <h4 className={styles.paragraphblue}>Sistema Completo de Antifraude</h4>
                  <p className={styles.paragraphblack}>Mantenha seu negócio seguro com o sistema de antifraude nativo. Nossa tecnologia de ponta detecta e bloqueia atividades fraudulentas em tempo real, garantindo que suas   transações sejam sempre seguras.</p>
                </div>
                <div>
                  <h4 className={styles.paragraphblue}>Dashboard Completa</h4>
                  <p className={styles.paragraphblack}>Transforme a gestão do seu negócio. Visualize todas as suas vendas e pagamentos em um só lugar, com gráficos detalhados e relatórios em tempo real. Facilite suas decisões e otimize seu desempenho com a Flucsus.</p>
                </div>
              </div>
              <div>
                <button className={styles.button}>Cadastre-se agora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Main5}>
        <div className={styles.Main5_Container}>
          <h3 className={styles.titleblack}>Por que <strong>escolher a Flucsus?</strong></h3>
          <div className={styles.Main5_Card_Content}>
            <Cards
              image={Seguranca}
              title="Segurança"
              text="Na Flucsus, a segurança dos seus dados e transações é nossa prioridade máxima. Utilizamos tecnologia de ponta e protocolos rigorosos para garantir que todas as operações sejam realizadas de forma segura e confiável."
            />
            <Cards
              image={Taxas}
              title="Taxas Personalizadas"
              text="Aqui você conta com taxas flexíveis que se adaptam ao seu volume de vendas. Oferecemos soluções competitivas e individualizadas para maximizar seus lucros e apoiar o crescimento do seu negócio."
            />
            <Cards
              image={Integracao}
              title="Integração Simples"
              text="Conecte-se facilmente às principais plataformas do mercado e impulsione seu crescimento sem complicações. Nossa solução permite que você aproveite ao máximo suas ferramentas favoritas, elevando a eficiência e a produtividade do seu negócio."
            />
            <Cards
              image={Suporte}
              title="Suporte 24/7"
              text="Com a Flucsus, você nunca está sozinho. Nosso suporte está sempre disponível para ajudar, 24 horas por dia, 7 dias por semana, garantindo que suas operações funcionem sem interrupções. Conte conosco para suporte imediato e soluções rápidas."
            />
          </div>
          <button className={styles.button}>Cadastre-se agora</button>
        </div>
      </div>
      <div className={styles.Main6}>
        <div className={styles.Main6_Inner}>
          <div className={styles.Main6_Container}>
            <div className={styles.Main6_Text_Content}>
              <h3 className={styles.titlewhite}>Na Flucsus, você conta com uma <strong>alta taxa de aprovação comprovada!</strong></h3>
              <img src={ProgressBar} draggable={false} style={{marginLeft: '-10px'}} className={styles.ProgressBar}/>
              <img src={ProgressBarMini} draggable={false} style={{marginLeft: '-10px'}} className={styles.ProgressBarMini}/>
              <p className={styles.paragraphwhite}>Conversão testada, comprovada e garantida</p>
            </div>
            <div className={styles.Main6_Image_Content}>
              <img src={Main6Image} draggable={false} className={styles.Main6Image1}/>
              <img src={Main6ImageMini} draggable={false} className={styles.Main6ImageMini2}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Main7}>
        <div className={styles.Main7_Inner}>
          <div className={styles.Main7_Container}>
            <div className={styles.Main7_Text_Content}>
              <h3 className={styles.titleblack}>Sistema <strong>inteligente de adquirentes</strong></h3>
              <div className={styles.Main7_List_Content}>
                <p className={styles.paragraphblack}><strong style={{ color: '#1C1999' }}>Antecipação de Vendas em D+2</strong>: Antecipe suas vendas em cartão em até D+2, melhorando seu fluxo de caixa e garantindo mais agilidade para o seu negócio.</p>
                <p className={styles.paragraphblack}><strong style={{ color: '#1C1999' }}>Saques Automáticos e Pix em D+0</strong>: Receba de forma rápida e eficiente com saques automáticos e Pix em D+0. *A liberação está sujeita à análise do seu negócio.</p>
                <p className={styles.paragraphblack}><strong style={{ color: '#1C1999' }}>Multi-adquirente</strong>: Aumente a taxa de aprovação de suas transações em até 5 vezes com nosso sistema multi-adquirente, que distribui suas vendas entre diversas adquirentes para maximizar suas aprovações.</p>
                <p className={styles.paragraphblack}><strong style={{ color: '#1C1999' }}>Proteção contra Chargebacks</strong>: Minimize riscos com nosso sistema avançado de proteção contra disputas de chargebacks, garantindo mais segurança e estabilidade para suas transações.</p>
              </div>
              <div>
                <button className={styles.button}>Cadastre-se agora</button>
              </div>
            </div>
            <div className={styles.Main7_Image_Content}>
              <img src={Main7Image} draggable={false}/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
