const Questions = require('../models/questions');
const Options = require('../models/options');
module.exports.create =  async function (request, response) {
    console.log(request.body);
    try {
        for (let title of request.body.title) await Questions.create({ title : title });
        response.status(200).json({ message: 'Questions added successfully' });
    } catch (err) {
        console.error(err);
        response.status(500).json({ error: err.message });
    }
}

module.exports.option_create = async function (request, response) {
    console.log(request.params.id);
    console.log(request.body);
    
//     if(quest) {
//         return response.json(200);
//     }
//    return response.json(300); 
   
    try {
        const quest = await Questions.findById(request.params.id);
        if (quest) {
            for(let text of request.body.text){
                const option = Options.create({text : text});
            }
            return response.json(200);
        }
        return response.json(300); 
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err.message });
    }
}

module.exports.delete = function (request, response) {
    return response.json(200);
}

module.exports.view = function (request, response) {
    return response.json(200);
}
