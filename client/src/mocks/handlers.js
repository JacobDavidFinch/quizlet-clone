import { rest } from 'msw'
import {branchLobbyList, allBranchLobbyList, login, insertMember, updateMember, removeMember} from "./jsonMocks"

export const handlers = [
  rest.post('api/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(login),
    )
  }),
  rest.get('/api/lobby-list/branch/:branch', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(branchLobbyList),
    )
  }),
  rest.get('/api/lobby-list/all-branches', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(allBranchLobbyList),
    )
  }),
  rest.post('api/check-in/member', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(insertMember)
    )
  }),
  rest.put('api/service-member/member', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(updateMember)
    )
  }),
  rest.delete('api/checkout/member', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(removeMember)
    )
  }),
 
]

// Received from Garrett - What the data team is thinking for the table columns: Phone | First | Last | ExternalIdentifier (Truncated phone + Last) |Entry Date | Entry time | Service Date | Service Time | User Number (Servicing Person) | branch | Entry Channel | Reason Code | Action Code | Joint indicator | GUID | Device Type | OS | 

// I think these fields will have to come later - Service Date, Service Time, User Number (Servicing Person)Entry Channel, Reason Code, Action Code, Joint indicator, GUID, Device Type, OS 