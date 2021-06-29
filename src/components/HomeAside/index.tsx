import illustrationImg from '../../assets/images/illustration.svg';

import { Aside } from './styles';

export function HomeAside(): JSX.Element {
  return (
    <Aside>
      <div>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </div>
    </Aside>
  );
}
