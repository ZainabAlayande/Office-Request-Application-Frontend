import LandingPage from "../src/component/landing-page/landing-page"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
