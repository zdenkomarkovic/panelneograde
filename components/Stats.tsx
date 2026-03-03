const stats = [
  { value: "500+", label: "Zadovoljnih klijenata", icon: "😊" },
  { value: "10+", label: "Godina iskustva", icon: "🏆" },
  { value: "48h", label: "Brza isporuka i montaža", icon: "⚡" },
  { value: "100%", label: "Garancija na radove", icon: "✅" },
];

export default function Stats() {
  return (
    <section className="bg-green-800 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-black text-white mb-1 tabular-nums">
                {stat.value}
              </div>
              <div className="text-green-300/80 text-sm font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
