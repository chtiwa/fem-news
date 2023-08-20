import { useState } from "react"
import Bottom from "./components/Bottom"
import Left from "./components/Left"
import Navbar from "./components/Navbar"
import Right from "./components/Right"
import Sidebar from "./components/Sidebar"

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const links = ["Home", "New", "Popular", "Trending", "Categories"]
  return (
    <div className="flex flex-col w-[100%] ">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        links={links}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        links={links}
      />
      <div className="flex flex-col lg:flex-row gap-y-8 mx-8">
        <Left />
        <Right />
      </div>
      <Bottom />
    </div>
  )
}

export default App
