@echo off
setlocal

echo ===============================================================================
echo                S.R.N. MEHTA INSTITUTIONS - PRODUCTION BUILD
echo ===============================================================================
echo.

cd /d "%~dp0\.."

echo Running typecheck & production build (npm run build)...
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo ===============================================================================
    echo                            [FAIL] BUILD FAILED!
    echo ===============================================================================
    echo Please review the compiler errors above.
    pause
    exit /b %errorlevel%
)

echo.
echo ===============================================================================
echo                         [PASS] PRODUCTION BUILD SUCCEEDED
echo ===============================================================================
echo Production output is ready in the dist/ folder.
echo You can test it locally with scripts\preview.bat
echo.
pause
