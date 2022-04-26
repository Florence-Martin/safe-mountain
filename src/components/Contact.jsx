import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [email, setEmail] = useState("");
  const postData = () => {
    console.log(userFirstName);
    console.log(userLastName);
    console.log(userMessage);
    console.log(email);
  };
  // const [age, setAge] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  // const handleSubmit =
  //   ('onSubmit',
  //   (e) => {
  //     e.preventDefault();
  //   },
  //   false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {}, []);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="text-4xl pb-6 ">Contactez-nous</p>
        <p className="px-4 text-justify">
          Merci de compléter le formulaire suivant pour nous contacter.
        </p>
        <div className="form-group pt-4">
          <label htmlFor="userfirstname">
            Prénom
            <input
              type="text"
              name="userfirstname"
              onChange={(e) => setUserFirstName(e.target.value)}
              value={userFirstName}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="userlastname">
            Nom
            <input
              type="text"
              name="userlastname"
              onChange={(e) => setUserLastName(e.target.value)}
              value={userLastName}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              maxlen
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="usermessage">
            Message
            <textarea
              type="text"
              name="usermessage"
              onChange={(e) => setUserMessage(e.target.value)}
              value={userMessage}
              maxLength="200"
              className="form-control"
              required
            />
          </label>
        </div>
        {/* <div className="form-group">
          <label htmlFor="age">
            Age
            <input
              type="number"
              name="age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              className="form-control"
            />
          </label>
        </div> */}

        {/* <div className="form-group">
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className="form-control"
            />
          </label>
        </div> */}
        <button
          className="bg-blue-500"
          onClick={postData}
          type="submit"
          value="onSubmit"
        >
          Envoyer
        </button>
      </form>
    </>
  );
};

export default Contact;
