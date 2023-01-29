// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '../../utils/db'
import mongoDB from 'mongoose'
import { stallSchema } from '../../utils/db'

const uri = "mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { stall } = req.body

        try {

            const db = await connectToDatabase(uri)
            db.collection("stall").updateOne(
                { sstall: 0 },
                { $inc: { vote: 1 } }
             )

            res.status(200).json({ message: 'Successfully added message to the database' })
        } catch (error) {
            res.status(500).json({ error})
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' })
    }
}
