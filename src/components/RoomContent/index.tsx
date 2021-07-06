import { FormEvent, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { UserInfo } from '../UserInfo';
import { Question } from '../Question';

import { database } from '../../services/firebase';
import { toastError, toastSuccess } from '../../services/toast';

import emptyQuestionsImg from '../../assets/images/empty-questions.svg';

import { useAuth } from '../../hooks/useAuth';
import { QuestionProps } from '../../hooks/useRoom';
import { useModal } from '../../hooks/useModal';

import * as S from './styles';

type RoomContentProps = {
  code: string;
  authorId: string;
  title: string;
  questions: Array<QuestionProps>;
};

export function RoomContent(props: RoomContentProps): JSX.Element {
  const { user } = useAuth();
  const { setIsHidden } = useModal();
  const { code: roomId, authorId, title, questions } = props;

  const [question, setQuestion] = useState('');

  async function handleNewQuestion(event: FormEvent) {
    event.preventDefault();

    if (question.trim() === '') return;

    if (!user) return toastError('Error. User needs to be authenticated.');

    const newQuestion = {
      content: question,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(newQuestion);

    toastSuccess('Question sent successfully.');

    setQuestion('');
  }

  async function handleLogin() {
    setIsHidden(false);
  }

  return (
    <S.ContentWrapper>
      <Toaster />

      <S.RoomTitleWrapper>
        <h1>Sala {title}</h1>
        <span>
          {questions && questions.length > 1
            ? `${questions.length}`
            : `${questions.length}`}
          <p>perguntas</p>
        </span>
      </S.RoomTitleWrapper>

      {user?.id !== authorId && (
        <S.FormWrapper onSubmit={handleNewQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={event => setQuestion(event.target.value)}
            value={question}
          />

          <S.FormFooterWrapper>
            {!user ? (
              <span>
                Para enviar uma pergunta,{' '}
                <button type="button" onClick={handleLogin}>
                  faça seu login.
                </button>
              </span>
            ) : (
              <UserInfo />
            )}

            <S.FormSubmitButtonWrapper type="submit" disabled={!user}>
              Enviar pergunta
            </S.FormSubmitButtonWrapper>
          </S.FormFooterWrapper>
        </S.FormWrapper>
      )}

      {questions.length === 0 && (
        <S.EmptyQuestionWrapper>
          <img src={emptyQuestionsImg} alt="" />
          <strong>Nenhuma pergunta por aqui...</strong>
          <p>Faça seu login e seja a primeira pessoa a fazer uma pergunta!</p>
        </S.EmptyQuestionWrapper>
      )}

      {questions.map(questionData => (
        <Question
          key={questionData.id}
          id={questionData.id}
          content={questionData.content}
          author={{
            avatar: questionData.author.avatar,
            name: questionData.author.name,
          }}
          isAnswered={questionData.isAnswered}
          isHighlighted={questionData.isHighlighted}
          likeId={questionData.likeId}
          likeCount={questionData.likeCount}
          roomAuthorId={authorId}
          roomId={roomId}
          userId={user?.id}
        />
      ))}
    </S.ContentWrapper>
  );
}
