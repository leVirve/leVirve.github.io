# Personal Website

Behold, make your own website in modern way.

:fleur_de_lis: :fleur_de_lis: :fleur_de_lis:

## Usage

In the project directory, you can run:

- Setup the environment

    ```bash
    npm install
    ```

- Run the development environment

    ```bash
    npm run start
    ```

    The page opened in [http://localhost:3000](http://localhost:3000) will reload if you make edits. You will also see any lint errors in the console.

    Put all your result images under the `public/` and with the correct path.

- Pack for production

    ```bash
    npm run build
    ```

    Build the app for production and output to the `build` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

- Pack for production

    Deploy the `build` folder to Github Page. The URL of page will be `http://{username}.github.io/` where `username` is your Github username.

    1. Edit `"homepage"` entry in the `package.json`.

        ```json
        "homepage": "http://{username}.github.io/"
        ```

    1. Deploy to the `master` branch of your repository can specified by additional argument `-r`.

        ```bash
        npm run deploy -r {your-repo-github-url}
        ```

- Develop with linter and prettier

    We use `eslint` and `prettier` to keep the source great!

    ```bash
    npm run lint
    npm run lint  --fix
    ```
