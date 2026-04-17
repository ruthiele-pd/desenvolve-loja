export const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Erro na API");
    return res.json();
  };
  
  export const fetchProductById = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Erro na API");
    return res.json();
  };