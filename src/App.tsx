import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Provider } from "@/components/ui/provider";
import { Button, ButtonGroup } from "@chakra-ui/react"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
