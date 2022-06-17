import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="navBar">
      <div className="container">
          <nav className="left">
              <h1><Link to="/">Scrum Report</Link></h1>
          </nav>
          <nav className="right">
              <ul>
                  <li><Link to="/">Scrum Form</Link></li>
                  <li><Link to="scrum-data">Scrum Data</Link></li>
              </ul>
          </nav>
      </div>
  </header>
  )
}

export default Header