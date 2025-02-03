import { useState } from "react"
import { Background } from "./components/Background/Background"
import { Title } from "./components/Title/Title"
import { Form } from "./components/Form/Form"
import { Todos } from "./components/Todos/Todos"
import { ShowTodos } from "./components/ShowTodos/ShowTodos"

function App() {
  const [changeTheme, setChangeTheme] = useState(true);
  const [ isCompleted, setIsCompleted ] = useState(false);

  const handleChange = () => {
    setChangeTheme(!changeTheme)
  }

  const handleCompleted = () => {
    setIsCompleted(!isCompleted)
  }

  return (
    <main className="w-full bg-Very-Dark-Blue h-[100vh] font-josefin">
      <Background changeTheme={changeTheme} >
        <section className="absolute w-full top-0">
          <div className="w-ful pt-10 px-5">
            <Title changeTheme={changeTheme} handleChange={handleChange} />
            <Form />
            <Todos isCompleted={isCompleted} handleCompleted={handleCompleted}/>
            <ShowTodos />
          </div>
        </section>
      </Background>
    </main>
  )
}

export default App
