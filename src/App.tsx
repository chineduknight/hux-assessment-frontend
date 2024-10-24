import Pages from "pages";
import ErrorBoundary from "components/HOC/ErrorBoundary";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const queryClient = new QueryClient();
const App = () => {
  return (
    <ErrorBoundary>
      <ToastContainer position="top-right" autoClose={3000} />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Pages />
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
