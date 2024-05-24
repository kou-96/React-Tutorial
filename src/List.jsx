<<<<<<< HEAD
import { useEffect } from "react";
export const List = ({ langs }) => {
  useEffect(() => {
    console.log("List.js:useEffect");
    return () => {
      console.log("List.js:useEffect:unmount");
    };
  });
=======
export const List = ({ langs }) => {
>>>>>>> afd39df188a72d755654ec3c725ea6400ccf78e7
  return (
    <>
      <div>
        {langs.map((lang, index) => {
          return <div key={index}>{lang}</div>;
        })}
      </div>
    </>
  );
};
