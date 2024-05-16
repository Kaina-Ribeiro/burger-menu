'use server';

import { IAppInfo } from '@/types/app-info';

export default async function getAppInfo(): Promise<IAppInfo> {
  const res = await fetch('https://cdn-dev.preoday.com/challenge/venue/9', {
    next: {
      revalidate: 60,
      tags: ['app-info'],
    },
  });

  if (!res.ok) {
    throw new Error();
  }

  return res.json();
}
