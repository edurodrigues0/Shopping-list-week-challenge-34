import { FormEvent, useContext, useState } from "react"

import { ItemsContext } from "../../context/ItemsContext";
import { LuPlus } from "react-icons/lu";
import { SelectCategory } from "../SelectCategory";
import { SelectQuantity } from "../SelectQuantity";
import styles from "./styles.module.scss";

export function Form() {
  const { createItems } = useContext(ItemsContext)

  const [unity, setUnity] = useState("Un.")
  const [category, setCategory] = useState("")
  const [item, setItem] = useState("")
  const [amount, setAmount] = useState("")

  function handleCreateItems(event: FormEvent) {
    event.preventDefault()

    createItems({
      data: {
        amount,
        unity,
        category,
        item,
      }
    })
  }

  return (
    <form className={styles.container}>
      <div className={styles.inputFormCaintainer}>
        <label htmlFor="item">Item</label>
        <input
          type="text"
          id="item"
          onChange={(e) => setItem(e.target.value)}
        />
      </div>

      <div className={styles.inputFormCaintainer}>
        <label htmlFor="quantity">Quantidade</label>
        <div className={styles.quantityInputs}>
          <input
            type="number"
            id="quantity"
            onChange={(e) => setAmount(e.target.value)}
          />
          <SelectQuantity
            defaultValue={unity}
            onValueChange={(value) => setUnity(value)}
          />
        </div>
      </div>

      <div className={styles.inputFormCaintainer}>
        <label htmlFor="category">Categoria</label>
        <SelectCategory
          required        
          onValueChange={(value) => setCategory(value)}
        />
      </div>

      <button onClick={handleCreateItems} type="submit" className={styles.submitButton}>
        <LuPlus size={16} />
      </button>
    </form>
  );
}
