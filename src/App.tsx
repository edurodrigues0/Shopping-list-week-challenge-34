import { Header } from "./components/Header"
import { ItemCheckList } from "./components/ItemCheckList"
import { ItemsContext } from "./context/ItemsContext"
import styles from "./app.module.scss"
import { useContext } from "react"

function App() {
  const { items } = useContext(ItemsContext)
  
  return (
    <>
      <Header />
      <main className={styles.container}>
        {items.map(item => {
          return <ItemCheckList data={item} key={item.id} />
        })}
      </main>
    </>
  )
}

export default App
