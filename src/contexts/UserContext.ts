import { createContext } from 'react';

interface UserContextInterface {
  token?: string;
  signed: boolean;
  setToken: (token: string) => void | null | undefined;
  signOut: () => void | null | undefined;
}

export const UserContext = createContext<UserContextInterface>({
  token: '',
  signed: false,
  setToken: () => {},
  signOut: () => {},
});
