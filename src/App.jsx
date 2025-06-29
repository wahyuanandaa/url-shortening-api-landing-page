import {
  Header,
  Hero,
  Features,
  CallToAction,
  Footer
} from "./components/sections"
import UrlShortener from "./components/UrlShortener.jsx"
import ConnectionStatus from "./components/ConnectionStatus.jsx"
import ApiStatus from "./components/ApiStatus.jsx"

const App = () => {
  return (
    <main className="bg-neutral-grayTwo">
      <ConnectionStatus />
      <ApiStatus />
      <div className="bg-white pb-36">
        <Header />
        <Hero />
      </div>

      <UrlShortener />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default App
