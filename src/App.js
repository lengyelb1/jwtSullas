import Display from './Display';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="Display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
