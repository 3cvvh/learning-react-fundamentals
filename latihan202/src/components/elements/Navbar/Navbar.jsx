const Navbar = ({username}) => {
//   const user = { username } // nanti ganti dari state/context
// console.log(username)

  return (
    <nav className="bg-[#0f0620] border-b border-[#82460340] px-8 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="font-cinzel text-[#c49dff] text-sm tracking-widest">
        ☽ Arcanum ☾
      </div>

      {/* Menu */}
      <ul className="flex items-center gap-8 list-none">
        <li>
          <a href="/product" className="text-[#9b87c4] hover:text-[#c49dff] text-sm tracking-widest uppercase transition-colors">
            Product
          </a>
        </li>
        <li>
          <a href="/about" className="text-[#9b87c4] hover:text-[#c49dff] text-sm tracking-widest uppercase transition-colors">
            About
          </a>
        </li>
      </ul>

      {/* User & Logout */}
      <div className="flex items-center gap-4">

        {/* Nama user */}
        <div className="flex items-center gap-2">
         
          <span className="text-[#9b87c4] text-sm italic">
            {username}
          </span>
        </div>

        {/* Tombol Logout */}
        <button
          
          className="bg-[#3d0f8040] border border-[#a050ff66] text-[#c49dff] px-4 py-1.5 text-xs tracking-widest uppercase rounded-sm hover:bg-[#50148c80] transition-colors"
        >
          Logout
        </button>

      </div>
    </nav>
  )
}

export default Navbar