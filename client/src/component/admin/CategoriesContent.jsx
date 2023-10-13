import React, { useEffect, useState } from "react";
import "../../style/adminStyle/categoriesStyle.css";
import { Modal, Button, CloseButton } from "react-bootstrap";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [categories, setCategories] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [subCategory, setSubCategory] = useState();
  const [categoriesID, setIdCategories] = useState();
  const [subCategoryImage, setSubCategoryImage] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await fetch("/api/admin/get-categories", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const data = await response.json();
        setCategoriesData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [createShow, setCreateShow] = useState(false);
  const [createSubShow, setSubCreateShow] = useState(false);

  const createModal = () => {
    setCreateShow(!createShow);
  };
  const createSubModal = () => {
    setSubCreateShow(!createSubShow);
  };

  const createCategory = async (e) => {
    e.preventDefault();

    // Create a FormData object to send form data including the image file
    const formData = new FormData();
    formData.append("categoryName", categories);
    formData.append("category_image", categoryImage);

    try {
      const result = await fetch("/api/admin/add-categories", {
        method: "POST",
        body: formData,
      });
      createModal();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };
  const createSubCategory = async (e) => {
    e.preventDefault();

    // Create a FormData object to send form data including the image file
    const formData = new FormData();
    formData.append("subCategories_name", subCategory);
    formData.append("category_ID", categoriesID);
    formData.append("subCategories_image", subCategoryImage);
    try {
      const result = await fetch("/api/admin/add-sub-categories", {
        method: "POST",
        body: formData,
      });
      createSubModal();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setCategoryImage(file);
  };
  const handleFileInputChangeSub = (e) => {
    const file = e.target.files[0];
    setSubCategoryImage(file);
  };

  return (
    <div>
      <div className="categories_cantainer">
        <div className="categories_title">
          <Button
            className="btn btn-danger mt-3 ml-4"
            variant="success"
            onClick={createModal}
          >
            Add Categories
          </Button>
          <Button
            className="btn btn-warning mt-3 ml-4"
            variant="success"
            onClick={createSubModal}
          >
            Add Sub Categories
          </Button>
          <input
            type="search"
            name="categoriesSearch"
            id=""
            className="form-control input float-end"
            placeholder="Search Categories"
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
              {Array.isArray(categoriesData) && categoriesData.length > 0 ? (
                categoriesData.map((filterData, index) => (
                  <tr key={filterData._id}>
                    <td>{index + 1}</td>
                    <td>{filterData.categoryName}</td>
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
        <Modal show={createShow}>
          <Modal.Header>
            <Modal.Title>Add Categories</Modal.Title>
            <CloseButton onClick={createModal} />
          </Modal.Header>
          <form onSubmit={createCategory}>
            <Modal.Body>
              <input
                type="text"
                name="categoryName"
                id=""
                className="form-control mt-3"
                onChange={(e) => setCategories(e.target.value)}
                placeholder="Enter Category Name"
              />
              <input
                type="file"
                name="category_image"
                id=""
                className="form-control mt-3"
                onChange={handleFileInputChange} // Handle file input change
              />
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-warning" type="submit">
                Submit
              </Button>
              <Button
                className="btn btn-danger"
                type="button"
                onClick={createModal}
              >
                Close
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
        <Modal show={createSubShow}>
          <Modal.Header>
            <Modal.Title>Add Sub Categories</Modal.Title>
            <CloseButton onClick={createSubModal} />
          </Modal.Header>
          <form onSubmit={createSubCategory}>
            <Modal.Body>
              <input
                type="text"
                name="subCategories_name"
                id=""
                className="form-control mt-3"
                onChange={(e) => setSubCategory(e.target.value)}
                placeholder="Enter Sub Category Name"
              />
              <select
                name="category_ID"
                id=""
                className="form-control mt-3"
                onChange={(e) => setIdCategories(e.target.value)}
              >
                <option value="">Select Category</option>
                {Array.isArray(categoriesData) && categoriesData.length > 0 ? (
                  categoriesData.map((filterData, index) => (
                    <option key={filterData._id} value={filterData._id}>
                      {filterData.categoryName}
                    </option>
                  ))
                ) : (
                  <option>server not fetch data</option>
                )}
              </select>
              <input
                type="file"
                name="subCategories_image"
                id=""
                className="form-control mt-3"
                onChange={handleFileInputChangeSub} // Handle file input change
              />
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-warning" type="submit">
                Submit
              </Button>
              <Button
                className="btn btn-danger"
                type="button"
                onClick={createSubModal}
              >
                Close
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Categories;
