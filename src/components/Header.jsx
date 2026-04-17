import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header({ showBack, setCategoria, setBusca }) {
  const navigate = useNavigate();

  const [dark, setDark] = useState(
    document.body.classList.contains("dark")
  );

  const handleHome = () => {
    navigate("/");

    if (setCategoria) setCategoria("all");
    if (setBusca) setBusca("");
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDark(document.body.classList.contains("dark"));
  };

  // Sincronização ao recarregar
  useEffect(() => {
    setDark(document.body.classList.contains("dark"));
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">LD</div>
        <span>Loja Dev</span>
      </div>

      <nav>
        {showBack ? (
          <button className="voltar" onClick={() => navigate(-1)}>
            ← Voltar
          </button>
        ) : (
          <>
            {/* HOME */}
            <span className="nav-icon" onClick={handleHome} title="Home">
              🏠
            </span>

            {/* CARRINHO */}
            <Link to="/carrinho" className="nav-icon" title="Carrinho">
              🛒
            </Link>

            {/* DARK MODE */}
            <span
              className="nav-icon"
              onClick={toggleDarkMode}
              title="Modo escuro"
            >
              {dark ? "☀" : "🌙"}
            </span>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;