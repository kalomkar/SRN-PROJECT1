@echo off
setlocal enabledelayedexpansion

echo ===============================================================================
echo                S.R.N. MEHTA INSTITUTIONS - FIRST TIME SETUP
echo ===============================================================================
echo.

cd /d "%~dp0\.."

echo [1/3] Checking Node.js environment...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please install Node.js (v18 or higher) from https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('node -v') do set NODE_VER=%%v
echo Node.js version: !NODE_VER!

echo.
echo [2/3] Checking npm package manager...
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed or not in PATH!
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('npm -v') do set NPM_VER=%%v
echo npm version: !NPM_VER!

echo.
echo [3/3] Installing project dependencies (with --legacy-peer-deps)...
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Dependency installation failed!
    pause
    exit /b %errorlevel%
)

echo.
echo ===============================================================================
echo                         SETUP COMPLETED SUCCESSFULLY
echo ===============================================================================
echo.
echo You can now run the project locally with:
echo   scripts\dev.bat
echo.
echo Or run a full quality check with:
echo   scripts\check.bat
echo.
pause
