const defaultSite = {
  businessName: "Ramirez Landscaping",
  shortLine: "Landscape & yard cleanup",
  serviceArea: "Serving Lathrop",
  tagline: "Yard cleanup, trimming, fence work, repairs, and hauling for clean outdoor spaces.",
  estimateLine: "Call or text to schedule a walk-through.",
  contactIntro:
    "Call or text for yard cleanup, trimming, fence repair, fence cleaning, fence painting, new fence installation, gutter cleaning, trash removal, and weed removal.",
  phone: "209-420-5721",
  phoneDisplay: "209-420-5721",
  email: "Tommy_09@live.com.mx",
  hours: "Call or text for availability",
  footerLine:
    "Tree trimming, bush trimming, fence repair, fence cleaning, fence painting, new fence installation, trash removal, yard cleaning, gutter cleaning, and weed removal.",
  heroImage: "assets/uploads/hero-lawn-trimming.jpg",
  services: [
    {
      title: "Tree trimming",
      description: "Trim back branches, open up walkways, and keep trees away from fences and structures."
    },
    {
      title: "Bush and hedge trimming",
      description: "Shape front-yard and backyard bushes so entrances, windows, and paths look clean."
    },
    {
      title: "Fence repair and installation",
      description: "Repair loose boards, clean or paint fences, and install new fence sections when needed."
    },
    {
      title: "Trash removal",
      description: "Remove yard debris, unwanted outdoor items, and cleanup waste after a job."
    },
    {
      title: "General yard cleaning",
      description: "Clean up overgrowth, fallen leaves, cluttered corners, and neglected outdoor areas."
    },
    {
      title: "Gutter cleaning",
      description: "Clear gutters and downspouts so rainwater can move away from the home."
    },
    {
      title: "Weed removal",
      description: "Pull and clear weeds from garden beds, fence lines, walkways, and yard edges."
    }
  ]
};

const defaultGallery = {
  items: [
    {
      title: "Front yard bush trimming",
      location: "Lathrop",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=78",
      alt: "Trimmed front yard landscaping with shrubs and plants",
      description: "Front yard bush trimming work can be featured here when photos are ready."
    },
    {
      title: "Backyard cleanup",
      location: "Lathrop",
      image:
        "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=78",
      alt: "Clean backyard garden area with tools and plants",
      description: "Use this space for weed removal, cleanup, and haul-away jobs."
    },
    {
      title: "Fence repair",
      location: "Lathrop",
      image: "assets/uploads/fence-repair-example.jpg",
      alt: "Repaired wooden backyard fence with fresh replacement boards",
      description: "Loose boards and damaged sections repaired for a cleaner, safer fence line."
    },
    {
      title: "Fence painting and staining",
      location: "Lathrop",
      image: "assets/uploads/fence-painting-staining-example.jpg",
      alt: "Freshly painted or stained wooden backyard fence",
      description: "Fresh paint or stain helps protect wood and gives the yard a clean finished look."
    },
    {
      title: "New fence installation",
      location: "Lathrop",
      image: "assets/uploads/new-fence-installation-example.jpg",
      alt: "Newly installed wooden privacy fence in a backyard",
      description: "New fence panels installed with straight posts, clean lines, and a tidy finish."
    },
    {
      title: "Fence and yard detail",
      location: "Lathrop",
      image:
        "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=78",
      alt: "Clean yard near a wood fence",
      description: "Fence repair and yard cleanup photos can be added here as more work is photographed."
    },
    {
      title: "Gutter cleaning before and after",
      location: "Lathrop",
      image: "assets/uploads/gutter-cleaning-before-after.jpg",
      alt: "Before and after view of a rain gutter with leaves removed from one section",
      description: "A clear look at gutter debris removal and a freshly cleaned section."
    }
  ]
};

const staticCopy = {
  en: {
    title: "Ramirez Landscaping | Lathrop Yard Cleaning, Fence Work, Trimming",
    description:
      "Ramirez Landscaping helps Lathrop homeowners with tree trimming, bush trimming, fence repair, fence cleaning, fence painting, new fence installation, trash removal, yard cleaning, gutter cleaning, and weed removal.",
    ogDescription: "Lathrop landscaping, fence work, trimming, repairs, and cleanup services.",
    languageLabel: "Language",
    skipLink: "Skip to content",
    navServices: "Services",
    navPastWork: "Gallery",
    navProcess: "How It Works",
    navContact: "Contact",
    callText: "Call / Text",
    viewPastWork: "View Gallery",
    quickFreeTitle: "Free estimates",
    quickCleanTitle: "Clean finish",
    quickCleanText: "Trimming, weed removal, cleanup, and haul-away.",
    quickFlexibleTitle: "Flexible jobs",
    quickFlexibleText: "One-time projects, seasonal cleanups, and small repairs.",
    servicesEyebrow: "Services",
    servicesTitle: "Outdoor work handled cleanly",
    servicesIntro:
      "From overgrown bushes to fence repair, painting, installation, and trash removal, Ramirez Landscaping keeps yards manageable and ready to use.",
    workEyebrow: "Gallery",
    workTitle: "Project examples and past work",
    workIntro:
      "This section can show Ramirez project photos as they become available, along with service examples for fence work, cleanup, trimming, and repairs.",
    processEyebrow: "How It Works",
    processTitle: "Simple scheduling, tidy results",
    processIntro:
      "A straightforward flow makes it easy for homeowners to understand the job, agree on the work, and get the yard cleaned up.",
    processOneTitle: "Request an estimate",
    processOneText: "Send the address, a few details, and photos if helpful.",
    processTwoTitle: "Walk the yard",
    processTwoText: "Confirm trimming, cleanup, repair, or removal needs.",
    processThreeTitle: "Complete the work",
    processThreeText: "Trim, repair, remove weeds, clean gutters, or haul trash.",
    processFourTitle: "Leave it clean",
    processFourText: "Finish with a tidy work area and clear before-and-after results.",
    contactEyebrow: "Contact",
    sendText: "Send Text",
    emailAction: "Email",
    phoneLabel: "Phone",
    emailLabel: "Email",
    serviceAreaLabel: "Service area",
    hoursLabel: "Hours"
  },
  es: {
    title: "Ramirez Landscaping | Limpieza, cercas y poda en Lathrop",
    description:
      "Ramirez Landscaping ayuda a dueños de casa en Lathrop con poda de árboles, poda de arbustos, reparación de cercas, limpieza de cercas, pintura de cercas, instalación de cercas nuevas, retiro de basura, limpieza de yardas, limpieza de canaletas y retiro de maleza.",
    ogDescription: "Paisajismo, cercas, poda, reparaciones y limpieza en Lathrop.",
    languageLabel: "Idioma",
    skipLink: "Saltar al contenido",
    navServices: "Servicios",
    navPastWork: "Galería",
    navProcess: "Proceso",
    navContact: "Contacto",
    callText: "Llamar / Texto",
    viewPastWork: "Ver galería",
    quickFreeTitle: "Estimados gratis",
    quickCleanTitle: "Trabajo limpio",
    quickCleanText: "Poda, retiro de maleza, limpieza y retiro de desechos.",
    quickFlexibleTitle: "Trabajos flexibles",
    quickFlexibleText: "Proyectos de una vez, limpiezas por temporada y reparaciones pequeñas.",
    servicesEyebrow: "Servicios",
    servicesTitle: "Trabajo exterior bien hecho",
    servicesIntro:
      "Desde arbustos crecidos hasta reparación, pintura e instalación de cercas y retiro de basura, Ramirez Landscaping mantiene las yardas limpias y listas para usar.",
    workEyebrow: "Galería",
    workTitle: "Ejemplos de trabajo y proyectos",
    workIntro:
      "Esta sección puede mostrar fotos reales de Ramirez cuando estén disponibles, junto con ejemplos de servicios de cercas, limpieza, poda y reparaciones.",
    processEyebrow: "Cómo funciona",
    processTitle: "Agenda fácil, resultados limpios",
    processIntro:
      "Un proceso sencillo ayuda a confirmar el trabajo, acordar los detalles y dejar la yarda limpia.",
    processOneTitle: "Pida un estimado",
    processOneText: "Envíe la dirección, algunos detalles y fotos si ayudan.",
    processTwoTitle: "Revisar la yarda",
    processTwoText: "Confirmar poda, limpieza, reparación o retiro necesario.",
    processThreeTitle: "Completar el trabajo",
    processThreeText: "Podar, reparar, retirar maleza, limpiar canaletas o retirar basura.",
    processFourTitle: "Dejar todo limpio",
    processFourText: "Terminar con el área ordenada y resultados claros.",
    contactEyebrow: "Contacto",
    sendText: "Enviar texto",
    emailAction: "Correo",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    serviceAreaLabel: "Zona de servicio",
    hoursLabel: "Horario"
  }
};

const spanishSiteText = {
  shortLine: "Paisajismo y limpieza de yardas",
  serviceArea: "Sirviendo a Lathrop",
  tagline: "Limpieza de yardas, poda, cercas, reparaciones y retiro para espacios exteriores limpios.",
  estimateLine: "Llame o envíe texto para programar una visita.",
  contactIntro:
    "Llame o envíe texto para limpieza de yardas, poda, reparación de cercas, limpieza de cercas, pintura de cercas, instalación de cercas nuevas, limpieza de canaletas, retiro de basura y retiro de maleza.",
  hours: "Llame o envíe texto para disponibilidad",
  footerLine:
    "Poda de árboles, poda de arbustos, reparación de cercas, limpieza de cercas, pintura de cercas, instalación de cercas nuevas, retiro de basura, limpieza general de yardas, limpieza de canaletas y retiro de maleza.",
  services: [
    {
      title: "Poda de árboles",
      description: "Recorte de ramas, apertura de caminos y mantenimiento alrededor de cercas y estructuras."
    },
    {
      title: "Poda de arbustos y setos",
      description: "Dar forma a arbustos del frente y patio para que entradas, ventanas y caminos se vean limpios."
    },
    {
      title: "Reparación e instalación de cercas",
      description: "Reparar tablas sueltas, limpiar o pintar cercas e instalar secciones nuevas cuando sea necesario."
    },
    {
      title: "Retiro de basura",
      description: "Retiro de desechos de la yarda, artículos exteriores no deseados y basura después del trabajo."
    },
    {
      title: "Limpieza general de yardas",
      description: "Limpieza de áreas crecidas, hojas caídas, esquinas descuidadas y espacios exteriores."
    },
    {
      title: "Limpieza de canaletas",
      description: "Limpieza de canaletas y bajantes para que el agua de lluvia pueda fluir lejos de la casa."
    },
    {
      title: "Retiro de maleza",
      description: "Retiro de maleza en jardineras, líneas de cerca, caminos y orillas de la yarda."
    }
  ]
};

const spanishGalleryText = [
  {
    title: "Poda de arbustos en frente",
    alt: "Paisajismo del frente con arbustos y plantas recortadas",
    description: "Espacio para mostrar una foto real de poda en la yarda de enfrente."
  },
  {
    title: "Limpieza de patio trasero",
    alt: "Área de jardín limpia en un patio trasero",
    description: "Espacio para trabajos de retiro de maleza, limpieza y retiro de desechos."
  },
  {
    title: "Reparación de cerca",
    alt: "Cerca de madera reparada con tablas nuevas",
    description: "Tablas sueltas y secciones dañadas reparadas para una cerca más limpia y segura."
  },
  {
    title: "Pintura y tinte de cercas",
    alt: "Cerca de madera recién pintada o teñida",
    description: "Pintura o tinte fresco ayuda a proteger la madera y deja un acabado limpio."
  },
  {
    title: "Instalación de cerca nueva",
    alt: "Cerca nueva de madera instalada en un patio",
    description: "Paneles nuevos instalados con postes rectos, líneas limpias y un acabado ordenado."
  },
  {
    title: "Detalle de cerca y yarda",
    alt: "Yarda limpia junto a una cerca de madera",
    description: "Espacio para fotos de reparaciones y limpiezas terminadas."
  },
  {
    title: "Limpieza de canaletas antes y después",
    alt: "Vista de antes y después de una canaleta con hojas retiradas",
    description: "Una vista clara del retiro de desechos y una sección limpia de la canaleta."
  }
];

let loadedSite = defaultSite;
let loadedGallery = defaultGallery;
let currentLanguage = getInitialLanguage();

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) {
      return fallback;
    }
    return await response.json();
  } catch {
    return fallback;
  }
}

function getInitialLanguage() {
  try {
    const params = new URLSearchParams(window.location.search);
    const requestedLanguage = params.get("lang");

    if (requestedLanguage === "es" || requestedLanguage === "en") {
      return requestedLanguage;
    }
  } catch {
    // Fall back to saved preference when URL parsing is unavailable.
  }

  try {
    return localStorage.getItem("ramirez-language") === "es" ? "es" : "en";
  } catch {
    return "en";
  }
}

function rememberLanguage(language) {
  try {
    localStorage.setItem("ramirez-language", language);
  } catch {
    // Ignore storage restrictions in file previews or private browsing.
  }

  try {
    const url = new URL(window.location.href);

    if (language === "es") {
      url.searchParams.set("lang", "es");
    } else {
      url.searchParams.delete("lang");
    }

    window.history.replaceState({}, "", url);
  } catch {
    // Some preview contexts do not allow URL updates.
  }
}

function getLocalizedSite(site, language) {
  const mergedSite = { ...defaultSite, ...site };

  if (language !== "es") {
    return mergedSite;
  }

  return {
    ...mergedSite,
    ...spanishSiteText,
    services: spanishSiteText.services
  };
}

function getLocalizedGallery(gallery, language) {
  const items = gallery.items || defaultGallery.items;

  if (language !== "es") {
    return { items };
  }

  return {
    items: items.map((item, index) => ({
      ...item,
      ...(spanishGalleryText[index] || {})
    }))
  };
}

function applyStaticCopy(language) {
  const copy = staticCopy[language] || staticCopy.en;
  document.documentElement.lang = language;
  document.title = copy.title;

  const description = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const languageToggle = document.querySelector(".language-toggle");

  if (description) {
    description.setAttribute("content", copy.description);
  }

  if (ogDescription) {
    ogDescription.setAttribute("content", copy.ogDescription);
  }

  if (languageToggle) {
    languageToggle.setAttribute("aria-label", copy.languageLabel);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });
}

function updateLanguageControls(language) {
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderPage() {
  const site = getLocalizedSite(loadedSite, currentLanguage);
  const gallery = getLocalizedGallery(loadedGallery, currentLanguage);

  applyStaticCopy(currentLanguage);

  Object.entries(site).forEach(([key, value]) => {
    if (key !== "services") {
      setField(key, value);
    }
  });

  renderServices(site.services || defaultSite.services);
  renderGallery(gallery.items || defaultGallery.items);
  wireContactLinks(site);
  updateLanguageControls(currentLanguage);
}

function normalizePhone(phone) {
  const raw = String(phone || "").trim();
  const digits = raw.replace(/\D/g, "");

  if (digits.length < 7) {
    return "";
  }

  if (raw.startsWith("+")) {
    return `+${digits}`;
  }

  if (digits.length === 10) {
    return `+1${digits}`;
  }

  return `+${digits}`;
}

function setField(name, value) {
  if (value === undefined || value === null || value === "") {
    return;
  }

  document.querySelectorAll(`[data-site-field="${name}"]`).forEach((element) => {
    if (element.tagName === "IMG") {
      element.src = value;
      return;
    }
    element.textContent = value;
  });
}

function renderServices(services) {
  const serviceGrid = document.querySelector("[data-services]");
  if (!serviceGrid) {
    return;
  }

  serviceGrid.innerHTML = services
    .map(
      (service, index) => `
        <article class="service-card">
          <span class="service-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </article>
      `
    )
    .join("");
}

function renderGallery(items) {
  const galleryGrid = document.querySelector("[data-gallery]");
  if (!galleryGrid) {
    return;
  }

  galleryGrid.innerHTML = items
    .map(
      (item) => `
        <article class="gallery-card">
          <img src="${item.image}" alt="${item.alt || item.title}" loading="lazy">
          <div>
            <p class="location">${item.location || "Past work"}</p>
            <h3>${item.title}</h3>
            <p>${item.description || ""}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function wireContactLinks(site) {
  const phoneHref = normalizePhone(site.phone);
  const phoneLinks = document.querySelectorAll(".js-phone-link");
  const smsLinks = document.querySelectorAll(".js-sms-link");
  const emailLinks = document.querySelectorAll(".js-email-link");

  phoneLinks.forEach((link) => {
    link.href = phoneHref ? `tel:${phoneHref}` : "#contact";
  });

  smsLinks.forEach((link) => {
    link.href = phoneHref ? `sms:${phoneHref}` : "#contact";
  });

  emailLinks.forEach((link) => {
    link.href = site.email ? `mailto:${site.email}` : "#contact";
  });
}

function wireMenu() {
  const button = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#site-menu");
  if (!button || !menu) {
    return;
  }

  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("is-open", !open);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    });
  });
}

function wireLanguageToggle() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language === "es" ? "es" : "en";

      if (currentLanguage === language) {
        return;
      }

      currentLanguage = language;
      rememberLanguage(currentLanguage);
      renderPage();
    });
  });
}

async function init() {
  const [site, gallery] = await Promise.all([
    loadJson("content/site.json", defaultSite),
    loadJson("content/gallery.json", defaultGallery)
  ]);

  loadedSite = { ...defaultSite, ...site };
  loadedGallery = gallery;
  wireMenu();
  wireLanguageToggle();
  renderPage();
}

init();
