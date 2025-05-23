import { First } from './components/First'
import { SimplePost } from './components/SimplePost'
import UseArrayExample from './components/UseArrayExample'

function App() {
  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      <First />
      <SimplePost user="Bruno" content="xuxu" />
      <UseArrayExample />
    </>
  )
}

export default App
