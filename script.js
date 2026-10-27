/* ====================================================
   DATA — tinggal tambah objek baru di sini
   ==================================================== */

// Taruh gambar sertifikat di assets/certs/
const certificates = [
  { img: "assets/certs/nasacomp.png",   title: "Certificate of Participating on Nasa Space APP Hackathon Competition" },
  { img: "assets/certs/pythonfunda.jpeg", title: "Certificate Of Completing Python Fundamental Workshop By PT Cendikia Digital Global" },
  { img: "assets/certs/uiuxtraining.png",   title: "Certificate Of Completing UI/UX Class By Bina Nusantara Computer Club" },
  { img: "assets/certs/activist.png",   title: "Certificate Of Contributing as An Activist at Bina Nusantara Computer Club " },
  { img: "assets/certs/icorisauthor.png",   title: "8th International Conference on Cybernetics and Intelligent Systems Author Certificate" },
  { img: "assets/certs/icorispresentation.png",   title: "8th International Conference on Cybernetics and Intelligent Systems Presentation Certificate" },
];

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const skills = [
  { name: "Python",       icon: `${D}/python/python-original.svg` },
  { name: "Git & Github", icon: `${D}/git/git-original.svg`, icon2: `${D}/github/github-original.svg`, invert2: true },
  { name: "C",            icon: `${D}/c/c-original.svg` },
  { name: "HTML",         icon: `${D}/html5/html5-original.svg` },
  { name: "CSS",          icon: `${D}/css3/css3-original.svg` },
  { name: "JavaScript",   icon: `${D}/javascript/javascript-original.svg` },
  { name: "PHP",          icon: `${D}/php/php-original.svg` },
  { name: "MySQL",        icon: `${D}/mysql/mysql-original.svg` },
  { name: "Machine Learning",     icon: "assets/machineLearning.jpg" },
];

// Urutan: terbaru di atas. Taruh gambar di assets/projects/
const projects = [
  {
    date: "October 2025",
    img: "assets/projects/nasaui.png",
    title: "Will it rain?",
    desc: "Collaborated with a team of 4 to brainstorm and rapidly prototype a website as a solution to analyze large volumes of historical weather data within 24 hour timeframe. Developed the website logic utilizing HTML, CSS, Java Script. Demonstrated agility and strong problem-solving skills to meet the competition's technical requirements.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/AlbertNC12/nasa_space_app_challenge_2025", linkText: "Project Link",
  },
  {
    date: "June 2026",
    img: "assets/projects/paper.png",
    title: "Analyzing the Impact of Cross-Model Synthetic Contamination on LLM Coding Logic and Security",
    desc: "A Research Paper that investigates the impact of cross-model synthetic contamination on the coding logic and security of Large Language Models (LLMs). The study explores how the presence of synthetic data from different models can influence the behavior and performance of LLMs, with a focus on coding tasks. The research aims to provide insights into the potential risks and challenges associated with cross-model contamination in LLMs, contributing to the understanding of their security implications.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    link: "https://www.researchgate.net/publication/415363550_Analyzing_the_Impact_of_Cross-Model_Synthetic_Contamination_on_LLM_Coding_Logic_and_Security", linkText: "Project Link",
  },
  {
    date: "August 2026",
    img: "assets/projects/lemonAid.png",
    title: "Lemon-Aid (Development in Progress)",
    desc: "An AI powered Website that can help users to carefully think before buying something. The website is designed to provide users with a platform to input their desired product and receive an AI-generated analysis of the product's price, quality, and impulsive buying Le Mon-Aid is an AI-powered financial wellness web app built to prevent impulsive spending among Gen Z and students. Integrated with Google Gemini, it calculates an impulse risk score (1 to 10) and provides personalized purchase recommendations. Features a Lemon Pause reflection timer (1h up to 1w), dynamic budget tracking with SVG data visualizations, and an automated savings tracker that tallies money saved from skipped purchases.potential. The website aims to assist users in making informed purchasing decisions by leveraging the capabilities of AI technology.",
    tech: ["HTML5", "CSS", "JavaScript","Node.js","Express.js","Google Gemini API","Vercel Deployment"],
    link: "https://lemon-aid-web-psi.vercel.app/", linkText: "Project Link",
  },
 {
    date: "October 2026",
    img: "assets/projects/kostips.png",
    title: "KosTips (Development in Progress)",
    desc: "A Forum Website that can help users to share their tips and tricks about Kos. The website is designed for users to easily find and share information about Kos, such as tips for finding the best Kos, tips for living in a Kos, and tips for managing Kos expenses.",
    tech: ["HTML5", "CSS", "PHP"],
    link: "#", linkText: "Project Link",
  },
];

const CV_URL = "assets/cv.pdf";

/* ====================================================
   RENDER
   ==================================================== */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Sertifikat
const track = $("#sertifTrack");
track.innerHTML = certificates.map((c, i) => `
  <article class="sertif__item">
    <div class="sertif__img" data-i="${i}" tabindex="0" role="button" aria-label="Perbesar sertifikat">
      <img src="${esc(c.img)}" alt="${esc(c.title)}" loading="lazy" draggable="false">
    </div>
    <p>${esc(c.title)}</p>
  </article>`).join("");

// Software skill
$("#skillList").innerHTML = skills.map(s => `
  <li>
    <span style="display:flex;gap:8px">
      <img src="${s.icon}" alt="" loading="lazy">
      ${s.icon2 ? `<img class="${s.invert2 ? "invert" : ""}" src="${s.icon2}" alt="" loading="lazy">` : ""}
    </span>
    ${esc(s.name)}
  </li>`).join("");

// Timeline project
$("#timeline").innerHTML = projects.map(p => `
  <li class="tl__item">
    <div>
      <time class="tl__date">${esc(p.date)}</time>
      <div class="tl__img"><img src="${esc(p.img)}" alt="${esc(p.title)}" loading="lazy" onerror="this.remove()"></div>
    </div>
    <div class="tl__body">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="chips">${p.tech.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      <a class="tl__link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkText || "Project Link")}</a>
    </div>
  </li>`).join("");

// Tombol CV
$("#cvBtn").addEventListener("click", () => window.open(CV_URL, "_blank", "noopener"));

/* ====================================================
   SLIDER SERTIFIKAT (drag + tombol panah)
   ==================================================== */
let down = false, startX = 0, startScroll = 0, moved = false;
track.addEventListener("pointerdown", e => {
  if (e.pointerType === "touch") return; // sentuh pakai scroll native
  down = true; moved = false; startX = e.clientX; startScroll = track.scrollLeft;
});
window.addEventListener("pointermove", e => {
  if (!down) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 5) { moved = true; track.classList.add("dragging"); }
  track.scrollLeft = startScroll - dx;
});
window.addEventListener("pointerup", () => {
  if (!down) return;
  down = false; track.classList.remove("dragging");
});

const step = () => track.clientWidth * 0.8;
$(".sertif__arrow--prev").onclick = () => track.scrollBy({ left: -step(), behavior: "smooth" });
$(".sertif__arrow--next").onclick = () => track.scrollBy({ left: step(), behavior: "smooth" });

/* ====================================================
   LIGHTBOX
   ==================================================== */
const lb = $("#lightbox"), lbImg = $("#lightboxImg"), lbCap = $("#lightboxCap");
let current = 0;

function show(i) {
  current = (i + certificates.length) % certificates.length;
  lbImg.src = certificates[current].img;
  lbImg.alt = lbCap.textContent = certificates[current].title;
}
function openLb(i) { show(i); lb.hidden = false; document.body.style.overflow = "hidden"; }
function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }

track.addEventListener("click", e => {
  const box = e.target.closest(".sertif__img");
  if (box && !moved) openLb(+box.dataset.i);
});
track.addEventListener("keydown", e => {
  const box = e.target.closest(".sertif__img");
  if (box && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openLb(+box.dataset.i); }
});
$(".lightbox__close").onclick = closeLb;
$(".lightbox__nav--prev").onclick = () => show(current - 1);
$(".lightbox__nav--next").onclick = () => show(current + 1);
lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") show(current - 1);
  if (e.key === "ArrowRight") show(current + 1);
});

/* ====================================================
   NAVBAR — penanda section aktif
   ==================================================== */
const links = [...document.querySelectorAll(".nav__link")];
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => io.observe(s));
