const defaultSite = {
  businessName: "Ramirez Landscaping",
  shortLine: "Landscape & yard cleanup",
  serviceArea: "Serving Lathrop",
  tagline: "Yard cleanup, trimming, repairs, and hauling for clean outdoor spaces.",
  estimateLine: "Call or text to schedule a walk-through.",
  contactIntro:
    "Call or text for yard cleanup, trimming, fence repairs, gutter cleaning, trash removal, and weed removal.",
  phone: "209-420-5721",
  phoneDisplay: "209-420-5721",
  email: "Tommy_09@live.com.mx",
  hours: "Call or text for availability",
  footerLine:
    "Tree trimming, bush trimming, fence repairs, trash removal, yard cleaning, gutter cleaning, and weed removal.",
  heroImage: "/assets/uploads/hero-lawn-trimming.jpg",
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
      title: "Fence repairs",
      description: "Handle small fence fixes, loose boards, leaning sections, and basic repair needs."
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
      description: "Replace this sample with a real front yard trimming photo."
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
      title: "Fence and yard detail",
      location: "Lathrop",
      image:
        "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=78",
      alt: "Clean yard near a wood fence",
      description: "Add real repair and cleanup photos after the first projects are ready."
    }
  ]
};

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

async function init() {
  const [site, gallery] = await Promise.all([
    loadJson("content/site.json", defaultSite),
    loadJson("content/gallery.json", defaultGallery)
  ]);

  Object.entries({ ...defaultSite, ...site }).forEach(([key, value]) => {
    if (key !== "services") {
      setField(key, value);
    }
  });

  renderServices(site.services || defaultSite.services);
  renderGallery(gallery.items || defaultGallery.items);
  wireContactLinks(site);
  wireMenu();
}

init();
