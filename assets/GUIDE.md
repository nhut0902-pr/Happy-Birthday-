# Hướng dẫn Tùy chỉnh Ứng dụng Chúc mừng Sinh nhật

Chào bạn! Dưới đây là các bước để bạn có thể cá nhân hóa ứng dụng này dành riêng cho người thương của mình.

## 1. Thay đổi Lời chúc (Birthday Wishes)
Để thay đổi nội dung lời chúc chạy bằng hiệu ứng máy đánh chữ:
- Mở file `components/BirthdayCard.tsx`.
- Tìm mảng `lines`. Bạn có thể thay đổi các câu văn trong mảng này:
```typescript
const lines = [
  "Câu chúc thứ nhất...",
  "Câu chúc thứ hai...",
  "Câu chúc thứ ba..."
];
```

## 2. Thay đổi Hình ảnh Kỷ niệm
Để thay đổi các tấm ảnh hiện ra ở giai đoạn cuối:
- Mở file `components/PhotoCollage.tsx`.
- Tìm đoạn mã tạo mảng `photos`.
- Hiện tại ảnh đang lấy ngẫu nhiên từ `picsum.photos`. Bạn có thể thay thế `url` bằng link ảnh thật của hai bạn:
```typescript
// Ví dụ thay đổi link ảnh
url: `https://your-domain.com/path-to-your-photo-${i}.jpg`,
```

## 3. Thay đổi Thời gian Đếm ngược
Để thay đổi thời gian đếm ngược (mặc định là 5 giây):
- Mở file `components/Countdown.tsx`.
- Thay đổi giá trị khởi tạo của `timeLeft`:
```typescript
const [timeLeft, setTimeLeft] = useState(10); // Đổi thành số giây bạn muốn
```

## 4. Thay đổi Tên/Tiêu đề
- **Tiêu đề trang:** Thay đổi trong `<title>` ở file `index.html`.
- **Câu hỏi đầu tiên:** Thay đổi trong `App.tsx` tại mục `CelebrationStage.QUESTION`.
- **Tiêu đề thiệp:** Thay đổi thẻ `<h1>` trong `components/BirthdayCard.tsx`.

## 5. Cấu trúc Thư mục
- `components/`: Chứa các thành phần giao diện (Trái tim rơi, Đồng hồ, Bao thư, Thiệp, Ảnh).
- `assets/`: Nơi chứa tài liệu hướng dẫn và bạn có thể lưu trữ ảnh cục bộ tại đây nếu cần.
- `App.tsx`: Quản lý logic chuyển đổi giữa các giai đoạn của buổi tiệc.

Chúc bạn và người ấy có một ngày kỷ niệm thật tuyệt vời! 💖
