import React from 'react'
import ContactForm from './ContactForm'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

test('Contact form renders without crashing', () => {
    render(<ContactForm />)
})

test('for, submits contact form without crashing', async() => {
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

    const newName = screen.findByText(/Joe/i)
    const newLastName = screen.findByText(/Ruiz/i)
    const newEmail = screen.findByText(/jruiz@hey.com/i)
    const newMessage = screen.findByText(/hello world/i)
   
    expect(newName).toMatchObject(/Joe/i)
    expect(newLastName).toMatchObject(/Ruiz/i)
    expect(newEmail).toMatchObject(/jruiz@hey.com/i)
    expect(newMessage).toMatchObject(/hello world/i)
})

test('placeholders are in form', () => {
    render(<ContactForm/>)

    const firstNamePlaceholder = screen.getByPlaceholderText(/edd/i)
    const lastNamePlaceholder = screen.getByPlaceholderText(/burke/i)
    const emailPlaceholder = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)

    expect(firstNamePlaceholder).toBeInTheDocument()
    expect(lastNamePlaceholder).toBeInTheDocument()
    expect(emailPlaceholder).toBeInTheDocument()
})

// //Is there a way yo make it dynamic so any number equal to or less than 3 is correct?
// test('form first name length is max 3 characters',() => {
//     render(<ContactForm />)

//     const firstNameInput = screen.getByLabelText(/First Name*/i);

//     const firstName = screen.findByText(/Joe/i)

//     expect(firstNameInput).toHaveLength(3)
// })

