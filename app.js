/**
 * Aditya & Richa Wedding Invitation Web Application
 * Modular JavaScript Engine with Smooth Animation & Varanasi Audio Experience
 */

// =============================================================================
// 1. CEREMONY DETAILS & CALENDAR DATA
// =============================================================================
const CEREMONIES_DATA = {
  mehndi: {
    title: "Mehndi Ki Raat",
    subtitle: "A celebratory evening of henna swirls and music",
    badge: "Ritual 01",
    date: "Thursday, Nov 26, 2026",
    time: "04:00 PM Onwards",
    attire: "Mehndi Green & Festive Florals",
    location: "Ganga Lawns, The Munger Club, Bihar",
    image: "assets/images/event_mehndi.jpg",
    significance: "The Mehndi ceremony symbolizes love, auspicious beginnings, and joy. According to ancient lore, the darker the stain of the henna on the bride's palms, the deeper the bond between the couple.",
    schedule: [
      { time: "04:00 PM", event: "Welcome drinks & traditional dhol welcome" },
      { time: "04:30 PM", event: "Henna artists begin adornment for bride & guests" },
      { time: "06:30 PM", event: "Traditional folk songs (Banna-Banni) & high tea" },
      { time: "08:00 PM", event: "Dinner & cultural folk dances under fairy lights" }
    ],
    calStart: "20261126T160000",
    calEnd: "20261126T220000"
  },
  matikor: {
    title: "Matikor Pujan & Sacred Soil Ritual",
    subtitle: "Auspicious heritage ritual invoking ancestral blessings",
    badge: "Sacred Heritage",
    date: "Friday, Nov 27, 2026",
    time: "09:00 AM (Morning Muhurat)",
    attire: "Sacred Ochre, Yellows & Traditional Silks",
    location: "Ancestral Ghat & Courtyard, Munger, Bihar",
    image: "assets/images/event_matikor.jpg",
    significance: "Matikor is a cherished traditional wedding ritual in Bihar. Women of the families walk to the sacred riverbank to bring sanctified earth (Mitti) to consecrate the wedding hearth (Bedi). It invokes the blessing of Mother Earth for prosperity and fertility.",
    schedule: [
      { time: "08:30 AM", event: "Assembly of elders with decorated brass thalis" },
      { time: "09:00 AM", event: "Procession to holy riverbank with folk songs" },
      { time: "09:45 AM", event: "Digging & sanctification of holy earth" },
      { time: "11:00 AM", event: "Traditional morning feast & prasad distribution" }
    ],
    calStart: "20261127T090000",
    calEnd: "20261127T120000"
  },
  haldi: {
    title: "Haldi & Phoolon Ki Holi",
    subtitle: "Turmeric glow, laughter, and fragrant petal showers",
    badge: "Ritual 03",
    date: "Friday, Nov 27, 2026",
    time: "02:00 PM Afternoon",
    attire: "Sunshine Yellow, Marigold & Kurta Pajama",
    location: "The Mango Courtyard, The Munger Club",
    image: "assets/images/event_haldi.jpg",
    significance: "Fresh stone-ground turmeric paste mixed with sandalwood and rose water is applied to the bride and groom. Beyond its natural cosmetic glow, Haldi purifies the soul and guards the couple against negativity.",
    schedule: [
      { time: "02:00 PM", event: "Arrival & traditional welcome with floral chadar" },
      { time: "02:30 PM", event: "Auspicious Haldi application by elders & friends" },
      { time: "03:45 PM", event: "Phoolon ki Holi (rose & marigold flower shower)" },
      { time: "04:30 PM", event: "Street food chaat counters & refreshing thandai" }
    ],
    calStart: "20261127T140000",
    calEnd: "20261127T170000"
  },
  sangeet: {
    title: "Sangeet & Celebration Gala",
    subtitle: "High-voltage music, dance battles, and glamorous toasts",
    badge: "Musical Night",
    date: "Friday, Nov 27, 2026",
    time: "07:30 PM Onwards",
    attire: "Evening Velvet, Shimmer, Indo-Western Glam",
    location: "The Grand Palace Hall, The Munger Club",
    image: "assets/images/event_sangeet.jpg",
    significance: "The celebration where both families come together on the dance floor! Featuring heartfelt musical performances, dance choreography, retro Bollywood medleys, and laughter that echoes into the night.",
    schedule: [
      { time: "07:30 PM", event: "Red carpet entry & signature mocktails" },
      { time: "08:15 PM", event: "Couple entrance & cake cutting" },
      { time: "08:45 PM", event: "Family choreographies & couple dance" },
      { time: "10:00 PM", event: "Live DJ, Punjabi Dhol & royal banquet dinner" }
    ],
    calStart: "20261127T193000",
    calEnd: "20261128T010000"
  },
  vivah: {
    title: "Shubh Vivah & Saat Phere",
    subtitle: "The sacred union under Vedic chants by the Ganges",
    badge: "The Royal Wedding",
    date: "Saturday, Nov 28, 2026",
    time: "Barat: 07:00 PM | Phere: 09:30 PM",
    attire: "Regal Royal Indian Formal (Deep Crimson, Ivory & Gold)",
    location: "Royal Heritage Mandap, The Munger Club",
    image: "assets/images/riverside_bg.jpg",
    significance: "The culmination of our celebrations. Aditya and Richa take the seven sacred vows (Saptapadi) around the holy fire (Agni), binding their souls together in holy matrimony for seven lifetimes.",
    schedule: [
      { time: "07:00 PM", event: "Grand Barat procession with royal brass band" },
      { time: "08:00 PM", event: "Milni ceremony & Varmala (Garland exchange)" },
      { time: "09:30 PM", event: "Vedic Kanyadaan & Saat Phere around sacred fire" },
      { time: "11:30 PM", event: "Royal wedding banquet & Vidai blessing" }
    ],
    calStart: "20261128T190000",
    calEnd: "20261129T010000"
  }
};

// =============================================================================
// 2. AUDIO SYNTHESIZER ENGINE (Web Audio API - Temple Bell & Flute Melodies)
// =============================================================================
class IndianWeddingAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.melodyTimer = null;
    // Raga Yaman/Bhupali notes in D (D4, E4, F#4, A4, B4, D5)
    this.scaleFreqs = [293.66, 329.63, 369.99, 440.00, 493.88, 587.33];
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  // Play resonant sacred temple bell chime on tap
  playTempleBell() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    const bellFrequencies = [1180, 1560, 2370, 3140]; // Pure brass bell resonances

    bellFrequencies.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      const initVol = 0.12 / (idx + 1);
      gain.gain.setValueAtTime(initVol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 2.6);
    });
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;

    // Soothing Tanpura drone
    const now = this.ctx.currentTime;
    
    // Low Sa (D3 = 146.83 Hz)
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc1.type = 'triangle';
    this.droneOsc1.frequency.setValueAtTime(146.83, now);
    const droneGain1 = this.ctx.createGain();
    droneGain1.gain.setValueAtTime(0.12, now);
    this.droneOsc1.connect(droneGain1);
    droneGain1.connect(this.masterGain);
    this.droneOsc1.start();

    // Pa (A3 = 220.00 Hz)
    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc2.type = 'sine';
    this.droneOsc2.frequency.setValueAtTime(220.00, now);
    const droneGain2 = this.ctx.createGain();
    droneGain2.gain.setValueAtTime(0.08, now);
    this.droneOsc2.connect(droneGain2);
    droneGain2.connect(this.masterGain);
    this.droneOsc2.start();

    // Flute melody phrases
    this.playMelodyLoop();
  }

  playMelodyLoop() {
    if (!this.isPlaying) return;

    const freq = this.scaleFreqs[Math.floor(Math.random() * this.scaleFreqs.length)];
    const duration = 1.3 + Math.random() * 1.5;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    const noteGain = this.ctx.createGain();

    osc.type = Math.random() > 0.4 ? 'sine' : 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    // Subtle 5Hz bansuri vibrato
    vibrato.frequency.setValueAtTime(5.2, now);
    vibratoGain.gain.setValueAtTime(3.5, now);
    vibrato.connect(osc.frequency);
    vibrato.start(now);

    noteGain.gain.setValueAtTime(0.001, now);
    noteGain.gain.exponentialRampToValueAtTime(0.15, now + 0.4);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.1);
    vibrato.stop(now + duration + 0.1);

    const nextInterval = (duration * 1000) * (0.8 + Math.random() * 0.6);
    this.melodyTimer = setTimeout(() => {
      this.playMelodyLoop();
    }, nextInterval);
  }

  stop() {
    this.isPlaying = false;
    if (this.melodyTimer) clearTimeout(this.melodyTimer);
    try {
      if (this.droneOsc1) {
        this.droneOsc1.stop();
        this.droneOsc1.disconnect();
      }
      if (this.droneOsc2) {
        this.droneOsc2.stop();
        this.droneOsc2.disconnect();
      }
    } catch (e) {
      // Ignored
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

const weddingAudio = new IndianWeddingAudioEngine();

// =============================================================================
// 3. ULTRA-SMOOTH MOMENTUM TRANSITION ENGINE
// =============================================================================
/**
 * Custom requestAnimationFrame easeInOutCubic scroll interpolation
 * Gives the exact luxurious gliding motion shown in the video
 */
function smoothGlideTo(targetY, duration = 1200) {
  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const difference = targetY - startY;
  const startTime = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + difference * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function handleLandingTransition() {
  const enterBtn = document.getElementById('enter-btn');
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');
  const floatingControls = document.querySelector('.floating-controls');
  const audioElement = document.getElementById('wedding-audio');
  const audioBtn = document.getElementById('audio-toggle-btn');

  if (enterBtn) {
    enterBtn.classList.add('btn-pressed');
    setTimeout(() => enterBtn.classList.remove('btn-pressed'), 450);
  }

  // 1. Play resonant sacred temple bell chime on tap
  try {
    weddingAudio.playTempleBell();
  } catch (e) {
    // Ignore
  }

  // 2. Start soundtrack (Raanjhanaa / Tum Tak) with gentle volume ramp
  if (audioElement) {
    audioElement.volume = 0;
    audioElement.play().then(() => {
      if (audioBtn) audioBtn.classList.add('playing');
      let vol = 0;
      const volInterval = setInterval(() => {
        vol += 0.05;
        if (vol >= 0.75) {
          audioElement.volume = 0.75;
          clearInterval(volInterval);
        } else {
          audioElement.volume = vol;
        }
      }, 50);
    }).catch((e) => {
      console.log('Audio autoplay prevented:', e);
      try {
        weddingAudio.start();
        if (audioBtn) audioBtn.classList.add('playing');
      } catch (err) {}
    });
  }

  // 3. Initiate "Going Inside the Temple" 3D Camera Fly-Through
  if (splash) {
    splash.classList.add('entering-temple');
  }

  // 4. Trigger atmospheric auspicious flower shower along the temple perimeter
  if (window.petalsInstance) {
    window.petalsInstance.burst(45);
  }

  // 5. Part the temple gates and unveil the sacred formal invitation
  setTimeout(() => {
    if (main) {
      window.scrollTo(0, 0);
      main.classList.add('content-revealed');
      // Trigger temple bells and first scene
      const phase1 = document.getElementById('temple-phase-1');
      const phase2 = document.getElementById('temple-phase-2');
      if (phase1) phase1.classList.remove('is-hidden');
      if (phase2) phase2.classList.remove('is-active');
    }
  }, 1100);

  // 6. Complete transition: hide splash screen and reveal floating controls
  setTimeout(() => {
    if (splash) splash.classList.add('temple-entered');
  }, 1600);

  setTimeout(() => {
    if (splash) splash.style.display = 'none';
    if (floatingControls) floatingControls.classList.add('is-visible');
  }, 1900);
}

function returnToCover() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');
  const floatingControls = document.querySelector('.floating-controls');

  if (splash && main) {
    splash.style.display = 'flex';
    requestAnimationFrame(() => {
      splash.classList.remove('entering-temple');
      splash.classList.remove('temple-entered');
      main.classList.remove('content-revealed');
      if (floatingControls) floatingControls.classList.remove('is-visible');
    });
  }
}

// =============================================================================
// 4. FALLING AUSPICIOUS PETALS CANVAS ENGINE (TEXT-SAFE & BOTANICAL)
// =============================================================================
class PetalsCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.petals = [];
    this.burstPetals = [];
    this.maxPetals = 32;
    this.isRunning = true;
    this.windX = 0;
    this.windY = 0;
    this.resize();
    this.initPetals();

    window.petalsInstance = this;
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.maxPetals = window.innerWidth > 1024 ? 45 : (window.innerWidth > 768 ? 32 : 24);
  }

  initPetals() {
    this.petals = [];
    for (let i = 0; i < this.maxPetals; i++) {
      this.petals.push(this.createPetal(true));
    }
  }

  createPetal(randomY = false) {
    // 95% of petals spawn strictly in lateral margins so center invitation text is never obscured
    const isSidePetal = Math.random() > 0.05;
    let x;
    if (isSidePetal) {
      x = Math.random() > 0.5 
        ? Math.random() * (this.width * 0.16) 
        : this.width * 0.84 + Math.random() * (this.width * 0.16);
    } else {
      x = this.width * 0.2 + Math.random() * (this.width * 0.6);
    }

    const isCenter = x > this.width * 0.18 && x < this.width * 0.82;
    const isMarigold = Math.random() > 0.5;
    const isGoldSparkle = Math.random() > 0.85;

    return {
      x: x,
      y: randomY ? Math.random() * this.height : -25,
      // Tiny translucent particles if in center, natural petals on sides
      size: isCenter ? 2.5 + Math.random() * 2 : (isGoldSparkle ? 5 : 8 + Math.random() * 8),
      speedY: 0.8 + Math.random() * 1.3,
      speedX: -0.3 + Math.random() * 0.6,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.8,
      flip: Math.random() * Math.PI,
      flipSpeed: 0.02 + Math.random() * 0.025,
      color: isGoldSparkle
        ? '#FFD700'
        : isMarigold
        ? (Math.random() > 0.5 ? '#E58E00' : '#FFA000')
        : (Math.random() > 0.5 ? '#9E1B32' : '#C42B45'),
      opacity: isCenter ? 0.18 + Math.random() * 0.12 : 0.65 + Math.random() * 0.3,
      isSpark: isGoldSparkle
    };
  }

  // Celebratory flower petal shower upon entering temple
  burst(count = 45) {
    for (let i = 0; i < count; i++) {
      const isMarigold = Math.random() > 0.5;
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const force = 2.0 + Math.random() * 5.0;
      // Spawn near edges and top perimeter
      const spawnX = Math.random() > 0.5
        ? Math.random() * (this.width * 0.3)
        : this.width * 0.7 + Math.random() * (this.width * 0.3);

      this.burstPetals.push({
        x: spawnX,
        y: Math.random() * (this.height * 0.35),
        size: 8 + Math.random() * 10,
        speedX: Math.cos(angle) * force,
        speedY: Math.sin(angle) * force - 1.5,
        gravity: 0.06 + Math.random() * 0.04,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 4,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.03 + Math.random() * 0.04,
        color: isMarigold
          ? '#FFB300'
          : (Math.random() > 0.5 ? '#9E1B32' : '#D32F2F'),
        opacity: 0.85,
        fadeSpeed: 0.003 + Math.random() * 0.004
      });
    }
  }

  // Responsive gentle breeze boost when user scrolls
  boost(deltaY) {
    const intensity = Math.min(Math.abs(deltaY) * 0.03, 2.2);
    this.windY = Math.sign(deltaY) * intensity;
    this.windX = (Math.random() - 0.5) * intensity * 1.2;
  }

  animate() {
    if (!this.isRunning) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Smoothly decay scroll wind
    this.windX *= 0.94;
    this.windY *= 0.94;

    // 1. Regular continuous floating petals
    for (let i = 0; i < this.petals.length; i++) {
      const p = this.petals[i];
      p.y += p.speedY + this.windY * 0.6;
      p.x += p.speedX + Math.sin(p.flip) * 0.5 + this.windX;
      p.rotation += p.rotSpeed;
      p.flip += p.flipSpeed;

      if (p.y > this.height + 35 || p.x < -40 || p.x > this.width + 40) {
        this.petals[i] = this.createPetal(false);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.scale(1, Math.cos(p.flip));
      this.ctx.globalAlpha = p.opacity;

      this.ctx.beginPath();
      this.ctx.fillStyle = p.color;
      this.ctx.shadowColor = 'rgba(0,0,0,0.08)';
      this.ctx.shadowBlur = 3;
      
      // Draw organic curved petal
      this.ctx.moveTo(0, 0);
      this.ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.4, p.size, p.size * 0.3, 0, p.size * 1.2);
      this.ctx.bezierCurveTo(-p.size, p.size * 0.3, -p.size * 0.6, -p.size * 0.4, 0, 0);
      this.ctx.fill();

      this.ctx.restore();
    }

    // 2. Celebratory burst petals
    for (let i = this.burstPetals.length - 1; i >= 0; i--) {
      const bp = this.burstPetals[i];
      bp.x += bp.speedX;
      bp.y += bp.speedY;
      bp.speedY += bp.gravity;
      bp.speedX *= 0.985;
      bp.rotation += bp.rotSpeed;
      bp.flip += bp.flipSpeed;
      bp.opacity -= bp.fadeSpeed;

      if (bp.opacity <= 0 || bp.y > this.height + 40) {
        this.burstPetals.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(bp.x, bp.y);
      this.ctx.rotate((bp.rotation * Math.PI) / 180);
      this.ctx.scale(1, Math.cos(bp.flip));
      this.ctx.globalAlpha = Math.max(0, bp.opacity);

      this.ctx.beginPath();
      this.ctx.fillStyle = bp.color;
      this.ctx.shadowColor = 'rgba(212, 175, 55, 0.25)';
      this.ctx.shadowBlur = 4;
      
      this.ctx.moveTo(0, 0);
      this.ctx.bezierCurveTo(bp.size * 0.6, -bp.size * 0.4, bp.size, bp.size * 0.3, 0, bp.size * 1.2);
      this.ctx.bezierCurveTo(-bp.size, bp.size * 0.3, -bp.size * 0.6, -bp.size * 0.4, 0, 0);
      this.ctx.fill();

      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }

  toggle() {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      this.animate();
    }
    return this.isRunning;
  }
}

// =============================================================================
// 5. SHUBH MUHURAT COUNTDOWN TIMER
// =============================================================================
function initCountdown() {
  const weddingDate = new Date('2026-11-28T19:00:00+05:30').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = pad(days);
    if (hoursEl) hoursEl.innerText = pad(hours);
    if (minsEl) minsEl.innerText = pad(minutes);
    if (secsEl) {
      const nextSecs = pad(seconds);
      if (secsEl.innerText !== nextSecs) {
        secsEl.innerText = nextSecs;
        secsEl.classList.remove('num-tick');
        void secsEl.offsetWidth; // trigger reflow
        secsEl.classList.add('num-tick');
      }
    }
  }

  update();
  setInterval(update, 1000);
}

// =============================================================================
// 6. RITUAL DETAILS MODAL LOGIC
// =============================================================================
function openRitualModal(eventId) {
  const event = CEREMONIES_DATA[eventId];
  if (!event) return;

  const modal = document.getElementById('ritual-modal');
  const visual = document.getElementById('modal-visual');
  const badge = document.getElementById('modal-badge');
  const title = document.getElementById('modal-title');
  const subtitle = document.getElementById('modal-subtitle');
  const date = document.getElementById('modal-date');
  const time = document.getElementById('modal-time');
  const attire = document.getElementById('modal-attire');
  const location = document.getElementById('modal-location');
  const significance = document.getElementById('modal-significance');
  const scheduleList = document.getElementById('modal-schedule');
  const calBtn = document.getElementById('modal-cal-btn');

  visual.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(43,2,11,0.85)), url('${event.image}')`;
  badge.innerText = event.badge;
  title.innerText = event.title;
  subtitle.innerText = `"${event.subtitle}"`;
  date.innerText = event.date;
  time.innerText = event.time;
  attire.innerText = event.attire;
  location.innerText = event.location;
  significance.innerText = event.significance;

  scheduleList.innerHTML = event.schedule
    .map((item) => `<li><strong>${item.time}</strong> <span>${item.event}</span></li>`)
    .join('');

  calBtn.onclick = () => addToCalendar(eventId);

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeRitualModal() {
  const modal = document.getElementById('ritual-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeRitualModal();
});

// =============================================================================
// 7. ADD TO GOOGLE CALENDAR
// =============================================================================
function addToCalendar(eventId) {
  const event = CEREMONIES_DATA[eventId];
  if (!event) return;

  const titleEncoded = encodeURIComponent(`Aditya & Richa Wedding: ${event.title}`);
  const detailsEncoded = encodeURIComponent(`${event.subtitle}\n\nAttire: ${event.attire}\nVenue: ${event.location}`);
  const locationEncoded = encodeURIComponent(event.location);
  const dates = `${event.calStart}/${event.calEnd}`;

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${titleEncoded}&dates=${dates}&details=${detailsEncoded}&location=${locationEncoded}`;

  window.open(googleUrl, '_blank');
}

// =============================================================================
// 8. RSVP FORM & WHATSAPP INTEGRATION
// =============================================================================
function handleRSVPSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('guest-name').value.trim();
  const phone = document.getElementById('guest-phone').value.trim();
  const count = document.getElementById('guest-count').value;
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const message = document.getElementById('guest-message').value.trim();

  const selectedEvents = Array.from(document.querySelectorAll('input[name="events_attending"]:checked'))
    .map((cb) => cb.value)
    .join(', ');

  if (!name) {
    alert('Please enter your full name.');
    return;
  }

  if (message) {
    saveWishToWall(name, message);
  }

  const hostsWhatsAppNumber = "919876543210";
  const text = 
`✨ *RSVP for Aditya & Richa Wedding* ✨
━━━━━━━━━━━━━━━━━━━━
👤 *Guest Name:* ${name}
📞 *Phone:* ${phone}
👥 *Total Guests:* ${count}
💌 *Response:* ${attendance}
🎉 *Attending Functions:* ${selectedEvents || 'None specified'}
💬 *Blessings & Note:* ${message || 'With warm wishes!'}
━━━━━━━━━━━━━━━━━━━━
_Sent via Aditya & Richa's Digital Wedding Invitation_`;

  const waUrl = `https://wa.me/${hostsWhatsAppNumber}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

function saveWishOnly() {
  const name = document.getElementById('guest-name').value.trim() || 'A Well-Wisher';
  const message = document.getElementById('guest-message').value.trim();

  if (!message) {
    alert('Please write a warm message or blessing before posting!');
    return;
  }

  saveWishToWall(name, message);
  document.getElementById('guest-message').value = '';
  alert('Thank you! Your beautiful blessing has been added to the Wishes Wall 🌸');
}

function saveWishToWall(author, message) {
  const wishes = JSON.parse(localStorage.getItem('wedding_wishes') || '[]');
  const newWish = {
    author,
    message,
    timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  };
  wishes.unshift(newWish);
  localStorage.setItem('wedding_wishes', JSON.stringify(wishes.slice(0, 15)));
  renderWishesWall();
}

function renderWishesWall() {
  const container = document.getElementById('wishes-grid');
  if (!container) return;

  const defaultWishes = [
    {
      author: "Nani Ji & Nana Ji",
      message: "May the divine blessings of Lord Shiva and Parvati always protect and shine upon Aditya and Richa. Sadaphala!",
      timestamp: "Nov 26"
    },
    {
      author: "Rohit & Megha Sharma",
      message: "So thrilled to celebrate your special journey along the ghats! Dancing rehearsals are in full swing! 🎉",
      timestamp: "Nov 26"
    },
    {
      author: "Uncle Verma (Patna)",
      message: "Heartiest congratulations to both families. Truly written along the sacred ghats. Looking forward to the Saat Phere!",
      timestamp: "Nov 25"
    }
  ];

  const storedWishes = JSON.parse(localStorage.getItem('wedding_wishes') || '[]');
  const allWishes = [...storedWishes, ...defaultWishes];

  container.innerHTML = allWishes
    .map(
      (w) => `
      <div class="wish-item-card reveal-on-scroll is-revealed">
        <div class="wish-item-header">
          <span class="wish-author">${w.author}</span>
          <span class="wish-time">${w.timestamp}</span>
        </div>
        <p class="wish-message">"${w.message}"</p>
      </div>
    `
    )
    .join('');
}

// =============================================================================
// 9. SCROLL REVEAL & MULTI-STAGE TEMPLE JOURNEY ENGINE
// =============================================================================
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  const progressBar = document.getElementById('scroll-progress-fill');
  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;

  const stage = document.getElementById('formal-invite-stage');
  const cardFrame = document.getElementById('formal-card-frame');
  const phase1 = document.getElementById('temple-phase-1');
  const phase2 = document.getElementById('temple-phase-2');
  const cueText = document.getElementById('cue-text');
  const bellLeft = document.getElementById('bell-left');
  const bellRight = document.getElementById('bell-right');
  const artworkBg = document.getElementById('formal-artwork-bg');
  const textContent = document.getElementById('temple-formal-text');
  const bellsWrap = document.getElementById('interactive-temple-bells');

  function updateTempleStage() {
    if (!stage || !phase1 || !phase2) return;
    const stageRect = stage.getBoundingClientRect();
    const stageTop = stageRect.top;
    const stageHeight = stage.offsetHeight - window.innerHeight;

    if (stageTop > 10) {
      // User is at top of page or before temple stage
      phase1.style.opacity = '1';
      phase1.style.transform = 'translateY(0px) scale(1.0)';
      phase1.style.pointerEvents = 'auto';

      phase2.style.opacity = '0';
      phase2.style.transform = 'translateY(30px)';
      phase2.style.pointerEvents = 'none';

      if (cueText) cueText.textContent = "Scroll into Temple (1/3)";
      if (artworkBg) artworkBg.style.transform = 'scale(1.0) translate3d(0, 0, 0)';
      if (bellsWrap) bellsWrap.style.transform = 'translate3d(0, 0, 0) scale(1.0)';
      if (cardFrame) cardFrame.style.transform = 'scale(1.0) translateZ(0)';
      return;
    }

    const progress = Math.min(1, Math.max(0, -stageTop / (stageHeight || 1)));

    // =========================================================================
    // DYNAMIC ZOOM-IN EFFECT WHILE SCROLLING IN STARTING
    // Dramatic, continuous 3D camera travel into temple archway (Scale 1.0 -> 2.55)
    // =========================================================================
    const zoomProgress = Math.pow(progress, 0.82);
    const zoomScale = 1.0 + zoomProgress * 1.55; 
    const zoomY = -progress * 46;
    const zoomX = -progress * 14;

    if (artworkBg) {
      artworkBg.style.transform = `scale(${zoomScale.toFixed(3)}) translate3d(${zoomX.toFixed(1)}px, ${zoomY.toFixed(1)}px, 0)`;
    }

    // Forward push on the Card Frame itself
    if (cardFrame) {
      const frameScale = 1.0 + Math.sin(progress * Math.PI * 0.7) * 0.08;
      cardFrame.style.transform = `scale(${frameScale.toFixed(3)}) translateZ(0)`;
    }

    // 3D camera parallax on the carved stone pillar and brass bells:
    // Pushing left & outward as the camera moves past them
    if (bellsWrap) {
      const bellShiftX = -progress * 90;
      const bellShiftY = -progress * 28;
      const bellScale = 1.0 + progress * 0.65;
      const bellOpacity = progress >= 0.82 ? Math.max(0, 1 - (progress - 0.82) / 0.12) : 1;
      bellsWrap.style.transform = `translate3d(${bellShiftX.toFixed(1)}px, ${bellShiftY.toFixed(1)}px, 0) scale(${bellScale.toFixed(3)})`;
      bellsWrap.style.opacity = bellOpacity.toFixed(2);
    }

    // Physical bell swing driven by scroll momentum
    if (bellLeft && bellRight) {
      const bellAngle = Math.sin(progress * Math.PI * 5) * 9;
      bellLeft.style.transform = `rotate(${bellAngle.toFixed(1)}deg)`;
      bellRight.style.transform = `rotate(${(-bellAngle).toFixed(1)}deg)`;
    }

    // Seamless phase cross-fading & scale progression
    if (progress < 0.36) {
      // 1st Scroll: Approaching the temple arch - Invocation & Couple Names
      phase1.style.opacity = '1';
      phase1.style.transform = `translateY(0px) scale(${1.0 + progress * 0.16})`;
      phase1.style.pointerEvents = 'auto';

      phase2.style.opacity = '0';
      phase2.style.transform = `translateY(30px)`;
      phase2.style.pointerEvents = 'none';

      if (cueText) cueText.textContent = "Scroll into Temple (1/3)";
    } else if (progress >= 0.36 && progress < 0.50) {
      // Smooth cinematic cross-fade into sanctum lineage
      const t = (progress - 0.36) / 0.14;
      phase1.style.opacity = Math.max(0, 1 - t).toFixed(3);
      phase1.style.transform = `translateY(${(-t * 26).toFixed(1)}px) scale(${(1.06 + t * 0.08).toFixed(3)})`;
      phase1.style.pointerEvents = 'none';

      phase2.style.opacity = Math.min(1, t).toFixed(3);
      phase2.style.transform = `translateY(${(26 * (1 - t)).toFixed(1)}px)`;
      phase2.style.pointerEvents = 'auto';

      if (cueText) cueText.textContent = "Entering Sacred Sanctum (2/3)";
    } else if (progress >= 0.50 && progress < 0.82) {
      // 2nd Scroll: Deep inside the sanctum - Family Lineages & Blessings
      phase1.style.opacity = '0';
      phase1.style.pointerEvents = 'none';

      phase2.style.opacity = '1';
      const lineageScale = 1.0 + (progress - 0.50) * 0.14;
      phase2.style.transform = `translateY(0px) scale(${lineageScale.toFixed(3)})`;
      phase2.style.pointerEvents = 'auto';

      if (cueText) cueText.textContent = "Entering Sacred Sanctum (2/3)";
    } else {
      // 3rd Scroll: Camera passes through sanctum into the sunrise over the Ganges Ghats
      const t = Math.min(1, (progress - 0.82) / 0.14);
      phase1.style.opacity = '0';
      phase2.style.opacity = Math.max(0, 1 - t).toFixed(3);
      phase2.style.transform = `translateY(${(-t * 24).toFixed(1)}px)`;
      phase2.style.pointerEvents = 'none';

      if (cueText) cueText.textContent = "Arriving at Ganges Ghats (3/3)";
    }
  }

  // 1. Dynamic Scroll Progress Bar, Temple Multi-Scroll & Petal Wind Boost
  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Top Journey Progress Bar
    if (progressBar && docHeight > 0) {
      const scrollPercent = Math.min(100, Math.max(0, (currentScrollY / docHeight) * 100));
      progressBar.style.width = `${scrollPercent}%`;
    }

    // Multi-stage temple interaction with continuous zoom-in
    updateTempleStage();

    // Subtle cinematic photographic parallax on downstream landmark images
    const parallaxImages = document.querySelectorAll('.ghats-couple-img, .portrait-img, .mandap-img, .barat-img');
    const winHeight = window.innerHeight;
    parallaxImages.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < winHeight && rect.bottom > 0) {
        const offset = ((rect.top - winHeight / 2) / winHeight) * 20;
        img.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0) scale(1.05)`;
      }
    });

    // Petals velocity response
    const deltaY = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;

    if (window.petalsInstance && Math.abs(deltaY) > 2) {
      window.petalsInstance.boost(deltaY);
    }
  }, { passive: true });

  // Initial call to set state
  updateTempleStage();

  // 2. Intersection Observer for Smooth Section Unfolds
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

// Gesture & wheel listener on cover to initiate deep temple zoom whether by wheel, scroll, or touch swipe
function initCoverScrollGesture() {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;

  let startY = 0;
  let endY = 0;

  // Touch swipe on mobile
  splash.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  }, { passive: true });

  splash.addEventListener('touchend', (e) => {
    endY = e.changedTouches[0].clientY;
    // If swiped up by more than 35px
    if (startY - endY > 35) {
      handleLandingTransition();
    }
  }, { passive: true });

  // Mouse wheel scroll down on desktop
  splash.addEventListener('wheel', (e) => {
    if (e.deltaY > 15) {
      handleLandingTransition();
    }
  }, { passive: true });
}

// =============================================================================
// 10. APP INITIALIZATION & EVENT LISTENERS
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Petals Canvas
  const petals = new PetalsCanvas('petals-canvas');
  window.petalsInstance = petals;

  // Petals Toggle Button
  const petalsBtn = document.getElementById('petals-toggle-btn');
  if (petalsBtn) {
    petalsBtn.addEventListener('click', () => {
      const active = petals.toggle();
      petalsBtn.classList.toggle('active', active);
    });
  }

  // Audio Toggle Button
  const audioBtn = document.getElementById('audio-toggle-btn');
  const audioElement = document.getElementById('wedding-audio');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if (audioElement) {
        if (audioElement.paused) {
          audioElement.play().then(() => {
            audioBtn.classList.add('playing');
          }).catch(e => {
            console.log(e);
            const isPlaying = weddingAudio.toggle();
            audioBtn.classList.toggle('playing', isPlaying);
          });
        } else {
          audioElement.pause();
          audioBtn.classList.remove('playing');
        }
      } else {
        const isPlaying = weddingAudio.toggle();
        audioBtn.classList.toggle('playing', isPlaying);
      }
    });
  }

  // Tap to Enter Splash Screen Button
  const enterBtn = document.getElementById('enter-btn');
  if (enterBtn) {
    enterBtn.addEventListener('click', handleLandingTransition);
  }

  // Close ritual modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (typeof closeRitualModal === 'function') closeRitualModal();
    }
  });

  // Cover scroll & swipe gestures for desktop wheel and mobile
  initCoverScrollGesture();

  // Initialize Countdown Timer
  initCountdown();

  // Render Wishes Wall
  renderWishesWall();

  // Initialize Scroll Observers and Progress Bar
  initScrollAnimations();
});
