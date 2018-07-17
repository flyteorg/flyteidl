DIR=`pwd`
rm -rf $DIR/flyteidl
docker run -v $DIR:/defs namely/protoc-all:1.11 -o flyteidl/pb-go -d example --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.11 -o flyteidl/pb-go -i ./protos -d service --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.11 -o flyteidl/pb-go -i ./protos -d protos/admin --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.11 -o flyteidl/pb-go -i ./protos -d protos/core --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.11 -o flyteidl/pb_python -i ./protos -d protos/admin -l python
docker run -v $DIR:/defs namely/protoc-all:1.11 -o flyteidl/pb_python -i ./protos -d protos/core -l python
