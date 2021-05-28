const users = [
    /*adminUser*/
  {
    userId: 1,
    fullName: 'Boss Man',
    email: 'boss.man@admin.com',
    password: "ImDaBoss69",
    userLevel: 3,
    friends: [
      {
      userId: 2,
      userName: 'Scrub User'
      },
      {
        userId: 3,
        userName: 'Beta Tester'
      }
    ],
    pending: [],
    requested: []
  },
    /* general users */
  {
    userId: 2,
    fullName: 'Scrub User',
    email: 'scrub.adubdub@rubberduck.com',
    password: "PW$420blazers",
    userLevel: 1,
    friends: [
      {
        userId: 3,
        userName: 'Beta Tester'
      }
    ],
    pending: [],
    requested: []
  },
  {
    userId: 3,
    fullName: 'Beta Tester',
    email: 'test.icicles@testes.com',
    password: "73$7@CUL4R",
    userLevel: 1,
    friends: [
      {
        userId: 2,
        userName: 'Scrub User'
        }
    ],
    pending: [],
    requested: []
  }
];

export default users;