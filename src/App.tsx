import Pages from "pages";
import ErrorBoundary from "components/HOC/ErrorBoundary";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Pages />
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
