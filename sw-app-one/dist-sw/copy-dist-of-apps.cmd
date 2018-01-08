cd .\sw-app-one\
del *.* /F /Q
cd ..\sw-app-two\
del *.* /F /Q
cd ..
copy ..\dist\*.* .\sw-app-one\
copy ..\..\sw-app-two\dist\*.* .\sw-app-two\

echo "done"