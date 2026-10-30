import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { oslobTourI18n } from '../data/oslobTourData';

// Image assets mapping for tours
const tourImages = {
  moalboal: [
    ['/oslob-whale-1.jpg', '/oslob-whale-2.jpg', '/oslob-whale-3.jpg'],
    ['/tumalog-1.jpg', '/tumalog-2.jpg', '/tumalog-3.jpg'],
    ['/moalboal-1.jpg', '/moalboal-2.jpg', '/moalboal-3.jpg']
  ],
  sumilon: [
    ['/oslob-whale-1.jpg', '/oslob-whale-2.jpg', '/oslob-whale-3.jpg'],
    ['/tumalog-1.jpg', '/tumalog-2.jpg', '/tumalog-3.jpg'],
    ['/sumilon-1.jpg', '/sumilon-2.jpg', '/sumilon-3.jpg']
  ],
  canyoneering: [
    ['/oslob-whale-1.jpg', '/oslob-whale-2.jpg', '/oslob-whale-3.jpg'],
    ['/kawasan-1.jpg', '/kawasan-2.jpg', '/kawasan-3.jpg'],
    ['/canyoneering-1.jpg', '/canyoneering-2.jpg', '/canyoneering-3.jpg']
  ]
};

const OslobTour = () => {
  const { tourId } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tourId]);

  const currentLang = i18n.resolvedLanguage || i18n.language || 'ko';
  const langKey = oslobTourI18n[currentLang] ? currentLang : (oslobTourI18n[currentLang.split('-')[0]] ? currentLang.split('-')[0] : 'ko');
  const langData = oslobTourI18n[langKey] || oslobTourI18n.ko;

  const data = langData.tours[tourId];
  const headers = langData.tableHeaders;
  const images = tourImages[tourId] || [];

  if (!data) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-surface-mist">
        <div className="text-center p-8 glass-panel rounded-3xl">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">construction</span>
          <h2 className="text-2xl font-bold text-deep-ocean mb-2">{headers.fallbackTitle}</h2>
          <p className="text-on-surface-variant">{headers.fallbackDesc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Sections */}
        {data.sections.map((section, idx) => (
          <section key={idx} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {(images[idx] || []).map((imgSrc, i) => (
                <div key={i} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={imgSrc} 
                    alt={`${section.title} ${i + 1}`} 
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
              ))}
            </div>
            
            <h3 className="text-lg md:text-xl font-bold text-[#3B5998] mb-3">
              {section.subtitle}
            </h3>
            
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm md:text-base">
              {section.descriptions.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            
            {idx < data.sections.length - 1 && (
              <div className="border-b border-dashed border-gray-300 mt-12"></div>
            )}
          </section>
        ))}

        {/* Schedule & Price Table */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-t border-dashed border-gray-300 pt-12">
            {headers.scheduleTitle}
          </h2>
          
          <div className="w-full overflow-x-auto border-t-2 border-b border-gray-400">
            <table className="w-full text-sm md:text-base text-left min-w-[600px]">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="w-1/4 py-4 px-6 bg-gray-50 font-bold text-gray-700 text-center align-middle border-r border-gray-200">
                    {headers.tour}
                  </th>
                  <td className="w-3/4 py-4 px-6 font-bold text-lg text-gray-900">
                    {data.schedule.title}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 bg-gray-50 font-bold text-gray-700 text-center align-middle border-r border-gray-200">
                    {headers.time}
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    {data.schedule.time}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 bg-gray-50 font-bold text-gray-700 text-center align-middle border-r border-gray-200">
                    {headers.included}
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    {data.schedule.included}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 bg-gray-50 font-bold text-gray-700 text-center align-top border-r border-gray-200">
                    {headers.schedule}
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    <ul className="space-y-1">
                      {data.schedule.timeline.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-6 bg-[#EEF4FB] font-bold text-gray-700 text-center align-top border-r border-gray-200">
                    {headers.prices}
                  </th>
                  <td className="py-4 px-6 bg-[#EEF4FB] text-gray-700">
                    <ul className="space-y-4">
                      {data.schedule.prices.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 space-y-1">
            {data.schedule.warnings.map((warning, i) => (
              <p key={i} className="text-red-500 text-sm">
                {warning}
              </p>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default OslobTour;
