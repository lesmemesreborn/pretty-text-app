import React, { useState } from "react"

const TextForm = (props) => {
  const [text, setText] = useState()
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Переведено в верхний регистр", "успешно")
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Переведено в нижний регистр", "успешно")
  }

  const handleClearText = () => {
    let newText = ""
    setText(newText)
    props.showAlert("Теперь чисто", "успешно")
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Скопировано в буфер обмена", "успешно")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Лишние пробелы убраны", "успешно")
  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="enter text here"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Перевести в верхний регистр
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Перевести в нижний регистр
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Скопировать текст
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Убрать лишние пробелы
        </button>

        <button className="btn btn-danger mx-2 my-2" onClick={handleClearText}>
          Очистить текст
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Немного статистики:</h3>
        <p>
          {text?.split(/[^\s]+/).length - 1} слов(а) и{" "}
          {text?.replace(/ /g, "").length} символ(ов)
        </p>
        <div className="Preview">
          <p>
            <b>Превью:</b>
          </p>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default TextForm
