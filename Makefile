.PHONY: generate
generate: # generate protos
	./generate_protos.sh

.PHONY: test
test: # ensures generate_protos script has been run
	DELTA_CHECK=true ./generate_protos.sh
