import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";
import ContactForm from './components/ContactForm'
import {act} from 'react-dom/test-utils'

test("renders App without crashing", () => {
  render(<App />);
});

test('renders ContactForm without crashing', () => {
  render(<ContactForm/>)
});

test('user can fill out and submit form', async () => {
 const {queryByText} = render(<App />);
  // render(<ContactForm/>)
  const firstNameInput = screen.getByTestId('firstName')
  const lastNameInput = screen.getByTestId('lastName')
  const emailInput  = screen.getByTestId('email')
  const messageInput  = screen.getByTestId('message')

await act(async() => {
  userEvent.type(firstNameInput, "Juan");
  userEvent.type(lastNameInput, "Ruiz");
  userEvent.type(emailInput, "jruiz@hey.com");
  userEvent.type(messageInput, "hello world");
})
    expect(firstNameInput.value).toBe('Juan')
    expect(lastNameInput.value).toBe('Ruiz')
    expect(emailInput.value).toBe('jruiz@hey.com')
    expect(messageInput.value).toBe('hello world')
});

 