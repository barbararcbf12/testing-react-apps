// form testing
// http://localhost:3000/login

import * as React from 'react'
import {getByLabelText, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  // let submittedData = {}
  // const handleSubmit = data => (submittedData = data)
  const handleSubmit = jest.fn()
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  //
  render(<Login onSubmit={handleSubmit} />)
  // 🐨 get the username and password fields via `getByLabelText`
  let username = screen.getByLabelText('Username')
  let password = screen.getByLabelText('Password')
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  //
  userEvent.type(username, 'barbara')
  userEvent.type(password, '123456')
  // 🐨 click on the button with the text "Submit"
  //
  userEvent.click(screen.getByRole('button', {name: 'Submit'}))

  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
  // expect(submittedData).toEqual({username: 'barbara', password: '123456'})
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'barbara',
    password: '123456',
  })
})

/*
eslint
  no-unused-vars: "off",
*/
