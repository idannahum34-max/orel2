import { useState } from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  Flower2,
  Gift,
  Heart,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

type NavItem = {
  label: string
  href: string
}

type GalleryItem = {
  src: string
  title: string
  subtitle: string
}

const navItems: NavItem[] = [
  { label: 'בית', href: '#home' },
  { label: 'על המותג', href: '#about' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'הזמנה', href: '#process' },
  { label: 'יצירת קשר', href: '#contact' },
]

const galleryItems: GalleryItem[] = [
  {
    src: '/imgs/product3.jpg',
    title: 'קולקציית דובים',
    subtitle: 'דובים מעוצבים בעבודת יד שמתאימים למתנה, לשולחן חגיגי או לפינה יפה בבית.',
  },
  {
    src: '/imgs/product4.jpg',
    title: 'פרח פיסולי',
    subtitle: 'פריט עדין ונעים לעין, כזה שמוסיף רוך וסטייל בלי להתאמץ יותר מדי.',
  },
  {
    src: '/imgs/product5.jpg',
    title: 'דובי ורוד',
    subtitle: 'מתנה מתוקה עם נוכחות, שמרגישה אישית ומיוחדת מהרגע הראשון.',
  },
]

const collectionCards = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'עבודת יד אמיתית',
    text: 'כל פריט נעשה באהבה, בסבלנות ועם תשומת לב לפרטים הקטנים.',
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: 'התאמה אישית',
    text: 'אפשר לבחור שמות, הקדשות, צבעים וסגנון כדי שהמתנה תרגיש בדיוק שלכם.',
  },
  {
    icon: <Gift className="h-5 w-5" />,
    title: 'מתנה עם לב',
    text: 'לימי הולדת, לאירועים או פשוט כדי לשמח — עם מראה יפה ותחושה אישית.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'מדברות על הכיוון',
    text: 'אתן מספרות לי למי מיועדת המתנה, מה אהבתן ואיזה סגנון אתן מחפשות.',
  },
  {
    number: '02',
    title: 'בוחרות את הפרטים',
    text: 'יחד בוחרות צבעים, טקסט אישי, צורה או מארז — עד שהכול מרגיש נכון.',
  },
  {
    number: '03',
    title: 'אני יוצרת בשבילכן',
    text: 'הפריט מוכן בעבודת יד, נארז באהבה ומחכה להגיע למי שצריך לקבל אותו.',
  },
]

const benefits = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'גימור נקי', text: 'מראה עדין, מסודר ונעים לעין, בלי עומס ובלי רעש מיותר.' },
  { icon: <Heart className="h-5 w-5" />, title: 'יחס אישי', text: 'אני זמינה להקשיב, לדייק ולעזור לבחור את מה שהכי מתאים.' },
  { icon: <CheckCircle2 className="h-5 w-5" />, title: 'מתאים למלא רגעים', text: 'מתנה מרגשת, תוספת לאירוע או פריט קטן שעושה אווירה בבית.' },
]

const phoneNumber = '052-864-5333'
const email = 'Oreliii1800@gmail.com'
const waLink =
  'https://wa.me/972528645333?text=%D7%94%D7%99%D7%99%20%D7%90%D7%95%D7%A8%D7%90%D7%9C%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A0%D7%A8%D7%95%D7%AA%20%D7%91%D7%A2%D7%91%D7%95%D7%93%D7%AA%20%D7%99%D7%93%20%D7%95%D7%94%D7%AA%D7%90%D7%9E%D7%94%20%D7%90%D7%99%D7%A9%D7%99%D7%AA.'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div dir="rtl" className="min-h-screen overflow-x-hidden bg-[#f8f3ec] text-[#241f1d]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.9),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(221,201,174,0.45),transparent_34%),linear-gradient(180deg,#fbf8f2_0%,#f6efe6_100%)]" />

      <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-[#fbf8f2]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Orel Handmade Candles">
            <img src="/imgs/orel-logo.png" alt="Orel Handmade Candles" className="h-14 w-14 rounded-2xl object-cover object-center shadow-sm sm:h-16 sm:w-16" />
            <div>
              <div className="text-lg font-semibold tracking-[0.28em] text-[#2d2926]">OREL</div>
              <div className="text-xs font-medium text-[#927b64] sm:text-sm">נרות בעבודת יד</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-[#67594b] transition hover:text-[#a77e56]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-full border border-[#dfd0bd] bg-white/70 px-4 py-2 text-sm font-medium text-[#594d42] transition hover:border-[#b99772] hover:text-[#9c724e]">
              <Mail className="h-4 w-4" />
              מייל
            </a>
            <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#231f20] px-5 py-2.5 text-sm font-medium text-white shadow-[0_14px_34px_rgba(35,31,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#a77e56]">
              <MessageCircle className="h-4 w-4" />
              להזמנה
            </a>
          </div>

          <button type="button" aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'} onClick={() => setMenuOpen((prev) => !prev)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dfd0bd] bg-white text-[#241f1d] shadow-sm lg:hidden">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#eadfce] bg-[#fbf8f2] lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-medium text-[#4f453b] transition hover:bg-white">
                  {item.label}
                </a>
              ))}
              <a href={waLink} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#231f20] px-4 py-3 text-sm font-medium text-white">
                <MessageCircle className="h-4 w-4" />
                כתבו בוואטסאפ
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e7d9c8] bg-white/78 px-4 py-2 text-sm font-medium text-[#80684f] shadow-sm">
                <Flower2 className="h-4 w-4 text-[#a77e56]" />
                עבודות יד בהתאמה אישית
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#241f1d] sm:text-5xl lg:text-6xl">
                נרות ומתנות שנעשים מכל הלב
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#625548]">
                אני יוצרת נרות, פריטי שעווה ומתנות בעבודת יד — עם אהבה לפרטים הקטנים, לקו נקי ולתחושה אישית
                שנשארת גם אחרי שמעניקים את המתנה.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#231f20] px-7 py-4 text-base font-medium text-white shadow-[0_18px_42px_rgba(35,31,32,0.18)] transition hover:-translate-y-1 hover:bg-[#a77e56]">
                  להזמנה והתאמה אישית
                  <ArrowLeft className="h-4 w-4" />
                </a>
                <a href="#gallery" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9c8b4] bg-white/80 px-7 py-4 text-base font-medium text-[#4d433a] transition hover:border-[#a77e56] hover:text-[#a77e56]">
                  לצפייה בגלריה
                </a>
              </div>

              <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  ['100%', 'עבודת יד'],
                  ['אישי', 'התאמה אישית'],
                  ['באהבה', 'עם מחשבה על הפרטים'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-[#eadfce] bg-white/80 p-4 shadow-[0_18px_40px_rgba(83,61,37,0.05)]">
                    <div className="text-2xl font-semibold text-[#a77e56]">{value}</div>
                    <div className="mt-1 text-sm text-[#746556]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr] sm:items-stretch">
                <div className="overflow-hidden rounded-[34px] border border-white/75 bg-white p-3 shadow-[0_26px_70px_rgba(120,95,67,0.15)]">
                  <img src="/imgs/product1.jpg" alt="נר בהתאמה אישית" className="h-[420px] w-full rounded-[26px] object-cover sm:h-[560px]" />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="overflow-hidden rounded-[30px] border border-white/75 bg-white p-3 shadow-[0_22px_60px_rgba(120,95,67,0.12)]">
                    <img src="/imgs/product2.jpg" alt="דובי פרחים" className="h-[250px] w-full rounded-[22px] object-cover sm:h-[300px]" />
                  </div>

                  <div className="rounded-[30px] border border-[#eadfce] bg-[#fffaf4] p-6 shadow-[0_22px_60px_rgba(120,95,67,0.1)]">
                    <h2 className="text-2xl font-semibold text-[#241f1d]">הסגנון של OREL</h2>
                    <p className="mt-3 text-base leading-7 text-[#67594b]">
                      עדין, חם ואישי. אני אוהבת ליצור פריטים שמרגישים יפים ונעימים — כאלה שכיף לתת, וכיף לא פחות
                      לקבל.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2 text-sm text-[#7a6a5a]">
                      <span className="rounded-full bg-white px-3 py-2">שמות והקדשות</span>
                      <span className="rounded-full bg-white px-3 py-2">מתנות לאירועים</span>
                      <span className="rounded-full bg-white px-3 py-2">עיצוב נקי ונעים</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-[#eadfce] bg-white/82 p-7 shadow-[0_18px_60px_rgba(96,78,55,0.07)] md:p-9">
              <span className="text-sm font-semibold tracking-[0.25em] text-[#a77e56]">ABOUT OREL</span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#241f1d] sm:text-5xl">קצת עליי</h2>
              <p className="mt-5 text-lg leading-8 text-[#63574c]">
                OREL נולד מתוך אהבה לעיצוב עדין ולמתנות שיש בהן רגש. כל פריט שאני יוצרת מקבל את תשומת הלב שמגיעה לו —
                מהצורה והצבע ועד התחושה שהוא משאיר אצל מי שמקבל אותו.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {collectionCards.map((card) => (
                <div key={card.title} className="rounded-[28px] border border-[#eadfce] bg-[#fffaf4]/86 p-6 shadow-[0_18px_45px_rgba(120,92,64,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(120,92,64,0.12)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2e7d8] text-[#a77e56]">{card.icon}</div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#2a2522]">{card.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#706255]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="rounded-[36px] border border-[#eadfce] bg-white/82 p-6 shadow-[0_20px_60px_rgba(95,73,49,0.08)] md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-[28px] bg-[#fffaf4] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f2e7d8] text-[#a77e56]">{item.icon}</div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#241f1d]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#706357]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-semibold tracking-[0.25em] text-[#a77e56]">GALLERY</span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#241f1d] sm:text-5xl">גלריה</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#6e6257]">
              עוד עבודות שאפשר לראות, לקבל מהן השראה ולהרגיש את הקו של המותג.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article key={item.src} className={`group overflow-hidden rounded-[30px] border border-[#eadfce] bg-white p-3 shadow-[0_18px_60px_rgba(120,92,64,0.07)] ${index === 0 ? 'sm:col-span-2 xl:col-span-2' : ''}`}>
                <div className="overflow-hidden rounded-[22px]">
                  <img src={item.src} alt={item.title} className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 ? 'h-[360px] md:h-[420px]' : 'h-[320px]'}`} />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-2xl font-semibold text-[#241f1d]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6f6256]">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[36px] border border-[#eadfce] bg-white/84 p-7 shadow-[0_18px_60px_rgba(104,82,57,0.08)] md:p-9">
              <span className="text-sm font-semibold tracking-[0.25em] text-[#a77e56]">ORDER PROCESS</span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#241f1d] sm:text-5xl">איך מזמינים?</h2>
              <div className="mt-8 space-y-4">
                {processSteps.map((step) => (
                  <div key={step.number} className="flex gap-4 rounded-[28px] border border-[#efe4d6] bg-[#fffaf4] p-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f2e7d8] text-lg font-semibold text-[#a77e56]">{step.number}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#241f1d]">{step.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[#6e6155]">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[36px] border border-[#eadfce] bg-[linear-gradient(180deg,#fffefc_0%,#f8f2ea_100%)] p-7 shadow-[0_18px_60px_rgba(104,82,57,0.08)] md:p-8">
                <h3 className="text-2xl font-semibold text-[#241f1d]">מה אפשר להזמין?</h3>
                <div className="mt-5 space-y-3">
                  {[
                    'נרות עם שמות, הקדשות או מסר אישי.',
                    'מתנות לאירועים, ימי הולדת ומארזים קטנים עם טאץ׳ אישי.',
                    'פריטים בעיצוב עדין שמתאימים גם לבית וגם כמתנה.',
                  ].map((item) => (
                    <div key={item} className="rounded-[24px] border border-white/75 bg-white/88 p-5 text-base leading-7 text-[#61564c] shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[36px] border border-[#eadfce] bg-white/86 p-7 shadow-[0_18px_60px_rgba(104,82,57,0.08)] md:p-8">
                <h3 className="text-2xl font-semibold text-[#241f1d]">רוצות להזמין?</h3>
                <p className="mt-3 text-base leading-7 text-[#6a5d50]">
                  שלחו לי הודעה, ספרו לי מה אתן מחפשות, ונבנה יחד משהו יפה ומדויק בשבילכן.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#241f1d] px-6 py-4 text-white transition hover:bg-[#a77e56]">
                    <MessageCircle className="h-4 w-4" />
                    כתבו בוואטסאפ
                  </a>
                  <a href="tel:0528645333" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9c8b4] bg-white px-6 py-4 text-[#4e4339] transition hover:border-[#a77e56] hover:text-[#a77e56]">
                    <Phone className="h-4 w-4" />
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="overflow-hidden rounded-[40px] border border-[#eadfce] bg-[linear-gradient(135deg,#ffffff_0%,#f7f1e9_100%)] p-7 shadow-[0_26px_80px_rgba(107,83,56,0.1)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="text-sm font-semibold tracking-[0.25em] text-[#a77e56]">CONTACT</span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#241f1d] sm:text-5xl">דברו איתי</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#625649]">
                  אם ראיתן משהו שאהבתן או שיש לכן רעיון למתנה אישית — אני כאן. אפשר לשלוח הודעה, להתקשר או לשלוח
                  מייל.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#241f1d] px-7 py-4 text-white transition hover:bg-[#a77e56]">
                    <MessageCircle className="h-4 w-4" />
                    התחלת שיחה בוואטסאפ
                  </a>
                  <a href={`mailto:${email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9c8b4] bg-white px-7 py-4 text-[#4f4439] transition hover:border-[#a77e56] hover:text-[#a77e56]">
                    <Mail className="h-4 w-4" />
                    שליחת מייל
                  </a>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/80 bg-white/90 p-5 shadow-[0_16px_50px_rgba(97,74,49,0.08)] md:p-6">
                <div className="space-y-4">
                  {[
                    { icon: <Phone className="h-5 w-5" />, label: 'טלפון', value: phoneNumber, href: 'tel:0528645333' },
                    { icon: <Mail className="h-5 w-5" />, label: 'אימייל', value: email, href: `mailto:${email}`, ltr: true },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-4 rounded-[24px] border border-[#efe4d6] bg-[#fffaf4] p-5 transition hover:border-[#d3b996] hover:bg-white">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f2e7d8] text-[#a77e56]">{item.icon}</div>
                      <div className="min-w-0">
                        <div className="text-sm text-[#907d68]">{item.label}</div>
                        <div dir={item.ltr ? 'ltr' : 'rtl'} className="mt-1 break-words text-base font-medium text-[#2d2723]">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-5 rounded-[26px] border border-[#efe4d6] bg-[#fffaf4] p-5">
                  <h3 className="text-2xl font-semibold text-[#241f1d]">בשביל מתנה שמרגישה אישית</h3>
                  <p className="mt-3 text-base leading-7 text-[#6b5f53]">
                    אם חשוב לכן שהמתנה תרגיש מושקעת, עדינה ומדויקת — אני אשמח ליצור אותה יחד איתכן.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eadfce] bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-center sm:px-6 lg:px-8">
          <div className="text-base font-semibold tracking-[0.28em] text-[#241f1d]">OREL</div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#6e6154]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#a77e56]">
                {item.label}
              </a>
            ))}
          </div>
          <div className="text-sm text-[#8a7b6c]">© OREL Handmade Candles</div>
        </div>
      </footer>
    </div>
  )
}
