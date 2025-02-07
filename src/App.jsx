import React from "react"
import { useState } from "react"
import { Background } from "./components/Background/Background"
import { Title } from "./components/Title/Title"
import { Form } from "./components/Form/Form"

function App() {
  const [changeTheme, setChangeTheme] = useState(true);


  const handleChange = () => {
    setChangeTheme(!changeTheme)
  }


  return (
    <main className="w-full h-full font-josefin ">
      <Background changeTheme={changeTheme} >
        <section className="absolute w-full top-0 pb-16">
          <div className="w-full pt-10 px-5">
            <Title changeTheme={changeTheme} handleChange={handleChange} />
            <Form />
            
          </div>
        </section>
      </Background>
    </main>
  )
}

export default App
