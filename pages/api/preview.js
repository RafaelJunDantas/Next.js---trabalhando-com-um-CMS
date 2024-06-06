export default async function Handler(req, res) {

    const previousPage = req.headers.referer;

    // se preview === true, desliga preview (preview = false)
    if(req.preview) {
        res.clearPreviewData();
        res.writeHead(307, { Location: previousPage });
        res.end();
    }

    if(req.query.password !== '123'){
        return res.status(401).json({ message: 'Invalid Password' });
    }

    // se preview === false, liga o preview (preview = true)
    res.setPreviewData({});
    res.writeHead(307, { Location: previousPage });
    res.end();
}  