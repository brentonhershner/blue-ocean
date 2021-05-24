



# blue-ocean

Git Workflow
------------


<<<<<<< HEAD
Do this once to set upstream. (not required but makes it easier)

    git remote add upstream https://github.com/Marineon/blue-ocean.git

Update your master branch

    git checkout main
    git pull --rebase upstream main

Start work on a feature

    git checkout -b feature-branch
=======
## do this once to set upstream
`git remote add upstream https://github.com/Marineon/blue-ocean.git`

## update your master branch
`git checkout main`
`git pull --rebase upstream main`
`git push origin master`

## start work on a feature
`git checkout -b feature-branch`

## write code, commit, repeat
`git add .`
`git commit `

## rebase before pull request
`git pull --rebase upstream main`

## push to a feature branch on YOUR fork
`git push origin feature-branch`
>>>>>>> add code style

If you've already created a branch, just switch to it

<<<<<<< HEAD
    git checkout feature-branch
=======
## if pull request is rejected
## fix bugs, commit
`git add .`
`git commit`
`git pull --rebase upstream main`
`git push origin feature-branch`
>>>>>>> add code style

Write code, commit, repeat

<<<<<<< HEAD
    git add .
    git commit -m "clever message"
=======
## if pull request is accepted
`git checkout main`
`git pull --rebase upstream main`
`git branch -d feature-branch`
>>>>>>> add code style

Rebase before pull request. First update main.

    git pull --rebase upstream main

Push to a feature branch on YOUR fork.

    git push origin feature-branch

Make a pull request on GitHub

If pull request is rejected, update history and fix conflicts. Commonly this is an issue during rebasing.

    git checkout main     //(this may not be necessary)
    git pull --rebase upstream
    git checkout feature-branch
    git pull --rebase upstream main

Fix any merge conflicts then do:

    git add .
    git commit
    git rebase --continue
    git push origin feature-branch

If the above doesn't work try:

    git push origin feature-branch -f

Update the pull request on GitHub

If pull request is accepted

    git checkout main
    git pull --rebase upstream main
    git branch -d feature-branch

git branch -d feature-branch just cleans up branches. You don't have to do this if you want to keep adding features to that branch (not recommended) and if git doesn't permit you to delete the branch because it think's it hasn't been merged yet, you can force it with `-D` instead of `-d`.

---

## Team Members

- Jared Rogers

- Kyle Harrington

- Elijiah Davis

- Brenton Hershner

- Gabe Acevedo

- Tony Ly

- Jun Park

- Luke Henry

- Zubair Akbar
