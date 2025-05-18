import { auth } from '@clerk/nextjs/server';
import React from 'react';

const page = async () => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();
  return <div>Dashboard page</div>;
};

export default page;
