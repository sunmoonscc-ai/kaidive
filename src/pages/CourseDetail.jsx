import { useParams, Navigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { useEffect } from 'react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData[courseId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    // If the course doesn't exist, we can show a placeholder or redirect
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-surface-mist">
        <div className="text-center p-8 glass-panel rounded-3xl">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">construction</span>
          <h2 className="text-2xl font-bold text-deep-ocean mb-2">콘텐츠 준비중입니다</h2>
          <p className="text-on-surface-variant">곧 유익한 내용으로 업데이트될 예정입니다.</p>
        </div>
      </div>
    );
  }

  const renderHighlightedText = (text, words) => {
    if (!words) return text;
    let renderedText = [text];
    
    words.forEach(({ word, color }) => {
      renderedText = renderedText.flatMap(part => {
        if (typeof part !== 'string') return part;
        const index = part.indexOf(word);
        if (index === -1) return part;
        return [
          part.substring(0, index),
          <span key={word} className={`font-bold ${color || 'text-error'}`}>{word}</span>,
          part.substring(index + word.length)
        ];
      });
    });
    
    return renderedText;
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen relative z-10 bg-white">
      {/* Title Section */}
      <section className="px-gutter mb-12">
        <div className="max-w-4xl mx-auto text-center border-b-2 border-surface-variant pb-8">
          <h1 className="font-display text-2xl md:text-4xl text-error font-bold tracking-tight">
            {course.title}
          </h1>
        </div>
      </section>

      {course.type === 'list' ? (
        <section className="px-gutter">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            {course.items.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 items-center md:items-stretch py-6 border-b border-surface-variant last:border-0">
                {/* Left: Item Image */}
                <div className="w-full md:w-1/3 flex-shrink-0 rounded-2xl overflow-hidden shadow-md bg-surface-container-low relative flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 flex-col items-center justify-center text-on-surface-variant/50 hidden">
                    <span className="material-symbols-outlined text-3xl mb-1">image</span>
                    <span className="font-medium text-xs">public{item.image}</span>
                  </div>
                </div>

                {/* Right: Item Details */}
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <h2 className="text-xl font-bold text-error mb-1">{item.title}</h2>
                  <div className="bg-surface-container-highest text-on-surface font-semibold py-2 px-4 rounded-xl mt-3 mb-5 text-center text-sm md:text-base">
                    {item.subtitle}
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-on-surface font-semibold leading-relaxed whitespace-pre-line">{item.description}</p>
                    <p className="text-error font-medium text-sm mt-2">{item.requirements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <>
          {/* Intro Section (Only for standard type) */}
          <section className="px-gutter mb-16">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          {course.intro.map((line, idx) => (
            <p 
              key={idx} 
              className={`text-body-md md:text-lg leading-relaxed ${line.bold ? 'font-bold' : ''} ${line.highlightColor || 'text-on-surface'}`}
            >
              {line.highlight ? (
                <span className={`font-bold ${line.highlightColor || 'text-error'}`}>{line.text}</span>
              ) : (
                line.text
              )}
            </p>
          ))}
        </div>
      </section>

      {/* Main Content (Image & Table) */}
      <section className="px-gutter">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left: Image */}
            <div className="lg:w-1/2 flex-shrink-0">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-surface-container-low relative bg-surface-container-low">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 flex-col items-center justify-center text-on-surface-variant/50 hidden">
                  <span className="material-symbols-outlined text-5xl mb-2">image</span>
                  <span className="font-medium text-sm">public{course.image} 로 이미지를 저장해주세요</span>
                </div>
              </div>
            </div>

            {/* Right: Info Table */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="bg-white rounded-3xl border border-surface-variant shadow-sm overflow-hidden">
                {course.specs.map((spec, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col sm:flex-row border-b border-surface-variant last:border-b-0 ${idx % 2 === 0 ? 'bg-surface-bright' : 'bg-white'}`}
                  >
                    <div className="sm:w-1/4 p-4 md:p-5 font-bold text-deep-ocean flex items-center sm:border-r border-surface-variant">
                      {spec.label}
                    </div>
                    <div className="sm:w-3/4 p-4 md:p-5 text-on-surface text-sm md:text-base leading-relaxed">
                      {spec.highlightWords ? (
                        renderHighlightedText(spec.value, spec.highlightWords)
                      ) : spec.highlight ? (
                        renderHighlightedText(spec.value, [{ word: spec.highlight, color: spec.highlightColor }])
                      ) : (
                        spec.value
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Full Width Specs */}
          {course.fullWidthSpecs && (
            <div className="mt-8 bg-surface-bright rounded-3xl border border-surface-variant shadow-sm overflow-hidden p-6 md:p-8">
              {course.fullWidthSpecs.map((spec, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className="font-bold text-deep-ocean text-lg">{spec.label}</div>
                  <div className="text-on-surface text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {spec.highlightWords ? (
                      renderHighlightedText(spec.value, spec.highlightWords)
                    ) : (
                      spec.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Extra Specs Table (Full Width) */}
          {course.extraSpecs && (
            <div className="mt-12">
              {course.extraSpecsTitle && (
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {course.extraSpecsTitle}
                  </h3>
                  {course.extraSpecsSubtitle && (
                    <p className="font-bold text-deep-ocean">{course.extraSpecsSubtitle}</p>
                  )}
                </div>
              )}
              <div className="bg-white rounded-3xl border border-surface-variant shadow-sm overflow-hidden">
                {course.extraSpecs.map((spec, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col sm:flex-row border-b border-surface-variant last:border-b-0 ${idx % 2 === 0 ? 'bg-surface-bright' : 'bg-white'}`}
                  >
                    <div className="sm:w-1/4 p-4 md:p-5 font-bold text-deep-ocean flex items-center sm:border-r border-surface-variant whitespace-pre-wrap">
                      {spec.label}
                    </div>
                    <div className="sm:w-3/4 p-4 md:p-5 text-on-surface text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                      {spec.highlightWords ? (
                        renderHighlightedText(spec.value, spec.highlightWords)
                      ) : spec.highlight ? (
                        renderHighlightedText(spec.value, [{ word: spec.highlight, color: spec.highlightColor }])
                      ) : (
                        spec.value
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Warnings */}
          {course.warnings && (
            <div className="mt-6 space-y-1 px-4 text-error font-medium text-sm">
              {course.warnings.map((warning, idx) => (
                <p key={idx}>{warning}</p>
              ))}
            </div>
          )}

          {/* Schedule */}
          {course.schedules && (
            <div className="mt-16">
              {course.scheduleTitle && (
                <h3 className="text-xl md:text-2xl font-bold text-primary text-center mb-8 border-b-2 border-primary inline-block pb-2 mx-auto flex w-max">
                  {course.scheduleTitle}
                </h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.schedules.map((schedule, idx) => (
                  <div key={idx} className="bg-surface-bright border border-surface-variant rounded-2xl overflow-hidden flex">
                    <div className="w-1/3 bg-surface-variant p-4 font-bold text-deep-ocean flex items-center justify-center text-center">
                      {schedule.day}
                    </div>
                    <div className="w-2/3 p-4 bg-white flex flex-col justify-center">
                      <ul className="space-y-1 text-on-surface text-sm">
                        {schedule.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
        </>
      )}
    </div>
  );
};

export default CourseDetail;
