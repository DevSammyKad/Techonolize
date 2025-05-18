import prisma from '@/lib/db';
import React from 'react';

const page = async () => {
  const startTime = Date.now(); // Start measuring time
  const data = await prisma.smallData.findMany();
  const endTime = Date.now(); // End measuring time

  console.log(`Server-side fetch time: ${endTime - startTime}ms`);

  return (
    <div>
      `Server-side fetch time: ${endTime - startTime}ms`
      {data.map((item, index) => (
        <div key={index}>
          {item.name} {item.description}
        </div>
      ))}
    </div>
  );
};

export default page;
