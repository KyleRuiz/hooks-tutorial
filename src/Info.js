import React, { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  useEffect(() => {
    console.log("Effect");
    console.log(name);
    return () => {
      console.log("clean up");
      console.log(name);
    };
  }, [name]);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
      </div>
      <b>닉네임:</b> {nickname}
    </div>
  );
};

export default Info;
