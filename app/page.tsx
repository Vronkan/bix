"use client";

import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";

// Comment out this line if Chart is causing issues
// import { Chart } from "@/components/ui/chart";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isAirplaneMode, setIsAirplaneMode] = useState(false);

  return (
    <div className="min-h-screen bg-white p-8">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-8xl font-bold mb-16 text-center">
          <span className="text-pink-500">c</span>
          <span className="text-amber-500">h</span>
          <span className="text-emerald-500">a</span>
          <span className="text-sky-500">d</span>
          <span className="text-indigo-500">c</span>
          <span className="text-fuchsia-500">d</span>
          <span className="text-teal-500">o</span>
          <span className="text-violet-500">n</span>
          <span className="text-slate-600">/</span>
          <span className="text-cyan-600">c</span>
          <span className="text-orange-500">n</span>
          <span className="text-pink-500">c</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="col-span-full md:col-span-2">
            <CardHeader>
              <CardTitle>User Input</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Textarea placeholder="Type your message here." className="w-full" />
                <div className="flex justify-end">
                  <Button className="w-1/3">Send</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center">
            <Avatar className="w-24 h-24 bg-gray-200 rounded-[10px]">
              <AvatarImage src="/55.png" alt="Avatar 55" className="rounded-[10px]" />
              <AvatarFallback className="rounded-[10px]">55</AvatarFallback>
            </Avatar>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>HoverCard</CardTitle>
            </CardHeader>
            <CardContent>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">Hover me</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-64">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@chadcdon</h4>
                      <p className="text-sm">The React Framework for Production</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Content for Tab 1</TabsContent>
                <TabsContent value="tab2">Content for Tab 2</TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Menubar</CardTitle>
            </CardHeader>
            <CardContent>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarItem>Close Window</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popover</CardTitle>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Radio Group</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Chart component is temporarily disabled</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Airplane Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={isAirplaneMode}
                  onCheckedChange={setIsAirplaneMode}
                />
                <Label htmlFor="airplane-mode">
                  {isAirplaneMode ? "On" : "Off"}
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skeleton</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Drawer</CardTitle>
            </CardHeader>
            <CardContent>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Are you sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardContent>
          </Card>
        </div>

        <Accordion type="single" collapsible className="w-full mt-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>Vad är Kransen?</AccordionTrigger>
            <AccordionContent className="text-left">
              Kransen är ett charmigt område beläget i södra Stockholm, känt för sin unika blandning av urban charm och gröna oaser. Området präglas av en rik historia och en stark gemenskap bland invånarna. Med sina vackra parker, historiska byggnader och lokala caféer erbjuder Kransen en perfekt balans mellan stadsliv och naturupplevelser, vilket gör det till ett attraktivt bostadsområde för både familjer och unga professionella.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Hur tar man sig till Kransen?</AccordionTrigger>
            <AccordionContent className="text-left">
              Kransen är lättillgängligt med flera transportalternativ. Den enklaste vägen är med tunnelbana (röda linjen), som tar dig direkt till Kransen station. Därifrån är det bara en kort promenad till områdets centrum. För de som föredrar buss finns det flera linjer som trafikerar området regelbundet. Cyklister uppskattar de välutvecklade cykelbanorna som förbinder Kransen med resten av Stockholm. För bilister finns det goda parkeringsmöjligheter, även om kollektivtrafiken ofta är det smidigaste alternativet för pendling till och från innerstaden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Vilka sevärdheter finns i Kransen?</AccordionTrigger>
            <AccordionContent className="text-left">
              Kransen erbjuder vackra parker, historiska byggnader och lokala caféer att utforska.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Är Kransen bra för familjer?</AccordionTrigger>
            <AccordionContent className="text-left">
              Absolut! Kransen har många grönområden, lekplatser och familjevänliga aktiviteter.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Vad är historien bakom Kransen?</AccordionTrigger>
            <AccordionContent className="text-left">
              Kransen har en rik historia som sträcker sig tillbaka till 1930-talet när området började bebyggas som en del av Stockholms expansion.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Hur är kollektivtrafiken i Kransen?</AccordionTrigger>
            <AccordionContent className="text-left">
              Kransen har utmärkt kollektivtrafik med tunnelbana och bussar som går regelbundet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Vad gör Kransen unikt?</AccordionTrigger>
            <AccordionContent className="text-left">
              Kransens unika karaktär kommer från dess perfekta blandning av stadsliv och naturupplevelser. Området utmärker sig genom sin rika historia, som sträcker sig tillbaka till 1930-talet, och den starka gemenskapen bland invånarna. De välbevarade funkishusen ger området en distinkt arkitektonisk prägel, medan de många grönområdena erbjuder andrum och rekreationsmöjligheter. Kransen är också känt för sitt livliga kulturliv med lokala konstnärer, musiker och författare som bidrar till områdets kreativa atmosfär. Den nära tillgången till både urbana bekvämligheter och naturskön miljö gör Kransen till en unik pärla i Stockholms stadsbild.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}
