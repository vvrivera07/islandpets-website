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
