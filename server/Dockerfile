FROM golang:alpine3.15

WORKDIR /app

ENV GO_ENV=production

COPY . .

CMD ["go", "run", "main.go"]

# Don't publish an image of this publically because it will contain my .env file