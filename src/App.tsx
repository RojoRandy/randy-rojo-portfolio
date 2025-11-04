import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { ToastContainer, Zoom } from "react-toastify"
import { useTheme } from "./hooks/useTheme"
import { useEffect } from "react"

function App() {
  const { isDarkMode, setDarkMode, setLightMode } = useTheme()

  useEffect(()=>{
    const storedTheme = localStorage.getItem("theme")

    if(storedTheme === "light") {
      setLightMode()
    } else {
      setDarkMode()
    }
  },[])

  return (
    <>
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
        transition={Zoom}
      />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
