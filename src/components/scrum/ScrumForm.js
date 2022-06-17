import { useState } from 'react'

function ScrumForm({ addScrum }) {

  const todayDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
  
    today = yyyy + '-' + mm + '-' + dd;

    return today
  }

  const currentTime = () => {
    let time = new Date();
    const hours = time.getHours()
    time = String(hours).padStart(2, "0") + ":" + String(time.getMinutes()).padStart(2, "0") + " " + (hours >= 12 ? "PM" : "AM")
    return time
  }

  const [date] = useState(todayDate)
  const [name, setName] = useState('')
  const [haveDone, setHaveDone] = useState('')
  const [willDo, setWillDo] = useState('')
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    const time = currentTime()
    addScrum({date, name, time, haveDone, willDo})

    setName('')
    setHaveDone('')
    setWillDo('')
  }

  return (
    <section className="task1">
      <div className="container card">
        <div className="text-left">
          <h1>Daily Scrum Report</h1>
          <p>Scrum Report Form</p>
        </div>

        <form className="scrumForm" onSubmit={onSubmit}>
          <div><input type="date" name="date" value={date} disabled/></div>
          <div><input type="text" name="fullName" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required/></div>
          <div>
              <textarea name="haveDone" placeholder="What Did I do Today?" value={haveDone} onChange={(e) => setHaveDone(e.target.value)} required></textarea>
          </div>
          <div>
              <textarea name="willDo" placeholder="What will I do Tomorrow?" value={willDo} onChange={(e) => setWillDo(e.target.value)} required></textarea>
          </div>
          <div><input type="submit" className="btn"/></div>
        </form>
      </div>
    </section>
  )
}

export default ScrumForm