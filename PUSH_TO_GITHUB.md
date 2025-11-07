# How to Push to GitHub

## Step 1: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon (top right) → "New repository"
3. Name it (e.g., `vamo-fellowship`)
4. Choose Public or Private
5. **DON'T** check any boxes (no README, .gitignore, or license)
6. Click "Create repository"

## Step 2: Push Your Code

After creating the repo, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository (replace with YOUR username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

## Example:

If your GitHub username is `gabriellesoong` and you named the repo `vamo-fellowship`:

```bash
git remote add origin https://github.com/gabriellesoong/vamo-fellowship.git
git branch -M main
git push -u origin main
```

## If you get authentication errors:

GitHub requires authentication. You have two options:

### Option A: Use GitHub CLI (easiest)
```bash
# Install GitHub CLI if you don't have it
brew install gh

# Login
gh auth login

# Then push
git push -u origin main
```

### Option B: Use Personal Access Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Give it a name and select `repo` scope
4. Copy the token
5. When you push, use the token as your password when prompted

## After pushing:

Your code will be on GitHub! Then you can:
- Deploy to Vercel/Netlify by connecting your GitHub repo
- Share the repo with others
- Continue making changes and pushing updates

