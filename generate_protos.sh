DIR=`pwd`
rm -rf $DIR/gen
docker run -v $DIR:/defs namely/protoc-all:1.11 -d example --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.11 -i ./protos -d protos/admin --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.11 -i ./protos -d protos/core --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.11 -i ./protos -d protos/admin -l python
docker run -v $DIR:/defs namely/protoc-all:1.11 -i ./protos -d protos/core -l python
