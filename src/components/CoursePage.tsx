import { Link } from "@tanstack/react-router";
import { ArrowLeft, Check, ChevronRight, Clock3, MapPin, MessageCircle, User } from "lucide-react";
import type { Course } from "@/data/courses";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoAsset from "@/assets/trilha-avatar.png.asset.json";

export const whatsapp = `https://wa.me/5515981048499?text=${encodeURIComponent("Olá, gostaria de conhecer as aulas da Trilha.")}`;

const whatsappCourse = (title: string) =>
  `https://wa.me/5515981048499?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o curso de ${title} da Trilha.`)}`;

export function CoursePage({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <nav aria-label="Navegação principal" className="sticky top-0 z-50 border-b border-coral/10 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Trilha Escola de Informática — início">
            <img src={logoAsset.url} alt="" width={52} height={52} className="size-12" />
            <div><span className="block font-heading text-xl font-bold uppercase leading-none text-coral">Trilha</span><span className="text-[10px] font-semibold uppercase text-ink/60">Escola de Informática</span></div>
          </Link>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-3 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"><MessageCircle size={18} /> WhatsApp</a>
        </div>
      </nav>

      <main>
        <section className="circuit-grid relative overflow-hidden pb-16 pt-12 lg:pb-20 lg:pt-16">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-cream to-transparent" />
          <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
            <Link to="/" hash="cursos" className="inline-flex items-center gap-2 font-semibold text-coral hover:underline"><ArrowLeft size={18} /> Voltar para os cursos</Link>
            <div className={`mt-8 grid size-16 place-items-center rounded-2xl ${course.tone}`}><Icon size={32} /></div>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">{course.title} em Sorocaba</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">{course.short}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappCourse(course.title)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-7 py-4 text-lg font-bold text-primary-foreground whatsapp-glow transition-transform hover:-translate-y-1"><MessageCircle size={21} /> Quero me matricular</a>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Sobre o curso</h2>
            {course.intro.map((p) => <p key={p.slice(0, 40)} className="mt-5 text-lg leading-relaxed text-ink/70">{p}</p>)}

            <h2 className="mt-14 text-3xl font-bold sm:text-4xl">O que você vai aprender</h2>
            <ul className="mt-7 space-y-4">
              {course.learn.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink/75"><Check className="mt-1 shrink-0 text-green" size={22} /> {item}</li>
              ))}
            </ul>

            <div className="mt-14 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-ink/10 bg-cream p-6">
                <div className="flex items-center gap-3"><MapPin className="text-coral" size={22} /><h3 className="text-xl font-bold">Aulas presenciais</h3></div>
                <p className="mt-3 leading-relaxed text-ink/65">Aulas individuais na Rua Assis Machado, 297 — Vila Hortência, Sorocaba/SP, com acompanhamento direto da professora.</p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-cream p-6">
                <div className="flex items-center gap-3"><User className="text-coral" size={22} /><h3 className="text-xl font-bold">Para quem é</h3></div>
                <p className="mt-3 leading-relaxed text-ink/65">{course.audience}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="mt-8">
              {course.faq.map((item, i) => (
                <AccordionItem key={item.question} value={`faq-${i}`} className="rounded-xl border border-ink/10 bg-card px-6">
                  <AccordionTrigger className="text-left text-lg font-bold">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-ink/70">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-card pb-16 lg:pb-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl">Outros cursos da Trilha</h2>
            <div className="mt-6 flex flex-col gap-3">
              {course.related.map((r) => (
                <Link key={r.slug} to={`/${r.slug}`} className="inline-flex items-center gap-2 text-lg font-semibold text-coral hover:underline">{r.label} <ChevronRight size={18} /></Link>
              ))}
              <Link to="/" hash="cursos" className="inline-flex items-center gap-2 text-lg font-semibold text-ink/70 hover:text-coral">Ver todos os cursos da Trilha <ChevronRight size={18} /></Link>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-ink py-16 text-primary-foreground lg:py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Dê o primeiro passo</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/70">Entre em contato com a Trilha Escola de Informática e tire suas dúvidas sobre o curso de {course.title}, horários e matrícula.</p>
            <a href={whatsappCourse(course.title)} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-whatsapp px-7 py-4 text-lg font-bold text-primary-foreground"><MessageCircle size={22} /> Falar com a Trilha no WhatsApp</a>
            <div className="mt-10 flex flex-col gap-4 text-primary-foreground/80 sm:flex-row sm:gap-10">
              <p className="flex items-center gap-2"><MapPin size={18} className="shrink-0" /> Rua Assis Machado, 297 — Vila Hortência — Sorocaba/SP</p>
              <p className="flex items-center gap-2"><Clock3 size={18} className="shrink-0" /> Seg a Sex: 08:30 - 18:00 | Sáb: 09:00 - 12:00</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-card py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:flex-row sm:text-left lg:px-8">
          <div className="flex items-center gap-3"><img src={logoAsset.url} alt="Logotipo da Trilha Escola de Informática" width={48} height={48} className="size-12" /><span className="font-heading font-bold text-coral">Trilha Escola de Informática</span></div>
          <p className="text-sm text-ink/50">© 2026 Trilha Escola de Informática. Todos os direitos reservados.</p>
          <Link to="/" className="inline-flex items-center gap-1 font-bold text-coral">Voltar ao início <ChevronRight className="-rotate-90" size={18} /></Link>
        </div>
      </footer>
    </div>
  );
}
