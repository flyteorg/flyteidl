FROM golang:1.18.5

WORKDIR /usr/src/flyteidl

COPY Makefile ./
COPY boilerplate ./boilerplate
COPY go.mod ./
COPY go.sum ./

# install tools and dependencies
RUN make update_boilerplate install
