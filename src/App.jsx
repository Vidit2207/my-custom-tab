import { Fragment, useEffect } from "react";
import "./UI/styles/styles.scss";
import { CustomTabPage } from "./UI/pages";

function App() {
  useEffect(() => {
    document.title = "My Custom Tab | " + import.meta.env.VITE_USERNAME;
  }, []);
  return (
    <Fragment>
      <CustomTabPage></CustomTabPage>
    </Fragment>
  );
}

export default App;
