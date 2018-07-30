DIR=`pwd`
rm -rf $DIR/gen
docker run -v $DIR:/defs registry.ingress.ktensorgym.us-east-1.k8s.lyft.net/docker-protoc:tmp  -d example --with-gateway -l go --go-source-relative
docker run -v $DIR:/defs registry.ingress.ktensorgym.us-east-1.k8s.lyft.net/docker-protoc:tmp  -i ./protos -d protos/flyteidl/service --with-gateway -l go --go-source-relative
docker run -v $DIR:/defs registry.ingress.ktensorgym.us-east-1.k8s.lyft.net/docker-protoc:tmp  -i ./protos -d protos/flyteidl/admin --with-gateway -l go --go-source-relative
docker run -v $DIR:/defs registry.ingress.ktensorgym.us-east-1.k8s.lyft.net/docker-protoc:tmp  -i ./protos -d protos/flyteidl/core --with-gateway -l go --go-source-relative
docker run -v $DIR:/defs registry.ingress.ktensorgym.us-east-1.k8s.lyft.net/docker-protoc:tmp  -i ./protos -d protos/flyteidl/admin -l python
docker run -v $DIR:/defs registry.ingress.ktensorgym.us-east-1.k8s.lyft.net/docker-protoc:tmp  -i ./protos -d protos/flyteidl/core -l python
