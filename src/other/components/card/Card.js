import React from 'react'

export default function Card({ title, body }) {
    return (
        <div class="flex flex-col w-[30%] h-[100%] shadow-md rounded-xl m-10">
            <div class="rounded-t-xl bg-primary w-full h-[20%] justify-center content-center">
                <h1 class='text-center font-bold'>{title}</h1>
            </div>
            <div class='flex-grow w-full rounded-b-xl content-center p-2'>
                {body}
            </div>
        </div>
    )
}
