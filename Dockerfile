FROM microsoft/dotnet:5.0-sdk
COPY . /app
WORKDIR /app/API
RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
EXPOSE 80/tcp
RUN chmod +x ./entrypoint.sh
CMD /bin/bash ./entrypoint.sh