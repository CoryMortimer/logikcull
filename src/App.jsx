import { HttpCache } from "utils/http";
import CssBasline from "ui/CssBaseline";
import Albums from "Albums";

const App = () => {
  return (
    <HttpCache>
      <CssBasline />
      <Albums />
    </HttpCache>
  );
};

export default App;
