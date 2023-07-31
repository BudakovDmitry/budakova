'use client'

import { NextUIProvider } from '@nextui-org/react';

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </section>
    )
  }