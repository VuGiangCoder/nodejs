const Human = require('../models/Human')

class NewsController{
    index (req, res) {

        Human.find({},function(err,human){
            if(!err){
                res.json(human)
            }
            else{
                res.json({
                    'message':'error !!'
                })
            }
        })
    }
}
module.exports = new NewsController;