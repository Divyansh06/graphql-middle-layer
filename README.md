# GraphQL Middleware for REST APIs

This project implements a middleware layer in GraphQL that consumes data from REST APIs and exposes it through a GraphQL API. It supports two types of REST APIs:

1. **Live Public API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
2. **Local JSON Server API**: A local REST API served using `json-server`. You can configure the local server endpoint via the `.env` file.

## Features

- **GraphQL Query Support**: Retrieve data from either the live or local API.
- **GraphQL Mutation Support**: Mutations are supported on the local `json-server` API but will not work with the live public API.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment:

   Check for a `.env` file in the project root and specify the base URL for the local API (default is `http://localhost:3000`):

### Running the Project

1. **Start the Local JSON Server API** (optional for mutation support):

   The project uses `json-server` to simulate a local REST API. To start the server, run:

   ```bash
   npm run start-db
   ```

   This will serve the local API at the endpoint specified in the `.env` file.

2. **Start the GraphQL Middleware Server**:

   To start the GraphQL server, run:

   ```bash
   npm start
   ```

   This will launch the GraphQL server, consuming data from both the live API and the local JSON server.

### API Usage

#### Queries

You can query data from either the live or local API using GraphQL queries on `http://localhost:4000/`.
