// utils/authGuard.js
"use client"
import { getSession } from 'next-auth/react';

export async function redirectAuthenticatedUser(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/', // Redirect to the home page if already authenticated
        permanent: false,
      },
    };
  }

  return { props: {} };
}
