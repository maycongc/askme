import { Button } from '../../Button';
import { ModalBackground } from '../Background';

import githubImg from '../../../assets/images/github-mark.svg';
import facebookImg from '../../../assets/images/facebook-mark.svg';
import yahooImg from '../../../assets/images/yahoo-mark.svg';
import googleImg from '../../../assets/images/google-logo.svg';

import { LoginButtonsWrapper, ModalContentWrapper } from './styles';
import { useAuth } from '../../../hooks/useAuth';
import { useModal } from '../../../hooks/useModal';

export const ModalLogin = (): JSX.Element => {
  const { user, signIn } = useAuth();
  const { setIsHidden } = useModal();

  function closeModalButton() {
    setIsHidden(true);
  }

  async function handleLoginButton(signInType: string) {
    if (!user) await signIn(signInType);
    setIsHidden(true);
  }

  return (
    <ModalBackground>
      <ModalContentWrapper>
        <h2>Escolha seu método de login:</h2>

        <LoginButtonsWrapper>
          <Button
            className="google"
            onClick={() => handleLoginButton('google')}
          >
            <img src={googleImg} alt="" /> Google
          </Button>

          <Button
            className="facebook"
            onClick={() => handleLoginButton('facebook')}
          >
            <img src={facebookImg} alt="" /> Facebook
          </Button>

          <Button
            className="github"
            onClick={() => handleLoginButton('github')}
          >
            <img src={githubImg} alt="" /> Github
          </Button>

          <Button className="yahoo" onClick={() => handleLoginButton('yahoo')}>
            <img src={yahooImg} alt="" /> Yahoo
          </Button>
        </LoginButtonsWrapper>

        <Button className="cancel" onClick={closeModalButton}>
          Cancelar
        </Button>
      </ModalContentWrapper>
    </ModalBackground>
  );
};
