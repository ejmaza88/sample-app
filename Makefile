docker_build:
	@scripts/docker_build.sh

list_all:
	@scripts/list_all.sh

sample-app:
	@docker compose run -d sample-app

redis-db:
	@docker compose up -d redis

db:
	@docker compose up -d db

shell:
	@docker compose run -d redis-test

run:
	@scripts/run_shell.sh $@
