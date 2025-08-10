import express from 'express';
import {
  createChannel,
  getChannelById,
  getChannelByUser,
  updateChannel,
  deleteChannel
} from '../controller/channel.controller.js'; 
import { protect } from '../middleware/authMiddleware.js'; 

function channelRoutes(app) {
    app.post('/api/channel', protect, createChannel); 
    app.get('/api/channel/:id', getChannelById);       
    app.get('/api/userChannel/:userId', getChannelByUser);
    app.put('/api/updateChannel/:id', protect, updateChannel); 
    app.delete('/api/deleteChannel/:id', protect, deleteChannel); 
}

export default channelRoutes; 
