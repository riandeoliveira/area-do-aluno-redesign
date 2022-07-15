import { createContext, useState, type ReactNode } from "react";

interface IMenuContext {
  menuIsOpen: boolean;

  handleMenuState: () => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

const initialValue: IMenuContext = {
  menuIsOpen: false,

  handleMenuState: () => {},
};

export const MenuContext = createContext<IMenuContext>(initialValue);

export const MenuProviver = ({ children }: MenuProviderProps): JSX.Element => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const handleMenuState = (): void => {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
  };

  return (
    <MenuContext.Provider value={{ menuIsOpen, handleMenuState }}>
      {children}
    </MenuContext.Provider>
  );
};
