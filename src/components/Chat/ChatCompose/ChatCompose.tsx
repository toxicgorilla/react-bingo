import React, { EventHandler, FormEvent, KeyboardEvent, useState } from "react";

import './ChatCompose.scss';

interface Props {
}

const ChatCompose: React.FC<Props> = () => {
  const [message, setMessage] = useState('');

  const onKeyDown: EventHandler<KeyboardEvent<HTMLTextAreaElement>> = event => {
    if (event.key !== 'Enter' || event.shiftKey) {
      return;
    }

    event.preventDefault();
    send();
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    send();
  };

  const send = () => {
    setMessage('');
  };

  return (
    <div className='Chat--compose'>
      <form onSubmit={onSubmit}>
        <textarea
          onKeyDown={onKeyDown}
          placeholder='Type your message here...'
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
      </form>
    </div>
  )
};

export default ChatCompose;
