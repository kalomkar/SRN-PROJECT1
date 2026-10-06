@echo off
setlocal enabledelayedexpansion

echo ===============================================================================
echo            S.R.N. MEHTA INSTITUTIONS - PRODUCTION DEPLOYMENT CHECK
echo ===============================================================================
echo.

cd /d "%~dp0\.."

set STATUS_LINT=[PASS]
set STATUS_TEST=[PASS]
set STATUS_BUILD=[PASS]

echo [1/3] Verifying TypeScript and Code Integrity (npm run lint)...
call npm run lint
if %errorlevel% neq 0 (
    set STATUS_LINT=[FAIL]
)

echo.
echo [2/3] Running Project Test Suite (npm test)...
call npm test
if %errorlevel% neq 0 (
    set STATUS_TEST=[FAIL]
)

echo.
echo [3/3] Generating Production Build (npm run build)...
call npm run build
if %errorlevel% neq 0 (
    set STATUS_BUILD=[FAIL]
)

echo.
echo ===============================================================================
echo                           PRODUCTION READINESS REPORT
echo ===============================================================================
echo.
echo   Lint & Typecheck : !STATUS_LINT!
echo   Automated Tests  : !STATUS_TEST!
echo   Production Build : !STATUS_BUILD!
echo.
echo ===============================================================================

if "!STATUS_LINT!"=="[PASS]" if "!STATUS_TEST!"=="[PASS]" if "!STATUS_BUILD!"=="[PASS]" (
    echo [RESULT] STATUS: READY TO DEPLOY TO VERCEL / NETLIFY / PRODUCTION SERVER
) else (
    echo [RESULT] STATUS: DEPLOYMENT BLOCKED - FIX REPORTED FAILURES BEFORE PUSHING
)

echo.
pause
