import React from "react";
import classnames from 'classnames';

import ChatMessages from "./ChatMessages/ChatMessages";
import ChatCompose from "./ChatCompose/ChatCompose";

import './Chat.scss';

export enum ChatStatus {
  HIDDEN = 'hidden',
  VISIBLE = 'visible',
  PEEK = 'peek'
}

const MESSAGES = [{
  author: 'Jack',
  content: 'Hello, who\'s having a cheesey day then? 🧀',
  sentAt: '2019-10-28T19:00:00'
}, {
  author: 'Chris',
  content: 'Fuck off you ginger',
  sentAt: '2019-10-28T19:10:00'
}, {
  author: 'Chris',
  content: '🧀',
  sentAt: '2019-10-28T19:10:00'
}, {
  author: 'Steve',
  content: 'Anyone seen my pistons?',
  sentAt: '2019-10-28T19:40:00'
}, {
  author: 'Nick',
  content: 'Wait, I\'ll just explain how you\'re supposed to do it...',
  sentAt: '2019-10-28T19:50:00'
}];

interface Props {
  status: ChatStatus;
  setChatStatus(status: ChatStatus): void;
}

const Chat: React.FC<Props> = ({ status, setChatStatus }) => {
  const onTriggerChat = () => {
    setChatStatus(ChatStatus.PEEK);
  };

  const onToggleChat = () => {
    setChatStatus(status === ChatStatus.PEEK ? ChatStatus.VISIBLE : ChatStatus.HIDDEN);
  };

  const onMouseLeave = () => {
    if (status === ChatStatus.PEEK) {
      setChatStatus(ChatStatus.HIDDEN);
    }
  };

  return (
    <>
      <div className='Chat--trigger' onClick={onTriggerChat}>
        {'<'}
      </div>
      <div className={classnames('Chat', status)} onMouseLeave={onMouseLeave}>
        <div className='Chat--header'>
          <div className='Chat--header--title'>Chat</div>
          <div className='Chat--header--toggle' onClick={onToggleChat}>x</div>
        </div>
        <ChatMessages messages={MESSAGES} />
        <ChatCompose />
      </div>
    </>
  )
};

export default Chat;
