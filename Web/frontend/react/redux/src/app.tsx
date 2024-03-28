import { Home, Sidebar, Headphones, Search } from "react-feather";
import { AnimatePresence, motion, } from "framer-motion"
import useAppStore from "./store";

export default function App() {
  const { isSidebarOpen, toggleSidebar } = useAppStore()
  return <main className="flex items-start">
    <NavigationBar />
    <header className="flex-grow">
      {!isSidebarOpen && (
        <button onClick={toggleSidebar} >
          <Sidebar size={20} color="#0066FF" />
        </button>
      )}
      <div className="flex-grow"></div>
      <button onClick={toggleSidebar} >
        <Search size={20} color="#0066FF" />
      </button>
    </header>
  </main>


}

function NavigationBar() {
  const width = 300;
  const { isSidebarOpen, toggleSidebar } = useAppStore()

  return <AnimatePresence initial={false}>
    {isSidebarOpen && (
      <motion.nav
        transition={{
          damping: 300,
          stiffness: 50
        }}
        animate={{ width: [0, width] }} exit={{ width: [width, 0] }}
        className="bg-gray-100 border-r h-screen flex flex-row-reverse overflow-hidden">
        <div
          className="flex flex-col gap-4"
          style={{
            minWidth: width,
            maxWidth: width,
            width: width
          }}>
          <header>
            {!isSidebarOpen && (
              <button onClick={toggleSidebar} >
                <Sidebar size={16} color="#0066FF" />
              </button>
            )}
            <button onClick={toggleSidebar} >
              <Sidebar size={20} color="#0066FF" />
            </button>
          </header>
          <h2 className="text-3xl font-bold px-4">Products</h2>
          <ul className="px-4">
            <li className="flex p-3 items-center gap-3 text-white bg-accent rounded-xl"><Home color="#FFFFFF" /> Home</li>
            <li className="flex p-3 items-center gap-3"><Headphones color="#0066FF" /> Home</li>
          </ul>
        </div>


      </motion.nav>
    )}
  </AnimatePresence>
}
