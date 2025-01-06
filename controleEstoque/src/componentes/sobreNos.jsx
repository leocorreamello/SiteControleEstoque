import React from 'react';
import '../index.css';

function SobreNos() {
  return (
    <section id="section2" className="sobre-nos">
      <h1 className="text-center text-5xl mb-10">Sobre Nós</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="md:w-1/2">
            <img src="https://via.placeholder.com/400" alt="Oficina Mecânica" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-lg leading-relaxed mb-4">
              Bem-vindo à nossa oficina mecânica! Com mais de 20 anos de experiência, oferecemos serviços de alta qualidade para todos os tipos de veículos. Nossa equipe de profissionais altamente qualificados está sempre pronta para atender às suas necessidades e garantir que seu veículo esteja em perfeitas condições.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Nossa missão é proporcionar um atendimento excepcional e garantir a satisfação de nossos clientes. Utilizamos as mais recentes tecnologias e equipamentos para diagnosticar e reparar seu veículo com eficiência e precisão.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl mb-4">Fatos Interessantes</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg leading-relaxed mb-2">Mais de 10.000 veículos atendidos.</li>
            <li className="text-lg leading-relaxed mb-2">Equipe com certificação ASE.</li>
            <li className="text-lg leading-relaxed mb-2">Parceria com as principais marcas de peças automotivas.</li>
            <li className="text-lg leading-relaxed mb-2">Garantia de 12 meses em todos os serviços.</li>
            <li className="text-lg leading-relaxed mb-2">Atendimento personalizado e agendamento online.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SobreNos;
