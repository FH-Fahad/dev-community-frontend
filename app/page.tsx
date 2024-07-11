"use client";

import Link from "next/link";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[900px] bg-card dark:bg-card-dark rounded-xl overflow-hidden">
        <div className="flex flex-col items-center justify-center p-8 lg:p-12 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-[420px] space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold">Login</h1>
              <p className="text-muted-foreground dark:text-muted-foreground-dark">
                Enter your email and password to access your account.
              </p>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="text-sm font-medium underline underline-offset-4 hover:text-primary-foreground/80 dark:hover:text-primary-foreground-dark/80"
                    prefetch={false}
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" placeholder="password" />
              </div>
              <Button type="submit" darkMode={true}>
                Login
              </Button>
            </form>
            <p className="text-center text-sm text-muted-foreground dark:text-muted-foreground-dark">
              Do not have an account?{" "}
              <Link
                href="#"
                className="font-medium underline underline-offset-4 hover:text-primary-foreground/80 dark:hover:text-primary-foreground-dark/80"
                prefetch={false}
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-8 lg:p-12 bg-muted dark:bg-muted-dark">
          <div className="mx-auto max-w-[420px] space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold">Register</h1>
              <p className="text-muted-foreground dark:text-muted-foreground-dark">
                Create a new account to access our platform.
              </p>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="password" />
              </div>
              <Button type="submit">Register</Button>
            </form>
            <p className="text-center text-sm text-muted-foreground dark:text-muted-foreground-dark">
              Already have an account?{" "}
              <Link
                href="#"
                className="font-medium underline underline-offset-4 hover:text-primary-foreground/80 dark:hover:text-primary-foreground-dark/80"
                prefetch={false}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
