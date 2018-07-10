DIR=`pwd`
rm -rf $DIR/gen
docker run -v $DIR:/defs namely/protoc-all:1.11 -d example --with-gateway -l go
docker run -v $DIR:/defs namely/protoc-all:1.11 -d protos --with-gateway -l go
