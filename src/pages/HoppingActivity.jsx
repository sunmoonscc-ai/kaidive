import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const HoppingActivity = () => {
  const { activityId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activityId]);

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-surface-mist">
      <div className="text-center p-8 glass-panel rounded-3xl">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">construction</span>
        <h2 className="text-2xl font-bold text-deep-ocean mb-2">콘텐츠 준비중입니다</h2>
        <p className="text-on-surface-variant">곧 유익한 내용으로 업데이트될 예정입니다.</p>
      </div>
    </div>
  );
};

export default HoppingActivity;
