import {serverLogger} from "../logs/logConfigs";
import util from "util";

export function handleApiError({err, errMessage}, req, res, next): void {
  console.log(err)
  res.status(500).send(errMessage)
  serverLogger.error(errMessage)
  serverLogger.error(util.inspect(err))
  return
}