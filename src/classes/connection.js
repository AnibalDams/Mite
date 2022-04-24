import mongoose from 'mongoose';


class Connection {
  constructor(databaseUrl) {
    this.url = databaseUrl;
  }
  async connect() {
    try {
    		await mongoose.connect(this.url, {
      			useNewUrlParser: true,

        useUnifiedTopology: true,
      });
      console.log('> DB is connected :D');
    } catch (error) {
      console.error(error);
    }
  }
}


export default Connection;
