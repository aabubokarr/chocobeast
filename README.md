# Chocobeast

![Chocobeast](chocobeast.png)

Welcome to the **Chocobeast** project! This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Structure](#structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Repository](https://github.com/aabubokarr/chocobeast.git)
- [Website](https://aabubokarr.github.io/chocobeast/)

## About

**Chocobeast** is a modern, immersive chocolate website designed to showcase premium chocolate products through bold visuals, smooth interactions, and an engaging user experience. Explore delicious creations, discover rich flavors, and experience chocolate in a whole new way.

## Features

- Modern UI/UX
- Responsive Design
- Interactive Elements
- Health Tools
- Ordering System

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aabubokarr/chocobeast.git
   ```
2. Navigate to the project directory:
   ```bash
   cd chocobeast
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ``` 

## Structure

```
chocobeast/
├── .github/
│   └── workflows/
│       └── deploy.yml                # GitHub Actions deployment workflow
├── dist/                             # Production build output
├── node_modules/                     # Installed npm dependencies
├── public/                           # Static public assets
├── src/                              # Main React source code
│   ├── components/                   # React components
│   │   ├── sections/                 # Large page/section components
│   │   ├── ui/                       # Reusable UI components
│   │   └── CustomCursor.jsx          # Custom cursor component
│   ├── lib/                          # Libraries/shared application logic
│   ├── utils/                        # Utility/helper functions
│   ├── App.css                       # App-specific styles
│   ├── App.jsx                       # Root React component
│   ├── index.css                     # Global styles/Tailwind styles
│   └── main.jsx                      # React application entry point
├── .gitignore                        # Git ignore rules
├── eslint.config.js                  # ESLint configuration
├── index.html                        # Vite HTML entry point
├── LICENSE                           # Project license
├── package-lock.json                 # Locked npm dependency versions
├── package.json                      # Project metadata and dependencies
├── postcss.config.js                 # PostCSS configuration
├── README.md                         # Project documentation
├── tailwind.config.js                # Tailwind CSS configuration
└── vite.config.js                    # Vite configuration
```

## Contributors

<p align="center">
  <a href="https://github.com/aabubokarr/chocobeast/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=aabubokarr/chocobeast" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
