'use client'

import {useState, useEffect} from "react"
import {useTheme} from "next-themes"
import {Moon,Sun} from "lucide-react"
import { Button } from "./ui/button";

function ToggleMode() {
    const { theme, setTheme } = useTheme();

     
    const dark = theme === "dark";

  return (
    <Button variant="outline" size="icon"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
    > 
      {dark ? (<Sun className="hover:cursor-pointer hover:text-primary"/> ) : (<Moon className="hover:cursor-pointer hover:text-primary"/>)}
    </Button>
  )
}

export default ToggleMode