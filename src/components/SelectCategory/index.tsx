import * as SelectRadix from "@radix-ui/react-select";

import {
  LuApple,
  LuBeef,
  LuCarrot,
  LuCheck,
  LuChevronDown,
  LuMilk,
  LuSandwich,
} from "react-icons/lu";

import { SelectProps } from "@radix-ui/react-select";
import styles from "./styles.module.scss";

export function SelectCategory({...rest}: SelectProps) {
  const categoryType = [
    { name: "Fruta", icon: <LuApple size={16} color="#BB9F3A" /> },
    { name: "Padaria", icon: <LuSandwich size={16} color="#8CAD51" /> },
    { name: "Legume", icon: <LuCarrot size={16} color="#DB5BBF" /> },
    { name: "Bebida", icon: <LuMilk size={16} color="#E07B67" /> },
    { name: "Carne", icon: <LuBeef size={16} color="#7B94CB" /> },
  ];
  
  return (
    <SelectRadix.Root {...rest}>
      <SelectRadix.Trigger
        className={styles.selectTrigger}
        aria-label="category"
        id="category"
      >
        <SelectRadix.Value placeholder="Selecione" />
        <LuChevronDown size={16} />
      </SelectRadix.Trigger>

      <SelectRadix.Portal className={styles.portalContent}>
        <SelectRadix.Content className={styles.selectContent} position="popper">
          <SelectRadix.Viewport>
            {categoryType.map((item) => {
              return (
                <div key={item.name}>
                  <SelectRadix.Item
                    className={styles.selectItem}
                    value={item.name.toLocaleLowerCase()}
                  >
                    <span>
                      {item.icon}
                      <SelectRadix.ItemText>{item.name}</SelectRadix.ItemText>
                    </span>
                    <SelectRadix.ItemIndicator>
                      <LuCheck color="#A881E6" />
                    </SelectRadix.ItemIndicator>
                  </SelectRadix.Item>
                  <SelectRadix.Separator className={styles.selectSeparator} />
                </div>
              );
            })}
          </SelectRadix.Viewport>
          <SelectRadix.Arrow />
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
}
