import React, { useState, useEffect } from 'react';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useAtom } from "jotai";
import { resultAtom, showDiffAtom, animatedresultAtom } from "@/app/atoms";
import ToggleButton from "@mui/material/ToggleButton";
import CompareOutlinedIcon from "@mui/icons-material/CompareOutlined";
import { HotkeyHint } from "./HotkeyHint";
import { ClipboardCopy } from "@/components/ClipboardCopy";

interface ElementProps {
  insertContent?: string;
  deleteContent?: string;
}

interface Element {
  key: string;
  ref: any; // Replace 'any' with a more specific type if possible
  props: ElementProps;
  _owner: any; // Replace 'any' with a more specific type if possible
  _store: any; // Replace 'any' with a more specific type if possible
}

export function RefinedArea() {
  const [showDiff, setShowDiff] = useAtom(showDiffAtom);
  const [result] = useAtom(resultAtom);
  const [animatedResult, setAnimatedResult] = useState('');
  

  useEffect(() => {
    let fullText = '';
  
    if (Array.isArray(result)) {
      // Concatenate `insertContent` and/or `deleteContent` from each element
      fullText = result.map(element => {
        return element.props.insertContent || element.props.deleteContent || '';
      }).join('');
    } else {
      console.error('Result is not an array of objects:', result);
      return;
    }
  
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setAnimatedResult(current => current + fullText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 3.5); 
  
    return () => clearInterval(timer);
  }, [result]);

  return (
    <Stack spacing={2} direction="column" flexGrow={1}>
    <Box
      sx={{
        whiteSpace: "pre-wrap",
        textAlign: "left",
        flexGrow: 1,
      }}
    >
      {showDiff ? result : animatedResult}
    </Box>
      <Stack spacing={2} direction="row">
        {result.length > 0 && (
          <>
            <ClipboardCopy />
            <ToggleButton
              size="small"
              value="check"
              selected={showDiff}
              onChange={() => {
                setShowDiff(!showDiff);
              }}
            >
              <CompareOutlinedIcon />
              {showDiff ? "Hide" : "Show"} diff
              <HotkeyHint hotkey="mod+shift+d" />
            </ToggleButton>
          </>
        )}
      </Stack>
    </Stack>
  )
}  