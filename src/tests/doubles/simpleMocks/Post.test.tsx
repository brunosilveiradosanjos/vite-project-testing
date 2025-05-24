import { render, screen, within, act } from '@testing-library/react'
import { Post } from '@/components/doubles/simpleMocks/Post'

vi.mock('@components/doubles/simpleMocks/DataService', () => ({
  getCommentsForPost: () => {
    console.log('mocked getting comments')
    return [
      {
        content: 'This is awesome!',
      },
      {
        content: 'Nice car!',
      },
    ]
  },
}))
describe('Post tests with mocks', () => {
  it('should load initial comments', async () => {
    await act(async () => {
      render(<Post user="Bruno" content="First post" id="1" />)
    })
    const commentsContainer = screen.getByTestId('post-comment-container')
    const comments = within(commentsContainer).getAllByRole('paragraph')
    expect(comments).toHaveLength(2)
    expect(comments[0].textContent).toBe('This is awesome!')
    expect(comments[1].textContent).toBe('Nice car!')
  })
})
