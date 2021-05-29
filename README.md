# toPics

A Photo-sharing app, for users to upload, organize and share photos with friends and the world!

---

## The Team

- [Jared Rogers](https://github.com/rogersjared)

- [Kyle Harrington](https://github.com/Relykon)

- [Elijiah Davis](https://github.com/GTOnizuka13)

- [Brenton Hershner](https://github.com/BrentonHershner)

- [Gabe Acevedo](https://github.com/gea2111)

- [Tony Ly](https://github.com/tonyjly)

- [Jun Park](https://github.com/junpark77)

- [Luke Henry](https://github.com/Luke82601)

- [Zubair Akbar](https://github.com/zubair-akbar)

# Features

## User Authentication

Login / Sign up
- Create an account or login to begin using toPics!
- Password recovery available

![screenshot of Login](/screenshots/login_logout.gif?raw=true)

## Navigation
- Navigate to any of these views:
    -  ***personal** collection, **friends** feed, **public** feed, **friends list***

![screenshot of Navigating](/screenshots/nav_bar_navigation_and_dark_mode.gif?raw=true)

## Photo Upload
- Tap the **+** icon at the bottom left to upload your images

![screenshot of Uploading](/screenshots/upload_images.gif?raw=true)

## Photo Management

Add/Edit Tags & Change Permissions
- Select one or multiple images to view a modal for editing, then apply changes
    - toggle the ***select*** slider to select multiple photos for editing

![screenshot of ...](/screenshots/editing_photos.gif?raw=true)

## Album Management
Create Album
- Select photo(s) to gain the option to create an album
- Set tags and permissions of all photos at once

![screenshot of Album Create](/screenshots/create_new_album.gif?raw=true)

Edit Album
- Select an album to begin editing
    - Add or remove tags
    - Change permissions
    - Update album name and description

![screenshot of Album Edit](/screenshots/edit_album.gif?raw=true)

## Search / Filter
Search Bar (live photo filtering)
- From personal photos or albums view:
    - Enter term to *filter by **tags***
- From friends or public feed views:
    - Enter term to *filter by **username** & **tags***

![screenshot of ...](/screenshots/friends.gif?raw=true)

# Development

### Built with

- [React (Hooks)](https://reactjs.org/)

- [React Router](https://reactrouter.com/)

- [Node.js](https://nodejs.org/en/)

- [Material-UI](https://material-ui.com/)

- [Axios](https://www.npmjs.com/package/axios)

- [Express](https://expressjs.com/)

- [MongoDB](https://www.mongodb.com/)

- [Mongoose](https://mongoosejs.com/)

From within the root directory:
`npm install`

From within the root directory:

To run webpack build

`npm run build`

To run server

`npm run server`

To launch the app

`npm start`

## Git Workflow
---
Do this once to set upstream. (not required but makes it easier)

    git remote add upstream https://github.com/Marineon/blue-ocean.git

Update your master branch

    git checkout main
    git pull --rebase upstream main

Start work on a feature

    git checkout -b feature-branch

If you've already created a branch, just switch to it

    git checkout feature-branch

Write code, commit, repeat

    git add .
    git commit -m "clever message"

Rebase before pull request. First update main.

    get checkout main
    git pull --rebase upstream

Incorporate the changes from main into your feature branch.

    git checkout feature-branch
    git pull --rebase upstream main

Fix any merge conflicts then do:

    git add .
    git commit
    git rebase --continue

Push the feature branch.

    git push origin feature-branch

If you get warnings about it being rejected, try:

    git push origin feature-branch -f

Make a pull request on GitHub

After the pull request is merged,

    git checkout main
    git pull --rebase upstream main
    git branch -d feature-branch

git branch -d feature-branch just cleans up branches. You don't have to do this if you want to keep adding features to that branch (not recommended) and if git doesn't permit you to delete the branch because it think's it hasn't been merged yet, you can force it with `-D` instead of `-d`.

---

## Prepopulate the database

Run the following command at the root directory to seed the database.

    node ./database/seed/seedMe.js

---

