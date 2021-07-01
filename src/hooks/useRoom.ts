import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { database } from '../services/firebase';
import { toastError } from '../services/toast';
import { useAuth } from './useAuth';

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

type RoomInfoProps = {
  authorId: string;
  title: string;
};

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

type useRoomType = {
  questions: QuestionProps[];
  roomInfo: RoomInfoProps;
  componentDidMount: boolean;
};

export function useRoom(roomId: string): useRoomType {
  const history = useHistory();
  const { user } = useAuth();

  const [componentDidMount, setComponentDidMount] = useState(false);
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
              ([, like]) => like.authorId === user?.id,
            )?.[0],
          };
        },
      );

      parsedQuestions.sort((a, b) => b.likeCount - a.likeCount);

      parsedQuestions.sort((a, b) => {
        if (!a.isHighlighted && b.isHighlighted) return 1;
        if (a.isHighlighted && !b.isHighlighted) return -1;
        return 0;
      });

      parsedQuestions.sort((a, b) => {
        if (!a.isAnswered && b.isAnswered) return -1;
        if (a.isAnswered && !b.isAnswered) return 1;
        return 0;
      });

      setRoomInfo({
        authorId: databaseRoom.authorId,
        title: databaseRoom.title,
      });
      setQuestions(parsedQuestions);

      setComponentDidMount(true);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id, history]);

  return { questions, roomInfo, componentDidMount };
}
