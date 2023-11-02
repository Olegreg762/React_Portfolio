import { useState } from "react";
import { validateEmail } from '../../utils/helpers';
export default function Contact() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setmessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setUserName(inputValue);
      } else {
        setmessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
      } else if (!userName) {
        setErrorMessage('Name is Required');
        return
      } else if (!message) {
        setErrorMessage('Message is Required');
        return
      } else {
        setErrorMessage('');
        return
      }
  
      setUserName('');
      setEmail('');
    };

    return (
        <article>
       <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Your Message"
        />
        <button type="submit">Submit</button>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </form>
        </article>
    )
}