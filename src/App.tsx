import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Resume } from './components/Resume'
import Warning from './components/Warning'

function App() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-4 container max-w-4xl py-8">
        <Header />
        <Resume />
        <Warning />
        <Footer />
      </div>
    </div>
  )
}

export default App
