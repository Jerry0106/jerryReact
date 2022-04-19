import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
const Test9s = Array.from({ length: 10 }, (_, index) => index)

// 產生元素數目為 10，元素值都為 undefined 的陣列
// Array.from({ length: 10 }); // [undefined, undefined, ..., undefined]

// // 產生元素數目為 10，元素值為 0 ~ 9 的陣列
// Array.from({ length: 10 }, (_, index) => index); // [0, 1, 2, ..., 8, 9]

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        display: 'flex',
      }}
    >
      {Test9s.map((item) => (
        <App key={item + 1} />
      ))}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
