import { useEffect, useState } from 'react'
import Deptals from './assets/components/Deptals'
import Footer from './assets/components/Footer'
import Navbar from './assets/components/Navbar'
import logo from '/public/images/Psyculator.png'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
      <>
        {loading ? (
          <div className="flex items-center justify-center flex-col min-h-screen bg-white">
            <img src={logo} alt="" width={500} className='animate-pulse'/>
            <span className="text-lg text-gray-700 text-center">Welcome ateh q!</span>
            <span className="text-sm text-gray-600 text-center italic animate-bounce">Loading...</span>
          </div>
        ) : (
          <div className="">
          <Navbar />
          <Deptals /> 
          <Footer />
        </div>
        )}
      </>
  )
}

export default App
