import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mcdonalds.mobileapp',
  name: '麦当劳国际版',
  groups: [
    {
      key: 0,
      name: '启动全屏Bug弹窗',
      activityIds: '.MainActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '主页加载完成',
          actionDelay: 5000,
          matches: ['*'],
          excludeMatches: [
            'View[id="AppInitialization/LottieWorkingLoadingView"] +1 View[id="AppInitialization/LinearProgressBar "] > * +1 ProgressBar[desc$="Loaded"]',
            'View[id="HomeSplashScreen/FullScreenLoader/LottieSpinningLoaderView"]',
          ],
          action: 'none',
          snapshotUrls: [
            'https://e.gkd.li/616dfb8c-9634-420f-9535-3383aa008ab9',
          ],
        },
        {
          key: 1,
          name: '关闭Bug弹窗',
          actionMaximumKey: 0,
          order: 1,
          matches: [
            'View[id="HomeSplashScreen/FullScreenLoader/LottieSpinningLoaderView"]',
          ],
          action: 'back',
          snapshotUrls: [
            'https://e.gkd.li/f192ca3e-53a9-44a5-964d-a6110c2463ae',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '首页弹窗广告',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: [
            'View[id="HomeSplashScreen/HomeSplashScreenContent/SplashBanner/NewsContentHero /CardImage"] < * < * < * +1 @* > View[desc="關閉"] +1 View[id="HomeSplashScreen/HomeSplashScreenContent/SplashBanner/RoundIconButtonSecondary/RoundIconButton "] -1 * < * +1 View[id="HomeSplashScreen/HomeSplashScreenContent/SplashBanner/FloatingLargePrimary/FloatingBase"] > View[desc="立即睇"]',
          ],
          snapshotUrls: [
            'https://e.gkd.li/1f8fc43a-7e48-45ff-9958-aed51f579de2',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '点餐页确保正确餐厅提示',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: [
            '@ImageView[id="com.mcdonalds.mobileapp:id/closeButton"] +1 TextView[text="請確保揀選正確的餐廳"]',
          ],
          snapshotUrls: [
            'https://e.gkd.li/958d6916-934c-4652-8015-dd4235f90916',
          ],
        },
      ],
    },
  ],
});
