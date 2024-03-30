# back4app-containers-remix

This repository demonstrates how to dockerize and deploy a [Remix](https://remix.run/) application to [Back4app Containers](https://www.back4app.com/container-as-a-service-caas).

To learn more check out the [article](#).

## Development

1. Fork/Clone

2. Install the dependencies:

    ```sh
    $ npm install
    ```
   
3. Create a *.env* file in the project root with the following content:

    ```sh
    PARSE_APPLICATION_ID=<your_parse_app_id>
    PARSE_JAVASCRIPT_KEY=<your_parse_javascript_key>
   ```

4. Run the server:

    ```sh
    $ npm run dev
    ```

5. Navigate to [http://localhost:5173/](http://localhost:5173/) in your favorite web browser.

## Deploy (Docker)

1. Install Docker (if you don't have it yet).

2. Build and tag the image:
    ```sh
    $ docker build -t remix-notes:1.0 .
    ```

3. Start a new container:
   ```sh
    $ docker run -it -p 3000:3000
        -e PARSE_APPLICATION_ID=<your_parse_app_id> 
        -e PARSE_JAVASCRIPT_KEY=<your_parse_javascript_key> 
        -d remix-notes:1.0
    ```

4. Navigate to [http://localhost:3000/](http://localhost:3000/) in your favorite web browser.
