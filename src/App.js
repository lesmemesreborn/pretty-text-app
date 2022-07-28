import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import TextForm from "./components/TextForm/TextForm"
import React, { useState } from "react"
import Alert from "./components/Alert/Alert"

const App = () => {
  const [mode, setMode] = useState("light") // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#7F7F7F"
      showAlert("тёмный режим включён", "успешно")
      document.title = "Dark mode"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("тветлый режим включён", "успешно")
      document.title = "Light mode"
    }
  }
  return (
    <div className="App">
      <Navbar title="PrettyText" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="PrettyText - сделай свой текст приятным."
          mode={mode}
        />
      </div>
    </div>
  )
}

export default App
