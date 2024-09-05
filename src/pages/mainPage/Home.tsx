import * as Dialog from '@radix-ui/react-dialog';
import React, { useState } from 'react';

const Home: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full flex">
            <div className="w-full max-w-[1440px]">
                <div className="flex justify-center items-center">
                    <div className="flex-col justify-center items-center">
                        <h3 className='text-gray text-[50px]'>Welcome Home!</h3>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={() => setOpen(true)}
                        >
                            Open Modal
                        </button>
                    </div>


                    <Dialog.Root open={open} onOpenChange={setOpen}>
                        <Dialog.Trigger asChild>
                            {/* <button
                            className="px-4 py-2 bg-green-500 text-white rounded"
                            onClick={() => setOpen(true)}
                        >
                            Open Dialog
                        </button> */}
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="fixed inset-0 bg-[#000]/50" />
                            <Dialog.Content className="w-[40%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cornflowerBlue p-4 rounded">
                                <Dialog.Title className="text-xl font-semibold">Dialog Title</Dialog.Title>
                                <Dialog.Description className="mt-2">Hello World</Dialog.Description>
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
        </div>
    );
};

export default Home;
