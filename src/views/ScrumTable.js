import ScrumTableData from "../components/scrum/ScrumTableData"

const ScrumTable = () => {
  const scrumData = JSON.parse(localStorage.getItem("Scrum Data"))

  return (
    <section className="task2">
      <div className="container card">
          <div>
              <h1>Scrum Reports Data</h1>
              <p>Scrum Report Data</p>
          </div>
          <table className="scrumTable">
              <tbody className="scrumBody">
                  <tr>
                      <th>S. No</th>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Hours</th>
                      <th>Time</th>
                      <th>What Did I do Today?</th>
                      <th>What will I do Tomorrow?</th>
                  </tr>
                  {scrumData.map((data, index) => <ScrumTableData data={data} sno={index + 1} key={index} />)}
              </tbody>
          </table>
      </div>
    </section>
  )
}

export default ScrumTable