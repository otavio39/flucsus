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
                    <div className={styles.navLinksContainer}>
                        <a href="#termos-de-uso"><p>Termos de Uso</p></a>
                        <a href="#politica-de-privacidade"><p>Política de Privacidade e Proteção de Dados</p></a>
                        <a href="#KYC"><p>KYC</p></a>
                        <a href="#Antifraude"><p>Antifraude</p></a>
                        <a href="#PLD"><p>PLD</p></a>
                    </div>

                    <section id="termos-de-uso">
                        <h2>Termos de Uso - Plataforma Flucsus</h2>
                        <p><strong>Versão 01/08/2024</strong></p>

                        <h3>1. Do Cadastro De Usuário</h3>
                        <p>
                            1.1 Para acesso à Plataforma Flucsus, o usuário deverá obrigatoriamente efetuar o cadastro fornecendo os seus dados de modo exato, preciso e verdadeiro, dentre eles nome/razão social, endereço de e-mail válido, CPF/CNPJ ativo, nome do representante legal, e endereço.
                        </p>
                        <p>
                            1.1.1 O Usuário é o único responsável pelos dados cadastrais fornecidos. O fornecimento de informações falsas ou incorretas poderá sujeitar o usuário à responsabilização nas esferas cível, administrativa e criminal, na forma prevista em lei, além da suspensão ou cancelamento da Conta Flucsus.
                        </p>
                        <p>
                            1.1.2 Autorização para consulta ao SPC e banco de dados - os usuários autorizam a Flucsus a realizar consultas gerais relativas ao CNPJ e CPF, perante a Junta Comercial e Órgãos Estatais, no SPC/SERASA, mídias sociais, sistemas de banco de dados, entre outras pesquisas necessárias, para fins de aprovação do cadastro do usuário e manutenção da conta Flucsus.
                        </p>

                        <h3>2. Do Cadastro De Produtores, Co-produtores E Afiliados</h3>
                        <p>
                            2.1 O cadastro de produtor, co-produtor e afiliado, segue as regras do cadastro de usuário.
                        </p>
                        <p>
                            2.2 Os produtores, co-produtores e afiliados terão seu próprio cadastro e login, bem como são responsáveis por qualquer atividade conduzida por meio da sua conta na Plataforma, isentando a Flucsus de quaisquer danos, patrimoniais ou extrapatrimoniais, resultantes do uso indevido da sua conta por terceiros.
                        </p>

                        <h3>3. Das Funcionalidades E Obrigações</h3>
                        <p>
                            3.1 A Flucsus é uma Plataforma de tecnologia de serviços de vendas online e consiste num sistema capaz de intermediar o processamento eletrônico de dados de transações de pagamento de produtos digitais e físicos, de forma totalmente segura e baseada em protocolo HTTPS, permitindo a configuração de múltiplos usuários compartilhando a mesma infraestrutura de processamento, com total isolamento e tem como principais características:
                        </p>
                        <ul>
                            <li>Interface de administração web para configuração;</li>
                            <li>Configuração de diferentes meios de pagamentos;</li>
                            <li>Extrato on-line atualizado para acompanhamento diário do número de transações realizadas por meio de pagamentos;</li>
                            <li>Possibilidade de utilização da Plataforma on-line;</li>
                            <li>Acesso ao relatório de todas as transações efetuadas no período, com identificação daquelas já aprovadas e já pagas.</li>
                        </ul>

                        <h3>4. Do Prazo</h3>
                        <p>
                            4.1 O presente Contrato é celebrado pelo prazo de 30 (trinta) dias, iniciando-se a partir da ativação da conta Flucsus.
                        </p>
                        <p>
                            4.2 Findo o prazo inicial de vigência e não havendo manifestação contrária por escrito de nenhuma das Partes antes deste prazo e nos termos deste Contrato, o presente fica automaticamente e sucessivamente renovado por iguais e sucessivos períodos, exceto se qualquer uma das partes notificar a outra, por escrito, manifestando sua opção pelo término, conforme regras expostas no capítulo de rescisão.
                        </p>

                        <h3>5. Do Preço</h3>
                        <p>
                            5.1 As taxas cobradas pela Flucsus podem ser consultadas na Tabela de Tarifas disponível na área logada do usuário.
                        </p>

                        <h3>6. Do Processamento De Pagamentos E Transferências De Valores</h3>
                        <p>
                            6.1 Os valores transacionados na Conta Flucsus serão disponibilizados após solicitação de saque, diretamente na conta bancária da pessoa física ou jurídica vinculada ao cadastro na Plataforma, mediante pagamento das taxas aplicáveis, aprovação e preenchimento obrigatório dos requisitos mínimos.
                        </p>

                        <h3>7. Das Vendas Canceladas E Medidas Preventivas</h3>
                        <p>
                            7.1 O usuário assume total responsabilidade pelas vendas canceladas, chargebacks, contestações e estornos, processados na sua conta Flucsus.
                        </p>

                        <h3>8. Contas Inativas</h3>
                        <p>
                            8.1 As contas que permanecerem sem utilização por 2 anos, serão consideradas inativas e a conta e seu conteúdo estarão qualificados para exclusão.
                        </p>

                        <h3>9. Obrigações Gerais Dos Usuários</h3>
                        <p>
                            9.1 O usuário é responsável por manter a segurança e confidencialidade de suas informações de login e por todas as atividades realizadas sob sua conta.
                        </p>

                        <h3>10. Rescisão Contratual</h3>
                        <p>
                            10.1 A Flucsus pode interromper ou suspender o acesso do usuário à Plataforma e seu suporte a qualquer tempo, em casos de inadimplência ou violação destes Termos de Uso.
                        </p>

                        <h3>11. Da Confidencialidade E Proteção De Dados</h3>
                        <p>
                            11.1 As partes concordam em manter a confidencialidade das informações trocadas durante a vigência deste contrato e após seu término, pelo prazo de 5 anos.
                        </p>

                        <h3>12. Disposições Gerais</h3>
                        <p>
                            12.1 O presente contrato obriga, além das partes, seus sucessores, qualquer que seja a forma de sucessão, em todos os direitos e obrigações nele assumidas.
                        </p>
                        <p>
                            12.2 Este contrato é regido pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes da cidade sede da Flucsus.
                        </p>
                        <p>Fortaleza/CE, quinta-feira, 1 de agosto de 2024.</p>
                    </section>

                    <section style={{ paddingTop: '30px', marginTop: '70px' }} id="politica-de-privacidade">
                        <h2>Política de Privacidade e Proteção de Dados</h2>
                        <p><strong>Versão 01/08/2024</strong></p>

                        <h3>I. Diretrizes</h3>
                        
                        <h4>1. Disposições Gerais</h4>
                        <p>
                            1.1. Esta Política visa demonstrar o compromisso da Flucsus em:
                        </p>
                        <ul>
                            <li>Zelar pela privacidade e proteção dos dados pessoais coletados dos clientes, colaboradores e parceiros;</li>
                            <li>Adotar diretrizes que assegurem o cumprimento de normas e boas práticas relativas à privacidade e proteção de dados pessoais;</li>
                            <li>Promover a transparência sobre a forma pela qual a Flucsus trata dados pessoais;</li>
                            <li>Adotar medidas de proteção em relação a riscos de incidentes de segurança que envolvam dados pessoais.</li>
                        </ul>

                        <h4>2. Informações Sujeitas à Política</h4>
                        <p>
                            2.1. Estão sujeitas a esta Política:
                        </p>
                        <ul>
                            <li>Todas as informações fornecidas ou coletadas no contexto da prestação dos serviços pela Flucsus aos seus clientes, incluindo captura, transporte, processamento de informações e liquidação de transações;</li>
                            <li>Todas as informações de colaboradores e parceiros coletadas no contexto de obrigação contratual ou legal.</li>
                        </ul>

                        <h4>3. Dados Coletados, Forma e Finalidade da Coleta</h4>
                        <p>
                            3.1. As informações serão coletadas por meios éticos e legais e armazenadas em ambiente seguro e controlado, mantidas íntegras, sem modificações indevidas, pelo prazo exigido na regulamentação vigente.
                        </p>
                        <p>
                            3.2. O acesso de terceiros às informações coletadas pela Flucsus se dá exclusivamente para atendimento das finalidades informadas nesta Política e dentro do limite necessário ao desempenho das atividades relativas ao curso normal dos seus negócios.
                        </p>

                        <h4>4. Término do Tratamento dos Dados</h4>
                        <p>
                            4.1. A Flucsus poderá manter e tratar os dados pessoais durante todo o período em que forem pertinentes ao alcance das finalidades comerciais que vinculam as partes. Dados pessoais anonimizados poderão ser mantidos por período indefinido.
                        </p>
                        <p>
                            4.2. O titular dos dados pode solicitar a eliminação dos dados pessoais não anonimizados a qualquer momento. No entanto, isso pode inviabilizar a continuidade do fornecimento de serviços pela Flucsus.
                        </p>

                        <h4>5. Relacionamento com Terceiros</h4>
                        <p>
                            5.1. A Flucsus exige que todos os terceiros mantenham a confidencialidade das informações compartilhadas ou acessadas em virtude de suas atividades, utilizando-as exclusivamente para os fins permitidos.
                        </p>

                        <h4>6. Segurança das Informações</h4>
                        <p>
                            6.1. A Flucsus dispõe de processos de segurança físicos, lógicos, técnicos e administrativos compatíveis com a sensibilidade das informações coletadas, cuja eficiência é periodicamente avaliada.
                        </p>
                        <p>
                            6.2. A Flucsus implementa novos procedimentos e melhorias tecnológicas contínuas para proteger todos os dados pessoais coletados dos clientes.
                        </p>

                        <h4>7. Cooperação com Entidades Reguladoras</h4>
                        <p>
                            7.1. Nas hipóteses em que for necessária a divulgação de dados pessoais, seja em razão de cumprimento de lei, determinação judicial ou de órgão competente, tais informações serão reveladas nos estritos termos e limites requeridos.
                        </p>

                        <h4>8. Alterações na Política</h4>
                        <p>
                            8.1. Esta Política de Privacidade e Proteção de Dados poderá ser modificada a qualquer momento, conforme a necessidade para adequação e conformidade de disposição de lei ou sempre que a Flucsus julgar necessário.
                        </p>

                        <h3>II. Gestão de Consequências</h3>
                        <p>
                            Colaboradores, fornecedores ou outros stakeholders que observarem quaisquer desvios às diretrizes desta Política, poderão relatar o fato ao Departamento Jurídico da Flucsus através do canal de comunicação disponibilizado.
                        </p>

                        <h3>III. Responsabilidades</h3>
                        <p>
                            3.1. Administradores, colaboradores e terceiros devem observar e zelar pelo cumprimento desta Política. O Departamento Jurídico é responsável por manter atualizada esta Política e orientar sobre as práticas a serem tomadas em relação à proteção de dados pessoais.
                        </p>

                        <h3>IV. Disposições Gerais</h3>
                        <p>
                            4.1. Esta Política entra em vigor na data de sua aprovação e revoga quaisquer documentos em contrário.
                        </p>

                        <h3>V. Consentimento</h3>
                        <p>
                            5.1. Este documento visa registrar a manifestação livre, informada e inequívoca pela qual o titular concorda, em legítimo interesse, com o tratamento de seus dados pessoais para finalidade específica, em conformidade com a Lei nº 13.709 - Lei Geral de Proteção de Dados Pessoais (LGPD).
                        </p>

                        <p>Fortaleza/CE, quinta-feira, 1 de agosto de 2024.</p>
                    </section>

                    <section style={{ paddingTop: '30px', marginTop: '70px' }} id="KYC">
                        <h2>Manual de Cadastro e Credenciamento de Clientes – “Know Your Customer – KYC”</h2>

                        <h3>1. Apresentação</h3>
                        <p>
                            Respeitando a legislação vigente e as normas regulatórias aplicáveis, a Flucsus Meios de Pagamento LTDA, registrada sob o CNPJ nº 54.192.615/0001-96, com sede na Rua Goiânia, Número 251, Bairro Henrique Jorge, Fortaleza/CE, Loja 4, CEP: 60.510-175, busca estabelecer um conjunto de regras e procedimentos internos para conhecer seus clientes. O objetivo é identificar o perfil de risco, a capacidade financeira e a natureza dos negócios, além de compreender a motivação para a contratação dos serviços ofertados pela Flucsus. Comprometemo-nos a coletar e tratar esses dados em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709 de 14/08/2018).
                        </p>
                        <p>
                            Nesse sentido, a Flucsus não mantém vínculo com terceiros que apresentem indícios de envolvimento em atividades criminosas ou negócios cuja natureza impeça a verificação mínima da legitimidade das atividades ou da procedência dos recursos. Também recusamos qualquer relação com aqueles que se neguem a fornecer informações ou documentos solicitados, em conformidade com a legislação e normas antilavagem de dinheiro.
                        </p>
                        <p>
                            Para garantir a adequação às melhores práticas de identificação e qualificação de clientes, a Flucsus adota como referência a Circular nº 3.978 de 2020 do Banco Central.
                        </p>

                        <h3>2. Procedimentos para Cadastro e Credenciamento de Clientes – KYC</h3>
                        <p>
                            A Flucsus adota procedimentos que permitem a obtenção, verificação e validação da autenticidade das informações de identificação e qualificação dos clientes, compatíveis com o perfil de risco e a natureza da relação de negócio. Isso pode incluir a confrontação das informações com bases de dados públicas e privadas, em conformidade com a legislação vigente.
                        </p>
                        <p>
                            O manual de KYC da Flucsus é operado internamente pelo time de operações usando a plataforma da empresa e consultas a sites oficiais. Além do processo inicial de cadastro, realizamos monitoramento contínuo a cada três meses para reavaliar cada cliente, mantendo as informações atualizadas.
                        </p>
                        <p>
                            Os procedimentos de cadastro e credenciamento de clientes são compatíveis com:
                        </p>
                        <ul>
                            <li>As informações obtidas e utilizadas no processo de credenciamento serão armazenadas por cinco anos, seguindo as diretrizes de segurança e confidencialidade da Lei Geral de Proteção de Dados.</li>
                            <li>Durante o processo, coletamos e validamos as seguintes informações:</li>
                        </ul>

                        <h4>Identificação de Pessoa Física:</h4>
                        <ul>
                            <li>Nome completo;</li>
                            <li>Nacionalidade;</li>
                            <li>Local e data de nascimento;</li>
                            <li>Documento de identificação;</li>
                        </ul>

                        <h4>Identificação de Pessoa Jurídica:</h4>
                        <ul>
                            <li>Validação de CPF na Receita Federal: Confirmamos se o CPF é válido e está ativo, utilizando uma ferramenta contratada para essa validação. Um CPF inválido ou associado a uma certidão de óbito indica uma possível tentativa de fraude de identidade. Resultado negativo: o indivíduo é impedido de abrir uma nova conta.</li>
                            <li>Validação de CNPJ, Administradores e Atividade Principal na Receita Federal: Validamos as informações sobre a empresa para verificar se o CNPJ está válido, utilizando a ferramenta contratada.</li>
                            <li>Verificação do QSA (Quadro de Sócios e Administradores): Identificamos os sócios e administradores de uma empresa, verificando suas informações com as mesmas consultas de KYC aplicadas a clientes pessoa física.</li>
                            <li>Validação de Dados Cadastrais (Nacionalidade, Filiação, etc.): Solicitamos o envio ou apresentação do RG e/ou CNH para validar os dados cadastrais. Validação feita com a ferramenta contratada. Resultado negativo: o indivíduo é impedido de abrir uma nova conta.</li>
                            <li>Verificação da Lista de Pessoas Politicamente Expostas (PEP): Consultamos a lista de PEPs, conforme Resolução 3.978 do Banco Central e Resolução COAF nº 40/2021, utilizando bases de dados oficiais. Validação feita com a ferramenta contratada.</li>
                            <li>Verificação de Listas Restritivas: Consultamos listas que apontam indivíduos associados a atividades ilícitas, como:</li>
                            <ul>
                                <li>Número de CPF;</li>
                                <li>Endereços;</li>
                                <li>E-mail;</li>
                                <li>Número de telefone;</li>
                                <li>Valores de renda e patrimônio.</li>
                                <li>CNPJ;</li>
                                <li>Razão social;</li>
                                <li>Atividade principal;</li>
                                <li>Forma e data de constituição;</li>
                                <li>Atos constitutivos;</li>
                                <li>Endereços;</li>
                                <li>Número de telefone;</li>
                                <li>Faturamento médio mensal.</li>
                            </ul>
                            <li>Cadastro Nacional de Empresas Inidôneas e Suspensas (CEIS);</li>
                            <li>Cadastro de Entidades Privadas Sem Fins Lucrativos Impedidas (Cepim);</li>
                            <li>Cadastro de Expulsões da Administração Federal (CEAF);</li>
                            <li>Cadastro Nacional de Empresas Punidas (Cnep);</li>
                            <li>Quadro Geral de Inabilitados do Banco Central;</li>
                            <li>Lista do Tribunal de Contas da União (TCU);</li>
                            <li>Empresas multinacionais ou com clientes estrangeiros também são consultadas em listas restritivas internacionais, como:</li>
                        </ul>
                        
                        <h4>Verificação de Score de Crédito em Órgãos de Proteção ao Crédito</h4>
                        <p>
                            Utilizamos uma ferramenta contratada para verificar o score de crédito, identificando o nível de risco do indivíduo.
                        </p>

                        <h4>Verificação de Fontes de Protestos e Serviço Central de Proteção ao Crédito (SCPC)</h4>
                        <p>
                            Realizamos consultas adicionais para identificar dívidas em aberto.
                        </p>

                        <h4>Verificação de Processos Relacionados à Lavagem de Dinheiro e Falência</h4>
                        <p>
                            Se o indivíduo estiver associado a tais processos, ele é impedido de abrir uma conta.
                        </p>

                        <h4>Verificação de Mandados de Prisão em Aberto</h4>
                        <p>
                            Um indivíduo com mandado de prisão em aberto é impedido de abrir uma conta. Resultado negativo: o indivíduo é impossibilitado de abrir uma nova conta.
                        </p>

                        <h4>Consultas de Mídias Negativas</h4>
                        <p>
                            Utilizamos soluções baseadas em inteligência artificial para identificar como um possível cliente, parceiro de negócios ou fornecedor é retratado na imprensa, verificando envolvimento com corrupção, lavagem de dinheiro ou outras situações que possam ir de encontro aos valores da empresa.
                        </p>

                        <h4>Visitas Periódicas aos Clientes</h4>
                        <p>
                            Realizamos visitas periódicas aos estabelecimentos comerciais a cada três meses, para monitorar e validar o funcionamento regular das atividades dos clientes.
                        </p>

                        <h3>3. Classificação dos Clientes</h3>
                        <p>
                            Após a realização dos procedimentos de cadastro e credenciamento, os clientes são classificados com base em elementos objetivos e subjetivos, validados pelo responsável de Compliance, com possível auxílio de outros colaboradores.
                        </p>
                        <p>
                            Os clientes podem ser classificados em três níveis de risco: Baixo, Médio e Alto. A classificação considera características como:
                        </p>
                        <ul>
                            <li>Resistência ao fornecimento de informações necessárias;</li>
                            <li>Histórico de inadimplência;</li>
                            <li>Fornecimento de informações falsas no cadastro;</li>
                            <li>Identificação como Pessoa Politicamente Exposta (PEP);</li>
                            <li>Cadastro de Sanções Penais e Administrativas Derivadas de Lesões ao Meio Ambiente;</li>
                            <li>Lista de Trabalho Análogo à Escravidão;</li>
                            <li>Lista da ONU (inclui informações sobre membros da Al-Qaeda);</li>
                            <li>Lista da OFAC – Office of Foreign Assets Control;</li>
                            <li>European Union Consolidated List;</li>
                            <li>Lista do Conselho de Segurança das Nações Unidas (CSNU);</li>
                            <li>Interpol.</li>
                        </ul>
                        
                        <h4>3.1 Monitoramento de Clientes de Alto Risco</h4>
                        <p>
                            Para clientes de alto risco, a Flucsus mantém um processo contínuo de monitoramento, com medidas reforçadas. A cada 30 dias, realizamos o procedimento de obtenção, verificação e validação da autenticidade das informações, buscando identificar alterações relevantes ou inclusão do cliente em listas restritivas.
                        </p>

                        <h3>4. Medidas de Screening de Sanções Internacionais</h3>
                        
                        <h4>4.1 Verificação e Confirmação de Identificação em Lista Restritiva</h4>
                        <p>
                            Quando um cliente é identificado em listas restritivas, suspendemos imediatamente todas as transações e realizamos uma análise detalhada.
                        </p>

                        <h4>4.2 Congelamento de Transações</h4>
                        <p>
                            Suspensão imediata de todas as transações com clientes identificados em listas restritivas.
                        </p>

                        <h4>4.3 Comunicação com o Cliente</h4>
                        <p>
                            Entramos em contato com o cliente para informar sobre a situação e solicitar informações adicionais. Um prazo de 10 dias é concedido para resposta.
                        </p>

                        <h4>4.4 Análise e Decisão</h4>
                        <p>
                            Após a resposta do cliente ou o prazo expirar, realizamos uma análise detalhada e decidimos sobre a exclusão do cliente das operações ou a manutenção do relacionamento.
                        </p>

                        <h4>4.5 Encerramento do Relacionamento e Reporte ao Credenciador</h4>
                        <p>
                            Se a decisão for excluir o cliente, comunicamos formalmente o encerramento do relacionamento e reportamos ao credenciador, detalhando os motivos.
                        </p>

                        <h4>4.6 Cumprimento de Regulamentações</h4>
                        <p>
                            A Flucsus segue todas as regulamentações aplicáveis durante o processo de exclusão e reporte, incluindo leis de proteção ao consumidor e privacidade de dados.
                        </p>

                        <h3>5. Lei Geral de Proteção de Dados</h3>
                        <p>
                            A Flucsus está em conformidade com a LGPD, adotando processos para supervisionar, administrar e auditar o cumprimento da lei. Orientamos e fiscalizamos nossos funcionários quanto às melhores práticas para assegurar a conformidade.
                        </p>

                        <h3>6. Atualização e Vigência</h3>
                        <p>
                            Este manual será atualizado sempre que ocorrerem alterações legislativas, regulatórias, ou modificações no cenário de negócios da empresa. O manual tem prazo de vigência indeterminado, podendo ser substituído por uma versão atualizada.
                        </p>
                    </section>

                    <section style={{ paddingTop: '30px', marginTop: '70px' }} id="Antifraude">
                        <h2>Principais Normativos de Compliance e Política de Prevenção e Combate à Lavagem de Dinheiro e ao Financiamento ao Terrorismo</h2>

                        <h3>Apresentação</h3>
                        <p>
                            A Flucsus Meios de Pagamento LTDA., uma entidade de direito privado, registrada sob o CNPJ nº 54.192.615/0001-96, com sede na Rua Goiânia, Número 251, Bairro Henrique Jorge, Fortaleza/CE, Loja 4, CEP: 60.510-175 (doravante referida como "Flucsus"), apresenta seus principais Normativos de Compliance e Política de Prevenção e Combate à “Lavagem de Dinheiro e ao Financiamento ao Terrorismo”.
                        </p>
                        <p>
                            A Flucsus reconhece ser uma empresa com compromisso ético e consciente da sua responsabilidade socioambiental e do dever de integridade no exercício de suas atividades. Sendo assim, repudia toda e qualquer forma de corrupção e suborno, discriminação, falsificação ideológica e documental, apropriação indébita ou usurpação, trabalho infantil, forçado, escravo ou análogo a escravo, buscando selecionar colaboradores e prestadores de serviços que estejam alinhados com suas condutas éticas.
                        </p>
                        <p>
                            Nesse sentido, a presente Política pretende fornecer orientação e diretrizes sobre o programa de Compliance e PLD/CFT (Prevenção à Lavagem de Dinheiro e Combate ao Financiamento do Terrorismo), que deve ser seguida por todos os membros, colaboradores, parceiros, terceiros e prestadores de serviços relevantes da Flucsus no tocante aos compromissos éticos e à prevenção e combate à lavagem de dinheiro e ao financiamento ao terrorismo.
                        </p>
                        <p>
                            Esta Política deverá ser sempre utilizada por todos os membros, colaboradores, parceiros, terceiros e prestadores de serviços relevantes da Flucsus no desempenho de suas funções. Não será considerada qualquer assertiva acerca do desconhecimento desta, bem como não serão consideradas quaisquer justificativas que resultem no seu descumprimento. Diante de qualquer dúvida, esclarecimento ou aconselhamento, é necessária a imediata consulta à Área de Compliance PLD/CFT.
                        </p>
                        <p>
                            A presente Política estará disponível para consulta, impressa e encadernada, na área de Compliance e na rede interna junto à intranet. Todos os membros, colaboradores, parceiros, terceiros e prestadores de serviços relevantes têm a obrigação de reportar imediatamente à Área de Compliance PLD/CFT qualquer ato suspeito, ilícito, ou que viole os preceitos aqui estabelecidos e a legislação aplicável, de que tiver conhecimento.
                        </p>

                        <h3>Objetivo</h3>
                        <p>
                            A presente Política de Prevenção e Combate à Lavagem de Dinheiro ou Ocultação de Bens, Direitos e Valores e Financiamento do Terrorismo (“PLD-CFT”) visa estabelecer princípios, diretrizes e procedimentos, nos termos da legislação em vigor, que devem ser observados por todos os membros, colaboradores, parceiros, terceiros e prestadores de serviços relevantes da Flucsus Meios de Pagamento LTDA no decorrer das suas operações comerciais, a fim de prevenir que seus sistemas e sua estrutura operacional sejam utilizados para o cometimento de práticas de lavagem de dinheiro e de financiamento do terrorismo, e assim, atenuar riscos regulatórios e reputacionais associados a tais ilícitos.
                        </p>

                        <h3>Normas de Referência</h3>
                        <p>
                            A Flucsus busca respeitar toda a legislação relacionada ao assunto, bem como as normas, normativos, circulares e posicionamentos apresentados pelo BACEN e pelo COAF, em especial os abaixo elencados:
                        </p>
                        <ul>
                            <li>Lei nº 9.613, de 3 de março de 1998 - Dispõe sobre os crimes de "lavagem" ou ocultação de bens, direitos e valores; a prevenção da utilização do sistema financeiro para os ilícitos previstos nesta Lei; cria o Conselho de Controle de Atividades Financeiras - COAF, e dá outras providências;</li>
                            <li>Lei nº 12.846, de 1º de agosto de 2013 - Dispõe sobre a responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a administração pública, nacional ou estrangeira, e dá outras providências;</li>
                            <li>Lei nº 13.260, de 16 de março de 2016 - Regulamenta o disposto no inciso XLIII do art. 5º da Constituição Federal, disciplinando o terrorismo, tratando de disposições investigatórias e processuais e reformulando o conceito de organização terrorista; e altera as Leis nº 7.960, de 21 de dezembro de 1989, e 12.850, de 2 de agosto de 2013;</li>
                            <li>BACEN Carta-Circular nº 2.826/98 - Divulga relação de operações e situações que podem configurar indício de ocorrência do crime de lavagem de dinheiro, e estabelece procedimentos para sua comunicação ao Banco Central do Brasil;</li>
                            <li>BACEN Carta Circular 3.342/08 - Dispõe sobre a comunicação de movimentações financeiras ligadas ao terrorismo e ao seu financiamento;</li>
                            <li>BACEN Carta-Circular nº 3.430/10 - Esclarece aspectos relacionados à prevenção e combate às atividades relacionadas com os crimes previstos na Lei nº 9.613, de 3 de março de 1998, tratados na Circular nº 3.461, de 24 de julho de 2009;</li>
                            <li>BACEN Carta Circular nº 3.780/16 – Dispõe sobre os procedimentos a serem adotados por instituições financeiras e demais instituições autorizadas a funcionar pelo Banco Central do Brasil no cumprimento da Lei nº 13.170, de 16 de outubro de 2015, que disciplina a ação de indisponibilidade de bens, direitos ou valores em decorrência de resolução do Conselho de Segurança das Nações Unidas (CSNU);</li>
                            <li>BACEN Comunicado nº 30.976/2017 – Divulga comunicado do Grupo de Ação Financeira contra a Lavagem de Dinheiro e o Financiamento do Terrorismo (GAFI/FATF);</li>
                            <li>BACEN Circular nº 3.978 de 23/01/2020 - Dispõe sobre a política, os procedimentos e os controles internos a serem adotados pelas instituições autorizadas a funcionar pelo Banco Central do Brasil e revoga a Circular nº 3.461/09, revoga o art. 3º da Circular nº 3.780/16 e revoga a Circular nº 3.839/17;</li>
                            <li>BACEN Carta Circular nº 4.001 de 29/01/2020 – Divulga relação de operações e situações que podem configurar indícios de ocorrência dos crimes de “lavagem” ou ocultação de bens, direitos e valores, de que trata a Lei nº 9.613/1998 e de financiamento ao terrorismo, previsto na Lei nº 13.260/2016 e revoga a Carta Circular nº 3.542 de 2012;</li>
                            <li>Resolução CVM nº 50, de 31/08/2021 - Dispõe sobre a prevenção à lavagem de dinheiro, ao financiamento do terrorismo e ao financiamento da proliferação de armas de destruição em massa – PLD/FTP no âmbito do mercado de valores mobiliários e revoga a Instrução CVM nº 617, de 5 de dezembro de 2019 e a Nota Explicativa à Instrução CVM nº 617, de 5 de dezembro de 2019;</li>
                            <li>Normas emitidas pelo COAF – Conselho de Controle de Atividades Financeiras;</li>
                            <li>Decreto nº 11.129 de 2022 - Regulamenta a Lei nº 12.846, de 1º de agosto de 2013, que dispõe sobre a responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a administração pública, nacional ou estrangeira.</li>
                        </ul>

                        <h3>Definições</h3>
                        <p>
                            O processo de lavagem de dinheiro é composto por três fases:
                        </p>
                        <ul>
                            <li><strong>Colocação:</strong> Bens ou valores ilícitos são inseridos no sistema econômico, geralmente por meio de compras de bens, imóveis, etc. A característica principal é a fragmentação do recurso em pequenas quantias.</li>
                            <li><strong>Ocultação:</strong> O objetivo é esconder a origem do dinheiro ou recursos, dificultando o rastreamento contábil e financeiro por meio de ações complexas e diversas movimentações financeiras.</li>
                            <li><strong>Integração:</strong> O dinheiro é formalmente reinserido no sistema econômico, apresentando caráter aparentemente lícito, podendo ocorrer por meio de investimentos em negócios legais.</li>
                        </ul>

                        <h3>Responsabilidades da Flucsus Meios de Pagamento LTDA e de seus Profissionais</h3>
                        <p>
                            Todos os profissionais da Flucsus, dentro de suas atividades e independentemente de suas posições hierárquicas, têm funções e responsabilidades relacionadas à prevenção e combate à lavagem de dinheiro e ao financiamento do terrorismo. A estrutura organizacional a seguir mencionada está identificada diretamente com as responsabilidades de cada um dos profissionais em relação às condutas de prevenção e combate ao crime de lavagem de dinheiro e respeito à legislação e normas supracitadas.
                        </p>

                        <h4>Alta Administração</h4>
                        <ul>
                            <li>Implementar e acompanhar o cumprimento desta Política e de outras normas ligadas a esta, bem como mantê-las atualizadas;</li>
                            <li>Fornecer recursos financeiros e humanos para que esta Política possa ser implementada, desenvolvida e aprimorada, juntamente com os procedimentos e controles internos necessários à sua execução;</li>
                            <li>Analisar os relatórios e requerer que medidas mitigatórias de riscos sejam implementadas por setores e profissionais específicos, cuja missão é desenvolver, aprimorar e monitorar o cumprimento desta Política, assim como disseminar a cultura de prevenção e combate à lavagem de dinheiro e ao financiamento ao terrorismo;</li>
                            <li>Comunicar às empresas parceiras, contratualmente ligadas à Flucsus e cujos serviços sejam desenvolvidos em cooperação, sobre eventuais operações suspeitas de lavagem de dinheiro e financiamento do terrorismo para que a empresa parceira possa tomar as medidas que julgar cabíveis.</li>
                        </ul>

                        <h4>Auditoria</h4>
                        <p>
                            A Flucsus, através de auditoria interna/externa, deve realizar a avaliação anual da efetividade do seu programa de Prevenção à Lavagem de Dinheiro e Combate ao Financiamento ao Terrorismo, reportando à Alta Administração o andamento das medidas de controle e das áreas que precisam ser remediadas.
                        </p>
                        <p>
                            Nesse sentido, é de responsabilidade da Auditoria Interna:
                        </p>
                        <ul>
                            <li>Verificar, com base em amostragens, o cumprimento das diretrizes desta Política e dos procedimentos implementados em razão dela;</li>
                            <li>Elaborar relatório anual de avaliação da efetividade das orientações e diretrizes estratégicas, dos procedimentos e dos controles internos previstos nesta política, documentado em relatório específico;</li>
                            <li>Elaborar plano de ação destinado a solucionar as deficiências identificadas por meio da Avaliação de Efetividade;</li>
                            <li>Acompanhar a implementação do plano de ação e monitorar sua realização por meio de relatório de acompanhamento.</li>
                        </ul>

                        <h4>Recursos Humanos</h4>
                        <p>
                            É de responsabilidade da Equipe de Recursos Humanos:
                        </p>
                        <ul>
                            <li>Observar as regras e procedimentos internos com o objetivo de conhecer os candidatos a vagas de trabalho, nos termos definidos no seu Manual de Cadastro de Colaboradores – “Know Your Employee” (KYE);</li>
                            <li>Promover treinamentos periódicos, a fim de informar os colaboradores e prestadores de serviços acerca desta Política, das determinações legais e regulatórias, bem como dos procedimentos internos existentes;</li>
                            <li>Averiguar os dados e análise reputacional dos colaboradores e prestadores de serviços na fase de contratação, bem como acompanhá-los na execução das suas atividades dentro da Flucsus, com especial atenção para os casos em que há mudança repentina ou injustificável de condição financeira.</li>
                        </ul>

                        <h4>Cadastro de Clientes</h4>
                        <p>
                            É de responsabilidade dos profissionais que atuam na área de Cadastro:
                        </p>
                        <ul>
                            <li>Validar os dados e solicitar junto ao cliente documentos e/ou esclarecimentos adicionais, bem como o cumprimento indispensável de todos os procedimentos definidos pela Flucsus;</li>
                            <li>Manter o cadastro dos estabelecimentos comerciais sempre atualizado, buscando exigir a renovação das informações em período não superior a seis meses ou prazo inferior eventualmente definido em lei ou norma específica;</li>
                            <li>Manter o cadastro dos estabelecimentos comerciais sempre atualizado, buscando exigir a renovação das informações mensalmente, para aqueles classificados de maior risco, de acordo com a classificação de risco;</li>
                            <li>Consultar a Diretoria ou departamento interno responsável quando houver qualquer indício de irregularidade ou questionamento quanto aos procedimentos adotados por parte dos estabelecimentos comerciais.</li>
                        </ul>

                        <p>
                            Todos os demais setores e profissionais que não estejam aqui elencados deverão respeitar as normas vinculativas dispostas nesta Política, bem como adotar postura idônea e condizente com as determinações legais e normativas expedidas pelas autoridades competentes. Caso identifiquem atividade suspeita de profissionais, clientes e/ou parceiros, têm a obrigação de reportar tal fato de imediato à Alta Administração ou a outro setor responsável.
                        </p>

                        <h3>Melhores Práticas da Flucsus para Prevenção/Proteção</h3>
                        <h4>7.1. Conhecendo nossos profissionais</h4>
                        <p>
                            A Flucsus adota uma postura transparente e responsável na contratação de seus profissionais. Antes de começar a atuar na Flucsus, todos os profissionais serão avaliados, conforme padrões definidos em política específica. Além disso, os profissionais recebem treinamentos anuais com 20 horas de duração em matéria de prevenção à lavagem de dinheiro e financiamento do terrorismo, entre outros assuntos relevantes para a manutenção e desenvolvimento do ambiente de conformidade da Flucsus.
                        </p>

                        <h4>7.2. Conhecendo nossos Clientes</h4>
                        <p>
                            Respeitando a legislação vigente e as normas regulatórias aplicáveis, a Flucsus busca estabelecer um conjunto de regras e procedimentos internos com o objetivo de conhecer seus clientes e parceiros, visando identificar o perfil de risco, capacidade financeira, natureza dos seus negócios, bem como compreender a motivação para contratação dos serviços ofertados. Nesse sentido, a Flucsus não mantém vínculo com terceiros que apresentem qualquer indício de relacionamento com atividades de natureza criminosa ou negócios cuja natureza da atividade não permita a verificação mínima da legitimidade das atividades ou da procedência dos recursos movimentados. A Flucsus também se recusa a fornecer serviços a quem não colabore com as informações ou documentos solicitados por razões de segurança previstas em legislação e normas antilavagem de dinheiro.
                        </p>
                        <p>
                            Para adequar-se às melhores práticas de identificação e qualificação dos clientes/usuários, a Flucsus terá como parâmetro a Circular nº 3.978 de 2020 do Banco Central, nos termos de seu Manual de Cadastro de Clientes – “Know Your Customer” (KYC) descritos em documento específico. Recomenda-se que a avaliação interna de risco seja atualizada em períodos não superiores a 12 meses, salvo legislação específica aplicável à Flucsus que determine período diverso. Todos os clientes/usuários poderão ser submetidos a listas de CPF’s/CNPJ’s restritivos, que os impedirão de utilizar ou contratar os serviços ofertados pela Flucsus.
                        </p>

                        <h4>7.3. Conhecendo nossos Parceiros e Prestadores de Serviços Terceirizados</h4>
                        <p>
                            A Flucsus analisará o perfil dos parceiros e prestadores de serviços terceirizados, conforme critérios internos, podendo realizar procedimentos de due diligence compatíveis com o perfil de risco do terceiro. Isso permite conhecer os reais riscos da contratação, garantindo que ela ocorra dentro dos padrões legais e de modo transparente e idôneo, de acordo com os parâmetros estabelecidos no Manual de Cadastro e Credenciamento de Parceiros – “Know Your Partner” (KYP).
                        </p>
                        <p>
                            Os documentos de identificação devem estar em vigor no momento de estabelecer relações comerciais ou realizar operações ocasionais. No caso de pessoas jurídicas, a validade dos dados contidos na documentação fornecida deve ser comprovada por meio de declaração do cliente. Se forem observadas discrepâncias, a identificação com a presença física do cliente será obrigatória.
                        </p>

                        <h3>Tratamento das Ocorrências e Comunicação aos Órgãos Competentes</h3>
                        <p>
                            Se, a partir dos procedimentos de controle e monitoramento interno, a Flucsus suspeitar da ocorrência de situações que acobertem a lavagem de dinheiro ou o financiamento do terrorismo, compromete-se a:
                        </p>
                        <ul>
                            <li>Todas as informações sobre eventuais ocorrências não serão divulgadas aos clientes e a terceiros, exceto quando requisitadas pelo judiciário. Especialmente no que tange às comunicações de ocorrências suspeitas previstas na Circular BACEN 3.978 de 2020, a Flucsus não reportará tal situação à pessoa física ou jurídica suspeita, sendo os dados e informações referentes às operações financeiras suspeitas utilizados exclusivamente pelos Órgãos Reguladores e de investigação para exame.</li>
                        </ul>

                        <h3>Abordagem Baseada em Risco</h3>
                        <p>
                            A abordagem baseada em risco está entre os princípios recomendados, garantindo que as medidas de prevenção ou mitigação da prática de Lavagem de Dinheiro e de Financiamento ao Terrorismo sejam proporcionais aos riscos identificados, com efetividade. A Flucsus adota política de identificação e classificação de riscos segmentados em baixo, médio e alto, para classificar os riscos de produtos, clientes, serviços, colaboradores e prestadores de serviços, definindo ações e procedimentos para seu adequado gerenciamento e respectiva mitigação.
                        </p>

                        <h4>9.1. Processo de Avaliação de Riscos</h4>
                        <p>
                            O processo de avaliação de riscos compreende atividades de identificação, análise, tratamento e monitoramento, descritas a seguir:
                        </p>
                        <ul>
                            <li><strong>Identificação do Risco:</strong> Busca, reconhecimento e descrição de riscos com base no contexto estabelecido e consulta às partes interessadas. O objetivo é produzir uma lista abrangente de riscos, incluindo causas, fontes e eventos que possam impactar os objetivos da Flucsus.</li>
                            <li><strong>Análise de Riscos:</strong> Processo de compreensão da natureza do risco e determinação do seu nível. Fornece a base para a avaliação e decisões sobre o tratamento dos riscos.</li>
                            <li><strong>Avaliação de Riscos:</strong> Comparação do nível de risco com os critérios estabelecidos, determinando se o risco é aceitável ou se requer tratamento.</li>
                            <li><strong>Tratamento dos Riscos:</strong> Seleção de opções para modificar o nível do risco, com planos de tratamento que introduzem novos controles ou modificam os existentes.</li>
                        </ul>

                        <p>
                            Analisar as operações e situações suspeitas no prazo máximo de 45 dias, contados a partir da data de seleção da operação ou situação, conforme parágrafo primeiro, art. 43 da Circular 3.978 de 2020;
                        </p>
                        <p>
                            Formalizar um dossiê capaz de identificar os envolvidos, os valores transacionados, datas, bem como a decisão de comunicação às autoridades competentes, fundamentada em evidências;
                        </p>
                        <p>
                            Comunicar a operação suspeita às instituições autorizadas pelo Banco Central do Brasil, quando envolvidas na cadeia de pagamentos da Flucsus, e reserva-se o direito de comunicar tal suspeita às autoridades competentes, como à Polícia Civil ou ao COAF. A Flucsus cooperará com as instituições financeiras autorizadas e as autoridades competentes para cumprir o dever legal e demonstrar zelo e diligência.
                        </p>
                        <p>
                            Monitoramento e Análise Crítica: Parte integrante da gestão de riscos, o monitoramento detecta mudanças no contexto externo e interno, podendo requerer revisão dos tratamentos adotados e levar à identificação de riscos emergentes.
                        </p>

                        <h3>Disposições Finais</h3>
                        
                        <h4>10.1. Prazo de Manutenção dos Dados e Informações de Clientes, Parceiros, Colaboradores e Prestadores de Serviços</h4>
                        <p>
                            Os documentos e informações cadastrais de clientes, colaboradores, parceiros e prestadores de serviços serão mantidos nos registros internos da Flucsus pelo prazo indicado nas legislações aplicáveis ou, quando omissas, de acordo com os critérios internos. Além disso, as instituições parceiras da Flucsus, autorizadas pelo Banco Central do Brasil a funcionar, devem respeitar os prazos específicos de conservação de dados e informações de parceiros, clientes e operações.
                        </p>

                        <h4>10.2. Ciência dos Profissionais</h4>
                        <p>
                            Todos os profissionais declaram estar cientes de que a Flucsus poderá monitorar todas e quaisquer atividades desenvolvidas em seus espaços físicos ou virtuais, com o único intuito de identificar condutas suspeitas e dar efetividade a esta Política, além das demais normas internas aplicáveis. Em caso de infração desta Política, a Flucsus se reserva no direito de analisar a conduta, a gravidade dos danos causados e, por fim, aplicar a medida disciplinar que julgar conveniente, podendo esta variar de advertência, suspensão e, em última instância, rescisão por justa causa. Esclarece-se ainda que, em nenhuma hipótese, a rescisão inviabiliza eventual ação de perdas e danos por parte da Flucsus contra o agente que deu causa ao descumprimento.
                        </p>

                        <h3>Atualização da Política</h3>
                        <p>
                            A atualização da presente Política ocorrerá sempre que alterações legislativas ou regulatórias relevantes ocorrerem, quando o cenário de negócios da empresa se modificar ou em decorrência da revisão da análise de risco, se assim for necessário. A Alta Administração ou o setor de compliance, se já implementado, será responsável por realizar as alterações e submetê-las à aprovação da Alta Administração.
                        </p>

                        <h3>Aprovação e Vigência</h3>
                        <p>
                            A presente Política foi aprovada pela alta administração da Flucsus Meios de Pagamento LTDA, entrando em vigência na data da sua aprovação. A presente Política tem prazo de vigência indeterminado, podendo ser substituída apenas por uma versão atualizada.
                        </p>
                    </section>
                    <section style={{ paddingTop: '30px', marginTop: '70px' }} id="PLD">
                        <h2>Manual de Avaliação Periódica da Auditoria Interna – PLD/FT</h2>

                        <h3>Apresentação</h3>
                        <p>
                            A avaliação da auditoria interna é essencial para garantir o cumprimento das exigências e recomendações das práticas de PLD/FT na Flucsus Meios de Pagamento LTDA. Esse processo busca verificar a conformidade com as regulamentações externas e os controles internos de prevenção à lavagem de dinheiro e combate ao financiamento do terrorismo. A auditoria identifica itens em desconformidade e oportunidades de melhoria, revisando sistematicamente a eficácia da gestão de PLD/FT adotada pela Flucsus, contribuindo para seu aprimoramento contínuo.
                        </p>

                        <h3>Objetivo</h3>
                        <p>
                            A avaliação periódica tem como objetivo assegurar a efetividade das políticas, controles e procedimentos de prevenção à lavagem de dinheiro e combate ao financiamento do terrorismo, conforme os padrões de controle e monitoramento exigidos pela regulamentação vigente e práticas adequadas ao porte da Flucsus Meios de Pagamento LTDA.
                        </p>

                        <h3>Normas de Referência</h3>
                        <p>
                            A Flucsus Meios de Pagamento LTDA se compromete a respeitar toda a legislação relacionada ao tema, bem como as normas, circulares e posicionamentos emitidos pelo BACEN e pelo COAF, incluindo:
                        </p>
                        <ul>
                            <li>Lei nº 9.613, de 3 de março de 1998: Dispõe sobre os crimes de “lavagem” ou ocultação de bens, direitos e valores e cria o Conselho de Controle de Atividades Financeiras - COAF.</li>
                            <li>Lei nº 12.846, de 1º de agosto de 2013: Trata da responsabilização administrativa e civil de pessoas jurídicas por atos contra a administração pública, nacional ou estrangeira.</li>
                            <li>BACEN Circular nº 3.978 de 23/01/2020: Estabelece políticas, procedimentos e controles internos a serem adotados pelas instituições autorizadas pelo Banco Central do Brasil.</li>
                            <li>BACEN Carta Circular nº 4.001 de 29/01/2020: Divulga operações e situações que podem configurar indícios de crimes de “lavagem” ou ocultação de bens e financiamento ao terrorismo.</li>
                            <li>Resolução CVM nº 50, de 31/08/2021: Regula a prevenção à lavagem de dinheiro, financiamento ao terrorismo e à proliferação de armas de destruição em massa.</li>
                            <li>Decreto nº 11.129 de 2022: Regulamenta a Lei nº 12.846, sobre a responsabilização de pessoas jurídicas por atos contra a administração pública.</li>
                        </ul>

                        <h3>Planejamento / Execução da Auditoria PLD/FT</h3>
                        <p>
                            O modelo de avaliação de efetividade em relação à prevenção à lavagem de dinheiro e combate ao terrorismo deve integrar o Planejamento Anual da Auditoria Interna da Flucsus. A avaliação da Auditoria Independente com foco em PLD/CFT deve abordar, no mínimo, os seguintes temas:
                        </p>
                        <ul>
                            <li>Cultura organizacional e capacitação voltada à PLD/CFT, adequada ao porte e perfil de negócios da Flucsus.</li>
                            <li>Existência de Políticas e Procedimentos formais, atualizados e aprovados pela diretoria.</li>
                            <li>Procedimentos de monitoramento e análise de comunicação ao COAF, ou Unidade de Inteligência Financeira (UIF), de situações que configurem indícios de PLD/CFT.</li>
                            <li>Políticas e ações internas de treinamento em PLD/CFT para funcionários e colaboradores.</li>
                            <li>Adoção de procedimentos de Conheça Seu Cliente (KYC) e Know Your Employee (KYE).</li>
                            <li>Realização de testes anuais de aderência cadastral.</li>
                        </ul>

                        <h3>Relatório de Avaliação de Efetividade</h3>
                        <p>
                            A Flucsus Meios de Pagamento LTDA emitirá Relatório de Avaliação de Efetividade, conforme a legislação vigente, com uma avaliação detalhada da aplicação das políticas e procedimentos definidos sobre o tema. Com base no Relatório de Auditoria, a Diretoria da Flucsus fornecerá planos e respostas de ação para regularizar os pontos levantados. A Diretoria de Compliance e PLD/FT será responsável pela elaboração do relatório anual de avaliação de efetividade, com o objetivo de revisar e aprimorar continuamente as orientações, procedimentos e controles internos.
                        </p>

                        <h3>Atualização e Vigência</h3>
                        <p>
                            O presente Manual será atualizado sempre que houver alterações legislativas ou regulatórias relevantes ou mudanças no cenário de negócios da Flucsus. Este Manual tem vigência indeterminada, podendo ser substituído apenas por uma versão atualizada.
                        </p>
                    </section>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
