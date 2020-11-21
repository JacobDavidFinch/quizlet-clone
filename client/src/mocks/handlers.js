import { rest } from 'msw'
import { login, signup } from "./jsonMocks"

export const handlers = [
  rest.get('/api/signup', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(signup));
  }),
  rest.post('api/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(login));
  }),
  rest.get('/api/logout', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(login));
  })
]

// Received from Garrett - What the data team is thinking for the table columns: Phone | First | Last | ExternalIdentifier (Truncated phone + Last) |Entry Date | Entry time | Service Date | Service Time | User Number (Servicing Person) | branch | Entry Channel | Reason Code | Action Code | Joint indicator | GUID | Device Type | OS | 

// I think these fields will have to come later - Service Date, Service Time, User Number (Servicing Person)Entry Channel, Reason Code, Action Code, Joint indicator, GUID, Device Type, OS 