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
          Richard De Campos Leal <span className="brand-dot">·</span> Estágio Supervisionado Em Administração
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
        <div className="slide-kicker text-primary">/Estágio Supervisionado Em Administração · 8º Semestre</div>
        <div>
          <h1 className="slide-title-lg text-[92px]">
            <span className="brand-slash">/</span>Pesquisa De Satisfação
          </h1>
          <p className="slide-subtitle mt-8 font-normal">Relato De Experiência No Estúdio Comunique</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          {[
            ["Estagiário", "Richard De Campos Leal"],
            ["Empresa", "Estúdio Comunique LTDA"],
            ["Área", "Gestão · Relacionamento Com Clientes"],
            ["Período", "25/08 A 20/10/2026 · 48h"],
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
            Bacharelado Em Administração
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
    <SlideLayout n={2} title="Conhecendo A Empresa">
      <div className="grid h-full grid-cols-[1.25fr_1fr] gap-16">
        <div className="flex flex-col justify-center gap-10">
          <p className="slide-body-lg">
            Estúdio De <b className="font-bold">Branding E Posicionamento Estratégico</b> Que Atua Como Consultoria,
            Ajudando Negócios A Descobrirem Sua Essência E Se Comunicarem De Forma Autêntica.
          </p>
          <p className="slide-body text-muted-foreground">
            Afasta-Se Do Modelo De Agência Tradicional: O Foco É Construir, Diferenciar E Valorizar Marcas Reais.
          </p>
        </div>
        <div className="grid grid-rows-3 gap-6">
          <Card label="Segmento">
            <div className="slide-body font-bold">Publicidade · Consultoria Em Comunicação E Branding</div>
          </Card>
          <Card label="Trajetória">
            <div className="slide-body font-bold">6 Anos · Santa Maria, RS</div>
          </Card>
          <Card label="Serviços" dark>
            <div className="slide-body font-bold">Branding · Posicionamento · Comunicação De Marca</div>
          </Card>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 3 — Área de atuação */
function S3() {
  const items = [
    ["Papel", "Conduzir O Projeto De Pesquisa De Satisfação Com Os Clientes Do Estúdio."],
    ["Responsabilidades", "Ouvir A Equipe, Estruturar O Questionário, Aplicar, Acompanhar E Analisar As Respostas."],
    ["Participação", "Do Alinhamento Inicial Ao Plano De Ação, Com Autonomia E Validações Pontuais Com O Supervisor."],
  ];
  return (
    <SlideLayout n={3} title="Área De Atuação No Estágio">
      <div className="flex h-full flex-col justify-center gap-12">
        <p className="slide-subtitle">
          Gestão Do Relacionamento Com Clientes<span className="brand-dot">.</span>
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
    ["Alinhamento", "Reuniões Para Entender A Empresa E Definir Os Objetivos Da Pesquisa."],
    ["Entrevistas Internas", "Escuta Da Equipe Sobre Clientes, Entregas E Relacionamento."],
    ["Questionário E Indicador", "Perguntas Claras E Neutras, Escala De 1 A 4 E Convite Aos Clientes."],
    ["Coleta E Follow-Up", "Acompanhamento Das Respostas E Contato Com Quem Não Respondeu."],
    ["Análise E Insights", "Cálculo Do Índice De Satisfação De 1 A 4, Leitura Qualitativa E Apresentação À Equipe."],
  ];
  return (
    <SlideLayout n={4} title="Principais Atividades">
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
    <SlideLayout n={5} title="O Questionário">
      <div className="grid h-full grid-cols-[0.9fr_1.4fr] gap-16">
        <div className="flex flex-col justify-center gap-10">
          <p className="slide-subtitle text-[40px]">
            /Diagnóstico De Experiência Do Cliente<span className="brand-dot">.</span>
          </p>
          <p className="slide-body text-muted-foreground">
            Formulário Online Com Identidade Visual Do Estúdio, Aplicado Aos Clientes Pela Base De Relacionamento.
          </p>
          <div className="flex flex-col gap-5">
            {[
              "11 Perguntas · Objetivas E Abertas",
              "Escala De Satisfação De 1 A 4",
              "Sem Identificação · Respostas Sinceras",
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
            <img src={questionarioTopo.url} alt="Questionário — Diagnóstico De Experiência Do Cliente" className="h-full w-full object-cover object-top" />
          </div>
          <div className="overflow-hidden rounded-md border">
            <img src={questionarioPontos.url} alt="Pergunta Sobre Pontos Fortes Da Comunique" className="h-full w-full object-cover object-top" />
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 6 — Entregas e contribuições */
function S6() {
  const c = [
    ["Mapa Interno Da Equipe", "Entrevistas Consolidadas Por Temas Recorrentes.", "Base Para As Hipóteses A Validar Com Os Clientes."],
    ["Pesquisa De Satisfação", "Questionário Com Escala De 1 A 4 E Mensagem Introdutória.", "Média De 3,73 Na Escala De 1 A 4, Com 20 Clientes."],
    ["Insights E Plano De Ação", "Resultados E Comentários Apresentados À Equipe.", "Ações De Melhoria Definidas E Priorizadas."],
  ];
  return (
    <SlideLayout n={6} title="Entregas E Contribuições">
      <div className="grid h-full grid-cols-3 gap-8">
        {c.map(([t, o, r], i) => (
          <div key={t} className="flex flex-col overflow-hidden rounded-md bg-card">
            <div className={`p-10 ${i === 1 ? "bg-primary text-primary-foreground" : "bg-ink text-ink-foreground"}`}>
              <div className="slide-kicker opacity-80">Contribuição {i + 1}</div>
              <div className="slide-subtitle mt-4 text-[38px]">{t}</div>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-6 p-10">
              <div>
                <div className="slide-caption font-bold text-primary">O Que Foi Feito</div>
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
    ["3,73", "Média Geral Na Escala De 1 A 4"],
    ["20", "Clientes Responderam À Pesquisa"],
    ["76%", "Das Avaliações Com Nota Máxima (4)"],
  ];
  const dims = [
    ["Confiança Na Equipe", 3.85],
    ["Atendimento", 3.85],
    ["Parceria Estratégica", 3.8],
    ["Qualidade Visual", 3.8],
    ["Qualidade Dos Textos", 3.8],
    ["Essência Da Marca", 3.75],
    ["Processos", 3.6],
    ["Contribuição Aos Objetivos", 3.6],
    ["Estratégias", 3.55],
  ];
  const fortes = [
    ["Atenta Ao Cliente", 14],
    ["Confiável", 14],
    ["Organizada", 14],
    ["Parceira", 13],
    ["Atualizada Nas Tendências", 12],
    ["Autêntica", 11],
  ];
  return (
    <SlideLayout n={7} title="Resultados Da Pesquisa">
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
            <div className="slide-kicker text-primary">Média Por Dimensão · Escala De 1 A 4</div>
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
            <div className="slide-kicker text-primary">Pontos Fortes Mais Citados</div>
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
    ["Marketing", "Pesquisa De Satisfação Para Entender A Percepção Dos Clientes E Fortalecer O Relacionamento."],
    ["Estatística E Métodos Quantitativos", "Indicador Próprio Em Escala De 1 A 4: Tabulação, Média E Distribuição Das Respostas."],
    ["Gestão De Projetos", "Cronograma De 48h, Etapas, Prazos E Plano De Ação Com Responsáveis E Indicadores."],
  ];
  return (
    <SlideLayout n={8} title="O Curso Na Prática">
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
            <li><span className="brand-dot">· </span>Indicador De Satisfação De 1 A 4</li>
            <li><span className="brand-dot">· </span>Elaboração De Questionários E Escalas</li>
            <li><span className="brand-dot">· </span>Análise Qualitativa De Dados</li>
            <li><span className="brand-dot">· </span>Planos De Ação E Indicadores</li>
          </ul>
        </Card>
        <Card label="Comportamentais" dark>
          <ul className="slide-body-lg flex flex-col gap-5">
            <li><span className="brand-dot">· </span>Escuta Ativa E Imparcialidade</li>
            <li><span className="brand-dot">· </span>Comunicação Com Clientes E Equipe</li>
            <li><span className="brand-dot">· </span>Organização E Gestão De Prazos</li>
            <li><span className="brand-dot">· </span>Autonomia Na Tomada De Decisão</li>
          </ul>
        </Card>
      </div>
    </SlideLayout>
  );
}

/* 10 — Reflexão final */
function S10() {
  return (
    <SlideLayout n={10} title="Reflexão Final">
      <div className="grid h-full grid-cols-[1.3fr_1fr] gap-16">
        <div className="flex flex-col justify-center gap-10">
          <p className="slide-body-lg">
            A Pesquisa Não Termina Na Coleta: O Valor Está Em <b className="font-bold">Transformar Percepções Dos Clientes Em Decisões Práticas</b>.
          </p>
          <p className="slide-body text-muted-foreground">
            A Experiência Reforçou Planejamento, Organização E Análise Crítica Como Competências Centrais Do Administrador.
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-md bg-ink p-12 text-ink-foreground">
          <div className="slide-kicker text-primary">Avaliação Do Supervisor</div>
          <p className="slide-subtitle mt-6 text-[40px]">
            “Supera As Exigências Do Mercado De Trabalho”
          </p>
          <p className="slide-caption mt-6">Ótimo Em 8 De 10 Itens Avaliados.</p>
        </div>
      </div>
    </SlideLayout>
  );
}

/* 11 — Encerramento */
function S11() {
  return (
    <div className="slide-content flex flex-col justify-between bg-ink p-[120px] text-ink-foreground">
      <div className="slide-kicker text-primary">/Como Esta Experiência Contribuiu Para Minha Formação?</div>
      <p className="slide-title max-w-[1500px] text-[72px]">
        <span className="brand-slash">/</span>O Estágio Transformou Conhecimentos Acadêmicos Em Experiências Concretas
        <span className="brand-dot">.</span>
      </p>
      <div className="flex items-end justify-between">
        <div>
          <div className="slide-title-lg">Obrigado<span className="brand-dot">.</span></div>
          <div className="slide-body mt-4">Richard De Campos Leal</div>
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
  { title: "Conhecendo A Empresa", C: S2 },
  { title: "Área De Atuação", C: S3 },
  { title: "Principais Atividades", C: S4 },
  { title: "O Questionário", C: S5 },
  { title: "Entregas E Contribuições", C: S6 },
  { title: "Resultados Da Pesquisa", C: S7 },
  { title: "O Curso Na Prática", C: S8 },
  { title: "Aprendizados", C: S9 },
  { title: "Reflexão Final", C: S10 },
  { title: "Encerramento", C: S11 },
];
