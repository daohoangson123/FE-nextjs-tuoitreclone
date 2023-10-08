import Image from 'next/image';
import ad from '@/assets/adBanner/agri.jpg';
import ad1 from '@/assets/adBanner/tgdd.jpg';
import ad2 from '@/assets/adBanner/fpt.png';

export default function TopAdBanner({ randomBannerId }) {
    const adList = [
        { id: 0, url: ad, des: 'AGRIBANK AD' },
        { id: 1, url: ad1, des: 'TGDD AD' },
        { id: 2, url: ad2, des: 'FPT AD' },
    ];
    return (
        <div className='grid place-items-center'>
            {adList
                .filter((banner) => banner.id === randomBannerId)
                .map((banner) => (
                    <abbr
                        title={banner.des}
                        key={banner.id}>
                        <Image
                            src={banner.url}
                            alt={banner.des}
                            loading='lazy'
                            className='w-[1280px] h-[150px] sm:h-[250px] object-scale-down object-center'
                        />
                    </abbr>
                ))}
        </div>
    );
}
