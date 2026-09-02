# Git Merge and Conflict Practice

This exercise helps you practice creating a branch, merging it, resolving a conflict, and verifying the result.

## 1. Check your starting point

Run these commands from the project folder:

```bash
git status
git branch
```

Make sure you do not have unfinished work before starting. Create a practice branch from your current branch:

```bash
git switch -c merge-practice
```

## 2. Create the first version

Create a file named `merge-note.txt` with this content:

```text
This line was written on the main branch.
```

Commit it:

```bash
git add merge-note.txt
git commit -m "Add merge practice note"
```

## 3. Make a conflicting change

Switch back to the branch you started from. Replace `main` below with its actual name if needed:

```bash
git switch main
```

Edit `merge-note.txt` so it says:

```text
This line was changed on the main branch.
```

Commit the change:

```bash
git add merge-note.txt
git commit -m "Update main branch note"
```

Now merge the practice branch:

```bash
git merge merge-practice
```

Git should report a conflict because both branches changed the same line.

## 4. Understand the conflict markers

Open `merge-note.txt`. It should look similar to this:

```text
<<<<<<< HEAD
This line was changed on the main branch.
=======
This line was written on the main branch.
>>>>>>> merge-practice
```

- `<<<<<<< HEAD` starts the version from your current branch.
- `=======` separates the two versions.
- `>>>>>>> merge-practice` ends the incoming branch version.

Resolve the conflict by deleting all markers and keeping the final text you want. For example:

```text
This line contains the final merged version.
```

## 5. Finish the merge

Stage the resolved file and complete the merge commit:

```bash
git add merge-note.txt
git commit -m "Resolve merge conflict"
```

Verify the history and make sure no conflict remains:

```bash
git status
git log --oneline --graph --all
git diff HEAD~1
```

## Useful recovery commands

Cancel an unfinished merge:

```bash
git merge --abort
```

See which files still have conflicts:

```bash
git status
```

Find unresolved conflict markers:

```bash
git grep -n "<<<<<<<\|=======\|>>>>>>>"
```

Discard the practice branch after finishing:

```bash
git switch main
git branch -D merge-practice
```

Only use the last command when you are sure you no longer need the practice branch.

## Quick checklist

- [ ] I created a branch.
- [ ] I made different edits on two branches.
- [ ] I ran `git merge`.
- [ ] I removed every conflict marker.
- [ ] I staged the resolved file.
- [ ] I completed the merge commit.
- [ ] `git status` shows a clean working tree.
