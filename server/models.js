const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose
  .connect('mongodb://localhost:27017/wipDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected');
  })
  .catch((e) => {
    console.error(e);
  });

const wipSchema = new Schema({
  wip_title: String,
  wip_card: [
    {
      img: String,
      date: String,
      seen_by_state: String,
      seen_by_user: String, 
      seen_by_date: String,
    }
  ]
});

const Wip = mongoose.model('wip', wipSchema);

module.exports =  Wip ;