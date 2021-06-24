import { FormEvent, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from '../components/Button';
import { UserInfoBar } from '../components/UserInfoBar';
import { Question } from '../components/Question';

import { useAuth } from '../hooks/useAuth';

import { database } from '../services/firebase';

import '../styles/room-content.scss';

type RoomContentProps = {
  code: string;
  authorId: string;
  title: string
}

type FirebaseQuestionsProps = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isHighlighted: boolean;
  isAnswered: boolean;
}>

type QuestionProps = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isHighlighted: boolean;
  isAnswered: boolean;
}

export function RoomContent(props: RoomContentProps) {
  const { user } = useAuth();
  const { code: roomId, authorId, title } = props;

  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState<Array<QuestionProps>>([]);

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestionsProps = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([ key, value ]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        }
      });

      setQuestions(parsedQuestions);
    })
  }, [roomId]);

  async function handleNewQuestion(event: FormEvent) {
    event.preventDefault();

    if(question.trim() === '') return;
    if(!user) return toast.error('Error! User need to be authenticated.', {
      duration: 3000,
      style: {
        border: '1px solid #eb3636',
        color: '#c92a2a',
        font: "500 15px 'Roboto', sans-serif",
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.35)'
      }
    })

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

    toast.success('Question sent successfully.', {
      duration: 3000,
      style: {
        border: '1px solid #5ac92a',
        color: '#5ac92a',
        font: "500 15px 'Roboto', sans-serif",
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.35)'
      }
    })

    setQuestion('');
  }

  return (
    <main>
      <Toaster />

      <div className="room-title">
        <h1>Sala {title}</h1>
        <span>
          {
            questions && questions.length > 1
              ? `${questions.length} perguntas`
              : `${questions.length} pergunta`
          }
        </span>
      </div>
      {
        user?.id !== authorId
          &&
            <form onSubmit={handleNewQuestion}>
              <textarea
                placeholder="O que você quer perguntar?"
                onChange={event => setQuestion(event.target.value)}
                value={question}
              />
      
              <div className="form-footer">
                {
                !user
                  ? <span>Para enviar uma pergunta, <button>faça seu login.</button></span>
                  : <UserInfoBar />
                }
      
                <Button type="submit" disabled={!user}>
                  Enviar pergunta
                </Button>
              </div>
            </form>
      }
      
      
      { 
        questions.map(question => (
          <Question
            key={question.id}
            content={question.content}
            user={{ 
              id: user?.id,
              avatar: question.author.avatar,
              name: question.author.name 
            }}
            roomAuthorId={authorId}
          />
        )) 
      }
    </main>
  );
}