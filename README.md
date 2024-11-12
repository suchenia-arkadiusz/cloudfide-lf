# Crypto Analyzer

This app can take the start and end time from the request query params and makes the simple analyze for 
those values.

# How to run

To run this app execute the following command:

## app

```shell
npm run start
```

## tests

```shell
npm run test
```

# Environment variables

| NAME           | DEFAULT                  | DESCRIPTION                          |
|----------------|--------------------------|--------------------------------------|
| APP_PORT       | `3000`                   | The port to start the app on         |
| APP_API_PREFIX | `/api/v1/analyze-crypto` | The REST api prefix for the requests |

# Request

## Default values

| NAME   | DEFAULT  | DESCRIPTION                             |
|--------|----------|-----------------------------------------|
| symbol | `ETHBTC` | The symbol to get the exchange data for |

## Required vbalues

| NAME      | DEFAULT | DESCRIPTION                               |
|-----------|---------|-------------------------------------------|
| startTime | `null`  | The start time to start looking data from |
| endTime   | `null`  | The end time to start looking data for    |