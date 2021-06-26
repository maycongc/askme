import answerIcon from '../../assets/images/answer.svg';
import checkIcon from '../../assets/images/check.svg';
import deleteIcon from '../../assets/images/delete.svg';
import likeIcon from '../../assets/images/like.svg';

import { useModal } from '../../hooks/useModal';

import { toastError } from '../../services/toast';
import { database } from '../../services/firebase';

import { QuestionProps } from '../../pages/Room';

import './styles.scss';

export function Question(
  props: QuestionProps & {
    userId: string | undefined;
    roomAuthorId: string;
    roomId: string;
  },
): JSX.Element {
  const {
    content,
    author,
    roomAuthorId,
    roomId,
    id: questionId,
    isAnswered,
    isHighlighted,
    userId,
    likeId,
    likeCount,
  } = props;

  const { setIsHidden, setInfo } = useModal();

  async function handleLikeButton() {
    if (userId === undefined)
      return toastError('Error. User needs to be authenticated!');

    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: userId,
      });
    }
  }

  async function handleHighlightButton() {
    if (!isHighlighted) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted: true,
        isAnswered: false,
      });
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted: false,
      });
    }
  }

  async function handleAnswerButton() {
    if (!isAnswered) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: true,
        isHighlighted: false,
      });
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isAnswered: false,
      });
    }
  }

  function handleDeleteButton() {
    setInfo({
      type: 'question',
      ref: `rooms/${roomId}/questions/${questionId}`,
    });
    setIsHidden(false);
  }

  return (
    <article
      className={`${
        (isHighlighted && 'highlighted') || (isAnswered && 'answered')
      }`}
    >
      <p>{content}</p>

      <div className="question-footer">
        <div className="question-user-info">
          <img src={author.avatar} alt="Foto de usuário" />
          <span>{author.name}</span>
        </div>

        <div className="question-actions">
          {userId === roomAuthorId ? (
            <div>
              <button type="button" onClick={handleAnswerButton}>
                <img
                  className={`check ${isAnswered && 'answered'}`}
                  src={checkIcon}
                  alt="Ícone de respondido"
                />
              </button>

              <button type="button" onClick={handleHighlightButton}>
                <img
                  className={`answer ${isHighlighted && 'highlighted'}`}
                  src={answerIcon}
                  alt="Ícone de destacar"
                />
              </button>

              <button type="button" onClick={handleDeleteButton}>
                <img
                  className="delete"
                  src={deleteIcon}
                  alt="Ícone de deletar"
                />
              </button>
            </div>
          ) : (
            <div className="like-content">
              <span>{likeCount > 0 && likeCount}</span>

              {!isAnswered && (
                <button type="button" onClick={() => handleLikeButton()}>
                  <img
                    className={`like ${likeId && 'liked'}`}
                    src={likeIcon}
                    alt="Ícone de deletar"
                  />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
