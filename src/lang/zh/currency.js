import en from '../en/currency';

export default {
  ...en,
  overcapFullGain: '已超出容量上限，但仍可获得完整收益',
  overcapGain: '由于超出容量上限，收益降低为 {0}%',
  overcapNoGain: '由于超出容量上限，无法获得收益',
  benefitLoss: '购买该项会导致当前收益损失',
  gainTimerNeeded: '{0} 后可负担',
  capTimerNeeded: '{0} 后达到容量上限',
  overcapTimerNeeded: '{0} 后达到下一容量等级',
  isNotSpent: '该货币仅作为需求，不会被消耗',
  unknown: '未知货币',

  subtype: {
    ...en.subtype,
    village: {
      ...en.subtype.village,
      foundationMaterial: '基础建材',
      industrialMaterial: '工业建材',
      luxuryMaterial: '奢华建材',
      modernMaterial: '现代建材',
    },
  },

  gem_ruby: {
    ...en.gem_ruby,
    name: '红宝石',
    description: '闪亮的红色宝石，可用于购买强力的永久升级'
  },
  gem_emerald: {
    ...en.gem_emerald,
    name: '绿宝石',
    description: '朴素的绿色宝石，可用于购买多种强化。村民们似乎很喜欢它'
  },
  gem_sapphire: {
    ...en.gem_sapphire,
    name: '蓝宝石',
    description: '深蓝色宝石，可用于购买消耗品以加快进度'
  },
  gem_amethyst: {
    ...en.gem_amethyst,
    name: '紫水晶',
    description: '美丽的紫色宝石，可用于购买主题或外观道具'
  },
  gem_topaz: {
    ...en.gem_topaz,
    name: '黄玉',
    description: '黄色宝石，可用于提升表现或参与活动。大型活动期间，黄玉不会由宝石生成器产出，而会替换为活动专属货币'
  },

  event_wax: {...en.event_wax, name: '蜡', description: '制作蜡烛的天然蜡'},
  event_humus: {...en.event_humus, name: '腐殖土', description: '花朵最爱的肥沃土壤'},
  event_cloud: {...en.event_cloud, name: '云朵', description: '装在瓶子里的小云'},
  event_cocktail: {...en.event_cocktail, name: '鸡尾酒', description: '你也许想自己喝掉它，但它能极大激励建造者'},
  event_magic: {...en.event_magic, name: '魔力'},
  event_snowball: {...en.event_snowball, name: '雪球', description: '接住！'},
  event_cindersToken: {...en.event_cindersToken, name: '余烬代币', description: '达到一定光照数量后的奖励'},
  event_bloomToken: {...en.event_bloomToken, name: '绽放代币', description: '花朵品阶刷新纪录时的奖励'},
  event_weatherChaosToken: {...en.event_weatherChaosToken, name: '天气混沌代币', description: '鱼类尺寸刷新纪录时的奖励'},
  event_summerFestivalToken: {...en.event_summerFestivalToken, name: '夏日祭代币', description: '完成任务的奖励'},
  event_nightHuntToken: {...en.event_nightHuntToken, name: '夜猎代币', description: '药剂升级或成功仪式的奖励'},
  event_snowdownToken: {...en.event_snowdownToken, name: '雪降代币', description: '赢得雪球战斗的奖励'},
  event_light: {...en.event_light, name: '光', description: '越烧越亮'},
  event_soot: {...en.event_soot, name: '烟灰', description: '蜡烛燃尽后留下的残渣'},
  event_blossom: {...en.event_blossom, name: '花瓣', description: '都很美，但看起来差不多'},
  event_algae: {...en.event_algae, name: '藻类', description: '绿色又黏滑'},
  event_driftwood: {...en.event_driftwood, name: '浮木', description: '不知道从哪漂来，但仍可利用'},
};
