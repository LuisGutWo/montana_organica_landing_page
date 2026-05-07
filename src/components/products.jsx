import { useState, useEffect } from "react";
import { Button, NavLink, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import AOS from "aos";
import "aos/dist/aos.css";
import MainProductCard from "./MainProductCard";
AOS.init();

const PRODUCTS_URL = "/products.json";

function AppProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("todos");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(PRODUCTS_URL);

      if (!response.ok) {
        throw new Error("No se pudo cargar el catálogo local de productos");
      }

      const data = await response.json();
      setData(data);
      setCategories(["todos", ...new Set(data.map((item) => item.category))]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <span className="loader"></span>;
  if (error) return <div>Error: {error.message}</div>;

  const searchData = (item, search) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  const filteredData = () => {
    let filtered = data;
    if (filter !== "todos") {
      filtered = filtered.filter((item) => item.category === filter);
    }
    filtered = filtered.filter((item) => searchData(item, search));
    filtered = filtered.filter((item) => {
      const price = parseFloat(item.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });
    return filtered;
  };

  const filteredProduct = filteredData().map((item) => (
    <MainProductCard key={item.id} item={item} />
  ));
  const noResults = filteredProduct.length === 0;

  return (
    <section id="products" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nuestros Productos</h2>
          <div className="subtitle">conoce lo mejor de la naturaleza</div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Navbar className="products-buttons-section">
          {categories.map((category) => (
            <NavLink
              data-aos="zoom-in"
              key={category}
              to={`/categories/${category}`}
              onClick={() => setFilter(category)}
            >
              <Button
                variant={filter === category ? "primary" : "outline-primary"}
              >
                {category}
              </Button>
            </NavLink>
          ))}
        </Navbar>
        <div
          className="price-filter"
          style={{ margin: "1rem 0", textAlign: "center" }}
        >
          <label htmlFor="priceRange" style={{ marginRight: 8 }}>
            Filtrar por precio:
          </label>
          <input
            type="range"
            id="priceRange"
            min="0"
            max="200"
            step="1"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            style={{ width: 200, verticalAlign: "middle" }}
          />
          <span style={{ marginLeft: 8 }}>Hasta S/ {priceRange[1]}</span>
        </div>
        {noResults ? (
          <div
            className="no-results-message"
            style={{
              textAlign: "center",
              margin: "2rem 0",
              color: "#a47149",
              fontWeight: 500,
            }}
          >
            No se encontraron productos para tu búsqueda.
          </div>
        ) : (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}
          >
            <Masonry>{filteredProduct}</Masonry>
          </ResponsiveMasonry>
        )}
      </Container>
    </section>
  );
}

export default AppProducts;
