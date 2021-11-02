import * as React from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + action.step,
      }
    }
    default: {
      throw new Error(`unhandled action type ${action.type} `)
    }
  }
}

function init(initialValue) {
  return typeof initialValue === 'function' ? initialValue() : initialValue
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(
    countReducer,
    {
      count: initialCount,
    },
    init,
  )
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
