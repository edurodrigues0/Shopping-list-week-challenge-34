import { Form } from '../Form'
import styles from './styles.module.scss'

export function Header() {
  return(
    <header className={styles.container}>
      <h1>Lista de Compras</h1>

      <Form />
    </header>
  )
}