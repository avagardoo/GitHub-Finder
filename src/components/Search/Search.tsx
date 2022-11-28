import {ReactComponent as SearchIcon} from 'assets/icon-search.svg'
import styles from './Search.module.scss';
import {Button} from "../Button";
import React from "react";

interface SearchProps {
    hasError: boolean,
    onSubmit: (text: string) => void,
}


type FormField = {
    username: HTMLInputElement,
}

export const Search = ({hasError, onSubmit}: SearchProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormField>) => {
        event.preventDefault();
        const text = event.currentTarget.username.value;

        if (text.trim()) {
            onSubmit(text);
            event.currentTarget.reset();
        }
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className={styles.search}>
                <label htmlFor="search" className={styles.label}>
                    <SearchIcon/>
                </label>
                <input
                    type="text"
                    className={styles.textField}
                    id="search"
                    name="username"
                    placeholder="Search Github username..."
                />
                {hasError && (
                    <div className={styles.error}>
                        No Result
                    </div>
                )}
                <Button>Search</Button>
            </div>
        </form>
    );
};
