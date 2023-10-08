import {
    hFocus_List,
    hFocus_Main,
    hFocus_Sub,
    tinNoiBat,
} from '@/mockData/homeFocusData';
import Image from 'next/image';
import React from 'react';

export default function HomeFocus() {
    return (
        <div className='homeFocus flex flex-wrap gap-3 border-b border-slate-200 py-3'>
            <ul className='homeFocus__list order-2 sm:order-1 sm:w-[220px]'>
                {hFocus_List.map((itemList) => (
                    <abbr
                        title={itemList.content}
                        key={itemList.content}
                        className='first:font-semibold'>
                        <li className='pb-2 border-b border-dotted border-slate-200 hover:text-red-500 cursor-pointer'>
                            {itemList.content}
                        </li>
                    </abbr>
                ))}
            </ul>
            <div
                className='homeFocus__main order-1 grow sm:border-x border-slate-200 sm:px-3'
                style={{ width: 'clamp(360px, 39vw, 700px)' }}>
                {tinNoiBat.map((item) => (
                    <div className='tinnoibat flex flex-wrap gap-3 border-b border-slate-200 pb-3 cursor-pointer'>
                        <abbr
                            title={item.title}
                            className='grow sm:w-[420px]'>
                            <Image
                                src={item.imgUrl}
                                alt={item.title}
                                width={420}
                                height={250}
                                loading='lazy'
                                className='rounded-md sm:rounded-none w-full'
                            />
                        </abbr>
                        <div className='grid gap-3 grow sm:w-[240px] '>
                            <abbr
                                title={item.title}
                                className='text-2xl font-semibold hover:text-red-500'>
                                <h2>{item.title}</h2>
                            </abbr>
                            <p className=''>{item.content}</p>
                        </div>
                    </div>
                ))}
                <div className='hidden sm:grid grid-cols-3 gap-3'>
                    {hFocus_Main.map((itemMain) => (
                        <div className='hover:text-red-500 cursor-pointer'>
                            <abbr
                                title={itemMain.title}
                                className=''>
                                <Image
                                    src={itemMain.imgUrl}
                                    alt={itemMain.title}
                                    width={215}
                                    height={150}
                                    loading='lazy'
                                    className='pt-3 object-cover w-full'
                                />
                            </abbr>
                            <abbr title={itemMain.title}>
                                <h2 className='text-lg font-semibold line-clamp-3'>
                                    {itemMain.title}
                                </h2>
                            </abbr>
                        </div>
                    ))}
                </div>
            </div>
            <div className='homeFocus__sub order-3 flex flex-wrap justify-center sm:flex-col sm:justify-normal gap-3'>
                {hFocus_Sub.map((itemSub) => (
                    <abbr
                        title={itemSub.title}
                        className=''>
                        <Image
                            src={itemSub.imgUrl}
                            alt={itemSub.title}
                            loading='lazy'
                            className=''
                        />
                    </abbr>
                ))}
            </div>
        </div>
    );
}
