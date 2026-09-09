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
        value: '약 1시간 소요 (스쿠버다이빙 장비설명, 안전교육, 입수방법, 수중에서의 주의사항과 수중 생태계 이해에 대한 입수 전 브리핑)',
        highlight: '약 1시간 소요',
        highlightColor: 'text-error'
      },
      { 
        label: '준비물', 
        value: '수영복, 선크림, 액체형 멀미약, 기타 개인준비물' 
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
        value: '예약금은 $50(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.\n[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]\n\n예약일 변경은 최소3일전까지 가능합니다.\n\n천재지변, 기상악화[주의보(태풍등)]인 경우 100% 예약금 환불 가능하며, 단순변심으로 인한 환불은 불가 합니다.\n우천시는 다이빙과 무관하며 정상교육 진행됩니다.',
        highlightWords: [
          { word: '예약금은 $50(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.', color: 'text-error' },
          { word: '[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]', color: 'text-error' }
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
        value: '예약금은 $50(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.\n[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]\n\n예약일 변경은 최소3일전까지 가능합니다.\n\n천재지변, 기상악화[주의보(태풍등)]인 경우 100% 예약금 환불 가능하며, 단순변심으로 인한 환불은 불가 합니다.\n우천시는 다이빙과 무관하며 정상교육 진행됩니다.',
        highlightWords: [
          { word: '예약금은 $50(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.', color: 'text-error' },
          { word: '[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]', color: 'text-error' }
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
        value: '예약금은 $100(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.\n[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]\n\n예약일 변경은 최소3일전까지 가능합니다.\n\n천재지변, 기상악화[주의보(태풍등)]인 경우 100% 예약금 환불 가능하며, 단순변심으로 인한 환불은 불가 합니다.\n우천시는 다이빙과 무관하며 정상교육 진행됩니다.',
        highlightWords: [
          { word: '예약금은 $100(당일 환율기준) 이며 최종예약 후 예약금 환불은 불가합니다.', color: 'text-error' },
          { word: '[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]', color: 'text-error' }
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
          '3. 리더십 교육',
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
  },
  instructor: {
    type: 'standard',
    title: '프로다이빙 [강사]',
    intro: [
      { text: '카이다이브의 강사 개발 코스는 스쿠버다이빙 강사 양성 과정으로 강사 후보생의 능력을 최대한 향상시키고 SSI 철학,\n' },
      { text: 'SSI 교육시스템 교육 능력을 트레이닝 받음으로써 강사로서의 태도와 전문성을 배우는 다이빙 교육자 과정입니다.\n' },
      { text: '강사개발 과정 이후 평가관에 의해 평가를 받게 됩니다.\n' },
      { text: '다이빙 강사로 가는 전문가의 길,\n' },
      { text: '저희 카이다이브와 함께 도전해보세요.\n', bold: true }
    ],
    image: '/scuba-instructor.jpg',
    specs: [
      { label: '교육장소', value: 'MACTAN' },
      { label: '교육기간', value: '상담' },
      { label: '교육가능일', value: '매일' },
      { label: '교육비용', value: '교육 : 상담 (멤버 등록비 별도)', highlight: '(멤버 등록비 별도)', highlightColor: 'text-error' }
    ],
    extraSpecsTitle: '교육안내',
    extraSpecsSubtitle: '카이다이빙에서 안전하고 즐겁게 도전해보세요.',
    extraSpecs: [
      { label: '참가자격', value: '레스큐 자격증 & 마스터 자격증 소지자' },
      { label: '준비물', value: '수영복, 바다 나가는 복장, 좋은컨디션, 노트북&스마트폰(필수사항아님)' },
      { label: '교육비용', value: '교육 : 상담 (멤버 등록비 별도)', highlight: '(멤버 등록비 별도)', highlightColor: 'text-error' },
      { 
        label: '환불규정', 
        value: '모든 다이빙 예약금은 100$(오늘자 환율로 입금)이며 최종예약이 되시면 예약금 환불은 불가합니다.\n예약일 변경은 최소 3일전까지 가능합니다.\n기상악화(주의보(태풍등))인경우 100% 환불가능. 단순변심으로 인한것은 환불불가합니다.\n비오는날은 다이빙과 무관하며 정상교육진행됩니다\n[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]',
        highlightWords: [
          { word: '모든 다이빙 예약금은 100$(오늘자 환율로 입금)이며 최종예약이 되시면 예약금 환불은 불가합니다.', color: 'text-error' },
          { word: '예약일 변경은 최소 3일전까지 가능합니다.', color: 'text-error font-bold' },
          { word: '[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]', color: 'text-secondary' }
        ]
      }
    ],
    warnings: [
      '* 마지막 스쿠버다이빙 이후 최소 24시간 동안 비행하실수 없으니 참고하시고 여행계획세우세요.',
      '* 스케줄은 그날 날씨상황에 따라 변동될수 있습니다.'
    ],
    scheduleTitle: '교육일정안내',
    schedules: [
      {
        day: '오픈워터 인스트럭터',
        items: [
          'SSI 토탈 티칭 시스템',
          '학과 교육하기',
          '풀/제한 수역 교육하기',
          '스쿠버 스킬 업데이트 교육하기',
          '다이브 브리핑',
          '스페셜티(네비게이션,고급중성부력,나이트록스,레스큐)'
        ]
      },
      {
        day: '평가',
        items: [
          'SSI 교육시스템 평가 양식',
          '워터맨십평가',
          '수중강습평가',
          '다이브가이드평가하기',
          '다이브브리핑평가',
          '학과강습평가',
          '프로페셔널 평가'
        ]
      }
    ]
  },
  assistant: {
    type: 'standard',
    title: '프로다이빙 [보조강사]',
    intro: [
      { text: '프로다이버의 첫걸음 다이브가이드, 사이언스 오브 다이빙 교육을 이수하시면\n' },
      { text: '보조강사 취득조건이 되며 고유회원번호를 발급받게 됩니다.\n' },
      { text: '프로다이버로서 자격을 갖출 수 있습니다.\n' },
      { text: '프로 다이버로서 에티켓과 시범 가능한 수준의 스킬을 익히며 다이빙 물리학,\n생리학, 환경, 장비에 관하여 배우게 됩니다.\n' },
      { text: '안전하고 확실하게 프로다이버로서의 첫 관문을 저희 카이다이브와 함께 도전해보세요.\n', bold: true }
    ],
    image: '/scuba-assistant.jpg',
    specs: [
      { label: '교육장소', value: 'MACTAN' },
      { label: '교육기간', value: '상담' },
      { label: '교육가능일', value: '매일' },
      { label: '교육비용', value: '교육 : 상담 (멤버 등록비 별도)', highlight: '(멤버 등록비 별도)', highlightColor: 'text-error' }
    ],
    extraSpecsTitle: '교육안내',
    extraSpecsSubtitle: '카이다이빙에서 안전하고 즐겁게 도전해보세요.',
    extraSpecs: [
      { label: '참가자격', value: '레스큐 자격증 & 마스터 자격증 소지자' },
      { label: '준비물', value: '수영복, 바다 나가는 복장, 좋은컨디션, 노트북&스마트폰(필수사항아님)' },
      { label: '교육비용', value: '교육 : 상담 (멤버 등록비 별도)', highlight: '(멤버 등록비 별도)', highlightColor: 'text-error' },
      { 
        label: '환불규정', 
        value: '모든 다이빙 예약금은 100$(오늘자 환율로 입금)이며 최종예약이 되시면 예약금 환불은 불가합니다.\n예약일 변경은 최소 3일전까지 가능합니다.\n기상악화(주의보(태풍등))인경우 100% 환불가능. 단순변심으로 인한것은 환불불가합니다.\n비오는날은 다이빙과 무관하며 정상교육진행됩니다\n[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]',
        highlightWords: [
          { word: '모든 다이빙 예약금은 100$(오늘자 환율로 입금)이며 최종예약이 되시면 예약금 환불은 불가합니다.', color: 'text-error' },
          { word: '예약일 변경은 최소 3일전까지 가능합니다.', color: 'text-error font-bold' },
          { word: '[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]', color: 'text-secondary' }
        ]
      }
    ],
    warnings: [
      '* 마지막 스쿠버다이빙 이후 최소 24시간 동안 비행하실수 없으니 참고하시고 여행계획세우세요.',
      '* 스케줄은 그날 날씨상황에 따라 변동될수 있습니다.'
    ],
    scheduleTitle: '교육일정안내',
    schedules: [
      {
        day: '리액트라이트',
        items: [
          '심폐소생술',
          '응급처치 테크닉',
          '산소공급'
        ]
      },
      {
        day: '다이브가이드',
        items: [
          '다이브가이드',
          '다이브가이드 스트레스&레스큐',
          '그룹관리',
          '다이빙과 스페셜 다이빙 리드하기',
          '학과강습평가',
          '프로페셔널 평가'
        ]
      },
      {
        day: '사이언스오브다이빙',
        items: [
          'SSI 토탈 티칭 시스템',
          '다이빙 물리학',
          '다이빙 생리학',
          '감압이론',
          '토탈다이빙 시스템',
          '수중환경'
        ]
      },
      {
        day: '다이브 콘트롤 스페셜 인스트럭터',
        items: [
          '다이브 콘트롤 스페셜 인스트럭터의 역할',
          '학과 교육하기',
          '풀/제한 수역 교육하기',
          '스쿠버 스킬 업데이트 교육하기'
        ]
      },
      {
        day: '평가',
        items: [
          '워터맨십평가',
          '수중강습평가',
          '다이브가이드평가하기',
          '다이브브리핑평가',
          '학과강습평가',
          '프로페셔널 평가'
        ]
      }
    ]
  },
  'specialty-instructor': {
    type: 'standard',
    title: '프로다이빙 [스페셜티강사]',
    intro: [
      { text: '스페셜티 강사 코스에서는 강사님들이 원하는 스페셜티 항목을 5가지 선택하여 훈련 받을 수 있습니다.\n' },
      { text: '가르칠 수 있는 범위를 딥다이빙, 야간다이빙, 보트다이빙, 컴퓨터다이빙, 포토앤비디오, 고급중성부력, 네비게이션, 나이트록스, 사이드마운트 등으로 넓힐 수 있습니다.\n' },
      { text: '다양한 환경에서 스페셜티 교육 뿐만 아니라 스페셜티 강사님들만의 특별한 다이빙 등 여행 마니아층을 구축할 수 있습니다.\n' },
      { text: '저희 카이다이브와 함께 도전해보세요\n', bold: true }
    ],
    image: '/scuba-specialty-instructor.jpg',
    specs: [
      { label: '교육장소', value: 'MACTAN' },
      { label: '교육기간', value: '상담' },
      { label: '교육가능일', value: '매일' },
      { label: '교육비용', value: '상담', highlight: '상담', highlightColor: 'text-error' }
    ],
    extraSpecsTitle: '교육안내',
    extraSpecsSubtitle: '카이다이빙에서 안전하고 즐겁게 도전해보세요.',
    extraSpecs: [
      { label: '참가자격', value: '레스큐 자격증 & 마스터 자격증 소지자' },
      { label: '준비물', value: '수영복, 바다 나가는 복장, 좋은컨디션, 노트북&스마트폰(필수사항아님)' },
      { label: '교육비용', value: '상담', highlight: '상담', highlightColor: 'text-error' },
      { 
        label: '환불규정', 
        value: '모든 다이빙 예약금은 100$(오늘자 환율로 입금)이며 최종예약이 되시면 예약금 환불은 불가합니다.\n예약일 변경은 최소 3일전까지 가능합니다.\n기상악화(주의보(태풍등))인경우 100% 환불가능. 단순변심으로 인한것은 환불불가합니다.\n비오는날은 다이빙과 무관하며 정상교육진행됩니다\n[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]',
        highlightWords: [
          { word: '모든 다이빙 예약금은 100$(오늘자 환율로 입금)이며 최종예약이 되시면 예약금 환불은 불가합니다.', color: 'text-error' },
          { word: '예약일 변경은 최소 3일전까지 가능합니다.', color: 'text-error font-bold' },
          { word: '[스탭 및 장비와 식사 등을 사전에 준비하기 때문에 환불이 불가합니다. 이 점 양해 부탁드립니다.]', color: 'text-secondary' }
        ]
      }
    ],
    warnings: [
      '* 마지막 스쿠버다이빙 이후 최소 24시간 동안 비행하실수 없으니 참고하시고 여행계획세우세요.',
      '* 스케줄은 그날 날씨상황에 따라 변동될수 있습니다.'
    ],
    scheduleTitle: '교육일정안내',
    schedules: [
      {
        day: '나이트록스',
        items: [
          'SSI 나이트록스 프로그램을 이수하시면 학생들에게 산소의 함유를 40%까지 증가시킨 혼합 공기를 안전하게 계획하고 다이빙하는 방법을 가르칠 수 있습니다.',
          '나이트록스를 사용한 다이빙은 다이버들에게 비 감압 한계 및 안전을 증가시키고 공기와 비교해서 필요한 수면 휴식 시간을 줄입니다.',
          '나이트록스 계산방법 / 나이트록스 이론 / 나이트록스 다이빙'
        ]
      },
      {
        day: '딥다이빙',
        items: [
          '레크리에이션 최대 수심 40m까지로 도전하고자 하는 다이버들에게 딥다이빙',
          '스페셜티 코스를 제공하십시오. 딥다이빙 스페셜티는 테크니컬 코스의 사전 조건으로 훗날 무한수심 테크니컬 다이빙에 도전하고자 하는 다이버들에게 최고의 스페셜티입니다.',
          '공기소모율측정 / 딥 다이빙 계획 단계 / 질소마취 / 감압병 / 과팽창장해 / 사고관리'
        ]
      },
      {
        day: '야간 및 제한 시야 다이빙',
        items: [
          '낮이건 밤이건 시야가 나쁘면 다이빙은 모험이 될 수 있습니다.',
          '여러분의 새로운 다이빙 세계로 문을 열어줄것입니다.',
          '수중에서의 적절한 부력 정의 / 완벽한 부력 / 부력의기초 (다이빙 물리학)'
        ]
      },
      {
        day: '사진과 비디오',
        items: [
          '학생 다이버들과 펀다이버들에게 재미난 추억을 사진에 담을 뿐만 아니라 마케팅에 필요한 사진을 얻으실수 있습니다.',
          '컴팩트 카메라 사용방법 및 촬영 방법 교육 / 수중 사진가가 알아야할 수중생물 생태적특성 교육 / 중심부력'
        ]
      }
    ]
  }
};
