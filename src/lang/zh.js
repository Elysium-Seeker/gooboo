import enLocale from './en';
import { zhHans } from 'vuetify/lib/locale';
import card from './zh/card';
import consumable from './zh/consumable';
import currency from './zh/currency';
import mult from './zh/mult';
import note from './zh/note';
import relic from './zh/relic';
import stat from './zh/stat';
import unlock from './zh/unlock';
import upgrade from './zh/upgrade';
import patchnote from './zh/patchnote';
import tag from './zh/tag';

export default {
  ...enLocale,
  ...zhHans,

  gooboo: {
    ...enLocale.gooboo,
    buy: '购买',
    craft: '制作',
    feature: '功能',
    features: '功能',
    cantAfford: '买不起',
    capTooLow: '容量不足',
    equip: '装备',
    unequip: '卸下',
    unequipAll: '全部卸下',
    select: '选择',
    deselect: '取消选择',
    enable: '启用',
    disable: '禁用',
    take: '领取',
    max: '最大',
    maxed: '已满',
    free: '免费',
    capacity: '容量',
    multCapacity: '{0} 容量',
    gain: '收益',
    multGain: '{0} 收益',
    apply: '应用',
    reset: '重置',
    unlock: '解锁',
    keep: '保留',
    uncap: '无等级上限',
    consumable: '消耗品',
    lock: '锁定',
    upgrade: '升级',
    upgrades: '升级',
    upgradeVerb: '升级',
    upgradesPrestige: '声望升级',
    prestige: '声望',
    prestigeDescription: '重置此功能以换取声望货币',
    prestigeTime: '本轮声望耗时',
    saveManual: '保存',
    saveExport: '导出存档',
    saveImport: '导入存档',
    resetProgress: '重置进度',
    closeAll: '全部关闭',
    draw: '抽取',
    finish: '完成',
    boost: '加速',
    skip: '跳过',
    level: '等级',
    chance: '概率',
    amount: '数量',
    effect: '效果',
    effects: '效果',
    confirm: '确认',
    cancel: '取消',
    maxLevel: '最大等级',
    inventory: '库存',
    newGame: '新游戏',
    levelSuffix: '级',
    delete: '删除',
    convert: '转换',
    add: '添加',
    sort: '排序',
    leave: '离开',
    noFilter: '无筛选',
    mainFeatures: '主功能',
    sideFeatures: '侧功能',
    playedBefore: {
      0: '之前玩过？在这里加载你的存档：',
      1: '点击这里'
    },
    offlineSummary: {
      ...enLocale.gooboo.offlineSummary,
      title: '欢迎回来！你离线了 {0}',
      newVersion: '新版本！',
      upgradesFinished: '升级完成',
      downloadBackup: '下载备份',
      eventEnded: '活动已结束',
      eventStarted: '活动已开始',
      toFeature: '前往功能'
    },
    operator: {
      '>=': '至少',
      '>': '大于',
      '<=': '至多',
      '<': '小于',
      '==': '等于'
    }
  },

  endOfContent: {
    name: '当前内容已结束',
    description: '你已到达该功能当前版本内容末尾，后续进度会明显变慢。请等待后续更新，或先推进其他功能。'
  },

  message: {
    ...enLocale.message,
    achievement: {
      ...enLocale.message.achievement,
      get: '成就达成！',
      gained: '获得',
      relicGained: '获得遗物'
    },
    card: {
      ...enLocale.message.card,
      get: '卡包内容',
      new: '新！',
      newShiny: '闪卡！',
    },
    feature: {
      ...enLocale.message.feature,
      feature: '新功能已解锁！',
      subfeature: '新子功能已解锁！',
      school: '新学科已解锁！',
      general: '新将领已解锁！'
    },
    heirloom: {
      ...enLocale.message.heirloom,
      get: '发现传家宝'
    },
    note: {
      ...enLocale.message.note,
      get: '发现笔记 #{0}',
      read: '阅读'
    },
    save: {
      ...enLocale.message.save,
      success: '游戏已保存',
      error: '自动保存失败'
    },
    school: {
      ...enLocale.message.school,
      get: '课程完成！',
      getExam: '考试完成！',
      score: '分数：{0}',
      perfectScore: '（完美！）',
      grade: '{0}% 成绩',
      gradePlus: '你的成绩提高了！',
      dust: '+{0} 金色粉尘',
      bonusDust: '+{0} 额外粉尘',
    },
    unlock: {
      ...enLocale.message.unlock,
      card: '新卡包！',
      general: '新任务线！',
      treasure: '新宝藏效果！',
      book: '新书籍！',
    },
    update: {
      ...enLocale.message.update,
      get: '发现新版本！',
      apply: '刷新并应用'
    },
    import: {
      ...enLocale.message.import,
      message: '文件加载失败',
      base64: '解码失败',
      json: 'JSON 解析失败',
      key: '存档缺少必要数据',
      version: '该存档版本较新（v{0}，当前版本：v{1}）',
      testing: '测试版存档不能用于正式版',
      testingVersion: '旧测试版存档不可用',
      migration: '从 v{0} 迁移到 v{1} 时发生错误',
      checksum: '校验和无效',
    }
  },

  duplicateTab: {
    title: 'Gooboo 已在另一个标签页运行',
    description: '为避免存档冲突，Gooboo 只能同时运行一个实例。请关闭当前标签页并返回已打开的游戏页面。'
  },

  reset: {
    feature: '你可以在这里重置单个功能的进度，不影响游戏其它部分。',
    warning: '这不是声望，不会获得任何奖励或返还，且无法撤销。',
    deleteSave: '你也可以在这里删除整个存档：',
    deleteButton: '删除存档'
  },

  confirm: {
    ...enLocale.confirm,
    title: '确认操作',
    prestige: '你即将进行声望，当前功能进度将被重置并换取声望货币。确定继续吗？',
    prestigeNoGain: '你即将进行声望，当前功能进度将被重置。由于进度不足，本次不会获得声望货币。确定继续吗？',
    prestigeCrop: '你即将对该作物进行声望，其等级、经验和基因将被重置，并换取所有作物的永久收益加成。确定继续吗？',
    shop: '你即将购买活动奖励（消耗稀有货币）。确定购买吗？',
    farmCrop: '你即将种植会消耗稀有货币的作物。确定购买吗？',
    galleryMotivation: '你即将购买灵感（消耗稀有货币）。确定购买吗？',
    treasure: '你即将购买新宝藏（消耗稀有货币）。确定购买吗？',
    schoolExamPass: '考试通行证不足，可用蓝宝石购买。确定继续吗？',
    relicGlyph: '修改底座会重置所有符文当前等级进度。确定继续吗？',
    consumable: '此操作需要你当前没有的消耗品。是否用稀有货币购买？',
    reset: {
      ...enLocale.confirm.reset,
      text: '确定要重置 {0} 功能吗？此操作无法撤销！'
    },
    resetAll: '确定要删除存档吗？此操作无法撤销！'
  },

  feature: {
    ...enLocale.feature,
    subfeature: '子功能',
    mining: '采矿',
    village: '村庄',
    horde: '战群',
    farm: '农场',
    gallery: '画廊',
    note: '笔记',
    relic: '遗物',
    gem: '宝石',
    achievement: '成就',
    school: '学校',
    card: '卡牌',
    general: '将领',
    event: '活动',
    treasure: '宝藏',
    cryolab: '冷冻实验室',
    debug: '调试',
    miningGas: '气体',
    villageCrafting: '制造',
    hordeClasses: '职业',
    schoolLiterature: '文学',
    schoolHistory: '历史',
    schoolArt: '艺术',
    schoolChemistry: '化学',
    meta: '游戏'
  },

  subfeature: {
    ...enLocale.subfeature,
    mining: {
      0: '矿井',
      1: '气态巨行星',
    },
    village: {
      0: '工人',
      1: '工匠公会',
    },
    horde: {
      0: '装备',
      1: '职业',
    },
    farm: {
      0: '花园',
    },
    gallery: {
      0: '自由创作',
    }
  },

  info: {
    ...enLocale.info,
    title: 'Gooboo',
    subtitle: 'Tendsty 开发',
    testing: '测试版',
    viewPatchnotes: '查看更新日志',
    numberFormatting: '数字格式',
    numberFormattingDescription: '为了便于阅读，超大（或超小）数字会按下列单位格式化显示。',
    bigNumbers: '大数字',
    smallNumbers: '小数字',
    timeUnits: '时间单位',
    timeUnit: {
      s: '秒',
      m: '分',
      h: '小时',
      d: '天'
    },
    socials: {
      ...enLocale.info.socials,
      title: '社区',
      viewCode: '查看源代码'
    },
    supportMe: {
      ...enLocale.info.supportMe,
      title: '支持作者'
    },
    statistics: {
      ...enLocale.info.statistics,
      name: '统计',
      overview: '总览',
      other: '其它',
      gained: '累计获得',
      maxOwned: '历史最高',
      currentTotal: '当前 / 总计',
      defaultPlayerName: '玩家',
    }
  },

  error: {
    ...enLocale.error,
    title: '{0} 错误',
    source: '来源：{0}',
    position: '第 {0} 行，第 {1} 列',
    reportBug: '报告问题'
  },

  school: {
    ...enLocale.school,
    school: '学校',
    library: '图书馆',
    practice: '练习',
    practiceDescription: '无时间压力地练习该学科，但不会获得奖励或成绩。',
    study: '学习',
    takeExam: '参加考试',
    takeExamNoFStudy: '先学习一会儿吧！',
    takeExamCost: '需要',
    answer: '回答',
    begin: '课程开始！',
    beginExam: '考试开始！',
    grade: '成绩',
    totalPoints: '总点数',
  },

  unlock,
  mult,
  tag,
  upgrade,
  currency,
  stat,
  consumable,
  patchnote,
  note,
  relic,
  card
};
