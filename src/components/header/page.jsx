'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import logo from '@/assets/logo.svg';
import home from '@/assets/icons/home.png';
import TopAdBanner from '../topAdBanner/page';

import {
    FaBars,
    FaBox,
    FaMagnifyingGlass,
    FaMicrophone,
    FaRegCircleQuestion,
    FaRegLightbulb,
    FaSquareYoutube,
    FaUser,
    FaX,
} from 'react-icons/fa6';

export default function Header({ routes, videoRoutes }) {
    const [randomBannerId, setRandomBannerId] = useState(
        Math.round(Math.random() * 2),
    );

    const [isSearching, setIsSearching] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();

    function randomBanner() {
        setRandomBannerId(Math.round(Math.random() * 2));
        setIsMenuOpen(false);
    }

    function toggleMenu() {
        const mm = window.matchMedia('(width > 640px)');

        if (mm.matches) {
            setIsMenuOpen(false);
        }
        return;
    }

    useEffect(() => {
        const searchInput = document.getElementById('SearchInput');
        const searchIcon = document.getElementById('SearchIcon');

        function focusSearchInput() {
            if (!isSearching) {
                searchInput.focus();
            }
        }

        const checkSearchDimension = (event) => {
            const dimensons = searchInput.getBoundingClientRect();
            if (
                (event.clientX < dimensons.left ||
                    event.clientX > dimensons.right ||
                    event.clientY < dimensons.top ||
                    event.clientY > dimensons.bottom) &&
                isSearching
            ) {
                setIsSearching(false);
                // hạn chế gọi hàm
                window.removeEventListener('click', checkSearchDimension);
            }
        };

        window.addEventListener('click', checkSearchDimension);

        searchIcon.addEventListener('click', focusSearchInput);

        const mm = window.matchMedia('(width > 640px)');

        toggleMenu();

        mm.addEventListener('change', toggleMenu);

        return () => mm.removeEventListener('change', toggleMenu);
    }, [isSearching]);

    return (
        <>
            <header className=''>
                <TopAdBanner randomBannerId={randomBannerId} />
                <nav className='navContainer'>
                    <div className='navTop bg-red-600'>
                        <div className='layoutContainer flex justify-between items-center gap-5 text-white'>
                            <div
                                className='sm:hidden cursor-pointer'
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <FaX /> : <FaBars />}
                            </div>
                            <Link
                                href='/'
                                className='logo'
                                onClick={randomBanner}
                            >
                                <Image
                                    src={logo}
                                    alt='Logo'
                                    width={120}
                                    height={50}
                                    className='min-w-[120px] min-h-[50px]'
                                />
                            </Link>
                            <div className='outerLink hidden place-items-center gap-4 sm:flex flex-wrap justify-end items-center sm:gap-4'>
                                <ul className='grid grid-cols-2 sm:flex flex-wrap justify-center gap-3'>
                                    <li className='border-r-[1px] pr-3'>
                                        <Link
                                            href='podcast'
                                            className='flex gap-2 items-center'
                                        >
                                            <FaMicrophone />
                                            Podcast
                                        </Link>
                                    </li>
                                    <li className='border-r-[1px] pr-3'>
                                        <Link
                                            href='https://www.youtube.com/channel/UC47WI-kZXFf0H_f7pvaNCEQ'
                                            className='flex gap-2 items-center'
                                        >
                                            <FaSquareYoutube />
                                            YouTube
                                        </Link>
                                    </li>
                                    <li className='border-r-[1px] pr-3'>
                                        <Link
                                            href='can-biet'
                                            className='flex gap-2 items-center'
                                        >
                                            <FaRegLightbulb />
                                            Cần biết
                                        </Link>
                                    </li>
                                    <li className='border-r-[1px] pr-3'>
                                        <Link
                                            href='rao-vat'
                                            className='flex gap-2 items-center'
                                        >
                                            <FaBox />
                                            Rao vặt
                                        </Link>
                                    </li>
                                </ul>
                                <div className='searchBox flex gap-3 items-center min-h-[30px]'>
                                    <div
                                        className={`${
                                            isSearching ? 'w-[200px]' : 'w-4'
                                        } flex gap-3 items-center transition-all ease-linear overflow-x-hidden`}
                                    >
                                        <FaMagnifyingGlass
                                            id='SearchIcon'
                                            className={`min-w-max transition-all ease-linear cursor-pointer`}
                                            onClick={() =>
                                                setIsSearching(!isSearching)
                                            }
                                        />
                                        <input
                                            id='SearchInput'
                                            type='search'
                                            placeholder='Nhập nội dung cần tìm'
                                            className={`bg-red-800 border-[1px] outline-none p-1 rounded-[4px] text-sm transition-all ease-linear`}
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            isMenuOpen ? 'grid' : 'hidden'
                                        } overflow-hidden gap-3 place-items-center items-center sm:flex transition-all ease-linear`}
                                    >
                                        <Link href='data-handle'>
                                            <FaUser className='cursor-pointer min-w-[16px]' />
                                        </Link>
                                        <button className='bg-blue-600 hover:bg-blue-500 transition-all px-4 py-1 rounded-[4px] text-sm font-medium'>
                                            Đăng ký tuổi trẻ sao
                                        </button>
                                        <FaRegCircleQuestion className='cursor-pointer min-w-[16px]' />
                                    </div>
                                </div>
                            </div>
                            <FaUser className='cursor-pointer sm:hidden' />
                        </div>
                    </div>
                </nav>
                <ul
                    className='navMobile px-4 grid bg-white transition-all overflow-y-scroll'
                    style={{ height: isMenuOpen ? '100vh' : 0 }}
                >
                    <li className='searchMobile mt-3 px-2 py-3 flex justify-between items-center border-b border-slate-100 bg-slate-100'>
                        <input
                            id='SearchInput'
                            type='search'
                            placeholder='Tìm kiếm'
                            className='rounded-[4px] text-sm transition-all flex-grow bg-transparent outline-none'
                        />
                        <FaMagnifyingGlass
                            className='transition-all ease-in-out cursor-pointer min-w-[16px] justify-self-end'
                            onClick={() => setIsSearching(!isSearching)}
                        />
                    </li>
                    <p className='text-sm font-semibold text-slate-500 pt-3'>
                        Chuyên mục
                    </p>
                    {routes.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li
                                onClick={randomBanner}
                                key={link.name}
                                className={`${
                                    isActive ? 'text-red-500' : 'text-black'
                                } border-b border-slate-200 hover:text-red-500 ${
                                    link.href === ''
                                        ? 'border-none'
                                        : 'border-collapse py-3'
                                }`}
                            >
                                <Link
                                    href={`/${link.href}`}
                                    className='inline-block w-full'
                                >
                                    {link.name !== 'trang chủ' &&
                                        link.name.toUpperCase()}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </header>
            <div className='navBot sticky top-0 z-50'>
                <nav className='bg-white'>
                    <ul className='layoutContainer font-medium text-xs py-2 min-h-[40px] flex gap-4 items-center overflow-x-auto'>
                        {pathname === '/videos' ||
                        pathname.slice(0, 8) === '/videos/'
                            ? videoRoutes.map((link) => {
                                  const isActive =
                                      pathname === `/videos/${link.href}`;
                                  return (
                                      <li
                                          onClick={randomBanner}
                                          key={link.name}
                                          className={`${
                                              isActive
                                                  ? 'text-red-500'
                                                  : 'text-black'
                                          }
                                          hover:text-red-500 min-w-max`}
                                      >
                                          <Link
                                              href={
                                                  isActive
                                                      ? '#'
                                                      : !isActive &&
                                                        pathname.slice(0, 8) ===
                                                            '/videos/'
                                                      ? link.href
                                                      : `videos/${link.href}`
                                              }
                                          >
                                              {link.name.toUpperCase()}
                                          </Link>
                                      </li>
                                  );
                              })
                            : routes.map((link) => {
                                  const isActive = pathname === `/${link.href}`;
                                  return (
                                      <li
                                          onClick={randomBanner}
                                          key={link.name}
                                          className={`${
                                              isActive
                                                  ? 'text-red-500'
                                                  : 'text-black'
                                          }
                                        hover:text-red-500 min-w-max`}
                                      >
                                          <Link href={link.href}>
                                              {link.name === 'trang chủ' ? (
                                                  <Image
                                                      src={home}
                                                      width={24}
                                                      height={24}
                                                      alt='Home'
                                                      className='min-w-[24px]'
                                                  />
                                              ) : (
                                                  link.name.toUpperCase()
                                              )}
                                          </Link>
                                      </li>
                                  );
                              })}
                    </ul>
                </nav>
            </div>
        </>
    );
}
