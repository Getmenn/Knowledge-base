import { useEffect } from 'react';

export const useErrorHandler = (isError: boolean, callback: () => void) => {
    useEffect(() => {
        if (isError) callback();
    }, [callback, isError]);
};
