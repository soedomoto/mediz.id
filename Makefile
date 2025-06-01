include .env
export

# HELP =================================================================================================================
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## Display this help screen
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

infra-dev: ### Run docker-compose
	docker-compose -f ./docker-compose.yml up --build --detach s3-dev s3-init-dev db-postgres-dev db-postgres-shadow-dev
.PHONY: infra-dev

app-dev: ### Run pnpm / yarn / npm
	yarn dev
.PHONY: app-dev

infra-prod: ### Run docker-compose
	docker-compose -f ./docker-compose.yml up --detach --build db-prod pma-prod
.PHONY: infra-prod

migrate-prod: ### Run docker-compose
	docker-compose -f ./docker-compose.yml up --build migrate-prod && docker-compose -f ./docker-compose.yml rm -f migrate-prod && docker-compose -f ./docker-compose.yml up --build migrate-data && docker-compose -f ./docker-compose.yml rm -f migrate-data
.PHONY: migrate-prod

app-prod: ### Run docker-compose
	touch app.log && docker-compose -f ./docker-compose.yml up --detach --build app-prod
.PHONY: app-prod

adminer-prod: ### Run docker-compose
	docker-compose -f ./docker-compose.yml up --detach --build adminer-prod
.PHONY: adminer-prod

compose-down: ### Run docker-compose
	docker-compose -f ./docker-compose.yml down
.PHONY: compose-down
