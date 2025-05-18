import prisma from '@/lib/db';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const page = async () => {
  const startTime = Date.now(); // Start measuring time
  const data = await prisma.products.findMany();
  const endTime = Date.now(); // End measuring time

  await prisma.products.deleteMany();

  await prisma.products.createMany({
    data: [
      {
        category: 'Electronics',
        name: 'iPhone 12',
        description:
          'The iPhone 12 is a smartphone developed by Apple Inc. It was announced on September 12, 2021, and was released on September 26, 2021.',
        price: 999,
      },
      {
        category: 'Electronics',
        name: 'iPhone 12 Pro',
        description:
          'The iPhone 12 Pro is a smartphone developed by Apple Inc. It was announced on September 12, 2021, and was released on September 26, 2021.',
        price: 999,
      },
      {
        category: 'Electronics',
        name: 'iPhone 12 Pro Max',
        description:
          'The iPhone 12 Pro Max is a smartphone developed by Apple Inc. It was announced on September 12, 2021, and was released on September 26, 2021.',
        price: 999,
      },
      {
        category: 'Electronics',
        name: 'iPhone 12 mini',
        description:
          'The iPhone 12 mini is a smartphone developed by Apple Inc. It was announced on September 12, 2021, and was released on September 26, 2021.',
        price: 999,
      },
      {
        category: 'Electronics',
        name: 'iPhone 12 Pro Max',
        description:
          'The iPhone 12 Pro Max is a smartphone developed by Apple Inc. It was announced on September 12, 2021, and was released on September 26, 2021.',
        price: 999,
      },
      {
        category: 'Electronics',
        name: 'iPhone 12 mini',
        description:
          'The iPhone 12 mini is a smartphone developed by Apple Inc. It was announced on September 12, 2021, and was released on September 26, 2021.',
        price: 999,
      },
    ],
  });

  console.log(`Server-side fetch time: ${endTime - startTime}ms`);

  const responseData = await fetch('http://localhost:3000/api/small-data');

  console.log(responseData.json());

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1>Speed Test Which one is Better</h1>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="server-action">Server Action</TabsTrigger>
          <TabsTrigger value="api">Api</TabsTrigger>
          <TabsTrigger value="supabase">SupaBase</TabsTrigger>
        </TabsList>
        <TabsContent value="server-action">
          <Card>
            <CardHeader>
              <CardTitle>Server Action</CardTitle>
              <CardDescription>
                This is a server action. It's a server-side action that runs on
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <h1> `Server-side fetch time: ${endTime - startTime}ms`</h1>
              {data.map((item, index) => (
                <div key={index}>
                  {item.name} {item.description}
                </div>
              ))}
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Route</CardTitle>
              <CardDescription>
                This is a api route. It's a server-side action that runs on API
                Route
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="supabase">
          <Card>
            <CardHeader>
              <CardTitle>Supabase</CardTitle>
              <CardDescription>
                This is a supabase. It's a server-side action that runs on
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
