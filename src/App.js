import React from "react"

const App = () => {
  return (
    <div className="App">
      <form name="form" method="POST" data-netlify="true">
        <p>
          <label>Input <input type="text" name="input" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default App
