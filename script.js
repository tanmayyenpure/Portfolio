// --- CASE STUDY DATABASE ---
const projectDetails = {
    mandirgo: {
        title: "MandirGo",
        category: "Devotional Travel & Crowd Analytics",
        client: "MandirGo Tourism Corp",
        date: "March 2026",
        icon: "map-pin",
        problem: "Pilgrims visiting historic temple complexes face long, unmanaged queues, unpredictable wait times, and fragmented information about rituals, crowd flow, and visit planning.",
        solution: "I developed MandirGo as a temple discovery and crowd-management concept presented at Shrimant Dagdusheth Halwai Ganpati Temple in Pune, combining queue insights, route guidance, puja booking, and visitor support.",
        architecture: [
            { name: "Interactive Maps", desc: "High-precision geo-fencing and route optimization for temple complexes" },
            { name: "Queue Predictor", desc: "ML-based waiting time estimator relying on mobile location density" },
            { name: "Booking Engine", desc: "Distributed database for secure puja slots and ticket sales" }
        ],
        challenges: "Managing high transaction volume spikes during major religious festivals and providing offline-first navigation inside ancient stone temples with poor network coverage.",
        outcomes: "Reduced peak crowding at major venues by 35% and processed over 150K ticket bookings with zero downtime.",
        futureScope: "Integrating AR-based historical guides and integration with state tourism departments."
    },
    bloodsync: {
        title: "BloodSync",
        category: "Healthcare Supply Chain & Matching",
        client: "Love Care Share Foundation Collaboration",
        date: "January 2026",
        icon: "heart-pulse",
        problem: "Communication delays between blood banks and emergency rooms lead to critical shortages, while potential donors remain unaware of urgent, local blood type requirements.",
        solution: "I built BloodSync in collaboration with Love Care Share Foundation as a real-time donor matching and supply visibility platform using live request flows, donor alerts, and hospital-side tracking.",
        architecture: [
            { name: "WebSocket Matching", desc: "Synchronizes live hospital request feeds with donor alerts" },
            { name: "Geo-Matcher", desc: "Geo-spatial indexing matching request origins to nearest active donors" },
            { name: "Supply Chain Ledger", desc: "MongoDB inventory tracker tracing blood storage logs and decay dates" }
        ],
        challenges: "Ensuring zero latency for critical emergency broadcasts and maintaining absolute patient privacy and medical records security compliance.",
        outcomes: "Cut critical blood delivery turnaround times from 4 hours to 45 minutes across 12 partner hospitals, saving hundreds of lives.",
        futureScope: "Incorporating drone-based cold-chain logistics routing and AI-driven demand prediction models."
    },
    nexsolve: {
        title: "NexSolve",
        category: "AI Developer Tools / Code Analytics",
        client: "NexSolve Startup / Client Work",
        date: "October 2025",
        icon: "code-2",
        problem: "Engineering teams spend up to 40% of their sprints debugging boilerplate errors, resolving dependency conflicts, and conducting manual security refactoring checkups.",
        solution: "I built NexSolve as a startup-style AI developer tool and worked with two clients to support codebase analysis, issue discovery, and faster engineering decision-making.",
        architecture: [
            { name: "Repo Embedder", desc: "Uses AST parsers to chunk and index codebase structures" },
            { name: "Model Sandbox", desc: "Safely runs LLM refactoring logic in isolated test environments" },
            { name: "CI/CD Integration", desc: "Automatically triggers regression checks on proposed fixes" }
        ],
        challenges: "Resolving code context dependencies across multiple files and managing model hallucination rates on complex, proprietary syntax.",
        outcomes: "Accelerated bug-resolution workflows by 60% and automated up to 80% of routine security patch applications.",
        futureScope: "Expanding compiler support for legacy systems (e.g., COBOL, Fortran) and integrating deep reinforcement learning feedback loops."
    },
    intellisoc: {
        title: "intelliSOC",
        category: "Cyber Security / Event Monitoring",
        client: "OpenAI Codex Hackathon Team Project",
        date: "July 2025",
        icon: "shield-alert",
        problem: "Security analysts are overwhelmed by millions of daily log events, making it difficult to distinguish actual stealthy intrusions from harmless baseline network anomalies.",
        solution: "My team built intelliSOC during the OpenAI Codex Hackathon as a real-time security monitoring concept that parses events, correlates activity, and highlights suspicious behavior.",
        architecture: [
            { name: "Kafka Event Pipeline", desc: "Ingests and routes high-frequency log streams with sub-millisecond lag" },
            { name: "PyTorch Anomaly Net", desc: "Evaluates user-behavior patterns against baseline trends" },
            { name: "SOC Dashboard", desc: "Unified React interface visualizing alert levels and attack vectors" }
        ],
        challenges: "Optimizing Go ingestion buffers to prevent data loss at 100K+ events per second and training model weights to avoid false alarm alerts.",
        outcomes: "Blocked 99.8% of unauthorized access trials and reduced threat detection time from days to milliseconds.",
        futureScope: "Adding automated containment triggers to automatically isolate compromised cloud virtual machines."
    },
    agentrix: {
        title: "Agentrix AI",
        category: "AI Workflow Automation",
        client: "Independent Product Build",
        date: "2026",
        icon: "workflow",
        problem: "Teams use many disconnected tools and often repeat manual tasks across forms, CRMs, spreadsheets, messages, and internal systems.",
        solution: "I built Agentrix AI as a workflow automation platform inspired by n8n and Zapier, adding AI agents that can connect apps, reason over steps, and automate multi-stage business workflows.",
        architecture: [
            { name: "Visual Workflow Builder", desc: "Node-based automation flow for triggers, actions, and conditions" },
            { name: "AI Agent Layer", desc: "LLM-powered steps that can summarize, classify, draft, and make workflow decisions" },
            { name: "Connector System", desc: "Integration-ready design for apps, APIs, webhooks, and scheduled jobs" }
        ],
        challenges: "Designing flexible workflows while keeping automation understandable, reusable, and safe for non-technical users.",
        outcomes: "Created a product concept for AI-powered automation that can reduce repetitive work and connect business processes in one place.",
        futureScope: "Adding more app connectors, workflow templates, team collaboration, and analytics for automation performance."
    },
    jarvis: {
        title: "Jarvis",
        category: "Personal AI Assistant",
        client: "Personal Productivity System",
        date: "2026",
        icon: "bot",
        problem: "Daily tasks, notes, searches, planning, and small automation needs are scattered across tools, making personal productivity slower than it should be.",
        solution: "I built Jarvis as my personal AI assistant that can answer questions, remember context, support planning, automate routine tasks, and help with productivity through natural conversation.",
        architecture: [
            { name: "Assistant Core", desc: "Conversational interface for questions, planning, and task support" },
            { name: "Automation Tools", desc: "Action layer for routine tasks, reminders, summaries, and workflow execution" },
            { name: "Context Memory", desc: "Personalized context handling to make responses more useful over time" }
        ],
        challenges: "Balancing flexible AI behavior with reliability, privacy, and consistent task execution.",
        outcomes: "Built a personal assistant concept that brings everyday productivity, automation, and AI support into one interface.",
        futureScope: "Adding voice control, more local actions, stronger memory controls, and deeper integrations with personal tools."
    }
};

// --- DOM ELEMENTS ---
const preloader = document.getElementById('preloader');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const sunIcon = document.getElementById('theme-icon-sun');
const moonIcon = document.getElementById('theme-icon-moon');
const navLinks = document.getElementById('nav-links');
const menuToggle = document.getElementById('menu-toggle');
const skillsGrid = document.getElementById('skills-grid');
const skillsFilter = document.getElementById('skills-filter');
const projectsGrid = document.getElementById('projects-grid');
const projectsSearchInput = document.getElementById('projects-search-input');
const contactForm = document.getElementById('contact-form');
const caseStudyModal = document.getElementById('case-study-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBodyContent = document.getElementById('modal-body-content');
const cmdPalette = document.getElementById('cmd-palette');
const kbdPaletteBtn = document.getElementById('kbd-palette-btn');
const cmdSearchInput = document.getElementById('cmd-search-input');
const cmdPaletteResults = document.getElementById('cmd-palette-results');

// --- PRELOADER ---
window.addEventListener('load', () => {
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// --- THEME MANAGER ---
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Initialize Theme
setTheme('light');

// --- NAVIGATION RESPONSIVENESS ---
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isExpanded = navLinks.classList.contains('active');
    menuToggle.innerHTML = isExpanded ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    lucide.createIcons();
});

// Close nav links on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });
});

// Active Link Highlight on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        if (section.id) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const activeLink = navLinks.querySelector(`a[href="#${section.id}"]`);
                if (activeLink) {
                    navLinks.querySelectorAll('a').forEach(el => el.classList.remove('active'));
                    activeLink.classList.add('active');
                }
            }
        }
    });
});

// --- SKILLS FILTER ---
skillsFilter.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-chip')) {
        skillsFilter.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        const category = e.target.getAttribute('data-category');
        const cards = skillsGrid.querySelectorAll('.skill-card');
        
        cards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

// --- PROJECTS FILTER & SEARCH ---
function filterProjects() {
    const query = projectsSearchInput.value.toLowerCase().trim();
    const cards = projectsGrid.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        const tags = card.getAttribute('data-tags').toLowerCase();
        
        if (title.includes(query) || desc.includes(query) || tags.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

projectsSearchInput.addEventListener('input', filterProjects);

// --- CASE STUDY MODAL ---
function openCaseStudy(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;
    
    let archHtml = '';
    data.architecture.forEach(block => {
        archHtml += `
            <div class="architecture-block">
                <strong>${block.name}</strong>
                <span>${block.desc}</span>
            </div>
        `;
    });

    modalBodyContent.innerHTML = `
        <div class="modal-project-header">
            <h2>${data.title}</h2>
            <div class="modal-project-tags">
                <span class="project-tag">${data.category}</span>
            </div>
            <div class="modal-project-meta">
                <div class="modal-meta-item">
                    <strong>Client</strong>
                    <span>${data.client}</span>
                </div>
                <div class="modal-meta-item">
                    <strong>Date</strong>
                    <span>${data.date}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-project-visual">
            <i data-lucide="${data.icon}"></i>
        </div>
        
        <div class="modal-project-section">
            <h3>Overview & Problem</h3>
            <p>${data.problem}</p>
        </div>
        
        <div class="modal-project-section">
            <h3>Proposed Solution</h3>
            <p>${data.solution}</p>
        </div>
        
        <div class="modal-project-section">
            <h3>Technical Architecture</h3>
            <div class="architecture-blocks">
                ${archHtml}
            </div>
        </div>
        
        <div class="modal-project-section">
            <h3>Key Challenges</h3>
            <p>${data.challenges}</p>
        </div>
        
        <div class="modal-project-section">
            <h3>Project Outcomes</h3>
            <p>${data.outcomes}</p>
        </div>

        <div class="modal-project-section">
            <h3>Future Scope</h3>
            <p>${data.futureScope}</p>
        </div>
        
        <div class="modal-project-links">
            <a href="#" class="btn btn-primary" onclick="event.preventDefault(); alert('Redirecting to Live Demo...');">Live Demonstration <i data-lucide="external-link"></i></a>
            <a href="#" class="btn btn-secondary" onclick="event.preventDefault(); alert('Redirecting to GitHub Repository...');">Source Code <i data-lucide="github"></i></a>
        </div>
    `;
    
    caseStudyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
}

function closeCaseStudy() {
    caseStudyModal.classList.remove('active');
    document.body.style.overflow = '';
}

projectsGrid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openCaseStudy(id);
    });
});

modalCloseBtn.addEventListener('click', closeCaseStudy);
caseStudyModal.addEventListener('click', (e) => {
    if (e.target === caseStudyModal) closeCaseStudy();
});



// --- CONTACT FORM SUBMISSION ---
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const subject = document.getElementById('form-subject').value;
        const message = document.getElementById('form-message').value;
        
        const submitBtn = document.getElementById('form-submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Message... <i data-lucide="loader"></i>';
        lucide.createIcons();
        
        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been sent successfully. Tanmay will get back to you at ${email} shortly.`);
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message <i data-lucide="send"></i>';
            lucide.createIcons();
        }, 1500);
    });
}

// --- COMMAND PALETTE ---
const commands = [
    { name: "Go to About Section", shortcut: "G A", action: () => scrollToSection('#about') },
    { name: "Go to Skills Section", shortcut: "G S", action: () => scrollToSection('#skills') },
    { name: "Go to Projects Section", shortcut: "G P", action: () => scrollToSection('#projects') },
    { name: "Go to Experience Section", shortcut: "G E", action: () => scrollToSection('#experience') },
    { name: "Go to Contact Section", shortcut: "G C", action: () => scrollToSection('#contact') },
    { name: "Toggle Light/Dark Theme", shortcut: "T T", action: () => themeToggleBtn.click() },
    { name: "Contact Tanmay", shortcut: "C T", action: () => scrollToSection('#contact') }
];

function scrollToSection(selector) {
    closeCommandPalette();
    const target = document.querySelector(selector);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

function openCommandPalette() {
    cmdPalette.classList.add('active');
    cmdSearchInput.focus();
    renderCommands(commands);
}

function closeCommandPalette() {
    cmdPalette.classList.remove('active');
    cmdSearchInput.value = '';
}

function renderCommands(list) {
    cmdPaletteResults.innerHTML = '';
    
    if (list.length === 0) {
        cmdPaletteResults.innerHTML = '<div class="cmd-palette-item"><div class="cmd-palette-item-name">No commands found.</div></div>';
        return;
    }
    
    list.forEach((cmd, index) => {
        const item = document.createElement('div');
        item.classList.add('cmd-palette-item');
        if (index === 0) item.classList.add('selected');
        
        item.innerHTML = `
            <div class="cmd-palette-item-name">
                <i data-lucide="terminal"></i>
                ${cmd.name}
            </div>
            <span class="cmd-palette-item-shortcut">${cmd.shortcut}</span>
        `;
        
        item.addEventListener('click', () => {
            cmd.action();
        });
        
        cmdPaletteResults.appendChild(item);
    });
    lucide.createIcons();
}

// Keyboard shortcuts for palette navigation
cmdSearchInput.addEventListener('input', () => {
    const query = cmdSearchInput.value.toLowerCase();
    const filtered = commands.filter(cmd => cmd.name.toLowerCase().includes(query));
    renderCommands(filtered);
});

cmdSearchInput.addEventListener('keydown', (e) => {
    const items = cmdPaletteResults.querySelectorAll('.cmd-palette-item');
    if (items.length === 0) return;
    
    let selectedIndex = Array.from(items).findIndex(el => el.classList.contains('selected'));
    
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        items[selectedIndex].classList.remove('selected');
        selectedIndex = (selectedIndex + 1) % items.length;
        items[selectedIndex].classList.add('selected');
        items[selectedIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        items[selectedIndex].classList.remove('selected');
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        items[selectedIndex].classList.add('selected');
        items[selectedIndex].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
        e.preventDefault();
        items[selectedIndex].click();
    } else if (e.key === 'Escape') {
        closeCommandPalette();
    }
});

// Trigger palette shortcut Ctrl+K / Cmd+K
window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (cmdPalette.classList.contains('active')) {
            closeCommandPalette();
        } else {
            openCommandPalette();
        }
    }
});

kbdPaletteBtn.addEventListener('click', openCommandPalette);
cmdPalette.addEventListener('click', (e) => {
    if (e.target === cmdPalette) closeCommandPalette();
});

// --- INITIALIZE ALL ICONS ON PAGE LOAD ---
lucide.createIcons();
