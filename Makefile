ps:
	docker compose ps -a

init:
	docker compose build --no-cache
	docker compose up -d
	@make npm-install

start:
	docker compose start

bash:
	docker compose exec -it app bash

down:
	docker compose down --rmi all --volumes --remove-orphans

package-reset:
	docker compose exec -it app rm ./package-lock.json
	docker compose exec -it app rm -r ./node_modules/

npm-install:
	docker compose exec -it app npm install

npm-%:
	docker compose exec -it app npm run ${@:npm-%=%}
