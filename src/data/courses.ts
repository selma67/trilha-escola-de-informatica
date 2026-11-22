import type { LucideIcon } from "lucide-react";
import { BriefcaseBusiness, FileText, Laptop, MapPin, Palette, Smartphone, Table2 } from "lucide-react";

export interface CourseFaq {
  question: string;
  answer: string;
}

export type CourseSlug =
  | "curso-informatica-basica-sorocaba"
  | "curso-pacote-office-sorocaba"
  | "curso-excel-sorocaba"
  | "curso-canva-sorocaba"
  | "curso-celular-terceira-idade-sorocaba"
  | "curso-google-meu-negocio-sorocaba"
  | "curso-curriculo-entrevista-sorocaba";

export interface Course {
  slug: CourseSlug;
  title: string;
  short: string;
  icon: LucideIcon;
  tone: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  learn: string[];
  audience: string;
  faq: CourseFaq[];
  related: { slug: CourseSlug; label: string }[];
}

export const courses: Course[] = [
  {
    slug: "curso-informatica-basica-sorocaba",
    title: "Informática Básica",
    short: "Aprenda a usar o computador do zero: arquivos, internet, e-mail e segurança, no seu ritmo.",
    icon: Laptop,
    tone: "text-coral bg-coral/10",
    seoTitle: "Curso de Informática Básica em Sorocaba | Trilha Escola de Informática",
    seoDescription: "Curso de informática básica presencial em Sorocaba para quem está começando do zero. Aulas individuais com acompanhamento da professora. Conheça a Trilha.",
    intro: [
      "O curso de informática básica da Trilha Escola de Informática é para quem deseja aprender a utilizar o computador, conhecer seus principais recursos e desenvolver habilidades para estudar, trabalhar e realizar atividades do dia a dia.",
      "As aulas são presenciais e individuais em Sorocaba, com acompanhamento direto da professora. Você aprende no seu próprio ritmo, sem vergonha de perguntar e sem precisar acompanhar turmas.",
    ],
    learn: [
      "Ligar, usar e organizar o computador com confiança",
      "Criar, salvar e organizar pastas e arquivos",
      "Navegar na internet e pesquisar com segurança",
      "Usar e-mail, anexos e mensagens no dia a dia",
      "Noções de segurança: senhas, golpes e cuidados on-line",
    ],
    audience: "Indicado para iniciantes de todas as idades, adultos que estão voltando a estudar e quem precisa de informática para o trabalho ou para a vida pessoal.",
    faq: [
      { question: "Nunca usei um computador. Consigo acompanhar?", answer: "Sim. O curso foi pensado para quem está começando do absoluto zero. As aulas são individuais, então o conteúdo avança no seu ritmo, com paciência e repetição sempre que necessário." },
      { question: "As aulas são presenciais em Sorocaba?", answer: "Sim. As aulas acontecem presencialmente na Trilha Escola de Informática, na Rua Assis Machado, 297, Vila Hortência, em Sorocaba/SP." },
      { question: "Preciso ter computador em casa?", answer: "Não é obrigatório. Você aprende e pratica durante as aulas na escola. Ter um computador em casa ajuda a praticar, mas não é requisito para começar." },
      { question: "O curso serve para quem quer voltar a estudar?", answer: "Com certeza. Muitos alunos da Trilha estão retomando os estudos depois de anos longe do computador. O atendimento individual adapta o conteúdo ao que você já sabe e ao que precisa aprender." },
    ],
    related: [
      { slug: "curso-pacote-office-sorocaba", label: "Conheça também o curso de Pacote Office" },
      { slug: "curso-celular-terceira-idade-sorocaba", label: "Veja o curso de Celular e Internet para a Terceira Idade" },
    ],
  },
  {
    slug: "curso-pacote-office-sorocaba",
    title: "Pacote Office",
    short: "Word, Excel e PowerPoint para estudar, trabalhar e organizar suas atividades com segurança.",
    icon: BriefcaseBusiness,
    tone: "text-teal bg-teal/10",
    seoTitle: "Curso de Pacote Office em Sorocaba (Word, Excel e PowerPoint) | Trilha",
    seoDescription: "Curso presencial de Pacote Office em Sorocaba: Word, Excel e PowerPoint com aulas individuais e práticas. Aprenda no seu ritmo na Trilha Escola de Informática.",
    intro: [
      "No curso de Pacote Office da Trilha você aprende a utilizar os principais programas de escritório para estudar, trabalhar e organizar suas atividades.",
      "O aprendizado é prático, com acompanhamento individual e conteúdo adequado às necessidades de cada aluno — do primeiro contato com os programas até o uso profissional.",
    ],
    learn: [
      "Word: criação e formatação de textos, documentos, currículos e trabalhos",
      "Excel: planilhas, organização de informações, cálculos, fórmulas e funções",
      "PowerPoint: criação de apresentações, slides, textos e imagens",
      "Integração entre os programas no dia a dia de estudos e trabalho",
    ],
    audience: "Indicado para estudantes, profissionais que precisam do Office no trabalho, candidatos a vagas que pedem conhecimentos de informática e quem quer organizar melhor suas tarefas.",
    faq: [
      { question: "O curso de Pacote Office inclui Word, Excel e PowerPoint?", answer: "Sim. O curso contempla os três programas: Word para textos e documentos, Excel para planilhas e cálculos, e PowerPoint para apresentações." },
      { question: "Preciso saber informática antes de começar?", answer: "Não. Como as aulas são individuais, a professora adapta o início do curso ao seu nível, mesmo que você nunca tenha usado os programas." },
      { question: "O curso ajuda quem procura emprego?", answer: "Sim. O domínio do Pacote Office é um dos requisitos mais pedidos em vagas de trabalho, e o curso é voltado para o uso real dessas ferramentas." },
      { question: "Quero aprender só Excel. É possível?", answer: "Sim. A Trilha tem um módulo específico de Excel, dedicado somente a esse programa. Conheça a página do curso de Excel para saber mais." },
    ],
    related: [
      { slug: "curso-excel-sorocaba", label: "Conheça o módulo específico de Excel" },
      { slug: "curso-curriculo-entrevista-sorocaba", label: "Veja também o curso de Currículo e Preparação para Entrevista" },
    ],
  },
  {
    slug: "curso-excel-sorocaba",
    title: "Excel — Módulo Específico",
    short: "Módulo dedicado só ao Excel: planilhas, cálculos, fórmulas e funções, do básico ao avançado.",
    icon: Table2,
    tone: "text-green bg-green/10",
    seoTitle: "Curso de Excel em Sorocaba — Módulo Específico | Trilha Escola de Informática",
    seoDescription: "Curso de Excel presencial em Sorocaba, do básico às fórmulas e funções. Aulas individuais com acompanhamento na Trilha Escola de Informática.",
    intro: [
      "O módulo específico de Excel da Trilha é dedicado somente ao aprendizado desse programa, desde os primeiros contatos até a utilização de planilhas, organização de dados, cálculos, fórmulas, funções e outros recursos importantes.",
      "As aulas são presenciais e individuais em Sorocaba, com exercícios práticos ligados às suas necessidades — seja para o trabalho, para os estudos ou para organizar a vida financeira.",
    ],
    learn: [
      "Primeiros passos: interface, células, linhas e colunas",
      "Criação e formatação de planilhas profissionais",
      "Cálculos, fórmulas e funções essenciais",
      "Organização e análise de dados e informações",
      "Recursos práticos para o dia a dia de trabalho",
    ],
    audience: "Indicado para profissionais que usam ou querem usar o Excel no trabalho, estudantes, comerciantes e qualquer pessoa que precise organizar informações e fazer cálculos com agilidade.",
    faq: [
      { question: "O curso de Excel começa do zero?", answer: "Sim. O módulo começa nos primeiros contatos com o programa e avança até fórmulas, funções e recursos mais elaborados, sempre no seu ritmo." },
      { question: "Qual a diferença entre o módulo de Excel e o Pacote Office?", answer: "O Pacote Office apresenta Word, Excel e PowerPoint de forma ampla. O módulo específico de Excel se aprofunda somente nesse programa, com mais prática e mais recursos." },
      { question: "O curso serve para quem precisa do Excel no trabalho?", answer: "Sim. O conteúdo é voltado para situações reais: planilhas de controle, cálculos, organização de dados e relatórios do dia a dia profissional." },
      { question: "As aulas são em turma ou individuais?", answer: "As aulas da Trilha são individuais. Você tem o acompanhamento direto da professora e pratica exatamente aquilo de que precisa." },
    ],
    related: [
      { slug: "curso-pacote-office-sorocaba", label: "Veja também o curso de Pacote Office" },
      { slug: "curso-google-meu-negocio-sorocaba", label: "Conheça o curso de Google Meu Negócio para sua empresa" },
    ],
  },
  {
    slug: "curso-canva-sorocaba",
    title: "Canva",
    short: "Crie artes, convites, apresentações e materiais gráficos profissionais com o Canva.",
    icon: Palette,
    tone: "text-coral bg-coral/10",
    seoTitle: "Curso de Canva em Sorocaba | Trilha Escola de Informática",
    seoDescription: "Curso presencial de Canva em Sorocaba para criar artes, convites, apresentações e materiais gráficos. Aulas individuais na Trilha Escola de Informática.",
    intro: [
      "O curso de Canva da Trilha é voltado à utilização dessa ferramenta para criar artes, convites, apresentações e materiais gráficos com aparência profissional — mesmo sem experiência em design.",
      "Nas aulas presenciais e individuais em Sorocaba, você aprende na prática, criando materiais reais para o seu negócio, seus estudos ou suas redes sociais.",
    ],
    learn: [
      "Conhecer a interface e os recursos do Canva",
      "Criar artes e posts para redes sociais",
      "Montar convites, cartões e materiais impressos",
      "Elaborar apresentações bonitas e organizadas",
      "Usar modelos, fontes, cores e imagens com identidade visual",
    ],
    audience: "Indicado para empreendedores, MEIs, autônomos, estudantes e qualquer pessoa que queira criar materiais visuais bonitos sem depender de um designer.",
    faq: [
      { question: "Preciso saber design para fazer o curso de Canva?", answer: "Não. O Canva foi feito para quem não é designer, e o curso mostra passo a passo como criar materiais bonitos usando os recursos da ferramenta." },
      { question: "O curso serve para divulgar meu negócio?", answer: "Sim. Muitos alunos usam o Canva para criar posts, cartões e materiais de divulgação de seus negócios. O curso pode ser direcionado para essa necessidade." },
      { question: "O Canva é gratuito?", answer: "O Canva tem uma versão gratuita muito completa, suficiente para a maioria dos usos. No curso você aprende a aproveitar bem esses recursos." },
      { question: "As aulas são presenciais?", answer: "Sim. As aulas acontecem presencialmente na Trilha Escola de Informática, em Sorocaba, com atendimento individual." },
    ],
    related: [
      { slug: "curso-google-meu-negocio-sorocaba", label: "Veja também o curso de Google Meu Negócio" },
      { slug: "curso-informatica-basica-sorocaba", label: "Conheça o curso de Informática Básica" },
    ],
  },
  {
    slug: "curso-celular-terceira-idade-sorocaba",
    title: "Celular e Internet para a Terceira Idade",
    short: "WhatsApp, fotos, aplicativos e internet com autonomia e segurança, no seu ritmo.",
    icon: Smartphone,
    tone: "text-teal bg-teal/10",
    seoTitle: "Curso de Celular e Internet para a Terceira Idade em Sorocaba | Trilha",
    seoDescription: "Curso presencial de celular e internet para a terceira idade em Sorocaba. Aprenda WhatsApp, aplicativos e navegação com paciência e aulas individuais.",
    intro: [
      "O curso de Celular e Internet para a Terceira Idade da Trilha ajuda você a utilizar o celular e os recursos da internet com mais autonomia e segurança.",
      "O conteúdo inclui WhatsApp, aplicativos, mensagens, chamadas, compartilhamento de fotos, navegação na internet e os principais recursos do celular — tudo com paciência, tranquilidade e aulas individuais em Sorocaba.",
    ],
    learn: [
      "Usar o WhatsApp: mensagens, áudios, fotos e chamadas de vídeo",
      "Instalar e usar aplicativos úteis do dia a dia",
      "Compartilhar fotos com filhos, netos e amigos",
      "Navegar na internet e fazer pesquisas com segurança",
      "Reconhecer golpes e proteger suas informações",
    ],
    audience: "Indicado para pessoas da terceira idade que querem ganhar independência digital, conversar com a família, usar serviços on-line e se sentir seguras com a tecnologia.",
    faq: [
      { question: "Tenho dificuldade com tecnologia. O curso é para mim?", answer: "Sim. O curso foi criado especialmente para quem tem pouca intimidade com o celular. As aulas são individuais, com muita paciência e repetição quantas vezes for preciso." },
      { question: "Vou aprender a usar o WhatsApp?", answer: "Sim. O WhatsApp é uma das partes principais do curso: enviar mensagens e áudios, fazer chamadas de voz e vídeo e compartilhar fotos com a família." },
      { question: "Preciso levar meu celular?", answer: "O ideal é aprender no seu próprio aparelho, para que tudo fique configurado do seu jeito e você consiga repetir em casa o que aprendeu na aula." },
      { question: "O curso ensina a evitar golpes?", answer: "Sim. A segurança é parte importante do conteúdo: você aprende a reconhecer mensagens suspeitas, golpes comuns e cuidados com senhas e informações pessoais." },
    ],
    related: [
      { slug: "curso-informatica-basica-sorocaba", label: "Conheça também o curso de Informática Básica" },
      { slug: "curso-canva-sorocaba", label: "Veja o curso de Canva para criar convites e artes" },
    ],
  },
  {
    slug: "curso-google-meu-negocio-sorocaba",
    title: "Google Meu Negócio — Perfil da Empresa no Google",
    short: "Divulgue sua empresa no Google e no Maps e amplie sua presença nas pesquisas.",
    icon: MapPin,
    tone: "text-green bg-green/10",
    seoTitle: "Curso de Google Meu Negócio em Sorocaba — Perfil da Empresa | Trilha",
    seoDescription: "Curso presencial de Google Meu Negócio (Perfil da Empresa no Google) em Sorocaba para MEIs, autônomos e pequenos empresários. Trilha Escola de Informática.",
    intro: [
      "No curso de Google Meu Negócio da Trilha você aprende a divulgar sua empresa no Google e a ampliar sua presença nas pesquisas e no Google Maps.",
      "O curso é voltado à criação, configuração e gerenciamento do Perfil da Empresa no Google (antigo Google Meu Negócio), com aprendizado sobre novos recursos e ferramentas para fortalecer a presença digital, aumentar a visibilidade e alavancar negócios locais.",
    ],
    learn: [
      "Criar e configurar o Perfil da Empresa no Google",
      "Fazer sua empresa aparecer nas pesquisas e no Google Maps",
      "Cadastrar fotos, horários, serviços e informações corretas",
      "Usar recursos e ferramentas para atrair mais clientes",
      "Gerenciar avaliações e fortalecer a presença digital",
    ],
    audience: "Indicado para MEIs, autônomos, comerciantes, profissionais liberais e pequenos empresários de Sorocaba e região que querem ser encontrados por mais clientes no Google.",
    faq: [
      { question: "O que é o Perfil da Empresa no Google?", answer: "É o antigo Google Meu Negócio: o cadastro gratuito que faz sua empresa aparecer nas pesquisas do Google e no Google Maps, com endereço, horários, fotos e avaliações." },
      { question: "O curso serve para quem tem um pequeno negócio?", answer: "Sim. O curso foi pensado para MEIs, autônomos, comerciantes e profissionais liberais que querem atrair mais clientes locais pelo Google." },
      { question: "Preciso saber informática para acompanhar?", answer: "Não. As aulas são individuais e práticas: você aprende cada passo com o acompanhamento da professora, configurando o perfil do seu próprio negócio." },
      { question: "O cadastro no Google é pago?", answer: "Não. O Perfil da Empresa no Google é gratuito. O curso ensina você a criar e gerenciar esse perfil sozinho, sem precisar pagar mensalidades a terceiros." },
    ],
    related: [
      { slug: "curso-canva-sorocaba", label: "Conheça o curso de Canva para criar artes do seu negócio" },
      { slug: "curso-excel-sorocaba", label: "Veja também o curso de Excel para organizar sua empresa" },
    ],
  },
  {
    slug: "curso-curriculo-entrevista-sorocaba",
    title: "Currículo e Preparação para Entrevista",
    short: "Monte um currículo profissional e prepare-se para processos seletivos e entrevistas.",
    icon: FileText,
    tone: "text-coral bg-coral/10",
    seoTitle: "Curso de Currículo e Preparação para Entrevista em Sorocaba | Trilha",
    seoDescription: "Curso presencial em Sorocaba para elaborar currículo e se preparar para entrevistas de emprego, com uso de Inteligência Artificial. Trilha Escola de Informática.",
    intro: [
      "No curso de Currículo e Preparação para Entrevista da Trilha você aprende a elaborar e organizar um currículo, apresentar suas experiências e se preparar para processos seletivos e entrevistas de emprego.",
      "As aulas são presenciais e individuais em Sorocaba, incluindo o uso de Inteligência Artificial na preparação do currículo e treinos para entrevistas.",
    ],
    learn: [
      "Elaborar e organizar um currículo claro e profissional",
      "Apresentar suas experiências e habilidades da melhor forma",
      "Usar Inteligência Artificial como apoio na preparação do currículo",
      "Treinar respostas e postura para entrevistas de emprego",
      "Entender como funcionam os processos seletivos atuais",
    ],
    audience: "Indicado para quem está procurando emprego, quer mudar de área, está voltando ao mercado de trabalho ou deseja se apresentar melhor em entrevistas.",
    faq: [
      { question: "O curso monta o meu currículo?", answer: "Você aprende a elaborar e organizar o seu próprio currículo, com orientação individual da professora e o apoio de ferramentas de Inteligência Artificial." },
      { question: "O curso inclui treino para entrevistas?", answer: "Sim. Além do currículo, o curso inclui preparação para processos seletivos e treinos para entrevistas de emprego." },
      { question: "Nunca fiz um currículo. Consigo acompanhar?", answer: "Sim. As aulas são individuais e começam do seu ponto de partida, seja criando o primeiro currículo ou melhorando um currículo existente." },
      { question: "O curso ajuda quem está voltando ao mercado de trabalho?", answer: "Sim. Muitos alunos da Trilha estão retomando a vida profissional e o curso ajuda a apresentar a experiência acumulada de forma valorizada." },
    ],
    related: [
      { slug: "curso-pacote-office-sorocaba", label: "Conheça o curso de Pacote Office, requisito em muitas vagas" },
      { slug: "curso-informatica-basica-sorocaba", label: "Veja também o curso de Informática Básica" },
    ],
  },
];

export function getCourse(slug: CourseSlug): Course {
  const course = courses.find((c) => c.slug === slug);
  if (!course) throw new Error(`Curso não encontrado: ${slug}`);
  return course;
}
