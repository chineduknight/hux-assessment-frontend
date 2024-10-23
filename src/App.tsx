import Pages from "pages";
import ErrorBoundary from "components/HOC/ErrorBoundary";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <ErrorBoundary>
      <Pages />
    </ErrorBoundary>
  );
};

export default App;
