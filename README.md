# React Native (Expo) Monorepo Template

This repository provides a basic template for a React Native (Expo) project using a Turborepo-managed monorepo. It includes React Navigation for routing, TypeScript for type safety, and ESLint for code quality.

For more details, please visit my blog: https://medium.com/@yongmin86k

## Technologies Used

This project is built with the following technologies:

| Technology | Version |
|---|---|
| [Turborepo](https://turbo.build/repo) | `^2.5.5` |
| [Expo](https://expo.dev/) | `~53.0.20` |
| [React Native](https://reactnative.dev/) | `0.79.5` |
| [React Navigation](https://reactnavigation.org/) | `^7.1.16` |
| [TypeScript](https://www.typescriptlang.org/) | `5.8.3` |
| [ESLint](https://eslint.org/) | `9.31.0` |

## Getting Started

To get started with this project, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    This project uses Yarn workspaces. To install the dependencies for all packages, run the following command from the root of the repository:

    ```bash
    yarn install
    ```

3.  **Run the application:**

    You can run the main application using the following command:

    ```bash
    yarn start
    ```

    This will start the Expo development server. You can then run the app on an Android or iOS simulator, or on a physical device using the Expo Go app.

## Monorepo Structure

The monorepo is structured as follows:

```
.
├── apps
│   └── example-react-navigation
├── packages
│   ├── eslint-config
│   ├── react-native-shared-ui
│   └── typescript-config
└── ...
```

*   `apps`: Contains the main applications.
    *   `example-react-navigation`: A sample React Native application demonstrating the use of React Navigation.
*   `packages`: Contains shared code and configuration.
    *   `eslint-config`: Shared ESLint configuration.
    *   `react-native-shared-ui`: A shared UI component library.
    *   `typescript-config`: Shared TypeScript configuration.
