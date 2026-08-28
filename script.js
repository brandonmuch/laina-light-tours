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
  ['Full Day Hwange','Safari','$400','2–5 days','Big Five game drives in Zimbabwe’s largest reserve.','Laina-Light-Tours-Activities-Images-Copilot/activities/game-drive-4x4.jpeg'],
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
  'Riversong Sunset Cruise':'A sunset cruise with hors d’oeuvres and premium drinks and cocktails.',
  'Zambezi Sunset Cruise':'A relaxed sunset and wildlife cruise with unlimited local drinks and snacks. Park fees included.',
  'Dinner Cruise':'Drift into the evening with dinner on the Zambezi. Park fees included.',
  'Lunch Cruise':'Enjoy lunch while cruising the Zambezi. Park fees included.',
  'Big Air Experience':'All three bridge activities bundled into one day: bungee, swing and slide.',
  'Bridge Slide (Zipline)':'A cross-border zipline between Zambia and Zimbabwe.',
  'Bridge Swing – Tandem':'A giant pendulum swing over Batoka Gorge.',
  'Bridge Tour':'A catwalk tour beneath Victoria Falls Bridge with a history and engineering guide.',
  'Bungee Jump':'A 111-metre jump from Victoria Falls Bridge.',
  'White Water Rafting – 1-Day & Overnight':'Raft the Zambezi with overnight camping on the river beach. Seasonal departure.',
  'White Water Rafting – 2.5-Day Expedition':'A multi-day rafting expedition through Batoka Gorge. Seasonal departure.',
  'White Water Rafting – Day Trip':'Grade 5 rapids, a full day in Batoka Gorge and the steep gorge exit hike. Park fees included.',
  'Jet Boat Adventure':'A 465hp jetboat into Boiling Pot and Batoka Gorge rapids. Pickup included. Park fees included.',
  'Canopy Tour':'Glide through the forest canopy above the Zambezi. Park fees included.',
  'Flying Fox':'Fly above the gorge on a high-speed zipline. Park fees included.',
  'Gorge Swing':'A thrilling gorge swing above Batoka Gorge. Park fees included.',
  'Tandem Gorge Swing':'A tandem swing over Batoka Gorge. Park fees included.',
  'Tandem Zip-line':'A tandem zip-line adventure across the gorge. Park fees included.',
  'Victoria Falls Guided Rainforest Tour':'A guided walking tour of the Falls and rainforest with an expert guide. Park fees included.',
  'Simunye: The Spirit of Africa (Theatre Show)':'An award-winning African theatre show. Optional dinner add-on available.',
  'Boma Dinner & Drum Show':'A generous, rhythmic night of food, stories and performance.',
  'Livingstone Island Breakfast – Zambia':'Breakfast on Livingstone Island in the Zambezi.',
  'Livingstone Island Hi Tea – Zambia':'Hi tea on Livingstone Island in the Zambezi.',
  'Livingstone Island Lunch – Zambia':'Lunch and swimming at the edge of the Falls, on Livingstone Island.',
  'Rhino Safari – Zambia':'A conservation-led safari in Mosi-oa-Tunya National Park.',
  'Cheetah Walk':'A guided cheetah walk experience.',
  'Elephant Ride':'A guided elephant riding experience.',
  'Full Day Hwange':'Big Five game drives in Zimbabwe’s largest reserve, known for its elephant herds.',
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

const grid = document.querySelector('#activity-grid');
const search = document.querySelector('#activity-search');
const category = document.querySelector('#category-filter');
const count = document.querySelector('#result-count');
function renderActivities(){
  if(!grid) return;
  const term=(search?.value||'').toLowerCase(); const filter=category?.value||'All categories';
  const visible=activities.filter(a=>(filter==='All categories'||a[1]===filter)&&a[0].toLowerCase().includes(term));
  count.textContent=visible.length;
  grid.innerHTML=visible.map((a,i)=>`<article class="activity-card" data-index="${activities.indexOf(a)}"><div class="activity-card-image"><img src="${a[5]}" alt="${a[0]}"><span class="activity-category">${a[1]}</span></div><div class="activity-details"><h3>${a[0]}</h3><p>${a[4]}</p><div class="activity-bottom"><strong class="activity-price">${a[2]}</strong><span class="activity-duration">${a[3]}</span><button class="activity-add" type="button" aria-label="Add ${a[0]} to itinerary">+</button></div></div></article>`).join('');
  grid.querySelectorAll('.activity-card').forEach(card=>{const activity=activities[card.dataset.index];card.addEventListener('click',()=>openModal(activity));card.querySelector('.activity-add').addEventListener('click',event=>{event.stopPropagation();addToItinerary(activity[0],event.currentTarget);});});
}
function addToItinerary(name,button){const selected=JSON.parse(localStorage.getItem('lainaSelections')||'[]');if(!selected.includes(name)){selected.push(name);localStorage.setItem('lainaSelections',JSON.stringify(selected));}button.textContent='✓';button.classList.add('added');updateItineraryNav();}
function openModal(a){const modal=document.querySelector('#activity-modal'); if(!modal)return; document.querySelector('#modal-image').src=a[5]; document.querySelector('#modal-image').alt=a[0]; document.querySelector('#modal-category').textContent=a[1]; document.querySelector('#modal-title').textContent=a[0]; document.querySelector('#modal-description').textContent=activityDetails[a[0]]||a[4]; document.querySelector('#modal-price').textContent=a[2]; document.querySelector('#modal-duration').textContent=a[3];document.querySelector('#add-itinerary').onclick=()=>addToItinerary(a[0],document.querySelector('#add-itinerary')); modal.classList.add('open');modal.setAttribute('aria-hidden','false');}
function closeModal(){const modal=document.querySelector('#activity-modal');if(modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}}
if(grid){const params=new URLSearchParams(location.search);if(params.get('category'))category.value=params.get('category');renderActivities();search.addEventListener('input',renderActivities);category.addEventListener('change',renderActivities);document.querySelector('.modal-close').addEventListener('click',closeModal);document.querySelector('#activity-modal').addEventListener('click',e=>{if(e.target.id==='activity-modal')closeModal()});}
const booking=document.querySelector('#booking-form');if(booking)booking.addEventListener('submit',e=>{e.preventDefault();const date=booking.querySelector('input[type="date"]')?.value;if(date)localStorage.setItem('lainaDates',JSON.stringify({arrival:date}));document.querySelector('#booking-message').textContent='Lovely. We will shape a first draft of your adventure and be in touch shortly.'});
document.querySelectorAll('.newsletter-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();form.innerHTML='<p style="color:white;margin:15px 0;font-size:13px">You are on the list. See you out there.</p>'}));
document.querySelectorAll('.menu-toggle').forEach(btn=>btn.addEventListener('click',()=>{const nav=document.querySelector('.main-nav');const isOpen=nav.style.display==='flex';nav.style.display=isOpen?'none':'flex';nav.style.position='absolute';nav.style.top='70px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px 25px';nav.style.background='var(--cream)';nav.style.flexDirection='column';nav.style.gap='18px';document.querySelector('.site-header')?.classList.toggle('menu-open',!isOpen)}));
const siteHeader=document.querySelector('.site-header');
if(siteHeader){const updateHeader=()=>siteHeader.classList.toggle('scrolled',window.scrollY>36);updateHeader();window.addEventListener('scroll',updateHeader,{passive:true});}
function updateItineraryNav(){document.querySelectorAll('.itinerary-nav-count').forEach(item=>item.textContent=JSON.parse(localStorage.getItem('lainaSelections')||'[]').length)}
updateItineraryNav();
const revealTargets=document.querySelectorAll('.benefits-bar,.packages-section,.discover,.split-section,.quote-section,.customizer-section');
if(revealTargets.length&&'IntersectionObserver' in window){const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});revealTargets.forEach(target=>revealObserver.observe(target));}
document.querySelectorAll('.search-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.search-tab').forEach(item=>{item.classList.toggle('active',item===tab);item.setAttribute('aria-selected',item===tab?'true':'false')});const form=document.querySelector('#booking-form');if(form)form.dataset.mode=tab.dataset.bookingMode;const title=document.querySelector('.booking-intro h2');if(title)title.innerHTML=tab.dataset.bookingMode==='packages'?'Choose your<br><i>stay awhile.</i>':'Build your<br><i>perfect day.</i>'}));
const itineraryOptions=document.querySelectorAll('.customizer-option input');
if(itineraryOptions.length){const updateItinerary=()=>{const selected=[...itineraryOptions].filter(option=>option.checked).map(option=>option.value);localStorage.setItem('lainaSelections',JSON.stringify(selected));document.querySelector('#itinerary-count').textContent=`${selected.length} experience${selected.length===1?'':'s'} selected`;document.querySelector('#itinerary-list').textContent=selected.length?selected.join(' · '):'Select experiences to begin building your day.'};itineraryOptions.forEach(option=>option.addEventListener('change',updateItinerary));}
const itineraryList=document.querySelector('#selected-list');
if(itineraryList){const arrival=document.querySelector('#arrival-date');const departure=document.querySelector('#departure-date');const savedDates=JSON.parse(localStorage.getItem('lainaDates')||'{}');if(savedDates.arrival)arrival.value=savedDates.arrival;if(savedDates.departure)departure.value=savedDates.departure;const draw=()=>{const current=JSON.parse(localStorage.getItem('lainaSelections')||'[]');document.querySelector('#selection-count').textContent=current.length;itineraryList.innerHTML=current.length?current.map((item,index)=>`<div class="selected-item"><div><strong>${index+1}. ${item}</strong><small>${activityDetails[item]||'Details confirmed with your local team.'}</small></div><button type="button" data-remove="${index}" aria-label="Remove ${item}">Remove</button></div>`).join(''):'<p class="empty-selection">No activities selected yet. Visit the activities page to add your first experience.</p>';itineraryList.querySelectorAll('[data-remove]').forEach(button=>button.addEventListener('click',()=>{const next=JSON.parse(localStorage.getItem('lainaSelections')||'[]');next.splice(Number(button.dataset.remove),1);localStorage.setItem('lainaSelections',JSON.stringify(next));draw()}))};draw();document.querySelector('#itinerary-form').addEventListener('submit',event=>{event.preventDefault();localStorage.setItem('lainaDates',JSON.stringify({arrival:arrival.value,departure:departure.value}));const selected=JSON.parse(localStorage.getItem('lainaSelections')||'[]');const message=`Hello Laina Light Tours, I would like to confirm my itinerary. Arrival: ${arrival.value}. Departure: ${departure.value}. Adults: ${document.querySelector('#adult-count').value}. Children: ${document.querySelector('#child-count').value}. Activities: ${selected.length?selected.join(', '):'I need help choosing activities.'}`;window.open(`https://wa.me/263771234567?text=${encodeURIComponent(message)}`,'_blank');document.querySelector('#itinerary-success').textContent='Your itinerary is ready. WhatsApp will open with your selections for final confirmation.';});}
