@echo off
REM Copy images from Images folder to website/images folder

echo Copying images to website folder...

REM Copy hero image
copy "..\Images\Master Jud with Buakaw.jpg" "images\Master-Jud-with-Buakaw.jpg" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Master Jud with Buakaw.jpg (hero image)
) else (
    echo [FAIL] Master Jud with Buakaw.jpg
)

REM Copy coach profile images
copy "..\Images\Master-Jud-3040879388.jpg" "images\Master-Jud-3040879388.jpg" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Master-Jud-3040879388.jpg
) else (
    echo [FAIL] Master-Jud-3040879388.jpg
)

copy "..\Images\Coach Adam 01.jpg" "images\Coach-Adam-01.jpg" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Coach Adam 01.jpg
) else (
    echo [FAIL] Coach Adam 01.jpg
)

copy "..\Images\Coach Nin 01.jpg" "images\Coach-Nin-01.jpg" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Coach Nin 01.jpg
) else (
    echo [FAIL] Coach Nin 01.jpg
)

copy "..\Images\Coach Noi 01.jpg" "images\Coach-Noi-01.jpg" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Coach Noi 01.jpg
) else (
    echo [FAIL] Coach Noi 01.jpg
)

copy "..\Images\Coach Susun 01.jpg" "images\Coach-Susun-01.jpg" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Coach Susun 01.jpg
) else (
    echo [FAIL] Coach Susun 01.jpg
)

copy "..\Images\Nawaphon Chanmanee trainer 01.jpg" "images\Nawaphon-Chanmanee-01.jpg" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Nawaphon Chanmanee trainer 01.jpg
) else (
    echo [FAIL] Nawaphon Chanmanee trainer 01.jpg
)

copy "..\Images\OIP-41752969.jpg" "images\OIP-41752969.jpg" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] OIP-41752969.jpg
) else (
    echo [FAIL] OIP-41752969.jpg
)

copy "..\Images\maxresdefault-1141276480.jpg" "images\maxresdefault-1141276480.jpg" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] maxresdefault-1141276480.jpg
) else (
    echo [INFO] maxresdefault-1141276480.jpg (optional)
)

copy "..\Images\media-3510629413.webp" "images\media-3510629413.webp" >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] media-3510629413.webp
) else (
    echo [INFO] media-3510629413.webp (optional)
)

echo.
echo Image copy complete! All images have been copied to the images/ folder.
echo.
pause
