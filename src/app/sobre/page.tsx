import Image from "next/image";
import Header from "@/components/Header";

export default function Sobre() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="max-w-5xl mx-auto py-16 px-6 flex flex-col md:flex-row items-start gap-10">
        {/* Retângulo roxo */}
        <div
          className="flex-1 rounded-2xl p-10 text-white self-stretch"
          style={{ backgroundColor: "#A351A2" }}
        >
          <h2 className="text-2xl font-bold mb-5">Me chamo Bruna Inturn</h2>
          <p className="text-sm leading-relaxed">
            Sou estudante de Terapia Ocupacional, apaixonada por cuidar e
            promover qualidade de vida através de atendimentos que respeitam a
            individualidade de cada pessoa.
          </p>
          <br />
          <p className="text-sm leading-relaxed">
            Acredito que cada fase da vida tem suas próprias necessidades, por
            isso busco atuar tanto no desenvolvimento infantil quanto no cuidado
            com idosos, sempre com atenção, empatia e dedicação.
          </p>
          <br />
          <p className="text-sm leading-relaxed">
            Estou em constante aprendizado, buscando evoluir profissionalmente
            para oferecer atendimentos cada vez mais qualificados e humanizados.
          </p>
        </div>

        {/* Imagens */}
        <div className="flex flex-col gap-5">
          <div className="relative w-64 h-52 rounded-2xl overflow-hidden">
            <Image
              src="/imagens/sobre_1.png"
              alt="Bruna Inturn - foto 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-64 h-52 rounded-2xl overflow-hidden">
            <Image
              src="/imagens/sobre_2.png"
              alt="Bruna Inturn - foto 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
