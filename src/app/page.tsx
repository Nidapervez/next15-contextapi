
// src/app/page.tsx
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function Home() {
  return (
    <div>
      <h1>Shopping Cart Example</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

