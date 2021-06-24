import illustrationImg from '../assets/images/illustration.svg';

export function HomeAside(){
  return (
    <aside>
      <div>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </div>
    </aside>
  );
}
