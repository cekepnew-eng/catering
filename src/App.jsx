import React from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  UtensilsCrossed,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Menu', href: '#menu' },
  { label: 'Area', href: '#area' },
  { label: 'Harga', href: '#harga' },
  { label: 'Testimoni', href: '#testimoni' },
]

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Catering Acara',
    text: 'Menu prasmanan, box lunch, dan paket acara keluarga hingga corporate event.',
  },
  {
    icon: Clock3,
    title: 'Delivery Tepat Waktu',
    text: 'Pengiriman terjadwal dengan tim yang siap menjaga rasa, tampilan, dan ketepatan waktu.',
  },
  {
    icon: Sparkles,
    title: 'Kustom Menu',
    text: 'Pilih kombinasi hidangan yang sesuai budget, tema, dan kebutuhan tamu Anda.',
  },
]

const reasons = [
  {
    icon: MapPin,
    title: 'Jangkauan Luas',
    text: 'Bogor Raya, Depok, sebagian Bekasi & Jakarta — satu tim siap hadir ke lokasi acara Anda.',
  },
  {
    icon: MessageCircle,
    title: 'CS Fast Response',
    text: 'Tim CS siap membantu setiap hari 07.00–22.00. Respon cepat, jelas, dan ramah.',
  },
  {
    icon: Clock3,
    title: 'Tepat Waktu',
    text: 'Acara tidak perlu menunggu lama. Pengiriman dan setup kami siap tepat waktu di hari H.',
  },
  {
    icon: Sparkles,
    title: 'Gratis Food Tasting',
    text: 'Belum yakin dengan rasa? Coba dulu menu pilihan kami secara gratis sebelum konfirmasi final.',
  },
]

const menuCards = [
  { src: '/catering1.png', title: 'Nasi Box', subtitle: 'Paket hemat dan praktis untuk kantor serta acara keluarga.' },
  { src: '/catering2.png', title: 'Prasmanan', subtitle: 'Pilihan hidangan variatif untuk acara besar dan formal.' },
  { src: '/catering3.png', title: 'Tumpeng & Snack', subtitle: 'Paket spesial untuk syukuran, ulang tahun, dan gathering.' },
]

const pricingPlans = [
  {
    name: 'Paket Hemat',
    price: 'Rp 25.000',
    text: 'Cocok untuk kantor, keluarga, dan acara kecil yang tetap ingin tampil istimewa.',
    features: ['Nasi box', 'Lauk pilihan', 'Porsi sesuai kebutuhan'],
  },
  {
    name: 'Paket Event',
    price: 'Rp 45.000',
    text: 'Pilihan terbaik untuk acara semi formal dengan rasa yang lebih lengkap dan rapi.',
    features: ['Prasmanan', 'Snack pendamping', 'Pengiriman & setup'],
  },
  {
    name: 'Custom Menu',
    price: 'Rp 75.000',
    text: 'Pilihan khusus sesuai tema acara, target tamu, dan kebutuhan menu Anda.',
    features: ['Menu kustom', 'Food tasting', 'Support event team'],
  },
]

const areaCards = [
  {
    label: 'Area Utama',
    title: 'Puncak & Bogor',
    items: ['Puncak', 'Cisarua', 'Megamendung', 'Ciawi', 'Gadog', 'Bogor Kota', 'Cibinong', 'Sentul'],
  },
  {
    label: 'Area Layanan',
    title: 'Depok & Sekitar',
    items: ['Depok Kota', 'Margonda', 'Cinere', 'Beji', 'Cimanggis', 'Sawangan'],
  },
  {
    label: 'Area Layanan',
    title: 'Bekasi & Sekitar',
    items: ['Bekasi Kota', 'Kabupaten Bekasi', 'Cileungsi', 'Gunung Putri', 'Jonggol'],
  },
  {
    label: 'Area Layanan',
    title: 'Jakarta & Tangerang',
    items: ['Jakarta Selatan', 'Jakarta Timur', 'Tangerang', 'Setiat', 'Jangkauan lebih jauh'],
  },
]

const testimonials = [
  {
    name: 'Anisa Chacha',
    source: 'Ulasan Google • Sep 2026',
    text: 'Nyari catering daerah puncak dan akhirnya memilih Ayo Catering. Rasanya enak, pelayanan cepat, dan hasilnya rapi untuk acara keluarga besar.',
  },
  {
    name: 'Rivan',
    source: 'Ulasan Google • Okt 2026',
    text: 'Sangat recommended untuk acara villa. Makanannya enak, pengirimannya tepat waktu, dan tampilannya rapi banget di acara.',
  },
  {
    name: 'Wanti One',
    source: 'Ulasan Google • Okt 2026',
    text: 'Pertama kali pesan ternyata kualitasnya bagus. Masakan enak, packaging oke, dan komunikasi terasa mudah untuk kebutuhan acara.',
  },
]

const trustBadges = ['Fast Response', 'Tepat Waktu', 'Halal MUI', '1.000+ Acara']

export default function App() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <div className={`page-shell ${scrolled ? 'scrolled' : ''}`}>
      <header className={`topbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="brand" aria-label="Ayo Catering logo">
          <img src="/logo.png" alt="Ayo Catering" className="brand-logo" />
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-link nav-cta" onClick={() => setMobileMenuOpen(false)}>
            Pesan Sekarang
          </a>
        </nav>

        <a href="#contact" className="cta-button desktop-cta">
          Pesan Sekarang
        </a>
      </header>

      <main className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow-pill">Catering Bogor Raya</span>

            <h1>
              AYO
              <span>Catering Bogor</span>
            </h1>

            <p className="lead">
              <strong>AYO Catering Bogor</strong> — Pasti Tepat Waktu, Pasti Sesuai Pesanan.
              Nasi box, prasmanan, snack, tumpeng, kambing guling &amp; liwetan — Jaminan diantar
              tepat waktu ke lokasi acara Anda di Seluruh Bogor, Jakarta, Depok, Tangerang &amp; Bekasi.
              Tersertifikasi Halal MUI, fast response 07.00–22.00.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-action">Pesan Sekarang</a>
              <a href="#menu" className="secondary-action">Lihat Menu</a>
            </div>

            <div className="trust-strip" aria-label="Trust indicators">
              {trustBadges.map((item) => (
                <span key={item} className="trust-pill">{item}</span>
              ))}
            </div>

            <ul className="hero-contact-list">
              <li><Phone size={16} /> 0812-8680-3447 (WhatsApp)</li>
              <li><Phone size={16} /> (0251) 829-8060</li>
              <li><MessageCircle size={16} /> catering@ayo-catering.com</li>
              <li><MapPin size={16} /> Jl. Citra No. 27, Batu Layang, Cisarua, Bogor</li>
            </ul>
          </div>

          <aside className="hero-panel" aria-label="Company highlights">
            <div className="panel-header">
              <span className="panel-kicker">Ayo Catering</span>
              <h2>Mulai Pemesanan</h2>
            </div>

            <a href="https://wa.me/6281286803447" className="panel-button primary-panel-button">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="whatsapp-mini-icon">
                <path d="M20.52 3.48A11.73 11.73 0 0 0 3.46 19.54L2 22l2.53-1.45A11.7 11.7 0 1 0 20.52 3.48Zm-7.12 17.03c-1.11 0-2.22-.3-3.18-.87l-.23-.13-1.5.86.8-1.46-.16-.25A9.79 9.79 0 0 1 2.2 12.02a9.86 9.86 0 0 1 18.92-4.4 9.86 9.86 0 0 1-7.72 16.89Zm5.4-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.75.97-.92 1.17-.17.2-.34.22-.63.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.79-1.69-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.5.15-.17.2-.29.3-.48.1-.18.05-.35-.02-.49-.08-.15-.66-1.58-.9-2.17-.24-.57-.48-.5-.66-.5h-.56c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.39s1.03 2.77 1.17 2.96c.15.19 2.02 3.08 4.9 4.32.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.11.55-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35Z" fill="currentColor"/>
              </svg>
              Chat WhatsApp Sekarang
            </a>

            <a href="tel:+6281286803447" className="panel-button secondary-panel-button">
              <Phone size={18} />
              Telepon (0251) 829-8060
            </a>

            <div className="panel-stats">
              <div>
                <strong>10+</strong>
                <span>Tahun pengalaman</span>
              </div>
              <div>
                <strong>3rb+</strong>
                <span>Acara sukses</span>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <section className="section-surface" id="menu" aria-label="Menu showcase">
        <div className="section-inner">
          <div className="section-heading">
            <span className="section-line" />
            <p className="eyebrow">Pilihan menu</p>
          </div>
          <h2 className="section-title">Semua jenis acara, semua kebutuhan Anda.</h2>

          <div className="gallery-grid">
            {menuCards.map((item) => (
              <article key={item.title} className="gallery-card">
                <img src={item.src} alt={item.title} />
                <div className="gallery-caption">
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface section-soft">
        <div className="section-inner">
          <div className="section-heading">
            <span className="section-line" />
            <p className="eyebrow">Kenapa memilih kami</p>
          </div>
          <h2 className="section-title">Pelayanan catering yang rapi, cepat, dan terasa istimewa.</h2>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="service-card">
                <div className="service-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface" id="harga">
        <div className="section-inner">
          <div className="section-heading">
            <span className="section-line" />
            <p className="eyebrow">Harga</p>
          </div>
          <h2 className="section-title">Pilih paket yang sesuai kebutuhan acara Anda.</h2>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className="pricing-card">
                <span className="pricing-label">{plan.name}</span>
                <h3>{plan.price}</h3>
                <p>{plan.text}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-inner">
          <div className="why-header-row">
            <span className="section-line why-line" />
            <p className="why-kicker">Kenapa AYO Catering?</p>
          </div>

          <h2 className="why-title">Catering yang Bisa Diandalkan — Di Mana Pun Acara Anda</h2>

          <div className="why-content">
            <div className="why-intro">
              <p>
                Sejak 2013, kami melayani lebih dari 3.000 acara per tahun — dari keluarga
                kecil hingga gathering perusahaan ratusan orang. Dengan armada pengiriman
                yang tersebar di Bogor Raya, kami hadir tepat waktu ke lokasi acara Anda,
                tanpa excuses.
              </p>

              <div className="halal-row">
                <img src="/halal.png" alt="Sertifikasi Halal MUI" className="halal-image" />

                <div className="halal-copy">
                  <h3>Tersertifikasi Halal MUI</h3>
                  <p>ID32110022120450525 · Seluruh produk terjamin halal</p>
                </div>
              </div>
            </div>

            <div className="why-grid">
              {reasons.map(({ icon: Icon, title, text }) => (
                <article key={title} className="why-card">
                  <div className="why-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface" id="area">
        <div className="section-inner">
          <div className="section-heading">
            <span className="section-line" />
            <p className="eyebrow">Area layanan</p>
          </div>
          <h2 className="section-title area-title">Seluruh Bogor Raya &amp; Sekitarnya</h2>

          <div className="area-grid">
            {areaCards.map((card) => (
              <article key={card.title} className="area-card">
                <span className="area-badge">{card.label}</span>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface testimonial-section" id="testimoni">
        <div className="section-inner">
          <div className="testimonial-header">
            <div className="section-heading">
              <span className="section-line" />
              <p className="eyebrow">Testimoni</p>
            </div>

            <div className="rating-box">
              <div className="stars">★★★★★</div>
              <div className="rating-value">5.0</div>
              <small>dari 1.000+ ulasan di Google</small>
            </div>
          </div>

          <h2 className="section-title testimonial-title">Kata mereka yang sudah merasakan.</h2>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <div className="quote-mark">“</div>
                <p>{testimonial.text}</p>

                <div className="reviewer-meta">
                  <div className="reviewer-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.source}</small>
                  </div>
                </div>

                <div className="review-stars">★★★★★</div>
              </article>
            ))}
          </div>

          <div className="testimonial-cta">
            <a href="https://www.google.com/search?q=ayo+catering" target="_blank" rel="noreferrer">
              Baca 1.000+ ulasan lain di Google
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-surface process-section">
        <div className="section-inner process-inner">
          <div className="process-heading-row">
            <span className="section-line process-line" />
            <p className="eyebrow">Cara Pemesanan</p>
          </div>

          <h2 className="process-title">Pesan dalam 4 Langkah Mudah</h2>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Chat WhatsApp</h3>
              <p>Hubungi kami via WA atau telepon. CS kami respon cepat setiap hari 07.00–22.00, termasuk weekend.</p>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Konsultasi Menu</h3>
              <p>Ceritakan jumlah tamu, jenis acara, dan lokasi. Kami bantu pilih menu yang paling cocok.</p>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Konfirmasi &amp; DP</h3>
              <p>Setujui dengan penawaran, lalu lakukan konfirmasi dan pembayaran DP untuk memesan jadwal.</p>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Kami Hadir Tepat Waktu</h3>
              <p>Di hari H kami tiba lebih awal di lokasi acara Anda. Nikmati menu yang siap disajikan dengan rapi.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="page-footer" id="contact">
        <div className="footer-inner">
          <div className="footer-copy">
            <div className="eyebrow-row footer-heading-row">
              <span className="section-line footer-line" />
              <p className="eyebrow">Hubungi kami</p>
            </div>

            <h2>Siap hadir ke lokasi acara Anda?</h2>
            <p>
              Konsultasi gratis, food tasting gratis, dan harga transparan. Percayakan kebutuhan catering acara Anda kepada kami sejak 2013.
            </p>
          </div>

          <div className="footer-contact-box">
            <div className="contact-badge">Ayo Catering</div>

            <ul className="contact-list">
              <li><Phone size={16} /> 0812-8680-3447 (WhatsApp)</li>
              <li><Phone size={16} /> (0251) 829-8060</li>
              <li><MessageCircle size={16} /> catering@ayo-catering.com</li>
              <li><MapPin size={16} /> Jl. Citra No. 27, Batu Layang, Cisarua, Bogor</li>
            </ul>

            <div className="footer-actions">
              <a href="tel:+6281286803447" className="phone-button">
                <Phone size={16} />
                Telepon sekarang
              </a>
              <a href="https://wa.me/6281286803447" className="whatsapp-button">
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Ayo Catering · Bogor Raya</span>
          <div className="footer-links">
            <span>Website Utama</span>
            <span>Instagram</span>
            <span>Privacy</span>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/6281286803447"
        className="floating-whatsapp"
        aria-label="Chat WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M20.52 3.48A11.73 11.73 0 0 0 3.46 19.54L2 22l2.53-1.45A11.7 11.7 0 1 0 20.52 3.48Zm-7.12 17.03c-1.11 0-2.22-.3-3.18-.87l-.23-.13-1.5.86.8-1.46-.16-.25A9.79 9.79 0 0 1 2.2 12.02a9.86 9.86 0 0 1 18.92-4.4 9.86 9.86 0 0 1-7.72 16.89Zm5.4-7.36c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.75.97-.92 1.17-.17.2-.34.22-.63.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.79-1.69-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.5.15-.17.2-.29.3-.48.1-.18.05-.35-.02-.49-.08-.15-.66-1.58-.9-2.17-.24-.57-.48-.5-.66-.5h-.56c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.39s1.03 2.77 1.17 2.96c.15.19 2.02 3.08 4.9 4.32.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.11.55-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35Z" fill="currentColor"/>
        </svg>
      </a>
    </div>
  )
}
