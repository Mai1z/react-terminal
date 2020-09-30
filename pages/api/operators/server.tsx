import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const formData = req.body

    const errors = await validateData(formData)
    if (errors.length > 0) {
        res.status(400)
        res.json({ errors })
        return
    }

    res.status(201)
    res.json({ message: "Success!" })
};

async function validateData(formData): Promise<Array<string>> {
    const errors = []

    function getRandomInt() {
        return Math.floor(Math.random() * 10) + 1
    }

    if (getRandomInt() > 5) {
        errors.push("Oops, error! Please try again!")
    }

    return errors
}
