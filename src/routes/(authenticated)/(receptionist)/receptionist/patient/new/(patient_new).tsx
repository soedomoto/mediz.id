import { TextField, TextFieldErrorMessage, TextFieldInput, TextFieldLabel } from "~/components/ui/text-field";
import { createForm } from "@modular-forms/solid";
import { Title, Meta, MetaProvider } from "@solidjs/meta";

type NewPatient = {
  title?: string;
  name?: string;
  preferredName?: string;
  externalId?: string;
}

export default function ReceptionistCalendarPage() {
  const [loginForm, { Form, Field }] = createForm<NewPatient>();

  return (
    <>
      <MetaProvider>
        <Title>New Patient Registration</Title>
        <Meta name="description" content="This is my content tag." />
        <Meta
          property="og:title"
          content="Welcome to my site!"
        />
        <Meta
          property="og:description"
          content="A website"
        />
      </MetaProvider>

      <div class="flex items-center justify-between space-y-2">
        <div>
          <h2 class="text-2xl font-bold tracking-tight">New Patient</h2>
          <p class="text-muted-foreground">Here&apos;s a list of provider availabilities and patient appointments!</p>
        </div>
      </div>

      <div class="mb-10" />

      <Form
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        onSubmit={(values) => alert(JSON.stringify(values, null, 4))}>
        <div class="mb-4">
          <Field
            name="title"
            validate={[
              // required('Please enter your email.'),
              // email('The email address is badly formatted.'),
            ]}
          >
            {(field, props) => (
              <TextField class="grid w-full items-center gap-1.5">
                <TextFieldLabel>Title</TextFieldLabel>
                <TextFieldInput placeholder="Title" value={field.value} {...props} />
              </TextField>
            )}
          </Field>
        </div>
        <div class="mb-4">
          <Field
            name="name"
            validate={[
              // required('Please enter your email.'),
              // email('The email address is badly formatted.'),
            ]}
          >
            {(field, props) => (
              <TextField class="grid w-full items-center gap-1.5">
                <TextFieldLabel>Name</TextFieldLabel>
                <TextFieldInput placeholder="Name" value={field.value} {...props} />
              </TextField>
            )}
          </Field>
        </div>
        <div class="mb-4">
          <TextField class="grid w-full items-center gap-1.5">
            <TextFieldLabel for="email">Preferred Name</TextFieldLabel>
            <TextFieldInput type="email" id="email" placeholder="Preferred Name" />
          </TextField>
        </div>
        <div class="mb-4">
          <TextField class="grid w-full items-center gap-1.5">
            <TextFieldLabel for="email">External ID</TextFieldLabel>
            <TextFieldInput type="email" id="email" placeholder="External ID" />
          </TextField>
        </div>
      </Form>
    </>
  )
}