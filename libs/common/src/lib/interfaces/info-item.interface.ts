import { SubscriptionOffer } from '@ghostfolio/common/types';
import { SymbolProfile, Tag } from '@prisma/client';

import { Statistics } from './statistics.interface';
import { Subscription } from './subscription.interface';

export interface InfoItem {
  baseCurrency: string;
  benchmarks: Partial<SymbolProfile>[];
  countriesOfSubscribers?: string[];
  currencies: string[];
  demoAuthToken: string;
  fearAndGreedDataSource?: string;
  globalPermissions: string[];
  isReadOnlyMode?: boolean;
  platforms: { id: string; name: string }[];
  statistics: Statistics;
  stripePublicKey?: string;
  subscriptions: { [offer in SubscriptionOffer]: Subscription };
  systemMessage?: string;
  tags: Tag[];
}
