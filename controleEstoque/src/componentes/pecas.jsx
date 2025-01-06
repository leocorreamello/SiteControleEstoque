
function Pecas() {
  return (
    <section id="section1">
        <h1 className="text-center text-5xl mb-20">PEÇAS EM ESTOQUE</h1>
        <div className="flex justify-around"> 
            <div>
                <input type="search" placeholder="Pesquisar" className="border-2 border-b-gray-700 h-12 w-60"/>
            </div>
            <div className="flex gap-5 text-white">
                <button className="bg-green-500 h-12 w-36">Adicionar Peça</button>
                <button className="bg-red-500 h-12 w-36">Remover Peça</button>
            </div>
        </div>
    </section>
  );
}

export default Pecas;
