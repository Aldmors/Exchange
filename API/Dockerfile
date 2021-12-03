FROM mcr.microsoft.com/dotnet/aspnet:5.0
COPY bin/Debug/net5.0/publish/ app/
WORKDIR /app
ENTRYPOINT dotnet aspnetcore-webapp.dll