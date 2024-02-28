import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./components/Router/Router.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./components/Redux/App/store.js";
import { ToastContainer } from "react-toastify";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthProvider>
          <div className="max-w-screen-xl mx-auto bg-[#ECDCDC]">
            <RouterProvider router={router} />
          </div>
          <ToastContainer />
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
