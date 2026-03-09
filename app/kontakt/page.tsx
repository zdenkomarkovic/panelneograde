import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import {
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  WHATSAPP_NUMBER,
  FACEBOOK_URL,
} from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktirajte Alek Panelne Ograde za besplatnu procenu. Pozovite +381611663050, pišite na WhatsApp ili email. Dolazimo na teren, prevoz i montaža obezbeđeni.",
  url: "https://panelneogradealek.rs/kontakt",
});

const contactCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: "Telefon",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
    sub: "Dostupni svakog dana",
    bg: "bg-green-50",
    iconBg: "bg-green-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Pišite nam",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    sub: "Brz odgovor garantovan",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-600",
    external: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    sub: "Pošaljite upit",
    bg: "bg-blue-50",
    iconBg: "bg-blue-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: "Facebook",
    value: "Alek Panelne Ograde",
    href: FACEBOOK_URL,
    sub: "Pratite nas na Facebooku",
    bg: "bg-indigo-50",
    iconBg: "bg-indigo-600",
    external: true,
  },
];

export default function KontaktPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero banner */}
        <div className="bg-green-900 pt-24 pb-14 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-green-300/70 text-sm mb-4">
              <Link href="/" className="hover:text-green-300 transition-colors">
                Početna
              </Link>
              <span>/</span>
              <span className="text-green-300">Kontakt</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
              Kontaktirajte nas
            </h1>
            <p className="text-green-200/80 text-lg max-w-xl">
              Pozovite ili pišite — odgovaramo brzo. Besplatna procena na terenu.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: contact info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Načini kontakta
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactCards.map((card) => (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className={`${card.bg} rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow group`}
                  >
                    <div className={`${card.iconBg} text-white rounded-xl p-2.5 flex-shrink-0`}>
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-0.5">
                        {card.label}
                      </div>
                      <div className="font-bold text-gray-900 text-sm group-hover:text-green-700 transition-colors break-all">
                        {card.value}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">{card.sub}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Info box */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Šta nudimo</h3>
                <ul className="space-y-3">
                  {[
                    "Dolazimo na teren i merimo besplatno",
                    "Prevoz materijala do vaše lokacije",
                    "Profesionalna montaža sa iskusnom ekipom",
                    "Usadna i anker ugradnja stubova",
                    "Savete za izbor visine, boje i tipa ograde",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                      <svg
                        className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
