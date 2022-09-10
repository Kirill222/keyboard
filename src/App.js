import Keyboard from './components/Keyboard/Keyboard'
import Test from './components/Keyboard/Test'

import { symbols } from './data/symbols'

function App() {
  return (
    <div className='App'>
      <Keyboard symbols={symbols} />
      <Test symbols={symbols} />
    </div>
  )
}

export default App
