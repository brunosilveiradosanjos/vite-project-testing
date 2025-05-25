import { Post } from '@/components/doubles/axios/Post'
import { render, screen, within, act } from '@testing-library/react'
import axios from 'axios'

describe('Post tests with mocks', () => {
  const userName = 'Bruno'
  const postContent = 'First post'
  const postId = '10'
  const someComments = [
    { content: 'This is awesome!' },
    { content: 'Nice car!' },
  ]

  it('should load received comments', async () => {
    const axiosGetSpy = vi.spyOn(axios, 'get')
    axiosGetSpy.mockResolvedValueOnce({
      data: someComments,
    })
    await act(async () => {
      render(<Post user={userName} content={postContent} id={postId} />)
    })
    const commentsContainer = screen.getByTestId('post-comment-container')
    const comments = within(commentsContainer).getAllByRole('paragraph')
    expect(comments).toHaveLength(2)
    expect(comments[0].textContent).toBe(someComments[0].content)
    expect(comments[1].textContent).toBe(someComments[1].content)
  })

  it('should call service to load comments', async () => {
    const axiosGetSpy = vi.spyOn(axios, 'get')
    axiosGetSpy.mockResolvedValueOnce({
      data: someComments,
    })

    await act(async () => {
      render(<Post user={userName} content={postContent} id={postId} />)
    })

    expect(axiosGetSpy).toHaveBeenCalledTimes(1)
    const axiosGetSpyCallArgs = axiosGetSpy.mock.calls
    console.log(axiosGetSpyCallArgs)
    const axiosGetStyCallUrl = axiosGetSpyCallArgs[0][0]
    expect(axiosGetStyCallUrl.endsWith(postId)).toBeTruthy()

    const axiosGetSpyCallId = axiosGetSpy.mock.calls[0][1]?.params.id
    expect(axiosGetSpyCallId).toBe(postId)
  })
  it('should throw network error', async () => {
    const axiosGetSpy = vi.spyOn(axios, 'get')
    axiosGetSpy.mockResolvedValueOnce({
      data: someComments,
    })

    await act(async () => {
      render(<Post user={userName} content={postContent} id={postId} />)
    })

    const errorLabel = screen.getByTestId('error-label')
    expect(errorLabel).toBeInTheDocument()
  })
})
