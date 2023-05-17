# Cleint-intialize

1. npm create vite@latest name-of-your-project -- --template react
2. cd project
3. npm install react-router-dom localforage match-sorter sort-by

# Tailwind Install
1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init -p
3. npm i daisyui
4. tailwind.config.js
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
plugins: [require("daisyui")],
```
4. index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. Theme index.html
``` <html data-theme="light" lang="en">```
# EsLint
1. ```  env: { browser: true, es2020: true, node: true },```

# React-Router
in main.jsx
```
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
```

```
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
```


```
<RouterProvider router={router} />
```
