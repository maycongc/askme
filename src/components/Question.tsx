import answerIcon from '../assets/images/answer.svg';
import checkIcon from '../assets/images/check.svg';
import deleteIcon from '../assets/images/delete.svg';
import likeIcon from '../assets/images/like.svg';

import { useModal } from '../hooks/useModal';

import '../styles/question.scss';

type QuestionProps = {
  content: string;
  user: {
    id: string | undefined;
    name: string;
    avatar: string;
  }
  roomAuthorId: string;
}

export function Question(props: QuestionProps){
  const { content, user, roomAuthorId } = props;

  const { isHidden, setIsHidden, setType } = useModal();

  function handleDeleteButton() {
    setType('question');
    setIsHidden(!isHidden)
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
          {
            user.id === roomAuthorId
            ?
              <div>
                <img
                  className="check"
                  src={checkIcon}
                  alt="Ícone de respondido"
                  style={{}}
                />

                <img
                  className="answer"
                  src={answerIcon}
                  alt="Ícone de destacar"
                  style={{}}
                />

                <img 
                  className="delete"
                  src={deleteIcon}
                  alt="Ícone de deletar"
                  style={{}}
                  onClick={handleDeleteButton}
                /> 
              </div>
            :
              <img
                className="like"
                src={likeIcon}
                alt="Ícone de deletar"
              />
          }
        </div>
      </div>
    </article>
  );
}