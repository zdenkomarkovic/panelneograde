import Image from "next/image";

const heights = ["103 cm", "123 cm", "153 cm", "173 cm", "203 cm"];
const colors = [
  { name: "Bela", hex: "#f8fafc", border: "#cbd5e1" },
  { name: "Plava", hex: "#1e40af", border: "#1e40af" },
  { name: "Antracit", hex: "#374151", border: "#374151" },
  { name: "Tamno zelena", hex: "#14532d", border: "#14532d" },
];

const specs = [
  { label: "Debljina žice", value: "4 mm ili 5 mm" },
  { label: "Dužina panela", value: "2 m ili 2,5 m" },
  { label: "Dostupne visine", value: "103 / 123 / 153 / 173 / 203 cm" },
  { label: "Dostupne boje", value: "Bela, Plava, Antracit, Tamno zelena" },
  { label: "Ugradnja", value: "Usadna ili anker" },
];

export default function Products3D() {
  return (
    <section id="ograde-3d" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-800 text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Najpopularnije
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            3D Panelne Ograde
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Moderan izgled sa 3D profilom. Dostupne u raznim visinama, bojama i debljinama žice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            {[
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.28.19.jpeg",
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.28.20.jpeg",
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.28.21.jpeg",
              "/ograde/WhatsApp%20Image%202026-02-25%20at%2022.28.19%20%281%29.jpeg",
            ].map((src, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt={`3D ograda primer ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Specs */}
          <div>
            {/* Spec table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              <div className="bg-green-800 px-6 py-4">
                <h3 className="text-white font-bold text-lg">Specifikacije</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-start px-6 py-4 gap-4"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                        {spec.label}
                      </p>
                      <p className="text-gray-900 font-medium mt-0.5">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Heights */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Dostupne visine</h3>
              <div className="flex flex-wrap gap-2">
                {heights.map((h) => (
                  <span
                    key={h}
                    className="bg-green-50 border border-green-200 text-green-800 font-semibold px-4 py-2 rounded-lg text-sm"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Dostupne boje</h3>
              <div className="grid grid-cols-2 gap-3">
                {colors.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 border-2"
                      style={{
                        backgroundColor: c.hex,
                        borderColor: c.border,
                      }}
                    />
                    <span className="text-gray-800 font-medium text-sm">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation types */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Vrste ugradnje</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="text-green-700 font-bold mb-1">Usadni stubovi</div>
                  <p className="text-green-800/70 text-sm">
                    Ukopavaju se u zemlju i betoniraju. Idealno za nova dvorišta.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <div className="text-green-700 font-bold mb-1">Anker ugradnja</div>
                  <p className="text-green-800/70 text-sm">
                    Postavljaju se na postojeći beton ili čoklu. Bez kopanja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
