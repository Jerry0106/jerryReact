import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  const [count1, setCount1] = useState(1)
  const handelClick = (type) => {
    if (type === 'increment') {
      setCount(count + 1)
    }
    if (type === 'decrement') {
      setCount(count - 1)
    }
  }

  return (
    <div className="test1">
      <div className="container">
        {console.log('render', count)}
        <div
          className="chevron chevron-up"
          style={{ visibility: count >= 10 && 'hidden' }}
          onClick={() => handelClick('increment')}
        />
        <div className="number">{count}</div>
        <div
          className="chevron chevron-down"
          style={{ visibility: count <= 0 && 'hidden' }}
          onClick={
            () => handelClick('decrement')
            // STEP 4: 使用 setCount 方法來改變 count 的值
          }
        />
      </div>
      {count1 < 10 && (
        <div className="container">
          <div
            className="chevron chevron-up"
            style={{ visibility: count1 >= 20 && 'hidden' }}
            onClick={() => {
              // STEP 3: 使用 setCount 方法來改變 count 的值
              setCount1(count1 + 1)
            }}
          />
          <div className="number">{count1}</div>
          <div
            className="chevron chevron-down"
            style={{ visibility: count1 <= 0 && 'hidden' }}
            onClick={() => {
              // STEP 4: 使用 setCount 方法來改變 count 的值
              setCount1(count1 - 1)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default App
