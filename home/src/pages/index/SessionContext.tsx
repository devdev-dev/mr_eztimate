import { useDisclosure } from '@chakra-ui/react';
import { AuthChangeEvent } from '@supabase/gotrue-js';
import { Session } from '@supabase/gotrue-js/src/lib/types';
import * as React from 'react';
import { ReactElement, useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';

interface IContextProps {
  session: Session | null;
}

const SessionContext = React.createContext({} as IContextProps);

function SessionContextProvider({ children }: { children: ReactElement }) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      handleAuthChange(_event, session);
      setSession(session);
    });
  }, []);

  const [globalLoadingState, setGlobalLoadingState] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const value: IContextProps = {
    session
  };

  return <SessionContext.Provider value={value}> {children}</SessionContext.Provider>;
}

async function handleAuthChange(event: AuthChangeEvent, session: Session | null) {
  await fetch('/api/auth', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify({ event, session })
  });
}

export function useSession() {
  const context = React.useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a AppProvider');
  }
  return context.session;
}

export { SessionContextProvider };
