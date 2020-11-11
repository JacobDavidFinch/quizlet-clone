import { muleApi } from '../utils/api';

import axios from 'axios'
import { Lobby, Member } from '../utils/types'

export async function getLobby(req, res, next){
  const {branch} = req.params;
  
  const [err, lobby] = await muleApi(`6120/api/branch/${branch}`).then(res => {
    return [null, res.data.resultSet1];
  }).catch(err => {
    return [err, null];
  })
  
  if(err) {
    next({err, errMessage: `Error collecting Branch Lobby List: 6120/api/branch/${branch}`});
  } else {
    return res.send({lobby});
  }
}

export async function getTicket(req, res, next){
  const {ticket} = req.params;
  
  const [err, member] = await muleApi(`6120/api/ticket/${ticket}`).then(res => {
    return [null, res.data.resultSet1];
  }).catch(err => {
    return [err, null];
  })

    
  if(err) {
    next({err, errMessage: `Error collecting member info: 6120/api/ticket/${ticket}`});
  } else {
    return res.send({member});
  }
}

export async function getAllLobbies(req, res, next){
  return res.send('No Available')
}
