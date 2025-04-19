import { useState } from "react";

export default function RegisterPage() {
  // Two state items to store the username and mobile number
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  //two state items for username and mobile error messages
  const [usernameError, setUsernameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  // Function to validate the username

  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => {
              const value = e.target.value;
              setUsername(value);
              // Validate username: must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.
              const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
              if (!usernameRegex.test(value)) {
                setUsernameError('Username must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.');
              } else {
                setUsernameError('');
              }
            }}
          />
          {usernameError && <span style={{ color: 'red' }}>{usernameError}</span>}
        </label>
        <label>
          UK Mobile Number:
          <input
            type="tel"
            name="mobile"
            value={mobile}
            onChange={(e) => {
              const value = e.target.value;
              setMobile(value);

              // Validate mobile number: must be a valid UK mobile number format
              const mobileRegex = /^(?:\+44|0)7\d{9}$/;
              if (!mobileRegex.test(value)) {
                setMobileError('Please enter a valid UK mobile number.');
              }
              else {
                setMobileError('');
              }
            }}
          />
          {mobileError && <span style={{ color: 'red' }}>{mobileError}</span>}
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}