import React, { useEffect } from "react"
import { useState } from "react"
import { Background } from "./components/Background/Background"
import { Title } from "./components/Title/Title"
import { Form } from "./components/Form/Form"

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector('html').classList.add("dark")
    } else {
      document.querySelector('html').classList.remove("dark")
    }

  }, [theme])

  const handleChamgeTheme = () => {
    setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
    console.log("click");
  }

  return (
    <main className="w-full h-full font-josefin ">
      <Background changeTheme={theme} >
        <section className="absolute w-full top-0 pb-16">
          <div className="w-full pt-10 px-5 ">
            <Title changeTheme={theme} handleChange={handleChamgeTheme} />
            <Form />

          </div>
        </section>
      </Background>
    </main>
  )
}

export default App
