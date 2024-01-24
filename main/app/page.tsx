"use client";

import * as React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, PaletteMode } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { RefinerSnackbar } from "@/components/RefinerSnackbar";
import { Editor } from "@/components/Editor";
import { RefinedArea } from "@/components/RefinedArea";
import { useHotkeys } from "react-hotkeys-hook";
import { useRefine } from "./hooks/useRefine";
import { useCopyRefinedContent } from "./hooks/useCopyRefinedContent";
import { useToggleDiff } from "./hooks/useToggleDiff";
import type { Options } from "react-hotkeys-hook/dist/types";
import { Header } from "@/components/Header";
import { InstructionSelector } from "@/components/InstructionSelector";
import { InstructionsToolbar } from "@/components/InstructionsToolbar";

function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const toggleMode = () => {
    setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        onClick={toggleMode}
        sx={{
          position: 'fixed',
          zIndex: 999,
          top: 16,
          right: 16,
          borderRadius: '50%',
          backgroundColor: mode === 'light' ? '#f5f5f5' : '#2c2c2e',
          color: mode === 'light' ? '#1c1c1e' : '#f5f5f5',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          '&:hover': {
            backgroundColor: mode === 'light' ? '#e0e0e0' : '#3a3a3c',
            boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
          },
          '&:active': {
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>


      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: 1,
            md: 2,
          },
        }}
      >
        <Header>
          <InstructionSelector />
          <InstructionsToolbar />
        </Header>
        <Stack
          spacing={{
            xs: 1,
            md: 2,
          }}
          direction={{
            xs: "column",
            md: "row",
          }}
          sx={{
            flexGrow: 1,
          }}
        >
          <Paper
            sx={{ padding: 2, flexGrow: 1, width: { md: "50%" }, display: "flex" }}
          >
            <Editor />
          </Paper>
          <Paper
            sx={{ padding: 2, flexGrow: 1, width: { md: "50%" }, display: "flex" }}
          >
            <RefinedArea />
          </Paper>
        </Stack>
        <RefinerSnackbar />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
