import { CheckBoxRadix } from "../CheckBox";
import { LuMoreVertical } from "react-icons/lu"
import { TagCategory } from "../TagCategory";
import styles from "./styles.module.scss";

type Item = {
  id: string
  item: string
  amount: string
  unity: string
  category: string
  checked: boolean
}

interface ItemCheckListProps {
  data: Item;
}

export function ItemCheckList({data}: ItemCheckListProps) {
  const { id, item, amount, unity, category, checked } = data;

  return (
    <div className={styles.itemContainer}>
      <CheckBoxRadix
        id={id}
        checked={checked}
      />
      <div>
        <h2>{item}</h2>
        <span>{amount} {unity}</span>
      </div>

        <TagCategory type={category} />
        <button className={styles.buttonMoreContainer}>
          <LuMoreVertical />
        </button>
    </div>
  );
}

