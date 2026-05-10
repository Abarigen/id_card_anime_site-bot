$source = "C:\Users\Administrator\Downloads\Telegram Desktop"
$destination = Join-Path $PSScriptRoot "..\public\assets"

New-Item -ItemType Directory -Force -Path $destination | Out-Null

Copy-Item -LiteralPath (Join-Path $source "IMG_3216.JPG") -Destination (Join-Path $destination "gojo-front.jpg") -Force
Copy-Item -LiteralPath (Join-Path $source "IMG_3215.PNG") -Destination (Join-Path $destination "gojo-back.png") -Force
Copy-Item -LiteralPath (Join-Path $source "IMG_3209.JPG") -Destination (Join-Path $destination "naruto-front.jpg") -Force
Copy-Item -LiteralPath (Join-Path $source "IMG_3210.JPG") -Destination (Join-Path $destination "naruto-back.png") -Force
Copy-Item -LiteralPath (Join-Path $source "IMG_3211.PNG") -Destination (Join-Path $destination "luffy-front.png") -Force
Copy-Item -LiteralPath (Join-Path $source "IMG_3212.PNG") -Destination (Join-Path $destination "luffy-back.png") -Force

Write-Host "Assets copied to $destination"
