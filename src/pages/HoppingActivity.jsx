import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { hoppingActivityI18n } from '../data/hoppingActivityData';

const cardImages = [
  '/marine-jetski.jpg',
  '/marine-banana.jpg',
  '/marine-parasailing.jpg',
  '/marine-jetboat.jpg'
];

const HoppingActivity = () => {
  const { activityId } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activityId]);

  const currentLang = i18n.resolvedLanguage || i18n.language || 'ko';
  const langKey = hoppingActivityI18n[currentLang] ? currentLang : (hoppingActivityI18n[currentLang.split('-')[0]] ? currentLang.split('-')[0] : 'ko');
  const langData = hoppingActivityI18n[langKey] || hoppingActivityI18n.ko;

  const data = langData[activityId];

  if (!data) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-surface-mist">
        <div className="text-center p-8 glass-panel rounded-3xl">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">construction</span>
          <h2 className="text-2xl font-bold text-deep-ocean mb-2">{langData.fallbackTitle}</h2>
          <p className="text-on-surface-variant">{langData.fallbackDesc}</p>
        </div>
      </div>
    );
  }

  const renderHighlightedText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text;
    
    let parts = [{ text, isHighlight: false }];
    
    highlights.forEach(highlightWord => {
      let newParts = [];
      parts.forEach(part => {
        if (part.isHighlight) {
          newParts.push(part);
          return;
        }
        
        const splitText = part.text.split(highlightWord);
        for (let i = 0; i < splitText.length; i++) {
          newParts.push({ text: splitText[i], isHighlight: false });
          if (i < splitText.length - 1) {
            newParts.push({ text: highlightWord, isHighlight: true });
          }
        }
      });
      parts = newParts.filter(p => p.text !== '');
    });
    
    return parts.map((part, idx) => 
      part.isHighlight ? <span key={idx} className="text-error font-bold">{part.text}</span> : part.text
    );
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {data.type === 'cards' ? (
          <div className="space-y-12">
            {data.items.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 items-stretch border-b border-gray-200 pb-12 last:border-b-0">
                {/* Left: Image */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-md">
                    <img 
                      src={cardImages[idx]} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm hidden">
                      이미지 준비중
                    </div>
                  </div>
                </div>

                {/* Middle: Content */}
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm md:text-base font-bold text-gray-900 whitespace-pre-line">
                      {item.preparation}
                    </p>
                  </div>
                  {item.extraPriceInfo && (
                    <div className="mt-2">
                      <p className="text-sm md:text-base font-bold text-gray-900">
                        {item.extraPriceInfo}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right: Box Info */}
                <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end">
                  <div className="bg-[#9CAFB7] text-white rounded-3xl p-6 w-full max-w-[240px] text-center flex flex-col items-center justify-center min-h-[220px] shadow-lg">
                    <div className="text-sm md:text-base mb-1">{item.boxInfo.top}</div>
                    <div className="text-4xl md:text-5xl font-bold mb-4">{item.boxInfo.price}</div>
                    <div className="border border-white/50 rounded-md py-1 px-4 mb-2 w-full text-sm">
                      {item.boxInfo.cap}
                    </div>
                    <div className="border border-white/50 rounded-md py-1 px-4 w-full text-sm">
                      {item.boxInfo.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : data.type === 'video_info' ? (
          <>
            {/* Title */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{data.title}</h1>
            </div>

            {/* Descriptions */}
            <div className="space-y-2 mb-8">
              {data.descriptions.map((desc, idx) => (
                <p 
                  key={idx} 
                  className={`text-sm md:text-base leading-relaxed 
                    ${desc.bold ? 'font-bold text-gray-900' : 'text-gray-700'}
                  `}
                >
                  {desc.text}
                </p>
              ))}
            </div>

            {/* Video */}
            <div className="mb-8 w-full max-w-4xl mx-auto aspect-video">
              <iframe 
                className="w-full h-full shadow-lg"
                src={data.videoUrl} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Table */}
            <div className="border-t-2 border-b-2 border-gray-900">
              <table className="w-full text-sm md:text-base">
                <tbody>
                  {data.specs.map((spec, idx) => (
                    <tr key={idx} className="border-b border-gray-200 last:border-b-0">
                      <th className="py-4 px-4 bg-gray-50 font-bold text-gray-900 text-center w-1/4 md:w-1/5 whitespace-nowrap">
                        {spec.label}
                      </th>
                      <td className="py-4 px-4 font-bold text-gray-800 break-keep">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            {/* Title */}
            <div className="text-center mb-10 border-b-2 border-gray-300 border-t-2 py-4">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900">{data.title}</h1>
            </div>

            {/* Descriptions */}
            <div className="text-center space-y-4 mb-12">
              {data.descriptions.map((desc, idx) => (
                <p 
                  key={idx} 
                  className={`text-sm md:text-base leading-relaxed whitespace-pre-line 
                    ${desc.bold ? 'font-bold' : ''} 
                    ${desc.color ? desc.color : 'text-gray-900'}
                  `}
                >
                  {desc.text}
                </p>
              ))}
            </div>

            {/* Info Section (Image Left, Table Right) */}
            <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-md">
                  <img 
                    src="/hopping-tour-main.jpg" 
                    alt="Hopping Tour Info" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm hidden">
                    이미지 준비중
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 border-t-2 border-b-2 border-gray-900">
                <table className="w-full text-sm md:text-base">
                  <tbody>
                    {data.infoSection.specs.map((spec, idx) => (
                      <tr key={idx} className="border-b border-gray-200 last:border-b-0">
                        <th className="py-4 px-4 bg-gray-50 font-bold text-gray-800 text-left w-1/3">
                          {spec.label}
                        </th>
                        <td className={`py-4 px-4 font-bold ${spec.highlight ? 'text-error' : 'text-gray-700'}`}>
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3B5998] mb-4">{data.scheduleSection.title}</h2>
                <p className="font-bold text-gray-900 text-sm md:text-base">{data.scheduleSection.subtitle}</p>
              </div>

              <div className="flex flex-col-reverse md:flex-row gap-8 items-stretch">
                {/* Table Left */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="border-t border-b border-gray-300 py-2">
                    <table className="w-full text-sm md:text-base">
                      <tbody>
                        {data.scheduleSection.timeline.map((item, idx) => (
                          <tr key={idx} className="border-b border-gray-200 last:border-b-0">
                            <th className="py-3 px-2 font-bold text-gray-900 text-center w-1/4">
                              {item.time}
                            </th>
                            <td className="py-3 px-4 font-bold text-gray-900">
                              {item.desc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-error text-sm font-medium mt-3 px-2">
                    {data.scheduleSection.warning}
                  </p>
                </div>
                {/* Image Right */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] md:h-full bg-gray-200 overflow-hidden shadow-md min-h-[250px]">
                    <img 
                      src="/hopping-tour-sub.jpg" 
                      alt="Hopping Tour Schedule" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm hidden">
                      이미지 준비중
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="border-t-2 border-b-2 border-gray-900">
              <table className="w-full text-sm md:text-base">
                <tbody>
                  <tr>
                    <th className="py-4 px-4 bg-gray-50 font-bold text-gray-900 text-center w-1/4 border-r border-gray-300">
                      {data.refundPolicy.label}
                    </th>
                    <td className="py-4 px-4 font-bold text-gray-900">
                      {renderHighlightedText(data.refundPolicy.value, data.refundPolicy.highlights)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default HoppingActivity;
