import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParams est un hook qui permet de récupérer les paramètres de l'URL
import { useSelector } from "react-redux";



const ProductDetail = () => {
  const products = useSelector((state) => state.products);  
  const { id } = useParams(); 
  console.log(products)
  const [product, setProduct] = useState(null)
  //const product = products.find((produit) => produit.id === Number(id));
  console.log(products)

  useEffect(() => {
    if (products.length > 0) {
      setProduct(products.find((produit) => produit.id === Number(id)));
    }
  }, [products, id]);

  if (!product) {
    return <div>Produit non trouvé.</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p className="produit">{product.description}</p>
      <p className="produit">Prix : {product.price} €</p>
      <p className="produit">Marque : {product.marque}</p>
    </div>
  );
};

export default ProductDetail;