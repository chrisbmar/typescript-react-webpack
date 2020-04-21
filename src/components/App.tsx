import React from "react";

interface AppProps {
  name: string;
}

export const App: React.FC<AppProps> = ({ name }) => <h1>Hello {name}</h1>;
