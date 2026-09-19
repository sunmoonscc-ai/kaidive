import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const hoppingData = {
  tour: {
    title: '단독 호핑투어',
    descriptions: [
      { text: '세부 해양국립공원인 올랑고 아일랜드에서 스노클링 및 간단한 낚시체험을 진행하는 프로그램이며\n필리핀 전통 배인 방카보트를 타고 이동합니다.', bold: true },
      { text: '막탄지역내 픽업 / 드랍 서비스가 무료 입니다. (세부시티 상담요망)', bold: true },
      { text: '선상에서의 점심식사가 포함 됩니다.', bold: true },
      { text: '호핑투어시 펀다이빙 or 체험다이빙 추가 가능하며 추가비용이 발생 할 수 있습니다.', color: 'text-error', bold: true },
      { text: '위 단독투어 상품은 4인이상 진행하는 패키지 입니다.', color: 'text-error', bold: true }
    ],
    infoSection: {
      image: '/hopping-tour-main.jpg',
      specs: [
        { label: '장소', value: '올랑고 아일랜드' },
        { label: '소요시간', value: '7시간 전후' },
        { label: '예약가능 일자', value: '매일' },
        { label: '포함사항', value: '무료 픽&드랍, 점심, 음료, 타올, 스노쿨링장비, 입장료' },
        { label: '비용', value: '$70', highlight: true }
      ]
    },
    scheduleSection: {
      title: '투어일정',
      subtitle: '아래 일정은 참고를 위한 예제 일정입니다.',
      image: '/hopping-tour-sub.jpg',
      timeline: [
        { time: '09:00', desc: '호텔 & 리조트 픽업' },
        { time: '10:00', desc: '샵도착 후 간단한 브리핑 후 호핑투어 출발' },
        { time: '10:30', desc: '올랑고 아일랜드 도착 후 스노쿨링' },
        { time: '12:30', desc: '선상식사 (바베큐/삼겹살)' },
        { time: '13:30', desc: '올랑고 포인트 이동 후 스노클링 & 낚시체험' },
        { time: '15:30', desc: '막탄 아일랜드로 복귀' },
        { time: '16:00', desc: '호텔 & 리조트 드랍' }
      ],
      warning: '* 스케줄은 날씨나 현지상황에 따라 변경될 수 있습니다.'
    },
    refundPolicy: {
      label: '환불규정',
      value: '일주일전 : 100% / 3일전 : 50% / 1일전 취소시 환불 불가합니다.',
      highlights: ['100%', '50%', '환불 불가']
    }
  },
  marine: {
    type: 'cards',
    items: [
      {
        title: '제트스키',
        image: '/marine-jetski.jpg',
        description: '제트스키는 동력을 이용해 수면 위를 질주하는 레포츠입니다. 시속 80~90km까지 속도를 낼수 있어 아름다운 세부 바다위를 가르며 스피드를 즐길 수 있습니다.',
        preparation: '준비물 : 수영복, 물놀이 복장 [물에 젖을수 있습니다.]\n2인까지 탑승이 가능합니다',
        extraPriceInfo: '기본 30분 : $40 / 1시간 : $70',
        boxInfo: {
          top: '제트스키 1대',
          price: '$40',
          cap: '2인까지 가능',
          duration: '30분'
        }
      },
      {
        title: '바나나보트',
        image: '/marine-banana.jpg',
        description: '바나나보트는 바나나모양의 무동력 보트를 모터보트나 제트스키에 연결하여 수면 위를 달리는 레포츠로 환상적인 세부바다 위를 즐기실 수 있습니다.',
        preparation: '준비물 : 수영복, 물놀이 복장 [물에 젖을수 있습니다.]\n8인까지 탑승이 가능합니다.',
        extraPriceInfo: '기본 30분 : $80 / 1시간 : $110',
        boxInfo: {
          top: '바나나보트 1대',
          price: '$80',
          cap: '8인까지 가능',
          duration: '30분'
        }
      },
      {
        title: '파라세일링',
        image: '/marine-parasailing.jpg',
        description: '파라세일링은 수상&항공레포츠라 할 수 있습니다. 특별히 만들어진 낙하산을 이용하여 모터보트로 사람을 떠오르게해 아름다운 세부바다의 풍광과 스릴을 즐길 수 있는 레포츠입니다.',
        preparation: '준비물 : 수영복, 물놀이 복장 [물에 젖을수 있습니다.]\n2인까지 탑승가능합니다',
        boxInfo: {
          top: '파라세일링 1대',
          price: '$85',
          cap: '2인까지 가능',
          duration: '15~20분'
        }
      },
      {
        title: '제트보트',
        image: '/marine-jetboat.jpg',
        description: '회전방식의 추진력을 이용하지 않고 임펠라를 통해 밀어내는 수압에 의해 보트를 추진시켜 기존의 방식보다 빠르고 낮은 수심에서도 자유자재로 운항하여 마치 놀이기구를 타는 듯한 짜릿함과 스피드를 즐길 수 있습니다.',
        preparation: '준비물 : 수영복, 물놀이 복장 [물에 젖을수 있습니다.]\n최대 12인까지 탑승가능하며 최소 2인이상 진행합니다.',
        boxInfo: {
          top: '1인비용',
          price: '$50',
          cap: '최소 2인이상 가능',
          duration: '30분'
        }
      }
    ]
  },
  amazing: {
    type: 'video_info',
    title: 'AMAZING SHOW 어메이징쇼',
    descriptions: [
      { text: '세부 최고의 공연!!', bold: true },
      { text: '남녀노소 가족 모두 관람할 수 있는 건전한 공연입니다.' },
      { text: '한국에서 경험해보지 못한 어메이징을 느껴보세요!!!' }
    ],
    videoUrl: 'https://www.youtube.com/embed/jNN-4FoVQys',
    specs: [
      { label: '관람비용', value: '성인 1인 - $35 / 아동 1인 - $20 (기준 : 만 10세이하까지 적용) / 만 2세이하 아동 무료(좌석배정 X)' },
      { label: '소요시간', value: '1부 : 18:00 ~ 19:00     2부 : 20:00 ~ 21:00' },
      { label: '서비스', value: '1인당 음료 or 맥주 中 택 1, 호텔 픽업, 드랍 [막탄지역]' }
    ]
  }
};

const HoppingActivity = () => {
  const { activityId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activityId]);

  const data = hoppingData[activityId];

  if (!data) {
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
                      src={item.image} 
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
                    src={data.infoSection.image} 
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
                      src={data.scheduleSection.image} 
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
