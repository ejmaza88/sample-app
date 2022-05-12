docker-build:
	@docker build -t django-app .

django-server:
	@docker compose up django-server

django-shell:
	@docker compose run django-shell

django-migrate:
	@docker compose run migrate

db:
	@docker compose up -d db

redis:
	@docker compose up -d redis

npm-watch:
	@docker compose up npm-watch

