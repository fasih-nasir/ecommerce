import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container px-5 py-24 mx-auto my-3">
      <div className="d-flex flex-row">
        <div className="col-6 ">
          <img
            alt={product.name}
            className="object-cover object-center imagePro col-11 "
            src={product.images}
          />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <h2 className="text-gray-900 text-3xl font-medium title-font mb-4 text-text-truncate">{product.title}</h2>
          <p className="text-gray-600 text-base">{product.description}</p>
          <p className="text-gray-600 text-base">Category : {product.category}</p>
          <p className="text-gray-900 text-2xl font-medium mt-4 span1 col-2 px-2 py-2 fw-bolder">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
