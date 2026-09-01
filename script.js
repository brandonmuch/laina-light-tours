/* ============================================================
   SITE CONFIG — single source of truth for contact details.
   TODO: replace the two placeholder values below with the real
   business number/email. Nothing else needs to change; every
   WhatsApp link and contact row on the site reads from here.
   ============================================================ */
const SITE = {
  // International format, digits only, no + or spaces.
  whatsapp: '263771234567',            // ← PLACEHOLDER
  email:    'hello@lainalighttours.com', // ← PLACEHOLDER
  get phonePretty() {
    const d = this.whatsapp;
    return '+' + d.slice(0,3) + ' ' + d.slice(3,5) + ' ' + d.slice(5,8) + ' ' + d.slice(8);
  }
};

function waLink(message) {
  return 'https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent(message);
}

/* Rewrite every wa.me / mailto / tel link from SITE so the
   placeholders only ever live in one place. */
function applySiteContact() {
  document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
    const q = a.href.split('?text=')[1] || '';
    a.href = 'https://wa.me/' + SITE.whatsapp + (q ? '?text=' + q : '');
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.href = 'tel:+' + SITE.whatsapp;
    if (a.dataset.autofill !== 'off') a.textContent = SITE.phonePretty;
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
    a.href = 'mailto:' + SITE.email;
    if (a.dataset.autofill !== 'off') a.textContent = SITE.email;
  });
}
document.addEventListener('DOMContentLoaded', applySiteContact);

const activities = [
  ['13-Min Helicopter Flight','Flights','$204','12–13 min','See the Falls from above on a scenic figure-eight flight.','Laina-Light-Tours-Activities-Images-Copilot/activities/13-min-helicopter-flight-01.jpeg'],
  ['Explore the Zambezi Flight','Flights','$249','22 min','Follow the Falls, Batoka Gorge and river islands from the air. $50 government/fuel surcharge charged separately.','Laina-Light-Tours-Activities-Images-Copilot/activities/explore-the-zambezi-flight.jpeg'],
  ['15-Min Microlight Flight – Zambia','Flights','$221','15 min','A quiet, open-air view across the Zambezi landscape.','Laina-Light-Tours-Activities-Images-Copilot/activities/15-min-microlight-flight-zambia.jpeg'],
  ['Full Day Chobe','Safari','$175','10–11 hrs','A border-crossing day of river cruising, game drives and lunch.','More Images/Chobe Game Drive.avif'],
  ['Game Drive','Safari','$102','3–3.5 hrs','Track wildlife through Zambezi National Park with a local guide.','Laina-Light-Tours-Activities-Images-Copilot/activities/game-drive-4x4.jpeg'],
  ['Elephant Interaction','Safari','$180','—','An up-close conservation experience with gentle giants.','Laina-Light-Tours-Activities-Images-Copilot/activities/elephant-interaction.jpeg'],
  ['Riversong Sunset Cruise','Cruises','$89','2–2.5 hrs','Premium drinks, golden light and the river doing what it does best.','Laina-Light-Tours-Activities-Images-Copilot/activities/riversong-sunset-cruise.jpeg'],
  ['Zambezi Sunset Cruise','Cruises','$64','2–2.5 hrs','A relaxed sunset and wildlife cruise with local drinks and snacks.','Laina-Light-Tours-Activities-Images-Copilot/activities/zambezi-sunset-cruise.jpeg'],
  ['Dinner Cruise','Cruises','$128','Evening','Drift into the evening with dinner on the Zambezi.','More Images/Sunset Cruise.avif'],
  ['Big Air Experience','Adrenaline','$280','45–60 min','Bungee, swing and slide: the whole bridge-day story in one.','More Images/Big Air Experience.avif'],
  ['Bridge Swing – Tandem','Adrenaline','$201','15–20 min','A giant pendulum swing over the Batoka Gorge.','Laina-Light-Tours-Activities-Images-Copilot/activities/bridge-swing-tandem.webp'],
  ['White Water Rafting – Day Trip','Water','$186','6 hrs','Grade 5 rapids and a full day in the Batoka Gorge.','Laina-Light-Tours-Activities-Images-Copilot/activities/white-water-rafting-day-trip.jpeg'],
  ['Jet Boat Adventure','Water','$153','2.5 hrs','Fast water, deep gorge and a 465hp jet boat.','Laina-Light-Tours-Activities-Images-Copilot/activities/jet-boat-adventure.jpeg'],
  ['Canopy Tour','Water','$86','—','Glide through the forest canopy above the Zambezi.','More Images/Canopy Tour.jpg'],
  ['Victoria Falls Guided Rainforest Tour','Culture','$88','2–2.5 hrs','Walk the rainforest viewpoints with an expert guide.','Laina-Light-Tours-Activities-Images-Copilot/activities/victoria-falls-guided-rainforest-tour.jpeg'],
  ['Boma Dinner & Drum Show','Culture','$80','Evening','A generous, rhythmic night of food, stories and performance.','More Images/Boma Dinner.jpg'],
  ['Livingstone Island Lunch – Zambia','Cruises','$240','—','Lunch at the edge of the Zambezi, on Livingstone Island.','More Images/Livingstone Island lunch.webp'],
  ['Rhino Safari – Zambia','Safari','$125','—','A conservation-led safari in Mosi-oa-Tunya National Park.','More Images/Rhino Safari.avif'],
  ['25-Min Helicopter Flight','Flights','$363','25 min','Falls, Gorge and Zambezi National Park loop.','Laina-Light-Tours-Activities-Images-Copilot/activities/25-min-helicopter-flight.jpg'],
  ['Flight of Angels (Helicopter)','Flights','$204','12–13 min','Figure-eight flight over the Falls.','Laina-Light-Tours-Activities-Images-Copilot/activities/flight-of-angels-helicopter-01.png'],
  ['Bridge Slide (Zipline)','Adrenaline','$58','15–20 min','Cross-border zipline between Zambia and Zimbabwe.','Laina-Light-Tours-Activities-Images-Copilot/activities/bridge-slide-zipline.jpeg'],
  ['Bridge Tour','Adrenaline','$76','2 hrs','Catwalk tour beneath Victoria Falls Bridge.','Laina-Light-Tours-Activities-Images-Copilot/activities/bridge-tour.jpeg'],
  ['Bungee Jump','Adrenaline','$194','15–20 min','111m jump from Victoria Falls Bridge.','Laina-Light-Tours-Activities-Images-Copilot/activities/bungee-jump.jpeg'],
  ['Riversong Early Morning Sunrise Cruise','Cruises','$70','2–2.5 hrs','Sunrise cruise with tea, coffee, juice and muffins.','Laina-Light-Tours-Activities-Images-Copilot/activities/riversong-sunset-cruise.jpeg'],
  ['Lunch Cruise','Cruises','$122','—','A Zambezi lunch cruise.','Laina-Light-Tours-Activities-Images-Copilot/activities/lunch-cruise.jpeg'],
  ['Simunye: The Spirit of Africa (Theatre Show)','Culture','$49 adult / $25 child','1 hr','Award-winning African theatre show; dinner add-on $15–25.','Laina-Light-Tours-Activities-Images-Copilot/activities/simunye-the-spirit-of-africa.jpeg'],
  ['Livingstone Island Breakfast – Zambia','Cruises','$180','—','Breakfast on Livingstone Island.','More Images/Living stone island breakfast.avif'],
  ['Livingstone Island Hi Tea – Zambia','Cruises','$220','—','Hi tea on Livingstone Island.','More Images/Livingstone high tea.jpg'],
  ['Cheetah Walk','Safari','$173','—','A guided cheetah walk experience.','More Images/Cheetah walk.jpg'],
  ['Elephant Ride','Safari','$173','—','A guided elephant ride experience.','Laina-Light-Tours-Activities-Images-Copilot/activities/elephant-interaction.jpeg'],
  ['Full Day Hwange','Safari','$400','2–5 days','Big Five game drives in Zimbabwe\'s largest reserve.','Laina-Light-Tours-Activities-Images-Copilot/activities/game-drive-4x4.jpeg'],
  ['Game Park Private Reserve','Safari','$150','—','A private reserve safari experience.','Laina-Light-Tours-Activities-Images-Copilot/activities/game-drive.jpeg'],
  ['Lion Walk','Safari','$173','2 hrs','Guided walking safari in Zambezi National Park.','More Images/Lion walk.jpg'],
  ['Night Game Drive + Dinner','Safari','$195','3 hrs','Spotlight night drive and three-course bush dinner.','Laina-Light-Tours-Activities-Images-Copilot/activities/night-game-drive-dinner.jpeg'],
  ['Through the Eyes of an Elephant','Safari','$135','3 hrs','Ethical elephant encounter and guided walk.','Laina-Light-Tours-Activities-Images-Copilot/activities/elephant-interaction.jpeg'],
  ['Crocodile Farm','Culture','$40','—','A visit to a local crocodile farm.','More Images/Crocodile Farm.avif'],
  ['Meet the People Village Tour','Culture','$70','—','Local village and community experience.','Laina-Light-Tours-Activities-Images-Copilot/activities/meet-the-people-village-tour.jpeg'],
  ['Quad Bike','Adrenaline','$75','—','Explore the area by quad bike.','More Images/Quad bikes.jpg'],
  ['Airport Transfer (one-way)','Transfers','$35','30–45 min','$35 per vehicle for up to 4 people.','Laina-Light-Tours-Activities-Images-Copilot/activities/airport-transfer.jpeg'],
  ['Flying Fox','Water','$76','—','Fly above the gorge on a high-speed zipline.','More Images/Flying fox victoria falls.webp'],
  ['Gorge Swing','Water','$140','—','A gorge swing above the Batoka Gorge.','Laina-Light-Tours-Activities-Images-Copilot/activities/bridge-swing-tandem.webp'],
  ['Tandem Gorge Swing','Water','$207','—','A tandem swing over the Batoka Gorge.','Laina-Light-Tours-Activities-Images-Copilot/activities/bridge-swing-tandem.webp'],
  ['Tandem Zip-line','Water','$168','—','A tandem zip-line adventure.','Laina-Light-Tours-Activities-Images-Copilot/activities/bridge-slide-zipline.jpeg'],
  ['White Water Rafting – 1-Day & Overnight','Water','$299','1 day + overnight camp','Rafting with overnight camping; seasonal.','Laina-Light-Tours-Activities-Images-Copilot/activities/white-water-rafting-day-trip.jpeg'],
  ['White Water Rafting – 2.5-Day Expedition','Water','$649','2.5 days','Multi-day rafting expedition; seasonal.','Laina-Light-Tours-Activities-Images-Copilot/activities/white-water-rafting-day-trip.jpeg'],
  ['Zipline','Water','$114','—','A high-speed zipline across the gorge.','Laina-Light-Tours-Activities-Images-Copilot/activities/bridge-slide-zipline.jpeg']
];

const activityDetails = {
  '13-Min Helicopter Flight':'A scenic figure-eight flight above Victoria Falls. Park fees included.',
  'Explore the Zambezi Flight':'Aerial views of the Falls, Batoka Gorge rapids and river islands. $50 government/fuel surcharge charged separately.',
  '15-Min Microlight Flight – Zambia':'A quiet, open-air flight across the Zambezi landscape. Park fees included.',
  '25-Min Helicopter Flight':'A longer Falls, Gorge and Zambezi National Park loop. Park fees included; government/fuel surcharge charged separately.',
  'Flight of Angels (Helicopter)':'A Bell 206 figure-eight flight over Victoria Falls. Park fees included; government/fuel surcharge charged separately.',
  'Full Day Chobe':'A cross-border day of river cruising, game drives and buffet lunch. Park fees included; children under 12 receive 25% off.',
  'Game Drive':'A 4x4 guided safari drive through Zambezi National Park. Park fees included.',
  'Elephant Interaction':'An up-close conservation experience with gentle giants. Park fees included.',
  'Riversong Early Morning Sunrise Cruise':'A sunrise cruise with tea, coffee, juice and muffins.',
  'Riversong Sunset Cruise':'A sunset cruise with hors d\u2019oeuvres and premium drinks and cocktails.',
  'Zambezi Sunset Cruise':'A relaxed sunset and wildlife cruise with unlimited local drinks and snacks. Park fees included.',
  'Dinner Cruise':'Drift into the evening with dinner on the Zambezi. Park fees included.',
  'Lunch Cruise':'Enjoy lunch while cruising the Zambezi. Park fees included.',
  'Big Air Experience':'All three bridge activities bundled into one day: bungee, swing and slide.',
  'Bridge Slide (Zipline)':'A cross-border zipline between Zambia and Zimbabwe.',
  'Bridge Swing \u2013 Tandem':'A giant pendulum swing over Batoka Gorge.',
  'Bridge Tour':'A catwalk tour beneath Victoria Falls Bridge with a history and engineering guide.',
  'Bungee Jump':'A 111-metre jump from Victoria Falls Bridge.',
  'White Water Rafting \u2013 1-Day & Overnight':'Raft the Zambezi with overnight camping on the river beach. Seasonal departure.',
  'White Water Rafting \u2013 2.5-Day Expedition':'A multi-day rafting expedition through Batoka Gorge. Seasonal departure.',
  'White Water Rafting \u2013 Day Trip':'Grade 5 rapids, a full day in Batoka Gorge and the steep gorge exit hike. Park fees included.',
  'Jet Boat Adventure':'A 465hp jetboat into Boiling Pot and Batoka Gorge rapids. Pickup included. Park fees included.',
  'Canopy Tour':'Glide through the forest canopy above the Zambezi. Park fees included.',
  'Flying Fox':'Fly above the gorge on a high-speed zipline. Park fees included.',
  'Gorge Swing':'A thrilling gorge swing above Batoka Gorge. Park fees included.',
  'Tandem Gorge Swing':'A tandem swing over Batoka Gorge. Park fees included.',
  'Tandem Zip-line':'A tandem zip-line adventure across the gorge. Park fees included.',
  'Victoria Falls Guided Rainforest Tour':'A guided walking tour of the Falls and rainforest with an expert guide. Park fees included.',
  'Simunye: The Spirit of Africa (Theatre Show)':'An award-winning African theatre show. Optional dinner add-on available.',
  'Boma Dinner & Drum Show':'A generous, rhythmic night of food, stories and performance.',
  'Livingstone Island Breakfast \u2013 Zambia':'Breakfast on Livingstone Island in the Zambezi.',
  'Livingstone Island Hi Tea \u2013 Zambia':'Hi tea on Livingstone Island in the Zambezi.',
  'Livingstone Island Lunch \u2013 Zambia':'Lunch and swimming at the edge of the Falls, on Livingstone Island.',
  'Rhino Safari \u2013 Zambia':'A conservation-led safari in Mosi-oa-Tunya National Park.',
  'Cheetah Walk':'A guided cheetah walk experience.',
  'Elephant Ride':'A guided elephant riding experience.',
  'Full Day Hwange':'Big Five game drives in Zimbabwe\u2019s largest reserve, known for its elephant herds.',
  'Game Park Private Reserve':'A private reserve safari experience.',
  'Lion Walk':'A guided walking safari in Zambezi National Park.',
  'Night Game Drive + Dinner':'A spotlight night drive followed by a three-course bush dinner at Jafuta.',
  'Through the Eyes of an Elephant':'An ethical elephant encounter and guided walk supporting conservation.',
  'Crocodile Farm':'A visit to a local crocodile farm.',
  'Meet the People Village Tour':'A local village and community experience.',
  'Quad Bike':'Explore the area by quad bike.',
  'Airport Transfer (one-way)':'A comfortable airport-to-town transfer with a local driver. $35 per vehicle for up to 4 people.',
  'Zipline':'A high-speed zipline across the gorge.'
};


/* Child pricing. Only the entries the 2026 price list actually
   states — nothing inferred. Everything else shows one price and
   the enquiry confirms child rates. */
const childPricing = {
  'Simunye: The Spirit of Africa (Theatre Show)': { adult: '$49', child: '$25' },
  'Full Day Chobe':  { adult: '$175', note: 'Children under 12: 25% off' },
  'Airport Transfer (one-way)': { adult: '$35', note: 'Per vehicle, up to 4 people' }
};


/* One price, or an adult/child pair where the price list gives one. */
function renderPrice(a) {
  const c = childPricing[a[0]];
  if (c && c.child) {
    return `<div class="price-block">
      <div class="price-row"><strong>${c.adult}</strong><span>adult</span></div>
      <div class="price-row is-child"><strong>${c.child}</strong><span>child</span></div>
    </div>`;
  }
  if (c && c.note) {
    return `<div class="price-block">
      <div class="price-row"><strong>${a[2]}</strong></div>
      <div class="price-note">${c.note}</div>
    </div>`;
  }
  return `<div class="price-block"><div class="price-row"><strong>${a[2]}</strong><span>per person</span></div></div>`;
}


/* ── Per-activity schedule ────────────────────────────────────────
   Each selected experience can carry its own preferred date and
   time. Stored separately from the quantities so clearing one does
   not disturb the other. Shape: { "Bungee Jump": {date, time} }   */
function getSchedule() {
  try { return JSON.parse(localStorage.getItem('lainaSchedule') || '{}'); }
  catch { return {}; }
}
function setSchedule(obj) {
  localStorage.setItem('lainaSchedule', JSON.stringify(obj));
}
function setActivitySchedule(name, field, value) {
  const sc = getSchedule();
  sc[name] = sc[name] || {};
  sc[name][field] = value;
  if (!sc[name].date && !sc[name].time) delete sc[name];
  setSchedule(sc);
}

/* Human-readable date for the confirmation and the WhatsApp text. */
function prettyDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

/* Total across quantities, used by every cart counter on the site. */
function selectionTotal() {
  return Object.values(getSelections()).reduce((s, q) => s + q, 0);
}

/* ── Quantity-based localStorage helpers ─────────────────────────── */
function getSelections() {
  try {
    const raw = localStorage.getItem('lainaSelections');
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    // Migrate old array format → object format
    if (Array.isArray(parsed)) {
      const obj = {};
      parsed.forEach(name => { obj[name] = 1; });
      localStorage.setItem('lainaSelections', JSON.stringify(obj));
      return obj;
    }
    return parsed;
  } catch { return {}; }
}

function setSelections(obj) {
  localStorage.setItem('lainaSelections', JSON.stringify(obj));
  updateItineraryNav();
}

function updateItineraryNav() {
  const total = selectionTotal();

  document.querySelectorAll('.itinerary-nav-count').forEach(el => el.textContent = total);

  /* Every cart button on the site carries a live count badge and
     hides it at zero, so an empty cart never shows a "0". */
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = total;
    el.hidden = total === 0;
  });

  const homeCount = document.querySelector('#itinerary-count');
  if (homeCount) homeCount.textContent = total;

  /* Buttons that change wording once something is selected. */
  document.querySelectorAll('[data-cart-label]').forEach(el => {
    el.textContent = total === 0
      ? el.dataset.cartLabel
      : (el.dataset.cartLabelActive || el.dataset.cartLabel);
  });
}

/* ── Activity grid ───────────────────────────────────────────────── */
const grid     = document.querySelector('#activity-grid');
const search   = document.querySelector('#activity-search');
const category = document.querySelector('#category-filter');
const count    = document.querySelector('#result-count');

/* Forty-six cards in one wall is a lot to take in, so the catalogue
   is grouped by theme with a heading and a count for each. When a
   search term or a category filter is active the grouping is
   dropped and the matches are shown as one flat list, because at
   that point the visitor already knows what they are looking for. */
const CATEGORY_ORDER = ['Flights', 'Safari', 'Cruises', 'Adrenaline', 'Water', 'Culture', 'Transfers'];

const CATEGORY_BLURB = {
  Flights:    'See the full width of the Falls from the air.',
  Safari:     'Wildlife in Zambezi, Chobe and Hwange.',
  Cruises:    'The river at sunrise, sunset and after dark.',
  Adrenaline: 'The bridge, the gorge and the drop.',
  Water:      'In the rapids, over the gorge, through the canopy.',
  Culture:    'Food, performance and the communities around the Falls.',
  Transfers:  'Getting there, and back again.'
};

function activityCard(a, sels, i) {
  const qty = sels[a[0]] || 0;
  const activeClass = qty > 0 ? ' is-active' : '';
  const delay = Math.min(i, 9) * 55;
  return `<article class="activity-card" data-name="${a[0]}" data-category="${a[1]}" style="animation-delay:${delay}ms">
      <div class="activity-card-image">
        <img src="${a[5]}" alt="${a[0]}">
        <span class="activity-category">${a[1]}</span>
      </div>
      <div class="activity-details">
        <h3>${a[0]}</h3>
        <p>${a[4]}</p>
        <div class="activity-bottom">
          ${renderPrice(a)}
          <span class="activity-duration">${a[3]}</span>
          <div class="qty-control${activeClass}" data-name="${a[0]}">
            <button class="qty-btn qty-dec" aria-label="Remove one ${a[0]}" ${qty === 0 ? 'disabled' : ''}>\u2212</button>
            <span class="qty-val">${qty}</span>
            <button class="qty-btn qty-inc" aria-label="Add ${a[0]} to itinerary">+</button>
          </div>
        </div>
      </div>
    </article>`;
}

function renderActivities() {
  if (!grid) return;
  const term   = (search?.value || '').toLowerCase();
  const filter = category?.value || 'All categories';
  const sels   = getSelections();

  const visible = activities.filter(a =>
    (filter === 'All categories' || a[1] === filter) &&
    (a[0].toLowerCase().includes(term) || a[4].toLowerCase().includes(term))
  );
  count.textContent = visible.length;

  const grouped = !term && filter === 'All categories';

  if (!grouped) {
    grid.className = 'activity-grid';
    grid.innerHTML = visible.length
      ? visible.map((a, i) => activityCard(a, sels, i)).join('')
      : `<p class="no-results">Nothing matches that yet. Try a different word, or <button type="button" class="link-reset" id="clear-filters">clear the filters</button>.</p>`;
  } else {
    grid.className = 'activity-groups';
    const order = CATEGORY_ORDER.filter(c => visible.some(a => a[1] === c))
      .concat([...new Set(visible.map(a => a[1]))].filter(c => !CATEGORY_ORDER.includes(c)));

    grid.innerHTML = order.map(cat => {
      const items = visible.filter(a => a[1] === cat);
      return `<section class="activity-group" aria-labelledby="group-${cat}">
        <div class="group-head">
          <h3 id="group-${cat}">${cat}<span class="group-count">${items.length}</span></h3>
          <p>${CATEGORY_BLURB[cat] || ''}</p>
        </div>
        <div class="activity-grid">${items.map((a, i) => activityCard(a, sels, i)).join('')}</div>
      </section>`;
    }).join('');
  }

  const clear = document.querySelector('#clear-filters');
  if (clear) clear.addEventListener('click', () => {
    if (search) search.value = '';
    if (category) category.value = 'All categories';
    renderActivities();
  });

  if (window.applySquircles) window.applySquircles();

  // Wire up card click (open modal) and counter buttons
  grid.querySelectorAll('.activity-card').forEach(card => {
    const name = card.dataset.name;
    const activity = activities.find(a => a[0] === name);

    card.addEventListener('click', e => {
      if (!e.target.closest('.qty-control')) openModal(activity);
    });

    const control = card.querySelector('.qty-control');
    const valEl   = card.querySelector('.qty-val');
    const decBtn  = card.querySelector('.qty-dec');
    const incBtn  = card.querySelector('.qty-inc');

    incBtn.addEventListener('click', e => {
      e.stopPropagation();
      const s2 = getSelections();
      s2[name] = (s2[name] || 0) + 1;
      setSelections(s2);
      valEl.textContent = s2[name];
      decBtn.disabled = false;
      control.classList.add('is-active');
    });

    decBtn.addEventListener('click', e => {
      e.stopPropagation();
      const s2 = getSelections();
      s2[name] = Math.max(0, (s2[name] || 0) - 1);
      if (s2[name] === 0) {
        delete s2[name];
        control.classList.remove('is-active');
        decBtn.disabled = true;
      }
      setSelections(s2);
      valEl.textContent = s2[name] || 0;
    });
  });
}

/* ── Modal ───────────────────────────────────────────────────────── */
function openModal(a) {
  const modal = document.querySelector('#activity-modal');
  if (!modal || !a) return;
  document.querySelector('#modal-image').src = a[5];
  document.querySelector('#modal-image').alt = a[0];
  document.querySelector('#modal-category').textContent = a[1];
  document.querySelector('#modal-title').textContent = a[0];
  document.querySelector('#modal-description').textContent = activityDetails[a[0]] || a[4];
  document.querySelector('#modal-price').textContent = a[2];
  document.querySelector('#modal-duration').textContent = a[3];

  const addBtn = document.querySelector('#add-itinerary');
  const sels   = getSelections();
  const qty    = sels[a[0]] || 0;
  addBtn.textContent = qty > 0 ? `In itinerary (${qty}) \u2713` : 'Add to itinerary +';
  addBtn.onclick = () => {
    const sels = getSelections();
    sels[a[0]] = (sels[a[0]] || 0) + 1;
    setSelections(sels);
    addBtn.textContent = `In itinerary (${sels[a[0]]}) \u2713`;
    addBtn.classList.add('added');
    renderActivities();
  };

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.querySelector('#activity-modal');
  if (modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
}

/* ── Init activity grid ──────────────────────────────────────────── */
if (grid) {
  const params = new URLSearchParams(location.search);
  if (params.get('category')) category.value = params.get('category');
  renderActivities();
  search.addEventListener('input', renderActivities);
  category.addEventListener('change', renderActivities);
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.querySelector('#activity-modal').addEventListener('click', e => {
    if (e.target.id === 'activity-modal') closeModal();
  });
}

/* ── Booking form ────────────────────────────────────────────────── */
const booking = document.querySelector('#booking-form');

/* Maps the "I'm looking for" select onto real activity categories
   so the search actually filters the catalogue. */
const INTEREST_TO_CATEGORY = {
  'Any experience':        '',
  'Flights over the Falls':'Flights',
  'Wildlife & safari':     'Safari',
  'River cruises':         'Cruises',
  'Adrenaline':            'Adrenaline'
};

if (booking) booking.addEventListener('submit', e => {
  e.preventDefault();
  const date       = booking.querySelector('input[type="date"]')?.value || '';
  const interest   = booking.querySelector('select[name="type"]')?.value || '';
  const travellers = booking.querySelector('select[name="travellers"]')?.value || '';
  const mode       = booking.dataset.mode || 'activities';

  if (date) localStorage.setItem('lainaDates', JSON.stringify({ arrival: date }));
  if (travellers) localStorage.setItem('lainaTravellers', travellers);

  // "Ready-made packages" stays on the page and scrolls to them.
  if (mode === 'packages') {
    document.querySelector('#formal-packages')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const msg = document.querySelector('#booking-message');
    if (msg) msg.textContent = 'Here are our ready-made packages. Every one can be adjusted to your dates.';
    return;
  }

  // "Individual activities" carries the filter through to the catalogue.
  const params = new URLSearchParams();
  const cat = INTEREST_TO_CATEGORY[interest];
  if (cat)  params.set('category', cat);
  if (date) params.set('date', date);
  window.location.href = 'activities.html' + (params.toString() ? '?' + params : '');
});

/* ── Newsletter ──────────────────────────────────────────────────── */
document.querySelectorAll('.newsletter-form').forEach(form =>
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.innerHTML = '<p style="color:white;margin:15px 0;font-size:13px">You are on the list. See you out there.</p>';
  })
);

/* ── Mobile nav ──────────────────────────────────────────────────── */
document.querySelectorAll('.menu-toggle').forEach(btn =>
  btn.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    /* clear any inline styles left by the previous implementation */
    nav.removeAttribute('style');
  })
);

/* ── Scrolled header ─────────────────────────────────────────────── */
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const updateHeader = () => {
    const isScrolled = window.scrollY > 36;
    siteHeader.classList.toggle('scrolled', isScrolled);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

/* ── Reveal on scroll ────────────────────────────────────────────── */
const revealTargets = document.querySelectorAll(
  '.benefits-bar,.packages-section,.discover,.split-section,.quote-section,.customizer-section,.about-intro,.about-image,.about-values,.about-cta,.transfer-intro,.transfer-features,.routes-section,.transfers-cta,.itinerary-hero,.itinerary-builder,.catalog-cta'
);
if (revealTargets.length && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries =>
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.12 }
  );
  revealTargets.forEach(t => revealObserver.observe(t));
}

/* ── Booking tabs ────────────────────────────────────────────────── */
document.querySelectorAll('.search-tab').forEach(tab =>
  tab.addEventListener('click', () => {
    document.querySelectorAll('.search-tab').forEach(item => {
      item.classList.toggle('active', item === tab);
      item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
    });
    const form  = document.querySelector('#booking-form');
    if (form) form.dataset.mode = tab.dataset.bookingMode;
    const packages = tab.dataset.bookingMode === 'packages';
    const title = document.querySelector('.booking-intro h2');
    if (title) title.innerHTML = packages
      ? 'Choose your<br><i>stay awhile.</i>'
      : 'Build your<br><i>perfect day.</i>';

    // The two modes now lead to genuinely different places, so the
    // submit label and the irrelevant fields change with them.
    const submit = form?.querySelector('button[type="submit"]');
    if (submit) submit.childNodes[0].nodeValue = packages ? 'Show me packages ' : 'Find my adventure ';
    form?.querySelectorAll('label').forEach(l => {
      if (/looking for/i.test(l.textContent)) l.style.display = packages ? 'none' : '';
    });
  })
);

/* Customizer checkboxes removed: the home page now carries a
   build-your-itinerary CTA instead, and #itinerary-count is fed
   from updateItineraryNav like every other cart counter. */

/* ── Itinerary page ──────────────────────────────────────── */
const itineraryList = document.querySelector('#selected-list');
if (itineraryList) {
  const arrival   = document.querySelector('#arrival-date');
  const departure = document.querySelector('#departure-date');
  const savedDates = JSON.parse(localStorage.getItem('lainaDates') || '{}');
  if (savedDates.arrival)   arrival.value   = savedDates.arrival;
  if (savedDates.departure) departure.value = savedDates.departure;

  const savedTravellers = JSON.parse(localStorage.getItem('lainaTravellerCounts') || '{}');
  const adultSel = document.querySelector('#adult-count');
  const childSel = document.querySelector('#child-count');
  if (savedTravellers.adults)   adultSel.value = savedTravellers.adults;
  if (savedTravellers.children) childSel.value = savedTravellers.children;

  /* Each experience gets its own date and time. The trip dates
     bound the pickers so nothing can be scheduled outside the stay. */
  function applyDateBounds() {
    itineraryList.querySelectorAll('input[type="date"]').forEach(input => {
      if (arrival.value)   input.min = arrival.value;
      if (departure.value) input.max = departure.value;
    });
  }


  /* Airport transfer. $35 per vehicle per leg, up to four people.
     Stored with the rest of the trip so it survives a refresh and
     travels into the WhatsApp message with route and flight. */
  const TRANSFER_RATE = 35;
  const tArrival   = document.querySelector('#transfer-arrival');
  const tDeparture = document.querySelector('#transfer-departure');
  const tRoute     = document.querySelector('#transfer-route');
  const tFlight    = document.querySelector('#transfer-flight');
  const tTotal     = document.querySelector('#transfer-total');

  function getTransfer() {
    try { return JSON.parse(localStorage.getItem('lainaTransfer') || '{}'); }
    catch (e) { return {}; }
  }

  function drawTransferTotal(t) {
    if (!tTotal) return;
    const legs = (t.arrival ? 1 : 0) + (t.departure ? 1 : 0);
    if (!legs) { tTotal.hidden = true; return; }
    tTotal.hidden = false;
    tTotal.innerHTML =
      '<strong>$' + (legs * TRANSFER_RATE) + '</strong> for ' +
      (legs === 2 ? 'a return transfer' : 'a one-way transfer') +
      ' <span>&middot; $' + TRANSFER_RATE + ' per vehicle per leg, up to 4 people</span>';
  }

  function saveTransfer() {
    if (!tArrival) return;
    const t = {
      arrival: tArrival.checked,
      departure: tDeparture.checked,
      route: tRoute.value,
      flight: tFlight.value.trim()
    };
    localStorage.setItem('lainaTransfer', JSON.stringify(t));
    drawTransferTotal(t);
  }

  if (tArrival) {
    const savedT = getTransfer();
    tArrival.checked   = !!savedT.arrival;
    tDeparture.checked = !!savedT.departure;
    if (savedT.route)  tRoute.value  = savedT.route;
    if (savedT.flight) tFlight.value = savedT.flight;
    drawTransferTotal(savedT);
    [tArrival, tDeparture, tRoute, tFlight].forEach(function (el) {
      el.addEventListener('change', saveTransfer);
    });
    tFlight.addEventListener('input', saveTransfer);
  }

  const draw = () => {
    const sels  = getSelections();
    const sched = getSchedule();
    const names = Object.keys(sels);
    const total = names.reduce((s, n) => s + sels[n], 0);
    const countEl = document.querySelector('#selection-count');
    if (countEl) countEl.textContent = total;

    const scheduled = names.filter(n => sched[n] && sched[n].date).length;
    const progress = document.querySelector('#schedule-progress');
    if (progress) {
      progress.textContent = names.length
        ? `${scheduled} of ${names.length} scheduled`
        : '';
    }

    itineraryList.innerHTML = names.length
      ? names.map((name, i) => {
          const qty = sels[name];
          const a   = activities.find(x => x[0] === name);
          const img = a ? a[5] : '';
          const sc  = sched[name] || {};
          return `<article class="selected-item" data-name="${name}">
            <div class="selected-media">${img ? `<img src="${img}" alt="" loading="lazy">` : ''}</div>
            <div class="selected-body">
              <div class="selected-head">
                <div>
                  <span class="selected-index">${String(i + 1).padStart(2, '0')}</span>
                  <strong>${name}</strong>
                  ${qty > 1 ? `<span class="item-qty">× ${qty}</span>` : ''}
                </div>
                <button type="button" class="selected-remove" data-remove="${name}" aria-label="Remove ${name}">
                  <svg class="icon" aria-hidden="true"><use href="#i-close"/></svg>
                </button>
              </div>
              <small>${a ? a[3] : ''}${a && a[3] ? ' · ' : ''}${a ? a[2] : ''}</small>
              <div class="selected-when">
                <label>
                  <span>Preferred date</span>
                  <input type="date" data-sched="date" data-for="${name}" value="${sc.date || ''}">
                </label>
                <label>
                  <span>Preferred time</span>
                  <select data-sched="time" data-for="${name}">
                    <option value="">Any time</option>
                    <option${sc.time === 'Early morning' ? ' selected' : ''}>Early morning</option>
                    <option${sc.time === 'Morning' ? ' selected' : ''}>Morning</option>
                    <option${sc.time === 'Midday' ? ' selected' : ''}>Midday</option>
                    <option${sc.time === 'Afternoon' ? ' selected' : ''}>Afternoon</option>
                    <option${sc.time === 'Sunset' ? ' selected' : ''}>Sunset</option>
                    <option${sc.time === 'Evening' ? ' selected' : ''}>Evening</option>
                  </select>
                </label>
              </div>
            </div>
          </article>`;
        }).join('')
      : `<div class="empty-selection">
           <p><strong>Nothing chosen yet.</strong></p>
           <p>Pick the experiences you want and they will appear here, ready to schedule.</p>
           <a class="button button-light" href="activities.html">Browse experiences</a>
         </div>`;

    itineraryList.querySelectorAll('[data-remove]').forEach(btn =>
      btn.addEventListener('click', () => {
        const s2 = getSelections();
        delete s2[btn.dataset.remove];
        setSelections(s2);
        const sc2 = getSchedule();
        delete sc2[btn.dataset.remove];
        setSchedule(sc2);
        draw();
      })
    );

    itineraryList.querySelectorAll('[data-sched]').forEach(input =>
      input.addEventListener('change', () => {
        setActivitySchedule(input.dataset.for, input.dataset.sched, input.value);
        const p2 = document.querySelector('#schedule-progress');
        if (p2) {
          const sc3 = getSchedule();
          const done = Object.keys(getSelections()).filter(n => sc3[n] && sc3[n].date).length;
          p2.textContent = `${done} of ${Object.keys(getSelections()).length} scheduled`;
        }
      })
    );

    applyDateBounds();
    if (window.applySquircles) window.applySquircles();
  };

  draw();
  [arrival, departure].forEach(d => d.addEventListener('change', applyDateBounds));

  document.querySelector('#itinerary-form').addEventListener('submit', event => {
    event.preventDefault();

    localStorage.setItem('lainaDates', JSON.stringify({ arrival: arrival.value, departure: departure.value }));
    localStorage.setItem('lainaTravellerCounts', JSON.stringify({ adults: adultSel.value, children: childSel.value }));

    const sels  = getSelections();
    const sched = getSchedule();
    const names = Object.keys(sels);

    /* One line per experience, with its own date and time, so the
       message reads as a schedule rather than a list of names. */
    const lines = names.length
      ? names.map((name, i) => {
          const qty = sels[name];
          const sc  = sched[name] || {};
          const when = [sc.date ? prettyDate(sc.date) : null, sc.time || null]
            .filter(Boolean).join(', ');
          return `${i + 1}. ${name}${qty > 1 ? ` x${qty}` : ''}${when ? ` — ${when}` : ' — date to confirm'}`;
        }).join('\n')
      : 'I need help choosing activities.';

    /* Transfer block, only when a leg is actually selected. */
    const t = getTransfer();
    const legs = (t.arrival ? 1 : 0) + (t.departure ? 1 : 0);
    const transferBlock = legs
      ? "\n\nAirport transfer: " + (legs === 2 ? 'Return' : (t.arrival ? 'Arrival only' : 'Departure only')) +
        "\nRoute: " + (t.route || 'to confirm') +
        (t.flight ? "\nFlight: " + t.flight : '') +
        "\nTransfer subtotal: $" + (legs * TRANSFER_RATE) +
        " (" + legs + " leg" + (legs > 1 ? 's' : '') + " x $" + TRANSFER_RATE + " per vehicle)"
      : '';

    const message =
      "Hello Laina Light Tours, here are my trip details.\n\n" +
      "Arrival: " + (arrival.value ? prettyDate(arrival.value) : 'to confirm') + "\n" +
      "Departure: " + (departure.value ? prettyDate(departure.value) : 'to confirm') + "\n" +
      "Travellers: " + adultSel.value + " adult(s), " + childSel.value + " child(ren)" +
      transferBlock + "\n\n" +
      "Experiences (" + names.reduce((acc, n) => acc + sels[n], 0) + "):\n" + lines + "\n\n" +
      "Please confirm availability and the final quote.";

    window.open(waLink(message), '_blank');

    const ok = document.querySelector('#itinerary-success');
    if (ok) {
      ok.hidden = false;
      ok.innerHTML =
        '<strong>Sent to WhatsApp.</strong> Your experiences and preferred times have been passed to the team. ' +
        'They will confirm availability and send the final quote. Nothing is booked until they reply.';
    }
  });
}

updateItineraryNav();
