import React from "react";

import styles from "./App.scss";

interface AppProps {
  name: string;
}

export const App: React.FC<AppProps> = ({ name }) => (
  <h1 className={styles.heading}>Hello {name}</h1>
);
