import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() { 
    return (
        <>
            <h2 id='loop' className ={styles.loop}>Logo</h2>
            <nav>
                <ul>
                    <li>
                        <a href="/club">Clubs</a>
                    </li>
                </ul>
            </nav>
        </>
       
    )
}