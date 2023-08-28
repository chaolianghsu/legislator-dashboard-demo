# Legislator Dashboard 2024

- Show how good is the legislator

## Table of Contents

- [Legislator Dashboard 2024](#legislator-dashboard-2024)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [Deployment](#deployment)
    - [Production Server](#production-server)
  - [Built With](#built-with)
  - [Authors](#authors)

## Getting Started

### Prerequisites

1. Node.js
2. google cloud sdk

### Installing

First, clone this project and run

```bash
yarn install
```

Add `.env`, the keys need to be filled in are all inside [`.env.example`](./.env.example). Then run

```bash
yarn dev
```

Open `http://localhost:5173` in the browser and you're all set!!

## Deployment

### Production Server

Open terminal and run

```bash
gcloud compute ssh bignet@dv-product --zone=asia-east1-b --project dailyview-340904
```

`cd` into `FrontEnd/legislator-dashboard-2024`, pull the wanted commits and run

```bash
docker-compose up --build -d
```

## Built With

- [React](https://reactjs.org)
- [MUI](https://mui.com) - UI library for react

## Authors

- **Ericsen Tsai**
- **Eddy Liao**
