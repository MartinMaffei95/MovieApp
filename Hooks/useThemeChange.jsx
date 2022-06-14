import { useEffect, useState } from "react"

export const useThemeChange =(themeSelected)=>{
    const darkTheme = {
        '--first_color': '#b20808',
        '--base_color': '#1c1c1b',
        '--base_colorTwo' :'#4f4c4c' ,
        '--white_color': '#f2e8e8',
        '--text_color':'#f2e8e8',
    }
    const lightTheme = {
        '--first_color': '#b20808',
        '--base_color': '#fafaf6',
        '--base_colorTwo' :'#4f4c4c' ,
        '--white_color': '#f2e8e8',
        '--text_color':'#1b1a1a'
    }

    const [theme,setTheme] = useState()

    const themeHandler = (themeSelected)=>{
        if( themeSelected === 'lightTheme' ){
            setTheme( lightTheme )
        }else if( themeSelected === 'darkTheme' ){
            setTheme( darkTheme )
        }
}

    useEffect(()=>{
        themeHandler(themeSelected)

    },[themeSelected])

    return[theme]
}