import { useState, useEffect } from "react";
import "./itemlistcontainer.css";
import ItemList from "../ItemList/ItemList";
import Inicio from '../Inicio/Inicio'
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/products";


const Productos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();


  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="containerIlist">
      <Inicio />
      <div>
        <h1>Nuestros productos</h1>
      </div>
      <ItemList products={products} />
    </div>
  );
};

export default Productos;
