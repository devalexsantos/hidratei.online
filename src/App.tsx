import { Header } from './components/Header'
import { Resume } from './components/Resume'

function App() {
  return (
    <div className="min-h-screen">
      <div className="space-y-4 container max-w-4xl py-8">
        <Header />
        <Resume />
      </div>
    </div>
  )
}

export default App
