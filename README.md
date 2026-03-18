# 🔍 Mastavt.com Landing Page (Next.js + React + TypeScript)

A modern, responsive landing page for **Mastavt**, built with **Next.js 16**, **React 18**, **TypeScript**, and **Tailwind CSS**. 
This project converts the index page of mastavt.com from a PHP-based blog into a dynamic, professional landing page, featuring reusable components, dynamic text rotation, floating image animations, and a clean, modern design. It includes **Jest unit tests** with `ts-jest` and lays the foundation for future development and migration from PHP to a React/Next.js framework.

---

🎨 Live Demo
   [https://mastavt-landing.vercel.app/](https://mastavt-landing.vercel.app/)

---

## 🚀 Features

- Fully responsive landing page with **mobile-first design**
- Dynamic **Text Rotator** for animated headlines
- Smooth **floating image animations** with Framer Motion
- Reusable **Section** and UI components for modularity
- Custom **call-to-action buttons** with hover and shadow effects
- Optimized for **fast performance and SEO**
- Supports **external images** via Next.js Image remote patterns
- Ready for deployment on **Vercel**
- Written in **TypeScript** with type safety
- Includes **unit testing** using Jest + @testing-library/react

---

## 🛠️ Technologies Used

- **Next.js 16** – React framework for production
- **React 18** – Frontend library
- **Tailwind CSS 3** – Utility-first styling
- **Framer Motion** – Animations
- **TypeScript** – Typed JavaScript
- **Jest & Testing Library** – Unit testing
- **ESLint & Prettier** – Code linting and formatting

---

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/vincentius-grerry/mastavt-landing.git
cd mastavt-landing
```

2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
🚀 Open http://localhost:3000 to view in the browser.
```

---

## 🏗️ Build for Production
```bash
npm run build
npm start
```

---

## 🧪 Testing
```bash
npm run test
npm run test:coverage
```

---

## 🖥️ Deployment
This project is deployed on Vercel.
You can deploy your own version by linking your GitHub repo to Vercel and following the standard Next.js deployment steps.

---

## 🧩 Folder Structure
```sh
/
│
├── app/                        # Next.js App Router: Defines routes and global layouts
│ ├── layout.tsx                # Main entry point for HTML/Body; wraps all pages
│ └── page.tsx                  # The homepage (Root route '/')
│
├── components/                 # Main building blocks (high-level UI sections)
│ ├── Background.tsx            # Global or section-specific background visuals
│ ├── Footer.tsx                # Main Footer wrapper
│ ├── Hero.tsx                  # Top-of-page introductory section
│ ├── InfoCard.tsx              # Reusable card for displaying data/features
│ ├── Navbar.tsx                # Navigation menu
│ ├── Portfolio.tsx             # Project showcase section
│ ├── Section.tsx               # Reusable container for vertical page sections
│ ├── Services.tsx              # List of services offered
│ ├── SubscribeCTA.tsx          # Call-to-action section for newsletters
│ └── Testimoni.tsx             # Social proof/Testimonial section wrapper
│
├── contents/                   # Sub-components and granular UI pieces
│ ├── footer/                   # Specific fragments for the Footer
│ |  ├── FooterContent.tsx      # Links and descriptive text
│ |  └── FooterCopyright.tsx    # Legal and year information
│ ├── hero/
│ |  └── HeroOneButton.tsx      # Specialized Hero variant with a single CTA
│ ├── subscribeCTA/
│ |  ├── ContainerCTA.tsx       # Layout wrapper for the CTA
│ |  └── NewsletterCTA.tsx      # The actual input form logic
│ └── testimoni/
│    └── TestimonialCard.tsx    # Individual review items
│
├── styles/                     # Global styling
│ └── globals.css               # Tailwind directives and site-wide CSS
│
├── utils/                      # Helper functions and configuration
│ ├── AppConfig.ts              # Static site metadata (Site name, description)
│ └── TextRotator.tsx           # Logical helper for cycling text animations
│
├── tests/                      # Testing suite
│ └── githubService.test.ts     # Jest tests for business logic/APIs
│
├── .eslintignore               # Files for ESLint to skip
├── .eslintrc.js                # Linting rules for code quality
├── .prettierrc                 # Code formatting rules
├── .stylelintrc                # CSS-specific linting rules
├── eslint.config.js            # Flat config for ESLint (v9+)
├── jest.config.ts              # Jest test runner configuration
├── jest.setup.ts               # Setup file for test environment (mocks, etc.)
├── next-env.d.ts               # TypeScript types for Next.js
├── next.config.js              # Next.js framework settings
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS config (usually for Tailwind)
├── README.md                   # Project documentation
├── tailwind.config.js          # Tailwind CSS theme and plugin settings
├── tsconfig.eslint.json        # TS config specifically for the linter
└── tsconfig.json               # Main TypeScript configuration
```

---

## 🧪 Testing

This project uses **Jest** and **React Testing Library** to ensure UI stability and component reliability.

### 🏃 How to Run Tests
| Command | Description |
| :--- | :--- |
| `npm run test` | Runs all unit tests |
| `npm run test:watch` | Runs tests in interactive watch mode |
| `npm run test:coverage` | Generates a coverage report |

### 🛠️ How it Works
- **ts-jest**: Used as the transformer to allow Jest to understand TypeScript and JSX.
- **JSDOM**: Provides a browser-like environment so we can test components without a real browser.
- **Mocks**: Next.js features (like `next/image` and `next/link`) and CSS files are mocked using `identity-obj-proxy` to ensure tests run fast and don't crash on non-JS imports.
- **Pattern**: We follow the **Arrange-Act-Assert** pattern to verify that titles, descriptions, and interactive elements (like buttons) render correctly based on our `AppConfig`.

### 📖 Example: Running a Specific Test
If you only want to verify the Portfolio component without running every test in the project, use:
```bash
npx jest layout.test
```

### 📊 Example: Testing Coverage Output
When you run npm run test:coverage, Jest will generate a table in your terminal like this:
| File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
|-------------------|---------|----------|---------|---------|-------------------|
| All files         |   92.5  |    85.3  |   100   |   92.5  |                   |
|  components/      |   100   |    100   |   100   |   100   |                   |
|   InfoCard.tsx    |   100   |    100   |   100   |   100   |                   |
|   layout.test     |   100   |    100   |   100   |   100   |                   |
|  utils/           |   85.0  |    70.0  |   100   |   85.0  | 12-15             |

### 💡 Why this is helpful:
1. **Efficiency**: New users might not know they can run a single file. Running `npx jest [filename]` saves them time.
2. **Visual Goal**: Showing the **Coverage Table** gives the user a "goal" to reach 100% coverage.
3. **Debugging**: It helps them identify which lines of code (like lines 12-15 in the example) are not yet tested.

### 🛠️ Final check for your `package.json`
To make sure those commands work as described in your README, ensure your `scripts` section looks like this:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

---

## 📦 Built With
   - ⚡ Next.js 16      : [https://nextjs.org/](https://nextjs.org/)
   - ⚛️ React 18        : [https://reactjs.org/](https://reactjs.org/)
   - 🟦 TypeScript      : [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
   - 🎨 MUI Components  : [https://mui.com/](https://mui.com/)
   - 🌬️ Tailwind CSS    : [https://tailwindcss.com/](https://tailwindcss.com/)
   - 🧪 Jest            : [https://jestjs.io/](https://jestjs.io/)
   - 🔧 Testing Library : [https://testing-library.com/](https://testing-library.com/)

---

## 🧑‍💻 Author
   - 🌐 GitHub      : https://github.com/vincentius-grerry/
   - 📧 Email:      : vincentius.grerry@gmail.com


