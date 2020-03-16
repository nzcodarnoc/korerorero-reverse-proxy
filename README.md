# reverse-proxy-docker-compose-express

A simple example of using `http-proxy-middlware` to serve a reverse proxy that routes to multiple `express` applications as containers via `docker-compose`

## Getting Started

Build images and run containers:

```bash
docker-compose build && docker-compose up
```

Then navigate to: [`http://localhost:3000`](http://localhost:3000)

http://localhost:3000/tts/process?INPUT_TYPE=TEXT&AUDIO=WAVE_FILE&OUTPUT_TYPE=AUDIO&LOCALE=en_US&INPUT_TEXT=Hello