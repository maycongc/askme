import { FormEvent, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { Button } from '../Button';
import { UserInfo } from '../UserInfo';
import { Question } from '../Question';

import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';
import { toastError, toastSuccess } from '../../services/toast';

import emptyQuestionsImg from '../../assets/images/empty-questions.svg';

import { QuestionProps } from '../../hooks/useRoom';

import { ContentWrapper } from './styles';
import { useModal } from '../../hooks/useModal';

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
    <ContentWrapper>
      <Toaster />

      <div className="room-title">
        <h1>Sala {title}</h1>
        <span>
          {questions && questions.length > 1
            ? `${questions.length} perguntas`
            : `${questions.length} pergunta`}
        </span>
      </div>

      {user?.id !== authorId && (
        <form onSubmit={handleNewQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={event => setQuestion(event.target.value)}
            value={question}
          />

          <div className="form-footer">
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

            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
      )}

      {questions.length === 0 && (
        <div className="empty-questions">
          <img src={emptyQuestionsImg} alt="" />
          <strong>Nenhuma pergunta por aqui...</strong>
          <p>Faça seu login e seja a primeira pessoa a fazer uma pergunta!</p>
        </div>
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
    </ContentWrapper>
  );
}
