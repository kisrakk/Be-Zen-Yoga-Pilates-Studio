/* ===== Be Zen Studio — script ===== */

/* 1. All the text in English and Spanish.
      Every element with data-i18n="key" gets its text from here. */
const TEXT = {
  "en": {
    "navClasses": "Classes",
    "navPricing": "Pricing",
    "navSchedule": "Schedule",
    "navRetreats": "Retreats",
    "navAbout": "About",
    "navContact": "Contact",
    "heroL1": "YOGA &",
    "heroL2": "PILATES",
    "heroR1": "OPEN",
    "heroR2": "DAILY",
    "heroTag1": "Breathe · Move · Restore",
    "heroTag2": "Yoga & Pilates studio in Koh Phangan, Thailand",
    "heroCta": "BOOK A CLASS →",
    "classesTitle": "CLASSES",
    "classesIntro": "Six ways to move, all levels welcome. Mats, props and filtered water included.",
    "c1n": "Vinyasa Flow",
    "c1m": "60 min · All levels",
    "c1d": "Breath-led movement that builds heat, strength and focus.",
    "c2n": "Reformer Pilates",
    "c2m": "50 min · Max 8 people",
    "c2d": "Spring-loaded machines for deep core work and long, strong muscles.",
    "c3n": "Yin & Restore",
    "c3m": "75 min · Gentle",
    "c3d": "Long, quiet holds with bolsters and blankets to release tension.",
    "c4n": "Mat Pilates",
    "c4m": "55 min · Beginner friendly",
    "c4d": "Control, posture and core strength with just your body and a mat.",
    "c5n": "Sunrise Hatha",
    "c5m": "60 min · On the deck",
    "c5d": "Slow, classic postures as the sun comes up over the jungle.",
    "c6n": "Breathwork & Sound",
    "c6m": "45 min · Evening",
    "c6d": "Guided breathing, then singing bowls and deep rest.",
    "pricingTitle": "PRICING",
    "p1n": "Drop-in class",
    "p1d": "Any group class, any day.",
    "p2n": "10-class pass",
    "p2d": "Valid for 3 months. Share it with a friend.",
    "p3n": "Unlimited month",
    "p3d": "As many classes as you like for 30 days.",
    "p4n": "Private session",
    "p4d": "One-to-one yoga or Reformer, made for you.",
    "pricingNote": "First time with us? Your first class is",
    "currency": "Currency",
    "from": "from",
    "rateNote": "€ and $ prices are approximate. You pay in Thai baht at the studio.",
    "scheduleTitle": "SCHEDULE",
    "scheduleIntro": "Tap a class to choose it, then save your spot below.",
    "dMon": "Mon",
    "dTue": "Tue",
    "dWed": "Wed",
    "dThu": "Thu",
    "dFri": "Fri",
    "dSat": "Sat",
    "dSun": "Sun",
    "formTitle": "Save your spot",
    "fName": "Name",
    "fEmail": "Email",
    "fClass": "Class",
    "fDay": "Day",
    "fLevel": "Your level",
    "lvl1": "New to it",
    "lvl2": "Some experience",
    "lvl3": "I practise often",
    "fSubmit": "BOOK MY SPOT",
    "fThanks": "Thank you! Your spot is saved. See you on the mat.",
    "fNote": "Demo site: no real booking is sent.",
    "retreatsTitle": "RETREATS",
    "r1n": "7-Day Jungle Reset",
    "r1t": "12 – 19 January",
    "r1d": "Yoga twice a day, plant-based meals, a waterfall hike and a sound bath under the stars.",
    "r2n": "Full Moon Weekend",
    "r2t": "14 – 16 February",
    "r2d": "Slow flows, breathwork and a quiet beach ceremony, far from the parties.",
    "r3n": "Pilates & Ocean Week",
    "r3t": "9 – 16 March",
    "r3d": "Morning Reformer, afternoon snorkelling and sunset Yin on the deck.",
    "retreatCta": "ASK ABOUT A RETREAT →",
    "aboutTitle": "ABOUT",
    "aboutP1": "Be Zen Studio is an open-air shala in the jungle of Srithanu, five minutes from the sea. We opened with one simple idea: a calm, friendly place where anyone can move, breathe and slow down.",
    "aboutP2": "No mirrors, no pressure. Just kind teachers, warm light and the sound of the trees.",
    "teamTitle": "Your teachers",
    "t1r": "Founder · Hatha & Yin",
    "t2r": "Reformer & Mat Pilates",
    "t3r": "Vinyasa & Breathwork",
    "contactTop": "WE REPLY WITHIN A DAY",
    "contactT1": "COME",
    "contactT2": "BREATHE",
    "addr1": "88/12 Moo 8, Srithanu",
    "addr2": "Koh Phangan, Surat Thani 84280, Thailand",
    "hours": "Open every day · 6:30 – 20:30",
    "credit": "Concept website · design & code by Kisrak Kulacoglu"
  },
  "es": {
    "navClasses": "Clases",
    "navPricing": "Precios",
    "navSchedule": "Horario",
    "navRetreats": "Retiros",
    "navAbout": "Nosotros",
    "navContact": "Contacto",
    "heroL1": "YOGA Y",
    "heroL2": "PILATES",
    "heroR1": "ABIERTO",
    "heroR2": "A DIARIO",
    "heroTag1": "Respira · Muévete · Descansa",
    "heroTag2": "Estudio de yoga y pilates en Koh Phangan, Tailandia",
    "heroCta": "RESERVA UNA CLASE →",
    "classesTitle": "CLASES",
    "classesIntro": "Seis formas de moverte, para todos los niveles. Esterillas, accesorios y agua filtrada incluidos.",
    "c1n": "Vinyasa Flow",
    "c1m": "60 min · Todos los niveles",
    "c1d": "Movimiento guiado por la respiración que genera calor, fuerza y concentración.",
    "c2n": "Pilates Reformer",
    "c2m": "50 min · Máx. 8 personas",
    "c2d": "Máquinas con muelles para trabajar el core a fondo y fortalecer los músculos.",
    "c3n": "Yin y Restaurativo",
    "c3m": "75 min · Suave",
    "c3d": "Posturas largas y tranquilas con cojines y mantas para soltar tensión.",
    "c4n": "Pilates en Esterilla",
    "c4m": "55 min · Ideal para empezar",
    "c4d": "Control, postura y fuerza del core solo con tu cuerpo y una esterilla.",
    "c5n": "Hatha al Amanecer",
    "c5m": "60 min · En la terraza",
    "c5d": "Posturas clásicas y lentas mientras sale el sol sobre la selva.",
    "c6n": "Respiración y Sonido",
    "c6m": "45 min · Por la tarde",
    "c6d": "Respiración guiada, cuencos tibetanos y descanso profundo.",
    "pricingTitle": "PRECIOS",
    "p1n": "Clase suelta",
    "p1d": "Cualquier clase grupal, cualquier día.",
    "p2n": "Bono de 10 clases",
    "p2d": "Válido 3 meses. Compártelo con quien quieras.",
    "p3n": "Mes ilimitado",
    "p3d": "Todas las clases que quieras durante 30 días.",
    "p4n": "Sesión privada",
    "p4d": "Yoga o Reformer uno a uno, a tu medida.",
    "pricingNote": "¿Primera vez? Tu primera clase cuesta",
    "currency": "Moneda",
    "from": "desde",
    "rateNote": "Los precios en € y $ son aproximados. En el estudio se paga en baht tailandés.",
    "scheduleTitle": "HORARIO",
    "scheduleIntro": "Toca una clase para elegirla y reserva tu plaza abajo.",
    "dMon": "Lun",
    "dTue": "Mar",
    "dWed": "Mié",
    "dThu": "Jue",
    "dFri": "Vie",
    "dSat": "Sáb",
    "dSun": "Dom",
    "formTitle": "Reserva tu plaza",
    "fName": "Nombre",
    "fEmail": "Correo",
    "fClass": "Clase",
    "fDay": "Día",
    "fLevel": "Tu nivel",
    "lvl1": "Empiezo ahora",
    "lvl2": "Algo de experiencia",
    "lvl3": "Practico a menudo",
    "fSubmit": "RESERVAR MI PLAZA",
    "fThanks": "¡Gracias! Tu plaza está reservada. Nos vemos en la esterilla.",
    "fNote": "Web de demostración: no se envía ninguna reserva real.",
    "retreatsTitle": "RETIROS",
    "r1n": "Reset de 7 días en la selva",
    "r1t": "12 – 19 de enero",
    "r1d": "Yoga dos veces al día, comida vegetal, caminata a una cascada y baño de sonido bajo las estrellas.",
    "r2n": "Fin de semana de luna llena",
    "r2t": "14 – 16 de febrero",
    "r2d": "Clases lentas, respiración y una ceremonia tranquila en la playa, lejos de las fiestas.",
    "r3n": "Semana de Pilates y Océano",
    "r3t": "9 – 16 de marzo",
    "r3d": "Reformer por la mañana, snorkel por la tarde y Yin al atardecer en la terraza.",
    "retreatCta": "PREGUNTA POR UN RETIRO →",
    "aboutTitle": "NOSOTROS",
    "aboutP1": "Be Zen Studio es una shala al aire libre en la selva de Srithanu, a cinco minutos del mar. Abrimos con una idea sencilla: un lugar tranquilo y cercano donde cualquiera pueda moverse, respirar y bajar el ritmo.",
    "aboutP2": "Sin espejos ni presión. Solo profes cercanos, luz cálida y el sonido de los árboles.",
    "teamTitle": "Tus profes",
    "t1r": "Fundadora · Hatha y Yin",
    "t2r": "Pilates Reformer y Esterilla",
    "t3r": "Vinyasa y Respiración",
    "contactTop": "RESPONDEMOS EN UN DÍA",
    "contactT1": "VEN A",
    "contactT2": "RESPIRAR",
    "addr1": "88/12 Moo 8, Srithanu",
    "addr2": "Koh Phangan, Surat Thani 84280, Tailandia",
    "hours": "Abierto todos los días · 6:30 – 20:30",
    "credit": "Web conceptual · diseño y código de Kisrak Kulacoglu"
  },
  "th": {
    "navClasses": "คลาส",
    "navPricing": "ราคา",
    "navSchedule": "ตารางเรียน",
    "navRetreats": "รีทรีต",
    "navAbout": "เกี่ยวกับเรา",
    "navContact": "ติดต่อ",
    "heroL1": "โยคะ &",
    "heroL2": "พิลาทิส",
    "heroR1": "เปิด",
    "heroR2": "ทุกวัน",
    "heroTag1": "หายใจ · เคลื่อนไหว · ผ่อนคลาย",
    "heroTag2": "สตูดิโอโยคะและพิลาทิสบนเกาะพะงัน ประเทศไทย",
    "heroCta": "จองคลาส →",
    "classesTitle": "คลาส",
    "classesIntro": "หกรูปแบบให้คุณได้เคลื่อนไหว เหมาะกับทุกระดับ มีเสื่อ อุปกรณ์ และน้ำดื่มให้พร้อม",
    "c1n": "วินยาสะโฟลว์",
    "c1m": "60 นาที · ทุกระดับ",
    "c1d": "การเคลื่อนไหวตามลมหายใจ สร้างความร้อน ความแข็งแรง และสมาธิ",
    "c2n": "รีฟอร์มเมอร์พิลาทิส",
    "c2m": "50 นาที · สูงสุด 8 คน",
    "c2d": "เครื่องสปริงสำหรับฝึกแกนกลางลำตัวให้ลึก และกล้ามเนื้อที่ยาวและแข็งแรง",
    "c3n": "หยินและรีสโตร์",
    "c3m": "75 นาที · เบา ๆ",
    "c3d": "ท่าค้างยาวอย่างสงบ ด้วยหมอนและผ้าห่ม เพื่อปลดปล่อยความตึงเครียด",
    "c4n": "พิลาทิสบนเสื่อ",
    "c4m": "55 นาที · เหมาะสำหรับผู้เริ่มต้น",
    "c4d": "การควบคุม ท่าทาง และความแข็งแรงของแกนกลาง ใช้แค่ร่างกายและเสื่อ",
    "c5n": "หฐโยคะยามเช้า",
    "c5m": "60 นาที · บนระเบียง",
    "c5d": "ท่าคลาสสิกช้า ๆ ขณะพระอาทิตย์ขึ้นเหนือผืนป่า",
    "c6n": "การหายใจและเสียงบำบัด",
    "c6m": "45 นาที · ช่วงเย็น",
    "c6d": "ฝึกหายใจแบบมีผู้นำ ตามด้วยขันทิเบตและการพักผ่อนอย่างลึก",
    "pricingTitle": "ราคา",
    "p1n": "คลาสรายครั้ง",
    "p1d": "คลาสกลุ่มใดก็ได้ วันไหนก็ได้",
    "p2n": "บัตร 10 คลาส",
    "p2d": "ใช้ได้ 3 เดือน แบ่งกับเพื่อนได้",
    "p3n": "รายเดือนไม่จำกัด",
    "p3d": "เรียนได้ไม่จำกัดตลอด 30 วัน",
    "p4n": "คลาสส่วนตัว",
    "p4d": "โยคะหรือรีฟอร์มเมอร์แบบตัวต่อตัว ออกแบบเพื่อคุณ",
    "pricingNote": "มาครั้งแรก? คลาสแรกของคุณเพียง",
    "currency": "สกุลเงิน",
    "from": "เริ่มต้น",
    "rateNote": "ราคาเป็น € และ $ เป็นราคาโดยประมาณ ชำระเป็นเงินบาทที่สตูดิโอ",
    "scheduleTitle": "ตารางเรียน",
    "scheduleIntro": "แตะคลาสเพื่อเลือก แล้วจองที่นั่งด้านล่าง",
    "dMon": "จ.",
    "dTue": "อ.",
    "dWed": "พ.",
    "dThu": "พฤ.",
    "dFri": "ศ.",
    "dSat": "ส.",
    "dSun": "อา.",
    "formTitle": "จองที่นั่งของคุณ",
    "fName": "ชื่อ",
    "fEmail": "อีเมล",
    "fClass": "คลาส",
    "fDay": "วัน",
    "fLevel": "ระดับของคุณ",
    "lvl1": "เพิ่งเริ่ม",
    "lvl2": "มีประสบการณ์บ้าง",
    "lvl3": "ฝึกเป็นประจำ",
    "fSubmit": "จองที่นั่ง",
    "fThanks": "ขอบคุณ! เราจองที่นั่งให้คุณแล้ว แล้วพบกันบนเสื่อ",
    "fNote": "เว็บไซต์ตัวอย่าง: ไม่มีการส่งการจองจริง",
    "retreatsTitle": "รีทรีต",
    "r1n": "รีเซ็ตกลางป่า 7 วัน",
    "r1t": "12 – 19 มกราคม",
    "r1d": "โยคะวันละสองครั้ง อาหารจากพืช เดินป่าไปน้ำตก และซาวด์บาธใต้แสงดาว",
    "r2n": "สุดสัปดาห์คืนพระจันทร์เต็มดวง",
    "r2t": "14 – 16 กุมภาพันธ์",
    "r2d": "คลาสช้า ๆ การหายใจ และพิธีเงียบสงบริมชายหาด ห่างไกลจากปาร์ตี้",
    "r3n": "สัปดาห์พิลาทิสและทะเล",
    "r3t": "9 – 16 มีนาคม",
    "r3d": "รีฟอร์มเมอร์ยามเช้า ดำน้ำตื้นยามบ่าย และหยินโยคะยามพระอาทิตย์ตกบนระเบียง",
    "retreatCta": "สอบถามเรื่องรีทรีต →",
    "aboutTitle": "เกี่ยวกับเรา",
    "aboutP1": "Be Zen Studio คือศาลาโยคะกลางแจ้งในป่าของศรีธนู ห่างจากทะเลเพียงห้านาที เราเริ่มต้นด้วยความตั้งใจง่าย ๆ คือสร้างพื้นที่สงบและเป็นมิตร ที่ทุกคนได้เคลื่อนไหว หายใจ และช้าลง",
    "aboutP2": "ไม่มีกระจก ไม่มีความกดดัน มีแค่ครูที่ใจดี แสงอบอุ่น และเสียงของต้นไม้",
    "teamTitle": "ครูของคุณ",
    "t1r": "ผู้ก่อตั้ง · หฐะและหยิน",
    "t2r": "รีฟอร์มเมอร์และพิลาทิสบนเสื่อ",
    "t3r": "วินยาสะและการหายใจ",
    "contactTop": "เราตอบกลับภายในหนึ่งวัน",
    "contactT1": "มา",
    "contactT2": "หายใจกัน",
    "addr1": "88/12 หมู่ 8 ศรีธนู",
    "addr2": "เกาะพะงัน สุราษฎร์ธานี 84280 ประเทศไทย",
    "hours": "เปิดทุกวัน · 6:30 – 20:30",
    "credit": "เว็บไซต์ตัวอย่าง · ออกแบบและเขียนโค้ดโดย Kisrak Kulacoglu"
  }
};

const site = document.querySelector('.site');

/* 2. Language switch (EN / ES) */
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.dataset.i18n;
    if (TEXT[lang][key]) el.textContent = TEXT[lang][key];
  });
  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.dataset.active = btn.dataset.lang === lang ? 'true' : 'false';
  });
  showPrices(); // numbers are written differently in each language
  try { localStorage.setItem('bz-lang', lang); } catch (e) {}
}

/* 2b. Prices in Thai baht, euros or dollars.
       Every price is written in baht (data-thb="450"); the others are worked out here.
       These rates are only an example: 1 euro = 38 baht, 1 dollar = 34 baht. */
const RATES = { THB: 1, EUR: 1 / 38, USD: 1 / 34 };
const LOCALES = { en: 'en-US', es: 'es-ES', th: 'th-TH' };
let currency = 'THB';

function showPrices() {
  const locale = LOCALES[document.documentElement.lang] || 'en-US';
  document.querySelectorAll('.money').forEach(function (el) {
    let value = Number(el.dataset.thb) * RATES[currency];
    if (currency !== 'THB') {
      value = value >= 100 ? Math.round(value / 5) * 5 : Math.round(value); // nice round numbers
    }
    el.textContent = new Intl.NumberFormat(locale, { style: 'currency', currency: currency, currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 }).format(value);
  });
  document.querySelectorAll('[data-cur]').forEach(function (btn) {
    btn.dataset.active = btn.dataset.cur === currency ? 'true' : 'false';
  });
}

function setCurrency(code) {
  currency = code;
  showPrices();
  try { localStorage.setItem('bz-currency', code); } catch (e) {}
}

/* 3. Showing one page at a time.
      The CSS shows the section that matches data-page on .site */
function goTo(page) {
  site.dataset.page = page;
  site.dataset.menu = 'false';
  site.dataset.booked = 'false';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* 4. One click listener for the whole page ("event delegation") */
document.addEventListener('click', function (event) {
  const goLink = event.target.closest('[data-go]');
  if (goLink) {
    event.preventDefault();
    goTo(goLink.dataset.go);
    return;
  }
  const langBtn = event.target.closest('[data-lang]');
  if (langBtn) {
    setLanguage(langBtn.dataset.lang);
    return;
  }
  const curBtn = event.target.closest('[data-cur]');
  if (curBtn) {
    setCurrency(curBtn.dataset.cur);
    return;
  }
  if (event.target.closest('[data-menu-toggle]')) {
    site.dataset.menu = site.dataset.menu === 'true' ? 'false' : 'true';
    return;
  }
  const slot = event.target.closest('[data-pick]');
  if (slot) {
    pickClass(slot);
  }
});

/* 5. Clicking a class in the timetable fills in the form */
function pickClass(slot) {
  document.querySelectorAll('[data-pick]').forEach(function (s) { s.dataset.sel = 'false'; });
  slot.dataset.sel = 'true';
  const parts = slot.dataset.pick.split('|'); // e.g. "c2|mon|09:30"
  document.getElementById('bz-class').value = parts[0];
  document.getElementById('bz-day').value = parts[1];
  document.getElementById('bz-form').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* 6. The booking form (demo only: nothing is sent anywhere) */
document.getElementById('bz-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const form = event.target;
  if (!form.checkValidity()) {
    form.reportValidity(); // shows the browser's "please fill in" message
    return;
  }
  site.dataset.booked = 'true';
  form.reset();
});

/* 7. The moving crystals in the background */
const canvas = document.querySelector('.bg-canvas');
const ctx = canvas.getContext('2d');
const COLORS = ['242,120,42', '244,154,192', '184,106,240', '58,166,180', '247,228,224'];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let crystals = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function makeCrystal(alreadyGrown) {
  const maxR = 50 + Math.random() * 170;
  const rays = [];
  const count = Math.round(60 + maxR * 0.6);
  for (let i = 0; i < count; i++) rays.push([Math.random() * Math.PI * 2, 0.72 + Math.random() * 0.28]);
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    maxR: maxR,
    r: alreadyGrown ? maxR * Math.random() : 0,
    speed: 10 + Math.random() * 22,
    rays: rays,
    life: 0,
    hold: 3 + Math.random() * 5,
    fade: 1,
    edge: Math.random() * Math.PI * 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)]
  };
}

function drawCrystal(s) {
  const a = s.fade, c = s.color;
  const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r);
  g.addColorStop(0, 'rgba(' + c + ',' + 0.22 * a + ')');
  g.addColorStop(0.7, 'rgba(' + c + ',' + 0.06 * a + ')');
  g.addColorStop(1, 'rgba(' + c + ',' + 0.28 * a + ')');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();

  ctx.strokeStyle = 'rgba(' + c + ',' + 0.2 * a + ')';
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  s.rays.forEach(function (ray) {
    const len = s.r * ray[1];
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x + Math.cos(ray[0]) * len, s.y + Math.sin(ray[0]) * len);
  });
  ctx.stroke();

  ctx.lineWidth = 1.6;
  ctx.strokeStyle = 'rgba(' + c + ',' + 0.85 * a + ')';
  ctx.shadowColor = 'rgba(' + c + ',' + 0.9 * a + ')';
  ctx.shadowBlur = 14;
  ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.lineWidth = 3;
  ctx.strokeStyle = 'rgba(244,154,192,' + 0.75 * a + ')';
  ctx.beginPath(); ctx.arc(s.x, s.y, s.r + 2, s.edge, s.edge + 0.9); ctx.stroke();
  ctx.strokeStyle = 'rgba(242,106,30,' + 0.75 * a + ')';
  ctx.beginPath(); ctx.arc(s.x, s.y, s.r + 5, s.edge + 0.1, s.edge + 0.8); ctx.stroke();
}

let last = performance.now();
function animate(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  crystals.forEach(function (s, i) {
    if (s.r < s.maxR) {
      s.r = Math.min(s.maxR, s.r + s.speed * dt);       // grow
    } else {
      s.life += dt;                                     // wait
      if (s.life > s.hold) s.fade -= dt / 3;            // fade out
      if (s.fade <= 0) crystals[i] = makeCrystal(false); // replace with a new one
    }
    drawCrystal(s);
  });
  requestAnimationFrame(animate);
}

resize();
window.addEventListener('resize', resize);
for (let i = 0; i < 9; i++) crystals.push(makeCrystal(true));
if (reduceMotion) {
  crystals.forEach(function (s) { s.r = s.maxR; drawCrystal(s); });
} else {
  requestAnimationFrame(animate);
}

/* 8. Start in the last language the visitor chose (English by default) */
let startLang = 'en';
try { startLang = localStorage.getItem('bz-lang') || 'en'; } catch (e) {}
try { currency = localStorage.getItem('bz-currency') || 'THB'; } catch (e) {}
setLanguage(startLang);
