import { Friend, User, UserPhotos } from './index.js';

// const john = new User({fullName: 'john', friends: [{userName: 'bob'}]}).save((err, thing) => {console.log('testing', thing)});


// User.find({fullName: 'john'}).exec()
// .then((doc)=>{
//     doc[0].friends.push({userName: 'joe'});
//     console.log('inner', doc)
//     doc[0].save()
// })
// .then((doc) => {console.log(doc)});

// User.find({friends: {$elemMatch: {userName:'joe'}}}).exec()
// .then((doc) => {
//     console.log(doc[0]);
// })

const test = User.aggregate([{$match : {fullName: 'john'}}])


test.exec().then((doc) => {
    console.log(doc[0].friends.forEach((thing, index) => {console.log('thing', thing, index)}))
})


