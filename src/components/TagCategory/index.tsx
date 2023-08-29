import { LuApple, LuBeef, LuCarrot, LuMilk, LuSandwich } from "react-icons/lu"

import styles from "./styles.module.scss"

interface TagCategoryProps {
  type: string
}

const categorysType = [
  { name: "fruta", css: "tagOrange", icon: <LuApple size={16} /> },
  { name: "padaria", css: "tagYellow", icon: <LuSandwich size={16} /> },
  { name: "legume", css: "tagGreen", icon: <LuCarrot size={16} /> },
  { name: "bebida", css: "tagBlue", icon: <LuMilk size={16} /> },
  { name: "carne", css: "tagPink", icon: <LuBeef size={16} /> },
]

type Category = {
  name: string
  css: string
  icon: JSX.Element
}

export function TagCategory({type}: TagCategoryProps) {
  let category: Category
  
  categorysType.map(categ => {
    if (categ.name === type) {
      category = categ
    }
  })


  return (
    <span className={`${styles.tagCategoryContainer} ${styles[category!.css]} `}>
      {category!.icon}
      {category!.name}
    </span>
  )
}