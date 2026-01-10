@echo off
echo Pushing Radha Gupta Portfolio to GitHub...
echo.
echo Please run these commands in Git Bash:
echo.
echo git config --global user.name "Radha123-web"
echo git config --global user.email "your-email@example.com"
echo git init
echo git add .
echo git commit -m "Initial commit: Radha Gupta Portfolio"
echo git remote add origin https://github.com/Radha123-web/Radha_Gupta_Portfolio.git
echo git push -u origin main
echo.
echo Opening Git Bash for you...
"C:\Program Files\Git\bin\bash.exe" -c "cd '%CD%' && exec bash"