# Compliance Dashboard - Compliance Status Module

This module displays the overall compliance status using a pie chart. It's a microfrontend designed to be consumed by the Compliance Dashboard host application.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/kanetu/mfe-compliance-dashboard-compliance-status.git
    cd compliance-dashboard-compliance-status
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The module will be available at `http://localhost:3002`.

## Project Structure

- `src/`: Contains the module's code.
  - `App.tsx`: The main component that displays the compliance status.
  - `bootstrap.tsx`: The main entry point that renders the `App` component.
  - `index.tsx`: The entry point that dynamically imports `bootstrap.tsx`.
  - `components/`: Contains React components used by the module.
  - `types/`: Contains TypeScript type definitions.
  - `utils/`: Contains utility functions.
  - `styles/`: Contains CSS styles (including Tailwind CSS directives).
- `public/`: Contains the `index.html` file.
- `webpack.config.js`: Webpack configuration for the module.

## Dependencies

- React
- React DOM
- Chart.js and React Chart.js 2
- Webpack and Module Federation plugins
- Tailwind CSS
- ChartJS

## Notes

- This module is designed to be consumed by a host application using Module Federation.
- It exposes the `App` component.
- The `index.tsx` file dynamically imports the `bootstrap.tsx` file.
- Tailwind CSS is used for styling.
