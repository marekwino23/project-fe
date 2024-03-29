import React,{ useState } from 'react';

 const Forgot = () => {
 const [email, setEmail] = useState('');

  const onClick = async () => {
    await fetch(`${process.env.REACT_APP_API}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });
  }

    const onChange = ({ target }) => {
      if(target.name === "email") {
        setEmail(target.value);
      }
    }

    return (
    <div>
       <form onSubmit={onClick}>
       <label htmlFor="email">Podaj email: </label>
          <input id="email" className="log" name="email" type="text" onChange={onChange}/>
          <input className="send"type="submit" value="Send link to email"/>
          </form>
    </div>
      )
    }
    export default Forgot;