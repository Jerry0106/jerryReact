import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [pData] = useState('這是要傳送給Ａ的資料')
  const [eData] = useState('這是新的第二筆資料')
  //給ChildB設定回資料用的狀態
  const [data, setData] = useState('')

  return (
    <>
      <h2>Parent</h2>
      <p>來自ChildB資料:{data}</p>
      <ChildA pData={pData} eData={eData} />
      <ChildB setData={setData} />
    </>
  )
}

export default Parent
