import Home from './pages/Home'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  // TODO: ThemeProvider로 Home 컴포넌트를 감싸주세요
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
