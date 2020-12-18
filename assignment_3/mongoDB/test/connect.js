const mongoose = require('mongoose');
const URL = 'mongodb+srv://novak:novak@nayahewah.llscf.mongodb.net/people?retryWrites=true&w=majority';



before((done) => {
    mongoose.connect(URL);
    mongoose.connection.once('open', () => {
        console.log('Connection to the Database successful');
        done();
    }).on('error', (error) => {
        console.log('Unable to connect', error)
    });
})
beforeEach( (done) => {
    mongoose.connection.collections.people.drop(()=> {
        done();

    });
})