// ============================================
// BANCO DE DADOS DE LIVROS
// ============================================
const books = [
    {
    id: 1,
    title: 'Empreendedorismo na Prática - Mitos e Verdades do Empreendedor de Sucesso',
    author: 'José Dornelas',
    category: 'Empreendedorismo',
    price: 10,
    originalPrice: 113,
    discount: 91,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 180,
    size: '22.8 x 15.8 x 1.4 cm',
    publisher: 'LTC',
    year: 2015,
    location: 'Rio de Janeiro',
    description: 'Empreendedorismo na Prática - Mitos e Verdades do Empreendedor de Sucesso traz a você a experiência dos empreendedores bem-sucedidos relatada pela óptica dos próprios protagonistas. Seu diferencial está na aplicabilidade prática imediata dos conceitos e relatos do livro, preenchendo uma lacuna que existia nas publicações relacionadas ao empreendedorismo. Trata-se de uma contribuição definitiva e um guia prático, útil aos que almejam ou já estejam engajados na fascinante jornada do negócio próprio.Através de sua leitura, você conhecerá os vários tipos de empreendedores existentes e entenderá qual tipo está mais adequado ao seu perfil, identificando o que é mito e o que é realidade sobre os empreendedores que atingem o sucesso. Além disso, terá acesso às conclusões do mais completo estudo já realizado com 399 empreendedores bem-sucedidos do Brasil, e saberá o que eles pensam e o que aconselham aos que estão começando ou já estão envolvidos na jornada empreendedora. Finalmente, você poderá desenvolver suas habilidades empreendedoras por meio de testes consagrados que identificam seu perfil empreendedor.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-1.jpg']
  },
{
    id: 2,
    title: 'O Pequeno Livro Azul da Programação da Produção',
    author: 'Mike Liddell',
    category: 'Planejamento e Controle da Produção (PCP)',
    price: 10,
    originalPrice: 109.9,
    discount: 90,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 127,
    size: '18 x 12 x 0.8 cm',
    publisher: 'Tecmaran Consultoria e Planejamento',
    year: 2009,
    location: 'Vitória',
    description: 'O Pequeno Livro Azul da Programação da Produção, de Mike Liddell, é um guia prático que ensina a otimizar o PCP industrial por meio de dicas eficazes e ferramentas avançadas. A obra foca na simplificação de processos para gerar resultados financeiros rápidos, destacando a necessidade de combinar profissionais qualificados com sistemas de programação. O livro utiliza a metáfora de uma orquestra para explicar como o planejamento correto evita o caos operacional. [1, 2]',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-2.jpg']
  },
{
    id: 3,
    title: 'Projeto e Desenvolvimento de Produtos',
    author: 'Antonio Nunes Barbosa Filho',
    category: 'Desenvolvimento de Produtos',
    price: 10,
    originalPrice: 89.9,
    discount: 88,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 181,
    size: '24 x 17 x 1.1 cm',
    publisher: 'Atlas',
    year: 2009,
    location: 'São Paulo',
    description: 'A obra Projeto e Desenvolvimento de Produtos, escrita por Antonio Nunes Barbosa Filho, apresenta o processo de criação industrial como a transformação de sonhos e necessidades humanas em realidade material viável. Com base em sua experiência acadêmica e profissional, o autor analisa os principais desafios enfrentados por designers e engenheiros no mercado contemporâneo, discutindo o impacto direto das decisões de projeto no consumo de recursos naturais, na geração de resíduos industriais e no descarte final dos objetos. O texto investiga estratégias para acelerar as etapas de desenvolvimento de novos itens com alta confiabilidade técnica, sem inflacionar o orçamento com protótipos de custo proibitivo, além de avaliar a importância da embalagem na logística de distribuição e as causas frequentes do fracasso comercial de mercadorias por inadequação ao usuário, desconforto ergonômico ou dificuldade de manutenção. Desenvolvida em linguagem simples, direta e reflexiva, a publicação funciona como um guia prático voltado para a viabilização de soluções eficientes em engenharia de produção, desenho industrial e administração de novos negócios.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-3.jpg']
  },
{
    id: 4,
    title: 'Plano de negócios com o modelo canvas: guia prático de avaliação de ideias de negócio a partir de exemplos',
    author: 'José Dornelas et al.',
    category: 'Empreendedorismo',
    price: 10,
    originalPrice: 65,
    discount: 84,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 240,
    size: '16.8 x 24 x 1.4 cm',
    publisher: 'LTC',
    year: 2015,
    location: 'Rio de Janeiro',
    description: 'Desmistificando a crença muito difundida de que o modelo Canvas e o plano de negócios são metodologias que se substituem uma pela outra, Plano de Negócios com o Modelo Canvas: Guia Prático de Avaliação de Ideias de Negócio a Partir de Exemplos parte de ideias conhecidas para propor algo revolucionário: a integração desses dois modelos clássicos de desenvolvimento de uma ideia empreendedora.A partir de perguntas-chave, o leitor poderá facilmente examinar o projeto que deseja empreender, aferir suas reais possibilidades, calibrar os aspectos necessários à sua viabilidade e basear-se em exemplos reais para ir em frente na construção e realização de sua ideia. Com comentários e problematizações baseados nas respostas possíveis às perguntas-chave, Plano de Negócios com o Modelo Canvas: Guia Prático de Avaliação de Ideias de Negócio a Partir de Exemplos também contempla as imperfeições e os percalços enfrentados pelo leitor, consolidando-se, assim, como um guia realista e verdadeiramente útil para todos os perfis de empreendedor. Aplicação:Livro-texto para as disciplinas Empreendedorismo e Plano de Negócios para os cursos de Administração, MBAs, Engenharias, Economia e Direito. Livro que atende ao público profissional, a empreendedores e executivos.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-4.jpg']
  },
{
    id: 5,
    title: 'Usando o MS Project 2007 em Gerenciamento de Projetos',
    author: 'Darci Prado',
    category: 'Gerenciamento de Projetos',
    price: 10,
    originalPrice: 62,
    discount: 83,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 312,
    size: '24 x 17 x 2 cm',
    publisher: 'INDG',
    year: 2011,
    location: 'Nova Lima',
    description: 'O objetivo desta publicação é apresentar o uso do software MS Project no ambiente de gerenciamento de projetos, o que foi feito por meio de um texto didático, apoiado em 95 exemplos para facilitar e ampliar o entendimento. O livro aborda a versão Standart, sendo que todos os aspectos relevantes (tempo, recursos e custos) são analisados. São apresentados também os melhoramentos e novidades desta versão com relação à de 2003. Apresenta-se também o uso do software WBS Chart Pro em parceria com o MS-Project.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-5.jpg']
  },
{
    id: 6,
    title: 'Muito Além da Vantagem Competitiva',
    author: 'Todd Zenger',
    category: 'Negócios e Gestão',
    price: 15,
    originalPrice: 85,
    discount: 82,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 192,
    size: '22.8 x 15.4 x 1.6 cm',
    publisher: 'M.Books',
    year: 2018,
    location: 'São Paulo',
    description: 'Sua empresa tem gerado lucro e cresce todo ano. Seus concorrentes não conseguem alcançá-lo.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-6.jpg']
  },
{
    id: 7,
    title: 'Criando Organizações Eficazes: Estruturas Em Cinco Configurações',
    author: 'Henry Mintzberg',
    category: 'Negócios e Gestão',
    price: 15,
    originalPrice: 76.35,
    discount: 80,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 336,
    size: '24 x 16.2 x 2.2 cm',
    publisher: 'Atlas',
    year: 2011,
    location: 'São Paulo',
    description: 'O que pode ser mais importante para a operação eficaz de nossas organizações, desde oficinas de conserto ate fábricas de automóveis, desde repartições públicas até governos de nações, que a criação de suas estruturas? Todavia, o que realmente conhecemos para esse planejamento? Ironicamente, conhecemos bastante, mas não na forma acessível para aquelas pessoas que devem levar a efeito projetos - administradores, gerentes. Empresários, diretores, presidentes e consultores. A vasta literatura sobre a estruturação de organização, quase sempre baseada em pesquisa empírica sistematizada, tem sido posta de lado por duas razões. A primeira é que na maioria, está contida em artigos e livros escritos em estilo acadêmico e destinados a pesquisadores. Os administradores desejosos de utilizar o que neles é explanado acham que a orientação de tais escritores é mais para verificar o que existe em lugar de mostrar o que deveria ser, ou, em outras palavras, expor o que ocorre nas organizações em lugar de propor como planejar uma estrutura eficaz. A segunda é que, apesar da amplitude da literatura e de seus muitos enfoques, o que falta é uma síntese. Como o administrador não consegue achar tais enfoques em um só lugar, virtualmente tem que percorrer toda a extensão da literatura para descobrir o que existe de útil para ele. Além disso, as contradições sobressaem nos resultados das pesquisas, com pouca ou nenhuma tentativa de reconciliação. Por isso tudo, quem tiver paciência para percorrer toda essa literatura sai dela ainda mais confuso. Este livro propõe responder a essas duas questões. Para isso, sintetiza as propostas destinadas à realização prática do planejamento de estruturas organizacionais, não como uma panacéia válida para tudo, mas como projetos a serem adequados a cada uma das cinco configurações puras em que ele classifica as organizações, bem como a cada tipo intermediário existente.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-7.jpg']
  },
{
    id: 8,
    title: 'TQC. Controle da Qualidade Total no Estilo Japonês',
    author: 'Vicente Falconi Campos',
    category: 'Gestão da Qualidade',
    price: 15,
    originalPrice: 66.75,
    discount: 77,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 256,
    size: '23.88 x 16.76 x 1.52 cm',
    publisher: 'INDG',
    year: 2004,
    location: 'Nova Lima',
    description: 'Este livro mostra o estado atual do TQC japonês como ensinado hoje pela JUSE-Union of Japonese Scientists and Engineers no Japão. A maneira como o material está disposto foi produto de muitos anos de trabalho junto a várias empresas brasileiras orientado e acompanhado pelo Sr. Ichiro Miyauchi da JUSE. Pelos resultados surpreendentes já conseguidos por várias empresas brasileiras como decorrência da implantação do TQC japonês este livro será certamente um guia simples e seguro para a sobrevivência das empresas à competição internacional.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-8.jpg']
  },
{
    id: 9,
    title: 'Administração De Produção E De Operações: Manufatura E Serviços - Ed. Compacta: Manufatura e Serviços: uma Abordagem Estratégica',
    author: 'Henrique L. Corrêa; Carlos A. Corrêa',
    category: 'Gestão da Produção',
    price: 15,
    originalPrice: 117,
    discount: 87,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 520,
    size: '23.8 x 16.6 x 2.2 cm',
    publisher: 'Atlas',
    year: 2013,
    location: 'São Paulo',
    description: 'Administração de Produção e Operações é uma área instigante e que tem mudado bastante nas últimas décadas em três principais sentidos: tornou-se mais estratégica, à medida que fica cada vez mais claro o seu potencial de contribuição para o desempenho competitivo das organizações em que se insere; ampliou seu escopo de atuação, de exclusivamente fabril, para um escopo que inclui a gestão dos tão importantes serviços - não só em relação às empresas tradicionalmente consideradas prestadoras de serviços, como os hospitais e as companhias aéreas, mas também em relação às parcelas crescentes de serviços que as empresas manufatureiras têm oferecido aos seus clientes como forma de se diferenciarem da concorrência; mais recentemente, estendeu seu horizonte de preocupações, da gestão apenas de unidades operacionais (as fábricas individuais, as unidades individuais de prestação de serviços) para a gestão de redes de unidades operacionais interativas, as chamadas redes de suprimentos.   Este livro traz os principais e mais contemporâneos conceitos e técnicas da área de Administração de Produção e Operações, transitando sempre na fronteira entre o rigor conceitual e a aplicabilidade prática. Para isso apresenta numerosos casos, exemplos e exercícios de aplicação das técnicas não só em empresas brasileiras, mas também em empresas e situações internacionais relevantes.   Livro-texto para as disciplinas Administração da Produção I e Administração da Produção II dos cursos de graduação em Administração de Empresas e Administração de Produção e Gestão de Operações em programas de MBA e de especialização. Leitura relevante para profissionais das áreas de Produção e Operações, Marketing e Finanças. Literatura de apoio para várias disciplinas de cursos de Engenharia de Produção e de Administração de Empresas, como Administração de Materiais, Planejamento e Controle da Produção, Controle de Qualidade, Administração de Manutenção, Gestão de Projetos e Gestão de Serviços.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-9.jpg']
  },
{
    id: 10,
    title: 'Usando O Arena Em Simulação',
    author: 'Darci Prado',
    category: 'Simulação',
    price: 15,
    originalPrice: 55,
    discount: 72,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 307,
    size: '24 x 17 x 2 cm',
    publisher: 'Falconi',
    year: 2010,
    location: 'Belo Horizonte',
    description: 'Simulação é uma técnica que permite imitar o funcionamento de um sistema real em um computador. Pode-se ver, na tela do computador, o funcionamento de uma linha de produção, o tráfego nas ruas de uma cidade ou o funcionamento de uma agência bancária.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-10.jpg']
  },
{
    id: 11,
    title: 'Resíduos sólidos: problema ou oportunidade?',
    author: 'Daniel Véras Ribeiro; Márcio Raymundo Morelli',
    category: 'Engenharia Ambiental',
    price: 20,
    originalPrice: 86,
    discount: 76,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 135,
    size: ' 22.4 x 15 x 1.2 cm',
    publisher: 'Editora Interciência',
    year: 2009,
    location: 'Rio de Janeiro',
    description: 'A geração de resíduos é um problema que acompanha o desenvolvimento da humanidade ao longo dos séculos. No entanto, somente após a Revolução Industrial este problema se tornou relevante e passou a comprometer a qualidade de vida das comunidades. Os avanços tecnológicos possibilitaram cada vez mais o acesso dos indivíduos a bens de consumo e o aumento deste consumo incentivou o aumento da produção industrial, fechando um ciclo, que tem como consequência a degradação ambiental. Apesar disso, a busca pelo crescimento econômico de forma desenfreada fez com que as questões ambientais somente viessem à tona nas últimas décadas do século passado. Por isso, a procura por soluções que busquem atenuar os impactos ambientais gerados pelo homem vêm se multiplicando. Neste sentido, é apresentada uma metodologia de gestão de resíduos sólidos, que tem como objetivo transformar este lixo industrial em um novo insumo que pode ser aproveitado pela mesma indústria geradora ou outras, de setores diversos.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-11.jpg']
  },
{
    id: 12,
    title: 'Logística reversa e sustentabilidade',
    author: 'André Luiz Pereira et at.',
    category: 'Engenharia Ambiental',
    price: 20,
    originalPrice: 108,
    discount: 81,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 208,
    size: '22.8 x 15.6 x 1.2 cm',
    publisher: 'Cengage Learning',
    year: 2012,
    location: 'São Paulo',
    description: 'O tema logística reversa e sustentabilidade normalmente está associado às funções de pós-venda e pós-consumo. Logo, esta área do conhecimento está associada a temas já conhecidos pelo público-alvo desta obra. No entanto, o objetivo deste livro é apresentar a logística reversa, alinhando o seu conteúdo à sustentabilidade e ao controle de resíduos nas organizações. Além disso, propõe pensar e expor os conhecimentos sobre a logística reversa e sustentabilidade de forma inovadora, com a adoção de novos conceitos e instigando os leitores a gerir as organizações em geral, em busca dos melhores resultados e benefícios para a sociedade.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-12.jpg']
  },
{
    id: 13,
    title: 'Introdução à Engenharia Ambiental: O Desafio do Desenvolvimento Sustentável',
    author: 'Benedito Braga et at.',
    category: 'Engenharia Ambiental',
    price: 20,
    originalPrice: 261.79,
    discount: 92,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 318,
    size: '27.94 x 20.83 x 2.03 cm',
    publisher: 'Pearson Universidades',
    year: 2005,
    location: 'São Paulo',
    description: '´Introdução à engenharia ambiental´ pretende colaborar na capacitação do indivíduo para o contínuo desafio de melhorar o trinômio meio ambiente - desenvolvimento econômico - qualidade de vida. O livro procura relacionar a engenharia com outras áreas do conhecimento, já que transmite a visão da engenharia em relação ao meio ambiente, além de apresentar a questão do conflito entre os aspectos socioeconômicos e os ambientais como um dos grandes desafios da engenharia no futuro. Esta edição leva em conta o dinamismo dos temas e dos próprios sistemas abordados, atualizando dados e conceitos e incluindo um novo capítulo sobre métodos de gestão corporativa para o meio ambiente e prevenção da poluição.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-13.jpg']
  },
{
    id: 14,
    title: 'Empreendedorismo: Vocação, Capacitação E Atuação Direcionadas Para O Plano De Negócios',
    author: 'Djalma de Pinho Rebouças de Oliveira',
    category: 'Empreendedorismo',
    price: 20,
    originalPrice: 220,
    discount: 90,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 376,
    size: '23.8 x 17 x 2.4 cm',
    publisher: 'Atlas',
    year: 2014,
    location: 'São Paulo',
    description: 'Este livro foi escrito para ocupar um ?espaço relativamente vazio? no campo do empreendedorismo inerente, principalmente, a seis questões:   1 ? Suprir as carências de estruturas metodológicas diversas para análises, desenvolvimentos e operacionalizações de atividades correlacionadas ao empreendedorismo. 2 ? Consolidar estruturado direcionamento do leitor para o entendimento do que tem sido, e do que deverá ser, o empreendedorismo como atuação pessoal e profissional. 3 ? Facilitar a análise da vocação do leitor como empreendedor, e o que deve ? e pode ? ser feito a respeito. 4 ? Apresentar os conhecimentos, habilidades e atitudes básicos que, normalmente, sustentam e consolidam a efetiva capacitação dos empreendedores. 5 ? Explicar como o empreendedor deve atuar e operacionalizar as suas ideias, pela elaboração, implementação e aprimoramento de um plano de negócios. 6 ? Consolidar uma abordagem ? além de conceitual e estruturada ? fortemente prática, com a apresentação de uma série de dicas para o leitor.   Embora este livro esteja direcionado, prioritariamente, aos futuros empreendedores, é de elevada valia no processo de aprimoramento ? pessoal e profissional ? dos atuais empreendedores.   Livro-texto para as disciplinas Empreendedorismo, Plano de carreira, Vocação profissional, Capacitação profissional e Plano de negócios dos cursos de graduação e pós-graduação em Administração, Contabilidade, Economia, Engenharia, Comunicações, Tecnologia, Direito, entre outros.   ? Livro básico para os profissionais que pretendem se tornar empreendedores, pela montagem de um negócio.   ? Leitura de atualização e reciclagem profissional para os que já constituíram seus empreendimentos, mas querem debater e ampliar suas atuações.   ? Leitura de orientação básica para os empreendedores que precisam analisar o processo sucessório em suas empresas',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-14.jpg']
  },
{
    id: 15,
    title: 'Pesquisa Operacional: Técnicas De Otimização Aplicadas A Sistemas Agroindustriais',
    author: 'José Vicente Caixeta-Filho',
    category: 'Pesquisa Operacional',
    price: 20,
    originalPrice: 59,
    discount: 66,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 176,
    size: '23.62 x 16.76 x 1.27 cm',
    publisher: 'Atlas',
    year: 2015,
    location: 'São Paulo',
    description: 'Este livro, originado com base em projeto de pesquisa apoiado pelo CNPq (Conselho Nacional de Desenvolvimento Científico e Tecnológico), objetiva familiarizar o estudante a identificar os problemas aos quais técnicas de otimização podem ser aplicadas, estabelecer as relações entre Programação Linear e Teoria Econômica, além de proporcionar oportunidades para o uso de pacotes computacionais de programação matemática para solução de problemas na área agroindustrial.   Entre as outras características que a obra apresenta, ressaltam-se a utilização de técnicas de programação matemática (programação linear, inteira e não linear) em problemas do dia-a-dia do brasileiro, o potencial de aplicações/modelos a serem desenvolvidos em contextos agroindustriais, o tratamento bastante didático na apresentação das teorias pertinentes, os conceitos básicos de modelagem, estruturação de modelos lineares e não lineares e as soluções comentadas dos exercícios.   Livro-texto para as disciplinas Pesquisa Operacional, Programação Linear, Administração Rural, Administração de Projetos, Métodos Quantitativos e Otimização de Sistemas. Leitura complementar para as disciplinas Transporte e Logística, Formulação de Rações e Matemática aplicada dos cursos de Administração de Empresas, Agronomia e Engenharia.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-15.jpg']
  },
{
    id: 16,
    title: 'Pesquisa operacional para os cursos de administração e engenharia: Programação linear e simulação',
    author: 'Ermes Medeiros da Silva et al.',
    category: 'Pesquisa Operacional',
    price: 20,
    originalPrice: 50,
    discount: 60,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 208,
    size: '24.4 x 16.6 x 1.4 cm',
    publisher: 'Atlas',
    year: 2010,
    location: 'São Paulo',
    description: 'Além de ser um livro-texto ajustado às necessidades de ensino, auxilia o professor a direcionar o estudo da disciplina, liberando-o de transcrever a matéria no quadro, pois essa atividade é uma fonte de propagação de erros e pouco traz de retorno ao aluno em termos de entendimento e fixação de conhecimentos. A Programação Linear e a Simulação são enfocadas. A Programação Linear tem o mérito de envolver conhecimentos matemáticos relativamente simples e de larga aplicação no campo da administração. Além disso, sua técnica resolutiva é programável em computador, havendo no mercado softwares específi cos para isso. A Simulação é o modelo mais geral em Pesquisa Operacional. Seu estudo estimula o conhecimento do sistema envolvido e da metodologia da Pesquisa Operacional. Sua técnica resolutiva envolve conhecimentos simples de Estatística Básica no nível apresentado, sendo também facilmente programável em computador. Algumas planilhas (Lotus e Excel, por exemplo) são de grande auxílio e podem ser facilmente encontradas. Livro-texto para a disciplina Pesquisa Operacional dos cursos de Administração de Empresas e Engenharia de Produção.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-16.jpg']
  },
{
    id: 17,
    title: 'Cálculo Numérico',
    author: 'Reinaldo Burlan; Antonio Carlos De Lima; Annibal Hetem Junior',
    category: 'Cálculo Numérico',
    price: 20,
    originalPrice: 109.9,
    discount: 81,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 153,
    size: '28 x 21 x 2.5 cm',
    publisher: 'LTC',
    year: 2007,
    location: 'Rio de Janeiro',
    description: 'O livro Cálculo Numérico, escrito em parceria pelos professores e pesquisadores Reinaldo Burian, Antonio Carlos de Lima e Annibal Hetem Junior, destaca-se como um manual didático de alta utilidade para estudantes e profissionais das áreas de Engenharia e Ciências Exatas. Publicada pela editora LTC dentro da série Fundamentos de Informática, a obra preenche uma lacuna comum na formação acadêmica ao unir a teoria matemática rigorosa à prática da programação computacional, focando na resolução de problemas complexos que não possuem soluções analíticas simples.A grande força do livro reside na sua abordagem pragmática. Em vez de se limitar a demonstrações teóricas abstratas, os autores conduzem o leitor pela estrutura lógica dos algoritmos e apresentam implementações completas utilizando a linguagem C. Essa escolha de linguagem é estratégica, pois estimula o estudante a compreender a fundo o gerenciamento de memória e a lógica de programação de baixo nível, competências essenciais para o desenvolvimento de simulações numéricas eficientes e softwares de engenharia.Ao longo de suas páginas, o texto aborda de forma sequencial e lógica os principais pilares do cálculo numérico. O leitor aprenderá a encontrar raízes de equações por meio de métodos consagrados (como a Dicotomia e o método iterativo de Newton-Raphson), resolver sistemas lineares e realizar a aproximação de funções utilizando técnicas de interpolação polinomial e o Método dos Mínimos Quadrados. O livro também avança para tópicos de cálculo avançado, ensinando a calcular aproximações para integrais e a resolver equações diferenciais numericamente.Com uma linguagem direta e acessível para quem não possui domínio nativo de matemática avançada, a obra se consolida como uma ferramenta indispensável. Ela transforma conceitos matemáticos densos em códigos prontos para rodar, preparando o leitor para enfrentar desafios reais de modelagem matemática no ambiente de trabalho ou na pesquisa acadêmica.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-17.jpg']
  },
{
    id: 18,
    title: 'The Official Guide to the TOEFL Test With CD-ROM, 4th Edition',
    author: 'Educational Testing Service',
    category: 'Inglês / TOEFL',
    price: 30,
    originalPrice: 692,
    discount: 95,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 747,
    size: '21.34 x 4.32 x 27.43 cm',
    publisher: 'McGraw-Hill Education',
    year: 2012,
    location: 'Estados Unidos da America',
    description: 'O livro The Official Guide to the TOEFL Test (4th Edition) é o guia oficial de preparação para o exame de proficiência, desenvolvido inteiramente na língua inglesa pela própria criadora da prova, a ETS. Esta obra oferece uma imersão completa no formato do teste, trazendo explicações detalhadas sobre as seções de leitura, compreensão auditiva, expressão oral e escrita. O material se destaca por conter centenas de questões reais de exames anteriores com comentários sobre as respostas, além de critérios oficiais de avaliação e redações de exemplo. Acompanhado de um CD-ROM, o livro permite que o estudante realize simulados interativos no computador que reproduzem a interface real do exame, tornando-se uma ferramenta prática e indispensável para quem busca a aprovação em universidades estrangeiras.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-18.jpg']
  },
{
    id: 19,
    title: 'Gestão de Operações. A Engenharia de Produção a Serviço da Modernização da Empresa',
    author: 'José Celso Contador',
    category: 'Gestão da Produção',
    price: 30,
    originalPrice: 60,
    discount: 50,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 632,
    size: '23.8 x 17 x 3.4 cm',
    publisher: 'Edgard Blucher',
    year: 1998,
    location: 'São Paulo',
    description: 'O sucesso da empresa moderna depende do sucesso de suas operações. E o sucesso de suas operações depende fundamentalmente da estratégia e da forma como elas são geridas. Assim, a gestão de operações, que sempre foi importante, assume singular magnitude no mundo atual, onde a competição empresarial torna-se dia a dia mais acirrada. É nesse cenário que se insere este livro, cujo objetivo é divulgar os ensinamentos da Engenharia de Produção, necessários à excelência das decisões e das operações em todos os níveis hierárquicos da empresa. O livro visa dois públicos alvos: alunos dos cursos de graduação em Engenharia, em Administração e em Economia; profissionais, geralmente engenheiros e administradores de empresa, que ocupam cargo de chefia, ou a ele aspiram, na área de operações empresariais, principalmente industriais. Os ensinamentos do livro aplicam-se a qualquer tipo de empresa industrial, comercial, agrícola, de serviços, qualquer que seja seu porte. Dão, entretanto, especial atenção à empresa industrial, por ser a mais complexa das organizações e, por razões históricas, ligadas ao surgimento da Engenharia de Produção. Os autores são professores, na maioria da Universidade de São Paulo, e escreveram sobre assuntos em que possuem larga experiência, tanto em ensino como em consultoria, focando seu texto no que há de mais importante e atual no objeto de seu capítulo.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-19.jpg']
  },
{
    id: 20,
    title: 'Organização, o Planejamento e o Controle da Manutenção',
    author: 'Gil Branco Filho',
    category: 'Manutenção',
    price: 50,
    originalPrice: 72,
    discount: 30,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 280,
    size: ' 23 x 15.8 x 1.6 cm',
    publisher: 'Ciencia Moderna',
    year: 2008,
    location: 'Rio de Janeiro',
    description: 'Este livro é uma oportunidade para os profissionais de manutenção. Ele consolida e disponibiliza o grande conhecimento do autor sobre o planejamento e controle de manutenção, já disseminada em cursos ministrados por todo brasil, tornando-o acessível a todos. O tema é sem dúvida a base indispensável para o enfoque científico e ordenado da manutenção e as informações contidas na obra são ferramentas de extrema utilidade no cotidiano dos engenheiros e planejadores. Gil branco é engenheiro eletrônico (ufrj 1969), engenheiro elétrico (usu 1978) e pós graduado em engenharia econômica (uerj 1984), com especialização em automatização naval (inglaterra 1970). Diversos estágios e treinamento em técnicas de gerência de manutenção em diversas fábricas no brasil e no exterior. Diversos cursos na área da qualidade. Mais de 46 anos em manutenção, em estaleiros, área naval, metalúrgica, área industrial, farmacêutica, aeronáutica e prestação de serviços.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-20.jpg']
  },
{
    id: 21,
    title: 'Ergonomia: Projeto e Produção',
    author: 'Itiro Iida',
    category: 'Ergonomia',
    price: 50,
    originalPrice: 295,
    discount: 83,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 614,
    size: '26.16 x 20.57 x 3.81 cm',
    publisher: 'Blucher',
    year: 2005,
    location: 'São Paulo',
    description: 'Esta obra foi amplamente aceita desde a sua publicação inicial, tendo sido adotada como livro-texto em muitos cursos universitários de graduação e pós-graduação. Para esta nova edição, o autor fez revisão e atualização completas do seu conteúdo. O livro é destinado aos estudantes que tomam primeiro contato com a ergonomia, não se exigindo conhecimentos anteriores em outras ciências como a anatomia, fisiologia, psicologia ou estatística. Como o próprio título indica, pode ser útil aos profissionais de projeto, como os engenheiros, arquitetos e designers. Além disso, apresenta conhecimentos valiosos para aqueles que planejam e gerenciam recursos humanos no trabalho.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-21.jpg']
  },
{
    id: 22,
    title: 'Official TOEFL iBT® Tests Volume 1, 2nd Edition: Vol. 1',
    author: 'Educational Testing Service',
    category: 'Inglês / TOEFL',
    price: 50,
    originalPrice: 499,
    discount: 89,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 457,
    size: ' 21.59 x 2.54 x 27.69 cm',
    publisher: 'McGraw-Hill Education',
    year: 2015,
    location: 'Estados Unidos da America',
    description: 'O Official TOEFL iBT® Tests Volume 1, 2nd Edition é um guia prático desenvolvido diretamente pela ETS (Educational Testing Service), a instituição responsável pela criação e aplicação do exame de proficiência TOEFL. Redigido integralmente em inglês, o livro é composto por cinco simulados autênticos que utilizam questões reais aplicadas em exames passados, abrangendo de maneira detalhada as quatro seções da prova: Reading, Listening, Speaking e Writing. Esta segunda edição traz como diferencial o suporte interativo via mídia digital, permitindo ao estudante realizar os testes diretamente no computador para simular a experiência real do ambiente iBT. Além dos testes, o material oferece gabaritos comentados, transcrições completas de todos os áudios e exemplos reais de respostas para as seções de fala e escrita, servindo como uma ferramenta robusta para diagnóstico de desempenho e revisão de conteúdo. Cabe ressaltar que, por se tratar de uma publicação anterior às mudanças estruturais do exame ocorridas em 2023, o volume segue o formato e a duração antiga do teste, embora o nível de exigência e o estilo das questões permaneçam altamente fiéis ao padrão cobrado atualmente.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-22.jpg']
  },
{
    id: 23,
    title: 'Otimização Combinatória e Programação Linear',
    author: 'Marco Cesar Goldbarg; Henrique Pacca L. Luna',
    category: 'Pesquisa Operacional',
    price: 50,
    originalPrice: 420,
    discount: 88,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 536,
    size: ' 28 x 20.8 x 2.6 cm',
    publisher: 'Elsevier',
    year: 2005,
    location: 'Rio de Janeiro',
    description: 'Esta obra tem por objetivo propiciar subsídios técnicos, descrever modelos matemáticos, debater algoritmos de solução e sugerir temas de aplicação, dentro da visão quantitativa de análise do fenômeno de tomada de decisão, principalmente aos alunos de graduação das engenharias, cursos de administração e de ciência da computação. O conteúdo programático coberto pelos capítulos 1 a 5 engloba o que é exigido em disciplinas como “Pesquisa Operacional”, “Otimização de Sistemas de Engenharia”, “Programação Linear” e outras. O conteúdo dos capítulos 6 a 10 aborda temas que são objeto de disciplinas como “Otimização Combinatória”, “Algoritmos em Grafos”, “Fluxos em Redes”, entre outras. Essa segunda parte do livro contém material um pouco mais avançado, servindo a disciplinas optativas de nossos cursos de graduação ou a disciplinas de pós-graduação. Uma outra característica marcante deste trabalho são as várias aplicações práticas retiradas da realidade brasileira, o que permite aproximar a disciplina ao dia-a-dia do estudante, aumentando o incentivo à motivação. No âmbito da programação linear, o livro é caracterizado pelo uso intensivo de interpretação econômica do método simplex e das relações de dualidade e sensibilidade. A ideia é lembrar que as ferramentas de otimização indicam as atividades de maior produtividade nas empresas e que o uso dessas ferramentas também indica os preços de maior competitividade. No âmbito da otimização combinatória, como o próprio nome indica, o livro se caracteriza pela apresentação dos problemas através do uso deliberado de formulações de programação linear inteira mista. Além do interesse teórico, a formulação de problemas combinatórios através da programação inteira abre caminho para o uso dos eficientes pacotes comerciais de programação matemática, cujo avanço na solução exata de importantes problemas práticos tem sido marcante. Mesmo para heurísticas que dispensam a formulação de programação linear inteira, muitas vezes podem ser feitas avaliações de qualidade de solução mediante o uso de relaxação do problema de programação linear. Constituindo uma versão atualizada que preserva o conteúdo original e melhora a forma de apresentação, esta segunda edição contempla uma significativa inclusão de referências à produção científica do primeiro lustre do novo milênio. A atualização resultou em um saldo positivo de dezenas de páginas, com a supressão de algumas páginas do apêndice que não eram referenciadas no texto principal da primeira edição. A rica ilustração do livro foi reorganizada com a numeração restrita ao escopo de cada capítulo, abrangendo as referências a figuras, equações, quadros e tabelas, que, por sua vez, tiveram apresentação padronizada. Esta segunda edição surge numa época em que se consolida a ligação entre otimização combinatória e programação linear, o que ratifica o acerto do nome do livro e a importância da matéria nele ensinada.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-23.jpg']
  },
{
    id: 24,
    title: 'Manufatura Enxuta Como Estratégia De Produção: A Chave Para A Produtividade Industrial',
    author: 'Dalvio Ferrari Tubino',
    category: 'Gestão da Produção',
    price: 50,
    originalPrice: 233,
    discount: 78,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 336,
    size: '24 x 16.8 x 1.8 cm',
    publisher: 'Atlas',
    year: 2015,
    location: 'São Paulo',
    description: 'Produtividade, mais especificamente, produtividade industrial. É disso que trata este livro. Nunca dantes na história deste país a produtividade industrial foi tão importante para a sobrevivência das empresas. Quando as margens de lucro se apertam forçadas pela concorrência, a variável de controle passa do preço para o custo dos produtos. Temos que reduzir custos no chão de fábrica, aumentando ao mesmo tempo a qualidade e melhorando a flexibilidade e o desempenho de entrega. Essa questão também é abordada aqui, ou seja, o aumento da produtividade industrial na estratégia da diferenciação. O autor acompanha a produtividade industrial desde sua entrada na engenharia de produção da UFSC, no início dos anos 80, com um foco especial nas atividades de planejamento e controle da produção (PCP) dos sistemas produtivos. Nessa mesma época entrou em cena o Sistema Toyota de Produção (STP), com suas práticas inovadoras para o aumento da produtividade na indústria automobilística. Ao se expandir para os demais setores, ao longo destes mais de 30 anos, esta estratégia de produção foi assumindo o nome de manufatura enxuta (ME) ou Lean. A estratégia da ME e suas práticas para o aumento da produtividade industrial também é foco deste livro. A obra está dividida em oito capítulos que explicam, com base no ciclo virtuoso da ME, como esta estratégia de produção alavanca a produtividade. Os temas são: Análise da demanda e nivelamento do plano-mestre, produção em fluxo em células e linhas de montagem, balanceamento dos centros de trabalho com rotinas de operações-padrão e polivalência, programação puxada pelo cliente, redução no tamanho dos lotes econômicos e redução dos tempos de preparação, além dos conhecidos desperdícios e melhorias contínuas. Cada capítulo apresenta problemas e soluções vivenciados pelo autor em diferentes segmentos industriais, felizmente todos longe da indústria automobilística. Aqui o leitor verá pessoas e não softwares ou máquinas fazendo a diferença, e como elas podem, uma vez bem organizadas, contribuir para o aumento da produtividade. Livro recomendado para gestores e líderes de fábricas que buscam na estratégia da manufatura enxuta as práticas para aumentar sua produtividade. Leitura complementar para as disciplinas Administração da Produção, Gestão da Produção, Planejamento e Controle da Produção, Sistemas de Produção e Manufatura Enxuta ou Lean.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-24.jpg']
  },
{
    id: 25,
    title: 'METHODS OF MULTIVARIATE ANALYSIS',
    author: 'Alvin C. Rencher',
    category: 'Estatística',
    price: 50,
    originalPrice: 1530.17,
    discount: 96,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 738,
    size: '16.45 x 3.95 x 23.3 cm',
    publisher: 'Wiley–Blackwell',
    year: 2002,
    location: 'Estados Unidos da America',
    description: 'Amstat News asked three review editors to rate their top five favorite books in the September 2003 issue. Methods of Multivariate Analysis was among those chosen. When measuring several variables on a complex experimental unit, it is often necessary to analyze the variables simultaneously, rather than isolate them and consider them individually. Multivariate analysis enables researchers to explore the joint performance of such variables and to determine the effect of each variable in the presence of the others. The Second Edition of Alvin Rencher s Methods of Multivariate Analysis provides students of all statistical backgrounds with both the fundamental and more sophisticated skills necessary to master the discipline. To illustrate multivariate applications, the author provides examples and exercises based on fifty-nine real data sets from a wide variety of scientific fields. Rencher takes a methods approach to his subject, with an emphasis on how students and practitioners can employ multivariate analysis in real-life situations. The Second Edition contains revised and updated chapters from the critically acclaimed First Edition as well as brand-new chapters on: - Cluster analysis; - Multidimensional scaling; - Correspondence analysis; - Biplots. Each chapter contains exercises, with corresponding answers and hints in the appendix, providing students the opportunity to test and extend their understanding of the subject. Methods of Multivariate Analysis provides an authoritative reference for statistics students as well as for practicing scientists and clinicians.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-25.jpg']
  },
{
    id: 26,
    title: 'Introdução a Modelagem e Simulação de Sistemas com Aplicações em Arena',
    author: 'Paulo José de Freitas Filho',
    category: 'Simulação',
    price: 50,
    originalPrice: 82,
    discount: 39,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 372,
    size: '22.8 x 15.4 x 2.6 cm',
    publisher: 'Visual Books',
    year: 2008,
    location: 'Florianópolis',
    description: 'Melhorias na qualidade e na produtividade dos sistemas implicam na descoberta e implementação de novas idéias, processos e ações. Isso demanda que o desempenho de numerosas alternativas venha a ser corretamente previsto em termos de sua habilidade em melhorar a eficiência, economia e efetividade do trabalho. A modelagem e simulação de sistemas é a mais avançada ferramenta computacional voltada a esse propósito.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-26.jpg']
  },
{
    id: 27,
    title: 'Descobrindo a Estatística Usando o SPSS',
    author: 'Ardy Fleld',
    category: 'Estatística',
    price: 50,
    originalPrice: 267,
    discount: 81,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 688,
    size: '24.6 x 17.6 x 3.8 cm',
    publisher: 'Artmed',
    year: 2009,
    location: 'Porto Alegre',
    description: 'Escrito no estilo vívido de Andy Field e enriquecido com exemplos divertidos da vida diária dos estudantes, o livro forma uma ponte acessível para o mundo frequentemente intimidante da estatística. É oportunidade única para estudantes fundamentarem seus conhecimentos de estatística com o uso do SPSS.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-27.jpg']
  },
{
    id: 28,
    title: 'Cálculo - Vol. 2',
    author: ' Mustafa A. Munem; David J. Foulis ',
    category: 'Cálculo',
    price: 50,
    originalPrice: 232,
    discount: 78,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 476,
    size: '25.4 x 17.8 x 3.4 cm',
    publisher: 'LTC',
    year: 1982,
    location: 'Rio de Janeiro',
    description: 'Este livro-texto destina-se aos cursos de graduação normais em cálculo e oferece o fundamento indispensável em cálculo e geometria analítica para os estudantes de matemática, engenharia, física, química, economia e ciências biológicasO Capítulo 0 fornece uma revisão da matemática básica que precede o cálculo, incluindo desigualdades, coordenadas cartesianas, trigonometria e funções. O cálculo propriamente dito principia no Capítulo 1, com os limites e a continuidade de funções. As fórmulas de diferenciação, para as funções trigonométricas, são introduzidas informalmente no Capítulo 2, de modo a serem acessíveis ao aluno que não vai seguir todo o curso de cálculo, e para facilitar o estudo dos alunos de engenharia e de física, que precisam destas fórmulas tão cedo quanto possível. As aproximações lineares aparecem no Capítulo 2 e são usadas para se ter uma prova rigorosa da regra da cadeia. O Capítulo 4 apresenta uma exposição resumida, mas razoavelmente completa, sobram as seções cônicas e respectivas propriedades ? no Capítulo 11 aparece mais matéria sobre as cônicas (formas polares e rotação de eixos). As equações diferenciais simples constituem o tema principal do Capítulo 5. No Capítulo 6 aparece a definição corrente da integral definida como um limite de somas de Riemann.Durante todo o decorrer do livro, o leitor é estimulado continuamente a visualizar as relações analíticas em forma geométrica. Nos Capítulos 14 e 15 a formulação geométrica direta dos diversos problemas é realçada pela introdução de vetores. Todos os conceitos que envolvem vetores são introduzidos, inicialmente, de forma geométrica. O Capítulo 17 inclui três seções sobre integrais de linha, integrais de superfície, teorema de Green, teorema da divergência, de Gauss e teorema de Stokes.Também há um capítulo sobre equações diferenciais. Neste capítulo suplementar os autores cobrem as técnicas de resolução de equações diferenciais homogêneas, exatas, lineares de primeira e de segunda ordem e equações de Bernoulli. Também se expõe sucintamente o emprego de séries de potências para resolver equações diferenciais.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-28.jpg']
  },
{
    id: 29,
    title: 'Um Curso de Cálculo - Vol. 3: Volume 3',
    author: 'Hamilton Luiz Guidorizzi',
    category: 'Cálculo',
    price: 50,
    originalPrice: 239.9,
    discount: 79,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 362,
    size: '22.8 x 15.8 x 2 cm',
    publisher: 'LTC',
    year: 2002,
    location: 'Rio de Janeiro',
    description: 'Neste volume de Um Curso de Cálculo, o capítulo 1 aborda as funções de várias variáveis reais a valores vetoriais com relação a limite e derivação parcial. São vistos, ainda, os conceitos de rotacional e de divergente de um campo vetorial. Nos capítulos 2 a 5, o leitor encontra as integrais duplas e triplas. No capítulo 6, o autor introduz o conceito de integral de linha e o capítulo seguinte apresenta os campos conservativos. O capítulo 8 é dedicado ao Teorema de Green no plano. Os conceitos de área de superfície e de integral de superfície são abordados no próximo capítulo. Os capítulos 10 e 11 são destinados aos teoremas da divergência (ou de Gauss) e de Stokes no espaço, respectivamente. Os teoremas da função inversa e da função implícita são tratados no Apêndice 4.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-29.jpg']
  },
{
    id: 30,
    title: 'Um Curso de Cálculo - Vol. 2: Volume 2',
    author: 'Hamilton Luiz Guidorizzi',
    category: 'Cálculo',
    price: 50,
    originalPrice: 249,
    discount: 79,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 496,
    size: '22.8 x 15.4 x 3 cm',
    publisher: 'LTC',
    year: 2008,
    location: 'Rio de Janeiro',
    description: 'A obra Um Curso de Cálculo é composta de quatro volumes que se baseiam nos cursos ministrados pelo autor, Prof. Hamilton Luiz Guidorizzi, para os alunos da Escola Politécnica da Universidade de São Paulo (USP), do Instituto de Matemática e Estatística da instituição e do Instituto de Ensino de Engenharia Paulista - IEEP. O texto é, portanto, fruto de uma experiência fascinante do autor ao longo dos últimos anos. Nesta 5ª edição, além dos capítulos novos e do novo visual das figuras, foi incluído também o Apêndice 2, que trata do uso da calculadora HP-48G, do Excel e do MathCad, em tópicos tratados neste volume. Todas as modificações foram feitas com o objetivo de tornar o texto mais dinâmico, mais prático e mais atual. Os exercícios estão dispostos em ordem crescente de dificuldade.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-30.jpg']
  },
{
    id: 31,
    title: 'Mecânica dos Fluidos',
    author: 'Franco Brunetti',
    category: 'Mecânica dos Fluidos',
    price: 50,
    originalPrice: 220.5,
    discount: 77,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 448,
    size: '23.88 x 17.02 x 2.29 cm',
    publisher: 'Pearson Universidades',
    year: 2008,
    location: 'São Paulo',
    description: 'Pensada e escrita especificamente para atender às necessidades dos alunos e professores de engenharia, esta segunda edição de Mecânica dos fluidos mantém as características que consagraram o livro como um dos mais didáticos e completos da área. Com seu método inovador de apresentar o conteúdo ― resultado da experiência do autor como docente em instituições de renome ―, o livro aborda, desde o início, situações regidas por hipóteses simplificadoras para que o leitor compreenda e se acostume com as principais variáveis e efeitos e, em seguida, elimina gradualmente as simplificações, chegando a equações mais abrangentes. Nesta nova edição, as qualidades didáticas da obra são intensificadas por uma nova apresentação visual, com ilustrações mais ricas. Além disso, uma nova seção com 40 exercícios permite que o aluno teste o conhecimento adquirido. Livro-texto para cursos de engenharia, Mecânica dos fluidos é também leitura recomendada para cursos técnicos e bibliografia de atualização para profissionais da área.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-31.jpg']
  },
{
    id: 32,
    title: 'Planejamento, Programação E Controle Da Produção MRP II/ERP: Conceitos, Uso E Implantação: MRP II/ERP - Conceitos, uso e Implantação, Base Para SAP, ... e Outros Softwares Integrados de Gestão',
    author: 'Henrique Luiz Corrêa et al.',
    category: 'Planejamento e Controle da Produção (PCP)',
    price: 50,
    originalPrice: 169,
    discount: 70,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 434,
    size: '23.8 x 17.2 x 2.4 cm',
    publisher: 'Atlas',
    year: 2012,
    location: 'São Paulo',
    description: 'Os sistemas integrados de gestão do empreendimento MRP II/ERP são hoje os mais largamente utilizados pelas empresas ao redor do mundo para o suporte integrado à tomada de decisão. A adoção de aplicativos de software que se utilizam da lógica MRP II/ERP, como o SAP, o BAAN4, o ORACLE ou várias dezenas de outros comercialmente disponíveis, está hoje no topo da lista de prioridades de grande parte dos gestores dos processos empresariais modernos. Entretanto, se a compra de um aplicativo de software robusto é condição necessária para o sucesso no uso do MRP II/ERP, está longe de ser condição suficiente. Antes de tudo, as empresas devem compreender perfeitamente os seus conceitos para uma implantação de sucesso. Este livro traz de forma simples e clara os conceitos essenciais para que os gestores gerenciem e participem de processos de implantação e gestão de sistemas MRP II/ERP.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-32.jpg']
  },
{
    id: 33,
    title: 'Geração de Valor',
    author: 'Flávio Augusto Da Silva',
    category: 'Negócios e Gestão',
    price: 10,
    originalPrice: 64.9,
    discount: 84,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 208,
    size: '22.8 x 16 x 1.4 cm',
    publisher: 'Sextante',
    year: 2014,
    location: 'Rio de Janeiro',
    description: 'Desde que nascem, as pessoas são treinadas para agir de acordo com o senso comum. O ensino convencional as estimula a buscar segurança, e não liberdade. Com medo de se arriscar, a maioria segue o fluxo da boiada e sonha pequeno, optando por seguir um emprego estável e passar anos financiando a casa própria. Flávio Augusto também sofreu todas essas pressões, mas conseguiu sair da conformidade bem cedo. De uma família simples da periferia do Rio de Janeiro, aos 23 anos, escolheu o caminho do empreendedorismo, criou uma escola de inglês que deu origem à bem-sucedida rede WiseUp e logo se tornou um dos mais jovens bilionários brasileiros.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-33.jpg']
  },
{
    id: 34,
    title: 'Logística Ambiental de Resíduos Sólidos',
    author: 'Daniela Bacchi Bartholomeu; José Vicente Caixeta Filho',
    category: 'Engenharia Ambiental',
    price: 30,
    originalPrice: 85,
    discount: 64,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 250,
    size: '23 x 14 x 16 cm',
    publisher: 'Atlas',
    year: 2011,
    location: 'São Paulo',
    description: 'Livro Logística Ambiental de Resíduos Sólidos Escritor: Daniela Bacchi Bartholomeu; José Vicente Caixeta Filho Editora: Atlas 1ª edição, 2011 Produto USADO! As fotos mostram o produto! Livro em bom estado.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-34.jpg']
  },
{
    id: 35,
    title: 'Industrial Maintenance',
    author: 'Michael E. Brumbach; Jeffrey A. Clade',
    category: 'Manutenção',
    price: 50,
    originalPrice: 1653.1,
    discount: 96,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 800,
    size: '20.96 x 3.18 x 27.94 cm',
    publisher: 'Delmar Learning',
    year: 2003,
    location: 'Estados Unidos da America',
    description: 'Designed for the jack of all trades technician, this unique book covers all five major areas of industrial maintenance knowledge -general, mechanical, electrical, welding, and preventive maintenance- in one complete volume! More than 700 photos and illustrations throughout complement the information that multi-crafted technicians need to know within each of these major subject areas. This book covers everything from basic information on safety, tools, industrial print reading and electrical theory to the inner workings of machinery and equipment so technicians can understand and effectively diagnose, troubleshoot, and provide preventive maintenance on industrial machines. Coverage is comprehensive in nature and is arranged in a modular format to make finding information quick and easy, making this an excellent reference for both the novice and the experienced technician.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-35.jpg']
  },
{
    id: 36,
    title: 'Curso de Estatística',
    author: 'Jairo Simon da Fonseca; Gilberto de Andrade Martins',
    category: 'Estatística',
    price: 30,
    originalPrice: 162.9,
    discount: 81,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 320,
    size: '23.4 x 17 x 1.6 cm',
    publisher: 'Atlas',
    year: 2010,
    location: 'São Paulo',
    description: 'Este texto reúne matéria essencial para cursos universitários de Estatística, centrando-se no estudo das probabilidades, inferência e estatística não-paramétrica. Fruto de experiências vivenciadas na condução de cursos de Estatística para o 3º grau nas áreas de exatas e humanas, o livro traz farta exemplificação de aplicações do cálculo das probabilidades, modelos de distribuições de probabilidades, inferência estatística, técnicas não paramétricas e análise da variância.  Esta nova versão, após 15 anos de sua primeira edição, tem características eminentemente didáticas: detalhada exposição, solução de exemplos e proposição de exercícios cujas respostas se encontram no final do livro. Os quatro primeiros capítulos são dedicados ao estudo do cálculo das probabilidades. O capítulo 5 expõe, detalhadamente, a estatística descritiva. Os capítulos 6, 7, 8 e 9 apresentam as distribuições amostrais; amostragem, intervalos de confiança e teste de hipóteses. As técnicas não paramétricas são destacadas no capítulo 10 e a análise da variância constitui o último capitulo.  Livro-texto para a disciplina Estatística dos cursos de graduação em Administração de Empresas, Economia, Contabilidade, Matemática e Engenharia. ',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-36.jpg']
  },
{
    id: 37,
    title: 'Algoritmos Programação para Iniciantes',
    author: 'Gilvan Vilarim',
    category: 'Programação',
    price: 15,
    originalPrice: 99.45,
    discount: 84,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 270,
    size: '27.4 x 21.2 x 1.8 cm',
    publisher: 'Ciencia Moderna',
    year: 2004,
    location: 'Rio de Janeiro',
    description: 'Este livro tem por objetivo apresentar os fundamentos da lógica para a programação de computadores, capacitando o leitor a construir algoritmos estruturados. Os diversos assuntos e exercícios são totalmente baseados em experiências reais do autor vivenciadas em sala de aula, transferindo para o livro as explicações e os exemplos usados em aulas de algoritmos e programação. A leitura e a prática não exigem conhecimento prévio do assunto por parte do leitor. Voltado para estudantes de cursos introdutórios em programação de computadores, existentes nas áreas de Informática, Ciência da Computação, Engenharias, cursos técnicos de nível médio e muitas outras, o livro apresenta como principais características: o Nova linguagem estruturada para a construção de algoritmos; o Texto renovado e atual, fortemente baseado na didática utilizada em aulas de programação; o Intensa carga de exercícios resolvidos e de problemas propostos; o Perguntas e respostas sobre as dúvidas mais comuns dos estudantes de cursos de programação; o Curiosidades sobre computadores, algoritmos e programação, estimulando o interesse do leitor pelo assunto. Adotado com sucesso como bibliografia nos projetos de inúmeros cursos espalhados pelo Brasil, Algoritmos: Programação para Iniciantes chega à sua 2ª edição com nova diagramação, apresentando um texto aprimorado, revisado e complementado com mais material de estudo. Acima de tudo, ele pretende ser o seu primeiro livro de algoritmos.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-37.jpg']
  },
{
    id: 38,
    title: 'Roadmapping: uma abordagem estratégica para o gerenciamento da inovação em produtos, serviços e tecnologias',
    author: 'Maicon Gouvêa de Oliveira et al.',
    category: 'Negócios e Gestão',
    price: 20,
    originalPrice: 71.5,
    discount: 72,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 208,
    size: '16 x 2 x 23 cm',
    publisher: 'Elsevier',
    year: 2012,
    location: 'Rio de Janeiro',
    description: 'Este livro apresenta em cinco capítulos os principais conhecimentos para a aplicação da abordagem do roadmapping na organização tendo em vista a obtenção de excelentes resultados. O primeiro capítulo apresenta a abordagem, juntamente com os seus dois principais componentes: o roadmap e o processo de desenvolvimento. O segundo capítulo apresenta em detalhes os principais elementos que constituem os processos de roadmapping e traz exemplos clássicos de organizações que foram pioneiras no uso da abordagem. O terceiro capítulo apresenta o roadmapping para a definição de estratégias de inovação, o seu processo de desenvolvimento e exemplos relacionados. O quarto capítulo apresenta o roadmapping para planejamento de produtos e tecnologias, o seu processo de desenvolvimento e exemplos relacionados. O quinto capitulo apresenta ferramentas e técnicas adicionais, capazes de enriquecer os resultados do roadmapping e superar eventuais limitações encontradas durante o desenvolvimento do roadmap.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-38.jpg']
  },
{
    id: 39,
    title: 'Estatística usando Excel',
    author: 'Juan Carlos Lapponi',
    category: 'Estatística',
    price: 30,
    originalPrice: 40,
    discount: 25,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 496,
    size: '27.8 x 20.8 x 2.4 cm',
    publisher: 'Elsevier',
    year: 2005,
    location: 'Rio de Janeiro',
    description: 'Nesta quarta edição de Estatística Usando Excel, boa parte dos temas da edição anterior foi reescrita e aumentada melhorando a seqüência e compreensão dos temas. Novos temas foram adicionados ampliando os conceitos estatísticos como, por exemplo, a tabela de probabilidades conjuntas e totais, os cálculos inversos com a distribuição normal, o poder do teste de hipóteses, a análise de variância com dois fatores, a regressão linear múltipla, a projeção por ajuste de polinômio, taxa média e reta de regressão, a construção de um ou mais boxplot com os recursos próprios do Excel, e outros temas.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-39.jpg']
  },
{
    id: 40,
    title: 'Física - volume 3',
    author: 'David Halliday; Robert Resnick; Kenneth S. Krane',
    category: 'Física',
    price: 50,
    originalPrice: 377,
    discount: 86,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 390,
    size: '27.69 x 20.83 x 2.03 cm',
    publisher: 'LTC',
    year: 2010,
    location: 'Rio de Janeiro',
    description: 'Por quatro décadas este livro tem sido a referência para cursos introdutórios baseados em cálculo, sendo reconhecido por sua apresentação clara e completa. O texto foi reescrito visando estabelecer uma maior continuidade ao fluxo do material e facilitar a introdução do estudante a assuntos novos. Procurou-se fornecer exemplos de cunho mais prático e, ao introduzir novos tópicos, seguir do caso particular para o geral.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-40.jpg']
  },
{
    id: 41,
    title: 'Confiabilidade e Manutenção Industrial',
    author: 'Flávio Sanson Fogliatto; José Luis Duarte Ribeiro',
    category: 'Manutenção',
    price: 50,
    originalPrice: 297,
    discount: 83,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 288,
    size: '23.8 x 16.6 x 1.8 cm',
    publisher: 'Elsevier',
    year: 2009,
    location: 'Rio de Janeiro',
    description: 'O  presente livro trata da Engenharia de Confiabilidade que tem como objetivo adequar a produção da indústria aos padrões dos mercados e a normas de qualidade, fornecendo o referencial teórico para esse processo de melhoria. O diferencial de Confiabilidade e Manutenção Industrial é tratar a confiabilidade do ponto de vista quantitativo, baseado na modelagem estatística de dados, e não qualitativo como os outros livros sobre o tema. Principais características: • Livro com selo ABEPRO; • Listas de exercícios ao final da maioria dos capítulos • Traz aplicativos computacionais, apresentados através de tutoriais; • Conteúdo sobre gestão da manutenção em ambientes industriais.',
    sold: true,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-41.jpg']
  },
{
    id: 42,
    title: 'Economia, Teoria e Política',
    author: 'Francisco Mochón',
    category: 'Negócios e Gestão',
    price: 50,
    originalPrice: 1212.12,
    discount: 95,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 592,
    size: '27.43 x 21.08 x 3.3 cm',
    publisher: 'McGraw-Hill Education',
    year: 2006,
    location: 'São Paulo',
    description: 'O livro Economia, Teoria e Política, de autoria do renomado professor Francisco Mochón, consolida-se como um dos manuais didáticos mais prestigiados e eficientes para a introdução às ciências econômicas. Com uma linguagem acessível e fluida, o autor consegue traduzir conceitos complexos em explicações claras, o que torna a leitura ideal tanto para estudantes universitários de graduação quanto para profissionais que buscam uma base conceitual sólida. A obra equilibra perfeitamente o rigor analítico com a aplicação prática, dividindo seu escopo entre os fundamentos da microeconomia, que estuda o comportamento de consumidores e empresas nos mercados, e os agregados da macroeconomia, voltados para a análise do crescimento econômico, da inflação e do desemprego. Ao longo de suas páginas, o leitor compreende o papel crucial do Estado por meio das políticas fiscal e monetária, transformando dados técnicos em uma lente interpretativa essencial para compreender a realidade socioeconômica global e nacional.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-42.jpg']
  },
{
    id: 43,
    title: 'Cálculo A: Funções, Limite, Derivação e Integração',
    author: 'Diva Marília Flemming; Mirian Buss Gonçalves',
    category: 'Cálculo',
    price: 50,
    originalPrice: 312,
    discount: 83,
    condition: 'Usado',
    conditionDetail: 'Bom estado, algumas anotações à lápis e marca texto.',
    pages: 464,
    size: '27.4 x 20.4 x 2.2 cm',
    publisher: 'Pearson Universidades',
    year: 2006,
    location: 'São Paulo',
    description: 'Estes dois livros são uma abordagem modernizada do conteúdo já publicado como Cálculo A, B e C, das mesmas autoras, e cobrem o programa completo de um curso de cálculo diferencial e integral. Incluindo exercícios e aplicações de várias áreas, o texto atende tanto a área de humanas (administração e economia, especialmente no Cálculo A) como a de exatas (matemática, física e engenharia). Cada capítulo apresenta enunciados claros das definições, propriedades e teoremas relativos ao assunto abordado. Sempre que possível, são apresentadas as correspondentes ideias intuitivas e geométricas, bem como exemplos de aplicações práticas. São propostas, também, listas de exercícios (com respostas) para complementar a aprendizagem do aluno.',
    sold: false,
    whatsapp: '5599988560842', // Adicionado para manter consistência com o modelo, mas vazio
    images: ['images/id-43.jpg']
  },
];

const categoryConfig = {
    'planejamento e controle da produção (pcp)': { emoji: '📊', name: 'Planejamento e Controle da Produção (PCP)' },
    'desenvolvimento de produtos': { emoji: '🛠️', name: 'Desenvolvimento de Produtos' },
    'gerenciamento de projetos': { emoji: '📈', name: 'Gerenciamento de Projetos' },
    'negócios e gestão': { emoji: '💼', name: 'Negócios e Gestão' },
    'gestão da qualidade': { emoji: '✅', name: 'Gestão da Qualidade' },
    'gestão da produção': { emoji: '🏭', name: 'Gestão da Produção' },
    'simulação': { emoji: '🖥️', name: 'Simulação' },
    'engenharia ambiental': { emoji: '🌱', name: 'Engenharia Ambiental' },
    'pesquisa operacional': { emoji: '📐', name: 'Pesquisa Operacional' },
    'cálculo numérico': { emoji: '🔢', name: 'Cálculo Numérico' },
    'inglês / toefl': { emoji: '🇺🇸', name: 'Inglês / TOEFL' },
    'manutenção': { emoji: '🔧', name: 'Manutenção' },
    'ergonomia': { emoji: '🪑', name: 'Ergonomia' },
    'estatística': { emoji: '📈', name: 'Estatística' },   // emoji pode ser igual ao de projetos, sem problema
    'cálculo': { emoji: '∫', name: 'Cálculo' },
    'mecânica dos fluidos': { emoji: '💧', name: 'Mecânica dos Fluidos' },
    'programação': { emoji: '💻', name: 'Programação' },
    'física': { emoji: '⚛️', name: 'Física' },
};
// ============================================
// VARIÁVEIS GLOBAIS
// ============================================
let currentCategory = 'all';
let currentPage = 1;
const ITEMS_PER_PAGE = 12;

// ============================================
// FUNÇÕES AUXILIARES
// ============================================
function formatPrice(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function formatWhatsAppUrl(phone, title, price) {
    const message = `Olá! Tenho interesse no livro: ${title} - ${formatPrice(price)}. Podemos negociar?`;
    return `https://wa.me/55${phone}?text=${encodeURIComponent(message)}`;
}

function generateBookCard(book) {
    const isSold = book.sold || false;
    const hasDiscount = book.discount && book.discount > 0;
    const image = book.images && book.images[0] ? book.images[0] : 'https://via.placeholder.com/300x400/61005D/FFFFFF?text=Sem+Imagem';

    let badges = '';
    if (isSold) {
        badges += `<span class="book-card-badge badge-sold">Vendido</span>`;
    } else if (hasDiscount) {
        badges += `<span class="book-card-badge badge-discount">-${book.discount}%</span>`;
    } else {
        badges += `<span class="book-card-badge badge-new">Novo</span>`;
    }

    const priceHTML = isSold
        ? `<span class="book-card-sold">VENDIDO</span>`
        : `<span class="book-card-price">${formatPrice(book.price)}</span>
           ${hasDiscount ? `<span class="book-card-price-original">${formatPrice(book.originalPrice)}</span>` : ''}`;

    return `
        <div class="book-card" data-id="${book.id}" onclick="window.location.href='livro-detalhe.html?id=${book.id}'">
            <div class="book-card-image">
                <img src="${image}" alt="${book.title}" loading="lazy" />
                ${badges}
            </div>
            <div class="book-card-content">
                <div class="book-card-title">${book.title}</div>
                <div class="book-card-author">${book.author}</div>
                <div>${priceHTML}</div>
            </div>
        </div>
    `;
}

// ============================================
// FUNÇÃO PRINCIPAL - PÁGINA INICIAL
// ============================================
function renderBooks() {
    const grid = document.getElementById('bookGrid');
    if (!grid) return;

    const filtered = currentCategory === 'all'
        ? books
        : books.filter(b => b.category === currentCategory);

    const sorted = filtered.sort((a, b) => {
        if (a.sold && !b.sold) return 1;
        if (!a.sold && b.sold) return -1;
        return 0;
    });

    const total = sorted.length;
    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageItems = sorted.slice(start, end);

    if (pageItems.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding:60px 20px;">
                <p style="font-size:1.4rem; color:var(--text-light);">📭 Nenhum livro encontrado</p>
                <p style="color:var(--text-light);">Tente outra categoria ou volte depois</p>
            </div>
        `;
    } else {
        grid.innerHTML = pageItems.map(generateBookCard).join('');
    }

    // Atualizar contagem
    const countEl = document.getElementById('bookCount');
    if (countEl) countEl.textContent = total;

    // Paginação
    const pageInfo = document.getElementById('pageInfo');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (pageInfo) pageInfo.textContent = `Página ${currentPage} de ${totalPages || 1}`;
    if (prevBtn) prevBtn.disabled = currentPage <= 1;
    if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
}

function generateCategoryButtons() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;

    // Usa as chaves do objeto de configuração (já são suas categorias exatas)
    const categoriesList = Object.keys(categoryConfig);

    // Botão "Todos"
    const btnAll = document.createElement('button');
    btnAll.className = 'category-btn active';
    btnAll.dataset.filter = 'all';
    btnAll.textContent = '📚 Todos';
    container.appendChild(btnAll);

    // Gera um botão para cada categoria existente no config
    categoriesList.forEach(catKey => {
        const config = categoryConfig[catKey];
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.dataset.filter = config.name;          // o filtro será a própria chave (minúscula)
        btn.textContent = `${config.emoji} ${config.name}`;
        container.appendChild(btn);
    });
}

// ============================================
// NAVEGAÇÃO POR CATEGORIA
// ============================================
function setupCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.filter;
            currentPage = 1;
            renderBooks();
        });
    });
}

// ============================================
// PAGINAÇÃO
// ============================================
function setupPagination() {
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderBooks();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const filtered = currentCategory === 'all'
                ? books
                : books.filter(b => b.category === currentCategory);
            const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
            if (currentPage < totalPages) {
                currentPage++;
                renderBooks();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
}

// ============================================
// FUNÇÃO PRINCIPAL - PÁGINA DE DETALHE
// ============================================
function loadBookDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));

    if (!id) {
        window.location.href = 'index.html';
        return;
    }

    const book = books.find(b => b.id === id);
    if (!book) {
        window.location.href = 'index.html';
        return;
    }

    // Atualizar título da página
    document.title = `${book.title} - Sebo Online`;

    // Breadcrumb
    const catMap = {
        'ficcao': 'Ficção',
        'romance': 'Romance',
        'fantasia': 'Fantasia',
        'nao-ficcao': 'Não-Ficção',
        'quadrinhos': 'Quadrinhos',
        'tecnico': 'Técnicos',
        'infantil': 'Infantil'
    };
    const catName = catMap[book.category] || 'Categoria';

    const catEl = document.getElementById('bookCategory');
    if (catEl) catEl.textContent = catName;
    const titleBread = document.getElementById('bookTitleBreadcrumb');
    if (titleBread) titleBread.textContent = book.title;

    // Título
    const titleEl = document.getElementById('bookDetailTitle');
    if (titleEl) titleEl.textContent = book.title;

    // Autor, ano, condição
    const authorEl = document.getElementById('bookAuthor');
    if (authorEl) authorEl.textContent = `✍️ ${book.author}`;
    const yearEl = document.getElementById('bookYear');
    if (yearEl) yearEl.textContent = `📅 ${book.year}`;
    const condEl = document.getElementById('bookCondition');
    if (condEl) condEl.textContent = `📦 ${book.conditionDetail}`;

    // Preço
    const priceEl = document.getElementById('bookPrice');
    if (priceEl) priceEl.textContent = formatPrice(book.price);

    const originalEl = document.getElementById('bookOriginalPrice');
    if (originalEl) {
        if (book.discount && book.discount > 0) {
            originalEl.textContent = formatPrice(book.originalPrice);
            originalEl.style.display = 'inline';
        } else {
            originalEl.style.display = 'none';
        }
    }

    const discountEl = document.getElementById('bookDiscount');
    if (discountEl) {
        if (book.discount && book.discount > 0) {
            discountEl.textContent = `-${book.discount}%`;
            discountEl.style.display = 'inline';
        } else {
            discountEl.style.display = 'none';
        }
    }

    // Descrição
    const descEl = document.getElementById('bookDescription');
    if (descEl) descEl.textContent = book.description;

    // Especificações
    const sizeEl = document.getElementById('bookSize');
    if (sizeEl) sizeEl.textContent = book.size || 'N/A';
    const pagesEl = document.getElementById('bookPages');
    if (pagesEl) pagesEl.textContent = book.pages ? `${book.pages} páginas` : 'N/A';
    const pubEl = document.getElementById('bookPublisher');
    if (pubEl) pubEl.textContent = book.publisher || 'N/A';
    const condDetailEl = document.getElementById('bookConditionDetail');
    if (condDetailEl) condDetailEl.textContent = book.conditionDetail;

    // Badge (Vendido ou Desconto)
    const badgeEl = document.getElementById('bookBadge');
    if (badgeEl) {
        if (book.sold) {
            badgeEl.textContent = 'VENDIDO';
            badgeEl.className = 'book-badge badge-sold-detail';
        } else if (book.discount && book.discount > 0) {
            badgeEl.textContent = `-${book.discount}%`;
            badgeEl.className = 'book-badge';
            badgeEl.style.background = '#DDFD81';
            badgeEl.style.color = '#61005D';
        } else {
            badgeEl.style.display = 'none';
        }
    }

    // Imagem principal
    const mainImg = document.getElementById('bookMainImage');
    if (mainImg && book.images && book.images[0]) {
        mainImg.src = book.images[0];
        mainImg.alt = `Capa do livro ${book.title}`;
    }

    // Miniaturas
    const thumbsContainer = document.getElementById('thumbnails');
    if (thumbsContainer && book.images && book.images.length > 1) {
        thumbsContainer.innerHTML = book.images.map((img, index) => `
            <img src="${img}" alt="Imagem ${index + 1}" 
                 class="${index === 0 ? 'active' : ''}" 
                 onclick="changeMainImage('${img}', this)" />
        `).join('');
    } else if (thumbsContainer) {
        thumbsContainer.style.display = 'none';
    }

    // Botão WhatsApp
    const whatsappBtn = document.getElementById('whatsappButton');
    if (whatsappBtn) {
        if (book.sold) {
            whatsappBtn.style.background = '#95a5a6';
            whatsappBtn.style.cursor = 'not-allowed';
            whatsappBtn.innerHTML = '❌ Livro já vendido';
            whatsappBtn.removeAttribute('href');
        } else {
            // Número de telefone do vendedor (substitua pelo número real)
            const phone = book.whatsapp || '5599988560842'; // use o número do livro ou fallback
            whatsappBtn.href = formatWhatsAppUrl(phone, book.title, book.price);
            whatsappBtn.target = '_blank';
            whatsappBtn.innerHTML = '<span>💬</span> Comprar via WhatsApp';
        }
    }

    // Livros relacionados (excluindo o atual)
    const relatedGrid = document.getElementById('relatedBooks');
    if (relatedGrid) {
        const related = books
            .filter(b => b.id !== id && !b.sold)
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);

        if (related.length > 0) {
            relatedGrid.innerHTML = related.map(generateBookCard).join('');
        } else {
            relatedGrid.innerHTML = `
                <div style="grid-column:1/-1; text-align:center; padding:40px 20px; color:var(--text-light);">
                    <p>📭 Nenhum livro relacionado no momento</p>
                </div>
            `;
        }
    }

    // Atualizar contagem na página inicial se necessário
    const countEl = document.getElementById('bookCount');
    if (countEl) {
        const filtered = books.filter(b => !b.sold);
        countEl.textContent = filtered.length;
    }
}

// ============================================
// TROCA DE IMAGEM PRINCIPAL (DETALHE)
// ============================================
function changeMainImage(src, thumbElement) {
    const mainImg = document.getElementById('bookMainImage');
    if (mainImg) mainImg.src = src;

    document.querySelectorAll('.thumbnails img').forEach(img => {
        img.classList.remove('active');
    });
    if (thumbElement) thumbElement.classList.add('active');
}

// Tornar a função global para uso no onclick
window.changeMainImage = changeMainImage;

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const isDetailPage = window.location.pathname.includes('livro-detalhe.html');

    if (isDetailPage) {
        loadBookDetail();
    } else {
        generateCategoryButtons();  // ← nova linha
        renderBooks();
        setupCategoryButtons();
        setupPagination();
    }
});
