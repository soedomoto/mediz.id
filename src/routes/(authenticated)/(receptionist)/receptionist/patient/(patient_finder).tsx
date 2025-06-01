import { IconDownload, IconPlus } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { TextField, TextFieldInput, TextFieldLabel } from "~/components/ui/text-field";

export default function ReceptionistCalendarPage() {
  return (
    <>
      <div class="flex items-center justify-between space-y-2">
        <div>
          <h2 class="text-2xl font-bold tracking-tight">Patient</h2>
          <p class="text-muted-foreground">Here&apos;s a list of provider availabilities and patient appointments!</p>
        </div>
        <div class="flex items-center space-x-2">
          <Button as="a" href="/receptionist/patient/new" variant="outline">
            <IconPlus class="mr-2 size-4" />
            Add Patient
          </Button>
        </div>
      </div>
    </>
  )
}