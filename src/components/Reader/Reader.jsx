import { useEffect, useState } from 'react';
import { Progress } from './Progress';
import { Article } from './Article';
import { Controls } from './Controls';

export const Reader = ({ items }) => {
  const [selectedIdx, setSelectedIdx] = useState(() => {
    const savedIdx = window.localStorage.getItem('article-idx');

    if (savedIdx !== null) {
      return JSON.parse(savedIdx);
    }
    return 0;
  });

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  useEffect(() => {
    window.localStorage.setItem('article-idx', selectedIdx);
  }, [selectedIdx]);

  const selectedArticle = items[selectedIdx];
  const isPrevDisabled = selectedIdx === 0;
  const isNextDisabled = selectedIdx === items.length - 1;

  return (
    <div>
      <header>
        <h1>Reader. selectedIdx {selectedIdx}</h1>
        <Controls
          onPrev={handlePrev}
          onNext={handleNext}
          isPrevDisabled={isPrevDisabled}
          isNextDisabled={isNextDisabled}
        />
        <Progress current={selectedIdx + 1} total={items.length} />
      </header>
      <Article article={selectedArticle} />
    </div>
  );
};
