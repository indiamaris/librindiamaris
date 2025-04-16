import type { Metadata } from "next";
import "./app.css";
import Navbar from "@/app/components/navbar/navbar";
import { Container, Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Fleur_De_Leah } from "next/font/google";

const fleurDeLeah = Fleur_De_Leah({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Librindiamaris App",
  description: "a simple app to manage your books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
        >
          <Grid
            data-testid="composition-menu"
            gap={5}
            sx={{
              height: "100vh",
              width: "60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Navbar />
          </Grid>
          <Grid
            data-testid="composition-menu"
            gap={5}
            sx={{
              height: "100vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container
              className={"simpleContainer"}
              sx={{
                flexGrow: 1,
                // backgroundColor: "pink",
                width: "100%",
                height: "100vh",
              }}
            >
              {" "}
              <main className="p-5">{children}</main>
            </Container>{" "}
            <footer className={"footerMain"}>©india v-1.0</footer>
          </Grid>
        </Stack>
      </body>
    </html>
  );
}
