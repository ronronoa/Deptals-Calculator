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
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
      <>
        {loading ? (
          <div className="flex items-center justify-center flex-col min-h-screen bg-white">
            <div className="border-2 w-10 h-10 rounded-full border-gray-500 border-t-0 animate-spin"></div>
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
