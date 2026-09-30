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
      fastQuery: false,
      actionMaximum: 3,
      actionCd: 200,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[text^="跳过广告"][text.length<10][visibleToUser=true]',
          action: 'longClick',
          snapshotUrls: ['https://i.gkd.li/i/32844737'],
        },
      ],
    },
  ],
});
