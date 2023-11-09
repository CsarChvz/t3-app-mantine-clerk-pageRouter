import { type AppType } from "next/app";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { api } from "../utils/api";

import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <ClerkProvider {...pageProps}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>
      <Component {...pageProps} />
      </MantineProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
