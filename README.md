# Project Title: Anime API Frontend

Welcome to the Anime API Frontend repository! This project serves as the frontend of a full stack application, providing a user interface to interact with APIs for three popular anime series: Attack on Titan, My Hero Academia, and Jujutsu Kaisen. The frontend is built using React.js and integrates with a Django backend for user authentication and data representation.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This repository contains the frontend code for a full stack application, featuring a user interface to display data from the APIs of three renowned anime series. The frontend is built with React.js and communicates with the Django backend for user authentication and data fetching. The goal is to provide an interactive and user-friendly interface for anime enthusiasts to explore characters and episodes from Attack on Titan, My Hero Academia, and Jujutsu Kaisen.

## Features

- **React.js**: Utilizes React for building a dynamic and responsive user interface.
- **User Authentication**: Integration with Django backend for user authentication using JWT.
- **API Integration**: Fetches data from backend APIs and displays it on the frontend.
- **Modular Components**: Clean and reusable React components.
- **Routing**: Client-side routing with React Router.
- **State Management**: Manages state using React hooks and context API.

## Installation

To get a local copy up and running, follow these simple steps.

1. **Clone the repository**
   ```sh
   git clone https://github.com/your_username/anime-api-frontend.git
   ```
2. **Navigate to the project directory**
   ```sh
   cd anime-api-frontend
   ```
3. **Install dependencies**
   ```sh
   npm install
   ```
4. **Create a `.env` file in the root directory and add the following environment variables**
   ```
   REACT_APP_API_BASE_URL=http://127.0.0.1:8000/api
   ```

## Usage

To start the development server and run the application locally, use the following command:
```sh
npm start
```
This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Folder Structure

The project structure is organized as follows:

```
anime-api-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── AttackOnTitan/
│   │   ├── MyHeroAcademia/
│   │   ├── JujutsuKaisen/
│   │   ├── Authentication/
│   │   └── Common/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── .env
├── package.json
└── README.md
```

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm build`**: Builds the app for production to the `build` folder.
- **`npm test`**: Launches the test runner in interactive watch mode.
- **`npm eject`**: Ejects the app from Create React App configuration.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add some YourFeature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Thank you for visiting the Anime API Frontend repository! If you have any questions, feel free to open an issue or reach out to the maintainers. Enjoy exploring the application!
