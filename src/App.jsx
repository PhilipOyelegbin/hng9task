import { Route, Routes } from "react-router"
import Home from "./pages/profile/Home"
import Contact from "./pages/contact/Contact"
import SharedLayout from "./components/SharedLayout"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
