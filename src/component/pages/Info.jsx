import axios from "axios";
import { useEffect, useState } from "react";
import "./Info.css";
export const Info = () => {
  const [users, setUsers] = useState("");

  useEffect(() => {
    const dataRetriever = async () => {
      const result = await axios.get(`https://dummyapi.io/data/v1/user/`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "63104c3120f6e665ecf628ba",
        },
      });
      setUsers(result.data);
    };
    dataRetriever();
  }, []);

  console.log(users.data);

  return (
    <div className="infoAav">
      {users?.data?.map((el) => {
        return (
          <div className="infoFather">
            <img className="infoimg" src={el.picture} />
            <div className="infoRight">
              <div className="infoText1">
                <div>id: {el.title}</div>
                <div className="infoLast">
                  Name: {el.firstName}
                  {el.lastName}
                </div>
              </div>
              <div className="infoText2">id: {el.id}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
