import React from "react";
import classnames from 'classnames';
import moment from 'moment';

import './ChatMessages.scss';

interface Props {
  messages: any[];
}

const EMOJI_MATCH = /^(([\uD800-\uDBFF][\uDC00-\uDFFF])+$)/g;

const ChatMessages: React.FC<Props> = ({ messages }) => {
  return (
    <div className='Chat--messages'>
      {messages.map((message, index) => {
          const date = moment(message.sentAt);

          return (
            <div key={index}
                 className={classnames('Chat--messages--message', { isEmoji: EMOJI_MATCH.test(message.content) })}>
              <div className='Chat--messages--message--title'>
                <div className='Chat--messages--message--author'>{message.author}</div>
                <div className='Chat--messages--message--sentAt'> - {date.format('HH:mm')}</div>
              </div>
              <div className='Chat--messages--message--content'>{message.content}</div>
            </div>
          )
        }
      )}
    </div>
  )
};

export default ChatMessages;
