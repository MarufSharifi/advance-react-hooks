import * as React from 'react'

const countReducer = (state, action) => {
  return {
    ...state,
    ...(typeof action === 'function' ? action(state) : action),
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setState({count: count + step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
