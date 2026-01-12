import { ActivityType, DaySchedule } from './types';

export const ITINERARY: DaySchedule[] = [
  {
    day: 1,
    date: "4/3 (五)",
    title: "踏入夢幻王國",
    theme: "迪士尼全日遊",
    parentingHighlight: "住園區飯店可以隨時回房休息，看完煙火後不用擠地鐵回市區。",
    events: [
      {
        id: "d1-e1",
        time: "08:50",
        title: "抵達香港",
        location: "香港國際機場",
        type: ActivityType.Transport,
        description: "從機場搭乘計程車或地鐵直達飯店寄放行李。",
        travelTime: "飛行抵達"
      },
      {
        id: "d1-e2",
        time: "上午",
        title: "飯店寄放行李",
        location: "迪士尼好萊塢酒店",
        type: ActivityType.Hotel,
        description: "先辦理入住或寄放行李，輕裝出發。",
        travelTime: "計程車約 15-20 分鐘",
        alternatives: [
            {
                id: "d1-e2-alt1",
                time: "上午",
                title: "入住迪士尼探索家度假酒店",
                location: "迪士尼探索家度假酒店",
                type: ActivityType.Hotel,
                description: "更具探險氣氛的飯店，適合喜歡大自然的家庭。",
                travelTime: "計程車約 15-20 分鐘"
            }
        ]
      },
      {
        id: "d1-e3",
        time: "全日",
        title: "香港迪士尼樂園",
        location: "香港迪士尼樂園",
        type: ActivityType.Attraction,
        description: "盡情享受奇妙世界！",
        note: "記得下載迪士尼 App 查看設施排隊時間。",
        travelTime: "接駁巴士約 5-10 分鐘"
      },
      {
        id: "d1-e4",
        time: "午餐",
        title: "大冒險家餐廳",
        location: "迪士尼迷離莊園",
        type: ActivityType.Food,
        description: "園區內用餐，各國料理選擇多（日、韓、印尼）。",
        travelTime: "園區內步行",
        alternatives: [
          {
            id: "d1-e4-alt1",
            time: "午餐",
            title: "皇室宴會廳",
            location: "迪士尼幻想世界",
            type: ActivityType.Food,
            description: "位於城堡區，有美式燒烤、日式拉麵與中式點心。",
            travelTime: "園區內步行"
          },
          {
            id: "d1-e4-alt2",
            time: "午餐",
            title: "大街餐廳",
            location: "美國小鎮大街",
            type: ActivityType.Food,
            description: "美式漢堡與卡通造型特色餐點（Coca-Cola 冠名）。",
            travelTime: "園區內步行"
          }
        ]
      },
      {
        id: "d1-e5",
        time: "晚上",
        title: "入住休息",
        location: "迪士尼好萊塢酒店",
        type: ActivityType.Hotel,
        description: "欣賞完煙火後，輕鬆返回飯店休息。",
        travelTime: "接駁巴士約 10 分鐘"
      }
    ]
  },
  {
    day: 2,
    date: "4/4 (六)",
    title: "九龍美食與 LEGO 冒險",
    theme: "市區放電與米其林美食",
    parentingHighlight: "樂高樂園室內放電不受天氣影響；K11 Musea 設施完善好逛。",
    events: [
      {
        id: "d2-e1",
        time: "上午",
        title: "退房與移動",
        location: "香港金域假日酒店",
        type: ActivityType.Hotel,
        description: "退房後移動至市區飯店寄放行李。",
        travelTime: "地鐵/計程車約 40 分鐘"
      },
      {
        id: "d2-e2",
        time: "午餐",
        title: "逸東軒",
        location: "香港逸東酒店",
        type: ActivityType.Food,
        description: "米其林一星飲茶。",
        note: "推薦原因：環境寬敞，適合帶小孩享用精緻港點。",
        travelTime: "地鐵佐敦站步行約 5 分鐘",
        alternatives: [
            {
                id: "d2-e2-alt1",
                time: "午餐",
                title: "澳洲牛奶公司",
                location: "佐敦白加士街",
                type: ActivityType.Food,
                description: "體驗最道地的港式快餐文化，炒蛋與燉奶必吃。",
                note: "注意：位置較擠，嬰兒車不便。",
                travelTime: "地鐵佐敦站步行約 3 分鐘"
            },
            {
                id: "d2-e2-alt2",
                time: "午餐",
                title: "點點心 (佐敦店)",
                location: "佐敦文英街",
                type: ActivityType.Food,
                description: "新派港式點心，價格親民，豬仔流沙包小孩最愛。",
                travelTime: "地鐵佐敦站步行約 10 分鐘"
            }
        ]
      },
      {
        id: "d2-e3",
        time: "下午",
        title: "香港樂高探索中心",
        location: "K11 MUSEA",
        type: ActivityType.Attraction,
        description: "專為親子設計的室內樂園，盡情放電。",
        travelTime: "地鐵/步行約 15 分鐘",
        alternatives: [
            {
                id: "d2-e3-alt1",
                time: "下午",
                title: "香港科學館",
                location: "尖沙咀東部",
                type: ActivityType.Attraction,
                description: "寓教於樂的好地方，有許多互動設施。",
                travelTime: "步行約 15 分鐘"
            },
            {
                id: "d2-e3-alt2",
                time: "下午",
                title: "九龍公園",
                location: "尖沙咀",
                type: ActivityType.Attraction,
                description: "戶外大型公園，有兒童遊樂場與紅鶴鳥湖，免費放電。",
                travelTime: "步行約 5 分鐘"
            }
        ]
      },
      {
        id: "d2-e4",
        time: "下午",
        title: "K11 人文購物藝術館",
        location: "K11 MUSEA",
        type: ActivityType.Shopping,
        description: "玩完樂高直接逛百貨，舒適方便。",
        travelTime: "同棟建築移動"
      },
      {
        id: "d2-e5",
        time: "點心",
        title: "祥興記上海生煎包 / Owl's Choux",
        location: "尖沙咀樂道",
        type: ActivityType.Food,
        description: "品嚐米其林推薦街頭小吃或人氣泡芙。",
        travelTime: "步行約 10 分鐘"
      },
      {
        id: "d2-e6",
        time: "傍晚",
        title: "星光大道",
        location: "尖沙咀星光大道",
        type: ActivityType.Attraction,
        description: "散步吹海風，欣賞維多利亞港璀璨夜景。",
        travelTime: "步行約 5-8 分鐘",
        alternatives: [
            {
                id: "d2-e6-alt1",
                time: "傍晚",
                title: "維港遊觀光船",
                location: "尖沙咀碼頭",
                type: ActivityType.Attraction,
                description: "搭乘「張保仔號」或天星小輪，從海上看夜景。",
                travelTime: "步行約 5 分鐘"
            }
        ]
      },
      {
        id: "d2-e7",
        time: "宵夜",
        title: "廟街夜市 & 媽咪雞蛋仔",
        location: "廟街",
        type: ActivityType.Food,
        description: "感受道地夜市氣氛，必吃米其林推薦雞蛋仔。",
        travelTime: "計程車/公車約 15 分鐘"
      }
    ]
  },
  {
    day: 3,
    date: "4/5 (日)",
    title: "港島懷舊與海濱摩天輪",
    theme: "中環漫遊與叮叮車體驗",
    parentingHighlight: "大館與中環街市空間寬敞有冷氣；摩天輪取代太平山更輕鬆。",
    events: [
      {
        id: "d3-e1",
        time: "上午",
        title: "中環街市 & 大館",
        location: "大館",
        type: ActivityType.Attraction,
        description: "參觀活化古蹟，空間寬敞適合小孩跑跳。",
        travelTime: "地鐵中環站約 15 分鐘"
      },
      {
        id: "d3-e2",
        time: "體驗",
        title: "半山扶手電梯 & 石板街",
        location: "中環半山扶手電梯",
        type: ActivityType.Attraction,
        description: "體驗世界最長戶外手扶梯與懷舊街道。",
        travelTime: "步行約 5 分鐘"
      },
      {
        id: "d3-e3",
        time: "午餐",
        title: "一樂燒鵝 或 蘭芳園",
        location: "中環結志街",
        type: ActivityType.Food,
        description: "經典燒鵝或絲襪奶茶。",
        note: "親子策略：店內較擠，建議「外帶」至大館廣場舒適享用。",
        travelTime: "步行約 5-10 分鐘",
        alternatives: [
            {
                id: "d3-e3-alt1",
                time: "午餐",
                title: "九記牛腩",
                location: "中環歌賦街",
                type: ActivityType.Food,
                description: "香港最著名的牛腩麵之一，需排隊。",
                note: "人多擁擠，不適合推車。",
                travelTime: "步行約 10 分鐘"
            },
            {
                id: "d3-e3-alt2",
                time: "午餐",
                title: "麥當勞 (概念店)",
                location: "金鐘海富中心",
                type: ActivityType.Food,
                description: "如果小孩吃不慣港式，這家麥當勞裝潢特殊且有自助點餐。",
                travelTime: "地鐵一站距離"
            }
        ]
      },
      {
        id: "d3-e4",
        time: "下午",
        title: "香港摩天輪",
        location: "香港摩天輪",
        type: ActivityType.Attraction,
        description: "輕鬆搭乘摩天輪，飽覽維港美景，小孩最愛。",
        travelTime: "步行至海濱約 15 分鐘",
        alternatives: [
            {
                id: "d3-e4-alt1",
                time: "下午",
                title: "太平山頂 (山頂纜車)",
                location: "山頂纜車總站",
                type: ActivityType.Attraction,
                description: "經典行程，風景絕佳，但排隊時間較長。",
                note: "週末人潮眾多，建議購買快速通關。",
                travelTime: "計程車/步行至纜車站約 20 分鐘"
            }
        ]
      },
      {
        id: "d3-e5",
        time: "交通",
        title: "搭乘叮叮車",
        location: "軒尼詩道",
        type: ActivityType.Transport,
        description: "體驗百年電車，感受港島慢活節奏。",
        travelTime: "電車移動約 20 分鐘"
      },
      {
        id: "d3-e6",
        time: "點心",
        title: "Bakehouse",
        location: "灣仔大王東街",
        type: ActivityType.Food,
        description: "購買超人氣酸種蛋塔作為點心或伴手禮。",
        travelTime: "步行約 5 分鐘"
      },
      {
        id: "d3-e7",
        time: "晚餐",
        title: "甘牌燒鵝 或 一品雞煲火鍋",
        location: "灣仔軒尼詩道",
        type: ActivityType.Food,
        description: "享用連續多年米其林一星燒鵝或特色火鍋。",
        travelTime: "步行約 5-10 分鐘",
        alternatives: [
            {
                id: "d3-e7-alt1",
                time: "晚餐",
                title: "橋底辣蟹",
                location: "灣仔駱克道",
                type: ActivityType.Food,
                description: "避風塘炒蟹始祖，口味較重，海鮮愛好者首選。",
                travelTime: "步行約 10 分鐘"
            },
             {
                id: "d3-e7-alt2",
                time: "晚餐",
                title: "再興燒臘飯店",
                location: "灣仔軒尼詩道",
                type: ActivityType.Food,
                description: "平價米其林推薦，叉燒飯最有名。",
                travelTime: "步行約 5 分鐘"
            }
        ]
      }
    ]
  },
  {
    day: 4,
    date: "4/6 (一)",
    title: "最後補給與返程",
    theme: "尖沙咀最後衝刺",
    parentingHighlight: "不建議遠行，留在市區悠閒早餐與採買，從容前往機場。",
    events: [
      {
        id: "d4-e1",
        time: "早餐",
        title: "麥奀雲吞麵世家 或 紅茶冰室",
        location: "尖沙咀",
        type: ActivityType.Food,
        description: "品嚐細蓉雲吞麵或經典茶餐廳早餐。",
        travelTime: "步行約 5-10 分鐘",
        alternatives: [
            {
                id: "d4-e1-alt1",
                time: "早餐",
                title: "The Peninsula 半島酒店早餐",
                location: "香港半島酒店",
                type: ActivityType.Food,
                description: "預算許可的話，可以在大廳享用經典與奢華的早餐。",
                travelTime: "步行約 10 分鐘"
            }
        ]
      },
      {
        id: "d4-e2",
        time: "上午",
        title: "最後採買",
        location: "海港城",
        type: ActivityType.Shopping,
        description: "補買伴手禮，整理行李。",
        travelTime: "步行約 5 分鐘"
      },
      {
        id: "d4-e3",
        time: "10:30",
        title: "退房前往機場",
        location: "香港國際機場",
        type: ActivityType.Transport,
        description: "搭乘機場快線或計程車前往機場。",
        travelTime: "機場快線/計程車約 45 分鐘"
      },
      {
        id: "d4-e4",
        time: "13:30",
        title: "飛機起飛",
        location: "台北",
        type: ActivityType.Transport,
        description: "結束美好的親子旅程。",
        travelTime: "飛行時間約 1.5 小時"
      }
    ]
  }
];