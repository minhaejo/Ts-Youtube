import React, { FC, memo, useRef, useState } from "react";
import styles from "./video_search.module.css";

interface Props {
  onSearch: (qeury: string) => void;
  onClick: () => void;
}
const VideoSearch: FC<Props> = memo(({ onSearch, onClick }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current !== null) {
      const value = inputRef.current.value;
      onSearch(value);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={onClick}>
        <img className={styles.img} src="/images/logo.png " alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImg} src="/images/search.png" alt="" />
      </button>
    </header>
  );
});

export default VideoSearch;
