
// "use client"


// import React from 'react';
// import { useTheme } from '../../../providers/themeContext';

// import {Sun} from "lucide-react";




// const ThemeToggle = () => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   return (
//     <button onClick={toggleTheme}>
//       {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//      <Sun/> 
//     </button>
//   );
// };

// export default ThemeToggle;


// // import { useState, useEffect } from 'react';

// // const ThemeToggle = () => {
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   // Check localStorage or other method to persist theme state
// //   useEffect(() => {
// //     const savedTheme = localStorage.getItem('theme');
// //     if (savedTheme) {
// //       setIsDarkMode(savedTheme === 'dark');
// //       document.body.classList.toggle('dark-theme', savedTheme === 'dark');
// //     }
// //   }, []);

// //   const toggleTheme = () => {
// //     setIsDarkMode(prevMode => {
// //       const newMode = !prevMode;
// //       localStorage.setItem('theme', newMode ? 'dark' : 'light');
// //       document.body.classList.toggle('dark-theme', newMode);
// //       document.body.classList.toggle('light-theme', !newMode);
// //       return newMode;
// //     });
// //   };

// //   return (
// //     <button onClick={toggleTheme}>
// //       {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
// //     </button>
// //   );
// // };

// // export default ThemeToggle;
