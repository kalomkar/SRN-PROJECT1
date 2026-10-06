@echo off
setlocal

echo ===============================================================================
echo                S.R.N. MEHTA INSTITUTIONS - INSTALL DEPENDENCIES
echo ===============================================================================
echo.

cd /d "%~dp0\.."

echo Running npm install with --legacy-peer-deps...
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] npm install encountered an error!
    pause
    exit /b %errorlevel%
)

echo.
echo [SUCCESS] Dependencies installed cleanly.
echo.
pause
