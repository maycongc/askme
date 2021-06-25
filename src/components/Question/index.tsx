import { useState } from 'react';

import answerIcon from '../../assets/images/answer.svg';
import checkIcon from '../../assets/images/check.svg';
import deleteIcon from '../../assets/images/delete.svg';
import likeIcon from '../../assets/images/like.svg';

import { useModal } from '../../hooks/useModal';
import { database } from '../../services/firebase';

import { QuestionProps } from '../../pages/Room'

import './styles.scss';

export function Question(props: QuestionProps & {
  userId: string | undefined;
  roomAuthorId: string;
  roomId: string;
}){
  const { 
    content,
    author,
    roomAuthorId,
    roomId,
    id,
    isAnswered,
    isHighlighted,
    userId,
    likeId,
    likeCount,
  } = props;

  const { isHidden, setIsHidden, setType } = useModal();

  function handleDeleteButton() {
    setType('question');
    setIsHidden(!isHidden);
  }

  async function handleLikeButton(questionId: string, likeId: string | undefined) {
    if(likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: userId,
      });
    }
  }

  return (
    <article>
      <p>{content}</p>

      <div className="question-footer">
        <div className="question-user-info">
          <img src={author.avatar} alt="Foto de usuário" />
          <span>{author.name}</span>
        </div>

        <div className="question-actions">
          {
            userId === roomAuthorId
            ?
              <div>
                <button>
                  <img className="check" src={checkIcon} alt="Ícone de respondido" />
                </button>

                <button>
                  <img className="answer" src={answerIcon} alt="Ícone de destacar" />
                </button>
                
                <button onClick={handleDeleteButton}>
                  <img className="delete" src={deleteIcon} alt="Ícone de deletar" /> 
                </button>
                
              </div>
            :
              <div className="like-content">
                <span>{likeCount > 0 && likeCount}</span>

                <button onClick={() => handleLikeButton(id, likeId)}>
                  <img className={`like ${likeId && 'liked'}`} src={likeIcon} alt="Ícone de deletar" />
                </button>
              </div>
          }
        </div>
      </div>
    </article>
  );
}