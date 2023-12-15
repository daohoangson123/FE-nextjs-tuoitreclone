import anh from '@/assets/hFocusMain/tinnoibat.webp';
import anh1 from '@/assets/hFocusMain/jack-messi-3.webp';
import anh2 from '@/assets/hFocusMain/mot-hoc-sinh-bi-bong-ddang-dieu-tri-tai-bv.webp';
import anh3 from '@/assets/hFocusMain/hoc-sinh-da-nang-danh-dj-trong-ngay-khai-giang.webp';

const date = new Date();
const thu = date.getDay();
const ngay = date.getDate();
const thang = date.getMonth() + 1;
const nam = date.getFullYear();

console.log(ngay, thang, nam);

const getThu = (thu) => {
    switch (thu) {
        case 1:
            return 'Thứ hai';
        case 2:
            return 'Thứ ba';
        case 3:
            return 'Thứ tư';
        case 4:
            return 'Thứ năm';
        case 5:
            return 'Thứ sáu';
        case 6:
            return 'Thứ bảy';
        default:
            return 'Chủ nhật';
    }
};

export const hFocus_List = [
    {
        content: `${getThu(thu)} ngày ${
            ngay.toString().length === 1 ? `0${ngay}` : ngay
        }-${
            thang.toString().length === 1 ? `0${thang}` : thang
        }-${nam}, TP. Hồ Chí Minh 26° - 33°C`,
    },
    {
        content:
            'Thủ tướng Phạm Minh Chính lần đầu gặp Thủ tướng Campuchia Hun Manet',
    },
    {
        content:
            'Làm trái quy hoạch ở Huyện ủy Nhơn Trạch: Rút hồ sơ, kiểm tra dấu hiệu vi phạm',
    },
    {
        content: 'Vì sao có bóng bay tưởng chừng vô hại nhưng gây bỏng khi nổ?',
    },
    {
        content: 'Giáo sư Văn Tần: ‘Một đời thinh lặng cứu người',
    },
    {
        content:
            'Từ 15-9, cảnh sát giao thông được dừng xe những trường hợp nào?',
    },
    {
        content: 'Bị yêu cầu mở thủ tục phá sản, Đức Long Gia Lai nói gì?',
    },
    {
        content: 'Hàng trăm dự án bất động sản được tháo gỡ vướng mắc',
    },
    {
        content: 'Tiền điện tăng đột biến, vì sao?',
    },
];

export const tinNoiBat = [
    {
        title: 'Tổng bí thư Nguyễn Phú Trọng tiếp Trưởng Ban Liên lạc đối ngoại Trung ương Trung Quốc',
        content:
            'Tổng Bí thư Nguyễn Phú Trọng đã tiếp Trưởng ban Liên lạc đối ngoại Trung ương Trung Quốc Lưu Kiến Siêu.',
        imgUrl: anh,
    },
];

export const hFocus_Main = [
    {
        title: "Jack: 'Tôi đã chi một khoản rất lớn cho những người kết nối gặp Messi'",
        imgUrl: anh1,
    },
    {
        title: 'Nổ bóng bay làm 10 học sinh bị bỏng: Thầy giáo cầm thuốc lá gây ra vụ nổ',
        imgUrl: anh2,
    },
    {
        title: 'Xôn xao nữ học sinh tiểu học làm DJ trong ngày khai giảng, cô giáo và các bạn cùng nhảy',
        imgUrl: anh3,
    },
];

export const hFocus_Sub = [
    {
        title: "Jack: 'Tôi đã chi một khoản rất lớn cho những người kết nối gặp Messi'",
        imgUrl: anh1,
    },
    {
        title: 'Nổ bóng bay làm 10 học sinh bị bỏng: Thầy giáo cầm thuốc lá gây ra vụ nổ',
        imgUrl: anh2,
    },
    {
        title: 'Xôn xao nữ học sinh tiểu học làm DJ trong ngày khai giảng, cô giáo và các bạn cùng nhảy',
        imgUrl: anh3,
    },
];
