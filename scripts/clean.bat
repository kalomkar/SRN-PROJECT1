@echo off
setlocal

echo ===============================================================================
echo                S.R.N. MEHTA INSTITUTIONS - CLEAN GENERATED FILES
echo ===============================================================================
echo.

cd /d "%~dp0\.."

echo Cleaning dist/ build directory...
if exist dist (
    rmdir /s /q dist
    echo [CLEANED] dist/ folder removed.
) else (
    echo [INFO] dist/ folder does not exist.
)

echo.
set /p CONFIRM="Do you also want to delete node_modules/ to perform a fresh reinstall? (y/N): "
if /i "%CONFIRM%"=="y" (
    if exist node_modules (
        echo Removing node_modules...
        rmdir /s /q node_modules
        echo [CLEANED] node_modules removed. Run scripts\install.bat to reinstall.
    ) else (
        echo [INFO] node_modules does not exist.
    )
) else (
    echo [SKIPPED] node_modules was preserved.
)

echo.
echo Safe cleanup completed. Source code and media files were untouched.
echo.
pause
