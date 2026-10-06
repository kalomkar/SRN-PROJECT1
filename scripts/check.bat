@echo off
setlocal enabledelayedexpansion

echo ===============================================================================
echo                S.R.N. MEHTA INSTITUTIONS - COMPLETE QUALITY CHECK
echo ===============================================================================
echo.

cd /d "%~dp0\.."

set STATUS_NODE=[PASS]
set STATUS_NPM=[PASS]
set STATUS_LINT=[PASS]
set STATUS_BUILD=[PASS]

echo [1/4] Checking Node and npm environment...
where node >nul 2>nul
if %errorlevel% neq 0 (
    set STATUS_NODE=[FAIL]
) else (
    for /f "tokens=*" %%v in ('node -v') do echo Node.js: %%v
)

where npm >nul 2>nul
if %errorlevel% neq 0 (
    set STATUS_NPM=[FAIL]
) else (
    for /f "tokens=*" %%v in ('npm -v') do echo npm: %%v
)

echo.
echo [2/4] Running TypeScript Lint and Type Verification...
call npm run lint
if %errorlevel% neq 0 (
    set STATUS_LINT=[FAIL]
    echo [ERROR] Lint check failed.
) else (
    echo [PASS] Lint and types verified without errors.
)

echo.
echo [3/4] Running Production Build...
call npm run build
if %errorlevel% neq 0 (
    set STATUS_BUILD=[FAIL]
    echo [ERROR] Production build failed.
) else (
    echo [PASS] Production build generated in dist/
)

echo.
echo ===============================================================================
echo                             QUALITY CHECK SUMMARY
echo ===============================================================================
echo Node Environment : !STATUS_NODE!
echo npm Manager      : !STATUS_NPM!
echo TypeScript Lint  : !STATUS_LINT!
echo Production Build : !STATUS_BUILD!
echo ===============================================================================
echo.

if "!STATUS_NODE!"=="[PASS]" if "!STATUS_NPM!"=="[PASS]" if "!STATUS_LINT!"=="[PASS]" if "!STATUS_BUILD!"=="[PASS]" (
    echo [OVERALL STATUS] ALL QUALITY CHECKS PASSED - READY FOR PRODUCTION
) else (
    echo [OVERALL STATUS] ISSUES DETECTED - PLEASE REVIEW LOGS ABOVE
)

echo.
pause
