
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ConnectionContextType {
  isConnected: boolean;
  connectionType: string;
  terminalHistory: string[];
  logEntries: string[];
  setIsConnected: (connected: boolean) => void;
  setConnectionType: (type: string) => void;
  addTerminalEntry: (entry: string) => void;
  addLogEntry: (entry: string) => void;
  clearTerminal: () => void;
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
  const [isConnected, setIsConnectedState] = useState(false);
  const [connectionType, setConnectionType] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'user@cov-system:~$ COV Security System Initialized',
    'user@cov-system:~$ System Status: Ready',
    'user@cov-system:~$ Type "help" for available commands'
  ]);
  const [logEntries, setLogEntries] = useState<string[]>([
    '[2024-06-28 16:30:12] COV System started',
    '[2024-06-28 16:30:15] Network interface initialized',
    '[2024-06-28 16:30:18] Security protocols loaded',
    '[2024-06-28 16:30:20] System ready for connections'
  ]);

  const setIsConnected = (connected: boolean) => {
    setIsConnectedState(connected);
    const timestamp = new Date().toLocaleString();
    const logMessage = `[${timestamp}] Connection ${connected ? 'established' : 'terminated'} via ${connectionType}`;
    addLogEntry(logMessage);
  };

  const addTerminalEntry = (entry: string) => {
    setTerminalHistory(prev => [...prev, entry]);
  };

  const addLogEntry = (entry: string) => {
    setLogEntries(prev => [...prev, entry]);
  };

  const clearTerminal = () => {
    setTerminalHistory(['user@cov-system:~$ Terminal cleared']);
  };

  return (
    <ConnectionContext.Provider 
      value={{ 
        isConnected, 
        connectionType, 
        terminalHistory,
        logEntries,
        setIsConnected, 
        setConnectionType,
        addTerminalEntry,
        addLogEntry,
        clearTerminal
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
