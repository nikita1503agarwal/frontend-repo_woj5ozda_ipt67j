import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChannelSection from './components/ChannelSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <ChannelSection
        id="unbequem"
        theme="outdoor"
        handle="@UNBEQUEM-o2w"
        title="UNBEQUEM"
        tagline="Draußen. Abenteuer. Echt."
        primaryColor="#059669"
        subscribeUrl="https://www.youtube.com/@UNBEQUEM-o2w?sub_confirmation=1"
      />
      <div className="h-24 bg-gradient-to-b from-emerald-900 to-indigo-900" />
      <ChannelSection
        id="bequem"
        theme="gaming"
        handle="@BEQUEM-g"
        title="BEQUEM"
        tagline="Drinnen. Chillen. Zocken."
        primaryColor="#4f46e5"
        subscribeUrl="https://www.youtube.com/@BEQUEM-g?sub_confirmation=1"
      />
      <Footer />
    </div>
  )
}

export default App
