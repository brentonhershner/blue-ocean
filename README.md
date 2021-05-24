



# blue-ocean

Git Workflow
------------


## do this once to set upstream
git remote add upstream https://github.com/Marineon/blue-ocean.git

## update your master branch
git checkout main
git pull --rebase upstream main
git push origin master

## start work on a feature
git checkout -b feature-branch

## write code, commit, repeat
git add .
git commit 

## rebase before pull request
git pull --rebase upstream main

## push to a feature branch on YOUR fork
git push origin feature-branch

## make a pull request on GitHub

## if pull request is rejected
## fix bugs, commit
git add .
git commit
git pull --rebase upstream main
git push origin feature-branch

## make a pull request on GitHub

## if pull request is accepted
git checkout main
git pull --rebase upstream main
git branch -d feature-branch


---------------------------------------
---------------------------------------


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
