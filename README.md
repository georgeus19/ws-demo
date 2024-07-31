# WS-DEMO

Demo for websocket app with two nginx reverse proxies

-   first securing communication with SSL
-   the other is application proxy

Build and run using docker compose. It is necessary to generate self signed certifikaces first in the proxy directory.

```bash
# Go to /proxy and run the following to generate certifikate
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt
sudo openssl dhparam -out dhparam.pem 2048

# Go to / and run to run the app
sudo docker compose build
sudo docker compose run
```

Go to https://localhost/index.html to see the demo app and click on WS button to initiate web socket communication.
