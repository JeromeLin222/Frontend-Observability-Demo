# Grafana Cloud Frontend Observability Demo Site
<img width="1440" alt="Screenshot 2024-06-25 at 6 16 18 PM" src="https://github.com/JeromeLin222/Frontend-Observability-Demo/assets/31838309/ef417f0a-ba7e-4325-8b8f-c5a442b63c9e">

## Introduction

This project demonstrates how to use Grafana Faro to collect frontend application console logs, errors, and traces, integrating them into Grafana for visualization and analysis. Additionally, it covers how to upload sourcemaps to Grafana to trace errors back to the original source code, which is crucial for quickly identifying and fixing issues. The specific goals are as follows:

1. **Automated Error Collection**: Use Grafana Faro to automatically capture and collect console errors from the frontend application, sending these error messages to Grafana for centralized management and analysis.
2. **Frontend Monitoring Integration**: Integrate Grafana Faro with Webpack to enable real-time monitoring and tracing of frontend application errors.
3. **Sourcemap Upload and Usage**: Configure Webpack to generate and upload sourcemaps to Grafana, ensuring that errors can be traced back to the original source code, thus improving debugging and fixing efficiency.

## Features

### Console
<img width="1436" alt="Screenshot 2024-06-25 at 3 12 15 PM" src="https://github.com/JeromeLin222/Frontend-Observability-Demo/assets/31838309/38e87834-8a7d-4980-bad9-dabfda78e3f8">

This section demonstrates how to log different levels of console messages:

- **Log Info**: Button triggers `console.info` logs.
- **Log Warn**: Button triggers `console.warn` logs.
- **Log Error**: Button triggers `console.error` logs.

### Error
<img width="1440" alt="Screenshot 2024-06-25 at 3 12 24 PM" src="https://github.com/JeromeLin222/Frontend-Observability-Demo/assets/31838309/0f004467-09ed-4d75-a699-344e9a979366">

This section shows how to handle different types of errors:

- **Trigger Uncaught Error**: Button triggers an uncaught error.
- **Trigger Caught Error**: Button triggers a caught error and uploads it to Faro.

### Traces
<img width="1440" alt="Screenshot 2024-06-25 at 3 12 41 PM" src="https://github.com/JeromeLin222/Frontend-Observability-Demo/assets/31838309/cf8a13b7-8b41-45e7-9df3-2f061ea68e76">

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

### Install Necessary Packages

Run the following command in the project root directory to install the required packages:

```
npm install
```

### Set Up Environment Variables

Create a `.env` file in the project root directory and add the Source Map Upload access key and Grafana Cloud API Endpoint obtained from Grafana Cloud:

```
SOURCE_MAP_UPLOAD_ACCESS_KET='your-access-key'
GRAFANA_API_ENDPOINT='https://your-grafana-instance/api'
```
Refer to the [Faro JavaScript Bundler Plugins](https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/sourcemap-upload-plugins/) for instructions on obtaining the Source Map Access Key and endpoint.

### Build the Project

Build the project in production mode:

```
npm run build
```

### Start the Server

```
npm run satart
```

Once the application is running, open http://localhost:3000 in your browser to view the website.
