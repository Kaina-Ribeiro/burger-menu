'use server';
import { IRestaurantMenu } from '@/types/menu';

export default async function getMenuInfo(): Promise<IRestaurantMenu> {
  const res = await fetch('https://cdn-dev.preoday.com/challenge/menu', {
    next: {
      revalidate: 60,
      tags: ['menu'],
    },
  });

  if (!res.ok) {
    throw new Error();
  }

  return res.json();
}
