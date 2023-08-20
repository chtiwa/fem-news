interface NavbarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
  links: string[]
}

const Navbar: React.FC<NavbarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  links
}) => {
  return (
    <div className="flex items-center justify-between my-8 p-4 md:px-8 md:py-4">
      <img src="/images/logo.svg" alt="" />
      {isSidebarOpen ? (
        <img
          src="/images/icon-menu-close.svg"
          alt=""
          className="flex md:hidden z-50 hover:cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : (
        <img
          src="/images/icon-menu.svg"
          alt=""
          className="flex md:hidden hover:cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}
      <ul className="hidden md:flex md:items-center md:gap-x-4">
        {links.map((link, i) => (
          <li
            className="px-4 py-2 text-md text-slate-500 hover:cursor-pointer hover:text-red-400"
            key={i}
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
