install: 
	cd frontend && yarn
	cd backend && yarn
run-docker-up:
	docker-compose up -d
run-docker-build:
	docker-compose build 
all:
	make install
	make run-docker-build
	make run-docker-up