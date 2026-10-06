@echo off
setlocal

echo ===============================================================================
echo                S.R.N. MEHTA INSTITUTIONS - TEST & TYPECHECK
echo ===============================================================================
echo.

cd /d "%~dp0\.."

echo [1/2] Running TypeScript Typecheck (npm run lint)...
call npm run lint
if %errorlevel% neq 0 (
    echo.
    echo [FAIL] TypeScript compilation errors detected!
    pause
    exit /b %errorlevel%
)
echo [PASS] TypeScript types are 100%% valid.

echo.
echo [2/2] Running Project Test Suite (npm test)...
call npm test
if %errorlevel% neq 0 (
    echo.
    echo [FAIL] Test execution failed!
    pause
    exit /b %errorlevel%
)
echo [PASS] All project tests passed cleanly.

echo.
echo ===============================================================================
echo                        ALL CHECKS PASSED SUCCESSFULLY
echo ===============================================================================
echo.
pause
