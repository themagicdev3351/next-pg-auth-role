"use client";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SettingsSchema } from "@/schemas";
import {
  Form,
  FormDescription,
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { settings } from "@/lib/actions/settings.action";
import { useSession } from "next-auth/react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { FormSuccess } from "@/components/form-success";
import { FromError } from "@/components/form-error";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { UserRole } from "@prisma/client";
import { Switch } from "@/components/ui/switch";

import { IoExitOutline } from "react-icons/io5";
import { LogoutButton } from "@/components/auth/logout-button";

const SettingsPage = () => {
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
      role: user?.role || undefined,
    },
  });
  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setSuccess(undefined);
            setError(data.error);
          }
          if (data.success) {
            update();
            setError(undefined);
            setSuccess("Settings updated");
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };
  return (
    <Card className=" w-[600px]">
      <CardHeader>
        <p className=" text-2xl font-semibold text-center">Profile</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className=" space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className=" space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {user?.isOAuth === false && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="johndoe@example.com"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="******"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="******"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* <FormField
                    control={form.control}
                    name="isTwoFactorEnabled"
                    render={({ field }) => (
                      <FormItem className=" flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className=" space-y-0.5">
                          <FormLabel>Two Factor Authentication</FormLabel>
                          <FormDescription>
                            Enable two factor authentication for your account
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            disabled={isPending}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </>
              )}


              <div className=" flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className=" text-sm font-medium">Role</p>
                <p className=" truncate text-xs max-w-fit font-mono bg-slate-100 rounded-sm p-1">
                  {user?.role}
                </p>
              </div>
              <div className=" flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className=" text-sm font-medium">Logout</p>
                <p className=" cursor-pointer truncate text-xs max-w-fit font-mono bg-slate-100 rounded-sm p-1">
                  <LogoutButton>
                    Logout
                  </LogoutButton>
                </p>
              </div>
              {/* <FormMessage /> */}
            </div>
            {success && <FormSuccess message={success} />}
            {error && <FromError message={error} />}
            <Button disabled={isPending} type="submit">
              Save
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
