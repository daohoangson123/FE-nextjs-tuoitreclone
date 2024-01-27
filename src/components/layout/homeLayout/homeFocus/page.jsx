import {
    hFocus_List,
    hFocus_Main,
    hFocus_Sub,
    tinNoiBat,
} from '@/mockData/homeFocusData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function HomeFocus() {
    return (
        <div className='homeFocus flex flex-wrap gap-3 border-b border-slate-200 py-3'>
            <ul className='homeFocus__list order-2 sm:order-1 sm:w-[220px]'>
                {hFocus_List.map((itemList) => (
                    <li
                        title={itemList.content}
                        key={itemList.content}
                        className='first:font-semibold pb-2 border-b border-dotted border-slate-200 hover:text-red-500 cursor-pointer'>
                        {itemList.content}
                    </li>
                ))}
            </ul>
            <div
                className='homeFocus__main order-1 grow sm:border-x border-slate-200 sm:px-3'
                style={{ width: 'clamp(360px, 39vw, 700px)' }}>
                {tinNoiBat.map((item) => (
                    <div className='tinnoibat flex flex-wrap gap-3 border-b border-slate-200 pb-3 cursor-pointer'>
                        <Image
                            title={item.title}
                            src={item.imgUrl}
                            alt={item.title}
                            width={420}
                            height={250}
                            loading='lazy'
                            className='grow sm:w-[420px] rounded-md sm:rounded-none w-full'
                        />
                        <div className='grid gap-3 grow sm:w-[240px] '>
                            <h2
                                title={item.title}
                                className='text-2xl font-semibold hover:text-red-500'>
                                {item.title}
                            </h2>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
                <div className='hidden sm:grid grid-cols-3 gap-3'>
                    {hFocus_Main.map((itemMain) => (
                        <Link
                            href={`/thoi-su/${itemMain.id}`}
                            className='hover:text-red-500 cursor-pointer'>
                            <Image
                                title={itemMain.title}
                                src={itemMain.imgUrl}
                                alt={itemMain.title}
                                width={215}
                                height={150}
                                loading='lazy'
                                className='pt-3 object-cover w-full'
                            />
                            <h2
                                title={itemMain.title}
                                className='text-lg font-semibold line-clamp-3'>
                                {itemMain.title}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='homeFocus__sub order-3 flex flex-wrap justify-center sm:flex-col sm:justify-normal gap-3'>
                {hFocus_Sub.map((itemSub) => (
                    <Image
                        title={itemSub.title}
                        src={itemSub.imgUrl}
                        alt={itemSub.title}
                        loading='lazy'
                        className=''
                    />
                ))}
            </div>
        </div>
    );
}
