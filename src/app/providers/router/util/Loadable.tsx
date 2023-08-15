import { ElementType, ReactNode, Suspense } from 'react';

export const Loadable = (Component: ElementType, fallback: ReactNode) => function fn(props: any) {
    return (
        <Suspense fallback={fallback}>
            <Component {...props} />
        </Suspense>
    );
};
