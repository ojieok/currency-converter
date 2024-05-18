# Currency Converter Application Developer Manual

## Overview

This application allows users to select two currencies and fetches the latest exchange rate between them. The exchange rate data is retrieved from external APIs. The application also includes a chart visualization for selected currencies using the Chart.js library and a swiper for displaying multiple charts of the top 6 currencies. 


### Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/currency-converter-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd currency-converter-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

### On a Local Server

1. To run the application on a local server, you can use a simple HTTP server like `http-server`:
    ```bash
    npm install -g http-server
    http-server
    ```
2. Open your browser and navigate to `http://localhost:8080` (or the port specified by `http-server`).

## Testing

Currently, the application does not include automated tests. However, you can manually test the functionality by following these steps:

1. Open the application in your browser.
2. Verify that the currency dropdowns are populated correctly.
3. Select different currency pairs and click the "Convert" button to check the exchange rate.
4. Check the charts to ensure they are displaying the correct data.
5. Verify that the Swiper component allows you to navigate through the charts.

## API Documentation

### Endpoints

The application uses two external APIs to fetch data:

1. **Get Currencies List**
    - **Endpoint**: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`
    - **Method**: GET
    - **Description**: Fetches a list of available currencies.

2. **Get Exchange Rates**
    - **Endpoint**: `https://latest.currency-api.pages.dev/v1/currencies/{currency}.json`
    - **Method**: GET
    - **Description**: Fetches the exchange rates for the specified currency.

3. **Get Historical Exchange Rates**
    - **Endpoint**: `https://api.frankfurter.app/{startDate}..{endDate}?from={baseCurrency}&to={currency}`
    - **Method**: GET
    - **Description**: Fetches historical exchange rates for the past 5 days for the specified currency for the given currencies.
