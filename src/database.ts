import mongoose from 'mongoose';


export default async function connect(): Promise<any> {
  try {
    await mongoose.connect('mongodb://192.168.0.174:27027/users', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('>>>>> Database connected <<<<')
  } catch (error) {
    console.log('Errror --> ', error)
  }
}
