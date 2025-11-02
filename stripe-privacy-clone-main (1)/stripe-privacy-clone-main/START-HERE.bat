@echo off
echo Starting Next.js Server for Footer Links...
echo.
cd /d "%~dp0"

if not exist "node_modules" (
    echo Installing dependencies (this may take a few minutes)...
    call npm install --legacy-peer-deps
    echo.
)

echo.
echo Starting Next.js server on http://localhost:3000
echo Once started, footer links will open pages from this app!
echo.
call npm run dev
pause

