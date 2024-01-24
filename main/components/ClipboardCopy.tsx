import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { useCopyRefinedContent } from "@/app/hooks/useCopyRefinedContent";
import { HotkeyHint } from "./HotkeyHint";

export function ClipboardCopy() {
  const copyRefinedContent = useCopyRefinedContent();
  return (
    <Button
      size="small"
      variant="outlined"
      onClick={copyRefinedContent}
      startIcon={<ContentCopyIcon />}
    >
      Copy
      <HotkeyHint hotkey="mod+shift+c" />
    </Button>
  );
}