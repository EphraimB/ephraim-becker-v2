"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

const DrawerContext = createContext({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
});

type DrawerProviderProps = {
  children: ReactNode;
};

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within an DrawerProvider");
  }
  return context;
};
