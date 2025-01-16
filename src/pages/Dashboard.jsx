import React, { useState } from 'react';
import DashNav from '../components/DashNav';

const Dashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: '₦4000.00',
      image: 'https://i.pinimg.com/736x/f4/ef/da/f4efdabd03e38d91664981754916e128.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '₦3900.00',
      image: 'https://i.pinimg.com/736x/30/7b/03/307b03932a4f72bc9342e27ef4b8135b.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: '₦4860.00',
      image: 'https://i.pinimg.com/736x/ce/3a/eb/ce3aeb388e50529e7baec554932fef61.jpg',
    },
  ]);

  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const handleOpenProductModal = () => {
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setNewProduct({ name: '', description: '', price: '', image: '' });
  };

  const handleAddProduct = () => {
    // const id = products.length + 1; // Generate a simple ID
    // setProducts([...products, { id, ...newProduct }]);
    handleCloseProductModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setNewProduct((prev) => ({ ...prev, [name]: value }));
    alert('added product {`name`}')
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <DashNav/>
      {/* Main Content */}
      <div className="p-6 mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Products</h2>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 hover:scale-105 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.description}</p>
              <p className="mt-2 text-lg font-bold">{product.price}</p>
            </div>
          ))}

          {/* Add Product Card */}
          <div
            onClick={handleOpenProductModal}
            className="bg-gray-800 h-80 p-4 rounded-lg shadow-lg hover:scale-110 flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition duration-300"
          >
            <div className="text-6xl text-gray-400">+</div>
            <div className="text-sm text-gray-400 mt-2">Add Product</div>
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {isProductModalOpen && (
        <div
          onClick={handleCloseProductModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-80"
          >
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleInputChange}
              className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
            />
            <button
              onClick={handleAddProduct}
              className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Product
            </button>
            <button
              onClick={handleCloseProductModal}
              className="mt-3 w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
