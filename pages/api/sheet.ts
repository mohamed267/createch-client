
import {google} from "googleapis"

import { NextApiHandler, NextApiRequest , NextApiResponse } from "next";



declare type DataType  = {
    name : string
}



async function handler(
    req : NextApiRequest
    , 
    res : NextApiResponse<any>
){
    if (req.method === 'POST') {

        const auth = new google.auth.GoogleAuth({
            credentials: {
              client_email: process.env.CLIENT_EMAIL,
              client_id: process.env.CLIENT_ID,
              private_key: process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY.replace(/\\n/g, '\n') : "",
            },
            scopes: [
              'https://www.googleapis.com/auth/drive',
              'https://www.googleapis.com/auth/drive.file',
              'https://www.googleapis.com/auth/spreadsheets',
            ],
          });


        const sheets = google.sheets({
            auth,
            version: 'v4',
        });

        let { name , number , email , description} = req.body

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREAD_SHEET_ID,
            range: 'clients',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [[name, email ,number , description ]],
            },
        });


        res.status(200).json(response)
      

    }
  
}

export default handler;
