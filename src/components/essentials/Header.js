const Header = () => {
  return (
    <header className="navBar">
      <div className="container">
          <nav className="left">
              <h1><a href="index.html">Scrum Report</a></h1>
          </nav>
          <nav className="right">
              <ul>
                  <li><a href="index.html">Scrum Form</a></li>
                  <li><a href="task2.html">Scrum Data</a></li>
              </ul>
          </nav>
      </div>
  </header>
  )
}

export default Header