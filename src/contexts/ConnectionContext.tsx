
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ConnectionContextType {
  isConnected: boolean;
  connectionType: string;
  setIsConnected: (connected: boolean) => void;
  setConnectionType: (type: string) => void;
}

const ConnectionContext = createContext<ConnectionContextType | undefined>(undefined);

export const useConnection = () => {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error('useConnection must be used within a ConnectionProvider');
  }
  return context;
};

interface ConnectionProviderProps {
  children: ReactNode;
}

export const ConnectionProvider: React.FC<ConnectionProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionType, setConnectionType] = useState('');

  return (
    <ConnectionContext.Provider 
      value={{ 
        isConnected, 
        connectionType, 
        setIsConnected, 
        setConnectionType 
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
