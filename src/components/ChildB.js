import { useState } from 'react'

function ChildB(props) {
  console.log(props)
  const [childBData, setChildBData] = useState('這是Ｂ的資料')
  const [childZData, setchildZData] =useState('新的要傳送給父層的資料')
  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData(childBData)
          props.setData(childZData)
        }}
      >
        送資料回Parent
      </button>
    </>
  )
}

export default ChildB
