import { useState } from 'react';
import './Test10.scss';
import ReactDOM from 'react-dom';

const SpeedConverter = () => {
  const UnitControl = () => (
    <div className="unit-control">
      <div className="unit">Mbps</div>
      <span className="exchange-icon fa-fw fa-stack">
        <i className="far fa-circle fa-stack-2x" />
        <i className="fas fa-exchange-alt fa-stack-1x" />
      </span>
      <div className="unit">MB/s</div>
    </div>
  )

  // STEP 2：透過 props 取得從父層傳入的資料
  const CardFooter = (props) => {
    const { inputValue } = props
    let criteria
    console.table(props)
    if (!inputValue) {
      criteria = {
        title: '---',
        backgroundColor: '#d3d8e2',
      }
    } else if (inputValue < 15) {
      criteria = {
        title: 'SLOW',
        backgroundColor: '#ee362d',
      }
    } else if (inputValue < 40) {
      criteria = {
        title: 'GOOD',
        backgroundColor: '#1b82f1',
      }
    } else if (inputValue >= 40) {
      criteria = {
        title: 'FAST',
        backgroundColor: '#13d569',
      }
    }

    return (
      <div
        className="card-footer"
        style={{
          backgroundColor: criteria.backgroundColor,
        }}
      >
        {criteria.title}
      </div>
    )
  }
  const [inputValue, setInputValue] = useState(0)

  const handleInputChange = (e) => {
    const { value } = e.target
    setInputValue(value)
  }

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input
              type="number"
              onChange={handleInputChange}
              value={inputValue}
              className="input-number"
              min="0"
            />
          </div>
          <span
            className="angle-icon fa-2x"
            style={{
              marginTop: 30,
            }}
          >
            <i className="fas fa-angle-right" />
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input
              className="input-number text-right"
              type="text"
              value={inputValue / 8}
              disabled
            />
          </div>
        </div>
      </div>
      {/* STEP 1: 把想要傳入 CardFooter 的資料透過 key={value} 的方式傳入 */}
      <CardFooter inputValue={inputValue} />
    </div>
  )
}

// ReactDOM.render(<SpeedConverter />, document.getElementById('root'))
export default SpeedConverter
