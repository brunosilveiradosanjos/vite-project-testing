import { render, screen, within, act } from '@testing-library/react'
import { Post } from '@/components/doubles/simpleMocks/Post'
import * as DataService from '@/components/doubles/simpleMocks/DataService'

describe('Post tests with mocks', () => {
  it('should load initial comments', async () => {
    const getCommentsForPostSpy = vi.spyOn(DataService, 'getCommentsForPost')
    getCommentsForPostSpy.mockResolvedValueOnce([
      { content: 'This is awesome!' },
      { content: 'Nice car!' },
    ])

    await act(async () => {
      render(<Post user="Bruno" content="First post" id="10" />)
    })
    const commentsContainer = screen.getByTestId('post-comment-container')
    const comments = within(commentsContainer).getAllByRole('paragraph')
    expect(comments).toHaveLength(2)
    expect(comments[0].textContent).toBe('This is awesome!')
    expect(comments[1].textContent).toBe('Nice car!')

    expect(getCommentsForPostSpy).toHaveBeenCalledTimes(1)
    expect(getCommentsForPostSpy).toHaveBeenCalledWith('10')
  })
})
