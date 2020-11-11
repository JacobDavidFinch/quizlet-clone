import { rest } from 'msw'

export const handlers = [
  rest.get('/api/lobby-list/branch/:branch', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json([{      
        phoneNum: '7073641211',
        firstName: 'John',
        lastName: 'Smith',
        ticket: '1211SMIT',
        entryDate: '11/09/2020',
        entryTime: '10:06 AM',
        serviceDate: '11/09/2020',
        serviceTime: '10:11 AM',
        branch: 'Petaluma'
      }, {      
        phoneNum: '7073641234',
        firstName: 'Walter',
        lastName: 'White',
        ticket: '1234WHIT',
        entryDate: '11/09/2020',
        entryTime: '10:07 AM',
        serviceDate: '11/09/2020',
        serviceTime: '10:11 AM',
        branch: 'Petaluma'
      }]),
    )
  }),
  rest.get('/api/lobby-list/ticket/:ticket', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({      
        phoneNum: '7073641211',
        firstName: 'John',
        lastName: 'Smith',
        ticket: '1211SMIT',
        entryDate: '11/09/2020',
        entryTime: '10:06 AM',
        serviceDate: '11/09/2020',
        serviceTime: '10:11 AM',
        branch: 'Petaluma'
      }),
    )
  })
]

// Received from Garrett - What the data team is thinking for the table columns: Phone | First | Last | ExternalIdentifier (Truncated phone + Last) |Entry Date | Entry time | Service Date | Service Time | User Number (Servicing Person) | branch | Entry Channel | Reason Code | Action Code | Joint indicator | GUID | Device Type | OS | 

// I think these fields will have to come later - Service Date, Service Time, User Number (Servicing Person)Entry Channel, Reason Code, Action Code, Joint indicator, GUID, Device Type, OS 