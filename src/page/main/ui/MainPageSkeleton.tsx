import s from './MainPage.module.scss';

interface IProps{
    className?: string;
}

export const MainPageSkeleton = (props: IProps) => {
    const { className } = props;

    return (
        <div>
            <h1>Skeleton</h1>
        </div>
    );
};
