import answerIcon from '../assets/images/answer.svg';
import checkIcon from '../assets/images/check.svg';
import deleteIcon from '../assets/images/delete.svg';
import likeIcon from '../assets/images/like.svg';

import '../styles/question.scss';

type QuestionProps = {
  content: string,
  user: {
    name: string,
    avatar: string,
  }
}

export function Question(props: QuestionProps){
  const { content, user } = props;

  const hide = {
    display: 'none'
  }

  return (
    <article>
      <p>{content}</p>

      <div className="question-footer">
        <div className="question-user-info">
          <img src={user.avatar} alt="Foto de usuário" />
          <span>{user.name}</span>
        </div>

        <div className="question-actions">
          <img className="check" src={checkIcon} alt="Ícone de respondido" style={{}} />
          <img className="answer" src={answerIcon} alt="Ícone de destacar" style={{}} />
          <img className="delete" src={deleteIcon} alt="Ícone de deletar" style={{}} />
          <img className="like" src={likeIcon} alt="Ícone de deletar" style={hide} />
        </div>
      </div>
    </article>
  );
}