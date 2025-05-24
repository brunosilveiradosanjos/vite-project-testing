import { useArray } from './UseArray'

export default function UseArrayExample() {
  const {
    array,
    setUseArray,
    pushUseArray,
    removeUseArray,
    filterUseArray,
    updateUseArray,
    clearUseArray,
    removeElementsThatDoNotStartWithUpperCase,
  } = useArray([1, 2, 3, 4, 5, 6])

  return (
    <div>
      <div>{array.join(', ')}</div>
      <button onClick={() => pushUseArray(5)}>Add 5</button>
      <br />
      <button onClick={() => updateUseArray(1, 8)}>
        Change Second Element To 8
      </button>
      <br />
      <button onClick={() => removeUseArray(1)}>Remove Second Element</button>
      <br />
      <button onClick={() => filterUseArray((n) => n < 3)}>
        Keep Numbers Less Than 3
      </button>
      <br />
      <button onClick={() => setUseArray([1, 2, 3])}>Set To 1, 2,3</button>
      <br />
      <button onClick={clearUseArray}>Clear</button>
      <br />
      <button onClick={() => removeElementsThatDoNotStartWithUpperCase(array)}>
        Clear
      </button>
      <br />
    </div>
  )
}
