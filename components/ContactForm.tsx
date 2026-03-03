"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER, EMAIL } from "@/lib/constants";

const productOptions = [
  "3D Panelna ograda",
  "2D Panelna ograda",
  "Klizna kapija",
  "Pešačka kapija",
  "PVC traka",
  "Komplet ograda + kapija",
  "Ostalo",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    product: productOptions[0]!,
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Ime je obavezno";
    if (!form.phone.trim()) e.phone = "Telefon je obavezan";
    if (!form.message.trim()) e.message = "Poruka je obavezna";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((er) => ({ ...er, [name]: undefined }));
    }
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const text = [
      `Zdravo! 👋`,
      `Ime: ${form.name}`,
      `Telefon: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Zainteresovan/a za: ${form.product}`,
      ``,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  const handleEmail = () => {
    if (!validate()) return;
    const body = [
      `Ime: ${form.name}`,
      `Telefon: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Proizvod: ${form.product}`,
      ``,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Upit – ${form.product}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Poruka je poslata!</h3>
        <p className="text-green-700 mb-6">
          Odgovorićemo vam u najkraćem mogućem roku.
        </p>
        <button
          onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", product: productOptions[0]!, message: "" }); }}
          className="text-green-700 underline text-sm hover:text-green-900 transition-colors"
        >
          Pošalji novi upit
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Pošaljite upit</h3>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Ime i prezime <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Vaše ime"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
              errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Telefon <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+381 6x xxxxxxx"
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
              errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email <span className="text-gray-400 font-normal">(opciono)</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="vas@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          />
        </div>

        {/* Product */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Zainteresovani ste za
          </label>
          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          >
            {productOptions.map((o) => (
              <option key={o} value={o as string}>{o}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Poruka <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Opišite šta vam treba: dužina ograde, visina, boja, lokacija..."
            className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors resize-none ${
              errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
            }`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-5 rounded-xl transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pošalji WhatsApp
          </button>

          <button
            onClick={handleEmail}
            className="flex-1 flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-gray-700 font-bold py-3.5 px-5 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors text-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Pošalji Email
          </button>
        </div>
      </div>
    </div>
  );
}
