# Fullcycle 2.0 by code.education

My monorepo including all "mini projects" from Fullcycle's course.

## Introduction

In January of 2021 I bought the Fullcycle 2.0 course from [code.education](https://code.education/). During this course we had many examples about using Docker, Kubernetes, Go, PHP (Laravel), Python and NodeJS. So, I decided to create this repo and keep all examples taught at the course.

---

## 🗣 Communication

In this repo we studied REST, gRPC and GraphQL concepts.

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

This repository is just an example about using the HATEOAS (Hypermedia as the Engine of Application State) from REST's implementation and also Method and Content negotiation. 

There is an postman collection [here](./communication/lamina-example/docs/collection.json) that can be used as example

---

## 🐬 Docker

This repo contains docker usage examples.

### docker-example

This folder contains a Dockerfile which uses nginx's alpine version and override the default nginx's page.

I built this Dockerfile to understand how to create and publish an image on Dockerhub.