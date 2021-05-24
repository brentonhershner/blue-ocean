const fakePhotos = [
  {
<<<<<<< HEAD:dummyData/fakePhotos.js
    ownerId: 2,
    ownerName: 'Scrub User',
    photos: [
      {
        photoId: 1,
        uploadDate: 'May 16 2021 18:11:26 GMT-0700',
        description: 'Go go power rangers!',
        tags: ['mmpr', 'coachella'],
        accessLevel: 2,
        url: '/blue-ocean/dummyData/photos/photo-1.jpg'
      },
      {
        photoId: 2,
        uploadDate: 'May 17 2021 18:11:26 GMT-0700',
        description: 'man\'s best friend',
        tags: ['bff4ever', 'coachella'],
        accessLevel: 0,
        url: '/blue-ocean/dummyData/photos/photo-2.jpeg'
      },
      {
        uploadDate: 'May 19 2021 18:11:26 GMT-0700',
        description: 'get on my level',
        tags: [],
        accessLevel: 2,
        url: '/blue-ocean/dummyData/photos/photo-3.jpg'
      },
      {
        uploadDate: 'May 19 2021 18:11:26 GMT-0700',
        description: 'you can never have too much TP',
        tags: ['t-p'],
        accessLevel: 2,
        url: '/blue-ocean/dummyData/photos/photo-7.jpg'
      }
    ]
  },
  {
    ownerId: 3,
    ownerName: 'Beta Tester',
    photos: [
      {
        photoId: 1,
        uploadDate: 'May 16 2021 18:11:26 GMT-0700',
        description: 'my little teapot!',
        tags: ['mmpr', 'coachella', 't-pots'],
        accessLevel: 2,
        url: '/blue-ocean/dummyData/photos/photo-4.jpg'
      },
      {
        photoId: 2,
        uploadDate: 'May 17 2021 18:11:26 GMT-0700',
        description: 't-pain is my bestie',
        tags: ['bff4ever', 'coachella', 't-pain'],
        accessLevel: 2,
        url: '/blue-ocean/dummyData/photos/photo-5.jpeg'
      },
      {
        uploadDate: 'May 19 2021 18:11:26 GMT-0700',
        description: 'about to tee-off',
        tags: ['t-time', 'mmpr'],
        accessLevel: 0,
        url: '/blue-ocean/dummyData/photos/photo-6.jpg'
      }
    ]
  }
];

export default fakePhotos;
<<<<<<< HEAD:src/components/dummyData/fakePhotos.js
=======
=======
    photoId: 1,
    ownerId: 1,
    ownerName: 'DanDruff',
    uploadDate: 'May 16 2021 18:11:26 GMT-0700',
    description: 'Go go power rangers!',
    tags: ['mmpr', 'coachella'],
    permission: 2,
    url: '/blue-ocean/dummyData/photos/photo-1.jpg',
  }, {
    photoId: 2,
    ownerId: 1,
    ownerName: 'DanDruff',
    uploadDate: 'May 17 2021 18:11:26 GMT-0700',
    description: 'man\'s best friend',
    tags: ['bff4ever', 'coachella'],
    permission: 0,
    url: '/blue-ocean/dummyData/photos/photo-2.jpeg',
  }, {
    photoId: 3,
    ownerId: 2,
    ownerName: 'NunyoBiz',
    uploadDate: 'May 19 2021 18:11:26 GMT-0700',
    description: 'get on my level',
    tags: [],
    permission: 2,
    url: '/blue-ocean/dummyData/photos/photo-3.jpg',
  }

]

export default fakePhotos;
>>>>>>> moved dummyData from root to src/components to solve relative import:src/components/dummyData/fakePhotos.js
>>>>>>> moved dummyData from root to src/components to solve relative import:dummyData/fakePhotos.js
