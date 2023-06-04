import { createContext, Dispatch, SetStateAction } from 'react';

interface UserContextInterface {
  token?: string;
  setToken: (token: string) => void | null | undefined;
}

export const UserContext = createContext<UserContextInterface>({
  token: '',
  setToken: () => {},
});
