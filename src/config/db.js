const mongoose = require('mongoose');

//mongodb connection
const  connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://eslam:NRB8BgjaKpnDwBYu@cluster0.rtzq5.mongodb.net/franchise?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
        console.log('MongoDB Connected....');
    }
    catch (err){
        process.exit(1)
    }
}
module.exports = connectDB
