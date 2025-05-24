import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PostWithComment } from '../components/PostWithComments'

describe('Post witch comments test suite', () => {
  describe('User interaction', () => {
    const userName = 'John Doe'
    const content = 'This is a test post'
    beforeEach(() => {
      render(<PostWithComment user={userName} content={content} />)
    })

    it('should type a comment', async () => {
      const user = userEvent.setup()
      const commentInput = screen.getByTestId('comment-input')
      const commentContent = 'This is a test comment'

      await user.type(commentInput, commentContent)
      //   screen.debug()
      expect(commentInput).toHaveValue(commentContent)
    })

    it('should clear comment area on click', async () => {
      const user = userEvent.setup()
      const commentInput = screen.getByTestId('comment-input')
      const commentContent = 'This is a test comment'

      await user.type(commentInput, commentContent)

      const commentButton = screen.getByRole('button', { name: /comment/i })
      await user.click(commentButton)

      expect(commentInput).toBeEmptyDOMElement()
    })

    it('should add a comment on screen', async () => {
      const user = userEvent.setup()
      const commentInput = screen.getByTestId('comment-input')
      const commentContent = 'This is a test comment'

      await user.type(commentInput, commentContent)

      const commentButton = screen.getByRole('button', { name: /comment/i })
      await user.click(commentButton)

      const commentContainer = screen.getByTestId('post-comment-container')
      const comments = within(commentContainer).getAllByRole('paragraph') // getAllByRole returns an array of elements
      expect(comments).toHaveLength(1)
      expect(comments[0]).toHaveTextContent(commentContent)
    })

    it('should add multiple comments to on screen', async () => {
      const comment1 = 'This is a test comment 1'
      const comment2 = 'This is a test comment 2'

      const commentInput = screen.getByTestId('comment-input')
      const commentButton = screen.getByRole('button', { name: /comment/i })

      await userEvent.type(commentInput, comment1)
      await userEvent.click(commentButton)

      await userEvent.type(commentInput, comment2)
      await userEvent.click(commentButton)

      const commentContainer = screen.getByTestId('post-comment-container')
      const comments = within(commentContainer).getAllByRole('paragraph') // getAllByRole returns an array of elements
      expect(comments).toHaveLength(2)
      expect(comments[0]).toHaveTextContent(comment1)
      expect(comments[1]).toHaveTextContent(comment2)
    })
  })
})
