import { useState } from 'react';

interface IInputData {
  email: string;
  password: string;
}

const Login = () => {
  const [inputData, setInputData] = useState();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData((prevState: any) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(inputData);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type={'email'} name="email" onChange={changeHandler} />
      <input type={'password'} name="password" onChange={changeHandler} />
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default Login;
