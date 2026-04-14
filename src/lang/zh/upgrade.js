import en from '../en/upgrade';

export default {
  ...en,
  maxLevel: '{0} 最大等级',
  queueEmpty: '队列为空',
  nextLevels: '后续等级',
  bookNotFound: '将某些升级升至满级后可解锁本功能的书籍升级',
  bookNotFoundVillage: '将某些升级或建筑升至满级后可解锁本功能的书籍升级',

  keyset: {
    default: {
      ...en.keyset.default,
      notFound: '未找到升级项',
      nextRequirement: '下一个升级在以下条件解锁：',
      persistent: '该升级为永久升级，不会在声望时重置',
      bought: '已购买升级'
    },
    building: {
      ...en.keyset.building,
      notFound: '未找到建筑项',
      nextRequirement: '下一个建筑在以下条件解锁：',
      persistent: '该建筑为永久建筑，不会在声望时重置',
      bought: '已建造建筑'
    }
  },

  build: '建造',
  subtype: {
    ...en.subtype,
    village_housing: '该建筑计入住宅，前 25 座会提升你的全局等级',
    village_workstation: '该建筑计入工作站'
  },

  description: {
    ...en.description,
    mining_craftingStation: '锻造台可消耗矿石提升镐子强度，是提升伤害的关键',
    mining_compressor: '压缩机可提升每槽矿石数量，从而提高纯度',
    mining_depthDweller: '解锁矿井声望功能',
    mining_smeltery: '可将矿石与稀土冶炼为金属锭',
    mining_enhancingStation: '可消耗金属锭为镐子添加独特强化',
    mining_emberForge: '声望会获得余烬，余烬可提升冶炼速度',
    mining_stickyJar: '树脂可提高锻造结果，但生成较慢',
    mining_premiumCraftingSlots: '将一个锻造槽升级为高级槽：x1 以上杂质减半、纯度翻倍',

    village_treasury: '税率会让工作中的村民消耗食物并缴税',
    village_church: '解锁村庄声望功能',
    village_offeringPedestal: '可献祭资源以永久提高其容量',
    village_court: '可启用政策，在加成与幸福之间做取舍',
    village_generator: '电力提高资源收益，污染降低幸福度',
    village_darkCult: '宗教政策可在资源收益与信仰收益间取舍',
    village_pyramid: '探索者会随时间发现新资源。雇佣一个探索者需要 600 村民，可能需要移民政策',
    village_radar: '扫描政策可在战利品数量与品质间取舍',

    horde_purifier: '腐化血肉会随时间缓慢获取，可用于降低腐化',

    farm_gardenGnome: '可在田地上放置花园地精，有概率获得新货币',
    farm_learning: '作物经验可提升全局等级',
    farm_wateringCan: '为作物施加照料，获得更高收成',
    farm_sprinkler: '喷灌可让同一行作物生长更快',
    farm_lectern: '讲台可提升同一列作物经验',
    farm_pinwheel: '风车可提高稀有掉落概率',
    farm_potOfSand: '仙人掌可提升作物经验，种子可从大型活动获得',
    farm_flag: '旗帜会根据位置提升产量',
    farm_prettyFlowerPot: '西洋菜可提高稀有掉落概率',
    farm_premiumGardenGnome: '高级花园地精提供 1.5 倍黄金概率',
    farm_premiumSprinkler: '高级喷灌将生长速度与过度生长加成提升至 1.5 倍',
    farm_premiumLectern: '高级讲台提供 4 倍经验',
    farm_premiumPinwheel: '高级风车提供 1.5 倍掉落概率加成',
    farm_premiumFlag: '高级旗帜提供 1.5 倍产量加成',

    gallery_recycling: '转换可帮助你创造新颜色',
    gallery_redLuck: '你需要先升级幸运值，才能在包裹里找到颜料桶',
    gallery_epiphany: '灵感可消耗有限创作力来换取独特加成',
    gallery_auctionHouse: '解锁画廊声望功能',
    gallery_paintDrumStorage: '可收集包裹，包裹有时会产出颜料桶',
    gallery_emptyCanvas: '画布可让你选择颜色并随时间缓慢成长',
  },
};
