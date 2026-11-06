import type { ReactNode } from "react";
import logoPrincipal from "@/assets/comunique_logo_principal.jpg.asset.json";
import logoHorizontal from "@/assets/comunique_logo_horizontal.jpg.asset.json";
import seloAmf from "@/assets/amf_administracao_selo.jpg.asset.json";
import questionarioTopo from "@/assets/questionario_topo.png.asset.json";
import questionarioPontos from "@/assets/questionario_pontos_fortes.png.asset.json";

const TOTAL = 11;

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
          Richard de Campos Leal <span className="brand-dot">·</span> Estágio Supervisionado em Administração
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
        <div className="slide-kicker text-primary">/Estágio Supervisionado em Administração · 8º semestre</div>
        <div>
          <h1 className="slide-title-lg text-[92px]">
            <span className="brand-slash">/</span>Pesquisa de satisfação
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
    <SlideLayout n={2} title="Conhecendo a empresa">
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
          <Card label="Segmento">
            <div className="slide-body font-bold">Publicidade · Consultoria em comunicação e branding</div>
          </Card>
          <Card label="Trajetória">
            <div className="slide-body font-bold">6 anos · Santa Maria, RS</div>
          </Card>
          <Card label="Serviços" dark>
            <div className="slide-body font-bold">Branding · Posicionamento · Comunicação de marca</div>
          </Card>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 3 — Área de atuação */
function S3() {
  const items = [
    ["Papel", "Conduzir o projeto de pesquisa de satisfação com os clientes do Estúdio."],
    ["Responsabilidades", "Ouvir a equipe, estruturar o questionário, aplicar, acompanhar e analisar as respostas."],
    ["Participação", "Do alinhamento inicial ao plano de ação, com autonomia e validações pontuais com o supervisor."],
  ];
  return (
    <SlideLayout n={3} title="Área de atuação no estágio">
      <div className="flex h-full flex-col justify-center gap-12">
        <p className="slide-subtitle">
          Gestão do relacionamento com clientes<span className="brand-dot">.</span>
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
    ["Alinhamento", "Reuniões para entender a empresa e definir os objetivos da pesquisa."],
    ["Entrevistas internas", "Escuta da equipe sobre clientes, entregas e relacionamento."],
    ["Questionário e indicador", "Perguntas claras e neutras, escala de 1 a 4 e convite aos clientes."],
    ["Coleta e follow-up", "Acompanhamento das respostas e contato com quem não respondeu."],
    ["Análise e insights", "Cálculo do índice de satisfação de 1 a 4, leitura qualitativa e apresentação à equipe."],
  ];
  return (
    <SlideLayout n={4} title="Principais atividades">
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

/* 5 — O questionário */
function S5() {
  return (
    <SlideLayout n={5} title="O questionário">
      <div className="grid h-full grid-cols-[0.9fr_1.4fr] gap-16">
        <div className="flex flex-col justify-center gap-10">
          <p className="slide-subtitle text-[40px]">
            /Diagnóstico de experiência do cliente<span className="brand-dot">.</span>
          </p>
          <p className="slide-body text-muted-foreground">
            Formulário online com a identidade visual do Estúdio, aplicado aos clientes pela base de relacionamento.
          </p>
          <div className="flex flex-col gap-5">
            {[
              "11 perguntas · objetivas e abertas",
              "Escala de satisfação de 1 a 4",
              "Sem identificação · respostas sinceras",
            ].map((t) => (
              <div key={t} className="slide-body flex items-center gap-4 rounded-md bg-card px-8 py-5 font-bold">
                <span className="brand-dot">/</span>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-2 gap-6 min-h-0">
          <div className="overflow-hidden rounded-md border">
            <img src={questionarioTopo.url} alt="Questionário — diagnóstico de experiência do cliente" className="h-full w-full object-cover object-top" />
          </div>
          <div className="overflow-hidden rounded-md border">
            <img src={questionarioPontos.url} alt="Pergunta sobre pontos fortes da Comunique" className="h-full w-full object-cover object-top" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 6 — Entregas e contribuições */
function S6() {
  const c = [
    ["Mapa interno da equipe", "Entrevistas consolidadas por temas recorrentes.", "Base para as hipóteses a validar com os clientes."],
    ["Pesquisa de satisfação", "Questionário com escala de 1 a 4 e mensagem introdutória.", "Média de 3,73 na escala de 1 a 4, com 20 clientes."],
    ["Insights e plano de ação", "Resultados e comentários apresentados à equipe.", "Ações de melhoria definidas e priorizadas."],
  ];
  return (
    <SlideLayout n={6} title="Entregas e contribuições">
      <div className="grid h-full grid-cols-3 gap-8">
        {c.map(([t, o, r], i) => (
          <div key={t} className="flex flex-col overflow-hidden rounded-md bg-card">
            <div className={`p-10 ${i === 1 ? "bg-primary text-primary-foreground" : "bg-ink text-ink-foreground"}`}>
              <div className="slide-kicker opacity-80">Contribuição {i + 1}</div>
              <div className="slide-subtitle mt-4 text-[38px]">{t}</div>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-6 p-10">
              <div>
                <div className="slide-caption font-bold text-primary">O que foi feito</div>
                <p className="slide-body mt-2">{o}</p>
              </div>
              <div>
                <div className="slide-caption font-bold text-primary">Resultado</div>
                <p className="slide-body mt-2 font-bold">{r}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

/* 7 — Resultados da pesquisa */
function S7() {
  const stats = [
    ["3,73", "Média geral na escala de 1 a 4"],
    ["20", "Clientes responderam à pesquisa"],
    ["76%", "Das avaliações com nota máxima (4)"],
  ];
  const dims = [
    ["Confiança na equipe", 3.85],
    ["Atendimento", 3.85],
    ["Parceria estratégica", 3.8],
    ["Qualidade visual", 3.8],
    ["Qualidade dos textos", 3.8],
    ["Essência da marca", 3.75],
    ["Processos", 3.6],
    ["Contribuição aos objetivos", 3.6],
    ["Estratégias", 3.55],
  ];
  const fortes = [
    ["Atenta ao cliente", 14],
    ["Confiável", 14],
    ["Organizada", 14],
    ["Parceira", 13],
    ["Atualizada nas tendências", 12],
    ["Autêntica", 11],
  ];
  return (
    <SlideLayout n={7} title="Resultados da pesquisa">
      <div className="flex h-full flex-col gap-8">
        <div className="grid grid-cols-3 gap-8">
          {stats.map(([v, l], i) => (
            <div key={l} className={`flex items-center gap-6 rounded-md px-8 py-5 ${i === 0 ? "bg-primary text-primary-foreground" : "bg-ink text-ink-foreground"}`}>
              <div className="text-[64px] font-black leading-none">{v}</div>
              <div className="slide-caption">{l}</div>
            </div>
          ))}
        </div>
        <div className="grid flex-1 min-h-0 grid-cols-[1.35fr_1fr] gap-12">
          <div className="flex flex-col justify-center gap-[12px] rounded-md bg-card p-8">
            <div className="slide-kicker text-primary">Média por dimensão · Escala de 1 a 4</div>
            {dims.map(([label, v]) => (
              <div key={label as string} className="flex items-center gap-6">
                <div className="slide-caption w-[330px] shrink-0 font-normal">{label}</div>
                <div className="h-[18px] flex-1 rounded-sm bg-muted">
                  <div className="h-full rounded-sm bg-primary" style={{ width: `${((v as number) / 4) * 100}%` }} />
                </div>
                <div className="slide-caption w-[90px] text-right font-bold">{String((v as number).toFixed(2)).replace(".", ",")}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-md bg-card p-8">
            <div className="slide-kicker text-primary">Pontos fortes mais citados</div>
            {fortes.map(([label, v]) => (
              <div key={label as string} className="flex items-center justify-between border-b pb-3 last:border-0">
                <span className="slide-body">{label}</span>
                <span className="slide-body font-bold text-primary">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 8 — Conexões curso × estágio */
function S8() {
  const c = [
    ["Marketing", "Pesquisa de satisfação para entender a percepção dos clientes e fortalecer o relacionamento."],
    ["Estatística e Métodos Quantitativos", "Indicador próprio em escala de 1 a 4: tabulação, média e distribuição das respostas."],
    ["Gestão de Projetos", "Cronograma de 48h, etapas, prazos e plano de ação com responsáveis e indicadores."],
  ];
  return (
    <SlideLayout n={8} title="O curso na prática">
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

/* 9 — Aprendizados */
function S9() {
  return (
    <SlideLayout n={9} title="Aprendizados">
      <div className="grid h-full grid-cols-2 gap-10">
        <Card label="Técnicos">
          <ul className="slide-body-lg flex flex-col gap-5">
            <li><span className="brand-dot">· </span>Indicador de satisfação de 1 a 4</li>
            <li><span className="brand-dot">· </span>Elaboração de questionários e escalas</li>
            <li><span className="brand-dot">· </span>Análise qualitativa de dados</li>
            <li><span className="brand-dot">· </span>Planos de ação e indicadores</li>
          </ul>
        </Card>
        <Card label="Comportamentais" dark>
          <ul className="slide-body-lg flex flex-col gap-5">
            <li><span className="brand-dot">· </span>Escuta ativa e imparcialidade</li>
            <li><span className="brand-dot">· </span>Comunicação com clientes e equipe</li>
            <li><span className="brand-dot">· </span>Organização e gestão de prazos</li>
            <li><span className="brand-dot">· </span>Autonomia na tomada de decisão</li>
          </ul>
        </Card>
      </div>
    </SlideLayout>
  );
}

/* 10 — Reflexão final */
function S10() {
  return (
    <SlideLayout n={10} title="Reflexão final">
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
          <div className="slide-kicker text-primary">Avaliação do supervisor</div>
          <p className="slide-subtitle mt-6 text-[40px]">
            “Supera as exigências do mercado de trabalho”
          </p>
          <p className="slide-caption mt-6">Ótimo em 8 de 10 itens avaliados.</p>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 11 — Encerramento */
function S11() {
  return (
    <div className="slide-content flex flex-col justify-between bg-ink p-[120px] text-ink-foreground">
      <div className="slide-kicker text-primary">/Como esta experiência contribuiu para minha formação?</div>
      <p className="slide-title max-w-[1500px] text-[72px]">
        <span className="brand-slash">/</span>O estágio transformou conhecimentos acadêmicos em experiências concretas
        <span className="brand-dot">.</span>
      </p>
      <div className="flex items-end justify-between">
        <div>
          <div className="slide-title-lg">Obrigado<span className="brand-dot">.</span></div>
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
  { title: "Identificação", C: S1 },
  { title: "Conhecendo a empresa", C: S2 },
  { title: "Área de atuação", C: S3 },
  { title: "Principais atividades", C: S4 },
  { title: "O questionário", C: S5 },
  { title: "Entregas e contribuições", C: S6 },
  { title: "Resultados da pesquisa", C: S7 },
  { title: "O curso na prática", C: S8 },
  { title: "Aprendizados", C: S9 },
  { title: "Reflexão final", C: S10 },
  { title: "Encerramento", C: S11 },
];
