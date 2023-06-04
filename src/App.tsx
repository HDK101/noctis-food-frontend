import {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ThemeProvider} from 'styled-components';
import {UserContext} from './contexts/UserContext';
import Router from './routes';
import theme from './theme';

const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState<string>();
  const value = { token, setToken };

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
