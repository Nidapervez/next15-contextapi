// src/app/_app.js
import { CartProvider } from './context/CartContext'; // Correct path

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

