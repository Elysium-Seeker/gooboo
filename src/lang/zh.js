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
  ...zhHans,

  gooboo: {
    buy: '购买',
    craft: '工艺',
    feature: '特征',
    features: '功能',
    cantAfford: '买不起',
    capTooLow: '容量太低',
    equip: '装备',
    unequip: '取消装备',
    unequipAll: '全部取消装备',
    select: '选择',
    deselect: '取消选择',
    enable: '启用',
    disable: '禁用',
    take: '参加',
    max: '最大',
    maxed: '最大',
    free: '免费',
    capacity: '容量',
    multCapacity: '{0} 容量',
    gain: '获得',
    multGain: '{0}获得',
    apply: '应用',
    reset: '重置',
    unlock: '解锁',
    keep: '保留',
    uncap: '无最高等级',
    consumable: '消耗品',
    lock: '锁',
    upgrade: '升级',
    upgrades: '升级',
    upgradeVerb: '升级',
    upgradesPrestige: '声望升级',
    prestige: '声望',
    prestigeDescription: '重置此功能以换取声望货币',
    prestigeTime: '花费此声望的时间周期',
    saveManual: '保存',
    saveExport: '导出到文件',
    saveImport: '从文件加载',
    resetProgress: '重置进度',
    closeAll: '关闭全部',
    draw: '绘制',
    finish: '完成',
    boost: '增强',
    skip: '跳过',
    level: '等级',
    chance: '机会',
    amount: '数量',
    effect: '效果',
    effects: '效果',
    confirm: '确认',
    cancel: '取消',
    maxLevel: '最高等级',
    inventory: '库存',
    newGame: '新游戏',
    levelSuffix: '等级',
    delete: '删除',
    convert: '转换',
    add: '添加',
    sort: '分类',
    leave: '离开',
    noFilter: '无过滤器',
    mainFeatures: '主要功能',
    sideFeatures: '侧面功能',
    playedBefore: {
      0: '之前玩过吗？加载你的保存文件',
      1: '这里'
    },
    offlineSummary: {
      title: '欢迎回来！您已离线 {0}',
      newVersion: '新版本！ ',
      upgradesFinished: '升级完成',
      downloadBackup: '下载备份',
      eventEnded: '活动结束',
      eventStarted: '活动开始',
      toFeature: '特色'
    },
    operator: {
      '>=': '位于最少',
      '>': '结束',
      '<=': '最多',
      '<': '地下',
      '==': '完全'
    }
  },
  endOfContent: {
    name: '内容结束',
    description: '您已到达此功能内容的结尾，使得经过此点的进度比预期慢。等待未来的更新或专注于其他功能以继续进步'
  },
  message: {
    achievement: {
      get: '成就获得！',
      gained: '获得',
      relicGained: '遗物获得'
    },
    card: {
      get: '卡包内容',
      new: '新！',
      newShiny: '闪亮！',
    },
    feature: {
      feature: '新功能已解锁！',
      subfeature: '新子功能已解锁！',
      school: '新主题已解锁！',
      general: '新常规解锁！'
    },
    heirloom: {
      get: '发现传家宝'
    },
    note: {
      get: '发现#{0}',
      read: '阅读'
    },
    save: {
      success: '游戏已保存',
      error: '自动保存失败'
    },
    prize: {
      get: '您赢得了奖品！',
      bingo1: '宾果！',
      bingo2: '双倍宾果！',
      bingo3: '三重宾果！'
    },
    school: {
      get: '课程完成！',
      getExam: '考试完成！',
      score: '分数： {0}',
      perfectScore: '(完美！)',
      grade: '{0}% 等级',
      gradePlus: '你的等级提高了！',
      dust: '+{0} 金色灰尘',
      bonusDust: '+{0} 奖金灰尘',
    },
    unlock: {
      card: '新卡包！',
      general: '新任务线！',
      treasure: '新宝藏效果！',
      book: '新书！',
    },
    update: {
      get: '新更新！',
      apply: '刷新+应用'
    },
    import: {
      message: '文件无法加载',
      base64: '解码失败',
      json: 'JSON 无法解释',
      key: '缺少加载的保存文件数据',
      version: '该文件来自游戏的较新版本（v{0}，当前版本：v{1}）',
      testing: '测试版本中的文件不能在实时版本中使用',
      testingVersion: '来自旧测试版本的文件无法使用',
      migration: '从 v{0} 迁移到 v{1} 时出错',
      checksum: '校验和无效',
    }
  },
  duplicateTab: {
    title: 'Gooboo 已在另一个选项卡中运行',
    description: '为了防止与您的保存文件不一致，Gooboo 只能运行一次。请关闭此选项卡并返回到现有选项卡上的游戏。'
  },
  reset: {
    feature: '想要重新开始？在这里，您可以重置单个功能的进度，而无需触及游戏的其他部分。',
    warning: '这不是声望，这样做不会有任何奖励或退款。重置无法撤消',
    deleteSave: '您也可以删除整个保存文件这里：',
    deleteButton: '删除保存文件'
  },
  prestigeDescription: {
    mining_ember: '获得相当于当前居民深度百分比的余烬',
    village_blessing: '信仰将转化为祝福',
    village_shares: '增益份额等于您当前铜币数量的 0.1%',
    horde_soulEmpowered: '腐化的灵魂将转化为强化的灵魂',
    horde_courage: '达到 10 级时获得勇气，之后每升一级获得更多',
    gallery_cash: '根据您在本次运行中获得的美丽总量获得现金',
  },
  prestigeFormula: {
    gallery_cash: '现金 = 10^(log8(美女 / 100B)^0.7)',
  },
  confirm: {
    title: '确认行动',
    prestige: '您即将获得声望，重置您在此功能中的所有进度，以换取声望货币。您确定要获得声望吗？',
    prestigeNoGain: '你即将获得声望，重置你所有的进步。由于你缺乏进步，你无法获得任何声望货币。你确定你想要声望吗？',
    prestigeCrop: '您即将声望这种作物，重置其所有等级、经验和基因，以换取所有作物的永久增益奖励。您确定要获得声望吗？',
    upgrade: {
      0: '您将要购买升级 ',
      1: '，成本稀有货币。您确定要买这个吗？'
    },
    shop: '您将要购买活动奖励，该奖励需要稀有货币。您确定要购买这个吗？',
    theme: {
      0: '您将要购买主题 ',
      1: '，成本稀有货币。您确定要买这个吗？'
    },
    cardPack: {
      0: '您将要购买卡包',
      1: '，成本稀有货币。您确定要买这个吗？'
    },
    cardShinyPack: {
      0: '您将要购买闪亮卡包 ',
      1: '，成本稀有货币。您确定要买这个吗？'
    },
    weatherChaosFishingRodBuy: '您将要购买钓鱼竿“{0}”，需要花费稀有货币。您确定要购买吗？',
    summerFestivalCellBuy: '您将要购买一个新的岛屿单元，这需要花费稀有货币。您确定要购买这个吗？',
    farmCrop: '您将要种植需要稀有货币的农作物。您确定要购买这个吗？',
    galleryMotivation: '您将要购买动力，这需要花费稀有货币。您确定要购买吗？',
    treasure: '您即将购买一件新宝藏，该宝藏需要稀有货币。您确定要购买吗？',
    schoolExamPass: '您没有足够的考试通行证，但可以用蓝宝石购买它们。您确定要这样做吗？',
    relicGlyph: '更改基座会重置所有字形的当前关卡进度。您确定要这样做吗？',
    treasureFragment: '您将要购买碎片，这需要花费稀有货币。您确定要购买这个吗？',
    treasureDelete: '您将要摧毁一个宝藏，其中将给予碎片作为回报。您确定要购买这个吗？',
    buyDiamondForge: '您即将花费钻石购买一件圣物。您确定要这样做吗？',
    casinoBingoBuy: '您将要购买一张宾果卡，需要花费稀有货币。您确定要购买这个吗？',
    casinoWheelSpin: '您即将转动命运之轮，这需要花费稀有货币。您确定要购买吗？',
    consumable: '此操作需要您没有的消耗品。您想用稀有货币购买这些吗？',
    reset: {
      text: '您确定要重置 {0} 功能吗？此操作无法撤消！',
    },
    resetAll: '您确定要删除您的保存文件吗？此操作无法撤消！'
  },
  feature: {
    subfeature: '子功能',

    // Main features
    mining: '挖矿',
    village: '村庄',
    horde: '部落',
    farm: '农场',
    gallery: '图库',

    // Side features
    note: '注释',
    relic: '遗物',
    gem: '宝石',
    achievement: '成就',
    school: '学校',
    card: '卡牌',
    general: '将军',
    event: '活动',
    treasure: '宝藏',
    cryolab: '冷冻实验室',
    debug: '调试',

    // Subfeatures
    miningGas: '燃气',
    villageCrafting: '制作',
    hordeClasses: '类别',
    schoolLiterature: '文学',
    schoolHistory: '历史',
    schoolArt: '艺术',
    schoolChemistry: '化学',
    generalOrladee: '奥拉迪',
    generalOppenschroe: '奥本施罗',
    generalBellux: '贝卢斯',
    generalOnoclua: '奥诺克卢亚',
    generalOmnisolix: '奥尼索利克斯',

    // Meta
    meta: '游戏'
  },
  subfeature: {
    mining: {
      0: '矿石',
      1: '气体巨星',
    },
    village: {
      0: '工人',
      1: '工匠公会',
    },
    horde: {
      0: '装备',
      1: '类别',
    },
    farm: {
      0: '花园',
    },
    gallery: {
      0: '自由风格',
    }
  },
  unlock,
  mult,
  tag,
  text: {
    hordeBattlePassUpgrade: '新升级',
    hordeBattlePassPrestigeUpgrade: '新声望升级',
    hordeLootElementalEssence: '战利品元素精华',
    hordeRespawnFaster: '敌人重生速度加快两倍',
    farmBonusDna: '+5 DNA',
    farmUnlockDna: '使用您未选择的所有 1 级基因的效果解锁 DNA 升级',
    farmGnomeBoost: '将附近每个花园侏儒的所有收获增益增加 4%（高级侏儒为 6%）',
    farmLonelyGrow: '如果没有其他此类作物，生长速度加快30%，并获得+150%过度生长田地',
    farmFertileBoost: '每颗蓝宝石产量增加 30%肥料成本',
    farmYieldConversion: '获得其他产量类型的5%产量',
    farmFastPrestige: '声望将农作物等级降低5，而不是重置为0',
    farmLuckyHarvest: '1% 机会获得 8 倍收获增益',
    farmSelfless: '所有农作物产量增加 +3%（叠加至 +30%）',
    farmUnyielding: '收获后有40%机会免费重新种植这种作物',
    farmTeamwork: '在每种类型的一种作物上拥有此基因会使所有作物产量翻倍',
    farmHunter: '该植物原生的稀有资源掉落物被猎杀。狩猎几率等于你的稀有掉落几率的 1%。每次狩猎成功，资源容量增加基础值的 10%，基础狩猎几率降低 5%',
    farmPatient: '自选择该基因以来，产量每天增加+3%，60天时产量增加+180%',
  },
  upgrade,
  currency,
  stat,
  consumable,
  patchnote,
  info: {
    title: '古布',
    subtitle: '由 Tendsty 开发',
    testing: '测试',
    text: 'Gooboo 是一款闲置/增量游戏，您可以在神秘、未知的世界中管理多个功能。收集不同的资源来购买各种各样的升级，以增加你的资源收益。取得主要功能的进展以解锁新内容并了解有关这个世界的更多信息。当进展开始放缓时，声望个人功能可以将您的收获提升到一个新的水平。',
    updates: {
      web: '您正在使用网络版本。游戏会定期检查更新，自动使用最新版本，并在有可用更新时通知您。',
      desktop: {
        0: '你正在使用桌面版本。您需要在',
        1: '发布',
        2: '页。'
      },
      offline: {
        0: '上手动检查更新您正在使用离线版本。您需要在 ',
        1: '发布',
        2: '页。'
      },
      steam: '您使用的是steam版本。更新是通过 steam 处理的。'
    },
    testingDescription: {
      0: '您正在玩测试版本。功能可能未完成或有错误，游戏机制可能随时改变。您可以玩现场版 ',
      1: '这里',
      2: '（测试版本中的保存文件不能在游戏的实时版本中使用）'
    },
    viewPatchnotes: '查看补丁说明',
    numberFormatting: '数字格式',
    numberFormattingDescription: '为了保持数字可读，极大（和小）的数字使用以下单位进行格式化。',
    bigNumbers: '大数字',
    smallNumbers: '小数字',
    timeUnits: '时间单位',
    timeUnit: {
      s: '第二次',
      m: '分钟',
      h: '小时',
      d: '日'
    },
    socials: {
      title: '社交',
      text: 'Gooboo 可以单独玩，无需外部指南。但如果您想与其他玩家一起出去玩，您可以访问以下地方：',
      viewCode: '查看源代码',
      patreon: '帕特隆',
      reddit: '红迪网',
      discord: '不和谐'
    },
    supportMe: {
      title: '支持我',
      text: '该游戏是免费的，没有微交易或广告。如果您想支持开发，请查看我的 patreon 页面：',
      patreon: '帕特隆'
    },
    tech: {
      title: '使用的技术',
      web: '网络',
      fonts: '字体',
      testing: '自动测试',
      vue: 'Vue.js',
      vuetify: '维特化',
      vuex: '视图',
      snackbars: 'v-snackbars',
      color: '颜色',
      mdi: '材料设计图标',
      jsfiledownload: 'JavaScript 文件下载',
      seedrandom: '种子随机',
      caveat: '警告',
      roboto: '机器人',
      robotomono: '机器人钱',
      cypress: '柏树',
      jest: '是',
      github: 'GitHub',
      website: '网站',
      googlefonts: '谷歌字体'
    },
    cheater: {
      0: {
        title: '尊敬',
        description: '在没有使用下面提到的任何工具的情况下玩游戏',
      },
      50: {
        title: '好奇',
        description: '使用工具来预测未来结果',
      },
      100: {
        title: '自动',
        description: '使用工具自动执行类似人类的动作，同时仍然遵循游戏规则',
      },
      150: {
        title: '拯救渣男',
        description: '使用工具或保存/加载功能来预测未来结果并根据此信息做出购买决策或改变结果',
      },
      200: {
        title: '骗子',
        description: '编辑游戏变量或使用工具来实现否则不可能实现的目标结果',
      },
      selfMark: '设置作弊状态',
      selfMarkDescription: '您可以在这里将自己标记为作弊者。这纯粹是视觉上的，可以随时逆转',
      noDetected: '未检测到作弊',
      featureDetected: '在以下功能中检测到作弊：',
      featureDetected2: '您可以通过完全重置这些功能来删除作弊标记',
      globalDetected: '作弊被发现，你的保存文件已被永久标记',
      selfMarkClick: '如果您作弊且游戏未正确检测到，您可以单击查看将自己标记为作弊者的选项',
    },
    statistics: {
      name: '统计',
      overview: '概述',
      other: '其他',
      gained: '获得',
      maxOwned: '最高金额',
      currentTotal: '当前/总计',
      defaultPlayerName: '玩家',
    }
  },
  error: {
    tech: {
      vuejs: 'Vue.js',
      javascript: 'JavaScript'
    },
    title: '{0}错误',
    source: '来源：{0}',
    position: '线{0}，列 {1}',
    reportBug: '报告错误'
  },
  note,
  school: {
    school: '学校',
    beginner: {
      title: '还在学习',
      description: '您是这所学校的新手，将您的金尘奖励减少到 {0}%。达到更高的全局级别可以减少此惩罚，并通过达到全局级别 175 来完全消除它。'
    },
    subjectBookGain: '每个解锁主题每小时提供 10 本书，无论是等级。',
    passCapGain: '您每天（{0} 中的下一个考试）以及每 10 个全球级别都会获得一张新的考试通行证。',
    buyPass: {
      0: '如果您尝试参加考试但没有足够的通行证，系统会自动以价格购买 ',
      1: '每个',
    },
    library: '图书馆',
    practice: '练习',
    practiceDescription: '无时间压力地练习该科目，但没有获得奖励或等级',
    study: '学习',
    studyDescription: '在{0}中获得尽可能高的分数，如果你以最好的成绩学习，就有机会提高你的成绩。根据您的分数，您会获得（或失去）升入下一年级的进度。预计平均得分为 {1}。',
    studyNoF: '您不能失去 F 级的成绩进度。',
    takeExam: '携带考试',
    takeExamDescription: '参加考试，您可以在其中参加考试{0} 以获得尽可能高的分数。您将收到金粉作为奖励（{1} - {2}，根据您的表现和所选等级）。如果您获得 {3} 分数，则考试被评为完美，您将解锁下一等级。',
    takeExamNoF: '您不能参加 F 级考试。',
    takeExamNoFStudy: '先学习一下！',
    takeExamCost: '需要',
    examDustFull: '你古老的沙漏已经满了！您将获得额外的灰尘，而不是金色的灰尘，后者需要时间才能准备好使用。',
    examDustOvercap: '你古老的沙漏快满了。通过这次考试获得的一些金色灰尘可以转化为奖励灰尘。',
    answer: '答案',
    begin: '课程开始！',
    beginExam: '考试开始！',
    grade: '成绩',
    gradeDescription: '成绩决定了该科目的难度。您可以随时切换成绩，并通过足够的学习或获得完美的考试成绩来解锁更好的成绩。',
    totalPoints: '总计积分',
    multipass: {
      description: '您可以使用多种成分通过一项考试即可增加奖励。每使用一次额外的通行证，您将获得：',
      dust: '100% 的金色灰尘作为奖励灰尘获得',
      points: '+75%总分'
    },
    math: {
      name: '数学',
      subtitle: '求解方程',
      description: '回答各种方程式来提高你的分数。每个正确答案获得 1 分，每个错误答案减少 5 秒。随着等级的提高，数字会越来越大，并且会引入新的干员。',
    },
    literature: {
      name: '文学',
      subtitle: '写入句子',
      description: '键入显示的句子以提高分数。每输入一个句子即可获得 1 分。同一个句子将一直保留到正确输入为止，并且您可以看到下一个句子的开头。随着等级的提高，句子和单词会变得更长，并且会引入新的特殊字符。',
    },
    history: {
      name: '历史',
      subtitle: '记住日期',
      description: '记住显示的日期并找到匹配对（最多 5 个）以提高您的分数。没有找到适合您以前见过的约会对象的时间需要 5 秒钟。随着你的成绩提高，年数会变大，并且会增加更多的年数。',
      newGame: '新游戏，新的一年！准备好...',
      year: '年份',
      examInfo: '在考试中，您有两次记住日期的机会。完成第一个答案后，您将获得一组新的日期和问题'
    },
    art: {
      name: '艺术',
      subtitle: '混合颜色',
      description: '猜猜正确的颜色可以提高你的分数。将显示两种颜色，猜测它们混合的结果。每个正确答案获得 1 分，每个错误答案减少 5 秒。随着您的成绩提高，会添加更多答案，答案也会变得更加相似。',
    },
    chemistry: {
      name: '化学',
      subtitle: '观察实验',
      description: '观看不同形状的实验。实验结束后，会提出一个问题，您需要估计答案。随着您的成绩提高，会添加更多形状和问题类型，您的答案需要更加精确。',
      newGame: '新游戏，新实验！准备好...',
      questionShape: {
        0: '多少',
        1: '?',
      },
      questionSize: {
        text: '多少{0} 形状？',
        0: '小',
        1: '平均大小',
        2: '大',
      },
      questionSpin: {
        text: '{0} 有多少个形状？',
        0: '逆时针旋转',
        1: '不旋转',
        2: '顺时针旋转',
      },
      questionMoveRandom: {
        text: '{0} 有多少个形状？',
        0: '不是移动',
        1: '移动',
      },
      questionMoveDirection: {
        text: '有多少个形状正在移动 {0}？',
        0: '水平',
        1: '垂直',
        2: '对角线',
      },
      answer: '答案是{0}',
    },
    book: {
      name: '图书',
      get: '当您达到 {0} 等级时，或者通过累积 {1} 总分，您将获得这本书',
      buy: {
        0: '您也可以点击立即获取这本书 ',
        1: '',
      },
      skipped: '您花费了 {0} 颗绿宝石提前获得了这本书，当您达到 {1} 级或累积 {2} 总积分时，您将获得它们',
      scalesWithGL: '秤具有全局级别',
      scalesUpTo: '最高{0}',
      read: '阅读',
    }
  },
  hourglass: {
    title: '古代沙漏',
    subtitle: '跳过此功能的时间',
    subtitleSchool: '将考试通行证转换为金尘',
    timeInMinutes: '时间（以分钟为单位）',
    bonusTitle: '奖励灰尘',
    bonusDescription: '超过容量的金色灰尘将作为奖励灰尘获得。每秒，您将 1 个奖励灰尘转化为金色灰尘。',
  },
  cryolab: {
    frozen: '{0} / {1} 功能已冻结',
    active: '主动： {0}%',
    activeTitle: '声望增益（主动）',
    activeDescription: '每天被动获得相当于您最佳声望 {0}% 的声望货币。仅当该功能被冻结时此功能才有效。',
    passive: '被动：{0}%',
    passiveTitle: '声望增益（被动）',
    passiveDescription: '每天被动获得相当于您最佳声望 {0}% 的声望货币。仅当功能未冻结时此功能才处于活动状态。',
    expDescription: '您有如果此功能被冻结，则每天可获取 {0} / {1} 经验并获得 {2} 经验。',
    expDescription2: '经验增益基于从此功能获得的全局级别({0}).',
    expNext: '下一级效果：',
    expNoGain: '要获得此功能的经验，请先获得一些声望货币',
    expFormula: '经验 = 1.015^GL * GL * 2',
    nextLevelTime: '达到下一个级别需要 {0}',
    cropExp: '每种作物获得最多此数量的经验（基础生长时间越长，获得的经验就越少）。然后乘以最高和当前作物水平之间的差异（最高水平的作物没有经验）',
    frozenFeature: {
      title: '特征是冻结',
      description: '冷冻实验室冻结了此功能。您不会在此功能中获得任何进度，但会自动获得声望货币。'
    }
  },
  general: {
    completionReward: '完成奖励',
    questGained: '{0} 获得',
    questHighestAmount: '最高 {0} 数量',
    questEquipCard: '卡已激活',
    questFailedSubfeature: '您处于错误的子功能中！再次尝试的声望',
    questFailedTime: '已达到时间限制！再试一次的声望',
    questFailedRelicActive: '遗物活跃使用！再试一次威望',
    questFailedCard: '卡未激活！再试一次威望',
    questFailedCardUnowned: '此卡不再有副本！访问商家获取更多',
    grobodal: {
      name: '格罗博达尔',
      diggingDeeper: '挖掘得更深',
      combatTraining: '战斗训练',
      searchingTheArchives: '搜索档案',
      gardening: '园艺',
      pitchBlack: '漆黑',
      masterOfTheSystem: '大师的大师系统',
      thinkPlayerThink: '思考，玩家，思考！',
      discoveringTheMystery: '发现谜团',
      prettyAndPeaceful: '漂亮又漂亮平静',
      doubleTrouble: '双重麻烦',
      allIn: '全部在',
    },
    orladee: {
      name: '奥拉迪',
      beautyOfThisWorld: '这美丽世界',
      colorVariety: '颜色品种',
      fieldTesting: '现场测试',
      shiningBright: '闪亮明亮',
    },
    oppenschroe: {
      name: '奥本施罗',
    },
    bellux: {
      name: '贝卢斯',
    },
    onoclua: {
      name: '奥诺克卢亚',
    },
    omnisolix: {
      name: '奥尼索利克斯',
    },
  },
  event: {
    shop: {
      notFound: '未找到商店',
      bought: '库存'
    },
    cinders: {
      name: '煤渣',
      perProducer: '每个制作人',
      candle: {
        tealight: '茶色',
        regular: '蜡烛',
        aroma: '香薰蜡烛',
        chandelier: '枝形吊灯',
        duration: '最后的意愿{0}',
        sootGain: {
          0: '生成 ',
          1: ' ',
          2: '燃烧后'
        }
      }
    },
    bloom: {
      name: '绽放',
      tier: '等级',
      canSell: '可以以 {0} 出售 ',
      sell: '选择一朵花来出售。当您获得库存满的花朵时，该类型的最低等级花朵将自动出售。',
      dragToBreeder: '将一朵花拖到此处开始繁殖',
      wildGrowth: '获得库存中所有花朵的随机基因。这无法绕过每朵花 3 个基因的限制。',
      boost: '获得 1 天的进度立即',
      genes: '基因',
      wildgrowth: '野生生长',
      flower: {
        daisy: '黛西',
        poppy: '罂粟',
        iris: '虹膜',
        lily: '百合',
        orchid: '兰花',
        cornflower: '矢车菊',
      },
      gene: {
        valuable: {
          name: '有价值',
          description: '3倍开花值'
        },
        mutating: {
          name: '变异中',
          description: '2x 基因机会'
        },
        splitting: {
          name: '分裂',
          description: '25% 的机会培育 2 个新品种花'
        },
        resistant: {
          name: '抗性',
          description: '+10%层机会'
        },
        huge: {
          name: '巨大',
          description: '+1层并在合并时消耗此基因'
        }
      }
    },
    weatherChaos: {
      name: '天气混沌',
      chanceToCatch: '抓住机会',
      powerNeeded: '所需渔力',
      maxSize: '最大尺寸',
      owned: '拥有',
      fishingPowerDescription: '钓鱼力决定了你能钓到什么鱼。达到双倍渔力要求，以最大机会捕获该鱼。',
      fishSizeDescription: '大小等于或低于平均水平的鱼有相同的机会被捕获。对于高于平均尺寸的每个尺寸，其他尺寸变得更难捕获。',
      fishDescription: '如果你没有钓到宝藏，你还有机会钓到鱼。可用的鱼类类型取决于地点和天气。',
      trashTitle: '垃圾机会',
      trashDescription: '当你没能钓到宝藏或鱼时，你就会钓到垃圾。',
      treasureDescription: '您有很小的机会捕获宝藏。如果您的钓鱼能力至少为 {0}，它可以包含诱饵、新钓鱼竿或新地点的钥匙。',
      treasureDescriptionFinal: '您有很小的机会捕获宝藏。它可以包含鱼饵或新的钓鱼竿。',
      changeWeather: '更改天气',
      location: {
        pond: '池塘',
        lake: '湖泊',
        river: '河流',
        ocean: '海洋',
        mountain: '山',
        cave: '洞穴',
      },
      fish: {
        bronzefish: '青铜鱼',
        snail: '蜗牛',
        cablebiter: '电缆咬合器',
        blueshimmer: '蓝闪',
        introvero: '介绍',
        zapling: '扎普林',
        starcone: '星锥',
        phelaria: '贝拉利亚',
        coldgil: '科尔德吉尔',
        silverbrass: '银黄铜',
        circlejelly: '圆果冻',
        woodcrawler: '爬行者',
        longdano: '长丹恩',
        legabara: '莱加巴拉',
        biggiesnail: '大钉子',
        sunshine: '阳光',
        platiglob: '扁形地球仪',
        stormdazer: '风暴达泽',
        riverTurtle: '河龟',
        streamsnail: '流蜗牛',
        ralmon: '拉尔蒙',
        wonelle: '沃内勒',
        grillgil: '烧烤',
        sleepysoo: '瞌睡虫',
        oozior: '奥齐奥尔',
        paleblob: '苍白斑点',
        crystakin: '晶体蛋白',
        shadowbiter: '影咬者',
      },
      fishingRod: {
        name: '钓鱼竿',
        basic: '基本',
        fast: '快速',
        leafy: '叶子',
        heavy: '重型',
        hardwood: '硬木',
        master: '大师',
        smelly: '臭味',
        turbo: '涡轮',
        golden: '金色',
        dull: '迟钝',
        mystical: '神秘',
        twins: '双胞胎',
      },
      bait: {
        juicyBait: '多汁诱饵',
        rainbowBait: '彩虹诱饵',
        trashNet: '垃圾网',
        magnet: '磁铁',
      }
    },
    summerFestival: {
      name: '夏季节日',
      produces: '生产',
      producesNothing: '什么也不生产',
      empty: '空',
      constructing: '建造',
      upgrading: '升级',
      deleting: '删除',
      emptyQueue: '没有排队的建筑物',
      inQueue: '在队列中',
      inDeletionQueue: '已排队删除',
      placeOn: '必须放在',
      rotateDescription: '旋转建筑',
      deleteDescription: '删除此建筑物。资源不会退还，这需要在构建队列中花费时间。',
      complete: '完成',
      build: '建造',
      freeExpansion: {
        s: '{0} 自由扩展',
        p: '{0} 自由扩展'
      },
      quest: {
        name: '任务',
        currency: '收集{0} ',
        building: '构造 {0}x 层{1} {2}'
      },
      tile: {
        beach: '海滩',
        water: '水',
        palm: '棕榈树',
        forest: '森林',
        mountain: '山',
        plain: '平原',
        land: '土地'
      },
      tilePos: {
        0: '中心',
        1: '右',
        2: '右下',
        3: '左下',
        4: '左',
        5: '左上',
        6: '右上'
      },
      building: {
        collector: {
          name: '收藏家',
          description: '自动收集相邻图块的资源'
        },
        mainStage: {
          name: '主要阶段',
          description: '生产音乐并解锁更多建筑物'
        },
        speaker: {
          name: '扬声器',
          description: ''
        },
        vegetablePatch: {
          name: '蔬菜补丁',
          description: ''
        },
        kitchen: {
          name: '厨房',
          description: '使用原料生产膳食',
          action: {
            coconutSalad: '椰子沙拉',
            saltyShell: '咸贝',
            lemonCandy: '柠檬糖果',
            steak: '牛排',
            fishSticks: '鱼棒',
          }
        },
        sawmill: {
          name: '锯木厂',
          description: '将建筑材料切割成组件',
          action: {
            cutPlates: '切割板材',
            cutSandstone: '切割砂岩',
            smeltSteel: '冶炼钢铁',
            combineMaterial: '组合材料'
          }
        },
        huntingArea: {
          name: '狩猎区',
          description: ''
        },
        excavator: {
          name: '挖掘机',
          description: ''
        },
        lighthouse: {
          name: '灯塔',
          description: ''
        },
        grill: {
          name: '炙烤',
          description: '用煤炭烹饪食物',
          action: {
            cookMeat: '煮肉',
            cookFish: '煮鱼'
          }
        },
        mine: {
          name: '我的',
          description: '从山上提取资源'
        },
        hugeSpade: {
          name: '巨大的黑桃',
          description: '从沙子中挖出沙子海滩'
        },
        shellOpener: {
          name: '开壳器',
          description: '打开金属部件和稀有物品的贝壳',
          action: {
            openShell: '打开贝壳'
          }
        },
        waterPurifier: {
          name: '净水器',
          description: '净化咸海水并提取盐'
        },
        fishingNet: {
          name: '鱼网',
          description: '从海洋'
        },
        pepperField: {
          name: '胡椒田',
          description: '种植并收获辣椒植物'
        },
        beehive: {
          name: '蜂箱',
          description: '从勤劳的蜜蜂身上采集蜂蜜'
        },
        citrusPlantation: {
          name: '柑橘种植园',
          description: '种植柑橘类水果并收获他们'
        }
      },
      buildingEffect: {
        autocollectMult: '自动收集数量',
        pearlChance: '珍珠机会',
      }
    },
    nightHunt: {
      name: '夜间狩猎',
      potions: '药水',
      performRitual: '进行仪式',
      performRitualDescription: '消耗所有选定的成分来执行仪式。如果找到正确的成分组合，即可解锁新药水。位置也很重要！',
      asBonusIngredient: '作为奖励成分',
      findablePotions: '本层可找到的药水',
      ritualStabilityDescription: '稳定性影响基于的多次机会百分比：',
      ritualStabilityDescription1: '100% - 200%：有机会保留基本成分（目前为 {0}%）',
      ritualStabilityDescription2: '0% - 100%：有机会保留奖励成分（目前为 {0}%）',
      ritualStabilityDescription3: '-100% - 0%：仪式失败但没有获得任何奖励的几率（当前为 {0}%）',
      ritualSuccessDescription: '成功的仪式将产生新仪式的夜间狩猎代币，并有可能找到新的药水。已知药水的成功仪式会提高其等级，产生夜间狩猎代币，并使该药水更难达到下一个级别。',
      ritualFamiliarityDescription: '如果仪式失败，则将此仪式的稳定性和成功机会提高此数量。此奖励会在仪式成功时叠加并重置。',
      ritualHintDescription: '有机会揭示有关槽位或成分数量的提示。仅对成功的新仪式给出提示。对于每个找到的提示，此机会会减少 {0}%。当发现暗示仪式时，提示和提示几率惩罚会重置。',
      clickToAdd: '单击原料将其添加到仪式中',
      ingredientSizeDescription: '配料尺寸允许每个魔法货币可以找到更多原料',
      favouriteIngredient: {
        title: '最喜欢的成分',
        description: '您可以选择一种成分作为最喜欢的成分，每次找到一种成分时，您还会收到您最喜欢的成分',
        copy: '复制找到的成分',
      },
      sackDescription: '麻袋可以以高魔法量出现，消耗10倍的魔法并包含10倍的成分，在所有可用的物品中平均分配个',
      newDescription: {
        empty: '这里可以查看当前配方是否是新的（之前没有成功过）',
        isNew: '这是一个新配方，如果成功，您将收到一个夜间狩猎代币',
        isNewNoToken: '这是一个新配方',
        isNewPotion: '您还可以发现一种新药水',
        discoveredPotion: '这是已知的药剂配方。如果这个仪式成功，你会升级药水并获得夜间狩猎代币',
        pointless: '这是一个已知的配方，没有必要对此进行更多仪式'
      },
      potion: {
        power: '力量药水',
        insight: '洞察药水',
        rage: '愤怒药水',
        calming: '镇静药水',
        sorrow: '悲伤药水',
        energy: '能量药水',
        nature: '液化',
        intensity: '强度药水',
        hysteria: '生命药水歇斯底里',
        insanity: '疯狂药水',
        patience: '自然药水',
        transformation: '转化药水',
        silence: '沉默药水',
        photosynthesis: '耐心药水',
        sun: '太阳药水',
        growth: '成长药水',
        solidification: '凝固药水',
        liquification: '洞察药水',
        glowing: '发光药水',
        stasis: '停滞药水',
        creativity: '创造力药水',
        poison: '光合作用药水',
        warmth: '温暖药水',
      }
    },
    snowdown: {
      name: '下雪',
      fightCount: '战斗',
      fight: '战斗',
      fightDescription: '以几个雪球为代价与显示的对手战斗',
      fightWin: '如果您获胜，您将获得奖励增益',
      fightWinProducer: '您选择的制作人',
      fightWinItem: '三个随机物品之一',
      pickProducer: '选择生产者',
      pickItem: '选择一个项目',
      reroll: '重新滚动',
      rerollDescription: '将拥有的项目重新滚动到另一个项目',
      buyItem: '购买物品',
      buyItemDescription: '获得三个随机物品之一',
      attackDescription: '你的攻击造成的伤害量。最终伤害量将在攻击的 80% 到 120% 之间',
      healthDescription: '在冻结和无法使用之前可以承受的伤害量战斗',
      defenseDescription: '减少一定量的伤害',
      critDescription: '每暴击等级造成暴击的几率提高1%。暴击造成 +10 伤害。暴击率高于 25% 时，当暴击率接近 75% 时，每个暴击等级的暴击率会降低。为此每损失 1% 暴击率，获得 +0.2 暴击伤害。倍增攻击力也会增加暴击伤害',
      blockDescription: '增加你阻止攻击并免受攻击的机会伤害',
      boost: '获得 1 天的进度立即',
      revenge: {
        name: '复仇',
        description: '您已经连续输掉了 {0} 场战斗。这会增加你的统计数据，直到你赢得一场雪仗',
        statsBase: '当你输掉一场战斗时获得+5%的攻击力和生命值',
        statsScaling: '当你输掉一场战斗时获得+5%的攻击力和生命值，+{0}暴击等级和+{1}格挡等级。每次输掉一场战斗时，你还会获得额外的+{2}%攻击力和每场战斗的生命值损失'
      },
      fighter: {
        snowOwl: '雪猫头鹰',
        dog: '狗',
        cat: '猫',
        penguin: '企鹅',
        rabbit: '兔子',
        turtle: '龟',
        toddler: '幼儿',
        babysitter: '保姆',
        kid: '儿童',
        toughKid: '坚强的孩子',
        teenager: '青少年',
        bully: '恶霸',
        youngAdult: '年轻人',
        hooligan: '流氓',
        adult: '成人',
        veteran: '老手',
        wallOfIce: '冰墙',
        snowBot: '雪地机器人'
      },
      item: {
        rollingPin: {
          name: '擀面杖',
          description: ''
        },
        forest: {
          name: '森林',
          description: ''
        },
        snowCannon: {
          name: '雪炮',
          description: ''
        },
        shepherd: {
          name: '牧羊人',
          description: ''
        },
        animalTooth: {
          name: '动物牙齿',
          description: ''
        },
        collar: {
          name: '项圈',
          description: ''
        },
        chili: {
          name: '辣椒',
          description: ''
        },
        drumstick: {
          name: '鼓棒',
          description: ''
        },
        mouse: {
          name: '鼠标',
          description: '当你的一只宠物攻击时治疗玩家1'
        },
        bone: {
          name: '骨头',
          description: '您的宠物在攻击时治疗1点'
        },
        gravestone: {
          name: '墓碑',
          description: '宠物冰冻治疗玩家和其他宠物 15'
        },
        spikedCollar: {
          name: '尖刺项圈',
          description: '随机宠物的暴击和格挡等级为30，此奖励在冻结时转移到另一只随机宠物'
        },
        heartCollar: {
          name: '心脏项圈',
          description: '随机宠物被复活一次'
        },
        treatBag: {
          name: '治疗袋',
          description: '宠物可以选择治疗 50% 最大生命值而不是攻击。每袋 3 份零食'
        },
        tennisBall: {
          name: '网球',
          description: '当玩家冻结时，所有宠物都会复活'
        },
        appleJuice: {
          name: '苹果汁',
          description: '玩家可以选择治疗50%最大生命值而不是攻击。单次使用'
        },
        hotWater: {
          name: '热水',
          description: '玩家以 25% 生命值复活一次'
        },
        dumbbell: {
          name: '哑铃',
          description: '玩家受到攻击时获得0.5点攻击力'
        },
        target: {
          name: '目标',
          description: '玩家受到攻击时获得4点暴击等级'
        },
        gloves: {
          name: '手套',
          description: '玩家受到攻击时获得0.2点攻击力和1点暴击等级'
        },
        snowboard: {
          name: '滑雪板',
          description: '第一5 名玩家攻击暴击'
        },
        tea: {
          name: '茶',
          description: '敌人冻结后，玩家在下一次攻击中治疗 25 点并暴击'
        },
        starShield: {
          name: '星星盾',
          description: '玩家获得前 3 回合防御 5'
        },
        coffee: {
          name: '咖啡',
          description: '玩家在暴击时治疗 8 点'
        },
        pebbles: {
          name: '卵石',
          description: '玩家在暴击时眩晕目标 1 回合'
        },
        sunShield: {
          name: '太阳盾牌',
          description: ''
        },
        moonShield: {
          name: '月球屏蔽',
          description: ''
        },
        fireplace: {
          name: '壁炉',
          description: ''
        },
        sharpSnowflake: {
          name: '锋利的雪花',
          description: ''
        },
        candyCane: {
          name: '糖果手杖',
          description: ''
        },
        shovel: {
          name: '铲子',
          description: ''
        },
        turkey: {
          name: '土耳其',
          description: ''
        }
      }
    },
    merchant: {
      name: '商家'
    },
    casino: {
      name: '赌场',
      prize: '奖品',
      bingo: {
        1: '1x 宾果游戏',
        2: '2x 宾果游戏',
        3: '3x 宾果游戏'
      }
    },
    bank: {
      name: '银行',
      description: '通过 3 个选项之一管理您的黄玉。使用一个选项会禁用所有其他选项。偿还贷款不需要或消耗行动。',
      project: {
        name: '项目',
        expandVault: '扩展金库',
        persuadeInvestors: '说服投资者',
        improveCreditScore: '提高信用评分',
        businessMarketing: '商业营销',
        cardTournament: '赞助卡牌锦标赛',
        fund: '基金'
      },
      investment: {
        name: '投资',
        description: '投资黄玉，在下次银行活动时连本带利地收回。第一个 {1} 黄玉获得 {0}% 利息，以上所有项目获得 {2}% 利息',
        invest: '投资'
      },
      loan: {
        name: '贷款',
        description: '以{0}%利息借黄玉，稍后偿还。当您获得满容量的黄玉时，黄玉债务将自动偿还。',
        repay: '回报',
        borrow: '借'
      }
    },
    calendar: '日历',
    rewards: '奖励'
  },
  globalLevel: {
    name: '全球级别',
    description: '基于多个值的总和。用于解锁新功能',
    mining_0: '最深矿石岩石破碎',
    mining_1: '最深的气态巨岩破碎',
    village_0: '最大住房',
    village_1: '制作里程碑命中',
    horde_0: '击败最高区域首领',
    horde_1: '战斗通行证等级',
    farm_0: '所有农作物水平的总和',
    gallery_0: '整体美感Log4',
    debug: '调试'
  },
  theme: {
    name: '主题',
    icon: {
      hasCustomNavbar: '自定义导航栏',
      hasCustomBackground: '自定义背景',
      hasCustomColors: '自定义颜色调色板',
      hasCustomUI: '自定义用户界面元素',
      hasAnimations: '包括动画',
      hasParticles: '包括颗粒',
    },
    default: '蓝色',
    cyan: '青色',
    green: '绿色',
    yellow: '黄色',
    orange: '橙色',
    brown: '棕色',
    red: '红色',
    pink: '粉红色',
    purple: '紫色',
    grey: '灰色',
    sepia: '棕褐色',
    factory: '工厂',
    forest: '森林',
    cherry: '樱桃',
    sky: '天空',
    polar: '极地',
    prismatic: '棱镜',
    candlelight: '烛光',
    colorful: '多彩',
    rain: '雨',
    waves: '波浪',
    autumnForest: '秋季森林',
    frozen: '冷冻',
  },
  settings: {
    keybinds: {
      name: '按键绑定',
      prevMainFeature: {
        name: '上一个主要内容功能'
      },
      nextMainFeature: {
        name: '下一个主要功能'
      },
      debugSkip1m: {
        name: '跳过1分钟'
      },
      debugSkip10m: {
        name: '跳过 10 分钟'
      },
      debugSkip1h: {
        name: '跳过1小时'
      },
      debugSkip1d: {
        name: '跳过1天'
      }
    },
    theme: {
      name: '主题'
    },
    general: {
      name: '通用',
      pause: {
        name: '暂停'
      },
      dark: {
        name: '黑暗模式'
      },
      autosaveTimer: {
        name: '自动保存'
      },
      lang: {
        name: '语言',
        en: '英语',
        de: '德语'
      },
      tabDisplayDesktop: {
        name: '选项卡显示',
        icon: '仅图标',
        text: '文本只有',
        both: '图标和文字'
      },
      tabDisplayMobile: {
        name: '选项卡显示',
        icon: '仅图标',
        text: '文本只有',
        both: '图标和文字'
      },
      relativeUpgradeStats: {
        name: '相对升级统计',
        description: '显示差异而不是前后值'
      },
      showFormulas: {
        name: '显示公式'
      },
      useLegacyFarmSelect: {
        name: '老农场精选',
        description: '使用用于选择农场中农作物和建筑物的旧菜单'
      },
      numberFormatting: {
        name: '数字格式',
        standard: '标准',
        scientific: '科学',
        engineering: '工程'
      },
      showDetailedPatchnotes: {
        name: '显示详细补丁说明'
      },
      showAllCards: {
        name: '显示所有卡牌'
      },
      showEfficiencyStats: {
        name: '显示效率统计数据'
      }
    },
    automation: {
      name: '自动化',
      progressMining: {
        name: '挖矿自动进度限制',
        description: '第一次破碎岩石时，如果破碎需要 X 秒或更短时间，您会自动前进到下一个深度'
      },
      fightHordeBoss: {
        name: '自动战斗部落首领'
      }
    },
    performance: {
      name: '表演',
      upgradeListItems: {
        name: '每页升级'
      },
      cssShadows: {
        name: '文字阴影',
        0: '无',
        1: '简单',
        2: '平滑'
      },
      cssAnimations: {
        name: 'CSS 动画'
      },
      particleAmount: {
        name: '颗粒数量',
        0: '无',
        1: '减少',
        2: '平均',
        3: '增加'
      }
    },
    notification: {
      name: '通知',
      position: {
        name: '位置',
        0: '左上',
        1: '顶部',
        2: '右上',
        3: '右下',
        4: '底部',
        5: '左下'
      },
      autosave: {
        name: '自动保存提示'
      },
      backupHint: {
        name: '备份提示',
        0: '关闭',
        1: '稀有',
        2: '平均',
        3: '常见'
      },
      updateCheck: {
        name: '检查更新'
      },
      note: {
        name: '注意提示'
      },
      achievement: {
        name: '成就提示'
      },
      heirloom: {
        name: '传家宝提示'
      },
      cardPackContent: {
        name: '卡包内容'
      },
      cropReady: {
        name: '作物准备就绪'
      }
    },
    confirm: {
      name: '确认',
      prestige: {
        name: '声望'
      },
      gem: {
        name: '宝石购买'
      },
      eventToken: {
        name: '活动代币购买'
      },
      farmRareResources: {
        name: '稀有农场资源购买'
      },
      treasureDelete: {
        name: '宝藏删除'
      }
    },
    experiment: {
      name: '实验',
      warning: '这些设置仍处于实验阶段，可能有缺陷、未完成、性能过重或令人困惑。启用它们的风险由您自行承担，如果您正在使用它们，请留下反馈！如果此部分为空，则说明当时没有可用的实验设置，或者您还没有取得足够的进展，无法看到它们',
      currencyLabel: {
        name: '显示货币标签',
        description: '显示货币收益和达到容量所需的时间，无需悬停'
      }
    }
  },
  statBreakdown: {
    base: '基础值',
    min: '最小值',
    max: '最大值',
    globalLevel: '全球级别',
    prestige: '声望',
    graniteBreaksMult: 'Log10 中断',
    miningTemperature: '温度',
    miningObsidianPenalty: '增强惩罚',
    villageOffering: '供奉',
    zoneCleared: '区域已清除',
    zoneClearedTotal: '清除最高区域',
    zone: '区域',
    hordeMaxDifficulty: '困难已清除',
    hordeBasicLoot: '基本战利品',
    hordeEquipmentPermanent: '装备效果',
    hordeMastery: '装备掌握',
    hordeRest: '休息',
    hordeNostalgia: '怀旧',
    hordeNostalgiaLost: '发现传家宝',
    hordeClassMult: '班级乘数',
    hordeClassLevel: '班级级别',
    hordeClassLowerLimit: '下极限',
    hordeBattlePass: '战斗通行证',
    hordeEnergy: '能源',
    hordeMana: '法力',
    hordeHealth: '健康',
    hordeTime: '时间',
    hordeSacrifice: '牺牲',
    hordeRaid: '突袭胜利',
    hordeSkeleton: '骷髅',
    hordeEnemyActive: '敌人活跃',
    farmEarlyGame: '第一批庄稼',
    farmGiantCrop: '巨型作物',
    galleryCanvas: '画布',
    relicGlyph: '字形',
    cards: '卡牌',
    cardsShiny: '闪亮卡片',
    treasure: '宝藏',
    eventPower: '活动力量',
    debug: '调试',
    bankInvestment: '投资',
    alloying: '合金',
    miningResin: '树脂',
    cryolab: '冷冻实验室',
    ritualTier: '仪式等级',
    ritualPotionLevel: '药水等级',
    ritualHint: '发现的提示',
    ritualIngredient: '额外成分',
    snowdownRevenge: '复仇',
    interest: '兴趣',
    multiplier: '乘数',
    grouped: '分组({0})',
    generalBonusCompletions: '遗物电池',
  },

  // Feature specific translations
  mining: {
    mine: '我的',
    gainSummary: '命中时获得 {0}，突破时获得 {1} (x{2})，每秒 {3}',
    gainSummaryHit: '击中时获得 {0}',
    gainSummaryBreak: '突破时获得 {0}',
    depthDweller: '深度驻留者',
    dweller: {
      title: '当前/最高可能的居民深度',
      description1: '居民启动速度很快，越接近极限，速度就越慢。',
      description2: '当前居民每完成半米深度，您的声望奖励就会增加。',
      description3: '最大可能的居民深度是矿井最大深度的 {0}%。',
      description4: '最大居民深度',
      descriptionOvercap: '居民可以在达到可能的最高深度后获得奖励深度，从而使你的声望奖励线性增加。居民速度降低至 {0}%，在达到最高可能深度后，每 10% 再次将速度降低至 {0}%',
      nextTime: '您将在 {1} 内到达 {0} 分钟'
    },
    pickaxePower: '这是你的镐的威力和基础伤害。通过制作更好的镐来增加它。',
    damage: '伤害',
    timeToBreak: '打破当前岩石所需的时间',
    durability: '耐久性',
    durabilityDescription: '打破这块岩石所需的伤害量',
    durabilityBreaks: {
      s: '这块岩石被打破了{0} 次',
      p: '这块岩石被打破了 {0} 次'
    },
    toughness: '韧性',
    toughnessDescription: '减少一定量的伤害',
    toughnessHigh: '韧性正在严重降低你的伤害',
    toughnessTooHigh: '韧性太高，无法造成任何伤害',
    scrapDescription: '在你摧毁这块岩石至少一次后，每次造成伤害都会获得碎片。当您摧毁一块岩石时，您将获得 {0}x 的废料奖励',
    scrapNotBroken: '您尚未获得废料，因为这块岩石从未被破碎过破碎',
    oreNotBroken: '您尚未获得矿石，因为这块岩石从未被破碎',
    oreDescription: {
      short: '可以在 {0}m 或以下找到',
      long: '可以在 {0}m - {1}m 处找到，如果深度能被 {2} 整除，则可以在以下位置找到'
    },
    rareEarthNotBroken: '您尚未获得稀土，因为这块岩石从未被破碎',
    rareEarthDescription: {
      granite: '可以在 {0}m 或以下找到已破碎 1000 次或以上的岩石。每突破 10 次方，获得的金额就会翻倍',
      salt: '可以在 {0}m 或以下找到含有 1 个矿石的岩石',
      coal: '可以在每块岩石第一次破裂处的 {0} 米或以下位置找到',
      sulfur: '当撞到最深的岩石时，可以在 {0} 米或以下找到',
      niter: '可以在 {0} 米或以下的地方找到，力量为 10 次岩石破碎',
      obsidian: '如果你的镐没有增强，可以在 {0}m 或以下找到',
      deeprock: '如果当前深度的数字加起来为 14 或更高，则可以在 {0}m 或以下找到',
      glowshard: '可以在 {0}m 或以下找到，每米低于限制的可能性为 0.1%。获得一个需要你挖 1m 深，这个限制每天减少 10%',
      limestone: '可以在任何质数深度找到。在存在石灰石的深度，您收到的废料较少',
      moonshard: '如果深度居民已达到 {0} 米或以下的深度，则可以在该深度找到',
      phosphorus: '如果深度能被 25 整除，则可以在 {0}m 或以下找到。在存在磷的深度，您不会收到烟雾',
    },
    rareEarthNotAffected: '此资源不受稀土增益的影响',
    scrapGainHint: '当撞击您以前从未破碎过的岩石时，您不会得到废料。有时，留在当前深度收集更多废料而不是立即挖掘会更明智。',
    oreCrafting: '单击矿石将其添加到制作槽',
    crafting: {
      power: '力量',
      purity: '纯度',
      impurity: '杂质',
      oreQuality: '制作镐所需的矿石量除以矿石质量',
      craftPickaxe: '工艺镐',
      purityDescription: '要达到 50% 的最低质量，您的纯度需要与您的杂质相匹配。',
      premiumSlot: '这是一个高级制作槽。高于 x1 的杂质减半，纯度加倍。',
      minPurity: '您需要至少 0.1% 的最低质量才能制作镐'
    },
    craftingDescription: '消耗选定的矿石并创建具有随机功率值的新镐。如果它比你当前的镐（{0} 功率）更好，请将其更换。',
    resinDescription: '每块树脂增加 30% 的力量和 25% 的纯度。每个镐工艺最多可使用 {0} 树脂。',
    smokeDescription: '消耗所有烟雾以创建具有固定功率值的新镐',
    smeltery: '冶炼厂',
    smelteryTemperatureDescription: '达到一定温度即可解锁更多冶炼厂。超过要求的每度，冶炼厂还会获得 +{0}% 速度',
    smelteryTemperatureDescription2: '由于温度原因，该冶炼厂的速度 +{0}%',
    smelterySpeedDescription: '该冶炼厂的基本时间为 {0}',
    smelt: '熔炼',
    enhance: '增强',
    enhancement: {
      title: '增强',
      description: '使用栏对您的镐应用增强功能。每个栏都有其独特的增强功能，可以多次应用。',
      disableDescription: '您可以暂时禁用所有增强功能以​​再次收集黑曜石，但根据所应用的增强功能的数量，您获得的黑曜石会减少',
      maximumDescription: '您只能拥有有限数量的增强功能，因此请考虑一下您将哪些增强功能放在您的镐。',
      barAluminium: '轻型',
      barBronze: '坚固',
      barSteel: '锋利',
      barTitanium: '挖掘机',
      barShiny: '丰富',
      barIridium: '熔岩',
      barDarkIron: '无效',
    },
    gasGain: {
      0: '获得',
      1: '% 可获得的',
      2: '当你打破这块石头时。您可以获得高达 ',
      3: '在这个深度'
    },
    beacon: {
      noBeacon: '没有信标',
      clickToPlace: '单击放置信标',
      selectToPlace: '选择要放置的信标',
      place: '地点',
      remove: '删除信标',
      removeDescription: '您可以随时删除一个信标，但需要等待 20 小时才能删除另一个信标',
      removeCooldown: '等待{0}，然后才能再次删除信标',
      piercing: '穿刺信标',
      rich: '丰富信标',
      wonder: '奇迹信标',
      hope: '希望信标',
    },
    anomaly: {
      name: '异常',
      toughness: '这块岩石有100倍的韧性',
    }
  },
  village: {
    job: {
      name: '工作',
      collector: '收藏家',
      farmer: '农民',
      harvester: '收割机',
      miner: '矿工',
      wellWorker: '工人',
      librarian: '图书管理员',
      glassblower: '玻璃制造商',
      entertainer: '艺人',
      lumberjack: '伐木工',
      blastMiner: '爆炸矿工',
      fisherman: '渔夫',
      scientist: '科学家',
      gardener: '园丁',
      oilWorker: '石油工人',
      sculptor: '雕刻家',
      explorer: '探索者',
    },
    policy: {
      name: '政策',
      taxes: '税金',
      immigration: '移民',
      religion: '宗教',
      scanning: '扫描',
    },
    crafting: {
      unlockNew: '新制作配方：',
      owned: '{0} 拥有',
      changeStat: {
        value: '将值增加到 {0}',
        timeNeeded: '将制作时间减少到{0}'
      },
      nextEffect: '下一个工艺效果',
      special: {
        description: '特殊工艺品在制作时提供永久奖励，并且其进度不会根据声望重置。它们的成本随着每种工艺的增加而增加，并且没有里程碑'
      },
      crafts: '{0} / {1} 工艺品',
      sellEvery: '每~{0}卖1朵',
      sellPrice: '售价（价值：{0}）',
      rope: '绳子',
      woodenPlanks: '木板',
      brick: '砖',
      screws: '螺丝',
      waterBottle: '水瓶',
      cocktailGlass: '鸡尾酒杯',
      boomerang: '回旋镖',
      polishedGem: '抛光宝石',
      oilLamp: '油灯',
      shower: '淋浴',
      pouch: '小袋',
      cupboard: '橱柜',
      weight: '体重',
      scissors: '剪刀',
      herbTea: '药草茶',
      glasses: '眼镜',
      arrows: '箭头',
      bowl: '碗',
      chain: '链条',
      spear: '矛',
      goldenRing: '金戒指',
      poisonedArrows: '中毒箭头',
      frostSpear: '霜冻矛',
      spicySoup: '麻辣汤',
      stopwatch: '秒表',
      smallChest: '小箱子',
      bush: '布什',
      handSaw: '手锯',
      garage: '车库',
      diamondRing: '钻石戒指',
    },
    buildings: '建筑',
    village: '村庄',
    pray: '祈祷',
    unemployed: '失业',
    unemployedDescription: '失业公民不生产资源。将他们分配给以下工作',
    taxpayers: '纳税人',
    taxpayersDescription1: '所有工作公民每秒消耗每种食物的 {0} 并缴纳等于{1} ',
    taxpayersDescription2: '每个消耗的食物。',
    happinessDescription: '幸福修改所有资源增益（金币和信仰除外）',
    powerDescription: '每个力量的所有材料和食物增益增加+20%。您当前的力量将物质和食物增益乘以 x{0}',
    pollutionDescription: '每个污染点幸福感降低 1%。如果你的污染程度超过了你的容忍度，那么每污染一次超过你的容忍度，幸福感惩罚就会增加 1%。您的下一个污染点将使幸福感降低 {0}%',
    lootDescription: '每次条填满时都会找到新的战利品',
    lootRarity: '战利品质量决定了你的战利品稀有度分布：',
    lootNeedQuality: '需要超过 {0} 质量',
    buildingStat: '建造的建筑物总数',
    housingStat: '建造的房屋总数（每栋建筑前25个）',
    coinNotAffected: '金币不受“所有资源增益”的影响',
    faithNotAffected: '信仰不受“所有资源增益”和“精神资源”的影响增益”',
    artisanDescription: '可以指派工匠为您制作工艺品',
    counterDescription: '柜台可用于向村民出售制作的物品',
    offering: {
      name: '供奉',
      description: {
        0: '牺牲',
        1: '对于 ',
        2: '并将发行收益增加 ',
        3: '/小时'
      },
      sacrifice: '牺牲',
      notUnlocked: '此产品尚未解锁。您仍然可以花费祭品，但不能牺牲，并且在解锁祭品之前不会应用资源容量',
      notUnlockedHint: '此产品尚未解锁，因此资源容量尚不适用',
    },
    material: '材料',
    food: '食物',
    mental: '精神资源',
    loot: '战利品',
    specialIngredient: '特殊成分',
    foodConsume: '每秒消耗 {0}'
  },
  horde: {
    horde: '部落',
    zone: '区域',
    player: '玩家',
    enemy: '敌人',
    loadoutName: '加载名称',
    newLoadout: '新装备',
    noLoadouts: '无负载',
    monsterPartHint: '前往区域 10+ 并到达敌人 #101 以发现新货币！该货币对于进一步进步至关重要，因为它可以帮助您提高骨骼容量。',
    enemyDescription: '与前一个敌人相比，同一区域中的每个敌人都有 x{0} 攻击力、x{1} 生命值和 +{2}% 骨骼。这是敌人 #{3}，具有 x{4} 攻击力、x{5} 生命值和 +{6}% 骨骼。当你死后，所有这些效果都会重置。',
    enemyDescriptionClasses: '与前一个敌人相比，同一区域中的每个敌人都有 x{0} 攻击力、x{1} 生命值和 +{2}% 血量。这是敌人 #{3}，具有 x{4} 攻击力、x{5} 生命值和 +{6}% 血量。当你死后，所有这些效果都会重置。',
    enemySigil1: {
      s: '此区域中的敌人有 {0} 印记',
      p: '此区域中的敌人有 {0}印记',
    },
    enemySigil2: {
      s: '.',
      p: '，从 {0} 不同类型中选择。',
    },
    damageTypes: {
      title: '伤害类型',
      description: '每次攻击都有三种伤害类型之一。每种伤害类型所造成和承受的伤害都可以修改。',
      dealt: '处理',
      taken: '采取',
      physic: '物理',
      magic: '魔法',
      bio: '生物'
    },
    itemFindDescription: '击败敌人后，你有机会找到这个设备',
    attackDescription: '每次攻击造成的伤害量',
    attackConversion: {
      text: '每秒发生一次常规攻击，伤害分布如下： ',
      physic: '{0}% 物理',
      magic: '{0}%神奇',
      bio: '{0}% 生物',
      strengthAmp: '每点力量都会使你的常规攻击伤害增加 +{0}%，总计 +{1}%。这会增加你对 {2} 的常规攻击的伤害。'
    },
    healthDescription: '你在死亡前可以承受的伤害量',
    respawnDescription: '你需要多少时间才能从死亡中恢复过来',
    reviveDescription: '使用复活来恢复生命值，而不是死亡',
    critDescription: '常规攻击有一定几率造成更多伤害。暴击率可以达到100%以上，此时攻击力会增加数倍',
    toxicDescription: '造成毒害（生物），等于其所造成伤害的百分比攻击',
    divisionShieldDescription: '将你受到的所有伤害除以(师护盾+1)，受到攻击后失去1个师护盾',
    divisionShieldReplenishDescription: '补充击败敌人后，{0}% 丢失的师护盾',
    firstStrikeDescription: '如果这是你的第一次攻击，则造成额外魔法伤害',
    spellbladeDescription: '使用装备效果后造成额外魔法伤害。对于冷却时间低于 10 秒的装备效果，这并不总是有效',
    cuttingDescription: '对目标当前生命值的一定百分比造成生物伤害攻击',
    recoveryDescription: '杀死敌人后恢复一定比例的损失生命值敌人',
    defenseDescription: '将传入伤害减少最大生命值的一定百分比',
    executeDescription: '如果敌人的生命值低于一定值，则立即杀死他们阈值',
    hasteDescription: '减少战斗的冷却时间活性',
    hasteFormula: 'CD = 基础 CD / (1 + 急速 / 100)',
    energyDescription: '一些活性物质需要能量才能使用。随着时间的推移它会自动补充',
    manaDescription: '有些活性物质需要法力才能使用。随着时间的推移，它会慢慢重新填充',
    boss: '老板',
    raidboss: '突袭首领',
    rareLoot: '稀有战利品',
    rareLootDescription: '每隔几分钟，被击败的敌人就会掉落稀有战利品。',
    poisonPlayer: '您中毒了，每秒受到 {0} 伤害',
    poisonEnemy: '该敌人已中毒，每秒受到 {0} 伤害',
    silencePlayer: '你被沉默了，无法使用活性剂',
    silenceEnemy: '该敌人已被沉默且无法使用主动物',
    stunPlayer: '你被惊呆了，无法攻击',
    stunEnemy: '该敌人昏迷且无法攻击',
    shieldbreak: '更快地打破师盾',
    statusResist: '更快地从状态影响中恢复',
    stunBoss: 'Boss 获得 +2 眩晕抗性',
    bossBioResist: 'Boss 只受到 10% 的生物伤害，但会受到 35% 的魔法伤害',
    enemyRespawn: '敌人需要时间{0} 重生，最多 {1} 个敌人可以等待。击败首领会立即重生所有敌人',
    bossBonusDifficulty: '头目难度',
    bossNoReward: '你可以在任何难度下再次与这个boss战斗，但不会因此获得奖励',
    energyIncompatible: '您当前选择的职业无法使用此饰品，因为它需要能量',
    manaIncompatible: '您当前选择的职业无法使用此饰品，因为它需要法力',
    taunt: {
      title: '嘲讽模式',
      description: '当被嘲讽时，即使没有人在等待，敌人也会继续生成，但所有早期生成的敌人都不会携带战利品。嘲讽仅在试图接近老板时有效',
      on: '嘲讽模式开启',
      off: '嘲讽模式关闭',
      clickToToggle: '单击以切换'
    },
    reachBoss: {
      title: '到达老板身边',
      description: '要挑战该区域的首领，您需要在不死亡的情况下击败 {0} 个敌人'
    },
    fightBoss: {
      title: '打老大',
      description: '您已经击败了足够多的敌人来挑战该区域的首领'
    },
    fleeBoss: {
      title: '逃离老板',
      description: '逃离这场战斗并继续与常规敌人战斗'
    },
    defeatedBoss: {
      title: '首领被击败',
      description: '您已经击败了该区域的首领，这使您可以前往下一个区域'
    },
    souls: '灵魂',
    stat: {
      crit: '暴击'
    },
    rampage: {
      name: '狂暴',
      description: '与同一个敌人战斗太久会使其生气！您已经与这个敌人战斗了 {0}，它开始在每个 {1} 上横冲直撞。',
      effect: '每次敌人狂暴时，它都会获得 x{0} 次攻击、+{1} 状态抗性，并免疫攻击减少效果。',
      effectCurrent: '该敌人已狂暴 {0} 次。它具有 x{1} 攻击和 {2} 状态抵抗。'
    },
    sigil: {
      name: '印记',
      hasActive: '具有积极效果',
      min: '出现在区域{0}或更高',
      special: '仅出现在特殊情况下条件',
      inactive: '非活动',
      power: '力量',
      health: '健康',
      bashing: '打击',
      recovery: '恢复',
      toughness: '韧性',
      strength: '力量',
      magic: '魔法',
      magicBolt: '魔法螺栓',
      fireball: '火球',
      incorporeal: '无形',
      focus: '焦点',
      wisdom: '智慧',
      sparks: '火花',
      protection: '防护',
      shielding: '屏蔽',
      resistance: '抵抗',
      precision: '精度',
      screaming: '尖叫',
      cure: '治愈',
      sharp: '锋利',
      spitting: '随地吐痰',
      burst: '爆发',
      resilience: '弹性',
      growing: '成长',
      cold: '寒冷',
      fury: '愤怒',
      angelic: '天使',
      toxic: '有毒',
      foulBreath: '恶臭',
      nuke: '核弹',
      rainbow: '彩虹',
      drain: '排水',
      shocking: '震撼',
      defense: '防御',
      executing: '执行',
      raidRage: '突袭之怒',
      monstrousToughness: '巨大的韧性',
      berserk: '狂暴',
      iceGiant: '冰巨人',
      generic: '通用',
    },
    corruption: {
      name: '腐化',
      effects: '效果',
      power: '攻击力和生命值 x{0}',
      sigil: '印记+{0}',
      revive: '复活+{0}',
      execute: '执行+{0}%'
    },
    activeCooldown: '主动冷却',
    activeBuffFor: '对于{0}：',
    itemsEquipped: '使用的设备槽',
    cleared: '已清除',
    fighting: '战斗',
    equipment: {
      name: '装备',
      usableInStun: '可以在眩晕时使用',
      utilityOvertime: '实用程序活性物可以以前一个的一半速度存储多个电荷',
      inactive: '不活跃的战斗活动恢复其冷却时间正常费率的 {0}%',
      takeEquipped: '携带装备',
      dagger: '匕首',
      shirt: '衬衫',
      guardianAngel: '守护天使',
      milkCup: '一杯牛奶',
      starShield: '星星盾',
      longsword: '长剑',
      mace: '狼牙棒',
      boots: '靴子',
      liver: '肝脏',
      fireOrb: '火球',
      campfire: '篝火',
      clover: '三叶草',
      snowflake: '雪花',
      oppressor: '压迫者',
      toxin: '毒素',
      corruptEye: '腐化之眼',
      meatShield: '肉盾',
      wizardHat: '巫师帽',
      redStaff: '红色工作人员',
      cleansingSpring: '清洁弹簧',
      marblePillar: '大理石柱',
      rainbowStaff: '彩虹工作人员',
      antidote: '解毒剂',
      brokenStopwatch: '损坏的秒表',
      luckyCharm: '幸运符',
      mailbreaker: '邮件解密器',
      club: '俱乐部',
      goldenStaff: '金色法杖',
      toxicSword: '有毒剑',
      scissors: '剪刀',
      cat: '猫',
      healthyFruit: '健康水果',
      glasses: '眼镜',
      deadBird: '死鸟',
      shieldDissolver: '盾牌溶解器',
      calmingPill: '镇静药',
      cleansingFluid: '清洁液',
      forbiddenSword: '禁断剑',
      corruptedBone: '腐化之骨',
      plaguebringer: '瘟疫使者',
      forbiddenShield: '禁止的盾',
      dangerShield: '危险护盾',
      forbiddenToxin: '禁断毒素',
      glowingEye: '发光的眼睛',
      experimentalVaccine: '实验疫苗',
      microscope: '显微镜',
      moltenShield: '熔岩护盾',
      cutter: '美工刀',
      book: '图书',
      chocolateMilk: '巧克力牛奶',
      bigHammer: '大锤子',
      spookyPumpkin: '诡异南瓜',
      strangeChemical: '奇怪化学品',
      forbiddenHeartShield: '禁止的心盾',
      cloudStaff: '云工作人员',
      secretWeapon: '秘密武器',
      bomb: '炸弹',
      leechingStaff: '吸水工作人员',
      shatteredGem: '破碎的宝石',
      hourglass: '沙漏',
      glue: '胶',
      firework: '烟花',
      bowTie: '领结',
      forbiddenStopwatch: '禁断秒表',
      mysticalAccelerator: '神秘加速器',
      blazingStaff: '炽热法杖',
      stoneplate: '石板',
      shield: '盾牌',
      armor: '盔甲',
      natureStone: '天然石',
      evergrowingVine: '不断生长的藤蔓',
      energyDrink: '能量饮料',
      dragonheart: '龙心',
      prism: '棱镜',
      deathsword: '死亡之剑',
      needle: '针',
      mine: '我的',
      maskOfJoy: '欢乐面具',
      doubleEdgedSword: '双刃剑',
      critCore: '暴击核心',
      heavyGauntlet: '重型挑战',
      dumbbell: '哑铃',
      essenceExtractor: '精华提取器',
      spellbook: '法术书',
      forbiddenScissors: '禁止的剪刀',
      basicSpear: '基本矛',
      cursedEye: '被诅咒的眼睛',

      // Blessed equipment
      blessedSword: '祝福之剑',
      blessedArmor: '祝福盔甲',
      blessedBow: '祝福之弓',
      blessedFlame: '祝福火焰',
      blessedWater: '福水',
      blessedShield: '祝福火焰盾',

      // Chess pieces
      pawn: '典当',
      knight: '骑士',
      bishop: '主教',
      rook: '车',
      queen: '女王',
      king: '国王'
    },
    active: {
      damagePhysic: {
        0: '交易',
        1: '物理伤害'
      },
      damageMagic: {
        0: '交易',
        1: '魔法伤害'
      },
      damageBio: {
        0: '交易',
        1: '生物损伤'
      },
      maxdamagePhysic: {
        0: '交易',
        1: '敌人生命值物理伤害伤害'
      },
      maxdamageMagic: {
        0: '交易',
        1: '敌人生命值魔法伤害'
      },
      maxdamageBio: {
        0: '交易',
        1: '敌人生命值生物伤害'
      },
      heal: {
        0: '恢复',
        1: '健康'
      },
      bone: {
        0: '获得',
        1: '最高区域骨头'
      },
      blood: {
        0: '获得',
        1: '最高难度血'
      },
      monsterPart: {
        0: '获得',
        1: '最高区域怪物零件'
      },
      stun: {
        0: '击晕对手',
        1: ''
      },
      silence: {
        0: '使对手沉默',
        1: ''
      },
      revive: {
        0: '补充',
        1: '复活'
      },
      removeAttack: {
        0: '移除',
        1: '来自对手的攻击'
      },
      poison: {
        0: '应用',
        1: '毒'
      },
      antidote: {
        0: '移除',
        1: '毒'
      },
      permanentStat: {
        0: '',
        2: '',
        1: '(直到声望)'
      },
      gainStat: {
        0: '',
        2: '',
        1: '(永久)'
      },
      divisionShield: {
        0: '获得',
        1: '师护盾'
      },
      removeDivisionShield: {
        0: '移除',
        1: '师护盾来自对手'
      },
      executeKill: {
        0: '杀死敌人下面',
        1: '健康'
      },
      refillEnergy: {
        0: '恢复',
        1: '能源'
      },
      refillMana: {
        0: '恢复',
        1: '法力'
      },
      buff: {
        duration: '增益持续时间',
        suffix: '(增益)',
      },
      canCrit: '可以以 {0}% 效率暴击',
      canCritDiff: '主动暴击效率',
      reviveAll: '全部补充复活',
      removeStun: '删除眩晕',
      addStack: '提高该装备的统计数据（直到声望）',
      baseValue: '基础',
    },
    heirloom: {
      name: '传家宝',
      tabName: '传家宝',
      boost: {
        name: '传家宝提升',
        description: '您的传家宝提升等级为 {0}，增加其效果 (^{1})：',
      },
      min: '出现在区域{0}或更高',
      special: '不会出现在稀有战利品上',
      description: '传家宝是强大的文物，可以从稀有战利品中找到并永远保留。到达更高区域寻找更多类型',
      descriptionTower: '传家宝是强大的神器，可以在每个地方找到{0} 层并永远停留。到达更高的区域或不同的塔楼以找到更多类型',
      descriptionDouble: '金额最低的传家宝被给予的可能性是其两倍。如果您有多个最低数量的传家宝，则不适用。',
      descriptionNostalgia: '怀旧会增加你找到传家宝的机会。在怀旧的帮助下找到一个会消除 1 点怀旧，直到你的下一次声望',
      power: '力量',
      fortitude: '坚韧',
      wealth: '财富',
      spirit: '精神',
      sharpsight: '锐视',
      reaping: '收割',
      remembrance: '纪念',
      holding: '握持',
      expertise: '专业知识',
      mystery: '神秘',
      freezing: '冷冻',
      brick: '砖',
      heat: '加热',
      ice: '冰',
      crystal: '水晶',
      vitality: '我们的生命力',
      nature: '自然',
    },
    itemMastery: {
      name: '精通',
      description: '使用此装备在 {0} 或更高区域击败头目或获得稀有战利品，以获得精通点数。较高的区域可获得更多掌握点。',
      bonuses: '提高您的掌握水平以解锁该装备的奖励',
      current: '该装备拥有 {0} / {1} 掌握点',
      1: '声望后保留装备',
      2: '添加禁用主动装备的选项，以获得+{0}%的被动效果提升',
      3: '声望后保留装备等级',
      4: '主动功能增强 1.5 倍，禁用主动功能会带来 +{1}% 提升，而不是 +{0}%',
      5: '最多可以收集 {0} 个神秘碎片。每次掌握此值都会增加 {1}'
    },
    raid: {
      title: '袭击',
      name: '突袭',
      description: '突袭是需要突袭钥匙才能进入的特殊场所。挑战强大的突袭首领，提高你的统计数据并永久改善你的传家宝',
      keyDescription: '首次击败突袭首领时获得 {0} 突袭钥匙，每天获得 {1} 突袭钥匙（下一个在{2})',
      victory: '突袭胜利',
      victoryDescription: '您已击败 {0} 突袭首领，增加您的统计数据直至声望。对于每个击败的突袭首领，您将获得：',
      raidbossDescription: '击败突袭头目会增加您的突袭钥匙容量并增加未来突袭的难度老板们。当前的团队首领大约与 {0} 区域首领一样强大。更强的突袭首领在被击败时会提供更好的传家宝提升。',
      raidbossFail: '未能击败突袭首领，您将获得前一个突袭首领的奖励。',
      fight: '战斗',
      slay: '杀戮',
      slayAll: '杀死所有',
      slayDescription: '使用突袭钥匙，无需战斗即可从最强的击败突袭首领处获得所有奖励。如果您没有从上次突袭胜利中选择传家宝增益，则会随机选择一个。',
      slayConvert: '如果你获得的突袭钥匙多于你能持有的数量，这会自动发生。',
    },
    element: {
      elementalUpgrade: '{0}元素',
      elementalStats: '{0} 升级',
      enemyStats: '敌人统计数据',
      enemyActive: '敌人活性',
      enemyActiveDescription: '提高敌方活动的力量，并在 0、20、35 和 50 解锁新活动',
      playerElement: '玩家元素',
      ice: '冰',
      thunder: '雷霆',
      water: '水',
    },
    tower: {
      name: '塔楼',
      description: '塔楼是需要塔楼钥匙才能进入的特殊地方。你可以与敌人战斗，争夺王冠和独特的传家宝，直到死去。到达特定楼层即可永久解锁新奖励',
      zoneDescription: '位于您到达的最高楼层的这座塔中的敌人大约与 {0} 区域的敌人一样强大。他们以 {1} 区域敌人的力量开始，并在每层获得 {2} 区域的统计数据',
      floorTitle: '击败最高楼层',
      floorDescription: '击败某些楼层的敌人以解锁永久奖励：',
      rewardTitle: '奖励',
      rewardDescription1: '每个被击败的敌人获得 {0} 皇冠',
      rewardDescription2: '敌人给予每 {0} 层都有传家宝，有些传家宝是这座塔独有的：',
      keyDescription: '解锁新塔时获得 {0} 塔钥匙，每周获得 1 个塔钥匙（{1} 中的下一个）',
      enter: '输入',
      enterCost: '需要',
      floor: '地板{0}',
      brick: '砖塔',
      fire: '火塔',
      ice: '冰塔',
      danger: '危险塔',
      toxic: '有毒塔',
      forest: '森林塔',
    },
    classes: {
      level: '班级级别',
      levelDescription: '随着时间的推移获得阶级等级，增加您的血液增益、血液容量和勇气增益。每个职业等级你还会获得 {0} 技能点。',
      skill: '技能',
      skillPointsLeft: '{0} 技能剩余点数',
      skillPointCost: '需要{0} 技能点升级',
      skillTreeChoice: '这里可以做出选择，选择其中一个技能会锁定其他路径',
      stanceClick: '姿态 - 单击即可更改',
      skillName: {
        energyConvert: '能量转换',
        stab: '刺击',
        combatHeal: '战斗治疗',
        brawl: '争吵',
        spark: '火花',
        smash: '粉碎',
        lootSearch: '战利品搜索',
        doubleStrike: '双重打击',
        smallFireball: '小火球',
        fullRecovery: '满恢复',
        supercharge: '增压',

        energyOnCrit: '能量激增',
        longshot: '长镜头',
        eagleEye: '鹰眼',
        fireArrows: '火箭',
        poisonArrow: '毒箭',
        healOnCrit: '回春',
        reduceCooldownOnCrit: '无情',
        bloodOnCrit: '血之味',
        shockArrow: '冲击箭头',
        sharpArrow: '锋利的箭头',
        sharpMind: '敏锐的头脑',
        forestBlessing: '森林的祝福',

        manaRest: '法力恢复休息',
        magicMissile: '魔法导弹',
        fireball: '火球',
        shockBlast: '冲击波',
        heal: '治疗',
        barrier: '屏障',
        earthquake: '地震',
        manasteal: '修道院',
        waterBolt: '水螺栓',
        iceBlast: '冰爆',
        focus: '焦点',
        smite: '消除',
        conjure: '变戏法',
        ascend: '提升',
        deepFocus: '深度聚焦',

        damageRamp: '伤害上升',
        heavyHit: '重击',
        shieldBash: '盾牌重击',
        statRamp: '力量上升',
        refuge: '避难所',
        consecrate: '奉献',
        blessing: '祝福',
        fortify: '强化',
        parry: '招架',
        smite2: '重击',

        challenge: '挑战',
        parrotAttack: '鹦鹉攻击',
        plunder: '掠夺',
        bottleOBrew: '瓶装啤酒',
        bombToss: '投掷炸弹',
        cannonball: '炮弹',
        invigoratingBottle: '活力瓶',
        treasureChest: '宝藏宝箱',
        bountyBoard: '赏金板',
        pirateShip: '海盗船',

        sneak: '潜行',
        elementOfSurprise: '惊喜元素',
        backstab: '背刺',
        smokeBomb: '烟雾弹',
        comboStrike: '组合罢工',
        cursedDagger: '被诅咒的匕首',
        swiftStrike: '快速打击',
        shuriken: '手里剑',
        knockout: '淘汰赛',
        hiddenExplosive: '隐藏爆炸物',
        herbTea: '药草茶',
        meditation: '冥想',
        flow: '流程',
        pickpocket: '扒手',
        secretTechnique: '秘密技术',

        combatStance: '战斗姿态',
        lootingStance: '掠夺姿态',
        learningStance: '学习立场',
        crimsonPact: '猩红契约',
        crimsonRitual: '猩红仪式',
        reincarnation: '轮回',
        crimsonCurse: '猩红诅咒',
        sacrificialDagger: '牺牲匕首',
        crimsonHeart: '猩红之心',
        despair: '绝望',
        drainLife: '排水生命',
        hex: '十六进制',
        darkRitual: '黑暗仪式',
        occultRestoration: '神秘学恢复',
        harvest: '收获',
        summonAbomination: '召唤憎恶',
        occultThunder: '神秘学雷',
      },
      adventurer: {
        name: '冒险家',
        description: '可以应对各种情况的多才多艺的战士'
      },
      archer: {
        name: '弓箭手',
        description: '专注于致命一击和持续伤害的远程战士'
      },
      mage: {
        name: '法师',
        description: '利用法术快速对付敌人并允许自动施法的战士'
      },
      knight: {
        name: '骑士',
        description: '一位持久的战士，缓慢击倒对手，但可以对付强大的敌人'
      },
      assassin: {
        name: '刺客',
        description: '专注于快速杀死敌人的敏捷战士'
      },
      shaman: {
        name: '萨满祭司',
        description: '与自然结合的战士，利用治疗和毒药赢得战斗'
      },
      pirate: {
        name: '海盗',
        description: '海盗可能不是最好的战斗人员，但擅长掠夺'
      },
      undead: {
        name: '不死族',
        description: '用优势数量弥补这一弱点的弱战士'
      },
      cultist: {
        name: '信徒',
        description: '一次专注于一项任务的多才多艺的战士'
      },
      scholar: {
        name: '学者',
        description: '帮助其他职业的支持性战士'
      }
    },
    battlePass: {
      name: '战斗通行证',
      quest: {
        stat: '达到{0} {1}',
        zone: '清除{0}区域{1}',
        level: '达到等级 {0}',
        boss: '击败{0} (+{1})'
      },
      statType: {
        base: '基础{0}',
        total: '总计{0}',
      },
      bossDoubleReward: '头目任务将战斗通行证提升2级',
    },
    enemyName: {
      soldier: '士兵',
      officer: '警察',
      hunter: '猎人',
      sniper: '狙击手',
      strongMonkey: '强大的猴子',
      angryMonkey: '愤怒的猴子',
      dartMonkey: '飞镖猴',
      monkeyWizard: '猴子向导',
      monkeyDefender: '猴子防御者',
      monkeyMonk: '猴子和尚',
      puppy: '小狗',
      kitten: '小猫',
      seal: '封印',
      piglet: '小猪',
      panda: '熊猫',
      koala: '考拉',
      rabbit: '兔子',
      guineaPig: '豚鼠',
    },
    bossName: {
      ohilio_guard1: '后卫A',
      ohilio_guard2: '后卫B',
      ohilio: '听',
      chriz1: '克里斯',
      chriz2: '克里斯',
      mina: '米娜',

      armed_skeleton: '骷髅',
    },
    area: {
      zoneEndless: '无尽区域',
      zoneBoss: '老板 ({0})',
      zone: '区域 {0}',
      digsite: '挖掘场',
      digsiteDescription: '击败强大的骷髅头目以解锁在该区域找到怪物牙齿的能力。',
      digsiteWeakness: '该骨架对于 {0} 类来说较弱，使用任何其他类都会给骨架 x{1} 攻击力和生命值。',
      digsiteWeaknessTitle: '骷髅弱点',
      digsiteWeaknessShort: '弱到{0}',
      difficulty: '{0}难度',
      enemyAmount: '{0}此区域中的敌人',
      warzone: '战区',
      monkeyJungle: '猴子丛林',
      loveIsland: '爱情岛',
    },
    sign: {
      sign_1: {
        text: '我的目标是完美的，我从不失手！你最好小心！',
        signed: '听',
      },
      sign_2: {
        text: '你觉得你能伤害我吗？绝不！我会躲开一切，你根本打不到我！我是不可触碰的！',
        signed: '听',
      },
      sign_3: {
        text: '我是最伟大的，最好的，完美的，不可战胜的！就连我的侍卫都比不上我！你认为你有机会对抗我吗？哈！准备好受死吧！',
        signed: '听',
      },
      sign_4: {
        text: '仔细观察这些可爱的动物后，您会发现它们不是真实的。他们只是鬼火！但他们为什么在这里？为了让你心情不好？没时间想这个，你需要努力克服这些动物精神',
        signed: '???',
      },
    },
    quest: {
      name: '任务',
      description: '完成任务以提升战斗通行证并解锁永久奖励',
      completed: '{0} 已完成',
      allCompleted: '所有任务已完成',
    },
    trinket: {
      rarity: {
        0: '无主',
        1: '常见',
        2: '罕见',
        3: '稀有',
        4: '史诗',
        5: '传奇',
        6: '神话',
        7: '非凡',
        8: '辐射',
        9: '棱镜',
        10: '最终确定',
        timeless: '永恒'
      },
      equipped: '已选择饰品（声望后装备）',
      vitality: '我们的生命力',
      energy: '能源',
      magic: '魔法',
      fists: '拳头',
      sparks: '火花',
      haste: '急速',
      precision: '精度',
      wrath: '愤怒',
      strength: '力量',
      toxins: '毒素',
      wisdom: '智慧',
      extraction: '提取',
      learning: '学习',
      preservation: '保留',
      energize: '能量',
      automation: '自动化',
      cure: '治愈',
      stone: '石头',
      duality: '二元性',
      love: '爱情',
    },
    sacrifice: {
      name: '牺牲',
      description: '这里可以暂时牺牲装备槽位来换取强大的奖励'
    }
  },
  farm: {
    farm: '农场',
    unlockSeed: '解锁种子',
    experience: '经验',
    expToLevelUp: '您需要 {0} 更多收获才能达到下一级别',
    yield: '产量',
    rareDrop: '稀有掉落',
    rareDrops: '稀有掉落',
    huntedRareDrops: '猎杀稀有掉落',
    addRareDrop: '添加稀有掉落（{0}）',
    addRareDropAmount: '{0} 金额',
    prestige: {
      description: '您可以对已达到 4 级的农作物进行声望，将其声望等级提高到当前等级以获得奖励。这将重置该作物的所有经验、等级和基因。每个声望等级都会将所有农作物的产量乘以 x1.04。',
      current: '您当前的声望等级为 {0}，产量乘以 x{1}。',
      next: '威望此农作物可将您的威望等级提高 {0}。这会将您的总威望等级提高到 {1}，从而将您的收益提高到 x{2}。',
      nextNoEffect: '你的等级不高于您对该作物的声望等级。声望不会增加你的声望等级，但仍会重置等级和基因。',
      cropOnField: '您现在无法声望，因为这种作物已在田间',
      increasedGLRequirement: '达到 10 级后，作物每第二级只会增加全球水平',
      noMoreGL: '达到 40 级后，作物停止增加全球水平',
    },
    button: {
      plantAll: '在所有空瓷砖上种植选定的作物 ({0})。您还可以通过单击空图块来种植单一作物',
      replant: '所有种植的农作物都会被收获并再次种植在同一块瓷砖上',
      replantFertilizer: '也会使用相同的肥料（如果可能）',
      harvestAll: '所有生长的农作物均已收获。您还可以通过单击收获单一作物',
      delete: '从瓷砖上移除作物。退还消耗的资源',
      deleteBuilding: '装饰也可以通过这种方式移除并返回到你的库存中',
      color: '瓷砖可以着色，以便更轻松地管理大片土地。选择一种颜色并单击图块来绘制它。选择颜色后，批量操作只会影响相同颜色的图块',
      colorFilter: '仅影响此颜色的瓷砖',
    },
    timeDescription: '成长所需的时间',
    overgrowDescription: '完全生长后，您的植物可以继续生长以增加所有收获量。每达到 100%，增长时间就会乘以 {0}x。',
    overgrowFormula: 'TIME_MULT = (1 / OVERGROW + 1)x',
    fertilizerCostDescription: '每种作物所需的肥料',
    goldChance: '黄金机会',
    goldChanceDescription: '收割植物有机会获得黄金，具体取决于作物的生长时间和放置的花园侏儒的数量',
    goldChanceMultiple: '黄金机会超过100%仍然增加金币增益，您保证找到{0}金币，并有{1}%机会再找到1个',
    goldChanceWarning: '在田野上放置一个花园侏儒开始寻找黄金',
    specialCropEffect: '达到下一级别以获得：',
    freeUpgrades: {
      s: '基因剩余',
      p: '基因左'
    },
    fertilizerCannotBeBought: '无法购买',
    divider: {
      specialCrop: '特殊作物',
      decoration: '装饰',
    },
    crop: {
      carrot: '胡萝卜',
      blueberry: '蓝莓',
      wheat: '小麦',
      tulip: '郁金香',
      potato: '土豆',
      raspberry: '覆盆子',
      barley: '大麦',
      dandelion: '蒲公英',
      corn: '玉米',
      watermelon: '西瓜',
      rice: '大米',
      rose: '玫瑰',
      leek: '韭菜',
      honeymelon: '蜜瓜',
      rye: '黑麦',
      daisy: '黛西',
      cucumber: '黄瓜',
      grapes: '葡萄',
      hops: '啤酒花',
      violet: '紫色',
      sweetPotato: '红薯',
      strawberry: '草莓',
      sesame: '芝麻',
      sunflower: '向日葵',
      spinach: '菠菜',
      currant: '醋栗',
      redwheat: '红麦',
      poppy: '罂粟',
      pumpkin: '南瓜',
      blackberry: '黑莓',
      millet: '粟',
      petunia: '矮牵牛',
      chili: '辣椒',
      fern: '蕨类',
      reed: '芦苇',
      wildflower: '野花',
      cactus: '仙人掌',
      cress: '水芹',
      goldenRose: '金玫瑰',
      ancientFern: '古代蕨类',
    },
    giantCrop: {
      name: '巨型作物',
      regular: '您目前正在种植普通作物',
      giant: '您目前正在种植巨型作物',
      clickToToggle: '单击以切换',
      description: '您可以种植巨型农作物以获得更大的收成。他们修改了统计数据：',
      stat: {
        0: '生长时间从 {0} 增加到{1}',
        1: '肥料成本从{0}增加到{1}',
        2: '所有收获增益 x{0}',
        3: '作物成本 x{0}',
        4: '经验增益 x{0}',
      },
      efficiency: '这种巨型作物具有 {0}% 的时间效率',
    },
    gene: {
      name: '基因',
      upgrade: '基因升级',
      pickLevel: '选择一个等级{0}基因',
      dnaDescription: '当这种作物达到新水平时，您将获得 1 个 DNA，并可以将其用于基因升级',
      dnaDuplicate: '您选择的基因不会出现在您的下一个声望中。不挑选基因可以在下一个声望中使用所有 4 个基因',
      dnaBlocked: '封锁基因',
      hasUpgrade: '有基因升级',
      lockOnField: '该基因无法在田间用这种作物采摘',
      basics: '基础',
      yield: '产量',
      gold: '黄金',
      exp: '经验',
      rareDrop: '稀有掉落',
      grow: '生长',
      overgrow: '过度生长',
      mutate: '变异',
      grass: '草',
      dna: '脱氧核糖核酸',
      gnome: '侏儒',
      lonely: '孤独',
      fertile: '肥沃',
      mystery: '神秘',
      conversion: '转换',
      prestige: '声望',
      rareDropChance: '发现',
      lucky: '幸运',
      finalize: '最终确定',
      selfless: '无私',
      unyielding: '不屈服',
      teamwork: '团队合作',
      hunter: '猎人',
      patient: '病人',
    },
    fertilizerEffect: {
      vegetable: '仅蔬菜',
      berry: '浆果仅',
      grain: '谷物仅',
      flower: '鲜花仅',
      special: '特殊作物仅',
    },
    building: {
      premium: '高级{0}',
      premiumOwned: '高级：{0}拥有',
      owned: '{0} 拥有',
      gardenGnome: {
        name: '花园侏儒',
        description: '当花园侏儒放置在田野上时，田野上的农作物可能会在收获时产生黄金。机会取决于作物生长时间。',
      },
      sprinkler: {
        name: '喷水器',
        description: '同一行中的农作物生长速度加快 +{0}%，并且过度生长 +{1}%',
        care: '更有可能出现护理',
      },
      lectern: {
        name: '讲台',
        description: '同一列中的作物给出+{0}% 经验',
      },
      pinwheel: {
        name: '风车',
        description: '周围 8 块区域中每种独特作物在整个田地中的罕见掉落几率翻倍，最多为 {0}x',
        rareDrop: '使整个田地的稀有掉落几率倍增',
      },
      flag: {
        name: '标志',
        description: '如果它们位于与旗帜相关的正确位置，则将产量提高 +{0}%。蔬菜：左上，浆果：右上，谷物：左下，花：右下',
      }
    },
    care: {
      wateringCan: '喷壶',
      description1: '只要喷壶能容纳雨水，随着时间的推移，普通作物就会得到护理。一次最多可以对总共 {0} 种作物进行护理。将鼠标悬停在作物上的喷壶图标上以进行护理。',
      description2: '雨水积聚速度高达 {0}/小时，基本容量为 {1}。雨水不断积聚到该值以上，但速度略有下降。',

      empty: '喷壶完全空了。稍等一下，直到出现更多护理。',
      low: '喷壶几乎空了。雨水全速积聚，关怀显得非常缓慢。',
      mid: '喷壶里装着一点水。雨水接近全速积聚，关怀慢慢显现。',
      half: '喷壶里盛有大量的水。雨水以中等速度积聚，关怀以平均速度出现。',
      high: '喷壶快满了。雨水积聚速度低，护理很快出现。',
      full: '喷壶已满。雨水积聚得很慢，关怀却出现得很快。',

      improve: '护理类型改进：{0}',
      add: '添加护理类型：{0}',
      disable: '禁用护理类型：{0}',

      yield: '产量',
      gold: '黄金',
      exp: '经验',
      rareDrop: '稀有掉落',
      time: '时间',
    }
  },
  gallery: {
    gallery: '图库',
    auction: '拍卖',
    colorSuffix: '颜色',
    openPackage: '打开',
    colorGainReduced: '额外收益在 100 后减少到平方根颜色',
    drumCompounding: '要找到此鼓，您还必须在同一包中找到所有先前颜色的鼓。这会降低找到此鼓的有效机会',
    allConverterInfo: '转换颜色总是消耗所有转换器',
    converterOverload: '对于此转化，您的转换器数量远多于颜色数量，因此转化收益为 x{0}',
    idea: {
      tier: '等级{0}想法',
      unlock: '解锁创意',

      makeItPretty: '让它变得漂亮',
      stompBerries: '踩浆果',
      carvePumpkins: '雕刻南瓜',
      sortWaste: '垃圾分类',
      advertise: '广告',
      beImpatient: '不耐烦',
      beExcited: '兴奋',

      makeLemonade: '制作柠檬水',
      growATree: '种植一棵树',
      buildComposter: '建造堆肥机',
      observeRainbow: '观察彩虹',
      buildRedReservoir: '建造红色水库',
      orderMassiveSafe: '订购大量安全',
      buyPen: '购买钢笔',

      drawOcean: '绘制海洋',
      makeWine: '酿酒',
      calculateOdds: '计算赔率',
      buildOrangeReservoir: '建造橙色水库',
      thinkHarder: '认真思考',
      paintFaster: '油漆更快',
      buyBrush: '购买刷',

      harvestOranges: '收获橙子',
      pulverizeGold: '粉碎黄金',
      buildYellowReservoir: '建造黄色水库水库',
      paintForFun: '绘画乐趣',
      printNewspaper: '打印报纸',
      expandCanvas: '展开画布',
      hyperfocus: '超级专注',

      cutGrass: '割草',
      shapeClay: '形状粘土',
      buildGreenReservoir: '建造绿色水库',
      beMysterious: '保持神秘',

      lookAtTheSky: '看看天空',
      chewBubblegum: '咀嚼泡泡糖',
      buildBlueReservoir: '建造蓝色水库',
    },
    nextInspiration: {
      0: '下一个 ',
      1: '在 '
    },
    shapes: {
      name: '形状',
      upgrades: '形状升级',
      description: '将一个形状拖到相邻的形状以切换位置，或单击一个来收集它。收集需要连接 5 个相同类型的形状，每个形状获得的形状数量等于收集组合。',
      cost: '每个动作都会花费',
      special: {
        name: '特殊形状',
        description: '特殊形状有 {0}% 的几率出现​​，而不是常规形状，并且特殊集合会出现 {1}x 个形状。网格上只能有一种特殊形状',
        bomb: '+ 形式中的所有形状都会被特殊收集',
        dice: '与上方（或下方，如果位于顶行）形状不匹配的所有形状都会被重新滚动',
        accelerator: '周围的 8 个形状是特别收集的。如果 8 个都相同，则花费最多 100 点动力来获得更多形状',
        sparkles: '如果可能的话，4个直接相邻的形状会被定期收集，并算作一个大组合',
        hourglass: '立即获取转换器和包，收集形状以增加时间',
        chest: '特殊收集10个附近的形状，8个周围的形状以及左右的形状。如果所有 10 个形状都不同，则获得特殊奖励并以其根值再次应用特殊形状乘数'
      },
      buyFor: {
        0: '购买',
        1: '对于'
      },
      reroll: '重新滚动整个网格',
      unlock: '解锁形状： {0}',
      circle: '圆圈',
      rectangle: '矩形',
      triangle: '三角形',
      star: '星星',
      ellipse: '椭圆',
      heart: '心脏',
      square: '方形',
      octagon: '八边形',
      pentagon: '五角大楼',
      hexagon: '六角形',
      bomb: '炸弹',
      dice: '骰子',
      accelerator: '加速器',
      sparkles: '火花',
      hourglass: '沙漏',
      chest: '宝箱',
    },
    canvas: {
      name: '画布',
      description: '在画布上涂上颜色，慢慢提高画布等级，为你提供永久奖励',
      level: '画布级别',
      untilNextLevel: '{0} 直到下一级'
    }
  },
  gem: {
    newGemsTime: '每次进度条填满时都会获得新的红宝石和祖母绿。生成器每隔 {0} 创建新的宝石。',
    newGemsTimeAchievement: '每次酒吧填满时都会获得新的红宝石和祖母绿。每个成就都会将生成速度提高 +{0}%。您的 {1} 成就将生成速度提高了 +{2}%，从 {3} 到 {4}。',
    newGemsTimeSecondary: '每次宝石条填满时都会获得新的二级宝石。生成器每隔 {0} 创建新宝石。',
    newGemsTimeAchievementSecondary: '每次条形填满时都会获得新的辅助宝石。每个成就都会将生成速度提高 +{0}%。您的 {1} 成就将生成速度提高了 +{2}%，从 {3} 到 {4}。',
    newDiamondTime: '每次能量条填满时都会获得一颗钻石。生成器每 {0} 就会生成钻石。',
    diamondForge: '钻石锻造',
  },
  achievement: {
    nextReward: '这是完成此成就的下一级别时的奖励。',
    secret: '此成就是秘密的，不会提供任何奖励。'
  },
  treasure: {
    effectSummary: '效果摘要',
    effectOwned: '您拥有 {0} 宝藏并具有此效果',
    effectMax: '仅最强的{0}宝藏适用（{1} / {0}）',
    effectMinTier: '此效果仅出现在 {0} 或更高等级的宝藏上',
    eventPowerDescription: '事件能量不能通过购买宝藏来获得，需要使用特定的修饰符将其添加到现有的宝藏中。每一点事件力量都会使所有功能的声望增益增加+0.15%，并且你的事件力量仅限于你的全局等级的20%。',
    eventPowerEffect: '您的活动力量将所有声望增益乘以 x{0}',
    eventPowerOvercap: '您的事件力量比达到限制所需的多 {0}',
    upArrowFragments: '添加此修饰符会增加删除此宝藏时获得的碎片 {0}',
    expanderFragments: '添加此修饰符会将等级降低至 0，退还花费的碎片，并将删除此宝藏时获得的碎片增加 {0}',
    expanderEffect: '一个月内升级到 {0} 级别，一个月内升级到 {1} 级别年',
    level: '等级',
    tier: '等级',
    tierItem: '第 {0} 宝藏',
    emptySlot: '空插槽（单击即可选择）',
    modifiers: '修改器',
    specialGroup: '特殊',
    tierEffect: {
      globalLevel: '你的全球等级提高了宝藏等级和获得更高等级宝藏的机会。',
      wildcard: '通配符机会',
      upgrade: '升级成本',
      destroy: '被破坏时的碎片',
      regular: '常规效果',
      special: '特效'
    },
    buyFragment: {
      0: '购买碎片 (',
      1: ')用于'
    },
    buyTreasure: '获得具有随机等级和效果的宝藏',
    upgradeDescription: '使用碎片升级宝藏。碎片成本取决于宝藏的等级和等级。',
    destroyDescription: '根据宝藏等级摧毁宝藏以获得碎片。用于升级宝藏的所有碎片也将被返还。'
  },
  relic,
  card
}






