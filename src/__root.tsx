
import * as Dialog from '@radix-ui/react-dialog';
import { createRootRoute, createRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { useState } from "react";
import { LoginForm } from './pages/LogIn/Auth';


export const rootRoute = createRootRoute({
    component: () => (
        <>
            <div className="w-full flex justify-center gap-[40px] h-[70px] items-center bg-cornflowerBlue" >
                <Link to="/" className="[&.active]:font-bold" >
                    Home
                </Link>{' '}
                < Link to="/about" className="[&.active]:font-bold" >
                    About
                </Link>

            </div>
            < hr />
            <Outlet />
            < TanStackRouterDevtools />
        </>
    ),
})

export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <LoginForm />
})

export const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: function About() {
        const [open, setOpen] = useState(false);

        return (
            <div className="w-full flex">
                <div className="w-full max-w-[1440px]">
                    <h3>Welcome About!</h3>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => setOpen(true)}
                    >
                        Open Dialog
                    </button>

                    <Dialog.Root open={open} onOpenChange={setOpen}>
                        <Dialog.Trigger asChild>
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded"
                                onClick={() => setOpen(true)}
                            >
                                Open Dialog
                            </button>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded">
                                <Dialog.Title className="text-xl font-semibold">Dialog Title</Dialog.Title>
                                <Dialog.Description className="mt-2">This is the dialog description.</Dialog.Description>
                                <button
                                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                                    onClick={() => setOpen(false)}
                                >
                                    Close
                                </button>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                </div>
            </div>
        );
    },
})