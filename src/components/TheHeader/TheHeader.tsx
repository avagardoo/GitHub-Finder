import {ThemeSwitcher} from "../ThemeSwither";

import styles from '../TheHeader/TheHeader.module.scss';


export const TheHeader = () => (
    <div className={styles.header}>
        <div className={styles.logo}>
            devfinder
        </div>
        <ThemeSwitcher />
    </div>
);
