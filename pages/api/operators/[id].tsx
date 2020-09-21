import { operators } from '../../../data'

export default function personHandler({ query: { id } }, res) {
    const filtered = operators.filter((p) => p.id === id)

    // User with id exists
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `Operator with id: ${id} not found.` })
    }
}
