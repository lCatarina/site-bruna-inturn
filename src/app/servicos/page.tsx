import Header from "@/components/Header";

export default function Servicos() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="flex flex-col items-center text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Como posso te ajudar
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl text-sm leading-relaxed">
          Atendimentos voltados ao desenvolvimento, autonomia e qualidade de
          vida em diferentes fases da vida.
        </p>

        <div className="flex flex-col md:flex-row gap-6 max-w-3xl w-full justify-center">
          <div
            className="flex-1 rounded-2xl p-8 text-white text-left"
            style={{ backgroundColor: "#FE6614" }}
          >
            <h3 className="text-xl font-bold mb-3">Atendimento Infantil</h3>
            <p className="text-sm leading-relaxed">
              Acompanhamento voltado ao desenvolvimento da criança, estimulando
              habilidades motoras, cognitivas e autonomia no dia a dia, sempre
              respeitando seu tempo.
            </p>
          </div>

          <div
            className="flex-1 rounded-2xl p-8 text-white text-left"
            style={{ backgroundColor: "#FE6614" }}
          >
            <h3 className="text-xl font-bold mb-3">Atendimento para Idosos</h3>
            <p className="text-sm leading-relaxed">
              Atendimento focado na qualidade de vida e independência,
              auxiliando o idoso a manter sua autonomia nas atividades diárias.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
