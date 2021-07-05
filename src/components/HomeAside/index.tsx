import illustrationImg from '../../assets/images/illustration.svg';

import { AsideWrapper, ContentWrapper } from './styles';

export function HomeAside(): JSX.Element {
  return (
    <AsideWrapper>
      <ContentWrapper>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
        <div>
          <strong>Toda pergunta tem uma resposta.</strong>
          <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
        </div>
      </ContentWrapper>
    </AsideWrapper>
  );
}
