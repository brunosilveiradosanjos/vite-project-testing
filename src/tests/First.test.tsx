import { First } from '../components/First'
import { render, screen } from '@testing-library/react'

describe('First', () => {
  it('should render First component', () => {
    render(<First />)
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })
})
