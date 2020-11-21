import * as React from 'react'
import { render, screen } from '@testing-library/react-hooks'
import {Login} from '../auth/login.tsx'
import {rest} from 'msw'
import {setupServer} from 'msw/node'

describe('Login', () => {
    test('Log in header is showing', () => {
        render(<Login />);
        screen.getByText('Login').toBeInDocument();
        
    })
    
    test('Cancel button is in upper right corner', () => {
        render(<Login />);
        // screen.getByText(' ').toBeInDocument();
    
    })
    
    test('Typing username and password records in state', () => {
    
    })
    
    test('Login button submits to authentication', () => {
    
    })
    
    test('Present failed authenticaiton', () => {
    
    })
    
    test('User is logged in and jwt is stored in cookie', () => {})
    
    test('Input border is black then turns yellow on focus')
    
    test('Forogt password is present and onClick takes to new screen', () => {})
})


// Future Improvements
// test('Googe, apple, and facebook oAuth are available', () => {})
// test('Google AuthO returns scope and details of userName, firstName, lastName, birthDate, ', () => {})\
// Test fb and apple authO as well