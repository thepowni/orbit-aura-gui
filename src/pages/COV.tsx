
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Wifi, Cable, Power, PowerOff, Terminal, FileText, Send } from 'lucide-react';
import { useConnection } from '@/contexts/ConnectionContext';

const COV: React.FC = () => {
  const { 
    isConnected, 
    connectionType, 
    terminalHistory, 
    logEntries,
    setIsConnected, 
    setConnectionType,
    addTerminalEntry,
    clearTerminal
  } = useConnection();
  const [terminalInput, setTerminalInput] = useState('');

  const handleToggle = () => {
    if (!connectionType) {
      alert('Please select a connection type first');
      return;
    }
    setIsConnected(!isConnected);
    
    const newEntry = `user@cov-system:~$ Connection ${!isConnected ? 'established' : 'terminated'} via ${connectionType}`;
    addTerminalEntry(newEntry);
  };

  const handleTerminalSubmit = () => {
    if (!terminalInput.trim()) return;
    
    const newCommand = `user@cov-system:~$ ${terminalInput}`;
    let response = '';
    
    switch (terminalInput.toLowerCase()) {
      case 'help':
        response = 'Available commands: status, clear, connect, disconnect, help';
        break;
      case 'status':
        response = `Status: ${isConnected ? 'Connected' : 'Disconnected'} | Type: ${connectionType || 'None'}`;
        break;
      case 'clear':
        clearTerminal();
        setTerminalInput('');
        return;
      case 'connect':
        if (connectionType) {
          setIsConnected(true);
          response = 'Connection established';
        } else {
          response = 'Error: No connection type selected';
        }
        break;
      case 'disconnect':
        setIsConnected(false);
        response = 'Connection terminated';
        break;
      default:
        response = `Command not found: ${terminalInput}`;
    }
    
    addTerminalEntry(newCommand);
    addTerminalEntry(response);
    setTerminalInput('');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-8">
        <Card className="w-full max-w-md border-2 border-[#8c52ff]/20 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold text-[#8c52ff]">
              Connection Control
            </CardTitle>
            <CardDescription>
              Select connection type and toggle
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Connection Type</label>
              <Select value={connectionType} onValueChange={setConnectionType}>
                <SelectTrigger className="border-[#8c52ff]/30 focus:border-[#8c52ff]">
                  <SelectValue placeholder="Select connection type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wifi">
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4" />
                      WiFi
                    </div>
                  </SelectItem>
                  <SelectItem value="ethernet">
                    <div className="flex items-center gap-2">
                      <Cable className="w-4 h-4" />
                      Ethernet
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center py-4">
              <button
                onClick={handleToggle}
                disabled={!connectionType}
                className={`w-32 h-32 rounded-full border-4 transition-all duration-300 flex items-center justify-center ${
                  !connectionType 
                    ? 'bg-gray-100 border-gray-300 cursor-not-allowed' 
                    : isConnected 
                      ? 'bg-green-500 border-green-600 hover:bg-green-600 shadow-lg' 
                      : 'bg-[#8c52ff] border-[#7a45e6] hover:bg-[#7a45e6] shadow-lg'
                }`}
              >
                {isConnected ? (
                  <Power className="w-12 h-12 text-white" />
                ) : (
                  <PowerOff className="w-12 h-12 text-white" />
                )}
              </button>
            </div>

            <div className="text-center">
              <p className="font-medium text-gray-700">
                Status: {isConnected ? 'Connected' : 'Disconnected'}
              </p>
              {connectionType && (
                <p className="text-sm text-gray-500">
                  Type: {connectionType === 'wifi' ? 'WiFi' : 'Ethernet'}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-[#8c52ff]/20">
        <CardHeader>
          <CardTitle className="text-[#8c52ff]">System Interface</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="terminal" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="terminal" className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Terminal
              </TabsTrigger>
              <TabsTrigger value="logs" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Logs
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="terminal" className="space-y-4">
              <ScrollArea className="h-64 w-full border rounded-md p-4 bg-black text-green-400 font-mono text-sm">
                {terminalHistory.map((line, index) => (
                  <div key={index} className="mb-1">
                    {line}
                  </div>
                ))}
              </ScrollArea>
              <div className="flex gap-2">
                <Input
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTerminalSubmit()}
                  placeholder="Enter command..."
                  className="font-mono"
                />
                <Button onClick={handleTerminalSubmit} size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="logs">
              <ScrollArea className="h-64 w-full border rounded-md p-4 bg-gray-50 font-mono text-sm">
                {logEntries.map((entry, index) => (
                  <div key={index} className="mb-1 text-gray-700">
                    {entry}
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default COV;
