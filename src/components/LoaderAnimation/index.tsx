import { LoadingWrapper } from './styles';

type LoaderAnimationProps = {
  componentDidMount: boolean;
};

export function LoaderAnimation({
  componentDidMount,
}: LoaderAnimationProps): JSX.Element {
  return (
    <LoadingWrapper componentDidMount={componentDidMount}>
      <div />
    </LoadingWrapper>
  );
}
