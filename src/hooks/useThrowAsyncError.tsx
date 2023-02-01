import {useCallback, useState} from "react";

function useThrowAsyncError() {
    const [,ThrowAsyncError] = useState<null|Error>(null)
    return useCallback( (message:string) =>
        ThrowAsyncError(new Error(message))
    ,[])
}

export {useThrowAsyncError}