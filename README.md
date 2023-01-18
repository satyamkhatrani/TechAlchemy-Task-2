# TechAlchemy-Task-2

<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#api-documentation">API Documentation</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app._

1. Get a free API Key at [newsapi.org](https://newsapi.org) & [openweathermap.org](https://openweathermap.org/)
2. Clone the repo
   ```sh
   git clone https://github.com/satyamkhatrani/TechAlchemy-Task-2.git
   ```
3. Go to repo & Install NPM packages
   ```sh
   cd TechAlchemy-Task-2 && npm install
   ```
4. Copy file ```.env.example``` and paste it as ```.env```, set environment variable
   ```
   PORT='ENTER_PORT'
   MONGODB_URI='ENTER_MONGODB_URI'
   JWT_SECRET='ENTER_RANDOM_SECRET_KEY'
   JWT_EXP='ENTER_TOKEN_EXPIRATION_TIME'
   NEWS_API_KEY='ENTER_NEWS_API_KEY'
   WEATHER_API_KEY='ENTER_NEWS_OPENWEATHER_KEY'
   ```
5. Start the server
   ```
   npm run start
   ```

6. For testcases _<span style="color:#333">(optional)</span>_
   ```
   npm run test
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## API Documentation

Please visit this [link](https://documenter.getpostman.com/view/1876121/2s8ZDVZifS) for documentation.

<p align="right">(<a href="#top">back to top</a>)</p>
