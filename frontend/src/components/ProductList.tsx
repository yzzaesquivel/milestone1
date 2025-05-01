import { useEffect, useState } from 'react';

interface Product {
  _id: string;
  name: string;
  description: string;
  quantity: number;
  type: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null); // Track errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/products');
        
        // Check if the response is successful
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await res.json();
        setProducts(data); // Set fetched products
      } catch (err: any) {
        console.error('Error fetching products:', err);
        setError('Error fetching products');
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <div>
      <h2>Product List</h2>
      {error && <p>{error}</p>} {/* Display error message if any */}
      {products.length === 0 ? (
        <p>No products found.</p> // If no products, display message
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <strong>{product.name}</strong> — {product.description} — {product.quantity} units
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
