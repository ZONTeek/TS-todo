import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useHistory();
  return (
    <React.Fragment>
      <h1>Информация</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores
        soluta exercitationem deleniti nulla officiis vero itaque qui velit
        ipsum.
      </p>
      <button className={"btn"} onClick={()=> history.push("/")}>To todos</button>
    </React.Fragment>
  );
};
