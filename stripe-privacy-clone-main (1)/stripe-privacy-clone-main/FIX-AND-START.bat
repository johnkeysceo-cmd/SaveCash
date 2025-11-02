@echo off
echo ========================================
echo Fixing Next.js App and Starting Server
echo ========================================
echo.

cd /d "%~dp0"

echo Step 1: Killing any running Node processes...
taskkill /F /IM node.exe 2>nul
echo.

echo Step 2: Removing old cache...
if exist ".next" (
    rmdir /s /q ".next"
    echo Cleared .next cache
)
echo.

echo Step 3: Rebuilding native modules...
call npm rebuild --legacy-peer-deps
echo.

echo Step 4: Starting Next.js server...
echo Server will start on http://localhost:3000 (or next available port)
echo.
echo Once you see "Ready in X.Xs", footer links will work!
echo.
call npm run dev

pause

