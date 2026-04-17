import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import "./styles/index.css";

/* APP */
function App() {
  const [products, setProducts] = useState([]);
  const [categoria, setCategoria] = useState("all");

  // LOADING + ERRO
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  // DARK MODE
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // TRADUÇÃO PRODUTO
  const traduzirProduto = (product) => {
    switch (product.id) {
      case 1:
        return "Mochila Fjallraven para Notebook";
      case 2:
        return "Camiseta Masculina Slim Premium";
      case 3:
        return "Jaqueta Masculina de Algodão";
      case 4:
        return "Camiseta Masculina Casual Ajustada";
      case 5:
        return "Pulseira Feminina Dragão em Ouro e Prata";
      case 6:
        return "Anel de Ouro Maciço";
      case 7:
        return "Anel Banhado a Ouro Branco";
      case 8:
        return "Brinco em Aço Inoxidável Banhado a Ouro Rosé";
      case 9:
        return "HD Externo Portátil WD 2TB Elements (USB 3.0)";
      case 10:
        return "SSD Interno SanDisk PLUS 1TB (SATA III)";
      case 11:
        return "SSD Silicon Power 256GB A55 (SATA III)";
      case 12:
        return "HD Externo WD 4TB para Jogos (Compatível com PlayStation 4)";
      case 13:
        return 'Monitor Acer SB220Q 21,5" Full HD IPS Ultra Fino';
      case 14:
        return 'Monitor Gamer Curvo Samsung 49" QLED Ultra Wide';
      case 15:
        return "Jaqueta Feminina 3 em 1 para Neve";
      case 16:
        return "Jaqueta Feminina com Capuz Removível em Couro Sintético";
      case 17:
        return "Jaqueta Feminina Impermeável Corta-Vento Listrada";
      case 18:
        return "Blusa Feminina Manga Curta Gola Canoa";
      case 19:
        return "Camiseta Feminina Esportiva Manga Curta";
      case 20:
        return "Camiseta Feminina Casual de Algodão";
      default:
        return product.title;
    }
  };

  // TRADUÇÃO DESCRIÇÃO
  const traduzirDescricao = (product) => {
    switch (product.id) {
      case 1:
        return "Sua mochila perfeita para uso diário e caminhadas. Possui compartimento acolchoado para notebook de até 15 polegadas, bolsos internos e externos, além de material resistente e durável.";
      case 2:
        return "Camiseta masculina de modelagem slim, com mangas longas raglan contrastantes e fechamento estilo Henley com três botões. Confeccionada em tecido leve e macio, oferece respirabilidade e conforto para o uso diário. Possui costura reforçada e ótimo caimento, ideal para looks casuais e estilo esportivo.";
      case 3:
        return "Jaqueta masculina confeccionada em algodão, ideal para uso em meia-estação e dias mais frios. Versátil e confortável, é perfeita para ocasiões casuais, trabalho ou atividades ao ar livre.";
      case 4:
        return "Camiseta masculina casual com modelagem ajustada, gola V e manga curta. Confeccionada em tecido confortável, é ideal para compor looks modernos e práticos no dia a dia.";
      case 5:
        return "Pulseira feminina com design inspirado em dragão, símbolo de força e elegância. Produzida com materiais de alta qualidade em ouro e prata, ideal para ocasiões especiais.";
      case 6:
        return "Anel de ouro maciço com acabamento refinado e design elegante. Perfeito para quem busca sofisticação e estilo em qualquer ocasião.";
      case 7:
        return "Anel banhado a ouro branco com design clássico e acabamento durável. Ideal para uso diário ou eventos especiais, combinando elegância e resistência.";
      case 8:
        return "Brincos em aço inoxidável com banho de ouro rosé, oferecendo durabilidade, resistência e um visual moderno e sofisticado.";
      case 9:
        return "HD externo portátil com 2TB de armazenamento e compatibilidade com USB 3.0 e 2.0. Oferece alta velocidade de transferência e é ideal para armazenar arquivos com segurança.";
      case 10:
        return "SSD interno de 1TB que proporciona inicialização rápida, carregamento eficiente de aplicativos e melhor desempenho geral do sistema.";
      case 11:
        return "SSD de 256GB com tecnologia 3D NAND, garantindo maior eficiência, menor consumo de energia e desempenho superior em comparação com discos rígidos tradicionais.";
      case 12:
        return "HD externo de 4TB ideal para armazenamento de jogos, vídeos e arquivos. Compatível com consoles como PlayStation 4, oferecendo praticidade e alto desempenho.";
      case 13:
        return "Monitor de 21,5 polegadas com resolução Full HD e tecnologia IPS, proporcionando imagens nítidas, cores vibrantes e amplo ângulo de visão.";
      case 14:
        return "Monitor gamer curvo de 49 polegadas com tecnologia QLED e tela ultra wide. Oferece uma experiência imersiva e excelente desempenho para jogos e produtividade.";
      case 15:
        return "Jaqueta feminina 3 em 1 com design versátil, ideal para diferentes condições climáticas. Oferece proteção, conforto e praticidade no uso diário.";
      case 16:
        return "Jaqueta feminina em couro sintético com capuz removível, estilo biker. Combina design moderno com conforto, ideal para compor looks urbanos.";
      case 17:
        return "Jaqueta feminina impermeável e corta-vento, perfeita para dias chuvosos e atividades ao ar livre, garantindo proteção e conforto.";
      case 18:
        return "Blusa feminina com manga curta e gola canoa, confortável e versátil, ideal para uso casual no dia a dia.";
      case 19:
        return "Camiseta feminina esportiva com tecido leve e respirável, proporcionando conforto durante atividades físicas e uso diário.";
      case 20:
        return "Camiseta feminina casual confeccionada em algodão macio, oferecendo conforto e praticidade para o dia a dia.";
      default:
        return product.description;
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Erro na API");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setErro("Erro ao carregar produtos");
        setLoading(false);
      });
  }, []);

  const produtosFiltrados =
    categoria === "all"
      ? products
      : products.filter((p) => p.category === categoria);

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={produtosFiltrados}
                traduzirProduto={traduzirProduto}
                setCategoria={setCategoria}
                loading={loading}
                erro={erro}
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                traduzirProduto={traduzirProduto}
                traduzirDescricao={traduzirDescricao}
              />
            }
          />
          <Route
            path="/carrinho"
            element={<Cart traduzirProduto={traduzirProduto} />}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;