import Pages from "pages";
import ErrorBoundary from "components/HOC/ErrorBoundary";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <ErrorBoundary>
      <ToastContainer position="top-right" autoClose={3000} />
      <AuthProvider>
        <Pages />
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
