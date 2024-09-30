
// 'use client'



// import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// // Define the shape of the context value
// interface ThemeContextType {
//     isDarkMode: boolean;
//     toggleTheme: () => void;
//   }
  
//   // Create a context with an undefined default value
//   const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
  
//   // Create a provider component
//   interface ThemeProviderProps {
//     children: ReactNode;
//     defaultTheme?: 'light' | 'dark';
//   }
  
//   export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, defaultTheme = 'light' }) => {
//     const [isDarkMode, setIsDarkMode] = useState(defaultTheme === 'dark');
  
//     // Load the saved theme from localStorage or default to the provided defaultTheme
//     useEffect(() => {
//       const savedTheme = localStorage.getItem('theme');
//       if (savedTheme) {
//         setIsDarkMode(savedTheme === 'dark');
//         document.body.classList.toggle('dark-theme', savedTheme === 'dark');
//         document.body.classList.toggle('light-theme', savedTheme === 'light');
//       } else {
//         // Apply the default theme if no theme is saved
//         document.body.classList.toggle('dark-theme', defaultTheme === 'dark');
//         document.body.classList.toggle('light-theme', defaultTheme === 'light');
//       }
//     }, [defaultTheme]);
  
//     // Toggle the theme and save it to localStorage
//     const toggleTheme = () => {
//       setIsDarkMode(prevMode => {
//         const newMode = !prevMode;
//         localStorage.setItem('theme', newMode ? 'dark' : 'light');
//         document.body.classList.toggle('dark-theme', newMode);
//         document.body.classList.toggle('light-theme', !newMode);
//         return newMode;
//       });
//     };
  
//     return (
//       <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
//         {children}
//       </ThemeContext.Provider>
//     );
//   };
  
//   // Custom hook to use the theme context
//   export const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (context === undefined) {
//       throw new Error('useTheme must be used within a ThemeProvider');
//     }
//     return context;
//   };
  