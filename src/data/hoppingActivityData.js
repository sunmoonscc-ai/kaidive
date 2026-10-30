export const hoppingActivityI18n = {
  ko: {
    fallbackTitle: "콘텐츠 준비중입니다",
    fallbackDesc: "곧 유익한 내용으로 업데이트될 예정입니다.",
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
        timeline: [
          { time: '09:00', desc: '호텔 & 리조트 픽업' },
          { time: '10:00', desc: '샵 도착 후 브리핑 및 호핑투어 출발' },
          { time: '10:30', desc: '올랑고 아일랜드 도착 후 스노클링' },
          { time: '12:30', desc: '선상 바베큐 & 삼겹살 점심식사' },
          { time: '13:30', desc: '올랑고 포인트 이동 후 2차 스노클링 & 줄낚시 체험' },
          { time: '15:30', desc: '막탄 섬으로 복귀' },
          { time: '16:00', desc: '호텔 & 리조트 드랍' }
        ],
        warning: '* 스케줄은 현지 날씨나 해상 상황에 따라 변경될 수 있습니다.'
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
          description: '제트스키는 동력을 이용해 수면 위를 질주하는 레포츠입니다. 시속 80~90km까지 속도를 낼 수 있어 아름다운 세부 바다 위를 가르며 짜릿한 스피드를 즐길 수 있습니다.',
          preparation: '준비물 : 수영복, 물놀이 복장 [물에 젖을 수 있습니다.]\n최대 2인까지 탑승 가능합니다.',
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
          description: '바나나 모양의 무동력 보트를 모터보트나 제트스키에 연결하여 수면 위를 질주하는 레포츠로, 온 가족과 친구들이 함께 신나게 즐기실 수 있습니다.',
          preparation: '준비물 : 수영복, 물놀이 복장 [물에 젖을 수 있습니다.]\n최대 8인까지 탑승 가능합니다.',
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
          description: '특수 제작된 낙하산을 착용하고 고속 모터보트의 추진력으로 하늘 높이 날아올라 세부 바다의 에메랄드빛 파노라마 뷰와 스릴을 만끽하는 인기 레포츠입니다.',
          preparation: '준비물 : 수영복, 물놀이 복장 [물에 젖을 수 있습니다.]\n최대 2인까지 탑승 가능합니다.',
          boxInfo: {
            top: '파라세일링 1회',
            price: '$85',
            cap: '2인까지 가능',
            duration: '15~20분'
          }
        },
        {
          title: '제트보트',
          description: '강력한 수압 임펠러 추진 방식으로 수면 위를 미끄러지듯 질주하며 급회전과 360도 스핀 등 놀이기구 이상의 짜릿함과 아드레날린을 선사합니다.',
          preparation: '준비물 : 수영복, 물놀이 복장 [물에 젖을 수 있습니다.]\n최대 12인까지 탑승 가능하며 최소 2인 이상 진행됩니다.',
          boxInfo: {
            top: '1인 비용',
            price: '$50',
            cap: '최소 2인 이상',
            duration: '30분'
          }
        }
      ]
    },
    amazing: {
      type: 'video_info',
      title: 'AMAZING SHOW 어메이징쇼',
      descriptions: [
        { text: '세부 최고의 버라이어티 공연!!', bold: true },
        { text: '남녀노소 온 가족이 유쾌하게 관람할 수 있는 건전하고 화려한 쇼입니다.' },
        { text: '웅장한 무대와 신나는 퍼포먼스, 잊지 못할 세부의 밤을 만끽하세요!' }
      ],
      videoUrl: 'https://www.youtube.com/embed/jNN-4FoVQys',
      specs: [
        { label: '관람비용', value: '성인 1인 - $35 / 아동 1인 - $20 (만 10세 이하) / 만 2세 이하 무료 (좌석 미배정)' },
        { label: '공연시간', value: '1부 : 18:00 ~ 19:00 / 2부 : 20:00 ~ 21:00' },
        { label: '포함서비스', value: '1인당 음료 or 맥주 1캔 무료 제공, 막탄 지역 호텔 픽업 & 드랍 포함' }
      ]
    }
  },
  en: {
    fallbackTitle: "Content in Preparation",
    fallbackDesc: "This content will be updated soon.",
    tour: {
      title: 'Private Island Hopping Tour',
      descriptions: [
        { text: 'Explore the marine sanctuary of Olango Island aboard a traditional Filipino motorized banca boat with private snorkeling and handline fishing.', bold: true },
        { text: 'Complimentary pick-up and drop-off in the Mactan area (Cebu City consultation required).', bold: true },
        { text: 'A delicious BBQ & samgyeopsal lunch onboard is fully included.', bold: true },
        { text: 'Fun diving or discover scuba diving can be added upon request (additional fees apply).', color: 'text-error', bold: true },
        { text: 'This private charter is designed for groups of 4 persons or more.', color: 'text-error', bold: true }
      ],
      infoSection: {
        specs: [
          { label: 'Location', value: 'Olango Island Marine Sanctuary' },
          { label: 'Duration', value: 'Approx. 7 Hours' },
          { label: 'Availability', value: 'Daily' },
          { label: 'Inclusions', value: 'Free Mactan pick/drop, lunch, drinks, towels, snorkeling gear, marine park fees' },
          { label: 'Rate', value: '$70 / person', highlight: true }
        ]
      },
      scheduleSection: {
        title: 'Tour Itinerary',
        subtitle: 'The timeline below is a standard reference schedule.',
        timeline: [
          { time: '09:00', desc: 'Hotel & resort pick-up in Mactan' },
          { time: '10:00', desc: 'Arrival at dive center, safety briefing & boat departure' },
          { time: '10:30', desc: 'Arrival at Olango Island sanctuary & first snorkeling session' },
          { time: '12:30', desc: 'Onboard BBQ & grilled pork belly lunch' },
          { time: '13:30', desc: 'Move to second reef point for snorkeling & line fishing' },
          { time: '15:30', desc: 'Sail back to Mactan Island' },
          { time: '16:00', desc: 'Return transfer & hotel drop-off' }
        ],
        warning: '* Schedule may be adjusted depending on local weather and sea conditions.'
      },
      refundPolicy: {
        label: 'Refund Policy',
        value: '7 days prior: 100% / 3 days prior: 50% / 1 day prior: Non-refundable.',
        highlights: ['100%', '50%', 'Non-refundable']
      }
    },
    marine: {
      type: 'cards',
      items: [
        {
          title: 'Jet Ski',
          description: 'Experience pure adrenaline speeding across the turquoise ocean at up to 80-90 km/h on our high-performance Yamaha watercraft.',
          preparation: 'Attire: Swimwear or rash guard (will get wet).\nCapacity: Up to 2 persons per jet ski.',
          extraPriceInfo: 'Standard 30 min: $40 / 1 hour: $70',
          boxInfo: {
            top: '1 Jet Ski',
            price: '$40',
            cap: 'Up to 2 persons',
            duration: '30 min'
          }
        },
        {
          title: 'Banana Boat',
          description: 'A classic, exhilarating ocean ride towed by a speedboat. Perfect for families, colleagues, and groups of friends laughing together!',
          preparation: 'Attire: Swimwear (will get wet).\nCapacity: Up to 8 persons per boat.',
          extraPriceInfo: 'Standard 30 min: $80 / 1 hour: $110',
          boxInfo: {
            top: '1 Banana Boat',
            price: '$80',
            cap: 'Up to 8 persons',
            duration: '30 min'
          }
        },
        {
          title: 'Parasailing',
          description: 'Soar high above Mactan’s tropical coastline with our custom winch boat for an unmatched 360-degree aerial panorama and breezy thrills.',
          preparation: 'Attire: Swimwear or comfortable summer clothes.\nCapacity: 1 to 2 persons per flight.',
          boxInfo: {
            top: '1 Parasail Flight',
            price: '$85',
            cap: 'Up to 2 persons',
            duration: '15-20 min'
          }
        },
        {
          title: 'Jet Boat',
          description: 'High-speed jet propulsion delivers extreme 360-degree spins, sharp fishtails, and high-speed glides for an amusement-park thrill on water.',
          preparation: 'Attire: Swimwear (splash guaranteed).\nCapacity: Up to 12 persons (minimum 2 persons required).',
          boxInfo: {
            top: 'Rate per Person',
            price: '$50',
            cap: 'Min. 2 persons',
            duration: '30 min'
          }
        }
      ]
    },
    amazing: {
      type: 'video_info',
      title: 'CEBU AMAZING SHOW',
      descriptions: [
        { text: 'Cebu’s premier theatrical cabaret performance!', bold: true },
        { text: 'A dazzling, family-friendly variety show suitable for audiences of all ages.' },
        { text: 'Enjoy glamorous choreography, world-class musical numbers, and vibrant comedy.' }
      ],
      videoUrl: 'https://www.youtube.com/embed/jNN-4FoVQys',
      specs: [
        { label: 'Admission', value: 'Adult: $35 / Child: $20 (under 10 yrs) / Under 2 yrs free (no dedicated seat)' },
        { label: 'Showtimes', value: '1st Show: 18:00 - 19:00 / 2nd Show: 20:00 - 21:00' },
        { label: 'Inclusions', value: '1 complimentary drink/beer per person, round-trip Mactan hotel transfers' }
      ]
    }
  },
  ja: {
    fallbackTitle: "コンテンツ準備中",
    fallbackDesc: "間もなく最新情報をアップデートいたします。",
    tour: {
      title: 'プライベート アイランドホッピングツアー',
      descriptions: [
        { text: 'セブの海洋保護区オランゴ島へ伝統のバンカーボートで出航。プライベート感満載のシュノーケリングと糸釣り体験を満喫！', bold: true },
        { text: 'マクタン島内ホテル・リゾート無料送迎付き（セブ市内は要相談）。', bold: true },
        { text: '船上での焼き立てBBQ＆サムギョプサルランチが含まれています。', bold: true },
        { text: 'ご希望に応じてファンダイブや体験ダイビングを追加可能（追加料金あり）。', color: 'text-error', bold: true },
        { text: '本ツアーは4名様以上から催行可能な貸切チャータープランです。', color: 'text-error', bold: true }
      ],
      infoSection: {
        specs: [
          { label: '場所', value: 'オランゴ島 海洋保護区' },
          { label: '所要時間', value: '約7時間' },
          { label: '催行日', value: '毎日' },
          { label: '含まれるもの', value: 'マクタン島送迎、ランチ、ドリンク、タオル、シュノーケル機材、入島料' },
          { label: '料金', value: '$70 / 名', highlight: true }
        ]
      },
      scheduleSection: {
        title: 'ツアースケジュール',
        subtitle: '※下記は標準的なタイムスケジュールの目安です。',
        timeline: [
          { time: '09:00', desc: 'ホテル・リゾートへお迎え' },
          { time: '10:00', desc: 'ショップ到着、ブリーフィング後ボート出航' },
          { time: '10:30', desc: 'オランゴ島到着、透明度抜群の海でシュノーケリング' },
          { time: '12:30', desc: '船上にて特製BBQ＆サムギョプサルランチ' },
          { time: '13:30', desc: '別ポイントへ移動、2回目シュノーケリング＆船釣り体験' },
          { time: '15:30', desc: 'マクタン島へ向けて帰航' },
          { time: '16:00', desc: 'ホテル到着・お見送り' }
        ],
        warning: '* 当日の天候や波の状況によりスケジュールが調整される場合があります。'
      },
      refundPolicy: {
        label: 'キャンセル規定',
        value: '7日前：100%返金 / 3日前：50%返金 / 前日以降：返金不可',
        highlights: ['100%', '50%', '返金不可']
      }
    },
    marine: {
      type: 'cards',
      items: [
        {
          title: 'ジェットスキー',
          description: '時速80〜90kmのスピードで青い海原を駆け抜ける爽快マリンスポーツ！セブの美しい水平線に向かって爽快にアクセルを踏み込みましょう。',
          preparation: '服装：水着・ラッシュガード着用（濡れます）\n定員：1台につき最大2名様まで',
          extraPriceInfo: '基本30分：$40 / 1時間：$70',
          boxInfo: {
            top: 'ジェットスキー 1台',
            price: '$40',
            cap: '2名様まで',
            duration: '30分'
          }
        },
        {
          title: 'バナナボート',
          description: 'モーターボートに引っ張られて水面を跳ねるように滑走！ファミリーやお友達グループで大絶叫・大盛り上がり間違いなしの定番アクティビティ。',
          preparation: '服装：水着着用（濡れます）\n定員：最大8名様まで',
          extraPriceInfo: '基本30分：$80 / 1時間：$110',
          boxInfo: {
            top: 'バナナボート 1台',
            price: '$80',
            cap: '最大8名様',
            duration: '30分'
          }
        },
        {
          title: 'パラセーリング',
          description: '専用ボートから一気に上空へ！空中ブランコに乗っているような感覚で、セブ島とマクタン島のエメラルドブルーの絶景パノラマを一望できます。',
          preparation: '服装：水着または動きやすい服装\n定員：1回につき1〜2名様',
          boxInfo: {
            top: 'パラセーリング 1回',
            price: '$85',
            cap: '2名様まで',
            duration: '15〜20分'
          }
        },
        {
          title: 'ジェットボート',
          description: '強力ジェット水流による超高速走行、急旋回、360度スピン！まるで海上ジェットコースターのような究極のスリルを体感してください。',
          preparation: '服装：水着着用（大量の水しぶきを浴びます）\n定員：最大12名様（最少催行2名様〜）',
          boxInfo: {
            top: 'お一人様料金',
            price: '$50',
            cap: '2名様以上',
            duration: '30分'
          }
        }
      ]
    },
    amazing: {
      type: 'video_info',
      title: 'セブ・アメージングショー (AMAZING SHOW)',
      descriptions: [
        { text: 'セブ島No.1の本格バラエティキャバレーショー！', bold: true },
        { text: 'お子様からご年配の方まで、ご家族全員で楽しめる華やかで健全な舞台です。' },
        { text: '豪華な衣装、ダイナミックなダンス、笑いありの極上エンターテインメント！' }
      ],
      videoUrl: 'https://www.youtube.com/embed/jNN-4FoVQys',
      specs: [
        { label: '観覧料金', value: '大人：$35 / 小人：$20 (10歳以下) / 2歳以下無料 (座席なし)' },
        { label: '公演時間', value: '第1部：18:00〜19:00 / 第2部：20:00〜21:00' },
        { label: 'サービス', value: '1名様につきドリンク1杯無料（ビール・ソフトドリンク）、マクタン島内無料送迎' }
      ]
    }
  },
  'zh-CN': {
    fallbackTitle: "内容准备中",
    fallbackDesc: "精彩内容即将更新，敬请期待。",
    tour: {
      title: '独享私人包船跳岛游',
      descriptions: [
        { text: '乘坐菲律宾传统特色螃蟹船，前往著名的奥兰戈岛海洋保护区，畅享私人浮潜与海钓体验。', bold: true },
        { text: '麦克坦岛内酒店享免费专车接送（宿务市区需另询）。', bold: true },
        { text: '船上精心准备现烤BBQ与烤五花肉丰盛午餐。', bold: true },
        { text: '出海期间可额外增加欢乐潜水或体验潜水（需加收额外费用）。', color: 'text-error', bold: true },
        { text: '本独立包船行程为4人起订的高端度假套餐。', color: 'text-error', bold: true }
      ],
      infoSection: {
        specs: [
          { label: '地点', value: '奥兰戈岛国家海洋保护区' },
          { label: '用时', value: '约7小时' },
          { label: '发团日期', value: '天天出团' },
          { label: '包含项目', value: '麦克坦免费接送、BBQ午餐、饮品、浴巾、浮潜装备、所有上岛费' },
          { label: '费用', value: '$70 / 每人', highlight: true }
        ]
      },
      scheduleSection: {
        title: '行程安排',
        subtitle: '※ 以下时间表为标准参考行程。',
        timeline: [
          { time: '09:00', desc: '酒店及度假村专车接送' },
          { time: '10:00', desc: '抵达潜水中心简短安全说明，乘船启航出海' },
          { time: '10:30', desc: '抵达奥兰戈岛海洋保护区，开启首次浮潜' },
          { time: '12:30', desc: '船上品尝特色海鲜BBQ与烤五花肉午餐' },
          { time: '13:30', desc: '前往另一处珊瑚礁点进行二次浮潜与趣味海钓' },
          { time: '15:30', desc: '乘船返回麦克坦岛' },
          { time: '16:00', desc: '专车送回酒店' }
        ],
        warning: '* 实际时间可能根据当天海况与天气略作微调。'
      },
      refundPolicy: {
        label: '退改规定',
        value: '提前7天：100%全退 / 提前3天：退款50% / 提前1天内：不可退款',
        highlights: ['100%', '50%', '不可退款']
      }
    },
    marine: {
      type: 'cards',
      items: [
        {
          title: '摩托艇 (Jet Ski)',
          description: '驾驶大马力摩托艇以80-90公里时速飞驰在碧蓝海面，破浪前行，尽享极致速度与激情。',
          preparation: '着装：泳装或水母衣（会湿身）\n载客：每台最多乘载2人',
          extraPriceInfo: '基础30分钟：$40 / 1小时：$70',
          boxInfo: {
            top: '摩托艇 1台',
            price: '$40',
            cap: '最多2人',
            duration: '30分钟'
          }
        },
        {
          title: '香蕉船 (Banana Boat)',
          description: '由快艇高速拖曳的充气无动力香蕉船，随浪翻滚欢笑不断，是家庭与朋友出游的绝佳欢乐项目。',
          preparation: '着装：泳装（会湿身）\n载客：每船最多乘载8人',
          extraPriceInfo: '基础30分钟：$80 / 1小时：$110',
          boxInfo: {
            top: '香蕉船 1台',
            price: '$80',
            cap: '最多8人',
            duration: '30分钟'
          }
        },
        {
          title: '拖曳伞 (Parasailing)',
          description: '穿戴特制降落伞被快艇升上数十米高空，以俯瞰视角尽览宿务麦克坦蔚蓝海域的全景风光。',
          preparation: '着装：泳衣或轻便夏装\n载客：每次1-2人同飞',
          boxInfo: {
            top: '拖曳伞 1次',
            price: '$85',
            cap: '最多2人',
            duration: '15~20分钟'
          }
        },
        {
          title: '喷射快艇 (Jet Boat)',
          description: '采用强劲喷射推进技术，实现高速疾驰、急速漂移与360度大甩尾，带来媲美水上过山车的狂飙体验。',
          preparation: '着装：泳装（必定湿身）\n载客：最多12人（2人起订）',
          boxInfo: {
            top: '单人费用',
            price: '$50',
            cap: '2人起订',
            duration: '30分钟'
          }
        }
      ]
    },
    amazing: {
      type: 'video_info',
      title: '宿务奇幻秀 (AMAZING SHOW)',
      descriptions: [
        { text: '宿务排名第一的豪华舞台秀！', bold: true },
        { text: '老少咸宜、适合全家欢度夜生活的健康精彩歌舞大秀。' },
        { text: '华丽服饰、经典百老汇与流行歌舞编排，度过难忘的海岛之夜！' }
      ],
      videoUrl: 'https://www.youtube.com/embed/jNN-4FoVQys',
      specs: [
        { label: '门票费用', value: '成人：$35 / 儿童：$20 (10岁以下) / 2岁以下免票 (不占座)' },
        { label: '演出场次', value: '第1场：18:00 ~ 19:00 / 第2场：20:00 ~ 21:00' },
        { label: '赠送服务', value: '每人免费赠送饮品或啤酒1罐，麦克坦区域酒店免费往返接送' }
      ]
    }
  },
  'zh-TW': {
    fallbackTitle: "內容準備中",
    fallbackDesc: "精彩內容即將更新，敬請期待。",
    tour: {
      title: '專屬私人包船跳島遊',
      descriptions: [
        { text: '搭乘菲律賓傳統特色螃蟹船，前往知名的奧蘭戈島海洋保護區，享受隱私度極高的浮潛與手線海釣樂趣。', bold: true },
        { text: '麥克坦島內飯店享免費專車接送（宿霧市區請另行諮詢）。', bold: true },
        { text: '船上備有現場料理的特製BBQ與烤五花肉豐盛午餐。', bold: true },
        { text: '出海期間可依需求加購Fun Diving歡樂潛水或體驗潛水（加購費用另計）。', color: 'text-error', bold: true },
        { text: '此獨立包船行程為4人以上成行的高品質度假套裝。', color: 'text-error', bold: true }
      ],
      infoSection: {
        specs: [
          { label: '地點', value: '奧蘭戈島國家海洋保護區' },
          { label: '用時', value: '約7小時' },
          { label: '出團日期', value: '每日出發' },
          { label: '包含項目', value: '麥克坦專車接送、BBQ午餐、飲料、浴巾、浮潛裝備、全島入園費' },
          { label: '費用', value: '$70 / 每人', highlight: true }
        ]
      },
      scheduleSection: {
        title: '行程規劃',
        subtitle: '※ 以下時間表為標準參考行程。',
        timeline: [
          { time: '09:00', desc: '飯店及度假村專車接送' },
          { time: '10:00', desc: '抵達潛水中心行前簡報，搭乘螃蟹船啟航出海' },
          { time: '10:30', desc: '抵達奧蘭戈島保護區，展開首次精彩浮潛' },
          { time: '12:30', desc: '船上品嚐特色BBQ與香煎五花肉午餐' },
          { time: '13:30', desc: '前往另一處珊瑚礁點進行二次浮潛與趣味海釣' },
          { time: '15:30', desc: '返航回到麥克坦島碼頭' },
          { time: '16:00', desc: '專車送回飯店' }
        ],
        warning: '* 實際行程時間可能依當天海象天候微調。'
      },
      refundPolicy: {
        label: '退改規定',
        value: '出發前7天：100%全退 / 出發前3天：退款50% / 出發前1天內：不可退款',
        highlights: ['100%', '50%', '不可退款']
      }
    },
    marine: {
      type: 'cards',
      items: [
        {
          title: '水上摩托車 (Jet Ski)',
          description: '以80-90公里時速狂飆在蔚藍海面上，破浪奔馳，體驗無與倫比的速度感與海風呼嘯的快感。',
          preparation: '服裝：泳裝或水母衣（會全身濕透）\n乘載：每台最多乘載2人',
          extraPriceInfo: '標準30分鐘：$40 / 1小時：$70',
          boxInfo: {
            top: '水上摩托車 1台',
            price: '$40',
            cap: '最多2人',
            duration: '30分鐘'
          }
        },
        {
          title: '香蕉船 (Banana Boat)',
          description: '由快艇高速拖曳的無動力充氣香蕉船，乘風破浪歡笑連連，是親朋好友一起出海同樂的必玩項目。',
          preparation: '服裝：泳衣（會濕身）\n乘載：每船最多乘載8人',
          extraPriceInfo: '標準30分鐘：$80 / 1小時：$110',
          boxInfo: {
            top: '香蕉船 1台',
            price: '$80',
            cap: '最多8人',
            duration: '30分鐘'
          }
        },
        {
          title: '拖曳傘 (Parasailing)',
          description: '穿戴專用降落傘隨快艇升入高空，鳥瞰宿霧與麥克坦島的珊瑚海景與壯麗天際線。',
          preparation: '服裝：泳裝或輕便夏裝\n乘載：每次1-2人共乘',
          boxInfo: {
            top: '拖曳傘 1次',
            price: '$85',
            cap: '最多2人',
            duration: '15~20分鐘'
          }
        },
        {
          title: '噴射快艇 (Jet Boat)',
          description: '強大噴射推進動力，帶來急速狂飆、超快速甩尾與360度極限旋轉，宛如海上雲霄飛車般的終極刺激體驗！',
          preparation: '服裝：泳裝（保證濕身）\n乘載：最多12人（2人成行）',
          boxInfo: {
            top: '單人費用',
            price: '$50',
            cap: '2人起訂',
            duration: '30分鐘'
          }
        }
      ]
    },
    amazing: {
      type: 'video_info',
      title: '宿霧奇幻秀 (AMAZING SHOW)',
      descriptions: [
        { text: '宿霧最具代表性的豪華歌舞大秀！', bold: true },
        { text: '闔家皆宜、充滿歡笑與視覺震撼的健康夜間娛樂。' },
        { text: '華麗奪目的服飾、百老匯級編舞與風趣互動，為您的宿霧假期增添無限回憶！' }
      ],
      videoUrl: 'https://www.youtube.com/embed/jNN-4FoVQys',
      specs: [
        { label: '門票費用', value: '成人：$35 / 兒童：$20 (10歲以下) / 2歲以下免票 (不佔位)' },
        { label: '演出場次', value: '第1場：18:00 ~ 19:00 / 第2場：20:00 ~ 21:00' },
        { label: '贈送服務', value: '每人免費提供飲料或啤酒1罐，麥克坦區域飯店免費來回接送' }
      ]
    }
  }
};
