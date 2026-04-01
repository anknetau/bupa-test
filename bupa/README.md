# Bupa Test

By Andy Kievsky

## Node setup

### If you are using [nvm](https://github.com/nvm-sh/nvm) ([or nvm for windows](https://github.com/coreybutler/nvm-windows)):

`cd bupa`

`nvm use`

At this point, you may need to `nvm install` if the version required is not installed yet.

### Otherwise, just install Node v24.14.1 (as per .nvmrc) and `cd` into `bupa`

After that, run `npm install`.

## Running a development server

`npm run dev`

## Available scripts

`npm run all-checks`: will run all typesystem checks, unit tests, vulnerability, eslint, etc.

`npm run test`: will just run the tests

`npm run lint`: to lint the code.

## Links

Development server lives at http://localhost:5173

Mock API lives at http://localhost:5173/api/v1/bookowners

---

Enjoy, and let me know if you have any issues!

~ Andy
