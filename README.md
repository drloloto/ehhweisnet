# ehhweisnet

This is a small project that reads Excel files from the `sourcefiles` directory, converts them to JSON and SQL, and writes the output to the `export` directory.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Bun](https://bun.sh) JavaScript runtime
- [Docker](https://www.docker.com/) (optional)

### Installing

To install the project dependencies, run:

```bash
bun install
```

## Running the Application

To run the application:

```bash
bun run index.ts
```

This will read all `.xlsx` files in the `sourcefiles` directory, convert each file to JSON and SQL, and write the output to the `export` directory.

## Running with Docker

You can also run the application using Docker. Build the Docker image with:

```bash
docker build -t ehhweisnet .
```

Then run the Docker container with:

```bash
docker run -p 3000:3000 ehhweisnet
```

## Built With

- [Bun](https://bun.sh) - The JavaScript runtime used
- [xlsx](https://www.npmjs.com/package/xlsx) - Node.js library for parsing and writing Excel files
- [knex](https://knexjs.org/) - A SQL query builder


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
```

Please replace the placeholders for `CONTRIBUTING.md` and `LICENSE.md` with the actual paths to these files in your project if they exist. If they don't exist, you may want to consider adding them.