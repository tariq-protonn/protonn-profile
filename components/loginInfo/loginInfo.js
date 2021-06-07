import styles from './loginInfo.module.scss'
import firebaseClient from '../../authentication/firebaseClient'
import firebase from 'firebase';
import { useRouter } from 'next/router';

const LoginInfo = ({ data }) => {
    const router = useRouter();
    const { name, pictureUrl, customUrl } = data;
    const logOut = () => {
        firebaseClient();
        firebase.auth().signOut().then((result) => {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            router.push(`/${customUrl}`)
        }).catch((error) => {

        });

    }
    return (<div className={styles.loginInfo}>
        <div className={styles.info}>
            <div>Hello, {name}</div>
            <div onClick={logOut} className={styles.logout}>Log Out</div>
        </div>
        <div className={styles.picture}>
            <img src={pictureUrl} width={40} height={40} />
        </div>
    </div>
    )
}

export default LoginInfo;