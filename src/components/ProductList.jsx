
import { Link } from "react-router-dom"; // Link est un composant qui permet de créer des liens entre les pages
import fakeProducts from "../fakeProducts";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

const ProductList = ({  }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  console.log(products)

  useEffect(() => {
    // Chargez les produits à partir du store Redux lors du montage du composant
    dispatch(fetchProducts(fakeProducts));
  }, []);


  return(
            <>
                <h1>Produits</h1>
                <ul className="listProducts">
                    {products.length > 0 && products.map((product) => (
                        <li className="theProduct" key={product.id}>
                            <Link to={`/produits/${product.id}`}>{product.name}</Link>
                        </li>
                    ))}
                </ul>
            </>
        
        
        )
};

export default ProductList;
