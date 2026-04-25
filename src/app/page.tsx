import Image from "next/image";
import Header from "@/components/Header";

const carouselImages = Array.from(
  { length: 9 },
  (_, i) => `/imagens/carrossel_${i + 1}.png`
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative flex flex-col items-center pt-10 pb-4 overflow-hidden">
        {/* Flor lilas - esquerda, sentido anti-horário */}
        <div className="absolute left-0 top-4 w-52 h-52 md:w-72 md:h-72 animate-spin-ccw pointer-events-none select-none">
          <Image
            src="/imagens/flor_lilas.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Flor laranja - direita, sentido horário */}
        <div className="absolute right-0 top-4 w-52 h-52 md:w-72 md:h-72 animate-spin-cw pointer-events-none select-none">
          <Image
            src="/imagens/flor_laranja.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Conteúdo central */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg mx-auto">
          <Image
            src="/imagens/arco_iris.png"
            alt="Arco-íris"
            width={64}
            height={64}
            className="mb-3"
          />
          <p className="text-sm text-gray-600 mb-2">Oi, me chamo Bruna Inturn</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
            Terapia ocupacional focada em autonomia e qualidade de vida
          </h1>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            Acredito que cada pessoa tem seu próprio ritmo. Meu trabalho é ajudar no
            desenvolvimento das habilidades do dia a dia, tornando as atividades mais
            acessíveis, leves e possíveis.
          </p>
          <a
            href="https://wa.link/gg4fhf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-700 transition-colors"
          >
            Agendar atendimento
          </a>
        </div>

        {/* Imagem divisória */}
        <div className="relative z-10 mt-10">
          <Image src="/imagens/div.png" alt="" width={80} height={80} />
        </div>
      </section>

      {/* Carrossel */}
      <section className="w-full overflow-hidden my-2">
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {[...carouselImages, ...carouselImages].map((src, i) => (
            <div
              key={i}
              className="relative w-48 h-40 flex-shrink-0 mx-1 rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Trabalho ${(i % 9) + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Texto abaixo do carrossel */}
      <section className="flex flex-col items-center text-center py-12 px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Um pouco do meu trabalho na prática
        </h2>
        <p className="text-gray-600 max-w-xl text-sm leading-relaxed">
          Atividades voltadas ao desenvolvimento e à qualidade de vida, acompanhando tanto
          crianças quanto idosos — sempre respeitando as necessidades e o ritmo de cada
          pessoa.
        </p>
      </section>

      {/* Rodapé */}
      <footer
        className="relative overflow-hidden"
        style={{ backgroundColor: "#A351A2" }}
      >
        {/* Faixa translúcida */}
        <div
          className="absolute inset-0 opacity-80"
          style={{ backgroundColor: "#A351A2" }}
        />

        {/* Flores estáticas */}
        <div className="absolute bottom-0 left-0 w-36 h-36 md:w-48 md:h-48 pointer-events-none select-none z-0">
          <Image
            src="/imagens/flor_laranja.png"
            alt=""
            fill
            className="object-contain object-bottom-left"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-36 h-36 md:w-48 md:h-48 pointer-events-none select-none z-0">
          <Image
            src="/imagens/flor_lilas_rodape.png"
            alt=""
            fill
            className="object-contain object-right-bottom"
          />
        </div>

        {/* Conteúdo central */}
        <div className="relative z-10 flex flex-col items-center text-center text-white py-16 px-4">
          <h2 className="text-2xl font-bold mb-2">Entre em contato</h2>
          <p className="mb-8 text-sm">
            Será um prazer conversar com você e entender suas necessidades.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 justify-center">
              <Image
                src="/imagens/icone_email.png"
                alt="Email"
                width={24}
                height={24}
              />
              <a
                href="mailto:brunainturn@gmail.com"
                className="hover:underline text-sm"
              >
                brunainturn@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Image
                src="/imagens/icone_telefone.png"
                alt="Telefone"
                width={24}
                height={24}
              />
              <span className="text-sm">(47) 99749 - 7847</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
