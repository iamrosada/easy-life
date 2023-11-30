import { Container } from './Container';
import backgroundImage from './images/background-faqs.jpg';

const faqs = [
  // FAQs sobre Estudar no Exterior
  [
    {
      pergunta: 'Como a Easy Life me ajuda a estudar no exterior?',
      resposta:
        'A Easy Life oferece suporte abrangente para estudar no exterior, incluindo orientação na escolha de destinos como Rússia, Dubai e África do Sul, assistência no processo de inscrição e recursos úteis para adaptação a uma nova cultura.',
    },
    {
      pergunta: 'Quais países a Easy Life cobre para estudar no exterior?',
      resposta:
        'Atualmente, focamos em facilitar oportunidades de estudo na Rússia, Dubai e África do Sul. No entanto, estamos expandindo nossas ofertas, então fique atento para destinos mais emocionantes.',
    },
    {
      pergunta:
        'A Easy Life pode ajudar nos requisitos de idioma para estudar no exterior?',
      resposta:
        'Absolutamente! A Easy Life oferece recursos de aprendizado de idiomas para ajudá-lo a atender aos requisitos de idiomas para estudar em diferentes países. Nossos programas de idiomas abrangem inglês, francês, russo, alemão e mais.',
    },
  ],

  // FAQs sobre Aprendizado de Idiomas
  [
    {
      pergunta:
        'Como a Easy Life ajuda as crianças a aprenderem vários idiomas?',
      resposta:
        'A Easy Life está empenhada em tornar o aprendizado de idiomas agradável para as crianças. Nossos cursos interativos e envolventes abrangem inglês, francês, russo, alemão e mais. Utilizamos métodos de ensino inovadores para garantir uma experiência de aprendizado divertida e eficaz.',
    },
    {
      pergunta:
        'A quais faixas etárias se destinam os cursos de idiomas da Easy Life?',
      resposta:
        'A Easy Life atende a diversas faixas etárias, oferecendo cursos de idiomas adequados para crianças de todas as idades. Nossos programas são projetados para serem adequados à idade e eficazes, promovendo o amor pelos idiomas desde cedo.',
    },
    {
      pergunta: 'Os cursos de idiomas da Easy Life estão disponíveis online?',
      resposta:
        'Sim, nossos cursos de idiomas são acessíveis online, proporcionando flexibilidade para as crianças aprenderem no conforto de suas casas. A plataforma online inclui lições interativas, jogos e atividades para manter o aprendizado de idiomas envolvente e dinâmico.',
    },
  ],

  // FAQs Gerais sobre a Empresa
  [
    {
      pergunta: 'Qual é a missão da Easy Life?',
      resposta:
        'A Easy Life tem como missão tornar a educação e o aprendizado de idiomas acessíveis a pessoas do mundo todo. Nos esforçamos para simplificar o processo de estudar no exterior e tornar o aprendizado de idiomas uma experiência alegre para as crianças, contribuindo para um futuro mais brilhante.',
    },
    {
      pergunta:
        'Como posso entrar em contato com o suporte ao cliente da Easy Life?',
      resposta:
        'Você pode entrar em contato com nossa equipe de suporte ao cliente por e-mail em suporte@easylife.com ou por meio de nosso formulário de contato online. Estamos aqui para ajudar com qualquer dúvida ou preocupação que você possa ter.',
    },
    {
      pergunta:
        'A Easy Life é uma provedora de educação registrada e reconhecida?',
      resposta:
        'Sim, a Easy Life é uma provedora de educação registrada e reconhecida. Seguimos padrões e regulamentações do setor para garantir a qualidade e legitimidade de nossos serviços.',
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <img
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        // unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Se você não encontrar o que procura, envie um e-mail para nossa
            equipe de suporte e se você tiver sorte, alguém entrará em contato
            com você.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.pergunta}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">
                      {faq.resposta}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
