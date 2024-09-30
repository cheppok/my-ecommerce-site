


// 1. Setup Theme State
// You need to manage the theme state, which can be done using React's useState hook. For simplicity, you can use CSS classes to apply the different themes.





// 2. Add Theme Styles
// styles/globals.css
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /* Light Theme */
// body.light-theme {
//     background-color: white;
//     color: black;
//   }
  
//   /* Dark Theme */
//   body.dark-theme {
//     background-color: black;
//     color: white;
//   }
  
//   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//   3. Create a Theme Toggle Component
// Create a component that toggles the theme:

// import { useState, useEffect } from 'react';

// const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Check localStorage or other method to persist theme state
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === 'dark');
//       document.body.classList.toggle('dark-theme', savedTheme === 'dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => {
//       const newMode = !prevMode;
//       localStorage.setItem('theme', newMode ? 'dark' : 'light');
//       document.body.classList.toggle('dark-theme', newMode);
//       document.body.classList.toggle('light-theme', !newMode);
//       return newMode;
//     });
//   };

//   return (
//     <button onClick={toggleTheme}>
//       {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//     </button>
//   );
// };

// export default ThemeToggle;


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 4. Integrate the Toggle Component
// Include the ThemeToggle component in your app, typically in a layout component or your main
// import '../styles/globals.css';
// import ThemeToggle from '../components/ThemeToggle';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <ThemeToggle />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;
