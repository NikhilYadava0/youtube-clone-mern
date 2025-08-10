import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import userRoutes from './routes/user.routes.js';
import videoRoutes from './routes/video.routes.js';
import commentRoutes from './routes/comment.routes.js';
import channelRoutes from './routes/channel.routes.js';

const app = express();
const PORT = process.env.PORT || 5100;


app.use(cors());
app.use(express.json());

userRoutes(app);
videoRoutes(app);
commentRoutes(app);
channelRoutes(app);

app.get('/', (req, res) => {
  res.send('YouTube Clone API is running...');
});


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('database connected successfully!');
   
    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT}`);
    });
  })
  .catch(err => {
    console.log('database could not be connected: ', err);
  });
