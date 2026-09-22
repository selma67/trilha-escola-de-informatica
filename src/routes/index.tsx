import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, ChevronRight, Clock3, Laptop, MapPin, Menu, MessageCircle, Palette, Smartphone, Sparkles } from "lucide-react";
import heroImage from "@/assets/trilha-aula-presencial.jpg";
import officeImage from "@/assets/trilha-office-aula.jpg";
import communityImage from "@/assets/trilha-comunidade.jpg";
import logoAsset from "@/assets/trilha-avatar.png.asset.json";

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

const whatsapp = "https://wa.me/5515981048499?text=Olá%2C%20gostaria%20de%20conhecer%20as%20aulas%20da%20Trilha.";

const audiences = [
  { icon: Smartphone, title: "Terceira idade", text: "Celular, internet e computador com calma, segurança e explicações claras.", tone: "text-teal bg-teal/10" },
  { icon: Laptop, title: "Começando do zero", text: "Do primeiro clique à autonomia para resolver tarefas digitais do dia a dia.", tone: "text-coral bg-coral/10" },
  { icon: Sparkles, title: "Voltando a estudar", text: "Recupere a confiança e acompanhe as ferramentas usadas nos estudos atuais.", tone: "text-green bg-green/10" },
  { icon: BriefcaseBusiness, title: "Foco no trabalho", text: "Conhecimentos práticos para currículo, processos seletivos e rotina profissional.", tone: "text-ink bg-ink/10" },
];

const courses = [
  { title: "Informática básica", text: "Arquivos, internet, e-mail e uso seguro do computador.", icon: Laptop },
  { title: "Pacote Office", text: "Word, Excel e PowerPoint para trabalho e estudos.", icon: BriefcaseBusiness },
  { title: "Canva e criatividade", text: "Apresentações e conteúdos visuais com mais qualidade.", icon: Palette },
  { title: "Celular e internet", text: "Mais autonomia digital para a terceira idade.", icon: Smartphone },
  { title: "Aulas particulares", text: "Conteúdo direcionado exatamente ao que você precisa.", icon: MessageCircle },
  { title: "Currículo e IA", text: "Ferramentas atuais para processos seletivos e mercado de trabalho.", icon: Sparkles },
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
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-coral px-5 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"><MessageCircle size={18} /> WhatsApp</a>
          </div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-lg bg-coral text-primary-foreground md:hidden" aria-label="Falar no WhatsApp"><Menu size={22} /></a>
        </div>
      </nav>

      <main>
        <section id="inicio" className="circuit-grid relative overflow-hidden pb-20 pt-12 lg:pb-28 lg:pt-20">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-cream to-transparent" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="z-10">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-green/12 px-4 py-2 text-sm font-bold text-green"><MapPin size={16} /> Aulas presenciais em Sorocaba</span>
              <h1 className="max-w-2xl text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl">Você não precisa saber para <span className="text-coral">começar.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl">Aprenda informática do zero, no seu ritmo e sem vergonha de perguntar. Aulas humanizadas para a vida, os estudos e o trabalho.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-coral px-7 py-4 text-lg font-bold text-primary-foreground coral-glow transition-transform hover:-translate-y-1"><MessageCircle size={21} /> Falar com a Trilha</a>
                <a href="#cursos" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-ink/10 bg-card px-7 py-4 text-lg font-bold hover:border-coral/40">Ver o que você pode aprender <ArrowRight size={20} /></a>
              </div>
            </div>
            <div className="relative lg:pl-6">
              <div className="overflow-hidden rounded-2xl border-8 border-card coral-glow">
                <img src={heroImage} alt="Professora auxiliando aluna em uma aula presencial de informática" width={1200} height={912} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 left-2 max-w-56 rounded-xl bg-teal p-5 text-accent-foreground shadow-xl sm:left-0"><p className="font-heading text-xl font-bold">Aprenda com calma.</p><p className="mt-1 text-sm opacity-90">Professor ao seu lado, em cada etapa.</p></div>
            </div>
          </div>
        </section>

        <section id="para-voce" className="bg-card py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl"><span className="font-bold uppercase text-coral">Uma escola para pessoas reais</span><h2 className="mt-3 text-4xl font-bold sm:text-5xl">A tecnologia pode fazer parte da sua vida.</h2><p className="mt-5 text-lg leading-relaxed text-ink/65">Na Trilha, cada aluno encontra espaço para aprender sem pressão, comparar seu ritmo ou ter medo de errar.</p></div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-4">
              {audiences.map(({ icon: Icon, title, text, tone }) => <article key={title} className="bg-card p-7"><div className={`mb-6 grid size-13 place-items-center rounded-xl ${tone}`}><Icon size={25} /></div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-ink/65">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="cursos" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div><span className="font-bold uppercase text-green">Conteúdo útil desde a primeira aula</span><h2 className="mt-3 text-4xl font-bold sm:text-5xl">O que você pode aprender na Trilha</h2><p className="mt-5 text-lg leading-relaxed text-ink/65">Do básico às ferramentas que ajudam você a estudar, trabalhar e resolver tarefas com independência.</p></div>
              <img src={officeImage} alt="Aluno aprendendo planilhas em aula prática de informática" loading="lazy" width={800} height={1008} className="h-96 w-full rounded-2xl object-cover object-center" />
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map(({ title, text, icon: Icon }, i) => <article key={title} className={`group min-h-52 rounded-xl p-7 ${i === 0 ? "bg-coral text-primary-foreground" : i === 3 ? "bg-green text-secondary-foreground" : "border border-ink/10 bg-card"}`}><Icon size={28} /><h3 className="mt-8 text-2xl font-bold">{title}</h3><p className={`mt-3 leading-relaxed ${i === 0 ? "text-primary-foreground/85" : "text-ink/65"}`}>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="escola" className="overflow-hidden bg-ink py-24 text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div><span className="font-bold uppercase text-coral-soft">Por que escolher a Trilha?</span><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Acolhimento também ensina.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/65">Atendimento humanizado, aulas presenciais e atenção ao que você realmente precisa aprender.</p>
              <div className="mt-10 space-y-7">
                {[['Aulas presenciais','Ajuda próxima para tirar dúvidas na hora e praticar com segurança.'],['No seu próprio ritmo','O conteúdo avança conforme sua confiança e seu aprendizado.'],['Aprendizado para a vida real','Exercícios ligados às tarefas que você encontra no dia a dia.']].map(([title,text],i)=><div key={title} className="flex gap-5"><span className={`mt-1 h-auto w-1 rounded-full ${i===1?'bg-green':'bg-coral'}`} /><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-1 text-primary-foreground/60">{text}</p></div></div>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4"><img src={communityImage} alt="Alunos conversando em ambiente acolhedor de aprendizagem" loading="lazy" width={816} height={816} className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover" /><div className="rounded-xl bg-coral p-6"><p className="text-3xl font-bold">Presencial</p><p className="mt-2 text-primary-foreground/80">em Sorocaba</p></div><div className="rounded-xl bg-green p-6 text-secondary-foreground"><p className="text-3xl font-bold">Seu ritmo</p><p className="mt-2 text-secondary-foreground/75">sem pressão</p></div></div>
          </div>
        </section>

        <section id="contato" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="overflow-hidden rounded-2xl bg-card shadow-xl shadow-ink/5 ring-1 ring-ink/5">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 sm:p-12 lg:p-16"><span className="font-bold uppercase text-coral">Dê o primeiro passo</span><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Venha conversar com a Trilha.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/65">Conte o que você quer aprender. Vamos orientar você sobre a melhor forma de começar.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-coral px-7 py-4 text-lg font-bold text-primary-foreground hover:bg-coral-soft"><MessageCircle size={22} /> Chamar no WhatsApp</a></div>
                <div className="bg-linear-to-br from-coral to-coral-soft p-8 text-primary-foreground sm:p-12 lg:p-16"><h3 className="text-2xl font-bold">Trilha Escola de Informática</h3><div className="mt-8 space-y-6"><div className="flex gap-4"><MapPin className="mt-1 shrink-0" /><p>Rua Assis Machado, 297<br />Vila Hortência — Sorocaba/SP</p></div><div className="flex gap-4"><MessageCircle className="mt-1 shrink-0" /><a href={whatsapp} target="_blank" rel="noreferrer" className="font-bold underline decoration-primary-foreground/40 underline-offset-4">(15) 98104-8499</a></div><div className="flex gap-4"><Clock3 className="mt-1 shrink-0" /><p>Segunda a sexta: 08:30–18:00<br />Sábado: 09:00–12:00</p></div></div></div>
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
