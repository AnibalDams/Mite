import mongoose from 'mongoose';
const {connect} = mongoose;

/**
 * Se conecta a la base de datos MongoDB (local o cloud)
 * @param {string} mongoUri Url de la base de datos MongoDB
 * @return {Promise<void>}
 */
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
