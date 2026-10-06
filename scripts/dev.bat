@echo off
setlocal

echo ===============================================================================
echo                S.R.N. MEHTA INSTITUTIONS - LOCAL DEV SERVER
echo ===============================================================================
echo.

cd /d "%~dp0\.."

echo Starting Vite development server on http://localhost:3000...
echo Press Ctrl+C to stop the server at any time.
echo.

call npm run dev
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Development server exited with an error.
    pause
)
