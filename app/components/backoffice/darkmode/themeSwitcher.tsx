// "use client"

// import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"

// // import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// export function ModeToggle() {
//   const { setTheme } = useTheme()

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <button >
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute top-6 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//         </button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div >
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme("light")}
        className={`transition-all ${theme === "light" ? "hidden " : "text-gray-100 bg-transparent border-none hover:bg-slate-800"} `}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Light Mode</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme("dark")}
        className={`transition-all ${theme === "dark" ? "text-gray-800" : "text-gray-900 bg-transparent border-none"} relative dark:hidden`}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Dark Mode</span>
      </Button>
    
    </div>
  )
}
