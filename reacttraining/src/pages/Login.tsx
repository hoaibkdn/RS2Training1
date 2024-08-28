/** @format */
import { useState, useCallback, useRef } from 'react';
import { Input } from '../components';

const Login = () => {
  const [username, setUsername] = useState(''); // controlled component
  const [password, setPassword] = useState('');
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({
    username: null,
    password: null,
  });
  const usernameRef = useRef<HTMLInputElement>(null); // uncontrolled component
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (event: { preventDefault: any }) => {
      console.log('usernameRef ', usernameRef);
      console.log('passwordRef ', passwordRef);
      event.preventDefault();
      // console.log('username ', username);
      // console.log('password ', password);
      // if (usernameRef.current && passwordRef.current) {
      //   const username = usernameRef.current.value;
      //   const password = passwordRef.current.value;
      //   console.log('username value ', username);
      //   console.log('password value ', password);
      // }

      if (inputRefs.current.username && inputRefs.current.password) {
        const username = inputRefs.current.username.value;
        const password = inputRefs.current.password.value;
        console.log('username value ', username);
        console.log('password value ', password);

        // validate
      }
      console.log('inputRefs ', inputRefs);
    },
    [username, password]
  );

  const handleChangeData = useCallback(
    (value: string, type: string) => {
      if (type === 'password') {
        setPassword(value);
      } else {
        setUsername(value);
      }
    },
    [setPassword]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Username'
        value={username}
        onChange={handleChangeData} // create new arrow function
        ref={(element) => (inputRefs.current.username = element)}
      />
      <Input
        label='Password'
        type='password'
        value={password}
        onChange={handleChangeData}
        // ref={passwordRef}
        ref={(element) => (inputRefs.current.password = element)}
      />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;

// challenge 10:
/**
 * Complete the login form
 * applied useRef form
 * validate form:
 * 1. username is required
 * 2. password is required + length >= 8
 * Display the errors on the form if any
 */
