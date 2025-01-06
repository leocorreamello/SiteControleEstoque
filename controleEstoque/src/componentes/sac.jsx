import React from 'react';
import '../index.css';

function Sac() {
  return (
    <section id="section3" className="sac">
      <h1 className="text-center text-5xl mb-10">Contato</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl mb-4">Entre em Contato</h2>
            <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-lg mb-2" htmlFor="name">Nome</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2" htmlFor="email">Email</label>
                <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2" htmlFor="message">Mensagem</label>
                <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows="4" required></textarea>
              </div>
              <button className="bg-blue-500 text-white p-2 rounded" type="submit">Enviar</button>
            </form>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl mb-4">Informações de Contato</h2>
            <p className="text-lg leading-relaxed mb-4">
              Telefone: (11) 1234-5678
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Email: contato@oficinamecanica.com
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Endereço: Rua das Oficinas, 123, São Paulo, SP
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Horário de Funcionamento: Segunda a Sexta, das 8h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sac;
