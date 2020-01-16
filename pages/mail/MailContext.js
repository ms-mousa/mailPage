import React from 'react';

const MailContext = React.createContext(null);

export const MailContextProvider = MailContext.Provider;
export const MailContextConsumer = MailContext.Consumer;
export default MailContext;
