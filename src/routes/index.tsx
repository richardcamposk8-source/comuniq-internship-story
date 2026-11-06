import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Maximize, Printer } from "lucide-react";
import { slides } from "@/slides/slides";

type Search = { slide?: number | undefined; print?: boolean | undefined };

export const Route = createFileRoute("/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    slide: s["slide"] ? Math.max(1, Math.min(slides.length, Number(s["slide"]) || 1)) : undefined,
    print: s["print"] === true || s["print"] === 1 || s["print"] === "1" || s["print"] === "true" ? true : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Defesa de Estágio — Richard Leal | Estúdio Comunique" },
      { name: "description", content: "Apresentação do Estágio Supervisionado em Administração no Estúdio Comunique: pesquisa de satisfação com indicador de 1 a 4, média geral de 3,73." },
      { property: "og:title", content: "Defesa de Estágio — Richard Leal" },
      { property: "og:description", content: "Pesquisa de satisfação com indicador de 1 a 4 (média 3,73) no Estúdio Comunique — Estágio Supervisionado em Administração, AMF." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Deck,
});

function Scaled({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(Math.min(el.clientWidth / 1920, el.clientHeight / 1080)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 h-[1080px] w-[1920px] -ml-[960px] -mt-[540px] shadow-2xl"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}

function Deck() {
  const { slide = 1, print } = Route.useSearch();
  const navigate = useNavigate({ from: "/" });
  const i = slide - 1;
  const go = (n: number) => {
    const t = Math.max(1, Math.min(slides.length, n));
    navigate({ search: { slide: t }, replace: true });
  };

  useEffect(() => {
    if (print) {
      const t = setTimeout(() => window.print(), 800);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [print]);

  useEffect(() => {
    document.title = `${slide}/${slides.length} — ${slides[i]!.title}`;
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", " ", "PageDown"].includes(e.key)) { e.preventDefault(); go(slide + 1); }
      if (["ArrowLeft", "PageUp"].includes(e.key)) { e.preventDefault(); go(slide - 1); }
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); document.documentElement.requestFullscreen?.(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const touchX = useRef<number | null>(null);

  if (print) {
    return (
      <div>
        {slides.map(({ C, title }) => (
          <div key={title} className="print-slide"><C /></div>
        ))}
      </div>
    );
  }

  const Current = slides[i]!.C;
  return (
    <div
      className="flex h-screen flex-col bg-stage"
      onTouchStart={(e) => (touchX.current = e.touches[0]!.clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0]!.clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? slide + 1 : slide - 1);
        touchX.current = null;
      }}
    >
      <div className="flex-1 p-4 md:p-8">
        <Scaled><Current /></Scaled>
      </div>
      <div className="flex items-center justify-center gap-3 pb-4 text-ink-foreground">
        <button aria-label="Slide anterior" onClick={() => go(slide - 1)} className="rounded-full p-2 hover:bg-primary">
          <ChevronLeft />
        </button>
        <div className="flex gap-2">
          {slides.map((s, n) => (
            <button
              key={s.title}
              aria-label={`Ir para ${s.title}`}
              onClick={() => go(n + 1)}
              className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground"}`}
            />
          ))}
        </div>
        <button aria-label="Próximo slide" onClick={() => go(slide + 1)} className="rounded-full p-2 hover:bg-primary">
          <ChevronRight />
        </button>
        <button aria-label="Tela cheia" onClick={() => document.documentElement.requestFullscreen?.()} className="ml-6 rounded-full p-2 hover:bg-primary">
          <Maximize size={20} />
        </button>
        <a aria-label="Exportar PDF" href="/?print=1" target="_blank" rel="noreferrer" className="rounded-full p-2 hover:bg-primary">
          <Printer size={20} />
        </a>
      </div>
    </div>
  );
}
