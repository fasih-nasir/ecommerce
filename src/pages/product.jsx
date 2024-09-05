import { useState, useEffect } from "react";

function Product() {
  const [prod, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  function showMore(id) {
    window.open(`/product-details/${id.target.id}`, "_blank");
    fetch(`https://dummyjson.com/products/${id.target.id}`)
      .then((res) => res.json())
      .then(console.log);
  }


  useEffect(() => {

    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  function handleCategoryChange(e) {
    const category = e.target.value;
    setSelectedCategory(category);

    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((error) => {
        console.error("Error fetching category products:", error);
      });
  }

  // Search products
  function seafun(e) {
    fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((error) => {
        console.error("Error searching products:", error);
      });
  }

  return (
    <>
      <div className="container catsel d-flex justify-content-between align-items-center my-3  z-2 mx-auto">
        <div className="col-3">
          {/* Category Dropdown */}
          <select className="form-select col-2" onChange={handleCategoryChange} value={selectedCategory}>
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option value={category.slug} key={index}>
                {category.name}
              </option>
            ))}
          </select>
       
        </div>
        <div className="col-6 d-flex flex-column justify-content-end align-items-end">
          <input
            type="search"
            name=""
            id=""
            className="col-5"
            placeholder="Search Your Product Here"
            onChange={seafun}
          />
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {prod.map((product) => (
            <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={product.id}>
              <div className="card d-flex flex-column justify-content-center align-items-center">
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column col-12 justify-content-center align-items-center">
                  <h6 className="card-title text-truncate fw-bolder">
                    {product.title}
                  </h6>
                  <p className="card-text fw-bold">
                    Category: {product.category}
                  </p>
                  <p className="card-text span1 px-2 py-1">${product.price}</p>
                  <a href="#" className="btn btn1" id={product.id} onClick={showMore}>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;

