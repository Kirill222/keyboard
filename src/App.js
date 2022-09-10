import Keyboard from './components/Keyboard/Keyboard'
import Test from './components/Keyboard/Test'

const symbols = [
  {
    main: '`',
    shift: '~',
  },

  {
    shift: '!',
    main: '1',
  },

  {
    shift: '@',
    main: '2',
  },
  {
    shift: '#',
    main: '3',
  },
  {
    shift: '$',
    main: '4',
  },
  {
    shift: '%',
    main: '5',
  },
  {
    shift: '^',
    main: '6',
  },
  {
    shift: '&',
    main: '7',
  },
  {
    shift: '*',
    main: '8',
  },
  {
    shift: '(',
    main: '9',
  },
  {
    shift: ')',
    main: '0',
  },
  {
    shift: '_',
    main: '-',
  },
  {
    shift: '+',
    main: '=',
  },
  {
    type: 'bigonetwo',
    main: 'backspace',
  },
]

function App() {
  return (
    <div className='App'>
      <Keyboard symbols={symbols} />
      <Test symbols={symbols} />
    </div>
  )
}

export default App
