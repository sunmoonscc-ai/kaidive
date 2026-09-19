import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const toursData = {
  moalboal: {
    sections: [
      {
        title: '오슬롭 고래상어 체험',
        images: ['/oslob-whale-1.jpg', '/oslob-whale-2.jpg', '/oslob-whale-3.jpg'],
        subtitle: '동남아에서 유일하게 고래상어를 눈앞에서 직접 보고, 즐길 수 있는 오슬롭 고래상어체험',
        descriptions: [
          '상쾌한 해안도로를 달려, 배를 타고 나가 고래상어와 함께 꿈만 같은 스노클링을 즐기실 수 있습니다.'
        ]
      },
      {
        title: '투말록 폭포',
        images: ['/tumalog-1.jpg', '/tumalog-2.jpg', '/tumalog-3.jpg'],
        subtitle: '원시림의 모습을 그대로 간직한 세부 최고의 절경, 가와산폭포',
        descriptions: [
          '영화 \'아바타\'의 촬영지이기도 했던 가와산폭포는 고래상어와 더불어 세부 최고의 관광지입니다.'
        ]
      },
      {
        title: '모알보알 페스카도르 섬',
        images: ['/moalboal-1.jpg', '/moalboal-2.jpg', '/moalboal-3.jpg'],
        subtitle: '세부에서의 익스트림 스포츠 가와산 폭포 캐녀닝에 도전하세요!',
        descriptions: [
          '세부 가와산 캐녀닝은 협곡을 따라 수영, 다이빙, 트래킹을 즐기는 것으로 전 세계적으로 몇 안되는 곳에서 즐길 수 있는 익스트림 스포츠 입니다.',
          '눈 앞에서 펼쳐지는 거대한 절벽과 크고 작은 폭포들은 마치 영화 \'아바타\'의 한장면 처럼 신비롭고 아름답습니다.'
        ]
      }
    ],
    schedule: {
      title: '오슬롭 & 모알보알 1DAY투어',
      time: '14시간 전후',
      included: '점심식사, 입장료, 차량 픽업&드랍, 수중 카메라촬영, 캐녀닝 장비대여료, 가이드, 12인승 도요타차량 렌트카, 샤워시설',
      timeline: [
        '03:00 ~ 픽업 및 출발 <공항, 시티, 막탄 픽업 가능> <졸리비 아침식사(불포함사항)>',
        '08:00 ~ 오슬롭 도착 & 고래상어 스노클링',
        '11:00 ~ 가와산 폭포 이동',
        '12:30 ~ 점심식사',
        '13:10 ~ 장비 착용 & 캐녀닝 출발',
        '16:30 ~ 캐녀닝 종료 복귀',
        '20:00 ~ 드랍 및 투어 종료 <공항, 시티, 막탄 드랍 가능>'
      ],
      prices: [
        '2인~3인 : $140',
        '4인 ~ 5인 : $120',
        '6인 ~ 7인 : $110',
        '7인 ~ 8인 : $100'
      ],
      warnings: [
        '* 상기 일정과 시간은 교통상황과 날씨에 따라 변동이 있을 수 있습니다.',
        '* 예약금은 1인당 $20(당일 환율기준)이며 최종예약 후 예약금 환불은 불가합니다. 예약일 변경은 최소 3일전까지 가능합니다.'
      ]
    }
  },
  sumilon: {
    sections: [
      {
        title: '오슬롭 고래상어 체험',
        images: ['/oslob-whale-1.jpg', '/oslob-whale-2.jpg', '/oslob-whale-3.jpg'],
        subtitle: '동남아에서 유일하게 고래상어를 눈앞에서 직접 보고, 즐길 수 있는 오슬롭 고래상어체험',
        descriptions: [
          '상쾌한 해안도로를 달려, 배를 타고 나가 고래상어와 함께 꿈만 같은 스노클링을 즐기실 수 있습니다.'
        ]
      },
      {
        title: '투말록 폭포',
        images: ['/tumalog-1.jpg', '/tumalog-2.jpg', '/tumalog-3.jpg'],
        subtitle: '원시림의 모습을 그대로 간직한 세부 최고의 절경, 가와산폭포',
        descriptions: [
          '영화 \'아바타\'의 촬영지이기도 했던 가와산폭포는 고래상어와 더불어 세부 최고의 관광지입니다.'
        ]
      },
      {
        title: '수밀론 아일랜드',
        images: ['/sumilon-1.jpg', '/sumilon-2.jpg', '/sumilon-3.jpg'],
        subtitle: '세부에서의 익스트림 스포츠 가와산 폭포 캐녀닝에 도전하세요!',
        descriptions: [
          '세부 가와산 캐녀닝은 협곡을 따라 수영, 다이빙, 트래킹을 즐기는 것으로 전 세계적으로 몇 안되는 곳에서 즐길 수 있는 익스트림 스포츠 입니다.',
          '눈 앞에서 펼쳐지는 거대한 절벽과 크고 작은 폭포들은 마치 영화 \'아바타\'의 한장면 처럼 신비롭고 아름답습니다.'
        ]
      }
    ],
    schedule: {
      title: '오슬롭 & 캐녀닝 1DAY투어',
      time: '14시간 전후',
      included: '점심식사, 입장료, 차량 픽업&드랍, 수중 카메라촬영, 캐녀닝 장비대여료, 가이드, 12인승 도요타차량 렌트카, 샤워시설',
      timeline: [
        '03:00 ~ 픽업 및 출발 <공항, 시티, 막탄 픽업 가능> <졸리비 아침식사(불포함사항)>',
        '08:00 ~ 오슬롭 도착 & 고래상어 스노클링',
        '11:00 ~ 가와산 폭포 이동',
        '12:30 ~ 점심식사',
        '13:10 ~ 장비 착용 & 캐녀닝 출발',
        '16:30 ~ 캐녀닝 종료 복귀',
        '20:00 ~ 드랍 및 투어 종료 <공항, 시티, 막탄 드랍 가능>'
      ],
      prices: [
        '2인~3인 : $140',
        '4인 ~ 5인 : $120',
        '6인 ~ 7인 : $110',
        '7인 ~ 8인 : $100'
      ],
      warnings: [
        '* 상기 일정과 시간은 교통상황과 날씨에 따라 변동이 있을 수 있습니다.',
        '* 예약금은 1인당 $20(당일 환율기준)이며 최종예약 후 예약금 환불은 불가합니다. 예약일 변경은 최소 3일전까지 가능합니다.'
      ]
    }
  },
  canyoneering: {
    sections: [
      {
        title: '오슬롭 고래상어 체험',
        images: ['/oslob-whale-1.jpg', '/oslob-whale-2.jpg', '/oslob-whale-3.jpg'],
        subtitle: '동남아에서 유일하게 고래상어를 눈앞에서 직접 보고, 즐길 수 있는 오슬롭 고래상어체험',
        descriptions: [
          '상쾌한 해안도로를 달려, 배를 타고 나가 고래상어와 함께 꿈만 같은 스노클링을 즐기실 수 있습니다.'
        ]
      },
      {
        title: '가와산폭포',
        images: ['/kawasan-1.jpg', '/kawasan-2.jpg', '/kawasan-3.jpg'],
        subtitle: '원시림의 모습을 그대로 간직한 세부 최고의 절경, 가와산폭포',
        descriptions: [
          '영화 \'아바타\'의 촬영지이기도 했던 가와산폭포는 고래상어와 더불어 세부 최고의 관광지입니다.'
        ]
      },
      {
        title: '가와산 캐녀닝',
        images: ['/canyoneering-1.jpg', '/canyoneering-2.jpg', '/canyoneering-3.jpg'],
        subtitle: '세부에서의 익스트림 스포츠 가와산 폭포 캐녀닝에 도전하세요!',
        descriptions: [
          '세부 가와산 캐녀닝은 협곡을 따라 수영, 다이빙, 트래킹을 즐기는 것으로 전 세계적으로 몇 안되는 곳에서 즐길 수 있는 익스트림 스포츠 입니다.',
          '눈 앞에서 펼쳐지는 거대한 절벽과 크고 작은 폭포들은 마치 영화 \'아바타\'의 한장면 처럼 신비롭고 아름답습니다.'
        ]
      }
    ],
    schedule: {
      title: '오슬롭 & 캐녀닝 1DAY투어',
      time: '14시간 전후',
      included: '점심식사, 입장료, 차량 픽업&드랍, 수중 카메라촬영, 캐녀닝 장비대여료, 가이드, 12인승 도요타차량 렌트카, 샤워시설',
      timeline: [
        '03:00 ~ 픽업 및 출발 <공항, 시티, 막탄 픽업 가능> <졸리비 아침식사(불포함사항)>',
        '08:00 ~ 오슬롭 도착 & 고래상어 스노클링',
        '11:00 ~ 가와산 폭포 이동',
        '12:30 ~ 점심식사',
        '13:10 ~ 장비 착용 & 캐녀닝 출발',
        '16:30 ~ 캐녀닝 종료 복귀',
        '20:00 ~ 드랍 및 투어 종료 <공항, 시티, 막탄 드랍 가능>'
      ],
      prices: [
        '2인~3인 : $140',
        '4인 ~ 5인 : $120',
        '6인 ~ 7인 : $110',
        '7인 ~ 8인 : $100'
      ],
      warnings: [
        '* 상기 일정과 시간은 교통상황과 날씨에 따라 변동이 있을 수 있습니다.',
        '* 예약금은 1인당 $20(당일 환율기준)이며 최종예약 후 예약금 환불은 불가합니다. 예약일 변경은 최소 3일전까지 가능합니다.'
      ]
    }
  }
};

const OslobTour = () => {
  const { tourId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tourId]);

  const data = toursData[tourId];

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

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Sections */}
        {data.sections.map((section, idx) => (
          <section key={idx} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{section.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {section.images.map((imgSrc, i) => (
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
            스케줄 및 이용요금
          </h2>
          
          <div className="w-full overflow-x-auto border-t-2 border-b border-gray-400">
            <table className="w-full text-sm md:text-base text-left min-w-[600px]">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="w-1/4 py-4 px-6 bg-gray-50 font-bold text-gray-700 text-center align-middle border-r border-gray-200">
                    투어
                  </th>
                  <td className="w-3/4 py-4 px-6 font-bold text-lg text-gray-900">
                    {data.schedule.title}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 bg-gray-50 font-bold text-gray-700 text-center align-middle border-r border-gray-200">
                    소요시간
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    {data.schedule.time}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 bg-gray-50 font-bold text-gray-700 text-center align-middle border-r border-gray-200">
                    포함사항
                  </th>
                  <td className="py-4 px-6 text-gray-700">
                    {data.schedule.included}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 bg-gray-50 font-bold text-gray-700 text-center align-top border-r border-gray-200">
                    스케줄
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
                    이용요금
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
