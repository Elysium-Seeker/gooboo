import en from '../en/card';

export default {
  ...en,
  cardPack: '卡包',
  cardsSuffix: ' 张卡',
  cardPower: '卡牌强度',
  cardPowerValue: '{0} 卡牌强度',
  cardPowerDescription: '所有激活卡牌的强度会叠加，并提升该功能的基础属性',
  notFound: '未找到卡牌',
  fullCollectionReward: '全收集奖励',
  canFind: '该卡牌可在以下卡包中获得',
  cannotFind: '该卡牌无法在你当前可用的卡包中获得',
  active: '激活卡牌',
  equipped: '已装备卡牌',
  onActive: '激活时',
  onDuplicate: '重复时',
  activeDescription: '重复卡牌可以装备，并会在下一次声望时消耗来激活效果。效果会持续到你再次声望。',
  shinyTitle: '闪卡',
  shinyDescription: '卡包中有 {0}% 概率开出闪卡。闪卡会永久为该卡牌提供 +1 卡牌强度，并提高该功能的声望收益。',
  sort: {
    ...en.sort,
    number: '卡牌编号',
    power: '最高强度',
    owned: '持有最多',
  },
  equipTutorial: {
    ...en.equipTutorial,
    description: '你收集到了第一批卡牌！大多数卡牌在激活后会生效，要启用它请按下面步骤操作：',
    1: '先获得同一张卡牌的重复卡',
    2: '在任意主功能中解锁声望',
    3: '打开声望菜单并装备该重复卡（卡牌右下角标注的功能需与当前功能一致）',
    4: '在装备该卡时执行一次声望',
    5: '卡牌会被消耗，其效果在下一次声望前持续生效'
  },
};
