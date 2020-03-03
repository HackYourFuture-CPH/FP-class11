
## 💻 Working with GIT <a name="git"></a>

You will be working directly on the main repo and making Pull Request on the Develop Branch, 
NEVER on the Master branch. PR on the Master Branch *will not be merged*, they will be closed.

Working with git is a HUGE part of the final project. This is how you should be
working with git in the final project:

This repo has two branches:

- `master` - Used for deployment. This branch should be as clean as is possible.
  NEVER directly commit to this branch!
- `develop` - A branch where we do all development. That means that all feature
  branches should be merged into this branch. Very important!

Lets get started with our first feature. Lets say we should build a cookies
popup:

1. Clone this repo to get a local copy of this repository.
2. BEFORE WE WRITE ONE SINGLE LINE OF CODE, create the feature branch where we
   will do all our cookies popup development. First make sure that you are
   branching out from develop: `git checkout develop`, then create a new branch:
   `git checkout -b feature/cookies-popup`.
   - If you fail to checkout develop and branch out from master or some other
     branch, you will see strange changes pop up when you try to make your pull
     request and merge it into develop. This means you have to "move" all of
     your changes from this branch to a "fresh" one that has been branched off
     develop, which is a pain. _This is probably the most common beginners
     mistake when using git!_
   - The `feature/` prefix is not mandatory for this project, but is used by
     many comapnies and is a good habit to indicate that this branch will add a
     new "feature" containing a cookie popup.
   - In contrast you can prefix a branch with `hotfix/` to indicate that you are
     fixing an urgent bug that may need to bypass some of the regular testing
     procedures in order to get onto production quickly (i.e. if production is
     broken and you are fixing it at 4am). In many companies the `hotfix/`
     prefix will actually automatically bypass some of the QA steps. Since we do
     not have our product in production while developing we will not need to use
     hotfixes, though.
3. Now we write all our code in the `cookies-popup` branch.
4. Add the files you changed to your git staging area so they are ready to be
   committed. First do `git status` to make sure that you only changed the files
   you intended to. If only the files that you intended to commit are listed,
   feel free to use `git add -A` to add all changed files to the staging area.
   If you have some temporary file changes that you do not wish to include in
   the current commit, add the files individually with
   `git add [path-to-file-you-wish-to-commit]`(repeat for each file).

   - When adding to git you are basically "composing your commits". Think about
     keeping commits fairly small, logically grouped and try to make sure that
     every commit is in a "working state" (i.e. your new feature is obviously
     not going to work before you have all the commits ready for that feature,
     but if you are breaking existing functionality along the way - for example
     by renaming a function - make sure to clean up the mess you made withing
     the same commit - for example by refactoring all of the calls to that
     function you renamed). If all commits are "working state" that can help
     immensely in the case that we deploy a breaking change to production and
     need to find a suitable commit to roll back to.

5. When you have decided what to commit and added it to the staging area we are
   finally ready to commit. Think about a good commit message and type
   `git commit -m "[your-commit-message]"`.

   - The commit message should communicate how you have changed the codebase in
     a concise manner.
   - The first line in your commit message should be kept under 50 characters.
     This makes it a lot easier to skim the commit log.
   - If you need to add a longer message, make a 50 character headline, skip a
     line and then make sure that each consecutive line is no longer than 72
     characters. This keeps everything neat and readable when people are reading
     the commit log, no matter if it is in the terminal, on github or somewhere
     else.
   - Avoid unneccessary fill words (at least in the title where space is
     precious) and try to write in an imperative mood (i.e. as if you were
     giving commands). You are not writing a novel.
   - Humor and cheerful comments are allowed but should not be taking away from
     communicating what the contents of your commit is.

6. After committing ensure that your working copy is clean (i.e. all changes
   have been committed) or that only the files that you chose to exclude in step
   4 are left uncommitted: `git status`. If you really want to be sure that your
   commit was succesful, you can review the git log with `git log` (press `q` to
   exit).
7. Push your changes to a branch on github with `git push`.

   - The first time git will complain that you have not set the upstream
     "origin". I usually just run `git push` and copy the suggestion after the
     error message, to make sure that I don't mistype the branch name on remote.
     But you can do `git push --set-upstream origin feature/cookies-popup` if
     you're really into typing ;)

   - If you push your changes regularly - even when you are not ready to do a
     pull request - it makes life easier for everyone. Other students can jump
     on your branch to see what you are doing in order to understand how to
     design their features so it all works together and mentors will have an
     easier time helping you out if they can check out your code and perform
     debugging on their own machine.

8. Repeat step 3-6 for each commit until your feature is done.
9. Once your feature is done, make sure to test the functionality thoroughly.
   Then create a pull request. If you have recently pushed to github, a yellow
   bar will pop up suggesting that you make a pull request from that branch. If
   that is not the case, just press the "New pull request" button, choose your
   branch as "compare" and "develop" as "base". Before you create the pull
   request you _must_ read through the "Files changed" section and ensure that
   you are not committing something by accident.

   - A pull request is an indication to the team that you want to merge a new
     feature (or hotfix) into develop. Creating a pull request implies that you
     have tested your code and that you have read your file diff looking for
     obvious mistakes. If fail to do so, your pull request will (hopefully) be
     rejected, but it also means that you just wasted the time of the reviewer
     who will have to spend a little time to understand the pull request even if
     it contains obvious mistakes. Since you understand the work you are
     committing in depth, obvious mistakes should be much faster for you to pick
     out.
   - "Work in progress pull requests". In some cases you may want to create a
     pull request before finishing a feature (i.e. you are waiting for code from
     someone else, but your code can be merged without this feature and without
     breaking develop). If this is the case, create a pull request, use the
     description field to explain that you are going to finish the work in
     another branch and of course keep the issue open in Trello.
   - "Feedback needed pull requests". Pull requests provides a great interface
     for getting feedback on code directly. In some cases you might be stuck and
     needing another set of eyes on what you are doing even if you are far from
     getting the feature done and even if your current commit is broken. In that
     case commit what you have, type "WIP" in your commit message and edit the
     title of the pull request so it says "DO NOT MEGE: [Title]". Then contact a
     mentor or a student who may be able to help you and get them to look over
     the pull request. This way the code is not merged by accident in a
     non-working state.
   - If you see open pull requests, help a fellow student and don't hesitate to
     review them yourself. Every pull request needs 2 approvals to be merged.
     One of them must be from a mentor. Even if a pull request already has an
     approval from another student, you may still have relevant feedback. Here
     is a nice
     [checklist](https://github.com/HackYourFuture-CPH/curriculum/blob/eca8da8f6717a72ec1a326eff78a0e0ff8161d0d/review/review-checklist.md)
     with everything to look out for when reviewing other peoples code. And
     since everyone will be held to the same standards, make sure to keep it in
     mind when you are writing code as well ;)

10. Always check the pull requests tab regularly - ideally multiple times a day.

    - If you have a pull request open you may want to check back to see if
      someone has requested changes or the pull request has been merged.
    - If you don't adress requested changes fairly quickly, other pull requests
      will be merged before yours increasing the risk that you will have merge
      conflicts in your code. Merge conflicts are inevitable, but the faster you
      get to merge, the lower the risk.
    - If you do not have any open pull requests you still need to check the pull
      requests tab to stay on top of what is happening in the code base. Got to
      the "closed" tab to read what has been merged recently. Failing to read
      other peoples pull requests is one of the most common reasons for "falling
      behind" on a software team.

11. If your pull request has been merged, check out develop the develop branch,
    pull latest changes and make sure it still works before closing your task in
    Trello. Some times features break when different peoples code "meet" on
    develop.

### GIT FAQ

    - Q) How to figure out if I am hooked up to a fork or a branch?
      - A) Run `git remote -v` and examine the "origin" path. You should be working directly on the main repo and it should look like this:

```
origin	git@github.com:HackYourFuture-CPH/ov-class09-fp.git (fetch)
origin	git@github.com:HackYourFuture-CPH/ov-class09-fp.git (push)
```

    - Q) Why do I get merge conflicts?
      - A) Whenever you merge two branches, git will look at the changesets between the two branches and try to determine if they can be merged automatically. Generally if all of your changes are in files nobody else have edited this will always be resolved automatically. If there are changes to the same files it will depend on whether someone has edited the same line as you (including adding a trailing comma to a json object or maybe changing the order or indentation of some lines). Merge conflicts are natural, but can be kept to a minimum by planning work so there is a minimum of overlap between the files you are working in and by only changing as "little as is needed" when you edit code. If people are working in different code styles (i.e. one person likes `"` another likes `'` or one person uses tabs and another uses spaces), that's a huge source of merge conflicts. Fortunately we have Prettier - a little dictator that runs on every commit and makes sure code style is always consistent - so we should not have many merge conflicts as a result of disagreement over code style.

    - Q) Why do I get merge conflicts when I run `git pull` - I am not merging anything?
      - A) Yes you are :) `git pull` is equivalent to running `git fetch && git merge origin/develop`.

    - Q) How to resolve merge conflicts?
      - A) Here is a good strategy:
        - First, run `git status` to see what files have merge conflicts in them.
        - For each file with conflicts your will have to choose between "Current changes" (your stuff) and "Incoming changes" (stuff somebody else added).
        - It is recommended to use a good merge tool to get an overview of changes and to make sure you don't leave something like `>>>>> 0004040387473948274` behind in your code.
        - Github now offers a tool directly in github that allows you to solve merge conflicts. This is great for getting a quick overview of the conflicts, but since Prettier will not run if you are committing directly from the github interface, DO NOT use github to solve conflicts.
        - Review each piece of code and decide whether one of them should replace the other, whether you need both or maybe something needs to be rewritten altogether because the other person touching this file had entirely different assumptions about how to build things than you had.
        - If it is a complex conflict, reach out to the other person and try to reach agreement on how to solve the coflict.
        - If it is just a matter of simple changes, like two people adding an extra line to a json object and the conflict being over whether there should be a trailing comma or not, fix it yourself.
        - If you are in doubt, _always reach out to a fellow student or a mentor_.
        - Make sure to go over all of the files with conflicts and check that there are not merge tags (i.e. `<<<<<<< HEAD`) left behind.
        - Test that your code is still running. Test any features implicated in the files that had conflicts.
        - When you have a merge conflict, git is in a state of being "in the middle of a commit". If you run `git status` you can confirm that you are in the middle of a merge.
        - You must tell git that you have fixed the merge conflict by adding the conflicted files to the staging area with `git add [file-path]` for each of the implicated files.
        - Finally run `git commit`. This will finish the commit and ommitting the `-m` option will allow git to automatically write a merge commit messages with description of what files you have solved conflicts in.

