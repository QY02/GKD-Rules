import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 685237,
  name: 'RT-Rules',
  version: 0,
  author: 'RT',
  checkUpdateUrl: './RT_gkd.version.json5',
  supportUri: 'https://github.com/QY02/GKD-Rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
