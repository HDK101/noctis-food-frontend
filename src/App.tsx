import {useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ThemeProvider} from 'styled-components';
import {UserContext} from './contexts/UserContext';
import Router from './routes';
import server from './services/api/server';
import theme from './theme';

const queryClient = new QueryClient();

function App() {
  const [token, setTokenRaw] = useState<string>();
  const [signed, setSigned] = useState<boolean>(false);

  useEffect(() => {
    setSigned(localStorage.getItem('signed') === 'true');

    const tokenLocalStorage = localStorage.getItem('token');
    if (tokenLocalStorage) { 
      setTokenRaw(tokenLocalStorage);
      server.defaults.headers.common.Authorization = `Bearer ${tokenLocalStorage}`;
    }
  }, []);

  const setToken = (token: string) => {
    setTokenRaw(token);
    setSigned(true);
    localStorage.setItem('signed', 'true');
    localStorage.setItem('token', token);

    server.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  const signOut = () => {
    setTokenRaw('');
    setSigned(false);
    server.defaults.headers.common.Authorization = null;
  };

  const value = { token, setToken, signed, signOut };

  return (
    <UserContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}

export default App;
