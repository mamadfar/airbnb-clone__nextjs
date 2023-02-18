// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {ICardData} from "@/model/data.model";

const DATA: ReadonlyArray<ICardData> = [
    {
        "img": "https://links.papareact.com/2io",
        "title": "Outdoor getaways"
    },
    {
        "img": "https://links.papareact.com/q7j",
        "title": "Unique stays"
    },
    {
        "img": "https://links.papareact.com/s03",
        "title": "Entire homes"
    },
    {
        "img": "https://links.papareact.com/8ix",
        "title": "Pet allowed"
    }
]

export default function cards(
    req: NextApiRequest,
    res: NextApiResponse<ReadonlyArray<ICardData>>
) {
    res.status(200).json(DATA)
}
