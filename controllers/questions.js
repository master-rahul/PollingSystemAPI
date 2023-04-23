const Questions = require('../models/questions');
const Options = require('../models/options');

// to create questions
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

// to create options in question
module.exports.option_create = async function (request, response) {
    console.log(request.params.id);
    console.log(request.body);
    try {
        const quest = await Questions.findById(request.params.id);
        if (quest) {
            for(let text of request.body.text){
                const option = await Options.create({text : text});
                option.link_to_vote = "http://"+ request.headers.host +"/options/"+option._id+"/add_vote";
                option.question_id = request.params.id;
                option.save();
                quest.options.push(option);
            }
            quest.save();
            return response.status(200).json({ message: 'Options added successfully' });
        }
        return response.status(400).json({ message: 'Invalid Question Id' });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err.message });
    }
}

// to delete a question
module.exports.delete = async function (request, response) {
    try {
        const question = await Questions.findById(request.params.id).populate({ path: 'options' });
        if (question) {
            var del = true;
            console.log(question);
            for(option of question.options) if(option.votes > 0) del = false;
            if(del){
                await Options.deleteMany({question_id : request.params.id});
                await Questions.findByIdAndDelete(request.params.id);
                return response.status(200).json({ message: 'Question Deleted with associated options' });
            }
            return response.status(200).json({ message: 'Question Not Deleted due to remaining votes in Questions option' });
        }
        return response.status(400).json({ message: 'Invalid Question Id' });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err.message });
    }
    return response.json(200);
}

// to view a question
module.exports.view = async function (request, response) {
    try {
        const question = await Questions.findById(request.params.id).populate({path : 'options'});
        if(question){
            return response.status(200).json(question);
        }
        return response.status(400).json({ message: 'Invalid Question Id' });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err.message });
    }
}

// to view all questions
module.exports.view_all = async function (request, response) {
    try {
        const question = await Questions.find().populate({ path: 'options' });
        if (question.length >0) {
            return response.status(200).json(question);
        }
        return response.status(400).json({ message: 'No Question Found' });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err.message });
    }
}
