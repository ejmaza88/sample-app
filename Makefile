docker_build:
	@scripts/docker_build.sh

django:
	@docker compose up django

db:
	@docker compose up -d db

redis-db:
	@docker compose up -d redis


# other commands, deal with them later
list_all:
	@scripts/list_all.sh

run:
	@scripts/run_shell.sh $@
