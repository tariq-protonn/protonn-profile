import ReactDOM from 'react-dom'
import Button from '../button/button'
import firebaseClient from '../../authentication/firebaseClient'
import firebase from 'firebase'
import styles from './login.module.scss'
import { useRouter } from 'next/router';
import nookies from 'nookies';
const Login = ({ onCancel }) => {
    const router = useRouter();
    firebaseClient();
    const handleFormSubmit = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                nookies.set(undefined, 'token', result.credential.idToken, {})
                nookies.set(undefined, 'user', JSON.stringify(result.user), {})
                onCancel();
                router.reload();
            }).catch((error) => {
                console.log(error)
            });
    }
    const Backdrop = ({ onCancel }) => {
        return <div onClick={onCancel} className={styles.backdrop}></div>;
    }
    const Overlay = ({ onCancel }) => {
        return <div className={styles.login}>
            <div className={styles.cancel}>
                <img onClick={onCancel} src='/cancel.png' width={15} height={15} />
            </div>
            <h2>Login / Sign up</h2>
            <p>To continue, you must log in or sign up</p>
            <Button className={styles.loginButton} type='submit' onClick={handleFormSubmit}>
                <div className={styles.logo}>
                    <img src='/googleLogo.svg' width={20} height={20} />
                </div>
                <span>Sign in with Google</span>
            </Button>
            <p className={styles.footer}>
                By signing up or logging in you agree to our Terms of service and Privacy Policy
            </p>
        </div>
    }
    return (<>
        {ReactDOM.createPortal(<Backdrop onCancel={onCancel} />, document.getElementById('__next'))}
        {ReactDOM.createPortal(<Overlay onCancel={onCancel} />, document.getElementById('__next'))}

    </>)
}

export default Login;