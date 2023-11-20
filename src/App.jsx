import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="bg-neutral-900 h-screen w-screen flex flex-col overflow-hidden">
      <Header />
      <div className=' bg-red-950 w-full h-full flex'>
        <Main />
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App;