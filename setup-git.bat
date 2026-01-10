@echo off
echo Setting up Git repository for Radha_Gupta_Portfolio...

REM Configure git (you may need to update these)
git config --global user.name "Radha123-web"
git config --global user.email "your-email@example.com"

REM Initialize git repository
git init

REM Add all files
git add .

REM Create initial commit
git commit -m "Initial commit: Radha Gupta Portfolio"

REM Add remote repository
git remote add origin https://github.com/Radha123-web/Radha_Gupta_Portfolio.git

REM Push to GitHub (you'll need to enter your GitHub credentials)
git push -u origin main

echo Done! Your portfolio has been pushed to GitHub.
pause