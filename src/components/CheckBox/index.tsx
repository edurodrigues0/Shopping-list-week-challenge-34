import * as CheckBox from "@radix-ui/react-checkbox"

import { useContext, useEffect, useState } from "react";

import { ItemsContext } from "../../context/ItemsContext";
import { LuCheck } from "react-icons/lu"
import styles from "./styles.module.scss"

interface CheckboxProps {
  id: string;
  checked: boolean
}

export function CheckBoxRadix({checked, id}: CheckboxProps) {
  const { itemChecked } = useContext(ItemsContext)
  const [isChecked, setIsChecked] = useState(checked)
  
  useEffect(() => {
    itemChecked(id, isChecked)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked])

  return (
    <CheckBox.Root
      checked={isChecked}
      onCheckedChange={() => setIsChecked(!isChecked)}
      className={styles.checkBoxContainer}
    >
      <CheckBox.Indicator>
        {!!isChecked === true && <LuCheck size={12} />}
      </CheckBox.Indicator>
    </CheckBox.Root>
  )
}