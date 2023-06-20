import { ThemeContextProvider } from './contexts/ThemeContext';
import IndexRoutes from './routes/IndexRoutes';

function App() {

  return (
    <>
      <ThemeContextProvider>
        <IndexRoutes />
      </ThemeContextProvider>
    </>
  )
}

export default App
