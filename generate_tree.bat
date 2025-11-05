@echo off
REM ==========================================================
REM Generate directory tree of current folder
REM ==========================================================

set "output=directory_tree.txt"

echo Generating directory tree for: %cd%
echo -------------------------------------------

REM The /F flag includes file names; remove it if you only want folders
tree /F /A > "%output%"

echo Directory tree saved to: %output%
pause
