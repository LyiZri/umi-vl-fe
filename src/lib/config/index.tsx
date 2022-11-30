import logo from "@/assets/logo.svg"
import tailwindConfig from "../../../tailwind.config"
export const config = {
    logo,
    title: "Klick",
    name: "klick",
    theme: tailwindConfig.theme,
}
export const colors = config.theme.extend.colors