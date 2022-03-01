import mongoose from 'mongoose';
const {connect} = mongoose;
async function _connect(mongoUri) {
  try {
    await connect(mongoUri, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });
    console.log('> DB is connected :D');
  } catch (error) {
    console.error(error);
  }
}

export default _connect;
