import { createContext, useState, type ReactNode } from "react";

interface IMenuContext {
  menuIsOpen: boolean;

  toggleMenuShow: () => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

const initialValue: IMenuContext = {
  menuIsOpen: false,

  toggleMenuShow: () => {},
};

export const MenuContext = createContext<IMenuContext>(initialValue);

export const MenuProviver = ({ children }: MenuProviderProps): JSX.Element => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const toggleMenuShow = (): void => setMenuIsOpen((state: boolean) => !state);

  return (
    <MenuContext.Provider value={{ menuIsOpen, toggleMenuShow }}>
      {children}
    </MenuContext.Provider>
  );
};
