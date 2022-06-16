import Header from "./components/essentials/Header";
import Footer from "./components/essentials/Footer";
import ScrumForm from "./components/scrum/ScrumForm";

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
    <div className="App">
      <Header />
      <ScrumForm addScrum={addScrum} />
      <Footer />
    </div>
  );
}

export default App;
