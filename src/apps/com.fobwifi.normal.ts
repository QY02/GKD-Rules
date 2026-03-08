import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fobwifi.normal',
  name: '穿梭',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      activityIds: 'com.fobwifi.transocks.ui.main.MainActivity',
      matchTime: 10000,
      actionCd: 300,
      actionMaximum: 3,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            'ImageView[vid="custom_ad"] <<n * ->1 FrameLayout[vid="splash_ad_container"] <<n ViewGroup > TextView[text*="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/25822920',
            'https://i.gkd.li/i/25822949',
          ],
        },
      ],
    },
  ],
});
