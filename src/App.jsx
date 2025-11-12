import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'

function App() {
  // TODO: ThemeProvider로 Home 컴포넌트를 감싸주세요
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
