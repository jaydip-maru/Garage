warpAsync = (fn) => {
    return (req, res, next) => {
        try{fn(req,res, next)}
        catch{(err)=> next(err)};
    }
}

module.exports = warpAsync;