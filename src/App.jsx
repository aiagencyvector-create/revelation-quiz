import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { screens } from './data/screens';
import ProgressBar from './components/ProgressBar';
import SingleSelect from './components/SingleSelect';
import MultiSelect from './components/MultiSelect';
import Editorial from './components/Editorial';
import AudioScreen from './components/AudioScreen';
import Comparison from './components/Comparison';
import Offer from './components/Offer';
import FinalScreen from './components/FinalScreen';
import Completion from './components/Completion';
import FireBackground from './components/FireBackground';
import LandingPage from './components/LandingPage';

function Quiz() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [answers, setAnswers] = useState({});
  const [multiSelected, setMultiSelected] = useState([]);
  const [completed, setCompleted] = useState(false);

  const total = screens.length;
  const screen = screens[currentScreen];

  const goNext = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentScreen < total - 1) {
      setCurrentScreen(prev => prev + 1);
      setMultiSelected([]);
    } else {
      setCompleted(true);
    }
  }, [currentScreen, total]);

  const handleSingleSelect = useCallback((optionIndex) => {
    setAnswers(prev => ({ ...prev, [screen.id]: optionIndex }));
    setTimeout(goNext, 400);
  }, [screen, goNext]);

  const handleMultiToggle = useCallback((optionIndex) => {
    setMultiSelected(prev =>
      prev.includes(optionIndex)
        ? prev.filter(i => i !== optionIndex)
        : [...prev, optionIndex]
    );
  }, []);

  const handleMultiContinue = useCallback(() => {
    setAnswers(prev => ({ ...prev, [screen.id]: multiSelected }));
    goNext();
  }, [screen, multiSelected, goNext]);

  if (completed) {
    return (
      <div className="quiz-app">
        <FireBackground />
        <Completion />
      </div>
    );
  }

  const renderScreen = () => {
    switch (screen.type) {
      case 'single':
        return (
          <SingleSelect
            screen={screen}
            selected={answers[screen.id]}
            onSelect={handleSingleSelect}
          />
        );
      case 'multi':
        return (
          <MultiSelect
            screen={screen}
            selected={multiSelected}
            onToggle={handleMultiToggle}
            onContinue={handleMultiContinue}
          />
        );
      case 'editorial':
        return <Editorial screen={screen} onContinue={goNext} />;
      case 'audio':
        return <AudioScreen screen={screen} onContinue={goNext} />;
      case 'comparison':
        return <Comparison screen={screen} onContinue={goNext} />;
      case 'offer':
        return (
          <Offer
            screen={screen}
            selected={answers[screen.id]}
            onSelect={handleSingleSelect}
          />
        );
      case 'final':
        return (
          <FinalScreen
            screen={screen}
            onSelect={handleSingleSelect}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="quiz-app">
      <FireBackground />
      <ProgressBar current={currentScreen} total={total} />
      {renderScreen()}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;
