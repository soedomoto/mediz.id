"use client";

import { IconCheck, IconDownload, IconX } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { cookieStorage, makePersisted } from "@solid-primitives/storage"
import { createSignal, For, Index } from "solid-js";
import { Resizable, ResizableHandle, ResizablePanel } from "~/components/ui/resizable";
import { cn } from "~/lib/utils";
import { DatePicker, DatePickerContent, DatePickerContext, DatePickerNextTrigger, DatePickerPrevTrigger, DatePickerRangeText, DatePickerTable, DatePickerTableBody, DatePickerTableCell, DatePickerTableCellTrigger, DatePickerTableHead, DatePickerTableHeader, DatePickerTableRow, DatePickerView, DatePickerViewControl, DatePickerViewTrigger } from "~/components/ui/date-picker";
import { Separator } from "~/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Badge } from "~/components/ui/badge";
import { Col, Grid } from "~/components/ui/grid";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const Calendar = () => {
  return (
    <DatePicker open>
      <DatePickerContent class="shadow-none">
        <DatePickerView view="day">
          <DatePickerContext>
            {(api) => (
              <>
                <DatePickerViewControl>
                  <DatePickerPrevTrigger />
                  <DatePickerViewTrigger>
                    <DatePickerRangeText />
                  </DatePickerViewTrigger>
                  <DatePickerNextTrigger />
                </DatePickerViewControl>
                <DatePickerTable>
                  <DatePickerTableHead>
                    <DatePickerTableRow>
                      <Index each={api().weekDays}>
                        {(weekDay) => (
                          <DatePickerTableHeader>{weekDay().short}</DatePickerTableHeader>
                        )}
                      </Index>
                    </DatePickerTableRow>
                  </DatePickerTableHead>
                  <DatePickerTableBody>
                    <Index each={api().weeks}>
                      {(week) => (
                        <DatePickerTableRow>
                          <Index each={week()}>
                            {(day) => (
                              <DatePickerTableCell value={day()}>
                                <DatePickerTableCellTrigger>{day().day}</DatePickerTableCellTrigger>
                              </DatePickerTableCell>
                            )}
                          </Index>
                        </DatePickerTableRow>
                      )}
                    </Index>
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView view="month">
          <DatePickerContext>
            {(api) => (
              <>
                <DatePickerViewControl>
                  <DatePickerPrevTrigger />
                  <DatePickerViewTrigger>
                    <DatePickerRangeText />
                  </DatePickerViewTrigger>
                  <DatePickerNextTrigger />
                </DatePickerViewControl>
                <DatePickerTable>
                  <DatePickerTableBody>
                    <Index each={api().getMonthsGrid({ columns: 4, format: "short" })}>
                      {(months) => (
                        <DatePickerTableRow>
                          <Index each={months()}>
                            {(month) => (
                              <DatePickerTableCell value={month().value}>
                                <DatePickerTableCellTrigger>
                                  {month().label}
                                </DatePickerTableCellTrigger>
                              </DatePickerTableCell>
                            )}
                          </Index>
                        </DatePickerTableRow>
                      )}
                    </Index>
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerContext>
        </DatePickerView>
        <DatePickerView view="year">
          <DatePickerContext>
            {(api) => (
              <>
                <DatePickerViewControl>
                  <DatePickerPrevTrigger />
                  <DatePickerViewTrigger>
                    <DatePickerRangeText />
                  </DatePickerViewTrigger>
                  <DatePickerNextTrigger />
                </DatePickerViewControl>
                <DatePickerTable>
                  <DatePickerTableBody>
                    <Index each={api().getYearsGrid({ columns: 4 })}>
                      {(years) => (
                        <DatePickerTableRow>
                          <Index each={years()}>
                            {(year) => (
                              <DatePickerTableCell value={year().value}>
                                <DatePickerTableCellTrigger>
                                  {year().label}
                                </DatePickerTableCellTrigger>
                              </DatePickerTableCell>
                            )}
                          </Index>
                        </DatePickerTableRow>
                      )}
                    </Index>
                  </DatePickerTableBody>
                </DatePickerTable>
              </>
            )}
          </DatePickerContext>
        </DatePickerView>
      </DatePickerContent>
    </DatePicker>
  )
}

const Provider = () => {
  const [value, setValue] = createSignal<string[]>([])
  return (
    <Select<string>
      multiple
      value={value()}
      onChange={setValue}
      options={["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]}
      placeholder="Select a fruit…"
      itemComponent={(props) => (
        // <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
        <SelectItem item={props.item}>{props.item.textValue}</SelectItem>
      )}
    >
      <SelectTrigger aria-label="Fruit" class="w-100% h-fit">
        <SelectValue<string>>
          {state => (
            <div class="flex flex-row gap-2">
              <div class="flex flex-wrap gap-2">
                <For each={state.selectedOptions()}>
                  {option => (
                    <Badge onPointerDown={e => e.stopPropagation()}>
                      {option}
                      <button onClick={() => state.remove(option)} class="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground">
                        <IconX />
                      </button>
                    </Badge>
                  )}
                </For>
              </div>
              <button onPointerDown={e => e.stopPropagation()} onClick={state.clear} class="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground">
                <IconX />
              </button>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent />
    </Select>
  )
}



export default function ReceptionistCalendarPage() {
  const [sizes, setSizes] = makePersisted(createSignal<number[]>([]), {
    name: "receptionist-calendar-sizes",
    storage: cookieStorage,
    storageOptions: {
      path: "/"
    }
  })

  const [isCollapsed, setIsCollapsed] = createSignal(false)

  return (
    <div class="space-y-6">
      <div class="flex items-center justify-between space-y-2">
        <div>
          <h2 class="text-2xl font-bold tracking-tight">Calendar</h2>
          <p class="text-muted-foreground">Here&apos;s a list of provider availabilities and patient appointments!</p>
        </div>
      </div>

      <div>
        <Resizable sizes={sizes()} onSizesChange={setSizes}>
          <ResizablePanel
            initialSize={sizes()[0] ?? 0.3}
            minSize={0.1}
            maxSize={0.3}
            collapsible
            onCollapse={(e) => {
              setIsCollapsed(e === 0), console.log("collapse", e)
            }}
            onExpand={() => {
              setIsCollapsed(false), console.log("expand")
            }}
            class={cn(isCollapsed() && "min-w-[50px] transition-all duration-300 ease-in-out")}
          >
            <div class="pr-2 flex flex-col gap-2">
              <Calendar />
              <Provider />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel initialSize={sizes()[1] ?? 0.7} minSize={0.3}>
            <Grid cols={1} colsMd={2} class="pl-2 w-full gap-2">
              <Col span={1} spanMd={2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Title</CardTitle>
                  </CardHeader>
                  <CardContent>KPI 1</CardContent>
                </Card>
              </Col>
              <Card>
                <CardHeader>
                  <CardTitle>Title</CardTitle>
                </CardHeader>
                <CardContent>KPI 2</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Title</CardTitle>
                </CardHeader>
                <CardContent>KPI 3</CardContent>
              </Card>
            </Grid>
          </ResizablePanel>
        </Resizable>
      </div>
    </div>
  )
}