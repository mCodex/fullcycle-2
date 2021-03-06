# Full Cycle 2.0 by code.education

My monorepo including all "mini projects" from Fullcycle's course.

## Introduction

In January of 2021 I bought the Full Cycle 2.0 course from [code.education](https://code.education/). During this course we had many examples about using Docker, Kubernetes, Go, PHP (Laravel), Python and NodeJS. So, I decided to create this repo and keep all examples taught at the course.

---

## 🏆 Challenges

In this folder there are all course's challenges. Every project inside this folder has a detailed README explaining about each challenge.

---

## 🗣 Communication

In this folder we studied REST, gRPC and GraphQL concepts.

### grpc-example
 
A gRPC implementation using Go lang

#### 🛠 Installing

You need to have Go lang installed on your machine.

##### Compiling protobuffers and gRPC

```bash
protoc --proto_path=proto proto/*.proto --go_out=pb --go-grpc_out=pb
```

#### 🏃‍♂️ Running

First of all, you need to run the server:

```bash
go run cmd/server/server.go
```

After that, you just need to run the client simultaneously:

```bash
go run cmd/client/client.go
```

### lamina-example
  
A simple [lamina project](https://api-tools.getlaminas.org/) demonstrating all REST's api levels using docker and sqlite.

#### Description

This folder is just an example about using the HATEOAS (Hypermedia as the Engine of Application State) from REST's implementation and also Method and Content negotiation. 

There is an postman collection [here](./communication/lamina-example/docs/collection.json) that can be used as example.

---

## 🐬 Docker

This folder contains docker usage examples.

### docker-example

This folder contains a Dockerfile which uses nginx's alpine version and override the default nginx's page.

I built this Dockerfile to understand how to create and publish an image on Dockerhub.

### laravel-example

A Dockerfile example demonstrating how to use Laravel on Dockerfile and also publishing an image based on Laravel.

### nginx-laravel

A Dockerfile example demonstrating how to use nginx on Dockerfile.

### node-example

A Dockerfile example demonstrating how use NodeJS on Docker and publishing an image copying local files to the image during the build time.

---

## 🔑 Keycloak 

## goclient

An app using Go + go-oidc to demontrate how keycloak authentication/authorization works.


## keycloak-theme

An example using MySQL + Keycloak + Docker-compose demontrating how to use volumes to expose a keycloak's custom theme

---

## 🐰 RabbitMQ

A docker-compose file containing RabbitMQ Management used only to demonstrate how to configure queues, exchanges and messages.