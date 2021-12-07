import { useDisclosure } from '@chakra-ui/react';
import * as React from 'react';
import { ReactElement, useState } from 'react';

interface IContextProps {
  openSignInUpScreen: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
  appLoading: {
    value: boolean;
    set: (loading: boolean) => void;
  };
}

const AppLayoutContext = React.createContext({} as IContextProps);

function AppLayoutContextProvider({ children }: { children: ReactElement }) {
  const [globalLoadingState, setGlobalLoadingState] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const value: IContextProps = {
    openSignInUpScreen: {
      isOpen,
      onOpen,
      onClose
    },
    appLoading: {
      value: globalLoadingState,
      set: newLoading => {
        setGlobalLoadingState(newLoading);
      }
    }
  };

  return <AppLayoutContext.Provider value={value}> {children}</AppLayoutContext.Provider>;
}

export function useOpenSignInUpScreen() {
  const context = React.useContext(AppLayoutContext);
  if (context === undefined) {
    throw new Error('useOpenSignInUpScreen must be used within a AppProvider');
  }
  return context.openSignInUpScreen;
}

export function useAppLoading() {
  const context = React.useContext(AppLayoutContext);
  if (context === undefined) {
    throw new Error('useAppLoading must be used within a AppProvider');
  }
  return context.appLoading;
}

export { AppLayoutContextProvider };
