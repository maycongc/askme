import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from '../components/Header'
import { RoomContent } from '../components/RoomContent'
import { DangerousActionModal } from '../components/DangerousActionModal';

import { database } from '../services/firebase'

import { useModal } from '../hooks/useModal'
import { useAuth } from '../hooks/useAuth'

type RoomParams = {
   id: string,
}

type RoomInfoProps = {
  authorId: string;
  title: string;
}

export function Room(){
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { type } = useModal();
  const { user } = useAuth();

  const [roomInfo, setRoomInfo] = useState<RoomInfoProps>({ authorId: '', title: '' });

  useEffect(() => {
    database.ref(`rooms/${roomId}`).once('value', room => {
      const firebaseRoom = room.val();

      const values = {
        authorId: firebaseRoom.authorId,
        title: firebaseRoom.title,
      }
  
      setRoomInfo(values)
    })
  }, [roomId])

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
      
      <Header code={roomId} authorId={roomInfo.authorId} />
      <RoomContent code={roomId} authorId={roomInfo.authorId} title={roomInfo.title} />
    </div>
  );
}