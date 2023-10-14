const mongoose=require('mongoose')
const env=require('dotenv')

env.config()

mongoose.connect('mongodb+srv://satyam:satyam123@cluster0.pxfed.mongodb.net/stock_prices?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Db connected to database of the mongodb');
}).catch((error) => {
  console.log('Failed Connection of the db', error);
});
