@echo off
setlocal

echo ===============================================================================
echo                S.R.N. MEHTA INSTITUTIONS - PRODUCTION PREVIEW
echo ===============================================================================
echo.

cd /d "%~dp0\.."

if not exist dist (
    echo dist/ folder not found. Building project first...
    call npm run build
    if %errorlevel% neq 0 (
        echo [ERROR] Build failed before preview!
        pause
        exit /b %errorlevel%
    )
)

echo Starting production preview server...
call npm run preview
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Preview server encountered an error.
    pause
)
