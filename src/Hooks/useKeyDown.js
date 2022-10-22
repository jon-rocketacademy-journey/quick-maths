import { useState } from "react";
import useEventListener from "@use-it/event-listener";

const useKeyDown = () => {
  const [key, setKey] = useState("");
  useEventListener(
    "keydown",
    ({ altKey, ctrlKey, metaKey, shiftKey, repeat, code, key }) => {
      if (altKey || ctrlKey || metaKey || shiftKey) {
        return;
      }
      setKey(key);
    },
    window,
    { passive: true }
  );
  return [key, setKey];
};

export default useKeyDown;
