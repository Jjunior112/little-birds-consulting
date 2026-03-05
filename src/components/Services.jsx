import { useState } from "react";

function Services() {

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Diagnóstico de Performance Comercial",
      objetivo:
        "Avaliar a eficiência da operação comercial, identificando oportunidades de aumento de receita, melhoria de conversão de vendas e otimização do valor gerado por cliente.",

      escopo: [
        "Desempenho de vendas por produto, categoria e cliente.",
        "Análise do ticket médio e comportamento de compra.",
        "Eficiência do funil comercial e taxa de conversão.",
        "Impacto de descontos na rentabilidade das vendas.",
        "Ciclo médio de venda e velocidade de fechamento.",
        "Receita média por cliente e concentração de faturamento.",
        "Identificação dos produtos com maior potencial comercial."
      ],

      entregaveis: [
        "Análise estruturada da performance comercial.",
        "Identificação de oportunidades de crescimento de receita.",
        "Diagnóstico de eficiência do funil de vendas.",
        "Recomendações estratégicas para aumento de conversão e rentabilidade."
      ]
    },

    {
      title: "Diagnóstico de Eficiência Operacional",

      objetivo:
        "Avaliar a eficiência da operação produtiva ou operacional, identificando perdas de produtividade, gargalos de processo e oportunidades de melhoria na utilização de recursos.",

      escopo: [
        "Nível de utilização da capacidade operacional.",
        "Produtividade por recurso ou unidade produtiva.",
        "Disponibilidade de equipamentos ou recursos operacionais.",
        "Ocorrência de retrabalho ou perdas de produção.",
        "Eficiência geral da operação produtiva.",
        "Custo operacional por unidade produzida ou serviço executado."
      ],

      entregaveis: [
        "Análise de eficiência da operação.",
        "Identificação de gargalos operacionais.",
        "Avaliação de perdas produtivas e desperdícios.",
        "Recomendações para aumento de produtividade e eficiência."
      ]
    },

    {
      title: "Diagnóstico de Capital e Eficiência de Estoque",

      objetivo:
        "Avaliar a eficiência da gestão de estoque e a utilização do capital investido em mercadorias, identificando oportunidades de redução de capital imobilizado e melhoria da disponibilidade de produtos.",

      escopo: [
        "Giro de estoque por produto ou categoria.",
        "Cobertura de estoque e equilíbrio entre oferta e demanda.",
        "Capital financeiro imobilizado em estoque.",
        "concentração de estoque em produtos de baixo giro.",
        "Ocorrência de ruptura de produtos estratégicos.",
        "Distribuição do estoque por relevância de faturamento ou margem."
      ],

      entregaveis: [
        "Análise da eficiência da gestão de estoque.",
        "Identificação de capital empatado em produtos de baixa rotatividade.",
        "Avaliação de riscos de ruptura de produtos.",
        "Recomendações para otimização do nível de estoque e capital de giro."
      ]
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Serviços</h2>

        <div className="service-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="card"
              onClick={() => setSelectedService(service)}
            >
              <h3>{service.title}</h3>
              <p>{service.objetivo}</p>
              <p id="detail">Clique para ver detalhes</p>
            </div>
          ))}
        </div>

        {selectedService && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedService.title}</h2>

              <h3>Objetivo</h3>
              <p>{selectedService.objetivo}</p>

              <h3>Escopo do serviço</h3>
              <ul>
                {selectedService.escopo.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3>Entregáveis</h3>
              <ul>
                {selectedService.entregaveis.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <button onClick={() => setSelectedService(null)}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;