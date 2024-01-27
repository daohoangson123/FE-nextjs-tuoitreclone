import { hFocus_Main } from '@/mockData/homeFocusData';
import Image from 'next/image';

export default function TinTuc({ params }) {
    const tintuc = hFocus_Main.filter(
        (data) => data.id.toString() === params.slug,
    );
    return (
        <div>
            {tintuc.map((data) => (
                <div className='flex gap-5 flex-wrap'>
                    <Image
                        title={data.title}
                        src={data.imgUrl}
                        alt={data.title}
                        width={400}
                        height={200}
                        loading='lazy'
                        className='rounded-md'
                    />
                    <h2>{data.title}</h2>
                </div>
            ))}
        </div>
    );
}
