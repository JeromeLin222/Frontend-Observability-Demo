# Grafana Cloud Frontend Observability Demo Site
![截圖 2024-07-19 下午4 39 35](https://github.com/user-attachments/assets/61955f51-d785-4c1f-ba12-de8c4624ff61)


## Introduction

This project demonstrates how to use Grafana Faro to collect frontend application console logs, errors, and traces, integrating them into Grafana for visualization and analysis. Additionally, it covers how to upload sourcemaps to Grafana to trace errors back to the original source code, which is crucial for quickly identifying and fixing issues. The specific goals are as follows:

1. **Automated Error Collection**: Use Grafana Faro to automatically capture and collect console errors from the frontend application, sending these error messages to Grafana for centralized management and analysis.
2. **Frontend Monitoring Integration**: Integrate Grafana Faro with Webpack to enable real-time monitoring and tracing of frontend application errors.
3. **Sourcemap Upload and Usage**: Configure Webpack to generate and upload sourcemaps to Grafana, ensuring that errors can be traced back to the original source code, thus improving debugging and fixing efficiency.

## Features

### Console
![截圖 2024-07-19 下午4 39 47](https://github.com/user-attachments/assets/e379bef9-ef61-4bf5-97d5-551a9f119400)


This section demonstrates how to log different levels of console messages:

- **Log Info**: Button triggers `console.info` logs.
- **Log Warn**: Button triggers `console.warn` logs.
- **Log Error**: Button triggers `console.error` logs.

### Error
![截圖 2024-07-19 下午4 40 00](https://github.com/user-attachments/assets/65b024d2-d6b1-4a93-8b70-396ca6efbac3)


This section shows how to handle different types of errors:

- **Trigger Uncaught Error**: Button triggers an uncaught error.
- **Trigger Caught Error**: Button triggers a caught error and uploads it to Faro.

### Events
![截圖 2024-07-19 下午4 40 18](https://github.com/user-attachments/assets/36c0c77e-f1fe-4856-a528-1b809e216f55)


This section shows how to handle different types of custom events:

- **Add to Cart Event**:  Button triggers an event when the user adds items to the cart.
- **Checkout Event**: Button triggers an event when the user proceeds to checkout.


### Traces
![截圖 2024-07-19 下午4 40 31](https://github.com/user-attachments/assets/ca512186-5637-4eb3-9fcc-68265f6c8dfc)


This section demonstrates generating traces for API calls:

- **Fetch Data**: Button sends a successful API request.
- **Fetch Fail**: Button sends a failed API request.

## Dependency

- Node.js v18.15.0
- npm (included with Node.js installation)

Verify the installation of Node.js and npm:

```
node -v
npm -v
```
## Quick Start

### Clone the repository:

```
git clone https://github.com/JeromeLin222/Frontend-Observability-Demo.git
cd Frontend-Observability-Demo
```

### Install Necessary Packages

Run the following command in the project root directory to install the required packages:

```
npm install
```

### Set Up Environment Variables
Create a `.env` file in the project root directory base on the provided `.env.example`:
```
cp .env.example .env
```

Get the relevant environment variables information from Grafana Cloud. Refer to [this guide](https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/quickstart/javascript/) to set up your Grafana Cloud Frontend Project and obtain the necessary information.

Ensure you have a .env file in the root directory with the required variables:

```
# Faro Collector URL
FARO_COLLECTOR_URL='<collect-endpoint-url>/<app-key>'

# Application Name
APP_NAME='<your-app-name>'

# Source Map Upload Grafana API Endpoint
GRAFANA_API_ENDPOINT='https://your-grafana-instance/api'

# Source Map Upload Access Key
SOURCE_MAP_UPLOAD_ACCESS_KEY='$your-api-key'

# Application ID
APP_ID='<your-app-id>'

# Stack ID
STACK_ID='<your-stack-id>'

# Bundle ID (Optional)
BUNDLE_ID='<your-bundle-id>'

```
Refer to the [Faro JavaScript Bundler Plugins](https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/sourcemap-upload-plugins/) for instructions on obtaining the Source Map Access Key and endpoint.

### Build the Project

Build the project in production mode:

```
npm run build
```

### Start the Server

```
npm run start
```

Once the application is running, open http://localhost:3000 in your browser to view the website.

### Observability with Grafana Faro
You can view the collected information from Grafana Faro in Grafana Frontend. Below is a screenshot of the Frontend Observability dashboard:

![截圖 2024-07-19 下午5 47 47](https://github.com/user-attachments/assets/4db58954-2464-4c4a-bd76-674e721bbadf)

This dashboard probides insights into page loads, errors, and other performance metrics, allowing you to monitor and analyze the frontend applocation effectively.

