FROM mcr.microsoft.com/dotnet/sdk:5.0
COPY . /app
WORKDIR /app/API
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
EXPOSE 80/tcp
