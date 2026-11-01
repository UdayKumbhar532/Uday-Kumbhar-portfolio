/* =====================================================
   PORTFOLIO DATA — EDIT YOUR INFORMATION HERE
   =====================================================
   All personal data is centralized below. Update these
   objects/arrays to personalize your portfolio.
   ===================================================== */

// ── PERSONAL INFO ──
// Update these with your actual details
const PERSONAL = {
  name: "Uday Kumbhar",
  initials: "UK",
  title: "AI Enthusiast",
  greeting: "HELLO, WORLD! I'M",
  headline: "Final-Year Computer Science Engineering Student",
  supportingHeadline: "Exploring AI. Building Intelligent Solutions. Turning Ideas Into Reality.",
  heroDescription: "I'm a final-year B.Tech Computer Science Engineering student with a strong interest in Artificial Intelligence, Generative AI, and modern software development. I enjoy exploring emerging technologies, experimenting with AI-powered tools, and building practical projects that solve real-world problems. I'm continuously learning, creating, and preparing to turn my technical knowledge into meaningful solutions.",
  email: "udayraje.1981@gmail.com",
  phone: "+91-9182902854",
  location: "Hyderabad, Telangana, India",
  resumePath: "assets/resume/my-resume.pdf",
  profileImage: "assets/images/profile-hero.png",
  github: "https://github.com/udaykumbhar",
  linkedin: "https://linkedin.com/in/uday-kumbhar-b485a2361",
  twitter: null,
  instagram: null,
};

// ── ABOUT SECTION ──
const ABOUT = {
  title: "About Me",
  description: `I am a final-year B.Tech Computer Science and Engineering student at Bhaskar Engineering College with a strong foundation in Python, Java, C, web development, Object-Oriented Programming, Data Structures, and Database Management Systems. I am deeply interested in building practical software solutions across web development and Artificial Intelligence.

I adopt an AI-augmented software development workflow, using modern AI tools like ChatGPT, Claude, and Google Antigravity for research, ideation, prototyping, coding assistance, debugging, documentation, and continuous learning, while maintaining rigorous human-led engineering, testing, and validation.`,
  interests: [
    "Web Development",
    "Artificial Intelligence",
    "Data Structures & Algorithms",
    "AI-Augmented Engineering",
    "Database Management Systems",
    "Autonomous Agents & RAG",
  ],
  stats: [
    { icon: "fa-solid fa-graduation-cap", number: "7.9", label: "B.Tech CGPA / 10" },
    { icon: "fa-solid fa-award", number: "94%", label: "Intermediate MPC" },
    { icon: "fa-solid fa-certificate", number: "2", label: "AI Certifications" },
    { icon: "fa-solid fa-robot", number: "100%", label: "AI-Augmented Workflow" },
  ],
};

// ── EDUCATION ──
const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Bhaskar Engineering College, Hyderabad",
    branch: "Computer Science & Engineering",
    period: "2023 – 2027",
    status: "Currently Pursuing • CGPA: 7.9/10",
    statusType: "current",
    coursework: ["Python", "Java", "C", "Data Structures & Algorithms", "OOP", "DBMS", "REST APIs", "Operating Systems"],
  },
  {
    degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    institution: "Akashaydeep Junior College",
    branch: "MPC Stream",
    period: "2021 – 2023",
    status: "Completed • 94%",
    statusType: "completed",
    coursework: ["Mathematics", "Physics", "Chemistry"],
  },
];

// ── SKILLS ──
const SKILLS = [
  // AI-Augmented & Emerging
  { name: "ChatGPT", category: "ai", level: "Advanced", iconClass: "fa-solid fa-brain" },
  { name: "Claude", category: "ai", level: "Advanced", iconClass: "fa-solid fa-robot" },
  { name: "Google Antigravity", category: "ai", level: "Advanced", iconClass: "fa-solid fa-wand-magic-sparkles" },
  { name: "Prompt Engineering", category: "ai", level: "Advanced", iconClass: "fa-solid fa-terminal" },
  { name: "Generative AI", category: "ai", level: "Intermediate", iconClass: "fa-solid fa-atom" },
  { name: "Machine Learning", category: "ai", level: "Intermediate", iconClass: "fa-solid fa-network-wired" },
  { name: "Autonomous Workflows & RAG", category: "ai", level: "Intermediate", iconClass: "fa-solid fa-diagram-project" },

  // Programming Languages
  { name: "Python", category: "languages", level: "Advanced", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", category: "languages", level: "Intermediate", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", category: "languages", level: "Intermediate", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "JavaScript", category: "languages", level: "Intermediate", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

  // Web Technologies & Frameworks
  { name: "HTML5", category: "frameworks", level: "Advanced", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "frameworks", level: "Advanced", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Django", category: "frameworks", level: "Intermediate", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Flask", category: "frameworks", level: "Intermediate", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "REST APIs", category: "frameworks", level: "Intermediate", iconClass: "fa-solid fa-network-wired" },

  // Databases
  { name: "MySQL", category: "databases", level: "Intermediate", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SQL & DBMS", category: "databases", level: "Intermediate", iconClass: "fa-solid fa-database" },

  // Tools & Platforms
  { name: "Git", category: "tools", level: "Intermediate", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "tools", level: "Intermediate", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", category: "tools", level: "Advanced", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "XAMPP", category: "tools", level: "Intermediate", iconClass: "fa-solid fa-server" },
];

const SKILL_CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "ai", label: "AI & Emerging" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks & Web" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools" },
];

// ── PROJECTS ──
const PROJECTS = [
  {
    id: 1,
    title: "Online Vehicle Parking Reservation System",
    description: "A comprehensive web-based parking reservation platform for managing parking slots, live availability, and online reservations through a centralized system.",
    category: "fullstack",
    technologies: ["Django", "MySQL", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Built a web-based parking reservation platform for managing parking slots, availability, and online reservations through a centralized system",
      "Implemented user authentication, role-specific dashboards, parking-slot management, availability tracking, and reservation workflows for users, administrators, and service providers",
      "Developed responsive frontend using HTML5, CSS3, and JavaScript, and engineered backend functionality with Django and MySQL for persistent data",
      "Applied an AI-augmented development workflow using ChatGPT, Claude, and Google Antigravity for research, prototyping, coding assistance, debugging, UI/UX refinement, and documentation with human-led validation",
    ],
    image: "assets/images/projects/project-placeholder.svg",
    github: "#",
    demo: null,
  },
  {
    id: 2,
    title: "AI-Augmented Developer Workflow & Tooling",
    description: "An agentic developer workflow integrating ChatGPT, Claude, and Google Antigravity for research, ideation, automated debugging, and rapid prototyping.",
    category: "ai-ml",
    technologies: ["Python", "Google Antigravity", "RAG", "Prompt Engineering"],
    features: [
      "Agentic AI workflows utilizing tool calling and autonomous task execution",
      "Prompt engineering pipeline for requirement analysis, test synthesis, and refactoring",
      "Human-in-the-loop review mechanism to validate AI-generated code against security and style constraints",
      "Integrated documentation generator and code visualization tools",
    ],
    image: "assets/images/projects/project-placeholder.svg",
    github: "#",
    demo: null,
  },
];

const PROJECT_CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai-ml", label: "AI & Machine Learning" },
];

// ── CERTIFICATIONS (VIEW-ONLY GALLERY) ──
const CERTIFICATIONS = [
  {
    id: 1,
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    date: "July 21st, 2026",
    image: "assets/certificates/media_1793155204614.png",
    pdf: "assets/certificates/media_1793155204614.pdf",
    alt: "Deloitte Technology Job Simulation Certificate of Completion for Uday Kumbhar",
  },
  {
    id: 2,
    title: "Generative AI for All",
    issuer: "Physics Wallah & Microsoft",
    date: "January 7, 2026",
    image: "assets/certificates/media_1793155204646.png",
    pdf: "assets/certificates/media_1793155204646.pdf",
    alt: "Physics Wallah & Microsoft Generative AI for All Certificate for Uday Kumbhar",
  },
  {
    id: 3,
    title: "Google AI Essentials V1",
    issuer: "Google • Coursera",
    date: "July 3, 2026",
    image: "assets/certificates/media_1793155204662.png",
    pdf: "assets/certificates/media_1793155204662.pdf",
    alt: "Google AI Essentials V1 Certificate for Uday Kumbhar",
  },
  {
    id: 4,
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle University",
    date: "July 1, 2026",
    image: "assets/certificates/media_1793155204858.png",
    pdf: "assets/certificates/media_1793155204858.pdf",
    alt: "Oracle Certified Foundations Associate in Agentic AI for Uday Kumbhar",
  },
  {
    id: 5,
    title: "Google Prompting Essentials",
    issuer: "Google • Coursera",
    date: "July 3, 2026",
    image: "assets/certificates/media_1793155204915.png",
    pdf: "assets/certificates/media_1793155204915.pdf",
    alt: "Google Prompting Essentials 4-Course Specialization Certificate for Uday Kumbhar",
  },
];

// ── ACHIEVEMENTS & HIGHLIGHTS ──
const ACHIEVEMENTS = [
  {
    icon: "fa-solid fa-robot",
    title: "AI-Augmented Engineering Workflow",
    meta: "Modern Software Development • 2026",
    description: "Adopted cutting-edge AI tools (Google Antigravity, Claude, ChatGPT) for research, ideation, prototyping, and debugging with human validation.",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Academic Excellence — 94% in Intermediate",
    meta: "Akashaydeep Junior College • MPC Stream",
    description: "Achieved an outstanding 94% score in MPC and maintained a strong 7.9/10 CGPA in B.Tech Computer Science & Engineering at Bhaskar Engineering College.",
  },
  {
    icon: "fa-solid fa-certificate",
    title: "Dual Industry AI Certifications",
    meta: "Google & Oracle • 2026",
    description: "Earned Google AI Essentials V1 (Prompt Engineering, Generative AI) and Oracle Agentic AI Certified Foundations Associate (Autonomous Workflows, RAG, Tool Calling).",
  },
];

// ── LEARNING JOURNEY / FUTURE ──
const JOURNEY = [
  {
    icon: "fa-solid fa-rocket",
    title: "Currently Learning & Advancing",
    description: "Deepening knowledge of full-stack Django architecture, RESTful API design, and production database optimization.",
    tags: ["Django", "MySQL", "REST APIs", "DSA"],
  },
  {
    icon: "fa-solid fa-microchip",
    title: "Skills to Develop",
    description: "Exploring autonomous multi-agent systems, RAG architectures, and cloud deployment pipelines.",
    tags: ["Autonomous Agents", "RAG", "Cloud Deployments", "Docker"],
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "Immediate Goal",
    description: "Secure a software development role or internship to build high-impact applications and collaborate with dynamic engineering teams.",
    tags: ["Internship", "Full Stack Role", "Production Engineering"],
  },
  {
    icon: "fa-solid fa-star",
    title: "Long-Term Vision",
    description: "Architect innovative, AI-powered software systems and web platforms that deliver high practical value to businesses and users.",
    tags: ["AI Software", "System Architecture", "Leadership"],
  },
];

// ── TESTIMONIALS ──
const TESTIMONIALS = [];


/* =====================================================
   APPLICATION CODE — Generally no need to edit below
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initializePortfolio();
});

/* =====================================================
   THEME TOGGLE — MIDNIGHT VIOLET DARK MODE
   ===================================================== */
function initThemeToggle() {
  const STORAGE_KEY = 'portfolio-theme';
  const toggle = document.getElementById('theme-toggle');

  // Determine initial theme: localStorage > system preference > light
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    // Respect system preference if no saved preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Update toggle button title and aria
    if (toggle) {
      toggle.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
      toggle.setAttribute('aria-label', toggle.title);
    }
  }

  // Apply saved/system theme immediately
  applyTheme(getPreferredTheme());

  // Toggle handler
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Listen for system preference changes (live sync)
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only auto-follow if user hasn't explicitly set a preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}


function initializePortfolio() {
  // 1. Immediately initialize loader dismissal logic
  initPageLoader();

  // 2. Safely run each module so nonessential errors never block other features
  const safeInit = (fn, name) => {
    try {
      fn();
    } catch (err) {
      console.error(`[Portfolio] Initialization error in ${name}:`, err);
    }
  };

  safeInit(initThemeToggle, 'ThemeToggle');
  safeInit(populatePersonalInfo, 'PersonalInfo');
  safeInit(initHeroRotatingText, 'HeroRotatingText');
  safeInit(renderEducation, 'Education');
  safeInit(renderSkills, 'Skills');
  safeInit(renderProjects, 'Projects');
  safeInit(renderCertifications, 'Certifications');
  safeInit(renderAchievements, 'Achievements');
  safeInit(renderJourney, 'Journey');
  safeInit(initNavigation, 'Navigation');
  safeInit(initScrollEffects, 'ScrollEffects');
  safeInit(initProjectFilters, 'ProjectFilters');
  safeInit(initSkillFilters, 'SkillFilters');
  safeInit(initContactForm, 'ContactForm');
  safeInit(initSocialSharing, 'SocialSharing');
  safeInit(initModals, 'Modals');
  safeInit(initCertViewer, 'CertViewer');
  safeInit(initBackToTop, 'BackToTop');
  safeInit(checkResumeAvailability, 'ResumeAvailability');
}

/* ── Populate Personal Info ── */
function populatePersonalInfo() {
  // Logo
  const logoText = document.getElementById('logo-text');
  const logoIcon = document.getElementById('logo-icon');
  if (logoText) logoText.textContent = PERSONAL.name.toUpperCase();
  if (logoIcon) logoIcon.textContent = PERSONAL.initials;

  // Hero
  setText('hero-greeting', PERSONAL.greeting);
  setText('hero-name', PERSONAL.name);
  setText('hero-description', PERSONAL.heroDescription);

  // Hero profile image
  const heroImg = document.getElementById('hero-profile-img');
  if (heroImg) heroImg.src = PERSONAL.profileImage;

  // Social links
  setSocialLink('social-github', PERSONAL.github);
  setSocialLink('social-linkedin', PERSONAL.linkedin);
  setSocialLink('social-email', PERSONAL.email ? `mailto:${PERSONAL.email}` : null);
  setSocialLink('social-twitter', PERSONAL.twitter);
  setSocialLink('social-instagram', PERSONAL.instagram);

  // Contact info
  setContactInfo();

  // About
  setText('about-title', ABOUT.title);
  setText('about-description', ABOUT.description);
  renderAboutInterests();
  renderAboutStats();

  // Footer
  const footerName = document.getElementById('footer-name');
  if (footerName) footerName.textContent = PERSONAL.name;
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text) el.textContent = text;
}

function setSocialLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  if (url) {
    el.href = url;
    el.style.display = '';
  } else {
    el.style.display = 'none';
  }
}

function setContactInfo() {
  const emailEl = document.getElementById('contact-email');
  if (emailEl) {
    emailEl.textContent = PERSONAL.email;
    emailEl.href = `mailto:${PERSONAL.email}`;
  }

  const phoneEl = document.getElementById('contact-phone');
  const phoneWrapper = document.getElementById('contact-phone-wrapper');
  if (PERSONAL.phone && phoneEl) {
    phoneEl.textContent = PERSONAL.phone;
    if (phoneWrapper) phoneWrapper.style.display = '';
  } else if (phoneWrapper) {
    phoneWrapper.style.display = 'none';
  }

  const locationEl = document.getElementById('contact-location');
  if (locationEl) locationEl.textContent = PERSONAL.location;

  // Contact section social links
  setSocialLink('contact-social-github', PERSONAL.github);
  setSocialLink('contact-social-linkedin', PERSONAL.linkedin);
  setSocialLink('contact-social-twitter', PERSONAL.twitter);
}

function renderAboutInterests() {
  const container = document.getElementById('about-interests');
  if (!container) return;
  container.innerHTML = ABOUT.interests
    .map(i => `<span class="interest-tag">${i}</span>`)
    .join('');
}

function renderAboutStats() {
  const container = document.getElementById('about-stats');
  if (!container) return;
  container.innerHTML = ABOUT.stats.map(s => `
    <div class="stat-card reveal">
      <div class="stat-icon"><i class="${s.icon}"></i></div>
      <div class="stat-number">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

/* ── Render Education ── */
function renderEducation() {
  const container = document.getElementById('education-timeline');
  if (!container) return;
  container.innerHTML = EDUCATION.map(edu => `
    <div class="edu-item reveal active revealed">
      <div class="edu-dot"></div>
      <div class="edu-card">
        <div class="edu-header">
          <h3 class="edu-degree">${edu.degree}</h3>
          <span class="edu-period">${edu.period}</span>
        </div>
        <p class="edu-institution">${edu.institution}</p>
        <p class="edu-branch">${edu.status}</p>
        ${edu.coursework.length ? `
          <div class="edu-coursework">
            ${edu.coursework.map(c => `<span class="coursework-tag">${c}</span>`).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

/* ── Render Skills ── */
function renderSkills() {
  renderSkillFilters();
  renderSkillCards();
}

function renderSkillFilters() {
  const container = document.getElementById('skill-filters');
  if (!container) return;
  container.innerHTML = SKILL_CATEGORIES.map((cat, i) => `
    <button class="skill-filter-btn ${i === 0 ? 'active' : ''}" data-category="${cat.id}">${cat.label}</button>
  `).join('');
}

function renderSkillCards(category = 'all') {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const filtered = category === 'all' ? SKILLS : SKILLS.filter(s => s.category === category);

  container.innerHTML = filtered.map(skill => `
    <div class="skill-card reveal active revealed" data-category="${skill.category}">
      <div class="skill-icon-wrap skill-card-icon">
        ${skill.iconUrl
          ? `<img src="${skill.iconUrl}" alt="${skill.name}" loading="lazy">`
          : `<i class="${skill.iconClass || 'fa-solid fa-code'}"></i>`
        }
      </div>
      <div class="skill-name skill-card-name">${skill.name}</div>
      <div class="skill-level skill-card-level">${skill.level}</div>
    </div>
  `).join('');

  // Trigger reveal for newly rendered cards
  requestAnimationFrame(() => {
    container.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('active');
      el.classList.add('revealed');
    });
  });
}

/* ── Render Projects ── */
function renderProjects() {
  renderProjectFilters();
  renderProjectCards();
}

function renderProjectFilters() {
  const container = document.getElementById('project-filters');
  if (!container) return;
  container.innerHTML = PROJECT_CATEGORIES.map((cat, i) => `
    <button class="project-filter-btn ${i === 0 ? 'active' : ''}" data-category="${cat.id}">${cat.label}</button>
  `).join('');
}

function renderProjectCards(category = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = PROJECTS.map(project => `
    <div class="project-card reveal active revealed ${category !== 'all' && project.category !== category ? 'hidden' : ''}"
         data-category="${project.category}" data-id="${project.id}">
      <div class="project-img-wrap project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-overlay project-image-overlay">
          <button class="project-overlay-btn" onclick="openProjectModal(${project.id})">
            <i class="fa-solid fa-eye"></i> View Details
          </button>
        </div>
      </div>
      <div class="project-body project-info">
        <span class="project-category">${getCategoryLabel(project.category)}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc project-description">${project.description}</p>
        <div class="project-techs project-tech-stack">
          ${project.technologies.map(t => `<span class="tech-tag project-tech">${t}</span>`).join('')}
        </div>
        <div class="project-footer project-links">
          ${project.github && project.github !== '#' ? `
            <a href="${project.github}" target="_blank" rel="noopener" class="project-link-btn project-link">
              <i class="fa-brands fa-github"></i> Source Code
            </a>` : ''}
          ${project.demo && project.demo !== '#' ? `
            <a href="${project.demo}" target="_blank" rel="noopener" class="project-link-btn project-link">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </a>` : ''}
          <button class="project-link-btn project-link" onclick="openProjectModal(${project.id})" style="background:none;border:none;cursor:pointer;padding:0;">
            <i class="fa-solid fa-circle-info"></i> Details
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-trigger reveal
  requestAnimationFrame(() => {
    container.querySelectorAll('.reveal:not(.hidden)').forEach(el => {
      el.classList.add('active');
      el.classList.add('revealed');
    });
  });
}

function getCategoryLabel(categoryId) {
  const cat = PROJECT_CATEGORIES.find(c => c.id === categoryId);
  return cat ? cat.label : categoryId;
}

/* ── Render Certifications ── */
function renderCertifications() {
  const container = document.getElementById('certs-grid');
  if (!container) return;

  container.innerHTML = CERTIFICATIONS.map((cert, i) => `
    <article class="cert-card reveal active revealed" data-cert-id="${cert.id}">
      <div class="cert-thumb" onclick="openCertViewer(${i})" role="button" tabindex="0" aria-label="View ${cert.title} certificate">
        <img src="${cert.image}" alt="${cert.alt}" loading="lazy">
        <div class="cert-thumb-overlay">
          <span class="cert-thumb-badge"><i class="fa-solid fa-expand"></i> View Certificate</span>
        </div>
      </div>
      <div class="cert-body">
        <span class="cert-issuer">${cert.issuer}</span>
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-date">${cert.date}</p>
        <div class="cert-card-actions">
          <button class="cert-view-btn" type="button" onclick="openCertViewer(${i})" aria-label="View ${cert.title} certificate">
            <i class="fa-solid fa-eye"></i> View Certificate
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

/* ── Render Achievements ── */
function renderAchievements() {
  const section = document.getElementById('achievements-section');
  const container = document.getElementById('achievements-grid');
  if (!section || !container) return;

  if (ACHIEVEMENTS.length === 0) {
    section.style.display = 'none';
    return;
  }

  container.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="achievement-card reveal active revealed">
      <div class="achievement-icon"><i class="${a.icon}"></i></div>
      <div class="achievement-content">
        <h3 class="achievement-title">${a.title}</h3>
        <p class="achievement-org">${a.meta}</p>
        <p class="achievement-desc">${a.description}</p>
      </div>
    </div>
  `).join('');
}

/* ── Render Learning Journey ── */
function renderJourney() {
  const container = document.getElementById('journey-grid');
  if (!container) return;

  container.innerHTML = JOURNEY.map(j => `
    <div class="journey-card reveal active revealed">
      <span class="journey-status journey-status--planned"><i class="${j.icon}"></i> Focus</span>
      <h3 class="journey-title">${j.title}</h3>
      <p class="journey-desc">${j.description}</p>
      ${j.tags.length ? `
        <div class="journey-tags" style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px;">
          ${j.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
}

/* =====================================================
   HERO ROTATING DESIGNATION TYPING ANIMATION
   ===================================================== */
function initHeroRotatingText() {
  const el = document.getElementById('hero-title-text');
  if (!el) return;

  const titles = [
    "AI Enthusiast",
    "Aspiring Software Developer",
    "Generative AI Explorer",
    "AI-Powered Project Builder",
    "Frontend Developer",
    "Technology Explorer"
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 95;

  function typeCycle() {
    const fullText = titles[titleIndex];

    if (isDeleting) {
      charIndex--;
      typingSpeed = 45;
    } else {
      charIndex++;
      typingSpeed = 90;
    }

    el.textContent = fullText.substring(0, charIndex);

    if (!isDeleting && charIndex === fullText.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause on completed designation
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 450; // Pause before typing next designation
    }

    setTimeout(typeCycle, typingSpeed);
  }

  // Initial cycle start
  setTimeout(typeCycle, 800);
}


/* =====================================================
   FLOATING GLASSMORPHISM NAVIGATION
   ===================================================== */
function initNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  if (toggle && links) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggle.classList.toggle('active');
      links.classList.toggle('active');
      const isOpen = links.classList.contains('active');
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (toggle) {
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
      if (links) links.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (toggle && links && links.classList.contains('active')) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // Active section highlight
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  sections.forEach(section => observer.observe(section));

  // Immediate highlight when user is near the top
  window.addEventListener('scroll', () => {
    if (window.scrollY < 200) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#home');
      });
    }
  }, { passive: true });
}


/* =====================================================
   SCROLL EFFECTS
   ===================================================== */
function initScrollEffects() {
  const navbar = document.querySelector('.navbar');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
  }, { passive: true });

  // Reveal on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Immediate visibility for initial sections
  document.querySelectorAll('#home .reveal, #about .reveal').forEach(el => {
    el.classList.add('active');
    el.classList.add('revealed');
  });

  // Observe dynamically added reveals
  const bodyObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.classList && node.classList.contains('reveal') && !node.classList.contains('active')) {
            revealObserver.observe(node);
          }
          if (node.querySelectorAll) {
            node.querySelectorAll('.reveal:not(.active)').forEach(el => {
              revealObserver.observe(el);
            });
          }
        }
      });
    });
  });
  bodyObserver.observe(document.body, { childList: true, subtree: true });
}


/* =====================================================
   PROJECT & SKILL FILTERS
   ===================================================== */
function initProjectFilters() {
  const container = document.getElementById('project-filters');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.project-filter-btn');
    if (!btn) return;

    container.querySelectorAll('.project-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        card.offsetHeight; // trigger reflow
        card.style.animation = '';
      } else {
        card.classList.add('hidden');
      }
    });
  });
}

function initSkillFilters() {
  const container = document.getElementById('skill-filters');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.skill-filter-btn');
    if (!btn) return;

    container.querySelectorAll('.skill-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderSkillCards(btn.dataset.category);
  });
}


/* =====================================================
   MODALS
   ===================================================== */
function initModals() {
  // Close modal on overlay click or close button click
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal(e.target);
    }
    if (e.target.closest('.modal-close') || e.target.closest('.cert-viewer-close-btn')) {
      const activeModal = e.target.closest('.modal-overlay');
      if (activeModal) closeModal(activeModal);
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) closeModal(activeModal);
    }
  });
}

function openProjectModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const img = modal.querySelector('.modal-image img');
  if (img) {
    img.src = project.image;
    img.alt = project.title;
  }
  const categoryEl = modal.querySelector('.modal-category');
  if (categoryEl) categoryEl.textContent = getCategoryLabel(project.category);
  const titleEl = modal.querySelector('.modal-title');
  if (titleEl) titleEl.textContent = project.title;
  const descEl = modal.querySelector('.modal-description');
  if (descEl) descEl.textContent = project.description;

  // Features
  const featuresContainer = modal.querySelector('.modal-features');
  if (featuresContainer) {
    featuresContainer.innerHTML = (project.features || [])
      .map(f => `<li>${f}</li>`)
      .join('');
  }

  // Tech stack
  const techContainer = modal.querySelector('.modal-tech-stack');
  if (techContainer) {
    techContainer.innerHTML = (project.technologies || [])
      .map(t => `<span class="modal-tech">${t}</span>`)
      .join('');
  }

  // Action links
  const actionsContainer = modal.querySelector('.modal-actions');
  if (actionsContainer) {
    let actionsHTML = '';
    if (project.github && project.github !== '#') {
      actionsHTML += `<a href="${project.github}" target="_blank" rel="noopener" class="btn btn--primary"><i class="fa-brands fa-github"></i> View Source</a>`;
    }
    if (project.demo && project.demo !== '#') {
      actionsHTML += `<a href="${project.demo}" target="_blank" rel="noopener" class="btn btn--outline"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`;
    }
    actionsContainer.innerHTML = actionsHTML;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* =====================================================
   CERTIFICATE VIEWER (VIEW-ONLY MODAL)
   ===================================================== */
let certZoomLevel = 1;
const MIN_CERT_ZOOM = 0.5;
const MAX_CERT_ZOOM = 2.5;
const CERT_ZOOM_STEP = 0.25;
let isCertPdfMode = false;

function setCertZoom(zoom) {
  certZoomLevel = Math.min(Math.max(zoom, MIN_CERT_ZOOM), MAX_CERT_ZOOM);
  const panLayer = document.getElementById('cert-pan-layer');
  const indicator = document.getElementById('cert-zoom-indicator');
  const viewport = document.getElementById('cert-viewport');

  if (panLayer) {
    panLayer.style.transform = `scale(${certZoomLevel})`;
  }
  if (indicator) {
    indicator.textContent = `${Math.round(certZoomLevel * 100)}%`;
  }
  if (viewport) {
    viewport.style.cursor = certZoomLevel > 1 ? 'grab' : 'default';
  }
}

function openCertViewer(certIndex) {
  const cert = CERTIFICATIONS[certIndex];
  if (!cert) return;

  const modal = document.getElementById('cert-viewer-modal');
  if (!modal) return;

  const titleEl = document.getElementById('cert-viewer-title');
  const metaEl = document.getElementById('cert-viewer-meta');
  const imgEl = document.getElementById('cert-viewer-image');
  const pdfObj = document.getElementById('cert-viewer-pdf-obj');
  const pdfIframe = document.getElementById('cert-viewer-pdf-iframe');
  const pdfContainer = document.getElementById('cert-pdf-container');
  const modeText = document.getElementById('cert-mode-text');
  const modeBtn = document.getElementById('cert-view-mode-toggle');
  const viewport = document.getElementById('cert-viewport');

  if (titleEl) titleEl.textContent = cert.title;
  if (metaEl) metaEl.textContent = `${cert.issuer} • ${cert.date}`;
  if (imgEl) {
    imgEl.src = cert.image;
    imgEl.alt = cert.alt || cert.title;
  }
  if (pdfObj) pdfObj.data = cert.pdf || '';
  if (pdfIframe) pdfIframe.src = cert.pdf || '';

  // Reset to image view
  isCertPdfMode = false;
  if (pdfContainer) pdfContainer.style.display = 'none';
  if (modeText) modeText.textContent = 'View Original PDF';
  if (modeBtn) {
    const icon = modeBtn.querySelector('i');
    if (icon) icon.className = 'fa-solid fa-file-pdf';
    modeBtn.style.display = cert.pdf ? 'inline-flex' : 'none';
  }

  // Reset zoom & scroll
  setCertZoom(1);
  if (viewport) {
    viewport.scrollLeft = 0;
    viewport.scrollTop = 0;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertViewer() {
  const modal = document.getElementById('cert-viewer-modal');
  if (modal) {
    closeModal(modal);
  }
}

function initCertViewer() {
  const modal = document.getElementById('cert-viewer-modal');
  if (!modal) return;

  const zoomInBtn = document.getElementById('cert-zoom-in-btn');
  const zoomOutBtn = document.getElementById('cert-zoom-out-btn');
  const zoomResetBtn = document.getElementById('cert-zoom-reset-btn');
  const closeBtn = document.getElementById('cert-viewer-close-btn');
  const toggleBtn = document.getElementById('cert-view-mode-toggle');
  const viewport = document.getElementById('cert-viewport');

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setCertZoom(certZoomLevel + CERT_ZOOM_STEP);
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setCertZoom(certZoomLevel - CERT_ZOOM_STEP);
    });
  }

  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setCertZoom(1);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeCertViewer();
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isCertPdfMode = !isCertPdfMode;
      const pdfContainer = document.getElementById('cert-pdf-container');
      const modeText = document.getElementById('cert-mode-text');
      const zoomToolbar = document.getElementById('cert-zoom-toolbar');
      const icon = toggleBtn.querySelector('i');

      if (pdfContainer) {
        pdfContainer.style.display = isCertPdfMode ? 'block' : 'none';
      }
      if (modeText) {
        modeText.textContent = isCertPdfMode ? 'View Certificate Image' : 'View Original PDF';
      }
      if (icon) {
        icon.className = isCertPdfMode ? 'fa-solid fa-image' : 'fa-solid fa-file-pdf';
      }
      if (zoomToolbar) {
        zoomToolbar.style.opacity = isCertPdfMode ? '0.4' : '1';
        zoomToolbar.style.pointerEvents = isCertPdfMode ? 'none' : 'auto';
      }
    });
  }

  // Pan interaction for enlarged view
  if (viewport) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;

    viewport.addEventListener('mousedown', (e) => {
      if (certZoomLevel <= 1 || isCertPdfMode) return;
      isDragging = true;
      viewport.classList.add('is-dragging');
      startX = e.pageX - viewport.offsetLeft;
      startY = e.pageY - viewport.offsetTop;
      scrollLeft = viewport.scrollLeft;
      scrollTop = viewport.scrollTop;
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
      if (viewport) viewport.classList.remove('is-dragging');
    });

    viewport.addEventListener('mousemove', (e) => {
      if (!isDragging || certZoomLevel <= 1) return;
      e.preventDefault();
      const x = e.pageX - viewport.offsetLeft;
      const y = e.pageY - viewport.offsetTop;
      viewport.scrollLeft = scrollLeft - (x - startX) * 1.5;
      viewport.scrollTop = scrollTop - (y - startY) * 1.5;
    });

    // Double-click to toggle zoom level
    viewport.addEventListener('dblclick', (e) => {
      if (isCertPdfMode) return;
      e.stopPropagation();
      setCertZoom(certZoomLevel === 1 ? 1.75 : 1);
    });
  }
}

function closeModal(overlay) {
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Make modal functions globally accessible
window.openProjectModal = openProjectModal;
window.openCertViewer = openCertViewer;
window.closeCertViewer = closeCertViewer;
window.openCertModal = openCertViewer; // backward compatibility alias


/* =====================================================
   CONTACT FORM & EMAILJS INTEGRATION
   ===================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('form-submit-btn') || form.querySelector('button[type="submit"]');
  const btnText = submitBtn ? (submitBtn.querySelector('.btn-text') || submitBtn) : null;
  const statusEl = document.getElementById('form-status');
  const popup = document.getElementById('success-popup');
  const popupClose = document.getElementById('success-popup-close');
  const popupBack = document.getElementById('success-popup-back');

  const errorPopup = document.getElementById('error-popup');
  const errorPopupClose = document.getElementById('error-popup-close');
  const errorPopupRetry = document.getElementById('error-popup-retry');

  let autoDismissTimer = null;
  let isSending = false;

  // Initialize EmailJS if public key is present and emailjs library is loaded
  const cfg = window.EMAILJS_CONFIG || {};
  const isEmailJSReady = typeof emailjs !== 'undefined' && cfg.publicKey && cfg.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

  if (typeof emailjs !== 'undefined' && isEmailJSReady) {
    try {
      emailjs.init({ publicKey: cfg.publicKey });
    } catch (err) {
      console.warn('EmailJS initialization warning:', err);
    }
  }

  // --- Success Popup Modal Handlers ---
  function openSuccessPopup() {
    if (!popup) return;
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus close or back button for accessibility
    if (popupBack) popupBack.focus();

    // Start auto-dismiss timer (6 seconds)
    startDismissTimer();
  }

  function closeSuccessPopup(scrollUp = false) {
    if (!popup) return;
    popup.classList.remove('active');
    document.body.style.overflow = '';
    clearDismissTimer();

    if (scrollUp) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function startDismissTimer() {
    clearDismissTimer();
    autoDismissTimer = setTimeout(() => {
      closeSuccessPopup();
    }, 6000);
  }

  function clearDismissTimer() {
    if (autoDismissTimer) {
      clearTimeout(autoDismissTimer);
      autoDismissTimer = null;
    }
  }

  // --- Error Popup Modal Handlers ---
  function openErrorPopup() {
    if (!errorPopup) return;
    errorPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (errorPopupRetry) errorPopupRetry.focus();
  }

  function closeErrorPopup() {
    if (!errorPopup) return;
    errorPopup.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (popup) {
    if (popupClose) popupClose.addEventListener('click', () => closeSuccessPopup(false));
    if (popupBack) popupBack.addEventListener('click', () => closeSuccessPopup(true));

    popup.addEventListener('click', (e) => {
      if (e.target === popup) closeSuccessPopup(false);
    });

    const popupCard = popup.querySelector('.success-popup');
    if (popupCard) {
      popupCard.addEventListener('mouseenter', clearDismissTimer);
      popupCard.addEventListener('mouseleave', startDismissTimer);
    }
  }

  if (errorPopup) {
    if (errorPopupClose) errorPopupClose.addEventListener('click', closeErrorPopup);
    if (errorPopupRetry) errorPopupRetry.addEventListener('click', () => {
      closeErrorPopup();
      const firstInvalid = form.querySelector('.form-control.error') || form.querySelector('#form-name');
      if (firstInvalid) firstInvalid.focus();
    });

    errorPopup.addEventListener('click', (e) => {
      if (e.target === errorPopup) closeErrorPopup();
    });
  }

  // Keyboard accessibility (Escape key closes active modals)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (popup && popup.classList.contains('active')) closeSuccessPopup(false);
      if (errorPopup && errorPopup.classList.contains('active')) closeErrorPopup();
    }
  });

  // --- Field Validation Helper ---
  function validateField(field) {
    const error = field.parentElement ? field.parentElement.querySelector('.form-error') : null;
    const val = field.value.trim();

    if (!val) {
      field.classList.add('error');
      if (error) {
        error.textContent = 'This field is required';
        error.classList.add('visible');
      }
      return false;
    }

    if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        field.classList.add('error');
        if (error) {
          error.textContent = 'Please enter a valid email address';
          error.classList.add('visible');
        }
        return false;
      }
    }

    field.classList.remove('error');
    if (error) error.classList.remove('visible');
    return true;
  }

  // Clear error on input
  form.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', () => {
      validateField(field);
      if (statusEl) {
        statusEl.className = 'form-status';
        statusEl.innerHTML = '';
      }
    });
  });

  // --- Form Submit Handler ---
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (isSending) return; // Prevent duplicate submission

    // Honeypot spam check: if filled, quietly reject bot
    const honeypot = form.querySelector('#form-hp');
    if (honeypot && honeypot.value) {
      console.warn('Spam submission detected and blocked.');
      return;
    }

    const name = form.querySelector('#form-name');
    const email = form.querySelector('#form-email');
    const subject = form.querySelector('#form-subject');
    const message = form.querySelector('#form-message');

    // Validate all fields
    const isNameValid = validateField(name);
    const isEmailValid = validateField(email);
    const isSubjectValid = validateField(subject);
    const isMessageValid = validateField(message);

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      return;
    }

    const config = window.EMAILJS_CONFIG || {};
    const hasConfig = config.publicKey && config.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' &&
                      config.serviceId && config.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
                      config.templateId && config.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID';

    // Set Loading State
    isSending = true;
    if (submitBtn) submitBtn.disabled = true;
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span class="btn-text">Sending Message...</span>';
    }
    if (statusEl) {
      statusEl.className = 'form-status';
      statusEl.innerHTML = '';
    }

    // Template variables matching requirements
    const templateParams = {
      from_name: name.value.trim(),
      from_email: email.value.trim(),
      subject: subject.value.trim(),
      message: message.value.trim(),
      to_email: config.recipientEmail || 'udayraje.1981@gmail.com'
    };

    if (hasConfig && typeof emailjs !== 'undefined') {
      try {
        const response = await emailjs.send(config.serviceId, config.templateId, templateParams, config.publicKey);

        if (response.status === 200 || response.text === 'OK') {
          // Success! Show animated modal popup
          openSuccessPopup();
          form.reset();

          if (statusEl) {
            statusEl.className = 'form-status success';
            statusEl.textContent = "Your message has been sent successfully! I'll get back to you soon.";
          }
        } else {
          throw new Error('Unexpected response status: ' + response.status);
        }
      } catch (error) {
        console.error('EmailJS Submission Error:', error);
        // Show error popup modal for failure
        openErrorPopup();

        if (statusEl) {
          statusEl.className = 'form-status error';
          statusEl.textContent = 'Something went wrong while sending your message. Please try again in a moment.';
        }
      } finally {
        isSending = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    } else {
      // Credentials not configured yet
      setTimeout(() => {
        isSending = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }

        // Display error notification modal
        openErrorPopup();

        if (statusEl) {
          statusEl.className = 'form-status error';
          statusEl.innerHTML = `
            <strong><i class="fa-solid fa-triangle-exclamation"></i> EmailJS Configuration Missing:</strong>
            To enable actual message delivery, please insert your <code>publicKey</code>, <code>serviceId</code>, and <code>templateId</code> into <code>js/email-config.js</code>.
          `;
        }
      }, 500);
    }
  });
}



/* =====================================================
   SOCIAL MEDIA SHARING & INSTAGRAM FALLBACK
   ===================================================== */
function initSocialSharing() {
  const copyBtn = document.getElementById('share-copy-link-btn');
  const toast = document.getElementById('share-toast');
  if (!copyBtn) return;

  const shareData = {
    title: "Uday Kumbhar | AI-Augmented Software Developer",
    text: "Explore Uday Kumbhar's portfolio showcasing AI-powered applications, software development projects, and technical skills.",
    url: "https://uday-kumbhar-portfolio.vercel.app/"
  };

  copyBtn.addEventListener('click', async () => {
    // If Web Share API is available (Mobile/modern browsers supporting share)
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.warn('Web Share failed, falling back to copy link:', err);
        } else {
          return; // user cancelled share sheet
        }
      }
    }

    // Fallback: Copy link to clipboard for Instagram Bio / Story sticker / DM
    try {
      await navigator.clipboard.writeText(shareData.url);
      if (toast) {
        toast.style.display = 'block';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 4500);
      }
    } catch (err) {
      // Fallback for older browsers
      const tempInput = document.createElement('input');
      tempInput.value = shareData.url;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      if (toast) {
        toast.style.display = 'block';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 4500);
      }
    }
  });
}

/* =====================================================
   RESUME DOWNLOAD
   ===================================================== */
function checkResumeAvailability() {
  const resumeBtns = document.querySelectorAll('.resume-download-btn');
  // We can't check local file existence from the browser,
  // so we rely on the file being present at the specified path.
  // If the file doesn't exist, the browser will show a 404 page.
  // Users should place their resume at: assets/resume/my-resume.pdf
  resumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Check if the default placeholder path is still set
      if (PERSONAL.resumePath === 'assets/resume/my-resume.pdf') {
        // Try to fetch the file to see if it exists
        fetch(PERSONAL.resumePath, { method: 'HEAD' })
          .then(res => {
            if (!res.ok) {
              e.preventDefault();
              alert('Resume file not found. Please place your resume PDF at:\nassets/resume/my-resume.pdf');
            }
          })
          .catch(() => {
            // If fetch fails (e.g., file:// protocol), just let the click proceed
          });
      }
    });
  });
}


/* =====================================================
   BACK TO TOP
   ===================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* =====================================================
   PAGE LOADER
   ===================================================== */
function initPageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  let isDismissed = false;
  function dismiss() {
    if (isDismissed) return;
    isDismissed = true;

    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.classList.add('hidden');
      loader.style.display = 'none';
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 350);
  }

  // Dismiss as soon as interactive or fully loaded
  if (document.readyState === 'complete') {
    dismiss();
  } else if (document.readyState === 'interactive') {
    requestAnimationFrame(() => {
      setTimeout(dismiss, 100);
    });
  } else {
    window.addEventListener('load', dismiss, { once: true });
    document.addEventListener('DOMContentLoaded', dismiss, { once: true });
  }

  // Safe fallback so the page NEVER remains blocked under any circumstance
  setTimeout(dismiss, 600);
}
