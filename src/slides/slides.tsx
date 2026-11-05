import type { ReactNode } from "react";
import logoPrincipal from "@/assets/comunique_logo_principal.jpg.asset.json";
import logoHorizontal from "@/assets/comunique_logo_horizontal.jpg.asset.json";
import seloAmf from "@/assets/amf_administracao_selo.jpg.asset.json";

const TOTAL = 9;

function Title({ children, className = "slide-title" }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={className}>
      <span className="brand-slash">/</span>
      {children}
    </h1>
  );
}

function SlideLayout({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div className="slide-content flex flex-col px-[120px] pt-[90px] pb-[70px]">
      <div className="flex items-end gap-10">
        <Title>{title}</Title>
        <div className="mb-[18px] h-[28px] flex-1 -skew-x-12 bg-primary" />
      </div>
      <div className="mt-[64px] flex-1 min-h-0">{children}</div>
      <div className="mt-6 flex items-center justify-between border-t pt-6">
        <img src={logoHorizontal.url} alt="estudio.comunique" className="h-[34px]" />
        <span className="slide-chrome text-muted-foreground">
          richard de campos leal <span className="brand-dot">·</span> estágio supervisionado em administração
        </span>
        <span className="slide-chrome font-bold">
          <span className="text-primary">{String(n).padStart(2, "0")}</span>
          <span className="text-muted-foreground"> / {String(TOTAL).padStart(2, "0")}</span>
        </span>
      </div>
    </div>
  );
}

function Card({ label, children, dark = false }: { label: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className={`flex flex-col gap-5 rounded-md p-10 ${dark ? "bg-ink text-ink-foreground" : "bg-card"}`}>
      <div className="slide-kicker text-primary">{label}</div>
      {children}
    </div>
  );
}

/* 1 — Identificação e contexto */
function S1() {
  return (
    <div className="slide-content flex">
      <div className="flex w-[1100px] flex-col justify-between bg-ink p-[120px] text-ink-foreground">
        <div className="slide-kicker text-primary">/estágio supervisionado em administração · 8º semestre</div>
        <div>
          <h1 className="slide-title-lg text-[92px]">
            <span className="brand-slash">/</span>Pesquisa de satisfação e NPS
          </h1>
          <p className="slide-subtitle mt-8 font-normal">Relato de experiência no Estúdio Comunique</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          {[
            ["Estagiário", "Richard de Campos Leal"],
            ["Empresa", "Estúdio Comunique LTDA"],
            ["Área", "Gestão · relacionamento com clientes"],
            ["Período", "25/08 a 20/10/2026 · 48h"],
            ["Supervisor", "Giovane Pereira"],
            ["Orientadora", "Profª Caroline Brum"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="slide-caption text-primary font-bold">{k}</div>
              <div className="slide-body font-bold">{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-24">
        <img src={logoPrincipal.url} alt="estudio.comunique" className="w-[620px]" />
        <div className="flex items-center gap-8">
          <img src={seloAmf.url} alt="Administração — Antonio Meneghetti Faculdade" className="h-[200px] w-[200px] rounded-full" />
          <div className="slide-caption text-muted-foreground">
            Bacharelado em Administração
            <br />
            <b className="font-bold text-foreground">Antonio Meneghetti Faculdade</b>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 2 — Conhecendo a empresa */
function S2() {
  return (
    <SlideLayout n={2} title="conhecendo a empresa">
      <div className="grid h-full grid-cols-[1.25fr_1fr] gap-16">
        <div className="flex flex-col justify-center gap-10">
          <p className="slide-body-lg">
            Estúdio de <b className="font-bold">branding e posicionamento estratégico</b> que atua como consultoria,
            ajudando negócios a descobrirem sua essência e se comunicarem de forma autêntica.
          </p>
          <p className="slide-body text-muted-foreground">
            Afasta-se do modelo de agência tradicional: o foco é construir, diferenciar e valorizar marcas reais.
          </p>
        </div>
        <div className="grid grid-rows-3 gap-6">
          <Card label="segmento">
            <div className="slide-body font-bold">Publicidade · consultoria em comunicação e branding</div>
          </Card>
          <Card label="trajetória">
            <div className="slide-body font-bold">6 anos · Santa Maria, RS</div>
          </Card>
          <Card label="serviços" dark>
            <div className="slide-body font-bold">Branding · posicionamento · comunicação de marca</div>
          </Card>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 3 — Área de atuação */
function S3() {
  const items = [
    ["papel", "Conduzir o projeto de pesquisa de satisfação e NPS com os clientes do estúdio."],
    ["responsabilidades", "Ouvir a equipe, estruturar o questionário, aplicar, acompanhar e analisar as respostas."],
    ["participação", "Do alinhamento inicial ao plano de ação, com autonomia e validações pontuais com o supervisor."],
  ];
  return (
    <SlideLayout n={3} title="área de atuação no estágio">
      <div className="flex h-full flex-col justify-center gap-12">
        <p className="slide-subtitle">
          gestão do relacionamento com clientes<span className="brand-dot">.</span>
        </p>
        <div className="grid grid-cols-3 gap-8">
          {items.map(([k, v], i) => (
            <Card key={k} label={k ?? ""} dark={i === 0}>
              <p className="slide-body">{v}</p>
            </Card>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* 4 — Principais atividades */
function S4() {
  const steps = [
    ["alinhamento", "Reuniões para entender a empresa e definir os objetivos da pesquisa."],
    ["entrevistas internas", "Escuta da equipe sobre clientes, entregas e relacionamento."],
    ["questionário + NPS", "Perguntas claras e neutras, escala de 1 a 4 e convite aos clientes."],
    ["coleta e follow-up", "Acompanhamento das respostas e contato com quem não respondeu."],
    ["análise e insights", "Cálculo do NPS, leitura qualitativa e apresentação à equipe."],
  ];
  return (
    <SlideLayout n={4} title="principais atividades">
      <div className="grid h-full grid-cols-5 gap-6">
        {steps.map(([t, d], i) => (
          <div key={t} className={`flex flex-col gap-6 rounded-md p-8 ${i === 4 ? "bg-primary text-primary-foreground" : "bg-card"}`}>
            <div className={`text-[96px] font-black leading-none ${i === 4 ? "" : "text-primary"}`}>{i + 1}</div>
            <div className="slide-subtitle text-[30px] break-words">{t}</div>
            <p className="slide-body text-[28px]">{d}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

/* 5 — Entregas e contribuições */
function S5() {
  const c = [
    ["mapa interno da equipe", "Entrevistas consolidadas por temas recorrentes.", "Base para as hipóteses a validar com os clientes."],
    ["pesquisa de satisfação e NPS", "Duas versões do questionário, escala e mensagem introdutória.", "Instrumento aplicado aos clientes do estúdio."],
    ["insights e plano de ação", "Resultados e comentários apresentados à equipe.", "Ações de melhoria definidas e priorizadas."],
  ];
  return (
    <SlideLayout n={5} title="entregas e contribuições">
      <div className="grid h-full grid-cols-3 gap-8">
        {c.map(([t, o, r], i) => (
          <div key={t} className="flex flex-col overflow-hidden rounded-md bg-card">
            <div className={`p-10 ${i === 1 ? "bg-primary text-primary-foreground" : "bg-ink text-ink-foreground"}`}>
              <div className="slide-kicker opacity-80">contribuição {i + 1}</div>
              <div className="slide-subtitle mt-4 text-[38px]">{t}</div>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-6 p-10">
              <div>
                <div className="slide-caption font-bold text-primary">o que foi feito</div>
                <p className="slide-body mt-2">{o}</p>
              </div>
              <div>
                <div className="slide-caption font-bold text-primary">resultado</div>
                <p className="slide-body mt-2 font-bold">{r}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

/* 6 — Conexões curso × estágio */
function S6() {
  const c = [
    ["Marketing", "Pesquisa de satisfação e NPS para entender a percepção dos clientes e fortalecer o relacionamento."],
    ["Estatística e Métodos Quantitativos", "Classificação em promotores, neutros e detratores e cálculo do NPS."],
    ["Gestão de Projetos", "Cronograma de 48h, etapas, prazos e plano de ação com responsáveis e indicadores."],
  ];
  return (
    <SlideLayout n={6} title="o curso na prática">
      <div className="flex h-full flex-col gap-6">
        {c.map(([d, a], i) => (
          <div key={d} className="flex flex-1 items-center gap-12 rounded-md bg-card px-12">
            <div className="text-[88px] font-black leading-none text-primary">0{i + 1}</div>
            <div className="w-[640px] slide-subtitle text-[40px]">{d}</div>
            <p className="slide-body flex-1">{a}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

/* 7 — Aprendizados */
function S7() {
  return (
    <SlideLayout n={7} title="aprendizados">
      <div className="grid h-full grid-cols-2 gap-10">
        <Card label="técnicos">
          <ul className="slide-body-lg flex flex-col gap-5">
            <li><span className="brand-dot">· </span>metodologia NPS</li>
            <li><span className="brand-dot">· </span>elaboração de questionários e escalas</li>
            <li><span className="brand-dot">· </span>análise qualitativa de dados</li>
            <li><span className="brand-dot">· </span>planos de ação e indicadores</li>
          </ul>
        </Card>
        <Card label="comportamentais" dark>
          <ul className="slide-body-lg flex flex-col gap-5">
            <li><span className="brand-dot">· </span>escuta ativa e imparcialidade</li>
            <li><span className="brand-dot">· </span>comunicação com clientes e equipe</li>
            <li><span className="brand-dot">· </span>organização e gestão de prazos</li>
            <li><span className="brand-dot">· </span>autonomia na tomada de decisão</li>
          </ul>
        </Card>
      </div>
    </SlideLayout>
  );
}

/* 8 — Reflexão final */
function S8() {
  return (
    <SlideLayout n={8} title="reflexão final">
      <div className="grid h-full grid-cols-[1.3fr_1fr] gap-16">
        <div className="flex flex-col justify-center gap-10">
          <p className="slide-body-lg">
            A pesquisa não termina na coleta: o valor está em <b className="font-bold">transformar percepções dos clientes em decisões práticas</b>.
          </p>
          <p className="slide-body text-muted-foreground">
            A experiência reforçou planejamento, organização e análise crítica como competências centrais do administrador.
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-md bg-ink p-12 text-ink-foreground">
          <div className="slide-kicker text-primary">avaliação do supervisor</div>
          <p className="slide-subtitle mt-6 text-[40px]">
            “supera as exigências do mercado de trabalho”
          </p>
          <p className="slide-caption mt-6">Ótimo em 8 de 10 itens avaliados.</p>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 9 — Encerramento */
function S9() {
  return (
    <div className="slide-content flex flex-col justify-between bg-ink p-[120px] text-ink-foreground">
      <div className="slide-kicker text-primary">/como esta experiência contribuiu para minha formação?</div>
      <p className="slide-title max-w-[1500px] text-[72px]">
        <span className="brand-slash">/</span>o estágio transformou conhecimentos acadêmicos em experiências concretas
        <span className="brand-dot">.</span>
      </p>
      <div className="flex items-end justify-between">
        <div>
          <div className="slide-title-lg">obrigado<span className="brand-dot">.</span></div>
          <div className="slide-body mt-4">Richard de Campos Leal</div>
        </div>
        <div className="flex items-center gap-8 rounded-md bg-background p-6">
          <img src={logoHorizontal.url} alt="estudio.comunique" className="h-[48px]" />
          <img src={seloAmf.url} alt="Administração AMF" className="h-[110px] w-[110px] rounded-full" />
        </div>
      </div>
    </div>
  );
}

export const slides = [
  { title: "identificação", C: S1 },
  { title: "conhecendo a empresa", C: S2 },
  { title: "área de atuação", C: S3 },
  { title: "principais atividades", C: S4 },
  { title: "entregas e contribuições", C: S5 },
  { title: "o curso na prática", C: S6 },
  { title: "aprendizados", C: S7 },
  { title: "reflexão final", C: S8 },
  { title: "encerramento", C: S9 },
];
