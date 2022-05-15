const informationProducts = (req, res)=> {
    res.status(200).json({ok: true,msg: 'get Information successfully'})
}

module.exports = {informationProducts};