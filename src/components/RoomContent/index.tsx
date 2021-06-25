import { FormEvent, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { Button } from '../../components/Button';
import { UserInfo } from '../../components/UserInfo';
import { Question } from '../../components/Question';

import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';
import { toastError, toastSuccess } from '../../services/toast';

import emptyQuestionsImg from '../../assets/images/empty-questions.svg';

import { QuestionProps } from '../../pages/Room';

import './styles.scss';

type RoomContentProps = {
  code: string;
  authorId: string;
  title: string
  questions: Array<QuestionProps>;
}

export function RoomContent(props: RoomContentProps) {
  const { user, signInWithGoogle } = useAuth();
  const { code: roomId, authorId, title, questions } = props;

  const [question, setQuestion] = useState('');

  async function handleNewQuestion(event: FormEvent) {
    event.preventDefault();

    if(question.trim() === '') return;

    if(!user) return toastError('Error. User needs to be authenticated.');

    const newQuestion = {
      content: question,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(newQuestion);

    toastSuccess('Question sent successfully.');

    setQuestion('');
  }

  async function handleLogin() {
    if(!user)
      await signInWithGoogle();
  }

  return (
    <main>
      <Toaster />

      <div className="room-title">
        <h1>Sala {title}</h1>
        <span>
          { questions && questions.length > 1 ? (
            `${questions.length} perguntas`
          ) : (
            `${questions.length} pergunta`
          )}
        </span>
      </div>

      { user?.id !== authorId && (
        <form onSubmit={handleNewQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={event => setQuestion(event.target.value)}
            value={question}
          />

          <div className="form-footer">
            { !user ? (
              <span>
                Para enviar uma pergunta, <button onClick={handleLogin}>faça seu login.</button>
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
      
      { questions.length === 0 && (
        <div className="empty-questions">
          <img src={emptyQuestionsImg} alt="" />
          <strong>
            Nenhuma pergunta por aqui...
          </strong>
          <p>
            Faça seu login e seja a primeira pessoa a fazer uma pergunta!
          </p>
        </div>
      )}

      { questions.map(question => (
        <Question
          key={question.id}
          id={question.id}
          content={question.content}
          author={{ 
            avatar: question.author.avatar,
            name: question.author.name 
          }}
          isAnswered={question.isAnswered}
          isHighlighted={question.isHighlighted}
          likeId={question.likeId}
          likeCount={question.likeCount}
          roomAuthorId={authorId}
          roomId={roomId}
          userId={user?.id}
        />
      ))}
    </main>
  );
}