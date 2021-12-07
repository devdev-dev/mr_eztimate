import { useDisclosure } from '@chakra-ui/react';
import { Session } from '@supabase/gotrue-js/src/lib/types';
import * as React from 'react';
import { ReactElement, useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';

interface IContextProps {
  session: Session | null;
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
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const [globalLoadingState, setGlobalLoadingState] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const value: IContextProps = {
    session,
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

export function useSession() {
  const context = React.useContext(AppLayoutContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a AppProvider');
  }
  return context.session;
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
