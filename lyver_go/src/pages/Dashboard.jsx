import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: '₦50.00',
      image: 'https://i.pinimg.com/736x/f4/ef/da/f4efdabd03e38d91664981754916e128.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '₦30.00',
      image: 'https://i.pinimg.com/736x/30/7b/03/307b03932a4f72bc9342e27ef4b8135b.jpg', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      price: '₦40.00',
      image: 'https://i.pinimg.com/736x/ce/3a/eb/ce3aeb388e50529e7baec554932fef61.jpg', // Replace with actual image URL
    },
  ];

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleEditProduct = () => {
    alert(`Editing product: ${selectedProduct.name}`);
    handleCloseModal();
  };

  const handleDeleteProduct = () => {
    alert(`Deleting product: ${selectedProduct.name}`);
    handleCloseModal();
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 fixed top-0 z-10 w-full p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-lg">Dashboard</div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-purple-500">
            <i className="fas fa-envelope"></i> Orders
          </button>
          <button className="text-white hover:text-purple-500">
            <i className="fas fa-cog"></i> Settings
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Products</h2>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <button
              onClick={() => handleOpenModal(product)}
              key={product.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.description}</p>
              <p className="mt-2 text-lg font-bold">{product.price}</p>
            </button>
          ))}

          {/* Add Product Card */}
          <div className="bg-gray-800 h-80 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition duration-300">
            <div className="text-6xl text-gray-400">+</div>
            <div className="text-sm text-gray-400 mt-2">Add Product</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div onClick={handleCloseModal} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Manage Product</h2>
            <p className="mb-4">What would you like to do with "{selectedProduct.name}"?</p>
            <div className="flex justify-between">
              <button
                onClick={handleEditProduct}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteProduct}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-4 w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
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
