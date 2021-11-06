import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.900",
        color: "white"
      },
      iframe: {
        width: "100%",
      }
    }
  }
});
