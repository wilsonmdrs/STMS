import React from "react";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyle from "./styles/global";
import { defaultTheme } from "./styles/Themes/default";
import { Header } from "./components/Header";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { LeftPanel } from "./components/LeftPanel";
import { ActionType, RightPanel } from "./components/RightPanel";
import { ToastContainer } from "react-toastify";
import { DataProvider, useData } from "./hooks/useData";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const dataMethods = useData({
    defaultValues: {
      searchTerm: "",
      page: 1,
      modal:{
        open: false,
        action: ActionType.none,
        tag: { label: "" },
      }
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ThemeProvider theme={defaultTheme}>
          <DataProvider {...dataMethods}>
            <Header />
            <Container height="85vh" padding="0" margin="0">
              <LeftPanel />
              <RightPanel />
            </Container>
            <Footer />
            <ToastContainer />
          </DataProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
