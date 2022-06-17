import Header from "./components/essentials/Header";
import Footer from "./components/essentials/Footer";
import ScrumForm from "./components/scrum/ScrumForm";
import ScrumTable from "./views/ScrumTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  // Add Scrum to LS -
  const addScrum = (scrumData) => {
    let localData = []
    if (JSON.parse(localStorage.getItem('Scrum Data')) !== null) {
      localData = JSON.parse(localStorage.getItem('Scrum Data'))
    } 
    localData.push(scrumData)
    localStorage.setItem("Scrum Data", JSON.stringify(localData))
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ScrumForm addScrum={addScrum} />} exact />
          <Route exact path="/scrum-data" element={<ScrumTable />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
