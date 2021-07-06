import { useParams } from 'react-router-dom';

import { RoomHeader } from '../../components/RoomHeader';
import { RoomContent } from '../../components/RoomContent';
import { DangerousActionModal } from '../../components/Modal/DangerousActionModal';
import { ModalLogin } from '../../components/Modal/ModalLogin';
import { ThemeSwitchButton } from '../../components/ThemeSwitchButton';
import { LoaderAnimation } from '../../components/LoaderAnimation';

import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';
import { useRoom } from '../../hooks/useRoom';

import { RoomWrapper } from './styles';

type RoomParams = {
  id: string;
};

export function Room(): JSX.Element {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { info, setRefPath } = useModal();
  const { user } = useAuth();
  const { questions, roomInfo, componentDidMount } = useRoom(roomId);

  function handleModalAction() {
    setRefPath(info.ref);
  }

  return (
    <>
      {!componentDidMount ? (
        <LoaderAnimation componentDidMount={componentDidMount} />
      ) : (
        <RoomWrapper>
          <ThemeSwitchButton />

          {!user && <ModalLogin />}

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
        </RoomWrapper>
      )}
    </>
  );
}
