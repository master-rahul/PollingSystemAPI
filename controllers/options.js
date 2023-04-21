const Options = require('../models/options');
const Questions = require('../models/questions');
module.exports.delete = async function (request, response) {
    try {
        const option = await Options.findById(request.params.id);
        if (option) {
            await Questions.findByIdAndUpdate(option.question_id, {$pull :{options : request.params.id} });
            await Options.findByIdAndDelete(request.params.id);
            return response.status(200).json({ message: 'Option Delete Successfully' });
        }
        return response.status(400).json({ message: 'Invalid Option Id' });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err.message });
    }
}

module.exports.add_vote = async function (request, response) {
    try {
        const option = await Options.findById(request.params.id);
        if(option){
            option.votes += 1;
            option.save();
            return response.status(200).json({ message: 'Vote Added Successfully' });
        }
        return response.status(400).json({ message: 'Invalid Option Id' });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err.message });
    }
}

module.exports.remove_vote = async function (request, response) {
    try {
        const option = await Options.findById(request.params.id);
        if (option) {
            if(option.votes > 0) {
                option.votes-= 1;
                option.save();
                return response.status(200).json({ message: 'Vote Removed Successfully' });
            }
            return response.status(200).json({ message: 'Vote Already Zero' });
        }
        return response.status(400).json({ message: 'Invalid Option Id' });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err.message });
    }
}

module.exports.view = async function (request, response) {
    try {
        const option = await Options.findById(request.params.id);
        if (option) return response.status(200).json(option);
        return response.status(400).json({ message: 'Invalid Option Id' });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err.message });
    }
}

module.exports.view_all = async function (request, response) {
    try {
        const option = await Options.find();
        if (option.length > 0) return response.status(200).json(option);
        return response.status(400).json({ message: 'No Options Available' });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: err.message });
    }
}