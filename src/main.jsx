import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsProvider } from "./context/products_content.jsx";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-wkr7guyr7h3j67f8.us.auth0.com"
      clientId="8CooV2rOFnJ8WJ0Ag7Qwj0IFNARVc1ma"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
