$source = "C:\Users\pipidastr"
$destination = "C:\Users\pipidastr\Documents\html_pidoras\pipidastrgames"

# Список того, что нужно забрать
$items = @("css", "js", "clickereshkere", "index.html")

foreach ($item in $items) {
    $itemPath = Join-Path $source $item
    if (Test-Path $itemPath) {
        Move-Item -Path $itemPath -Destination $destination -Force
        Write-Host "✅ Перемещено: $item" -ForegroundColor Green
    }
}

Set-Location $destination
Write-Host "🚀 Теперь ты в нужной папке: $destination" -ForegroundColor Cyan