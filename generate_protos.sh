DIR=`pwd`
rm -rf $DIR/gen
docker run -v $DIR:/defs namely/protoc-all:1.13  -d example --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.13  -i ./protos -d protos/flyteidl/service --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.13  -i ./protos -d protos/flyteidl/admin --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.13  -i ./protos -d protos/flyteidl/core --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.13  -i ./protos -d protos/flyteidl/admin -l python
docker run -v $DIR:/defs namely/protoc-all:1.13  -i ./protos -d protos/flyteidl/core -l python
