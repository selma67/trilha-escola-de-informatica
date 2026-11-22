import { createFileRoute, Link } from "@tanstack/react-router";
import { BriefcaseBusiness, ChevronRight, Clock3, Laptop, MapPin, Menu, MessageCircle, Smartphone, Sparkles } from "lucide-react";
import youngStudentImage from "@/assets/trilha-aula-aluna-professora.jpg";
import adultStudentImage from "@/assets/trilha-aula-individual-adulto.jpg";
import logoAsset from "@/assets/trilha-avatar.png.asset.json";
import { courses } from "@/data/courses";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Trilha Escola de Informática | Cursos Presenciais em Sorocaba" },
      { name: "description", content: "Cursos de informática presenciais em Sorocaba para iniciantes, terceira idade e mercado de trabalho. Aprenda Office, Canva, celular e IA no seu ritmo." },
      { property: "og:title", content: "Trilha Escola de Informática em Sorocaba" },
      { property: "og:description", content: "Aulas presenciais e personalizadas de informática, Office, Canva, celular e IA em Sorocaba." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Trilha Escola de Informática",
        description: "Escola de informática com aulas presenciais e personalizadas em Sorocaba.",
        telephone: "+55 15 98104-8499",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Assis Machado, 297",
          addressLocality: "Sorocaba",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        openingHours: ["Mo-Fr 08:30-18:00", "Sa 09:00-12:00"],
      }),
    }],
  }),
});

const whatsapp = `https://wa.me/5515981048499?text=${encodeURIComponent("Olá, gostaria de conhecer as aulas da Trilha.")}`;

const audiences = [
  { icon: Laptop, title: "Começando do Zero", text: "Nunca teve intimidade com o computador e quer aprender do absoluto zero, sem complicações.", tone: "text-coral bg-coral/10" },
  { icon: Sparkles, title: "Voltando a Estudar", text: "Retome os seus estudos com confiança e adapte-se facilmente às novas tecnologias.", tone: "text-green bg-green/10" },
  { icon: Smartphone, title: "Terceira Idade", text: "Aprenda a mexer no celular, na internet e no computador com muita paciência e tranquilidade.", tone: "text-teal bg-teal/10" },
  { icon: BriefcaseBusiness, title: "Foco no Trabalho", text: "Domine o Pacote Office (Word, Excel, PowerPoint) e ferramentas requisitadas pelo mercado.", tone: "text-ink bg-ink/10" },
];

const homeFaq = [
  { question: "Onde fazer curso de informática em Sorocaba?", answer: "A Trilha Escola de Informática fica na Rua Assis Machado, 297, na Vila Hortência, em Sorocaba/SP. As aulas são presenciais e individuais, com horários de segunda a sexta, das 08:30 às 18:00, e sábado, das 09:00 às 12:00." },
  { question: "Existem cursos de informática para iniciantes?", answer: "Sim. O curso de Informática Básica da Trilha foi pensado para quem está começando do zero, sem nenhuma experiência com computador. Você aprende no seu ritmo, com acompanhamento individual da professora." },
  { question: "Os cursos são presenciais?", answer: "Sim. Todos os cursos da Trilha são presenciais, em Sorocaba, com aulas individuais. Você aprende praticando, com a professora ao seu lado para tirar dúvidas na hora." },
  { question: "Como escolher o curso de informática mais adequado?", answer: "Depende do seu objetivo: Informática Básica para começar do zero, Pacote Office e Excel para o trabalho, Canva para criar artes, Celular e Internet para a Terceira Idade para ganhar autonomia no celular, Google Meu Negócio para divulgar sua empresa e Currículo e Entrevista para quem procura emprego. Fale com a Trilha pelo WhatsApp e a professora ajuda você a escolher." },
  { question: "Existem aulas individuais?", answer: "Sim. Todas as aulas da Trilha são individuais. O conteúdo avança no seu ritmo, sem turma, sem comparação e sem pressa." },
  { question: "Posso aprender informática mesmo começando do zero?", answer: "Pode. A maioria dos alunos da Trilha começa do zero ou está voltando a estudar depois de anos. O atendimento é acolhedor, paciente e adaptado a cada pessoa." },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <nav aria-label="Navegação principal" className="sticky top-0 z-50 border-b border-coral/10 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Trilha Escola de Informática — início">
            <img src={logoAsset.url} alt="" width={52} height={52} className="size-12" />
            <div><span className="block font-heading text-xl font-bold uppercase leading-none text-coral">Trilha</span><span className="text-[10px] font-semibold uppercase text-ink/60">Escola de Informática</span></div>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#para-voce" className="font-semibold hover:text-coral">Para você</a>
            <a href="#cursos" className="font-semibold hover:text-coral">Cursos</a>
            <a href="#escola" className="font-semibold hover:text-coral">A escola</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"><MessageCircle size={18} /> WhatsApp</a>
          </div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-lg bg-whatsapp text-primary-foreground md:hidden" aria-label="Falar no WhatsApp"><Menu size={22} /></a>
        </div>
      </nav>

      <main>
        <section id="inicio" className="circuit-grid relative overflow-hidden pb-20 pt-12 lg:pb-28 lg:pt-20">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-cream to-transparent" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="z-10">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-green/12 px-4 py-2 text-sm font-bold text-green"><MapPin size={16} /> Aulas de Informática Presenciais em Sorocaba</span>
              <h1 className="max-w-2xl text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl">Aprenda informática do zero. <span className="text-coral">Aulas individuais.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">Talvez você esteja começando agora, tenha parado de estudar e esteja voltando, ou precise aprender informática para trabalhar, estudar e ter autonomia.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-7 py-4 text-lg font-bold text-primary-foreground whatsapp-glow transition-transform hover:-translate-y-1"><MessageCircle size={21} /> Falar pelo WhatsApp</a>
              </div>
            </div>
            <div className="relative lg:pl-6">
              <div className="overflow-hidden rounded-2xl border-8 border-card coral-glow">
                <img src={youngStudentImage} alt="Professora da Trilha ensinando uma aluna em aula individual de informática" width={1200} height={912} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 left-2 max-w-56 rounded-xl bg-teal p-5 text-accent-foreground shadow-xl sm:left-0"><p className="font-heading text-xl font-bold">Há 15 anos ministrando aulas de informática</p></div>
            </div>
          </div>
        </section>

        <section id="para-voce" className="bg-card py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-4xl"><h2 className="text-4xl font-bold sm:text-5xl">Na Trilha, você encontra esse espaço.</h2><p className="mt-5 text-lg leading-relaxed text-ink/65">Um lugar para aprender informática em Sorocaba sem vergonha de perguntar, sem medo de errar e sem precisar acompanhar o ritmo de outra pessoa.</p><p className="mt-4 text-lg leading-relaxed text-ink/65">Aqui você aprende desde o básico até as ferramentas essenciais para o seu dia a dia profissional e pessoal, com atendimento totalmente humanizado, acolhedor e seguro para todos.</p></div>
            <h2 className="mt-20 text-3xl font-bold sm:text-4xl">Para diferentes momentos da vida</h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-4">
              {audiences.map(({ icon: Icon, title, text, tone }) => <article key={title} className="bg-card p-7"><div className={`mb-6 grid size-13 place-items-center rounded-xl ${tone}`}><Icon size={25} /></div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-ink/65">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="cursos" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div><h2 className="text-4xl font-bold sm:text-5xl">O que você pode aprender na Trilha</h2></div>
              <img src={adultStudentImage} alt="Professora da Trilha em aula individual de informática com um aluno adulto" loading="lazy" width={1200} height={912} className="h-96 w-full rounded-2xl object-cover object-center" />
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map(({ slug, title, short, icon: Icon, tone }, i) => (
                <article key={slug} className={`group flex min-h-52 flex-col rounded-xl p-7 ${i === 0 ? "bg-coral text-primary-foreground" : i === 3 ? "bg-green text-secondary-foreground" : "border border-ink/10 bg-card"}`}>
                  <Icon size={28} />
                  <h3 className="mt-8 text-2xl font-bold">{title}</h3>
                  <p className={`mt-3 leading-relaxed ${i === 0 ? "text-primary-foreground/85" : "text-ink/65"}`}>{short}</p>
                  <Link to={`/${slug}`} className={`mt-auto inline-flex items-center gap-1 pt-5 font-bold ${i === 0 || i === 3 ? "" : "text-coral"} hover:underline`}>Saiba mais <ChevronRight size={18} /></Link>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-24 max-w-4xl">
              <h2 className="text-3xl font-bold sm:text-4xl">Perguntas frequentes sobre os cursos</h2>
              <Accordion type="single" collapsible className="mt-8">
                {homeFaq.map((item, i) => (
                  <AccordionItem key={item.question} value={`home-faq-${i}`} className="rounded-xl border border-ink/10 bg-card px-6">
                    <AccordionTrigger className="text-left text-lg font-bold">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-ink/70">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="escola" className="overflow-hidden bg-ink py-24 text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div><h2 className="text-4xl font-bold sm:text-5xl">Dê o primeiro passo</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70">Você não precisa chegar sabendo. Na Trilha, você encontra espaço para aprender no seu próprio tempo.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-whatsapp px-7 py-4 text-lg font-bold text-primary-foreground"><MessageCircle size={22} /> Quero Conversar com a Trilha</a></div>
            <img src={youngStudentImage} alt="Aula individual de informática com a professora da Trilha" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
        </section>

        <section id="contato" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-card shadow-xl shadow-ink/5 ring-1 ring-ink/5">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 sm:p-12 lg:p-16"><h2 className="text-4xl font-bold sm:text-5xl">Trilha Escola de Informática</h2><p className="mt-5 text-lg text-ink/65">Aulas presenciais em Sorocaba - SP</p><div className="mt-8 flex gap-4"><MapPin className="mt-1 shrink-0 text-coral" /><p>Rua Assis Machado, 297 — Vila Hortência — Sorocaba/SP</p></div><div className="mt-6 flex gap-4"><MessageCircle className="mt-1 shrink-0 text-coral" /><p>WhatsApp: <a href={whatsapp} target="_blank" rel="noreferrer" className="font-bold underline">(15) 98104-8499</a></p></div></div>
                <div className="bg-linear-to-br from-coral to-coral-soft p-8 text-primary-foreground sm:p-12 lg:p-16"><h3 className="text-2xl font-bold">Horário de Atendimento:</h3><div className="mt-8 flex gap-4"><Clock3 className="mt-1 shrink-0" /><p>Segunda a Sexta: 08:30 - 18:00 | Sábado: 09:00 - 12:00</p></div></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-card py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:flex-row sm:text-left lg:px-8"><div className="flex items-center gap-3"><img src={logoAsset.url} alt="Logotipo da Trilha Escola de Informática" width={48} height={48} className="size-12" /><span className="font-heading font-bold text-coral">Trilha Escola de Informática</span></div><p className="text-sm text-ink/50">© 2026 Trilha Escola de Informática. Todos os direitos reservados.</p><a href="#inicio" className="inline-flex items-center gap-1 font-bold text-coral">Voltar ao início <ChevronRight className="-rotate-90" size={18} /></a></div>
      </footer>
    </div>
  );
}
