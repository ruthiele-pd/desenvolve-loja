import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home({
  products,
  traduzirProduto,
  setCategoria,
  loading,
  erro,
}) {
  const [busca, setBusca] = useState("");
  const [buscaDebounce, setBuscaDebounce] = useState("");

  // debounce (busca em tempo real)
  useEffect(() => {
    const timer = setTimeout(() => {
      setBuscaDebounce(busca);
    }, 300);

    return () => clearTimeout(timer);
  }, [busca]);

  // filtro da busca
  const produtosFiltrados = products.filter((product) =>
    traduzirProduto(product)
      .toLowerCase()
      .includes(buscaDebounce.toLowerCase())
  );

  return (
    <div>
      <Header setCategoria={setCategoria} setBusca={setBusca} />

      <section className="home">
        <h2>Bem-vindo à Loja Dev</h2>
        <p>Os melhores produtos para você</p>
      </section>

      {/* BUSCA */}
      <input
        type="text"
        placeholder="Buscar produto..."
        className="busca"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {/* LOADING */}
      {loading && <p className="loading">Carregando produtos...</p>}

      {/* ERRO */}
      {erro && <p className="erro">{erro}</p>}

      {/* CONTEÚDO */}
      {!loading && !erro && (
        <>
          <div className="filtro">
            <button onClick={() => setCategoria("all")}>Todos</button>
            <button onClick={() => setCategoria("electronics")}>
              Eletrônicos
            </button>
            <button onClick={() => setCategoria("jewelery")}>
              Joias
            </button>
            <button onClick={() => setCategoria("men's clothing")}>
              Masculino
            </button>
            <button onClick={() => setCategoria("women's clothing")}>
              Feminino
            </button>
          </div>

          <main className="container">
            {produtosFiltrados.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="card-link"
              >
                <div className="card">
                  <img src={product.image} alt={product.title} />
                  <h2>{traduzirProduto(product)}</h2>
                  <p className="price">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </p>
                </div>
              </Link>
            ))}
          </main>
        </>
      )}
    </div>
  );
}

export default Home;