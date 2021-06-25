import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { RoomHeader } from '../../components/RoomHeader'
import { RoomContent } from '../../components/RoomContent'
import { DangerousActionModal } from '../../components/DangerousActionModal';

import { database } from '../../services/firebase'

import { useModal } from '../../hooks/useModal'
import { useAuth } from '../../hooks/useAuth'

type RoomParams = {
   id: string,
}

type RoomInfoProps = {
  authorId: string;
  title: string;
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

export type QuestionProps = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isHighlighted: boolean;
  isAnswered: boolean;
}

export function Room(){
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { type } = useModal();
  const { user } = useAuth();

  const [questions, setQuestions] = useState<Array<QuestionProps>>([]);
  const [roomInfo, setRoomInfo] = useState<RoomInfoProps>({ authorId: '', title: '' });

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

      setRoomInfo({
        authorId: databaseRoom.authorId,
        title: databaseRoom.title,
      })
      setQuestions(parsedQuestions);
    })
  }, [roomId]);

  return (
    <div id="page-room">

      {
        roomInfo.authorId === user?.id
          &&
          <DangerousActionModal
            type={type}
            handleModalAction={() => {}}
          />
      }
      
      <RoomHeader code={roomId} authorId={roomInfo.authorId} />
      <RoomContent
        code={roomId}
        authorId={roomInfo.authorId}
        title={roomInfo.title}
        questions={questions}
      />
    </div>
  );
}