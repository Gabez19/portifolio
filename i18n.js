// ===================================================================
// i18n.js — tradução PT-BR / EN do portfólio
// Troca o texto de todo elemento com [data-i18n] usando o dicionário
// abaixo. Preferência salva em localStorage.
// ===================================================================

const translations = {
  pt: {
    "meta.title": "Gabriel Zanolla | Portfólio",
    "nav.sobre": "Sobre",
    "nav.projetos": "Projetos",
    "nav.skills": "Skills",
    "nav.curriculo": "Currículo",
    "nav.contato": "Contato",

    "hero.greeting": "Olá, sou",
    "hero.subtitle": "Formando em ADS · Design de Produto · UX/UI · Gestão de Projetos",
    "hero.ctaProjects": "Ver projetos",
    "hero.ctaContact": "Entrar em contato",
    "hero.scroll": "scroll",

    "sobre.label": "// sobre mim",
    "sobre.titleLine1": "Tecnologia como",
    "sobre.titleLine2": "ferramenta de impacto",
    "sobre.p1": "Formando em Análise e Desenvolvimento de Sistemas pela UCB, com experiência prática em liderança de projetos, prototipagem no Figma e desenvolvimento de interfaces.",
    "sobre.p2": "Liderei equipes multidisciplinares em projetos reais com parceiros como <strong>Banco do Brasil</strong> e <strong>Porto Digital</strong>, conduzindo da concepção à apresentação para stakeholders.",
    "sobre.p3": "Tenho interesse na interseção entre tecnologia e experiência do usuário — onde o problema humano encontra a solução digital.",
    "sobre.stat1": "Projetos liderados",
    "sobre.stat2": "Pessoas impactadas",
    "sobre.stat3": "Pessoas no time",
    "sobre.cardTag": "Último semestre",
    "sobre.cardLocation": "Brasília, DF",
    "sobre.cardLanguage": "PT · EN intermediário",
    "sobre.cardRemote": "Aberto a remoto",

    "projetos.label": "// projetos",
    "projetos.title": "O que já construí",

    "projetos.crash.tag": "Projeto Principal · Residência Porto Digital / UCB",
    "projetos.crash.title": "SDK de Monitoramento de Crashes e ANRs",
    "projetos.crash.desc": "SDK em Kotlin para captura automática de crashes e ANRs em aplicativos Android, com coleta de metadados do dispositivo e envio estruturado para análise e diagnóstico de falhas.",
    "projetos.crash.meta1": "100% Kotlin",
    "projetos.crash.meta2": "Persistência local com Room",
    "projetos.crash.meta3": "Captura de crash e ANR",
    "projetos.crash.cta": "Ver no GitHub",

    "projetos.bbmicofin.tag": "Destaque · Porto Digital / UCB",
    "projetos.bbmicofin.desc": "Aplicativo de educação financeira para microempreendedores, desenvolvido em parceria com o Banco do Brasil e Porto Digital. Liderei uma equipe de 6 pessoas, aplicando metodologias ágeis e entregando 100% das demandas no prazo.",
    "projetos.bbmicofin.cta": "Ver no GitHub",

    "projetos.poluimenos.tag": "Porto Digital / UCB",
    "projetos.poluimenos.desc": "Protótipo de app para mapeamento de focos de poluição urbana. Apliquei boas práticas de UX/UI e apresentei para stakeholders estratégicos.",
    "projetos.poluimenos.tech3": "Prototipagem",

    "projetos.quiz.title": "Quiz Lado Sombrio",
    "projetos.quiz.desc": "Site de quiz interativo onde usuários descobrem qual vilão de filmes se assemelha à sua personalidade.",
    "projetos.quiz.cta": "Ver projeto",

    "projetos.idosos.tag": "Voluntário · UCB",
    "projetos.idosos.title": "Informática para Idosos",
    "projetos.idosos.desc": "Ensinei mais de 30 idosos a utilizar ferramentas digitais, adaptando conteúdos para diferentes níveis de conhecimento.",
    "projetos.idosos.tech1": "Educação",
    "projetos.idosos.tech2": "Inclusão digital",

    "skills.label": "// habilidades",
    "skills.title": "Stack & Ferramentas",
    "skills.group1": "Design & Produto",
    "skills.group2": "Desenvolvimento Web",
    "skills.group3": "Mobile & Ferramentas",
    "skills.prototipagem": "Prototipagem",
    "skills.aprendendo": "· aprendendo",

    "curriculo.label": "// currículo",
    "curriculo.title": "Ver Currículo",
    "curriculo.ptDesc": "Versão em PT-BR · .pdf",
    "curriculo.enDesc": "English version · .pdf",

    "contato.label": "// contato",
    "contato.title": "Vamos conversar?",
    "contato.sub": "Estou buscando vagas em UX/UI, Produto ou Desenvolvimento Android. Manda uma mensagem!",
  },

  en: {
    "meta.title": "Gabriel Zanolla | Portfolio",
    "nav.sobre": "About",
    "nav.projetos": "Projects",
    "nav.skills": "Skills",
    "nav.curriculo": "Resume",
    "nav.contato": "Contact",

    "hero.greeting": "Hi, I'm",
    "hero.subtitle": "Graduating Soon in Systems Analysis & Development · Product Design · UX/UI · Project Management",
    "hero.ctaProjects": "View projects",
    "hero.ctaContact": "Get in touch",
    "hero.scroll": "scroll",

    "sobre.label": "// about me",
    "sobre.titleLine1": "Technology as",
    "sobre.titleLine2": "a tool for impact",
    "sobre.p1": "Graduating soon in Systems Analysis and Development from UCB, with hands-on experience leading projects, prototyping in Figma, and building interfaces.",
    "sobre.p2": "I've led multidisciplinary teams on real-world projects with partners like <strong>Banco do Brasil</strong> and <strong>Porto Digital</strong>, working from concept through stakeholder presentations.",
    "sobre.p3": "I'm interested in the intersection of technology and user experience — where human problems meet digital solutions.",
    "sobre.stat1": "Projects led",
    "sobre.stat2": "People impacted",
    "sobre.stat3": "Team members",
    "sobre.cardTag": "Final semester",
    "sobre.cardLocation": "Brasília, Brazil",
    "sobre.cardLanguage": "PT · Intermediate EN",
    "sobre.cardRemote": "Open to remote work",

    "projetos.label": "// projects",
    "projetos.title": "What I've built",

    "projetos.crash.tag": "Flagship Project · Porto Digital Residency / UCB",
    "projetos.crash.title": "Crash & ANR Monitoring SDK",
    "projetos.crash.desc": "A Kotlin SDK that automatically captures crashes and ANRs in Android apps, collecting device metadata and structuring it for failure analysis and diagnostics.",
    "projetos.crash.meta1": "100% Kotlin",
    "projetos.crash.meta2": "Local persistence with Room",
    "projetos.crash.meta3": "Crash & ANR capture",
    "projetos.crash.cta": "View on GitHub",

    "projetos.bbmicofin.tag": "Featured · Porto Digital / UCB",
    "projetos.bbmicofin.desc": "Financial education app for microentrepreneurs, built in partnership with Banco do Brasil and Porto Digital. I led a team of 6, applying agile methodologies and delivering 100% of the scope on time.",
    "projetos.bbmicofin.cta": "View on GitHub",

    "projetos.poluimenos.tag": "Porto Digital / UCB",
    "projetos.poluimenos.desc": "App prototype for mapping urban pollution hotspots. I applied UX/UI best practices and presented it to key stakeholders.",
    "projetos.poluimenos.tech3": "Prototyping",

    "projetos.quiz.title": "Dark Side Quiz",
    "projetos.quiz.desc": "Interactive quiz site where users find out which movie villain matches their personality.",
    "projetos.quiz.cta": "View project",

    "projetos.idosos.tag": "Volunteer · UCB",
    "projetos.idosos.title": "Digital Literacy for Seniors",
    "projetos.idosos.desc": "Taught more than 30 senior citizens to use digital tools, adapting content to different levels of familiarity with technology.",
    "projetos.idosos.tech1": "Education",
    "projetos.idosos.tech2": "Digital inclusion",

    "skills.label": "// skills",
    "skills.title": "Stack & Tools",
    "skills.group1": "Design & Product",
    "skills.group2": "Web Development",
    "skills.group3": "Mobile & Tools",
    "skills.prototipagem": "Prototyping",
    "skills.aprendendo": "· learning",

    "curriculo.label": "// resume",
    "curriculo.title": "View Resume",
    "curriculo.ptDesc": "Portuguese version · .pdf",
    "curriculo.enDesc": "English version · .pdf",

    "contato.label": "// contact",
    "contato.title": "Let's talk?",
    "contato.sub": "I am looking for roles in UX/UI, Product, or Android Development. Send me a message!",
  }
};

const LANG_STORAGE_KEY = "gz-portfolio-lang";

function detectInitialLang() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === "pt" || saved === "en") return saved;
  const browserLang = (navigator.language || "pt").toLowerCase();
  return browserLang.startsWith("pt") ? "pt" : "en";
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.pt;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined) return;
    // Allows simple inline tags like <strong> inside translated strings
    el.innerHTML = value;
  });

  document.documentElement.lang = lang === "pt" ? "pt-br" : "en";

  const labelEl = document.getElementById("langBtnLabel");
  if (labelEl) labelEl.textContent = lang === "pt" ? "EN" : "PT";

  document.title = dict["meta.title"] || document.title;
}

function setLang(lang) {
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyTranslations(lang);
}

function toggleLang() {
  const current = localStorage.getItem(LANG_STORAGE_KEY) || detectInitialLang();
  const next = current === "pt" ? "en" : "pt";
  setLang(next);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(detectInitialLang());

  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.addEventListener("click", toggleLang);
});