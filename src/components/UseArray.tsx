import { useState } from 'react'

export function useArray<T>(defaultValue: T[]) {
  const [array, setArray] = useState(defaultValue)

  function pushUseArray(element: T) {
    setArray((a) => [...a, element])
  }

  function filterUseArray(
    callback: (value: T, index: number, array: T[]) => boolean
  ) {
    setArray((a) => a.filter(callback))
  }

  function updateUseArray(index: number, newElement: T) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ])
  }

  function removeUseArray(index: number) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }

  function clearUseArray() {
    setArray([])
  }
  function removeElementsThatDoNotStartWithUpperCase(array: T[]) {
    const filteredArray = array.filter((element) => {
      return /^[A-Z]/.test(element as string)
    })
    setArray(filteredArray)
  }

  return {
    array,
    setUseArray: setArray,
    pushUseArray,
    filterUseArray,
    updateUseArray,
    removeUseArray,
    clearUseArray,
    removeElementsThatDoNotStartWithUpperCase,
  }
}
