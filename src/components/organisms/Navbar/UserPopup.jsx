import React, { useRef, useState } from 'react';
import Avatar from '../../atoms/Avatar/Avatar.jsx';
import Button from '../../atoms/Button/Button.jsx';
import ClickAway from '../../atoms/ClickAway/ClickAway.jsx';
import Text from '../../atoms/Text/Text.jsx';


const UserAvatarDataDisplay = ({user, onClick}) => {
    return (
        <div onClick={onClick} className="cursor-pointer flex items-center gap-3">
            <div className="flex flex-col text-right">
                <Text size="small" type="gray3" className="mb-[-5px]">{ user?.fullname?.split(" ")[0] }</Text>
                <Text size="small" type="gray3">{ user?.fullname?.split(" ")[1] }</Text>
            </div>
            <Avatar onClick={onClick} type="square" width={2.4} height={2.4} >
            </Avatar>
        </div>
    )
}

export default function UserPopup({ user, onDeconnect }) {

    return (
        <div className="relative h-10">
            <ClickAway
                triggerSize="small"
                triggerComponent={UserAvatarDataDisplay}
                otherTriggerProps={{ user }}
                position="right"
                popoverClassName="bg-gray1 border-4"
            >
                <div className="md:w-[370px] flex flex-col">
                    <div className="flex flex-col gap-5 p-4 bg-white rounded-lg">
                        <div className="flex items-center gap-4">
                            <Avatar
                                width={5} height={5}
                            ></Avatar>

                            <div className="flex flex-col">
                                <Text size="small" fontWeight="bold">{ user?.fullname }</Text>
                                <Text size="small" type="gray3">{ user?.username }</Text>
                                <Text size="small" type="gray3">{ user?.email }</Text>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                className="flex items-center gap-3"
                                size="small"
                                onClick={onDeconnect}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>

                                Deconnecter votre compte
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-center p-4 text-center">
                        <Text type="gray3" size="medium" fontWeight="bold">Dispositif Électonique Fiscal</Text>
                    </div>
                </div>
            </ClickAway>
        </div>
    )
}
