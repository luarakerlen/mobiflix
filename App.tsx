import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
