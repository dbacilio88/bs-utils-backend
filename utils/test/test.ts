
import { BSResponseBody } from '../index'
import { ICreateException, ICreateResponse } from '../typings/interface/interfaces'


const data = (req: any, res: any, response: ICreateResponse, exception: ICreateException) => {

    
    BSResponseBody(req, res, response, exception)


}