import { useState } from "react";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

function Cart({ traduzirProduto }) {
  const { cart, removeFromCart, decreaseQuantity, clearCart, total } =
    useCart();

  const [msg, setMsg] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [modo, setModo] = useState("");

  const abrirModal = (item, tipo) => {
    setItemSelecionado(item);
    setQuantidade(1);
    setModo(tipo);
    setModalOpen(true);
  };

  const confirmarAcao = () => {
    if (modo === "remover") {
      for (let i = 0; i < quantidade; i++) {
        decreaseQuantity(itemSelecionado.id);
      }
      setMsg(
        `${quantidade} unidade(s) removida(s) de "${traduzirProduto(
          itemSelecionado
        )}"`
      );
    }

    if (modo === "limpar") {
      clearCart();
      setMsg("Carrinho limpo!");
    }

    setModalOpen(false);
    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <div>
      <Header showBack />

      <div className="carrinho">
        <h2>🛒 Seu Carrinho</h2>

        {msg && <p className="mensagem">{msg}</p>}

        {cart.length === 0 ? (
          <p className="carrinho-vazio">Seu carrinho está vazio</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="item-carrinho">
                <img src={item.image} alt="" />
                <div>
                  <h3>{traduzirProduto(item)}</h3>
                  <p>Quantidade: {item.quantidade}</p>
                </div>

                <button onClick={() => abrirModal(item, "remover")}>
                  Remover
                </button>
              </div>
            ))}

            <div className="total">
              Total: R$ {total.toFixed(2).replace(".", ",")}
            </div>

            <button
              className="btn-limpar"
              onClick={() => abrirModal(null, "limpar")}
            >
              Limpar Carrinho
            </button>
          </>
        )}
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            {modo === "remover" && (
              <>
                <h3>Remover quantas unidades?</h3>
                <input
                  type="number"
                  min="1"
                  max={itemSelecionado.quantidade}
                  value={quantidade}
                  onChange={(e) => setQuantidade(Number(e.target.value))}
                />
              </>
            )}

            {modo === "limpar" && (
              <h3>Deseja limpar o carrinho?</h3>
            )}

            <div className="modal-buttons">
              <button className="confirmar" onClick={confirmarAcao}>
                Confirmar
              </button>
              <button
                className="cancelar"
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;