import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { RoomHeader } from '../../components/RoomHeader';
import { RoomContent } from '../../components/RoomContent';
import { DangerousActionModal } from '../../components/DangerousActionModal';

import { database } from '../../services/firebase';
import { toastError } from '../../services/toast';

import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';

type RoomParams = {
  id: string;
};

type RoomInfoProps = {
  authorId: string;
  title: string;
};

type FirebaseQuestionsProps = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

export type QuestionProps = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isHighlighted: boolean;
  isAnswered: boolean;
  likeCount: number;
  likeId: string | undefined;
};

export function Room(): JSX.Element {
  const { info, setRefPath } = useModal();
  const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const [questions, setQuestions] = useState<Array<QuestionProps>>([]);
  const [roomInfo, setRoomInfo] = useState<RoomInfoProps>({
    authorId: '',
    title: '',
  });

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.once('value', room => {
      if (room.val() === null) {
        toastError('Error. Room does not exists.');
        history.push('/');
      }
    });

    roomRef.on('value', room => {
      const databaseRoom = room.val();

      if (databaseRoom === null) return;

      const firebaseQuestions: FirebaseQuestionsProps =
        databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
            likeCount: Object.values(value.likes ?? {}).length,
            likeId: Object.entries(value.likes ?? {}).find(
              ([likeKey, like]) => like.authorId === user?.id,
            )?.[0],
          };
        },
      );

      setRoomInfo({
        authorId: databaseRoom.authorId,
        title: databaseRoom.title,
      });
      setQuestions(parsedQuestions);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id, history]);

  function handleModalAction() {
    setRefPath(info.ref);
  }

  return (
    <div id="page-room">
      {roomInfo.authorId === user?.id && (
        <DangerousActionModal
          buttonConfirm={
            <button
              type="button"
              onClick={handleModalAction}
              className="btn-confirm"
            >
              {info.type === 'room' ? 'Sim, encerrar' : 'Sim, excluir'}
            </button>
          }
        />
      )}

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
