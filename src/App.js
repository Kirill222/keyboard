import Keyboard from './components/Keyboard/Keyboard'
import Task from './components/Task/Task'

import { symbols } from './data/symbols'

function App() {
  return (
    <div className='App'>
      <Task task={'I am Batman!'} />
      <Keyboard symbols={symbols} />
    </div>
  )
}

export default App
