import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Flower2,
  Gift,
  Heart,
  Instagram,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  Mail,
} from 'lucide-react'

type NavItem = {
  label: string
  href: string
}

type GalleryItem = {
  src: string
  title: string
  subtitle: string
  featured?: boolean
}

const navItems: NavItem[] = [
  { label: 'בית', href: '#home' },
  { label: 'על המותג', href: '#about' },
  { label: 'הקולקציה', href: '#collection' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'תהליך הזמנה', href: '#process' },
  { label: 'יצירת קשר', href: '#contact' },
]

const galleryItems: GalleryItem[] = [
  { src: '/imgs/product1.jpg', title: 'נר בהתאמה אישית', subtitle: 'מסר אישי שהופך למתנה בלתי נשכחת', featured: true },
  { src: '/imgs/product2.jpg', title: 'דובי פרחים', subtitle: 'עיצוב מתוק ועדין עם נראות מושלמת לצילום' },
  { src: '/imgs/product3.jpg', title: 'קולקציית דובים', subtitle: 'מגוון צבעים וסגנונות לאירועים ומתנות' },
  { src: '/imgs/product4.jpg', title: 'פרח פיסולי', subtitle: 'פריט בולט שמכניס אופי עדין לבית' },
  { src: '/imgs/product5.jpg', title: 'דובי ורוד', subtitle: 'מושלם למתנות, שולחנות קונספט ומארזים' },
  { src: '/imgs/candle1.jpg', title: 'נר טבעי', subtitle: 'נראות חמימה עם טקסטורה אורגנית' },
  { src: '/imgs/candle2.jpg', title: 'סטייל בוטיק', subtitle: 'מראה אלגנטי ונקי לחלל מעוצב' },
  { src: '/imgs/candle4.jpg', title: 'אווירה רגועה', subtitle: 'נרות שמחברים בין עיצוב, ריח וחוויה' },
]

const collectionCards = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'נרות בעבודת יד',
    text: 'כל נר נוצר באהבה, בגימור מוקפד ובמראה שמרגיש בוטיקי, נקי ויוקרתי.',
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: 'התאמה אישית',
    text: 'צבעים, שמות, הקדשות וקונספטים למתנות, ימי הולדת, אירועים ופינוקים לבית.',
  },
  {
    icon: <Gift className="h-5 w-5" />,
    title: 'מתנה עם נוכחות',
    text: 'פריט שגם מרגש, גם מצטלם יפה וגם מוסיף טאץ׳ מעוצב לכל רגע מיוחד.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'שולחים השראה',
    text: 'מספרים לי מה אהבתם, לאיזה אירוע או למי מיועדת המתנה ומה הכיוון שאתם מחפשים.',
  },
  {
    number: '02',
    title: 'בוחרים התאמה',
    text: 'מחדדים צבעים, עיצוב, טקסט אישי וסוג הנר כדי ליצור תוצאה שמרגישה בדיוק שלכם.',
  },
  {
    number: '03',
    title: 'מקבלים יצירה מוכנה',
    text: 'אני יוצרת, אורזת ודואגת לחוויית מסירה יפה, כך שהנר מגיע מוכן להרשים.',
  },
]

const testimonials = [
  '“השילוב בין עדינות, ריח ונראות היה פשוט מושלם. קיבלתי המון מחמאות על המתנה.”',
  '“רואים את ההשקעה בפרטים הקטנים. הנר הגיע יפייפה, מדויק וממש ברמה אחרת.”',
  '“זה לא עוד נר — זה פריט עיצובי עם נוכחות. בדיוק הסטייל שחיפשתי.”',
]

const waLink =
  'https://wa.me/972528645333?text=%D7%94%D7%99%D7%99%20%D7%90%D7%95%D7%A8%D7%90%D7%9C%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%94%D7%A0%D7%A8%D7%95%D7%AA%20%D7%A9%D7%9C%D7%9A%20%D7%95%D7%A2%D7%9C%20%D7%94%D7%AA%D7%90%D7%9E%D7%94%20%D7%90%D7%99%D7%A9%D7%99%D7%AA.'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const featuredImages = useMemo(
    () => [galleryItems[0], galleryItems[1], galleryItems[5]],
    []
  )

  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f5ef] text-[#231f20]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;800&family=Cormorant+Garamond:wght@500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Heebo', sans-serif; background: #f8f5ef; }
        h1,h2,h3,h4 { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(222,205,179,0.55),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.9),transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-[#e9e0d4]/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/imgs/orel-logo.png"
              alt="Orel logo"
              className="h-12 w-auto rounded-xl object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-base font-semibold tracking-[0.28em] text-[#b89a7a]">OREL</p>
              <p className="text-sm text-[#7b6a59]">נרות בעבודת יד</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-[#5f5347] transition hover:text-[#b48b60]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:Oreliii1800@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-[#e8dece] px-4 py-2 text-sm font-medium text-[#6c5c4b] transition hover:border-[#d5b896] hover:text-[#b48b60]"
            >
              <Mail className="h-4 w-4" />
              מייל
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#231f20] px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(35,31,32,0.18)] transition hover:-translate-y-0.5 hover:bg-[#b48b60]"
            >
              <MessageCircle className="h-4 w-4" />
              דברו איתי
            </a>
          </div>

          <button
            type="button"
            aria-label="פתח תפריט"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfce] bg-white text-[#231f20] shadow-sm lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#efe6da] bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#4f453b] transition hover:bg-[#faf6f1]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#231f20] px-4 py-3 text-sm font-medium text-white"
              >
                <MessageCircle className="h-4 w-4" />
                דברו איתי בוואטסאפ
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#eadfce] bg-white/90 px-4 py-2 text-sm text-[#7e6853] shadow-sm">
                <Flower2 className="h-4 w-4 text-[#b48b60]" />
                בוטיק לנרות מעוצבים בעבודת יד
              </div>

              <img
                src="/imgs/orel-logo.png"
                alt="לוגו אוראל"
                className="mt-6 h-auto w-full max-w-[380px] rounded-[28px] border border-[#efe6da] bg-[#fcfaf7] p-4 shadow-[0_30px_80px_rgba(180,139,96,0.08)]"
              />

              <h1 className="mt-8 max-w-2xl text-5xl font-semibold leading-[0.95] text-[#231f20] sm:text-6xl lg:text-7xl">
                נרות מעוצבים שמכניסים
                <span className="block text-[#b48b60]">יוקרה, רגש ואווירה</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#625649] sm:text-xl">
                אוראל יוצרת נרות בעבודת יד עם קו נקי, נשי ויוקרתי — למתנות אישיות,
                לאירועים מיוחדים ולבתים שאוהבים פריטים עם נוכחות עדינה ומלאת סטייל.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#231f20] px-7 py-4 text-base font-medium text-white shadow-[0_16px_45px_rgba(35,31,32,0.18)] transition hover:-translate-y-1 hover:bg-[#b48b60]"
                >
                  להזמנה והתאמה אישית
                  <ArrowLeft className="h-4 w-4" />
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ddd1bf] bg-white px-7 py-4 text-base font-medium text-[#4d433a] transition hover:border-[#b48b60] hover:text-[#b48b60]"
                >
                  לצפייה בקולקציה
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
                {[
                  ['100%', 'עבודת יד'],
                  ['Boutique', 'סטייל נקי ויוקרתי'],
                  ['Custom', 'אפשרות להתאמה אישית'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-[#ece2d6] bg-white/95 p-4 shadow-[0_16px_40px_rgba(83,61,37,0.05)]">
                    <div className="text-2xl font-semibold text-[#b48b60]">{value}</div>
                    <div className="mt-1 text-sm text-[#746556]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-5 sm:pt-16">
                  {featuredImages.slice(0, 2).map((item) => (
                    <div
                      key={item.src}
                      className="overflow-hidden rounded-[30px] border border-white/70 bg-white p-3 shadow-[0_26px_70px_rgba(120,95,67,0.12)]"
                    >
                      <img src={item.src} alt={item.title} className="h-[310px] w-full rounded-[22px] object-cover" />
                    </div>
                  ))}
                </div>
                <div className="space-y-5">
                  <div className="rounded-[32px] border border-[#efe3d2] bg-[linear-gradient(180deg,#ffffff_0%,#fbf7f1_100%)] p-6 shadow-[0_30px_80px_rgba(177,146,112,0.14)]">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#f5eee4] px-3 py-1 text-xs font-medium text-[#8e6f4f]">
                      <Sparkles className="h-3.5 w-3.5" />
                      הבחירה המעוצבת
                    </div>
                    <h2 className="mt-4 text-3xl font-semibold text-[#231f20]">נראות שקטה, רושם גדול</h2>
                    <p className="mt-3 text-base leading-7 text-[#6f6154]">
                      עיצוב נקי, פלטת צבעים רכה ותחושה בוטיקית שהופכת כל נר לפריט שמצטלם נפלא וגם מרגיש מיוחד בידיים.
                    </p>
                    <div className="mt-6 rounded-[26px] border border-[#f0e6da] bg-white p-3">
                      <img
                        src={featuredImages[2].src}
                        alt={featuredImages[2].title}
                        className="h-[350px] w-full rounded-[20px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] border border-[#ece1d3] bg-white p-8 shadow-[0_18px_60px_rgba(96,78,55,0.07)]">
              <span className="text-sm font-medium tracking-[0.3em] text-[#b48b60]">ABOUT OREL</span>
              <h2 className="mt-4 text-4xl font-semibold text-[#231f20] sm:text-5xl">מותג נשי, נקי ומוקפד</h2>
              <p className="mt-6 text-lg leading-8 text-[#63574c]">
                מאחורי אוראל עומדת אהבה לפרטים הקטנים: חומרים שנבחרים בקפידה,
                שפה עיצובית עדינה ורצון ליצור חוויה שמרגישה אישית באמת. כל נר נועד
                לשלב בין יופי, רגש ונגיעה ייחודית שמתאימה למתנה או לפינה מיוחדת בבית.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {collectionCards.map((card) => (
                <div key={card.title} className="rounded-[28px] border border-[#ede3d8] bg-[#fcfaf7] p-7 shadow-[0_18px_45px_rgba(120,92,64,0.06)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(120,92,64,0.12)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4ece0] text-[#b48b60]">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 text-3xl font-semibold text-[#2a2522]">{card.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#706255]">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="collection" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-medium tracking-[0.3em] text-[#b48b60]">SIGNATURE COLLECTION</span>
              <h2 className="mt-3 text-4xl font-semibold text-[#231f20] sm:text-5xl">קולקציה שנועדה להישאר בזיכרון</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#6f6256]">
              נרות מעוצבים שמתאימים למתנה אישית, לקישוט שולחן, לפינוק ביתי או לכל מי שמחפשת פריט עם נראות רכה וייחודית.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {galleryItems.slice(0, 3).map((item, index) => (
              <article key={item.src} className="group overflow-hidden rounded-[32px] border border-[#ece2d7] bg-white shadow-[0_20px_65px_rgba(120,92,64,0.08)]">
                <div className="overflow-hidden">
                  <img src={item.src} alt={item.title} className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 ? 'h-[420px]' : 'h-[320px]'}`} />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-semibold text-[#231f20]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#6f6256]">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="rounded-[36px] border border-[#ebe1d2] bg-white p-8 shadow-[0_20px_60px_rgba(95,73,49,0.08)] md:p-10">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: <ShieldCheck className="h-5 w-5" />, title: 'איכות מוקפדת', text: 'מראה נקי, גימור מדויק וחוויה שמרגישה ברמה גבוהה מהרגע הראשון.' },
                { icon: <Heart className="h-5 w-5" />, title: 'נגיעה אישית', text: 'לא עוד מוצר מדף — אלא יצירה שיש בה מחשבה, רגש והתאמה לסיפור שלכם.' },
                { icon: <CheckCircle2 className="h-5 w-5" />, title: 'חוויה נעימה ופשוטה', text: 'תהליך הזמנה קל, תקשורת נעימה ותוצאה שמכבדת גם את ההזמנה וגם את המקבלת.' },
              ].map((item) => (
                <div key={item.title} className="rounded-[28px] bg-[#fcfaf7] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4ece0] text-[#b48b60]">{item.icon}</div>
                  <h3 className="mt-5 text-3xl font-semibold text-[#241f1d]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#706357]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-medium tracking-[0.3em] text-[#b48b60]">GALLERY</span>
              <h2 className="mt-3 text-4xl font-semibold text-[#231f20] sm:text-5xl">גלריה של עבודות קיימות</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#6e6257]">שמרתי את כל התמונות הקיימות באתר, וסידרתי אותן בפריסה נקייה, אוורירית ויוקרתית שמתאימה למותג.</p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.src}
                className={`group overflow-hidden rounded-[30px] border border-[#ebe0d2] bg-white p-3 shadow-[0_18px_60px_rgba(120,92,64,0.07)] ${item.featured ? 'xl:col-span-2' : ''}`}
              >
                <div className="overflow-hidden rounded-[22px]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index % 3 === 0 ? 'h-[420px]' : 'h-[320px]'}`}
                  />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="text-2xl font-semibold text-[#231f20]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6f6256]">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[36px] border border-[#ece2d6] bg-white p-8 shadow-[0_18px_60px_rgba(104,82,57,0.08)] md:p-10">
              <span className="text-sm font-medium tracking-[0.3em] text-[#b48b60]">PROCESS</span>
              <h2 className="mt-4 text-4xl font-semibold text-[#231f20] sm:text-5xl">איך זה עובד?</h2>
              <div className="mt-8 space-y-6">
                {processSteps.map((step) => (
                  <div key={step.number} className="flex gap-4 rounded-[28px] border border-[#f0e7db] bg-[#fcfaf7] p-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f4ece0] text-lg font-semibold text-[#b48b60]">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-3xl font-semibold text-[#231f20]">{step.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[#6e6155]">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[36px] border border-[#ece1d5] bg-[linear-gradient(180deg,#fffefc_0%,#f8f2ea_100%)] p-8 shadow-[0_18px_60px_rgba(104,82,57,0.08)]">
                <h3 className="text-3xl font-semibold text-[#231f20]">מה הלקוחות אוהבות במיוחד?</h3>
                <div className="mt-6 space-y-4">
                  {testimonials.map((quote) => (
                    <div key={quote} className="rounded-[24px] border border-white/70 bg-white/90 p-5 text-base leading-7 text-[#61564c] shadow-sm">
                      {quote}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[36px] border border-[#ece2d5] bg-white p-8 shadow-[0_18px_60px_rgba(104,82,57,0.08)]">
                <h3 className="text-3xl font-semibold text-[#231f20]">מוכנים להזמין?</h3>
                <p className="mt-3 text-base leading-7 text-[#6a5d50]">
                  אם יש לכם רעיון, השראה או פשוט רצון ליצור מתנה יפה באמת — אני כאן כדי לעזור לכם להפוך אותו לנר שמרגיש מיוחד.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#231f20] px-6 py-4 text-white transition hover:bg-[#b48b60]">
                    <MessageCircle className="h-4 w-4" />
                    כתבו לי בוואטסאפ
                  </a>
                  <a href="tel:0528645333" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e1d5c5] px-6 py-4 text-[#4e4339] transition hover:border-[#b48b60] hover:text-[#b48b60]">
                    <Phone className="h-4 w-4" />
                    052-864-5333
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="overflow-hidden rounded-[40px] border border-[#e9dfd2] bg-[linear-gradient(135deg,#ffffff_0%,#f7f1e9_100%)] p-8 shadow-[0_26px_80px_rgba(107,83,56,0.1)] md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="text-sm font-medium tracking-[0.3em] text-[#b48b60]">CONTACT</span>
                <h2 className="mt-4 text-4xl font-semibold text-[#231f20] sm:text-5xl">בואו ניצור משהו יפה יחד</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#625649]">
                  להזמנות, התאמות אישיות או שאלות על הקולקציה — אפשר לשלוח הודעה,
                  להתקשר או לשלוח מייל. חוויית הקנייה באתר עוצבה מחדש כך שיהיה קל להבין,
                  להתרשם וליצור קשר במהירות.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#231f20] px-7 py-4 text-white transition hover:bg-[#b48b60]">
                    <MessageCircle className="h-4 w-4" />
                    התחלת שיחה בוואטסאפ
                  </a>
                  <a href="mailto:Oreliii1800@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dfd2c1] bg-white px-7 py-4 text-[#4f4439] transition hover:border-[#b48b60] hover:text-[#b48b60]">
                    <Mail className="h-4 w-4" />
                    שליחת מייל
                  </a>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-[0_16px_50px_rgba(97,74,49,0.08)]">
                <div className="space-y-4">
                  {[
                    { icon: <Phone className="h-5 w-5" />, label: 'טלפון', value: '052-864-5333', href: 'tel:0528645333' },
                    { icon: <Mail className="h-5 w-5" />, label: 'אימייל', value: 'Oreliii1800@gmail.com', href: 'mailto:Oreliii1800@gmail.com' },
                    { icon: <Instagram className="h-5 w-5" />, label: 'אינסטגרם', value: 'ניתן להוסיף כאן קישור לחשבון', href: '#' },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-4 rounded-[24px] border border-[#f0e7da] bg-[#fcfaf7] p-5 transition hover:border-[#dcc8b0] hover:bg-white">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4ece0] text-[#b48b60]">{item.icon}</div>
                      <div>
                        <div className="text-sm text-[#907d68]">{item.label}</div>
                        <div className="mt-1 text-base font-medium text-[#2d2723]">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ece1d3] bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/imgs/orel-logo.png" alt="Orel logo" className="h-11 w-auto rounded-xl border border-[#f0e6da]" />
            <div>
              <div className="text-sm font-semibold tracking-[0.3em] text-[#b48b60]">OREL</div>
              <div className="text-sm text-[#6e6154]">Handmade Candles</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[#6e6154]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#b48b60]">
                {item.label}
              </a>
            ))}
          </div>

          <div className="text-sm text-[#8a7b6c]">© כל הזכויות שמורות לאוראל</div>
        </div>
      </footer>
    </div>
  )
}
