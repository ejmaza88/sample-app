docker_build:
	@scripts/docker_build.sh

django:
	@docker compose up django

django-server:
	@docker compose up django-server

django-shell:
	@docker compose run django-shell

django-migrate:
	@docker compose run migrate

db:
	@docker compose up -d db

redis-db:
	@docker compose up -d redis

node:
	@docker compose up -d node


# other commands, deal with them later
list_all:
	@scripts/list_all.sh

run:
	@scripts/run_shell.sh $@
