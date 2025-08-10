import mongoose from 'mongoose';
import 'dotenv/config';
import Video from './model/video.model.js';
import Channel from './model/channel.model.js';

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log(' MongoDB connected for seeding...'))
  .catch(err => {
    console.error(' MongoDB connection error:', err);
    process.exit(1);
  });

const seedData = async () => {
  try {
    await Video.deleteMany({});
    await Channel.deleteMany({});

    const channel = await Channel.create({
      channelName: "Tech with Loki",
      description: "Tech tutorials, coding tips, and developer news.",
      channelPic: "https://placehold.co/100x100.png?text=L",
      channelBanner: "https://placehold.co/600x150.png?text=Banner",
      owner: new mongoose.Types.ObjectId(),
      subscribers: 450
    });

    const videos = [
    
        {
          title: "React Crash Course 2024",
          videoLink: "Ke90Tje7VS0",
          thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
          description: "Learn React from scratch in this beginner-friendly crash course.",
          views: 15200,
          likes: 320,
          dislikes: 5,
          uploadDate: new Date("2024-09-20"),
          channel: channel._id,
          category: "Technical"
        },
        {
          title: "Node.js Full Tutorial",
          videoLink: "TlB_eWDSMt4",
          thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg",
          description: "Master Node.js backend development step-by-step.",
          views: 8400,
          likes: 190,
          dislikes: 2,
          uploadDate: new Date("2024-09-22"),
          channel: channel._id,
          category: "Technical"
        },
        {
          title: "JavaScript ES6+ Features",
          videoLink: "NCwa_xi0Uuc",
          thumbnail: "https://img.youtube.com/vi/NCwa_xi0Uuc/hqdefault.jpg",
          description: "All modern JavaScript features explained with examples.",
          views: 9500,
          likes: 240,
          dislikes: 1,
          uploadDate: new Date("2024-09-25"),
          channel: channel._id,
          category: "Technical"
        },
        {
          title: "Python for Beginners",
          videoLink: "rfscVS0vtbw",
          thumbnail: "https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg",
          description: "Learn Python from scratch in this full course.",
          views: 35000,
          likes: 620,
          dislikes: 10,
          uploadDate: new Date("2024-09-28"),
          channel: channel._id,
          category: "Technical"
        },
        
        {
          title: "The Conjuring - Full Movie",
          videoLink: "k10ETZ41q5o",
          thumbnail: "https://img.youtube.com/vi/k10ETZ41q5o/hqdefault.jpg",
          description: "A chilling supernatural horror film based on real events.",
          views: 985000,
          likes: 8540,
          dislikes: 320,
          uploadDate: new Date("2024-10-15"),
          channel: channel._id,
          category: "Horror"
        },
        {
          title: "Insidious - Official Trailer",
          videoLink: "zuZnRUcoWos",
          thumbnail: "https://img.youtube.com/vi/zuZnRUcoWos/hqdefault.jpg",
          description: "A family faces terrifying spirits in their new home.",
          views: 765000,
          likes: 6720,
          dislikes: 210,
          uploadDate: new Date("2024-08-12"),
          channel: channel._id,
          category: "Horror"
        },
        {
          title: "Annabelle - Full Movie",
          videoLink: "paFgQNPGlsg",
          thumbnail: "https://img.youtube.com/vi/paFgQNPGlsg/hqdefault.jpg",
          description: "The terrifying origin of the possessed doll, Annabelle.",
          views: 845000,
          likes: 7800,
          dislikes: 250,
          uploadDate: new Date("2024-09-30"),
          channel: channel._id,
          category: "Horror"
        },
        {
          title: "Hereditary - Creepiest Scenes",
          videoLink: "V6wWKNij_1M",
          thumbnail: "https://img.youtube.com/vi/V6wWKNij_1M/hqdefault.jpg",
          description: "Compilation of the most disturbing moments from Hereditary.",
          views: 432000,
          likes: 3950,
          dislikes: 150,
          uploadDate: new Date("2024-07-20"),
          channel: channel._id,
          category: "Horror"
        },
        {
          title: "The Nun - Horror Movie",
          videoLink: "pzD9zGcUNrw",
          thumbnail: "https://img.youtube.com/vi/pzD9zGcUNrw/hqdefault.jpg",
          description: "An unholy secret emerges from the depths of an abbey in Romania.",
          views: 698000,
          likes: 6120,
          dislikes: 190,
          uploadDate: new Date("2024-11-02"),
          channel: channel._id,
          category: "Horror"
        },
        
     
      
        {
          title: "This Sandwich is Mumbai's #1 Street Food | Vada Pav",
          videoLink: "m3nvefwqWW0",
          thumbnail: "https://img.youtube.com/vi/m3nvefwqWW0/hqdefault.jpg",
          description: "Bon Appétit visits Mumbai to try the city’s most popular street food: Vada Pav.",
          views: 1151529,
          likes: 26000,
          dislikes: 0,
          uploadDate: new Date("2025-05-14"),
          channel: channel._id,
          category: "Street Food"
        },
        {
          title: "$1 Indian Street Food (Mumbai Walking Tour)",
          videoLink: "xNRFrXT7o2E",
          thumbnail: "https://img.youtube.com/vi/xNRFrXT7o2E/hqdefault.jpg",
          description: "A walking tour through Mumbai’s street food scenes—expect spicy, vibrant, authentic!",
          views: 607949,
          likes: 4100,
          dislikes: 0,
          uploadDate: new Date("2024-09-13"),
          channel: channel._id,
          category: "Street Food"
        },
        {
          title: "Eating INDIAN STREET FOOD for 7 Days!! Ultimate India Food Tour",
          videoLink: "pyWZXA57VS8",
          thumbnail: "https://img.youtube.com/vi/pyWZXA57VS8/hqdefault.jpg",
          description: "Mark Wiens goes on a full Indian street food tour through Karnataka, exploring Mangalore to Bengaluru.",
          views: 6654951,
          likes: 38000,
          dislikes: 0,
          uploadDate: new Date("2024-05-18"),
          channel: channel._id,
          category: "Street Food"
        },
        {
          title: "Best HONG KONG Street Food!! 19 Meals",
          videoLink: "HWMga1ULQEU",
          thumbnail: "https://img.youtube.com/vi/HWMga1ULQEU/hqdefault.jpg",
          description: "Mark Wiens takes us on the ultimate Hong Kong street food tour with 19 must-try meals.",
          views: 4176272,
          likes: 31000,
          dislikes: 0,
          uploadDate: new Date("2024-07-20"),
          channel: channel._id,
          category: "Street Food"
        },
        {
          title: "I Tried The Best Street Food In America",
          videoLink: "X1S05ZClQj4",
          thumbnail: "https://img.youtube.com/vi/X1S05ZClQj4/hqdefault.jpg",
          description: "Joshua Weissman's take on some of the best street food in America.",
          views: 4397216,
          likes: 79000,
          dislikes: 0,
          uploadDate: new Date("2025-03-16"),
          channel: channel._id,
          category: "Street Food"
        },
       
       
  
       
       
        {
          title: "GTA 6 Official Trailer Breakdown",
          videoLink: "QdBZY2fkU-0",
          thumbnail: "https://img.youtube.com/vi/QdBZY2fkU-0/hqdefault.jpg",
          description: "Analyzing the GTA 6 official trailer in detail.",
          views: 21000,
          likes: 650,
          dislikes: 5,
          uploadDate: new Date("2024-10-04"),
          channel: channel._id,
          category: "Gaming"
        },
      
       
        {
          title: "Daily Vlog #1 - A Day in My Life",
          videoLink: "scWj1BMRHUA",
          thumbnail: "https://img.youtube.com/vi/scWj1BMRHUA/hqdefault.jpg",
          description: "Join me as I take you through my day.",
          views: 4700,
          likes: 140,
          dislikes: 2,
          uploadDate: new Date("2024-10-02"),
          channel: channel._id,
          category: "Vlogs"
        },
   
    
      
       
        {
          title: "Lo-fi Beats for Coding",
          videoLink: "jfKfPfyJRdk",
          thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",
          description: "Relax and focus with this lo-fi coding playlist.",
          views: 9200,
          likes: 310,
          dislikes: 1,
          uploadDate: new Date("2024-10-01"),
          channel: channel._id,
          category: "Music"
        },
        {
          title: "Piano Chill Mix",
          videoLink: "f02mOEt11OQ",
          thumbnail: "https://img.youtube.com/vi/f02mOEt11OQ/hqdefault.jpg",
          description: "Relaxing piano music for studying or sleeping.",
          views: 7800,
          likes: 250,
          dislikes: 0,
          uploadDate: new Date("2024-10-02"),
          channel: channel._id,
          category: "Music"
        },
        {
          title: "Jazz Night Playlist",
          videoLink: "HMnrl0tmd3k",
          thumbnail: "https://img.youtube.com/vi/HMnrl0tmd3k/hqdefault.jpg",
          description: "Smooth jazz music for a chill evening.",
          views: 6900,
          likes: 230,
          dislikes: 1,
          uploadDate: new Date("2024-10-03"),
          channel: channel._id,
          category: "Music"
        },
        {
          title: "Epic Soundtrack Mix",
          videoLink: "DSGyEsJ17cI",
          thumbnail: "https://img.youtube.com/vi/DSGyEsJ17cI/hqdefault.jpg",
          description: "Epic orchestral soundtracks for motivation.",
          views: 8500,
          likes: 280,
          dislikes: 1,
          uploadDate: new Date("2024-10-04"),
          channel: channel._id,
          category: "Music"
        },
        {
          title: "Guitar Solo Compilation",
          videoLink: "zAGVQLHvwOY",
          thumbnail: "https://img.youtube.com/vi/zAGVQLHvwOY/hqdefault.jpg",
          description: "Best guitar solos from iconic songs.",
          views: 7200,
          likes: 260,
          dislikes: 1,
          uploadDate: new Date("2024-10-05"),
          channel: channel._id,
          category: "Music"
        },
      
      
        {
          title: "Learn HTML in 1 Hour",
          videoLink: "pQN-pnXPaVg",
          thumbnail: "https://img.youtube.com/vi/pQN-pnXPaVg/hqdefault.jpg",
          description: "HTML tutorial for beginners in just 1 hour.",
          views: 15800,
          likes: 400,
          dislikes: 2,
          uploadDate: new Date("2024-10-01"),
          channel: channel._id,
          category: "Education"
        },
      
        {
          title: "Physics Crash Course",
          videoLink: "ZihywtixUYo",
          thumbnail: "https://img.youtube.com/vi/ZihywtixUYo/hqdefault.jpg",
          description: "An introduction to physics concepts.",
          views: 10400,
          likes: 290,
          dislikes: 1,
          uploadDate: new Date("2024-10-03"),
          channel: channel._id,
          category: "Education"
        },
        {
          title: "History of World War 2",
          videoLink: "HUqy-OQvVtI",
          thumbnail: "https://img.youtube.com/vi/HUqy-OQvVtI/hqdefault.jpg",
          description: "A short documentary on World War 2.",
          views: 13400,
          likes: 350,
          dislikes: 1,
          uploadDate: new Date("2024-10-04"),
          channel: channel._id,
          category: "Education"
        },
        {
          title: "Chemistry Basics",
          videoLink: "yQP4UJhNn0I",
          thumbnail: "https://img.youtube.com/vi/yQP4UJhNn0I/hqdefault.jpg",
          description: "Learn the fundamentals of chemistry.",
          views: 8700,
          likes: 240,
          dislikes: 0,
          uploadDate: new Date("2024-10-05"),
          channel: channel._id,
          category: "Education"
        },
     
      
      {
        title: "Lo-fi Beats for Coding",
        videoLink: "jfKfPfyJRdk",
        thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",
        description: "Relax and focus with this lo-fi coding playlist.",
        views: 9200,
        likes: 310,
        dislikes: 1,
        uploadDate: new Date("2024-10-01"),
        channel: channel._id,
        category: "Music"
      },
      {
        title: "Daily Vlog #1 - A Day in My Life",
        videoLink: "scWj1BMRHUA",
        thumbnail: "https://img.youtube.com/vi/scWj1BMRHUA/hqdefault.jpg",
        description: "Join me as I take you through my day.",
        views: 4700,
        likes: 140,
        dislikes: 2,
        uploadDate: new Date("2024-10-02"),
        channel: channel._id,
        category: "Vlogs"
      }
    ];

    await Video.insertMany(videos);

    console.log(' Dummy data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(' Error seeding data:', err);
    process.exit(1);
  }
};

seedData();
