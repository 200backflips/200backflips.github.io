import staticImages from "./static-images";
const arealCityscape = staticImages[0];

export default function Presentation() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={arealCityscape.src}
            alt={arealCityscape.alt}
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-light tracking-tight text-neutral-800 md:text-6xl lg:text-7xl">
                  fredrik karlsson
                </h1>
                <div className="h-0.5 w-24 bg-neutral-400" />
              </div>

              <div className="space-y-1">
                <h2 className="text-2xl font-medium tracking-wide text-neutral-700 uppercase md:text-3xl lg:text-4xl">
                  Utbildare
                </h2>
                <h2 className="text-2xl font-medium tracking-wide text-neutral-700 uppercase md:text-3xl lg:text-4xl">
                  Frontendutvecklare
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {staticImages.map(({ src, alt }, i) => (
              <div
                key={i}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neutral-50 py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8 text-center">
              <h3 className="text-3xl font-light text-neutral-800 lg:text-4xl">
                Frontend Mobil & Webb 2025
              </h3>
              <div className="mx-auto h-0.5 w-16 bg-neutral-400" />
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
                Jag kommer att vara er utbildare under programmets första år
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-800 py-12 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-neutral-300">© 2025 Fredrik Karlsson</p>
          </div>
        </div>
      </div>
    </div>
  );
}
