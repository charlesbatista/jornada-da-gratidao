@echo off
REM 🤖 Script de Backup Automático para Windows Task Scheduler
REM 
REM Este script executa o backup e registra logs
REM Configure no Task Scheduler para executar a cada 2 dias

echo %date% %time% - Iniciando backup automatico >> "%~dp0backup.log"

cd /d "%~dp0"

REM Executar backup
call npm run backup:auto >> backup.log 2>&1

REM Verificar se o backup foi bem-sucedido
if %errorlevel% == 0 (
    echo %date% %time% - Backup concluido com sucesso >> backup.log
    echo Backup realizado com sucesso!
) else (
    echo %date% %time% - ERRO no backup >> backup.log
    echo ERRO: Falha no backup!
    exit /b 1
)

REM Manter apenas os últimos 50 logs (limpeza simples)
for /f "skip=50 delims=" %%i in ('type backup.log') do (
    echo %%i > backup.log.tmp
)
if exist backup.log.tmp (
    move backup.log.tmp backup.log
)

echo Backup automatico finalizado.
pause