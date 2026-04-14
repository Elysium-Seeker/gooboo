import en from '../en/consumable';

export default {
  ...en,
  owned: '拥有',

  gem_prestigeStone: {
    ...en.gem_prestigeStone,
    name: '声望石',
    description: '获得等同于你最佳周期的声望货币'
  },
  mining_goldenHammer: {
    ...en.mining_goldenHammer,
    name: '金锤',
    description: '为本次锻造生成当前可获得的最佳镐子'
  },
  village_ingredientBox: {
    ...en.village_ingredientBox,
    name: '材料箱',
    description: '包含只能在这类箱子中获得的特殊材料'
  },
  horde_manaPotion: {
    ...en.horde_manaPotion,
    name: '法力药水',
    description: '恢复 50% 最大法力'
  },
  farm_basic: {...en.farm_basic, name: '基础肥料'},
  farm_flower: {...en.farm_flower, name: '花卉肥料'},
  farm_speedGrow: {...en.farm_speedGrow, name: '速生剂'},
  farm_richSoil: {...en.farm_richSoil, name: '沃土'},
  farm_shiny: {...en.farm_shiny, name: '闪耀肥料'},
  farm_juicy: {...en.farm_juicy, name: '多汁肥料'},
  farm_dissolving: {...en.farm_dissolving, name: '作物溶解剂'},
  farm_potatoWater: {...en.farm_potatoWater, name: '土豆水'},
  farm_roseWater: {...en.farm_roseWater, name: '玫瑰水'},
  farm_weedKiller: {...en.farm_weedKiller, name: '除草剂'},
  farm_turboGrow: {...en.farm_turboGrow, name: '极速生长剂'},
  farm_premium: {...en.farm_premium, name: '高级肥料'},
  farm_analyzing: {...en.farm_analyzing, name: '分析肥料'},
  farm_superJuicy: {...en.farm_superJuicy, name: '超多汁肥料'},
  farm_pellets: {...en.farm_pellets, name: '颗粒肥'},
  farm_supplementsS: {...en.farm_supplementsS, name: '营养补剂（S）'},
  farm_supplementsM: {...en.farm_supplementsM, name: '营养补剂（M）'},
  farm_supplementsL: {...en.farm_supplementsL, name: '营养补剂（L）'},
  farm_supplementsXL: {...en.farm_supplementsXL, name: '营养补剂（XL）'},
  farm_supplementsXXL: {...en.farm_supplementsXXL, name: '营养补剂（XXL）'},
  gallery_surpriseParty: {
    ...en.gallery_surpriseParty,
    name: '惊喜派对',
    description: '获得 500 灵感'
  },
  treasure_upArrow: {
    ...en.treasure_upArrow,
    name: '上箭头',
    description: '宝藏等级 +2'
  },
  treasure_expander: {
    ...en.treasure_expander,
    name: '扩展器',
    description: '宝藏等级会随时间提升，但不能再通过碎片升级'
  },
  treasure_wildcard: {
    ...en.treasure_wildcard,
    name: '万能牌',
    description: '可重新选择所有效果'
  },
  treasure_eventStar: {
    ...en.treasure_eventStar,
    name: '活动之星',
    description: '新增“活动能量”效果'
  },
};
