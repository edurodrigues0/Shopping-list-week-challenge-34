import { ReactNode, createContext, useEffect, useState } from "react"

import { api } from "../services/api"
import uuid from "react-uuid"

interface ItemsContextProps {
  children: ReactNode
}

interface ItemsContextType {
  itemChecked: (id: string, isChecked: boolean) => void;
  createItems: (data: ItemsData) => void
  items: Items[]
}

export const ItemsContext = createContext({} as ItemsContextType)

interface Items {
  id: string
  item: string
  amount: string
  unity: string
  category: string
  checked: boolean
}

interface ItemsData {
  data: Items
}

export function ItemsContextProvider({children}: ItemsContextProps) {
  const [items, setItems] = useState<Items[]>([])

  useEffect(() => {
    api.get("/items").then(res => {
      setItems(res.data)
    })
  }, [])


  async function createItems({data}: ItemsData) {
    const response = await api.post('/items', {
      id: uuid(),
      amount: data.amount,
      category: data.category,
      item: data.item,
      unity: data.unity,
      checked: false,
    })
    
    setItems([...items, response.data]);
  }

  function itemChecked(id: string, isChecked: boolean) {
    const updateData = { checked: isChecked };
  
    api.patch(`/items/${id}`, updateData).then((response) => {
      if (response.status === 200) {
    
        const updatedItems = items.map((item) => {
          if (item.id === id) {
            return { ...item, ...updateData };
          }
          return item;
        });
        setItems(updatedItems);
      } else {
        console.log("Erro ao atualizar o item no servidor.");
      }
    });
    
    // items.filter((item) => {
    //   if (item.id === id) {
    //     item.checked = isChecked
    //     api.put(`/items/${id}`, {checked: isChecked}).then((response) => {
    //       console.log(response)
    //     })
    //   }
    // })
  }

  return (
    <ItemsContext.Provider
      value={{
        createItems,
        itemChecked,
        items
      }}
    >
      {children}
    </ItemsContext.Provider>
  )
}