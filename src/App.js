import React, {useState} from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CardsBoard from "./Components/CardsBoard";
import "./App.scss";

const queryClient = new QueryClient();

function App() {
  const [rowsNumber] = useState(1);
  return (
    <QueryClientProvider client={queryClient}>
      <CardsBoard rowsNumber={rowsNumber} />
    </QueryClientProvider>
  );
}

export default App;
