/* js/script.js
   Purpose: generate destination cards, search, modal details, contact form validation, small UI behaviors.
   Keep this file in js/script.js and include with defer attribute (already done in HTML).
*/

(() => {
  // Basic data for each destination (we used your provided filenames as candidates)
  const destinations = [
    { id:'australia', title:'Australia', images:['AUSTRALIA.jpg','australia.jpg'], price:1299, rating:4.8, short:'Great Barrier Reef, Sydney opera & adventure packages.', desc:'Discover diverse landscapes, premium guided tours, city stays and adventure escapes. Perfect for families and solo travelers.', packages:[
      {name:'10 days Highlights', nights:10, price:1299, offer:'Free airport transfer'},
      {name:'Luxury Coastal Escape', nights:7, price:2299, offer:'Complimentary dinner'}
    ]},
    { id:'china', title:'China', images:['CHINA.jpg','china.jpg'], price:999, rating:4.5, short:'Ancient wonders, vibrant cities & cuisine', desc:'From the Great Wall to modern skylines, China offers history and modernity. Custom itineraries include food trails & guided cultural tours.', packages:[
      {name:'Golden Triangle', nights:8, price:999, offer:'10% early-bird'},
      {name:'Culinary Tour', nights:6, price:799, offer:'Free tasting session'}
    ]},
    { id:'cityofart', title:'City of Art', images:['CITYOFART.jpg','cityofart.jpg'], price:749, rating:4.6, short:'Art cities & creative stays', desc:'Hidden gems in art-filled cities, local galleries, street art tours and exclusive workshops.', packages:[
      {name:'Gallery Hopping', nights:4, price:499, offer:'Museum pass included'}
    ]},
    { id:'dubai', title:'Dubai', images:['DUBAl.jpg','DUBAI.jpg','dubai.jpg'], price:1199, rating:4.7, short:'Luxury, desert safaris & skyscrapers', desc:'Iconic skyline, desert experiences and curated luxury stays with private guides.', packages:[
      {name:'Desert & Dine', nights:5, price:1199, offer:'Sunset desert BBQ'},
      {name:'Burj & Beaches', nights:4, price:899, offer:'City tour included'}
    ]},
    { id:'france', title:'France', images:['FRANCEjpg','FRANCE.jpg','france.jpg'], price:1099, rating:4.9, short:'Romance, food & culture', desc:'Parisian streets, vineyards, and countryside chateaux with luxury transport & curated tastings.', packages:[
      {name:'Paris Essentials', nights:5, price:1099, offer:'Seine cruise included'},
      {name:'Wine Country', nights:6, price:1499, offer:'Vineyard tour'}
    ]},
    { id:'germany', title:'Germany', images:['GERMANY.jpg','germany.jpg'], price:899, rating:4.6, short:'Castles, beer culture & scenic drives', desc:'From historic cities to alpine escapes, Germany has it all.', packages:[
      {name:'Romantic Road', nights:7, price:1099, offer:'Castle entry included'}
    ]},
    { id:'india', title:'India', images:['INDIA.jpg','india.jpg'], price:699, rating:4.7, short:'Diverse landscapes, culture & food', desc:'Tailored experiences covering heritage sites, culinary trails & wellness retreats.', packages:[
      {name:'Golden Triangle', nights:5, price:699, offer:'Guide & transport included'}
    ]},
    { id:'italy', title:'Italy', images:['ITALY.jpg','italy.jpg'], price:1299, rating:4.9, short:'History, cuisine & coastlines', desc:'Rome, Florence & Amalfi — food, art and immersive local stays.', packages:[
      {name:'Classic Italy', nights:8, price:1299, offer:'Cooking class included'}
    ]},
    { id:'japan', title:'Japan', images:['JAPAN.jpg','japan.jpg'], price:1399, rating:4.8, short:'Tradition meets modernity', desc:'Cherry blossom seasons, city tech tours and serene temples.', packages:[
      {name:'Cultural Journey', nights:7, price:1399, offer:'Rail pass included'}
    ]},
    { id:'kenya', title:'Kenya', images:['KENYA.jpg','kenya.jpg'], price:1599, rating:4.7, short:'Wildlife safaris & landscapes', desc:'Top safari experiences with expert local guides.', packages:[
      {name:'Safari Classic', nights:6, price:1599, offer:'Game drives included'}
    ]},
    { id:'newyork', title:'NewYork', images:['NEWYORK.jpg','newyork.jpg'], price:1199, rating:4.6, short:'City that never sleeps', desc:'Iconic sightseeing, shows, food and curated city walks.', packages:[
      {name:'City Essentials', nights:5, price:1199, offer:'Show tickets included'}
    ]},
    { id:'northkorea', title:'NorthKorea', images:['NORTHKOREA.jpg','northkorea.jpg'], price:1799, rating:4.2, short:'Unique historic tours (regulated)', desc:'Specialized, highly-regulated group tours. Note: travel may require specific clearances.', packages:[
      {name:'Cultural Tour', nights:7, price:1799, offer:'Guided local visits'}
    ]},
    { id:'norway', title:'Norway', images:['NORWAY.jpg','norway.jpg'], price:1499, rating:4.8, short:'Fjords & northern lights', desc:'Scenic cruises, fjord trips and lights-chasing tours.', packages:[
      {name:'Fjord Cruising', nights:6, price:1499, offer:'Cruise included'}
    ]},
    { id:'poland', title:'Poland', images:['POLAND.jpg','poland.jpg'], price:799, rating:4.4, short:'Historic cities & culture', desc:'Poland’s castles, cultural tours and tasty local cuisine.', packages:[
      {name:'City Delights', nights:5, price:799, offer:'City pass included'}
    ]},
    { id:'southkorea', title:'SouthKorea', images:['SOUTHKOREA.jpg','southkorea.jpg'], price:999, rating:4.6, short:'K-culture, tech & cuisine', desc:'Vibrant cities, food tours and cultural experiences.', packages:[
      {name:'Seoul & Beyond', nights:6, price:999, offer:'Street food tour'}
    ]},
    { id:'spain', title:'Spain', images:['SPAIN.jpg','spain.jpg'], price:899, rating:4.7, short:'Beaches, tapas & festivals', desc:'From Barcelona to Andalusia, a fiesta for all senses.', packages:[
      {name:'Iberian Highlights', nights:7, price:899, offer:'Tapas tour included'}
    ]},
  ];

  // Team members - use PEOPLE images
  const team = [
    {name:'Arjun Singh', role:'Founder & CEO', img:'PEOPLE1.jpg', linkedin:'https://www.linkedin.com/in/arjun-singh'},
    {name:'Priya Mehta', role:'COO & Head of Operations', img:'PEOPLE2.jpg', linkedin:'https://www.linkedin.com/in/priyamehta'},
    {name:'Rahul Verma', role:'Head of Experiences', img:'PEOPLE3.jpg', linkedin:'https://www.linkedin.com/in/rahul-verma'},
  ];

  // FAQs
  const faqs = [
    {q:'How do I book a package?', a:'Select a destination, choose a package and click Book Now. We will contact you for confirmation and payment details.'},
    {q:'Are flights included?', a:'Most packages are land & accommodation focused. Flight inclusion is specified per package; contact us for custom quotes.'},
    {q:'What is your cancellation policy?', a:'Cancellation terms vary by package. We provide clear terms at booking and offer travel insurance options.'},
    {q:'Do you provide visa assistance?', a:'Yes — for many destinations we offer visa advisory and assistance services. Check details per destination.'},
  ];

  // DOM references
  const grid = document.getElementById('destinationsGrid');
  const teamGrid = document.querySelector('.team-grid');
  const faqsWrap = document.querySelector('.faqs');
  const searchInput = document.getElementById('searchDest');
  const suggestions = document.getElementById('searchSuggestions');
  const searchBtn = document.getElementById('searchBtn');
  const modal = document.getElementById('detailModal');
  const modalClose = document.getElementById('modalClose');
  const modalHero = document.getElementById('modalHero');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalRating = document.getElementById('modalRating');
  const modalDesc = document.getElementById('modalDesc');
  const modalPackages = document.getElementById('modalPackages');
  const bookNowBtn = document.getElementById('bookNowBtn');

  // Helper: try to load an image with fallbacks (candidates array), set to imgEl
  function setImageWithFallback(imgEl, candidates = [], fallback = '') {
    let i = 0;
    function tryNext() {
      if (i >= candidates.length) {
        if(fallback) imgEl.src = fallback;
        else imgEl.src = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><rect width="100%" height="100%" fill="#071827"/><text x="50%" y="50%" fill="#9aa6b2" font-family="Poppins, sans-serif" font-size="20" dominant-baseline="middle" text-anchor="middle">Image not found</text></svg>');
        return;
      }
      const path = 'images/' + candidates[i];
      imgEl.onerror = () => { i++; tryNext(); };
      imgEl.onload = () => { imgEl.onerror = null; };
      imgEl.src = path;
    }
    tryNext();
  }

  // create cards dynamically
  function renderDestinations() {
    grid.innerHTML = '';
    destinations.forEach((d, idx) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.tabIndex = 0;
      card.setAttribute('data-id', d.id);

      const img = document.createElement('img');
      // candidates includes provided alternatives
      setImageWithFallback(img, d.images.concat([d.id+'.jpg', d.id+'.png','BACKGROUND2.jpg']));

      const body = document.createElement('div');
      body.className = 'card-body';

      const title = document.createElement('h3');
      title.className = 'card-title';
      title.textContent = d.title;

      const row = document.createElement('div');
      row.className = 'card-row';

      const pb = document.createElement('div');
      pb.className = 'price-badge';
      pb.textContent = `$${d.price.toLocaleString()}`;

      const rating = document.createElement('div');
      rating.className = 'rating';
      rating.innerHTML = `<span aria-hidden="true">★</span> ${d.rating}`;

      row.appendChild(pb);
      row.appendChild(rating);

      const p = document.createElement('p');
      p.style.color = 'var(--muted)';
      p.style.marginTop = '8px';
      p.textContent = d.short;

      body.appendChild(title);
      body.appendChild(row);
      body.appendChild(p);

      card.appendChild(img);
      card.appendChild(body);
      grid.appendChild(card);

      // click opens modal detail
      card.addEventListener('click', () => openDetail(d.id));
      card.addEventListener('keypress', (e) => { if(e.key === 'Enter') openDetail(d.id); });
    });
    // reveal animation via observer
    requestAnimationFrame(() => revealCards());
  }

  function revealCards() {
    const cards = document.querySelectorAll('.card');
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((ent, i) => {
        if(ent.isIntersecting) {
          ent.target.classList.add('revealed');
          obs.unobserve(ent.target);
        }
      });
    }, {threshold:0.12});
    cards.forEach(c => io.observe(c));
  }

  // open modal and populate
  function openDetail(id) {
    const d = destinations.find(x => x.id === id);
    if(!d) return;
    modal.setAttribute('aria-hidden','false');
    modalHero.alt = d.title;
    setImageWithFallback(modalHero, d.images.concat([d.id+'.jpg','BACKGROUND2.jpg']));
    modalTitle.textContent = d.title;
    modalPrice.textContent = `$${d.price.toLocaleString()}`;
    modalRating.textContent = `★ ${d.rating}`;
    modalDesc.textContent = d.desc;

    // packages
    modalPackages.innerHTML = '';
    d.packages.forEach(pkg => {
      const el = document.createElement('div');
      el.className = 'package';
      el.innerHTML = `<strong>${pkg.name}</strong> · ${pkg.nights} nights · $${pkg.price}<br/><small style="color:var(--muted)">${pkg.offer}</small>`;
      modalPackages.appendChild(el);
    });

    // update book link (frontend demo)
    bookNowBtn.href = `mailto:support@behappy.travel?subject=Booking%20request%20for%20${encodeURIComponent(d.title)}&body=I%20am%20interested%20in%20the%20${encodeURIComponent(d.title)}%20package.`;
  }

  // close modal
  function closeModal() {
    modal.setAttribute('aria-hidden','true');
  }

  // search / suggestions
  function updateSuggestions() {
    const val = searchInput.value.trim().toLowerCase();
    if(!val) { suggestions.style.display='none'; suggestions.innerHTML=''; suggestions.setAttribute('aria-hidden','true'); return; }
    const matches = destinations.filter(d => d.title.toLowerCase().includes(val));
    if(matches.length === 0){ suggestions.style.display='none'; suggestions.innerHTML=''; suggestions.setAttribute('aria-hidden','true'); return; }
    suggestions.innerHTML = matches.map(m => `<li data-id="${m.id}" tabindex="0">${m.title} <small style="color:var(--muted)"> · $${m.price}</small></li>`).join('');
    suggestions.style.display='block'; suggestions.setAttribute('aria-hidden','false');

    // click suggestion
    suggestions.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', ()=> { openDetail(li.dataset.id); suggestions.style.display='none'; searchInput.value=''; });
      li.addEventListener('keypress', (e)=> { if(e.key==='Enter') { openDetail(li.dataset.id); suggestions.style.display='none'; searchInput.value=''; } });
    });
  }

  // init team and faqs
  function renderTeamAndFaqs() {
    teamGrid.innerHTML = team.map(t => `
      <div class="team-card">
        <img src="images/${t.img}" alt="${t.name}" />
        <div>
          <div style="font-weight:700">${t.name}</div>
          <div style="color:var(--muted);font-size:14px">${t.role}</div>
          <div style="margin-top:8px"><a href="${t.linkedin}" target="_blank" rel="noopener">LinkedIn profile</a></div>
        </div>
      </div>
    `).join('');

    faqsWrap.innerHTML = faqs.map(f => `
      <details class="faq">
        <summary>${f.q}</summary>
        <p>${f.a}</p>
      </details>
    `).join('');
  }

  // contact form handling (frontend)
  function contactForm() {
    const form = document.getElementById('contactForm');
    const alert = document.getElementById('formAlert');

    if(!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message) {
        alert.style.color = '#ffb3a7';
        alert.textContent = 'Please fill the required fields.';
        return;
      }
      // simple email check
      if(!/^\S+@\S+\.\S+$/.test(email)) {
        alert.style.color = '#ffb3a7';
        alert.textContent = 'Please enter a valid email address.';
        return;
      }

      // Simulate success — show advanced success UI
      alert.style.color = 'var(--accent)';
      alert.textContent = 'Thanks! Your message has been sent. Our specialists will contact you within 24 hours.';
      form.reset();
      // optional: animate
      setTimeout(()=> alert.textContent = '', 8000);
    });
  }

  // header mobile toggle
  function mobileToggle() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if(btn) {
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', (!open).toString());
        menu.style.display = open ? 'none' : 'flex';
      });
    }
    const btn2 = document.getElementById('mobileMenuBtn2');
    const menu2 = document.getElementById('mobileMenu2');
    if(btn2){
      btn2.addEventListener('click', () => {
        const open = btn2.getAttribute('aria-expanded') === 'true';
        btn2.setAttribute('aria-expanded', (!open).toString());
        menu2.style.display = open ? 'none' : 'flex';
      });
    }
  }

  // wire up modal close
  modalClose && modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });

  // search events
  searchInput && searchInput.addEventListener('input', updateSuggestions);
  searchBtn && searchBtn.addEventListener('click', ()=> {
    const val = searchInput.value.trim().toLowerCase();
    if(!val) return;
    const match = destinations.find(d => d.title.toLowerCase() === val || d.id === val);
    if(match) openDetail(match.id);
    else {
      // try partial
      const partial = destinations.find(d => d.title.toLowerCase().includes(val));
      if(partial) openDetail(partial.id);
      else {
        // show suggestions if no exact
        suggestions.innerHTML = `<li tabindex="0">No exact match — try: ${destinations.slice(0,6).map(x=>x.title).join(', ')}</li>`;
        suggestions.style.display='block';
      }
    }
    searchInput.value = '';
    suggestions.style.display='none';
  });

  // keyboard: escape to close modal & hide suggestions
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      closeModal();
      suggestions.style.display='none';
    }
  });

  // init
  function init() {
    renderDestinations();
    renderTeamAndFaqs();
    contactForm();
    mobileToggle();
    document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
    document.getElementById('year2') && (document.getElementById('year2').textContent = new Date().getFullYear());
  }

  // run
  init();

})();
