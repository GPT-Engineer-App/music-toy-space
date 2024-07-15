import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [code, setCode] = useState('// Write your Mozzi code here');
  const [consoleOutput, setConsoleOutput] = useState('');
  const [status, setStatus] = useState('Stopped');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleStart = () => {
    setStatus('Running');
    setConsoleOutput('Code execution started...');
    // Here you would add the actual code execution logic
  };

  const handleStop = () => {
    setStatus('Stopped');
    setConsoleOutput(prevOutput => prevOutput + '\nCode execution stopped.');
  };

  const handleReset = () => {
    setStatus('Stopped');
    setCode('// Write your Mozzi code here');
    setConsoleOutput('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mozzi Music Toy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Code Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={code}
              onChange={handleCodeChange}
              className="font-mono h-96"
              placeholder="Write your Mozzi code here"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Debugging Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Button onClick={handleStart}>Start</Button>
                <Button onClick={handleStop} variant="secondary">Stop</Button>
                <Button onClick={handleReset} variant="outline">Reset</Button>
              </div>
              <div>
                <p className="font-semibold">Status: <span className="font-normal">{status}</span></p>
              </div>
              <div>
                <p className="font-semibold mb-2">Console Output:</p>
                <Textarea
                  value={consoleOutput}
                  readOnly
                  className="font-mono h-64"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;