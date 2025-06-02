import { createForm, email, minLength, required } from "@modular-forms/solid";
import { action, createAsync, useAction, useSearchParams, useSubmission } from "@solidjs/router";
import { Show } from "solid-js";
import { IconBrandGithub, IconBrandGoogle, IconCommand } from "~/components/icons";
import { Button } from "~/components/ui/button";
import { Callout, CalloutContent } from "~/components/ui/callout";
import { Grid } from "~/components/ui/grid";
import { TextField, TextFieldErrorMessage, TextFieldInput, TextFieldLabel } from "~/components/ui/text-field";
import { qRedirectIfAuthenticated } from "~/queries";
import { caller } from "~/routes/(api)/api/trpc/router";
import { useLoggedInUserSession } from "~/sessions/logged-in-user";

type AuthForm = {
  email: string;
  password: string;
}

const doLogin = action(async (values: AuthForm) => {
  "use server"

  try {
    await caller.login(values);
    const sess = await useLoggedInUserSession();
    await sess.update({ email: values.email });
  } catch (err: Error | any) {
    return { error: true, message: err?.message };
  }

  return { error: false };
});

function UserAuthForm() {
  const [param] = useSearchParams();
  createAsync(() => qRedirectIfAuthenticated((param["next"] || "/") as string));

  const [_, { Form, Field }] = createForm<AuthForm>();
  const loginAction = useAction(doLogin);
  const loginResult = useSubmission(doLogin);

  return (
    <div class="grid gap-6">
      <div class="grid grid-cols-2 gap-6">
        <Button variant="outline">
          <IconBrandGithub class="mr-2 size-4" />
          Github
        </Button>
        <Button variant="outline">
          <IconBrandGoogle class="mr-2 size-4" />
          Google
        </Button>
      </div>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <Form onSubmit={loginAction}>
        <Grid class="gap-4">
          <Show when={loginResult.result?.error}>
            <Callout variant={"error"}>
              <CalloutContent>{loginResult.result?.message}</CalloutContent>
            </Callout>
          </Show>

          <Field
            name="email"
            validate={[
              required('Please enter your email.'),
              email('The email address is badly formatted.'),
            ]}
          >
            {(field, props) => (
              <TextField class="grid gap-2" validationState={field.error ? "invalid" : "valid"}>
                <TextFieldLabel>Email</TextFieldLabel>
                <TextFieldInput type="email" placeholder="email@domain.com" {...props} />
                <TextFieldErrorMessage>{field.error}</TextFieldErrorMessage>
              </TextField>
            )}
          </Field>
          <Field
            name="password"
            validate={[
              required('Please enter your password.'),
              minLength(8, 'Password must have 8 characters or more.'),
            ]}
          >
            {(field, props) => (
              <TextField class="grid gap-2" validationState={field.error ? "invalid" : "valid"}>
                <TextFieldLabel>Password</TextFieldLabel>
                <TextFieldInput type="password" placeholder="password"  {...props} />
                <TextFieldErrorMessage>{field.error}</TextFieldErrorMessage>
              </TextField>
            )}
          </Field>
          <Button type="submit" class="w-full">Sign In / Create account</Button>
        </Grid>
      </Form>
    </div>
  )
}

export default function Register() {
  return (
    <>
      <div class="container relative h-full flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div class="absolute inset-0 bg-zinc-900" />
          <div class="relative z-20 flex items-center text-lg font-medium">
            <IconCommand class="mr-2 size-6" />
            Acme Inc
          </div>
          <div class="relative z-20 mt-auto">
            <blockquote class="space-y-2">
              <p class="text-lg">
                &ldquo;This library has saved me countless hours of work and helped me deliver
                stunning designs to my clients faster than ever before.&rdquo;
              </p>
              <footer class="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div class="lg:p-8">
          <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div class="flex flex-col space-y-2 text-center">
              <h1 class="text-2xl font-semibold tracking-tight">Sign In or Create an account</h1>
              <p class="text-sm text-muted-foreground">
                Enter your email below to sign in or create account
              </p>
            </div>
            <UserAuthForm />
            <p class="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a href="/terms" class="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}