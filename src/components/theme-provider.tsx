import * as NextThemes from "next-themes";

export function ThemeProvider({ children, ...props }: NextThemes.ThemeProviderProps) {
    return <NextThemes.ThemeProvider {...props}>{children}</NextThemes.ThemeProvider>;
}
