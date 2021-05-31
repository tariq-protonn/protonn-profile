import Input from '../input/input';
import Textarea from '../textarea/textarea';
import Toggler from '../toggler/toggler';
import styles from './infoForm.module.scss';
import Link from 'next/link';
import { useAuth } from '.../../../authentication/auth';

const InfoForm = () => {
    const user = useAuth().user;
    return (
        <form className={styles.infoForm}>
            <div className={styles.email}>
                <label className={styles.label}>Your Email</label>
                {user && <div>
                    <img src={user.photoURL} />
                    <span>{user.email}</span>
                    <Link className={styles.changeAccount} href='#'>Not you? Click here to change accounts</Link>
                </div>}
            </div>
            <div className={styles.main}>
                <div className={styles.colLeft}>
                    <div className={styles.name}>
                        <label className={styles.label}>Your Name</label>
                        <Input placeholder='Enter your name' />
                    </div>
                    <div className={styles.phone}>
                        <label className={styles.label}>Your Phone Number</label>
                        <Input placeholder='Enter your phone number' />
                    </div>
                    <div className={styles.toggler}>
                        <h5>Receive SMS updates from Protonn</h5>
                        <Toggler type="checkbox" />
                    </div>
                </div>
                <div className={styles.colRight}>
                    <div className={styles.info}>
                        <label className={styles.label}>Information that’ll help me prepare for our session (optional)</label>
                        <Textarea placeholder='Anything that you think will be helpful' />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default InfoForm;