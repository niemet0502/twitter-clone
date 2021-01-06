# This Repo contain twitter Clone made with React js


## Installation

* Clone this repo:

```bash
git clone https://github.com/ichtrojan/carthook.git
```

* Change directory to the project

```bash
cd carthook
```

* Install dependencies

```bash
composer install
```

* Duplicate `.env.example`

```bash
cp .env.example .env
```

* Modify the database credentials in the `.env` file to suit what you have locally

* Run migrations and seeders

```bash
php artisan migrate
```

>**NOTE**<br/>
> DO NOT RUN SEEDERS

* Start Queue

```bash
php artisan queue:work database
```

* Run the scheduler

```bash
php artisan schedule:run
```

The scheduler has to be running in the background. On macOS/Unix you should add the following to your `.zshrc` or `.bashrc` file.

```bash
function scheduler () {
    while :; do
        php artisan schedule:run
       echo "Sleeping 60 seconds..."
        sleep 60
    done
}
```

The run the `scheduler` command in terminal. This will run the Laravel Scheduler every 60 seconds.

## Usage

Kindly visit the [Postman Docs](https://documenter.getpostman.com/view/2370026/Szt8eVeB?version=latest) to view the available endpoints.

## Tests

To run tests, execute:

```bash
php artisan test