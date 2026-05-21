$ErrorActionPreference = "Stop"
$Path = "C:\Projects\CRH\Website"

New-Item -ItemType Directory -Force -Path $Path | Out-Null
Set-Location $Path

Write-Host "Install dependencies..."
npm install

Write-Host "Starting local dev server..."
npm run dev
