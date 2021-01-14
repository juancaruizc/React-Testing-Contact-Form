import React from 'react'
import ContactForm from './ContactForm'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

test('renders and submits contact form without crashing', async() => {
    render(<ContactForm />)

    const firstNameInput = screen.getByLabelText(/First Name*/i);
    const lastNameInput = screen.getByLabelText(/Last Name*/i);
    const emailInput = screen.getByLabelText(/Email*/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const button = screen.getByRole('button')

    act(() => {
        userEvent.type(firstNameInput, 'Juan')
        userEvent.type(lastNameInput, 'Ruiz')
        userEvent.type(emailInput, 'jruiz@hey.com')
        userEvent.type(messageInput, 'hello world')
    
        userEvent.click(button)
    })

    const newName = screen.findByText(/Juan/i)
    const newLastName = screen.findByText(/Ruiz/i)
    const newEmail = screen.findByText(/jruiz@hey.com/i)
    const newMessage = screen.findByText(/hello world/i)
   
    expect(newName).toMatchObject(/Juan/i)
    expect(newLastName).toMatchObject(/Ruiz/i)
    expect(newEmail).toMatchObject(/jruiz@hey.com/i)
    expect(newMessage).toMatchObject(/hello world/i)
})

// test('placeholders are in form', () => {

// })

