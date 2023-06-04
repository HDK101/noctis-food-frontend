import { createContext, Dispatch, SetStateAction } from 'react';

interface UserContextInterface {
  token?: string;
  setToken?: Dispatch<SetStateAction<string | undefined>> | null;
}

export const UserContext = createContext<UserContextInterface>({
  token: '',
  setToken: null,
});
