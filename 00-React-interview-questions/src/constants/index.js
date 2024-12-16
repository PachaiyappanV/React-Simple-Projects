export const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers.",
  },
  {
    id: 2,
    title: "What is Tailwind CSS?",
    content:
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes for building custom designs without writing custom CSS.",
  },
  {
    id: 3,
    title: "Why use React and Tailwind CSS together?",
    content:
      "React's component-based architecture and Tailwind's utility-first approach make it easy to create reusable and responsive components quickly.",
  },
  {
    id: 4,
    title: "What is JSX?",
    content:
      "JSX stands for JavaScript XML. It allows developers to write HTML-like syntax directly within JavaScript, making code more readable and maintainable.",
  },
  {
    id: 5,
    title: "What is the Virtual DOM?",
    content:
      "The Virtual DOM is a lightweight representation of the real DOM. React uses it to efficiently update the UI by minimizing direct DOM manipulations.",
  },
  {
    id: 6,
    title: "How does Tailwind improve developer productivity?",
    content:
      "Tailwind provides utility classes that eliminate the need for writing custom CSS. This leads to faster development and a more consistent design.",
  },
  {
    id: 7,
    title: "What are React Hooks?",
    content:
      "React Hooks are functions like `useState` and `useEffect` that let developers use state and lifecycle methods in functional components.",
  },
  {
    id: 8,
    title: "What are utility classes in Tailwind?",
    content:
      "Utility classes in Tailwind are single-purpose classes that apply specific styles, like `bg-blue-500` for background color or `text-xl` for font size.",
  },
  {
    id: 9,
    title: "What is the difference between state and props in React?",
    content:
      "State is used to manage data within a component, while props are used to pass data from parent to child components.",
  },
  {
    id: 10,
    title: "How can I customize Tailwind CSS?",
    content:
      "You can customize Tailwind by editing the `tailwind.config.js` file, where you can add custom colors, spacing, and other design tokens.",
  },
];

export const images = ["a.png", "b.jpg", "c.png", "d.png"];

export const menuItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: "Random data",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const tabs = [
  { id: 1, label: "Home", content: "Welcome to the home tab!" },
  { id: 2, label: "Profile", content: "This is your profile section." },
  { id: 3, label: "Settings", content: "Adjust your preferences here." },
];
