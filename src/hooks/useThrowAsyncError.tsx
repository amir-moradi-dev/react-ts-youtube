import { useCallback, useState } from "react";

export type ReturnTypeUseThrowAsyncError = (message: string) => void;

function useThrowAsyncError() {
  const [, ThrowAsyncError] = useState<null | Error>(null);
  return useCallback(
    (message: string) =>
      ThrowAsyncError(() => {
        throw new Error(message);
      }),
    [ThrowAsyncError]
  );
}

export { useThrowAsyncError };
