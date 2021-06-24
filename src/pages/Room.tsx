import { useParams } from 'react-router-dom'

import { Header } from '../components/Header'
import { RoomContent } from '../components/RoomContent'

type RoomParams = {
   id: string,
}

export function Room(){
  const params = useParams<RoomParams>();
  const roomId = params.id;

  return (
    <div id="page-room">
      <Header code={roomId} />
      <RoomContent code={roomId} />
    </div>
  );
}