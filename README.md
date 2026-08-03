# islandpets-website
[Uploading admin.html…]()
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Island Pets Admin</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="section">
    <div class="section-heading">
      <p class="eyebrow">Private dashboard</p>
      <h2>Island Pets Admin</h2>
      <p>This starter dashboard becomes active after Supabase authentication is connected.</p>
    </div>

    <section class="booking-form">
      <h3>Default weekly availability</h3>
      <p>Monday–Friday: 5:30 PM and 6:30 PM</p>
      <p>Saturday: 1:00 PM, 3:00 PM and 6:00 PM</p>
      <p>Sunday: unavailable</p>
      <hr>
      <h3>Planned admin controls</h3>
      <p>Edit recurring hours, block dates, review requests, approve or decline bookings, save private quotes and contact clients by phone or text.</p>
    </section>
  </main>
</body>
</html>

// Paste your Supabase project values here after setup.
window.ISLANDPETS_CONFIG = {
  supabaseUrl: "PASTE_SUPABASE_URL_HERE",
  supabaseAnonKey: "PASTE_SUPABASE_ANON_KEY_HERE"
};

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Island Pets Grooming & Hotel | San Juan, Puerto Rico</title>
  <meta name="description" content="Professional grooming and cage-free pet hotel booking requests in San Juan, Puerto Rico.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Island Pets home">
      <img src="assets/islandpets-logo.png" alt="Island Pets Grooming & Hotel logo">
    </a>
    <div class="header-actions"><button id="langToggle" class="lang-toggle" type="button">ES</button><a class="text-link" href="#booking" data-en="Book now" data-es="Reservar">Book now</a></div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow" data-en="San Juan, Puerto Rico" data-es="San Juan, Puerto Rico">San Juan, Puerto Rico</p>
        <h1 data-en="A Touch of Paradise for Every Pet." data-es="Un Toque de Paraíso para Cada Mascota.">A Touch of Paradise for Every Pet.</h1>
        <p class="lead" data-en="Expert grooming and loving, home-like pet care designed around your pet’s comfort." data-es="Grooming profesional y cuidado amoroso en un ambiente hogareño, pensado para la comodidad de tu mascota.">Expert grooming and loving, home-like pet care designed around your pet’s comfort.</p>
        <a class="button primary" href="#booking" data-en="Request an appointment" data-es="Solicitar cita">Request an appointment</a>
      </div>
      <div class="hero-card">
        <p class="small-title" data-en="Island Pets promise" data-es="La promesa de Island Pets">Island Pets promise</p>
        <h2 data-en="Love. Care. Freedom." data-es="Amor. Cuidado. Libertad.">Love. Care. Freedom.</h2>
        <p data-en="Personalized attention, stress-conscious grooming and cage-free stays." data-es="Atención personalizada, grooming consciente del estrés y estadías libres de jaulas.">Personalized attention, stress-conscious grooming and cage-free stays.</p>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow" data-en="Services" data-es="Servicios">Services</p>
        <h2 data-en="Simple care, tailored to every pet." data-es="Cuidado personalizado para cada mascota.">Simple care, tailored to every pet.</h2>
      </div>
      <div class="service-grid">
        <article><h3>Breed-specific haircut</h3></article>
        <article><h3>Sanitary area trim</h3></article>
        <article><h3>Nail trim</h3></article>
        <article><h3>Ear cleaning</h3></article>
        <article><h3>De-shedding</h3></article>
        <article><h3>Bath and drying</h3></article>
        <article><h3>Pet hotel stay</h3></article>
      </div>
      <p class="note">Pricing is provided after Jessica reviews the pet’s breed, coat, needs and requested service.</p>
    </section>

    <section class="section cage-free">
      <p class="eyebrow" data-en="Cage-free philosophy" data-es="Filosofía libre de jaulas">Cage-free philosophy</p>
      <h2 data-en="We want every stay to feel like home." data-es="Queremos que cada estadía se sienta como en casa.">We want every stay to feel like home.</h2>
      <p data-en="Your pet is more than a guest—they’re family. Hotel requests remain pending until Jessica personally reviews and confirms them." data-es="Tu mascota es más que un huésped: es familia. Las solicitudes de hotel permanecen pendientes hasta que Jessica las revise y confirme personalmente.">Your pet is more than a guest—they’re family. Hotel requests remain pending until Jessica personally reviews and confirms them.</p>
    </section>

    <section class="section booking-section" id="booking">
      <div class="section-heading">
        <p class="eyebrow" data-en="Fast booking request" data-es="Solicitud rápida de cita">Fast booking request</p>
        <h2 data-en="Request your preferred appointment." data-es="Solicita tu cita preferida.">Request your preferred appointment.</h2>
        <p data-en="Complete the form in about one minute. Jessica will confirm the appointment and send the service quote by text or phone." data-es="Completa el formulario en aproximadamente un minuto. Jessica confirmará la cita y enviará la cotización por mensaje de texto o llamada.">Complete the form in about one minute. Jessica will confirm the appointment and send the service quote by text or phone.</p>
      </div>

      <form id="bookingForm" class="booking-form">
        <label>
          Service
          <select id="service" required>
            <option value="">Select a service</option>
            <option>Full grooming</option>
            <option>Bath and drying</option>
            <option>Breed-specific haircut</option>
            <option>Sanitary area trim</option>
            <option>Nail trim</option>
            <option>Ear cleaning</option>
            <option>De-shedding</option>
            <option>Pet hotel stay</option>
            <option>Other</option>
          </select>
        </label>

        <div class="two-columns">
          <label>
            Preferred date
            <input id="date" type="date" required>
          </label>
          <label>
            Available time
            <select id="time" required disabled>
              <option value="">Choose a date first</option>
            </select>
          </label>
        </div>

        <div class="two-columns">
          <label>
            Pet name
            <input id="petName" type="text" autocomplete="off" required>
          </label>
          <label>
            Breed
            <input id="breed" type="text" autocomplete="off" required>
          </label>
        </div>

        <label>
          Notes or special needs
          <textarea id="notes" rows="3" placeholder="Coat condition, temperament, medication, hotel dates or anything Jessica should know"></textarea>
        </label>

        <div class="two-columns">
          <label>
            Owner full name
            <input id="ownerName" type="text" autocomplete="name" required>
          </label>
          <label>
            Phone number
            <input id="phone" type="tel" autocomplete="tel" required>
          </label>
        </div>

        <label class="checkbox">
          <input id="consent" type="checkbox" required>
          <span>I understand this is a booking request and remains pending until Jessica confirms it.</span>
        </label>

        <button class="button primary" type="submit">Submit booking request</button>
        <p id="formMessage" class="form-message" role="status"></p>
      </form>
    </section>
  </main>

  <footer>
    <img src="assets/islandpets-logo.png" alt="" aria-hidden="true">
    <div>
      <strong>Island Pets Grooming & Hotel</strong>
      <p>San Juan, Puerto Rico 00926</p><p data-en="Business hours: 9:00 AM–6:00 PM" data-es="Horario: 9:00 AM–6:00 PM">Business hours: 9:00 AM–6:00 PM</p>
      <p><a href="tel:+17877172278">(787) 717-2278</a> · <a href="https://instagram.com/islandpets_" target="_blank" rel="noopener">@islandpets_</a></p>
    </div>
  </footer>

  <script src="config.js"></script>
  <script src="script.js"></script>
</body>
</html>

# Island Pets Booking Website

## What is included
- Mobile-first bilingual Island Pets landing page
- Fast booking-request form
- No pricing displayed
- Current appointment schedule:
  - Monday–Friday: 5:30 PM and 6:30 PM
  - Saturday: 1:00 PM, 3:00 PM and 6:00 PM
  - Sunday: unavailable
- Owner fields: full name and phone only
- Supabase-ready booking database
- Starter admin page

## Important
The website works visually immediately, but real booking submissions require a free Supabase project.

## Setup order
1. Upload all files to your GitHub repository.
2. Create a Supabase project.
3. Run `supabase-setup.sql` in the Supabase SQL Editor.
4. Copy the Supabase Project URL and anon public key into `config.js`.
5. Import the GitHub repository into Vercel and deploy.

## Files
- `index.html`
- `style.css`
- `script.js`
- `config.js`
- `admin.html`
- `supabase-setup.sql`
- `assets/islandpets-logo.png`

## Business details
- Owner: Jessica Vargas
- Phone: (787) 717-2278
- Instagram: @islandpets_
- Email: IslandPetsGroomingPR@gmail.com
- Address: San Juan, Puerto Rico 00926
- Business hours: 9:00 AM–6:00 PM

const defaultAvailability = {
  1: ["5:30 PM", "6:30 PM"],
  2: ["5:30 PM", "6:30 PM"],
  3: ["5:30 PM", "6:30 PM"],
  4: ["5:30 PM", "6:30 PM"],
  5: ["5:30 PM", "6:30 PM"],
  6: ["1:00 PM", "3:00 PM", "6:00 PM"],
  0: []
};

const dateInput = document.getElementById("date");
const timeSelect = document.getElementById("time");
const form = document.getElementById("bookingForm");
const message = document.getElementById("formMessage");

const today = new Date();
today.setHours(0,0,0,0);
dateInput.min = today.toISOString().split("T")[0];

dateInput.addEventListener("change", async () => {
  timeSelect.disabled = true;
  timeSelect.innerHTML = '<option value="">Loading availability...</option>';

  const date = new Date(`${dateInput.value}T12:00:00`);
  const day = date.getDay();

  let slots = defaultAvailability[day] || [];

  // Later, this can be replaced by live availability loaded from Supabase.
  timeSelect.innerHTML = slots.length
    ? '<option value="">Select a time</option>' + slots.map(t => `<option>${t}</option>`).join("")
    : '<option value="">No appointments available</option>';
  timeSelect.disabled = slots.length === 0;
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  message.textContent = "Submitting your request...";

  const booking = {
    service: document.getElementById("service").value,
    preferred_date: dateInput.value,
    preferred_time: timeSelect.value,
    pet_name: document.getElementById("petName").value.trim(),
    breed: document.getElementById("breed").value.trim(),
    notes: document.getElementById("notes").value.trim(),
    owner_name: document.getElementById("ownerName").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    status: "pending"
  };

  const { supabaseUrl, supabaseAnonKey } = window.ISLANDPETS_CONFIG || {};
  const configured = supabaseUrl && supabaseAnonKey &&
    !supabaseUrl.includes("PASTE_") && !supabaseAnonKey.includes("PASTE_");

  if (!configured) {
    console.log("Demo booking:", booking);
    message.textContent = "The website design is working. Connect Supabase to begin receiving real booking requests.";
    return;
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/bookings`, {
      method: "POST",
      headers: {
        "apikey": supabaseAnonKey,
        "Authorization": `Bearer ${supabaseAnonKey}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(booking)
    });

    if (!response.ok) throw new Error("Could not submit booking");

    form.reset();
    timeSelect.disabled = true;
    timeSelect.innerHTML = '<option value="">Choose a date first</option>';
    message.textContent = "Your request was received. Jessica will contact you to confirm availability and provide the quote.";
  } catch (error) {
    console.error(error);
    message.textContent = "We could not submit the request. Please text Jessica at (787) 717-2278.";
  }
});


const langToggle = document.getElementById("langToggle");
let currentLang = "en";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en][data-es]").forEach((el) => {
    el.textContent = el.dataset[lang];
  });
  langToggle.textContent = lang === "en" ? "ES" : "EN";
}

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "es" : "en");
});

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Montserrat:wght@400;500;600&display=swap');

:root{
  --teal:#0b4a46;
  --gold:#c69a4a;
  --cream:#f7f0e6;
  --beige:#ede0d0;
  --ink:#183a37;
  --white:#fff;
  --shadow:0 20px 60px rgba(24,58,55,.10);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--cream);color:var(--ink);font-family:Montserrat,Arial,sans-serif;line-height:1.6}
img{max-width:100%;display:block}
a{color:inherit}
.site-header{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;padding:14px clamp(20px,5vw,70px);background:rgba(247,240,230,.94);backdrop-filter:blur(10px);border-bottom:1px solid rgba(198,154,74,.25)}
.brand img{width:84px;height:84px;object-fit:contain;border-radius:50%}
.text-link{text-decoration:none;font-weight:600;border-bottom:1px solid var(--gold)}
main{overflow:hidden}
.hero{min-height:72vh;padding:clamp(70px,10vw,130px) clamp(22px,7vw,100px);display:grid;grid-template-columns:1.25fr .75fr;gap:50px;align-items:center;background:
radial-gradient(circle at 85% 15%,rgba(198,154,74,.13),transparent 28%),
linear-gradient(135deg,#fbf7f1,var(--cream))}
.hero h1,.section h2{font-family:"Cormorant Garamond",serif;font-weight:600;line-height:1}
.hero h1{font-size:clamp(56px,8vw,110px);max-width:900px;margin:.15em 0}
.lead{max-width:650px;font-size:1.08rem}
.eyebrow{letter-spacing:.22em;text-transform:uppercase;font-size:.78rem;font-weight:600;color:var(--gold)}
.button{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;padding:15px 24px;text-decoration:none;font:inherit;font-weight:600;cursor:pointer}
.primary{background:var(--teal);color:var(--white);box-shadow:var(--shadow)}
.hero-card{background:rgba(255,255,255,.55);border:1px solid rgba(198,154,74,.35);padding:35px;border-radius:28px;box-shadow:var(--shadow)}
.hero-card h2{font-size:clamp(38px,4vw,60px);margin:.2em 0}
.small-title{text-transform:uppercase;letter-spacing:.16em;font-size:.78rem}
.section{padding:clamp(70px,9vw,120px) clamp(22px,7vw,100px)}
.section-heading{max-width:800px;margin-bottom:42px}
.section h2{font-size:clamp(46px,6vw,76px);margin:.15em 0}
.service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.service-grid article{background:rgba(255,255,255,.55);border:1px solid rgba(198,154,74,.28);border-radius:18px;padding:24px}
.service-grid h3{margin:0;font-size:1rem;font-weight:500}
.note{margin-top:26px;max-width:800px;font-size:.92rem}
.cage-free{background:var(--teal);color:var(--cream);text-align:center}
.cage-free h2{max-width:900px;margin:.2em auto}
.cage-free p:last-child{max-width:760px;margin:0 auto}
.booking-section{background:#fbf7f1}
.booking-form{max-width:850px;background:var(--white);padding:clamp(24px,5vw,48px);border-radius:28px;box-shadow:var(--shadow);border:1px solid rgba(198,154,74,.2)}
label{display:grid;gap:8px;font-size:.88rem;font-weight:600;margin-bottom:20px}
input,select,textarea{width:100%;border:1px solid #d9cbbb;background:#fffdf9;border-radius:12px;padding:14px 15px;font:inherit;color:var(--ink)}
input:focus,select:focus,textarea:focus{outline:2px solid rgba(198,154,74,.45);border-color:var(--gold)}
.two-columns{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.checkbox{display:flex;grid-template-columns:none;align-items:flex-start;gap:10px;font-weight:400}
.checkbox input{width:auto;margin-top:5px}
.form-message{min-height:1.5em;font-weight:600}
footer{display:flex;gap:20px;align-items:center;padding:35px clamp(22px,7vw,100px);background:#082f2c;color:var(--cream)}
footer img{width:82px;height:82px;border-radius:50%}
footer p{margin:3px 0}
@media (max-width:780px){
  .hero{grid-template-columns:1fr;min-height:auto}
  .hero-card{margin-top:10px}
  .service-grid{grid-template-columns:1fr}
  .two-columns{grid-template-columns:1fr}
  .site-header{padding:10px 18px}
  .brand img{width:64px;height:64px}
  footer{align-items:flex-start}
}

.header-actions{display:flex;align-items:center;gap:14px}
.lang-toggle{border:1px solid rgba(198,154,74,.55);background:transparent;color:var(--ink);border-radius:999px;padding:8px 12px;font:inherit;font-weight:600;cursor:pointer}
