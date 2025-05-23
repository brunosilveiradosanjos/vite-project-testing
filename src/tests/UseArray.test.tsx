import { act, renderHook } from '@testing-library/react'
import { useArray } from '../components/UseArray'

describe('UseArray test suites', () => {
  describe('UseArray with numbers', () => {
    it('should return initial array', () => {
      const initialArray = [1, 2, 3, 4, 5, 6]
      const { result } = renderHook(() => useArray(initialArray))
      expect(result.current.array).toEqual(initialArray)
    })
    it('should add new array elements', () => {
      const initialArray = [1, 2, 3, 4, 5, 6]
      const { result } = renderHook(() => useArray(initialArray))
      const newElement = 7
      act(() => {
        result.current.pushUseArray(newElement)
      })
      expect(result.current.array).toEqual([...initialArray, newElement])
    })
    it('should update array elements', () => {
      const initialArray = [1, 2, 3, 4, 5, 6]
      const { result } = renderHook(() => useArray(initialArray))
      const newElement = 2
      act(() => {
        result.current.updateUseArray(0, newElement)
      })
      expect(result.current.array[0]).toEqual(newElement)
    })
    it('should remove array elements', () => {
      const initialArray = [1, 2, 3, 4, 5, 6]
      const { result } = renderHook(() => useArray(initialArray))
      const elementIndex = 3
      act(() => {
        result.current.removeUseArray(elementIndex)
      })
      expect(result.current.array).not.toContain(initialArray[elementIndex])
    })

    it('should filter array elements - less than', () => {
      const initialArray = [1, 2, 3, 4, 5, 6]
      const { result } = renderHook(() => useArray(initialArray))
      const lessThanFilter = 5
      act(() => {
        result.current.filterUseArray((n) => n < lessThanFilter)
      })
      expect(result.current.array).toEqual(
        initialArray.filter((n) => n < lessThanFilter)
      )
    })

    describe('UseArray with strings', () => {
      it('should remove elements of array - elements that do not start with UpperCase', () => {
        const initialArray = ['A', 'B', 'apple', 'Map']
        const finalArray = ['A', 'B', 'Map']
        const { result } = renderHook(() => useArray(initialArray))
        act(() => {
          result.current.removeElementsThatDoNotStartWithUpperCase(initialArray)
        })
        expect(result.current.array).toEqual(finalArray)
      })
    })
  })
})
