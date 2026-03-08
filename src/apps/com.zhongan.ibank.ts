import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhongan.ibank',
  name: 'ZA Bank',
  groups: [
    {
      key: 0,
      name: '位置权限弹窗',
      fastQuery: true,
      activityIds:
        'com.zhongan.beeline.bridge.flutter.ZABankMainFlutterActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '(TextView[text*="位置权限"] +n * > TextView[text="取消"]) || (TextView[text*="位置权限"] -n * > TextView[text="取消"])',
          ],
          snapshotUrls: ['https://i.gkd.li/i/25822887'],
        },
      ],
    },
    {
      key: 1,
      name: '点击登录',
      activityIds:
        'com.zhongan.beeline.bridge.flutter.ZABankMainFlutterActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['Button[desc^="首页"] -1 ImageView[desc="登录"]'],
          snapshotUrls: ['https://i.gkd.li/i/25822886'],
        },
      ],
    },
  ],
});
