import React from 'react';

export const Message = ({ author, text }) => {
    return (
        <div className={author == 'Robot' ? 'robotMsg' : 'humanMsg'}>
            <p>{text}</p>
            <p>{author}</p>
        </div>
    );
};