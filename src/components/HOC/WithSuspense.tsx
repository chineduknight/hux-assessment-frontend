import { Suspense, ComponentType } from "react";
import Loader from "../Loader";

const WithSuspense =
  <P extends object>(
    Component: ComponentType<P>,
    showLoader: boolean = false
  ): React.FC<P> =>
  (props: P) => {
    return (
      <Suspense fallback={showLoader ? <Loader /> : "..."}>
        <Component {...props} />
      </Suspense>
    );
  };

export default WithSuspense;
