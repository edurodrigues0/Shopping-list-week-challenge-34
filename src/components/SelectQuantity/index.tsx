import * as SelectRadix from "@radix-ui/react-select";

import {LuCheck, LuChevronDown} from "react-icons/lu";

import { SelectProps } from "@radix-ui/react-select";
import styles from "./styles.module.scss";

export function SelectQuantity({...rest}: SelectProps) {
  const categoryType = ['Un.', 'L', 'Kg'];

  return (
    <SelectRadix.Root {...rest}>
      <SelectRadix.Trigger
        className={styles.selectTrigger}
      >
        <SelectRadix.Value placeholder={categoryType[0]} />
        <LuChevronDown size={16} />
      </SelectRadix.Trigger>

      <SelectRadix.Portal className={styles.portalContent}>
        <SelectRadix.Content className={styles.selectContent} position="popper">
          <SelectRadix.Viewport>
            {categoryType.map((item) => {
              return (
                <div key={item}>
                  <SelectRadix.Item
                    className={styles.selectItem}
                    value={item}
                  >
                    <SelectRadix.ItemText>{item}</SelectRadix.ItemText>
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
