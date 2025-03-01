import { CodeEditor } from "./components/CodeEditor";
import HomeSection from "./components/Home";

export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <HomeSection onChallengeSelect={(id) => console.log(id)} />
      <CodeEditor
        currentChallenge={undefined}
        onRun={(code) => console.log(code)}
      />
    </div>
  );
}