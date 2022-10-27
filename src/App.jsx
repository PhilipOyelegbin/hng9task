import Links from "./components/Links"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import Social from "./components/Social"

function App() {
  return (
    <>
      <main className="container">
        <Profile/>
        <Links/>
      </main>
      <Social/>
      <Footer/>
    </>
  )
}

export default App
