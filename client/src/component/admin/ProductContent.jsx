import React, { useEffect, useState } from "react";
import "../../style/adminStyle/categoriesStyle.css";

const Product = () => {
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await fetch("/api/admin/get-product", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const data = await response.json();
        setproductData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="categories_cantainer">
        <div className="categories_title">
          <button className="btn btn-danger mt-3 ml-4">Add Product</button>
          <input
            type="search"
            name="productSearch"
            id=""
            className="form-control input float-end"
            placeholder="Search Product"
          />
        </div>
        <div className="m-3">
          <table className="table table-bordered mt-5 p-5">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Category Name</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(productData) && productData.length > 0 ? (
                productData.map((filterData, index) => (
                  <tr key={filterData._id}>
                    <td>{index + 1}</td>
                    <td>{filterData.productName}</td>
                    <td className="text-center">
                      <button className="btn btn-danger">D</button>
                      <button className="btn btn-warning ml-3">E</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No categories found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
