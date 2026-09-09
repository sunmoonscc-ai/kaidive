export const coursesData = {
  discover: {
    title: '체험다이빙(EXPERIENCE DIVING)',
    intro: [
      { text: '체험다이빙이란', highlight: true, highlightColor: 'text-error' },
      { text: ' 교육다이빙으로 들어가기 전 물속을 체험하는 다이빙입니다.\n' },
      { text: '체험다이빙을 통해 물에 대한 두려움과 공포심을 없애고, 다이빙에 대한 기초적인 입문을 하는 과정 입니다.\n', bold: true },
      { text: '물속에서 무중력 상태를 느낄수 있는 스포츠로서 Try scuba 또는 Intro Diving 이라 알려져 있습니다.\n', highlightColor: 'text-on-surface-variant' },
      { text: '제한조건은 따로 없으며 신체 건강한 사람이면 누구에게나 열려있는 고급 스포츠입니다.\n', highlightColor: 'text-on-surface-variant' },
      { text: '체험다이빙은 수심 5M 내외에서 진행되며, 당일 비행기 탑승에 문제가 없습니다.', highlightColor: 'text-primary' }
    ],
    image: '/scuba-discover.jpg',
    specs: [
      { 
        label: '소요시간', 
        value: '약 1시간 소요 (스쿠버다이빙 장비설명, 안전교육, 입수방법, 수중에서의 주의사항과 수중생태계 이해에 대한 입수전 브리핑)',
        highlight: '약 1시간 소요',
        highlightColor: 'text-error'
      },
      { 
        label: '준비물', 
        value: '수영복, 선크림, 액체멀미약, 기타 개인준비물' 
      },
      { 
        label: '포함사항', 
        value: '스쿠버다이빙 장비 풀세트, 사진 및 동영상 촬영' 
      },
      { 
        label: '비용', 
        value: '$50',
        highlight: '$50',
        highlightColor: 'text-error'
      },
      { 
        label: '환불규정', 
        value: '예약금은 50$(당일 환율기준)이며 최종예약 후 예약금 환불은 불가합니다. 예약일 변경은 최소 3일전까지 가능합니다.',
        highlightWords: [
          { word: '예약금은 50$(당일 환율기준)이며', color: 'text-error' },
          { word: '최종예약 후 예약금 환불은 불가합니다.', color: 'text-error' },
          { word: '예약일 변경은 최소 3일전까지 가능합니다.', color: 'text-error' }
        ]
      }
    ]
  },
  openwater: {
    title: '오픈워터(OPEN WATER)',
    intro: [
      { text: '오픈워터는', highlight: true, highlightColor: 'text-error' },
      { text: ' 스쿠버다이빙의 입문과정으로 환상적인 수중세상의 문을 열어 모험을 시작하는 단계이기도 합니다.\n' },
      { text: '안전하고 즐겁게 저희 카이다이브와 함께 도전해보세요.\n', bold: true }
    ],
    image: '/scuba-openwater.jpg',
    specs: [
      { 
        label: '교육일정', 
        value: '2일과정\n(스쿠버다이빙 기본원칙을 이해하기 위한 이론교육 및 장비교육\n안전사고 예방 교육 후 실습을 위한 제한수역 다이빙\n실전을 위한 개방수역 다이빙으로 진행됩니다)',
        highlight: '2일과정',
        highlightColor: 'text-error'
      },
      { 
        label: '준비물', 
        value: '수영복, 선크림, 액체형 멀미약, 기타 개인준비물' 
      },
      { 
        label: '포함사항', 
        value: '라이센스 발급비용, 스쿠버다이빙 장비 풀세트, 사진 및 동영상 촬영\n점심식사, 비치타올, 샤워시설. 막탄내 픽업 / 드랍' 
      },
      { 
        label: '비용', 
        value: '$300',
        highlight: '$300',
        highlightColor: 'text-error'
      },
      { 
        label: '자격요건', 
        value: '[스쿠버 다이버]           만 15세 이상 ~\n[주니어 스쿠버 다이버]    만 10세 이상 ~ 만 15세 미만'
      }
    ],
    fullWidthSpecs: [
      {
        label: '환불규정',
        value: '예약금은 $50(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.\n[스텝 및 장비와 식사등을 미리사전 준비하기 때문에 환불이 불가합니다. 이 점 양해부탁드립니다.]\n\n예약일 변경은 최소3일전까지 가능합니다.\n\n천재지변, 기상악화[주의보(태풍등)]인 경우 100% 예약금 환불 가능하며, 단순변심으로 인한 환불은 불가 합니다.\n우천시는 다이빙과 무관하며 정상교육 진행됩니다.',
        highlightWords: [
          { word: '예약금은 $50(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.', color: 'text-error' },
          { word: '[스텝 및 장비와 식사등을 미리사전 준비하기 때문에 환불이 불가합니다. 이 점 양해부탁드립니다.]', color: 'text-error' }
        ]
      }
    ],
    warnings: [
      '* 마지막 스쿠버다이빙 이후 최소 12 ~ 24시간동안 비행하실수 없으니 참고하시고 계획 바랍니다.',
      '* 기타 스케줄은 현지 날씨상황에 따라 조금씩 변동될수 있습니다.'
    ],
    scheduleTitle: '교육일정안내',
    schedules: [
      {
        day: '교육1일',
        items: [
          '1. 오전 이론 수업 / 안전교육',
          '2. 점심식사',
          '3. 장비 이론 수업',
          '4. 다이빙 실습',
          '5. 당일 교육 디브리핑'
        ]
      },
      {
        day: '교육2일',
        items: [
          '1. 오전 이론 수업 / 테스트',
          '2. 해양 교육 다이빙',
          '3. 점심식사',
          '4. 해양 교육 다이빙',
          '5. 최종 테스트 & 디브리핑',
          '6. C-CARD 수여식'
        ]
      }
    ]
  },
  advanced: {
    title: '어드밴스(ADVANCE)',
    intro: [
      { text: '어드밴스', highlight: true, highlightColor: 'text-error' },
      { text: ' 코스는 스쿠버다이빙을 정말 즐길줄 아는 중급과정 단계입니다.\n' },
      { text: '이 과정에서 스페셜티를 통한 다양한 다이빙 기술 및 새로운 경험을 배우는 과정입니다.\n', bold: true }
    ],
    image: '/scuba-advanced.jpg',
    specs: [
      { 
        label: '교육일정', 
        value: '2일과정\n(어드밴스 교육 프로그램은 다양한 다이빙교육을 통해 조금 더 효율적으로 호흡하고,스스로 부력을 조절할 수 있도록 돕고 깊은 수심 체험과 더 편안하게 다이빙 할 수 있도록 도와줍니다.)',
        highlight: '2일과정',
        highlightColor: 'text-error'
      },
      { 
        label: '준비물', 
        value: '수영복, 선크림, 액체형 멀미약, 기타 개인준비물' 
      },
      { 
        label: '포함사항', 
        value: '라이센스 발급비용, 스쿠버다이빙 장비 풀세트, 사진 및 동영상 촬영\n점심식사, 비치타올, 샤워시설. 막탄내 픽업 / 드랍' 
      },
      { 
        label: '비용', 
        value: '$300',
        highlight: '$300',
        highlightColor: 'text-error'
      },
      { 
        label: '자격요건', 
        value: '[스쿠버 다이버]           오픈워터 자격증 소지자\n[주니어 스쿠버 다이버]    오픈워터 자격증 소지자'
      }
    ],
    fullWidthSpecs: [
      {
        label: '환불규정',
        value: '예약금은 $50(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.\n[스텝 및 장비와 식사등을 미리사전 준비하기 때문에 환불이 불가합니다. 이 점 양해부탁드립니다.]\n\n예약일 변경은 최소3일전까지 가능합니다.\n\n천재지변, 기상악화[주의보(태풍등)]인 경우 100% 예약금 환불 가능하며, 단순변심으로 인한 환불은 불가 합니다.\n우천시는 다이빙과 무관하며 정상교육 진행됩니다.',
        highlightWords: [
          { word: '예약금은 $50(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.', color: 'text-error' },
          { word: '[스텝 및 장비와 식사등을 미리사전 준비하기 때문에 환불이 불가합니다. 이 점 양해부탁드립니다.]', color: 'text-error' }
        ]
      }
    ],
    warnings: [
      '* 마지막 스쿠버다이빙 이후 최소 12 ~ 24시간동안 비행하실수 없으니 참고하시고 계획 바랍니다.',
      '* 기타 스케줄은 현지 날씨상황에 따라 조금씩 변동될수 있습니다.'
    ],
    scheduleTitle: '교육일정안내',
    schedules: [
      {
        day: '교육1일',
        items: [
          '1. 이론수업',
          '2. 해양 교육다이빙',
          '3. 점심식사',
          '4. 해양 교육다이빙',
          '5. 당일교육 디브리핑'
        ]
      },
      {
        day: '교육2일',
        items: [
          '1. 이론 수업 / 테스트',
          '2. 해양 교육 다이빙',
          '3. 점심식사',
          '4. 해양 교육 다이빙',
          '5. 최종 테스트 & 디브리핑',
          '6. C-CARD 수여식'
        ]
      }
    ]
  },
  'rescue-master': {
    title: '레스큐 & 마스터(RESCUE & MASTER)',
    intro: [
      { text: '응급상황 및 다양한 환경에서 많은 훈련과 경험을 할 수 있도록 도와주며,\n', bold: true },
      { text: '본인만의 다이빙 스타일을 찾고 새로운 탐험을 하고 방문하도록 도와드립니다.\n', bold: true },
      { text: '이 교육 프로그램은 힘들기도 하지만 매우 보람있는 경험이 될 것 입니다.\n' }
    ],
    image: '/scuba-rescue.jpg',
    specs: [
      { 
        label: '교육일정', 
        value: '6일과정\n\n레스큐 교육과 마스터 교육과정을 일정에 맞춰 따로 교육 합니다\n\n레스큐2일에서3일 / 마스터 교육 3일에서 5일',
        highlight: '6일과정',
        highlightColor: 'text-error'
      },
      { 
        label: '준비물', 
        value: '수영복, 선크림, 액체형 멀미약, 기타 개인준비물' 
      },
      { 
        label: '포함사항', 
        value: '라이센스 발급비용, 스쿠버다이빙 장비 풀세트, 사진 및 동영상 촬영\n점심식사, 비치타올, 샤워시설. 막탄내 픽업 / 드랍' 
      },
      { 
        label: '비용', 
        value: '상담요망',
        highlight: '상담요망',
        highlightColor: 'text-error'
      },
      { 
        label: '자격요건', 
        value: '[스쿠버 다이버]           어드밴스 자격증 이상 소지자'
      }
    ],
    fullWidthSpecs: [
      {
        label: '환불규정',
        value: '예약금은 $100(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.\n[스텝 및 장비와 식사등을 미리사전 준비하기 때문에 환불이 불가합니다. 이 점 양해부탁드립니다.]\n\n예약일 변경은 최소3일전까지 가능합니다.\n\n천재지변, 기상악화[주의보(태풍등)]인 경우 100% 예약금 환불 가능하며, 단순변심으로 인한 환불은 불가 합니다.\n우천시는 다이빙과 무관하며 정상교육 진행됩니다.',
        highlightWords: [
          { word: '예약금은 $100(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.', color: 'text-error' },
          { word: '[스텝 및 장비와 식사등을 미리사전 준비하기 때문에 환불이 불가합니다. 이 점 양해부탁드립니다.]', color: 'text-error' }
        ]
      }
    ],
    warnings: [
      '* 마지막 스쿠버다이빙 이후 최소 12 ~ 24시간동안 비행하실수 없으니 참고하시고 계획 바랍니다.',
      '* 기타 스케줄은 현지 날씨상황에 따라 조금씩 변동될수 있습니다.'
    ],
    scheduleTitle: '교육일정안내',
    schedules: [
      {
        day: '레스큐 [RESCUE]',
        items: [
          '1. 입문단계 스킬 및 긴급 상승 스킬',
          '2. 스트레스 관리하기 / 버디보조',
          '3. 의식없는 다이버 구조하기',
          '4. 보트, 해변 조난자에 대응',
          '5. 지친다이버, 패닉다이버 보조하기',
          '6. 수면, 수중에서 의식 없는 다이버 대응요령',
          '7. 압력 관련 부상에 대한 응급처치',
          '8. CPR 및 산소공급',
          '9. 다이빙 사고 시나리오(출수,응급처치)'
        ]
      },
      {
        day: '마스터 [MASTER]',
        items: [
          '1. 마스터다이빙 이론, 전반적인 다이브활동\n   [감독 및 보조]',
          '2. 총 5개 이상의 스페셜티 [레스큐, 딥다이브,\n   네비게이션, 나이트록스, 과학다이빙 등]',
          '3. 리더쉽 교육',
          '4. 다이브 지도자가 갖추어야 할 소양과 스킬',
          '5. 완료후 마스터 자격취득'
        ]
      }
    ]
  },
  specialty: {
    type: 'list',
    title: '스페셜티(SPECIALTY)',
    items: [
      {
        title: '나이트록스(NITROX)',
        subtitle: '교육 : $200 - 당일과정',
        description: '나이트록스란? / 나이트록스계산방법 / 나이트록스 이론',
        requirements: '자격요건 : 오픈워터 자격증 소지자 이상',
        image: '/scuba-specialty-1.jpg'
      },
      {
        title: '딥다이빙(DEEP DIVING)',
        subtitle: '교육 : $200 - 당일과정',
        description: '딥 다이빙 / 계획다이빙 설명 / 감압병 /\n산소중독 / 질소마취 / 폐 과도팽창 상해',
        requirements: '자격요건 : 오픈워터 자격증 소지자 이상',
        image: '/scuba-specialty-2.jpg'
      },
      {
        title: '네비게이션(NAVIGATION)',
        subtitle: '교육 : $200 - 1일과정',
        description: '자연항법 / 나침반 항법 연합하기/나침반 항법',
        requirements: '자격요건 : 오픈워터 자격증 소지자 이상',
        image: '/scuba-specialty-3.jpg'
      },
      {
        title: '나이트다이빙(NIGHT DIVING)',
        subtitle: '교육 : $200 - 1일과정',
        description: '야간 및 제한 시야 다이빙',
        requirements: '자격요건 : 오픈워터 자격증 소지자 이상',
        image: '/scuba-specialty-4.jpg'
      },
      {
        title: '완벽 중성부력( PERFECT BUOYANCY)',
        subtitle: '교육 : $200 - 1일과정',
        description: '수면과 수중에서의 완벽한 부력조절 도전!/호버링/핀 피복',
        requirements: '자격요건 : 오픈워터 자격증 소지자 이상',
        image: '/scuba-specialty-5.jpg'
      },
      {
        title: '사진과 비디오(PHOTO & VIDEO)',
        subtitle: '교육 : $200 - 1일과정',
        description: '사진 및 비디오촬영방법 /촬영방법 노하우교육 /촬영시 주의점',
        requirements: '자격요건 : 오픈워터 자격증 소지자 이상',
        image: '/scuba-specialty-6.jpg'
      }
    ]
  },
  fun: {
    type: 'list',
    title: '펀다이빙(FUN DIVING)',
    items: [
      {
        title: '비치(펀) 다이빙',
        subtitle: '1인비용 $60 / 다이빙 횟수 2회',
        description: '[포함사항]\n장비렌탈 풀셋\n\n[별도]\n점심식사',
        image: '/scuba-fun-1.jpg'
      },
      {
        title: '보트(펀) 다이빙(아일랜드)',
        subtitle: '상담',
        description: '[포함사항]\n장비렌탈 풀셋 / 점심식사',
        image: '/scuba-fun-2.jpg'
      },
      {
        title: '나이트 다이빙',
        subtitle: '1인비용 $50 / 다이빙 횟수 1회',
        description: '[포함사항]\n장비렌탈 풀셋\n\n[별도]\n식사 / 후레쉬라이트[1일/$10]',
        image: '/scuba-fun-3.jpg'
      },
      {
        title: '체험 다이빙',
        subtitle: '1인 비용 $50 / 다이빙 횟수 1회',
        description: '[포함사항]\n장비렌탈 풀셋, SSI TRY SCUBA 증명서 발급\n\n[별도]\n점심식사',
        image: '/scuba-fun-4.jpg'
      }
    ]
  },
  package: {
    type: 'list',
    title: '다이빙패키지(DIVING PACKAGE)',
    items: [
      {
        title: '[다이빙패키지 I] 오픈워터(OW) + 어드밴스(AA)',
        subtitle: '4일과정 / 1인 교육 480$(할인적용)',
        description: '[포함사항]\n라이센스 발급비용, 스쿠버다이빙 장비 풀세트, 사진 및 동영상 촬영\n점심식사, 비치타올, 샤워시설, 막탄내 픽업 / 드랍',
        requirements: '※ 숙박비용은 별도 입니다.',
        image: '/scuba-package-1.jpg'
      },
      {
        title: '[다이빙패키지 II] 오픈워터(OW) + 비치(FUN)다이빙',
        subtitle: '3일과정 / 1인 교육 300$',
        description: '[포함사항]\n라이센스 발급비용, 스쿠버다이빙 장비 풀세트, 사진 및 동영상 촬영\n점심식사, 비치타올, 샤워시설, 막탄내 픽업 / 드랍',
        requirements: '※ 숙박비용은 별도 입니다.',
        image: '/scuba-package-2.jpg'
      },
      {
        title: '[다이빙패키지 III] 어드밴스(AA) + 비치(FUN)다이빙',
        subtitle: '3일과정 / 1인 교육 300$',
        description: '[포함사항]\n라이센스 발급비용, 스쿠버다이빙 장비 풀세트, 사진 및 동영상 촬영\n점심식사, 비치타올, 샤워시설, 막탄내 픽업 / 드랍',
        requirements: '※ 숙박비용은 별도 입니다.',
        image: '/scuba-package-3.jpg'
      },
      {
        title: '[다이빙패키지 IV] 업그레이드 교육(다이빙 재교육)',
        subtitle: '1일과정 / 1인 교육 100$',
        description: '[포함사항]\n스쿠버다이빙 장비 풀세트, 사진 및 동영상 촬영\n점심식사, 비치타올, 샤워시설.',
        requirements: '※ 숙박비용은 별도 입니다.',
        image: '/scuba-package-4.jpg'
      }
    ]
  }
};
