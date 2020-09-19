export default (req, res) => {
    res.status(200).json(
        [
            {"id": 1, "name":  "МТС"},
            {"id": 2, "name":  "Билайн"},
            {"id": 3, "name":  "Мегафон"}
        ])
}
