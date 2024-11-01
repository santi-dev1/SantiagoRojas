import { defineStore } from "pinia";
import { ThemeState } from "@/models/ThemeState";

export const useThemeStore = defineStore('theme', {
    state: (): ThemeState => ({
        isDark: false,
        mode: 'light',
    }),
    actions:{
        toggleTheme(){
            this.isDark = !this.isDark;
            this.mode = this.isDark? 'dark' : 'light'
        },
    },
});