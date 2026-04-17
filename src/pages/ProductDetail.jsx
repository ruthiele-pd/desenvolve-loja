import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
import { fetchProductById } from "../services/api";

function ProductDetail({ traduzirProduto, traduzirDescricao }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setErro("Erro ao carregar produto");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Carregando...</p>;
  if (erro) return <p className="erro">{erro}</p>;

  const handleAdd = () => {
    addToCart(product);
    setMsg(`"${traduzirProduto(product)}" adicionado com sucesso!`);
    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <div>
      <Header showBack />

      <div className="detalhe">
        {msg && <p className="mensagem">{msg}</p>}

        <img src={product.image} alt={product.title} />
        <h2>{traduzirProduto(product)}</h2>
        <p>{traduzirDescricao(product)}</p>
        <p className="price">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>

        <button className="btn-carrinho" onClick={handleAdd}>
          🛒 Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;