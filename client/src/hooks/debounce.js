import { useCallback, useEffect, useState } from "react";

export const useDebouncedCallback = (callback, delay = 500) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  useEffect(() => {
    if (!value) {
      return;
    }

    const timeoutId = setTimeout(() => {
      callback(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [callback, delay, value]);

  return [value, handleChange];
};
