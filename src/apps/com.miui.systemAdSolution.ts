import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.systemAdSolution',
  name: 'miui系统广告',
  groups: [
    {
      key: 1,
      name: '全屏广告-miui-为什么不希望看到这条推广',
      desc: '点击【不感兴趣】',
      activityIds: [
        'com.xiaomi.ad.feedback',
        'com.android.thememanager.module.detail.view.ThemeDetailActivity',
        'com.android.thememanager.ThemeResourceProxyTabActivity',
      ],
      rules: '[id="com.miui.systemAdSolution:id/no_interest"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13227328',
        'https://i.gkd.li/import/13255751',
      ],
    },
    {
      key: 2,
      name: '开屏广告',
      fastQuery: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      activityIds: ['com.xiaomi.market.business_ui.main.MarketTabActivity'],
      rules: [
        {
          key: 0,
          matches: '@LinearLayout[clickable=true] > TextView[text^="跳过广告"]',
          snapshotUrls: ['https://i.gkd.li/i/32844737'],
        },
      ],
    },
  ],
});
