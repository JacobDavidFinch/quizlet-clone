import * as React from 'react'
import {renderHook, render, screen, act, waitForElementToBeRemoved} from '@testing-library/react-hooks'
import useCounter from '../../components/use-counter'
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// test('Application blocks the home screen if jwt is missing' () => {

// })

// test('Register creates user and retrieves JWT to store into cookie', () => {

// })

// test('Login stores webtoken with expiration', () => {

// })

// test('exposes the count and increment/decrement functions', () => {
//   const {result} = renderHook(useCounter)
//   expect(result.current.count).toBe(0)
//   act(() => result.current.increment())
//   expect(result.current.count).toBe(1)
//   act(() => result.current.decrement())
//   expect(result.current.count).toBe(0)
// })

// test('allows customization of the initial count', () => {
//   const {result} = renderHook(useCounter, {initialProps: {initialCount: 3}})
//   expect(result.current.count).toBe(3)
// })

// test('allows customization of the step', () => {
//   const {result} = renderHook(useCounter, {initialProps: {step: 2}})
//   expect(result.current.count).toBe(0)
//   act(() => result.current.increment())
//   expect(result.current.count).toBe(2)
//   act(() => result.current.decrement())
//   expect(result.current.count).toBe(0)
// })

// test('the step can be changed', () => {
//   const {result, rerender} = renderHook(useCounter, {
//     initialProps: {step: 3},
//   })
//   expect(result.current.count).toBe(0)
//   act(() => result.current.increment())
//   expect(result.current.count).toBe(3)
//   rerender({step: 2})
//   act(() => result.current.decrement())
//   expect(result.current.count).toBe(1)
// })

// test('renders with the light styles for the light theme', () => {
//   render(<EasyButton>Easy</EasyButton>, {theme: 'light'})
//   const button = screen.getByRole('button', {name: /easy/i})
//   expect(button).toHaveStyle(`
//     background-color: white;
//     color: black;
//   `)
// })

// test('renders with the dark styles for the dark theme', () => {
//   render(<EasyButton>Easy</EasyButton>, {theme: 'dark'})
//   const button = screen.getByRole('button', {name: /easy/i})
//   expect(button).toHaveStyle(`
//     background-color: black;
//     color: white;
//   `)
// })