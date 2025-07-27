@echo off
cd frontend
echo Building React...
npm run build
cd ..
echo Starting Django server...
call venv\Scripts\activate
cd Insurance
python manage.py runserver
