/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";


function User({users}) {
  return (
    <>
       <div className="flex">
        {users?.length &&
          users?.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} alt="img"/>
              </div>
            );
          })}
      </div>
     
    </>
  );
}

export default User;
