@echo off
setlocal

echo ===============================================================================
echo                S.R.N. MEHTA INSTITUTIONS - GIT REPOSITORY STATUS
echo ===============================================================================
echo.

cd /d "%~dp0\.."

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not in PATH!
    pause
    exit /b 1
)

echo --- CURRENT BRANCH & COMMIT ---
git branch -v
echo.

echo --- MODIFIED & UNTRACKED FILES ---
git status -s
echo.

echo --- FULL STATUS ---
git status
echo.
pause
