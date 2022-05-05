docker_build:
	@scripts/docker_build.sh

list_all:
	@scripts/list_all.sh

main-app:
	@docker compose run -d main-app

redis-db:
	@docker compose up -d redis-db

shell:
	@docker compose run -d redis-test

run:
	@scripts/run_shell.sh $@
