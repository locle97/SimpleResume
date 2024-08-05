function Header() {
  return (
    <>
      <header className="print:hidden flex px-24 p-12 bg-transparent border justify-between">
        <a href="/" className="logo">
          <h1 className="text-4xl"><p>Simple</p><p>Resume.</p></h1>
        </a>

        <nav className="flex justify-end items-center gap-12">
          <a href="/" className="text-2xl nav-link">Home</a>
          <a href="/#/builder" className="text-2xl nav-link">Builder</a>
          <a href="/#/blog" className="text-2xl nav-link">Blog</a>
          <a href="/#/about" className="text-2xl nav-link">About</a>
        </nav>
      </header>
    </>
  )
}

export default Header;
