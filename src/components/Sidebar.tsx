interface SidebarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
  links: string[]
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  links
}) => {
  return (
    <ul
      className={`fixed flex-col gap-y-8 pt-24 right-0 top-0  h-[100vh] flex bg-white text-black font-semibold text-md md:hidden transition z-40  ${
        isSidebarOpen
          ? "max-[375px]:w-[100%] w-[300px] shadow-xl drop-shadow-md px-8 hover:cursor-pointer"
          : "hidden w-0"
      }`}
    >
      {links.map((link, i) => (
        <li
          className="hover:text-red-400 hover:drop-shadow-md"
          key={i}
          onClick={() => setIsSidebarOpen(false)}
        >
          {link}
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
