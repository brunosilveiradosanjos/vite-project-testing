// import { First } from './components/First'
// import { SimplePost } from './components/SimplePost'
// import UseArrayExample from './components/UseArrayExample'
// import { PostWithComment } from './components/userInteraction/PostWithComments'
// import { ShoppingList1 } from './components/errors/ShoppingList1'
// import { ShoppingList2 } from './components/errors/ShoppingList2'

import { ShoppingList } from './components/doubles/spies/ShoppingList'

function App() {
  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      {/* <First /> */}
      {/* <SimplePost user="Bruno" content="xuxu" /> */}
      {/* <UseArrayExample /> */}
      {/* <PostWithComment user="Bruno" content="xuxu" /> */}
      {/* <ShoppingList1 groceries={['apple', 'banana']} selectItem={() => {}} />
      <ShoppingList2
        groceries={['apple', 'banana', 'apple']}
        selectItem={() => {}}
      /> */}
      <ShoppingList groceries={['apple', 'banana']} selectItem={() => {}} />
    </>
  )
}

export default App
