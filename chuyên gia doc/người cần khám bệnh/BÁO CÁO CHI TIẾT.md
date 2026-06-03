# BÁO CÁO CHI TIẾT UI/UX - ROLE NGƯỜI CẦN KHÁM BỆNH

## 1. PHẦN MỘT: GIAO DIỆN (LAYOUT & VISUAL ARCHITECTURE)

### Các điểm nghẽn và Lỗi thiết kế giao diện

- Thiếu nhất quán kiến trúc giao diện giữa nhóm màn hình chưa đăng nhập và đã đăng nhập.
	Các trang như home/login/register dùng bố cục full-page riêng, trong khi cụm dashboard/doctors/appointments dùng layout có sidebar + topbar. Việc chuyển trạng thái tạo cảm giác như sang một hệ thống khác, không phải cùng một hành trình khám bệnh.

- Topbar dùng chung chưa tối ưu cho bệnh nhân.
	Ô tìm kiếm hiển thị nội dung "Tìm kiếm bệnh nhân, hồ sơ..." làm sai ngữ cảnh với role người đi khám; người dùng bệnh nhân khó hiểu nên tìm gì ở đây.

- Nhiều khối giao diện còn cứng theo desktop.
	Bộ lọc lịch khám là dãy nhiều nút ngang; cụm chọn giờ ở bước đặt lịch hiển thị 4 cột cố định; vùng danh sách bác sĩ chia cột lớn. Trên màn hình nhỏ dễ gây chật, đè chữ, hoặc tăng cuộn ngang/đọc mệt.

- Ngôn ngữ thị giác lẫn giữa icon emoji và icon hệ thống.
	Trong cùng luồng có lúc dùng emoji lớn (📅, 📋, 🔔), có lúc dùng icon vector; điều này làm sản phẩm thiếu tính "medical-grade" và giảm cảm nhận chuyên nghiệp.

- Một số vi phạm micro-copy gây giảm độ tin cậy.
	Ví dụ cụm "Giàu KQ" ở home khó hiểu với người dùng phổ thông; cụm "hơn X+ bác sĩ" tạo cảm giác copy chưa được rà soát.

### Điểm sáng thiết kế giao diện

- Có hệ khung rõ ràng cho người bệnh sau đăng nhập.
	Sidebar + topbar + content area giúp người dùng nhanh nắm cấu trúc chức năng chính: tổng quan, lịch khám, hồ sơ, bác sĩ, thông báo, hồ sơ cá nhân.

- Màu sắc tương đối phù hợp sản phẩm y tế.
	Tông xanh - trắng, nền sáng, card bo góc vừa phải tạo cảm giác sạch, an toàn, dễ tiếp cận với nhóm người dùng đại chúng.

- Các màn hình chính đều có tiêu đề lớn + mô tả phụ.
	Người dùng mới nhìn vào là hiểu ngay mục đích trang (đặt lịch, hồ sơ khám, thông báo...), giảm thời gian định hướng.

- Nhiều trạng thái rỗng (empty state) đã được chuẩn bị.
	Khi chưa có lịch hoặc chưa có dữ liệu, giao diện vẫn có thông điệp và nút hành động tiếp theo, tránh cảm giác "trắng trơn".

## 2. PHẦN HAI: CÁC NÚT BẤM VÀ DI CHUỘT (INTERACTIONS & MICRO-INTERACTIONS)

### Các lỗi tương tác, nhận diện và phản hồi nút bấm

- Có nút bấm xuất hiện nhưng chưa có hành vi thật.
	Các hành động như "Đổi lịch", "Hủy lịch", "Đánh dấu tất cả đã đọc", "Đổi mật khẩu", "Tải xuống PDF" mới dừng ở UI; thiếu phản hồi trạng thái, loading, hoặc cập nhật dữ liệu sau thao tác.

- Một số đường dẫn dẫn đến đích chưa tồn tại.
	Nhiều nút "Xem chi tiết" lịch hẹn đi tới dạng đường dẫn chi tiết theo id, nhưng router hiện chưa khai báo trang chi tiết tương ứng cho patient; người dùng có thể rơi vào trang lỗi.

- Tương tác chưa phân vai đúng ngữ cảnh ở topbar.
	Liên kết "Xem tất cả trong Messenger" đang trỏ về khu vực quản lý thay vì không gian bệnh nhân, có nguy cơ gây nhầm luồng và nhầm quyền.

- Phản hồi thành công/lỗi còn thô.
	Các thao tác quan trọng như đăng ký, cập nhật hồ sơ, đặt lịch dùng alert mặc định; thiếu toast, thiếu trạng thái trung gian, thiếu cơ chế hoàn tác hoặc xác nhận hai bước với thao tác nhạy cảm.

- Chưa có lớp bảo vệ khi người dùng thao tác liên tục.
	Nút gửi chat ở home có thể bấm liên tục; chưa có trạng thái disabled khi chờ phản hồi bot, dễ tạo trùng lặp tin nhắn và cảm giác giật cục.

### Điểm sáng tương tác đã tốt

- Bộ lọc trên trang lịch khám và tìm bác sĩ phản hồi tức thời.
	Người dùng thay bộ lọc là danh sách cập nhật ngay, tạo cảm giác kiểm soát tốt và giảm số bước thao tác.

- Bố cục step-by-step ở trang đặt lịch giúp giảm áp lực nhận thức.
	Luồng chia 3 bước (chọn bác sĩ, chọn thời gian, xác nhận) phù hợp hành vi đặt lịch khám, giúp người dùng không bị quá tải thông tin cùng lúc.

- Trạng thái active/hover của menu và card khá rõ.
	Điều này giúp định vị vị trí hiện tại tốt hơn, đặc biệt với người dùng trung niên ít kinh nghiệm công nghệ.

- Tương tác chọn bác sĩ/chọn giờ có phản hồi trực quan bằng màu nền và viền.
	Đây là điểm tốt cho thao tác chọn một trong nhiều lựa chọn, hạn chế nhầm lựa chọn trước khi xác nhận.

## 3. PHẦN BA: TẦM NHÌN VÀ SỰ CHÚ Ý (VISUAL HIERARCHY & ATTENTION Pattern)

### Điểm gây phân tán và Xung đột tiêu điểm thị giác

- Một số màn hình có quá nhiều điểm nhấn mạnh cùng lúc.
	Dashboard dùng nhiều khối màu bão hòa, icon lớn, CTA gradient và card nội dung đồng thời; mắt người dùng khó biết đâu là hành động ưu tiên đầu tiên.

- Luồng home cạnh tranh tiêu điểm giữa hero và khung chat.
	Cả hai khu vực đều lớn và đều có call-to-action mạnh, dẫn tới phân tán sự chú ý; người mới có thể chần chừ không biết nên đọc thông tin hay bắt đầu chat ngay.

- Cường độ thị giác của emoji cao hơn nội dung chữ ở vài khu vực.
	Khi icon quá bắt mắt, thông tin y tế quan trọng (thời gian, bác sĩ, trạng thái lịch) bị giảm ưu tiên nhận diện.

- Phân cấp thông tin trong một số card chưa đủ lớp.
	Nội dung chính và nội dung phụ đôi lúc dùng cỡ chữ/gam màu gần nhau, làm tốc độ quét thông tin bị chậm, đặc biệt trên màn hình nhỏ.

### Điểm xuất sắc về điều hướng tiêu điểm nhìn

- Luồng đặt lịch có trục nhìn tốt theo chiều dọc.
	Người dùng nhìn từ tiêu đề -> stepper -> nội dung bước -> nút tiếp tục/xác nhận; cấu trúc này phù hợp mô hình tác vụ tuần tự.

- Header trang và tiêu đề section tạo neo thị giác rõ.
	Mỗi trang đều có điểm bắt đầu nhất quán ở đầu màn hình, giúp người dùng nhanh định hướng khi điều hướng qua sidebar.

- Trạng thái chưa đọc trong thông báo được đánh dấu trực quan.
	Viền trái nổi bật + chấm trạng thái giúp người dùng ưu tiên xử lý thông tin mới mà không phải đọc toàn bộ danh sách.

- Nhóm hành động chính thường đặt ở vùng dễ thấy.
	Các nút như "Đặt lịch mới", "Xác nhận đặt lịch", "Chỉnh sửa" được đặt gần tiêu đề hoặc cuối form, hỗ trợ người dùng hoàn thành nhiệm vụ nhanh.

---

## Kết luận ngắn cho role Người cần khám bệnh

Hệ thống đã có nền tảng tốt về cấu trúc trang, luồng đặt lịch và mức độ rõ ràng chức năng cốt lõi. Tuy nhiên, để nâng chất lượng UX thực tế cho bệnh nhân, cần ưu tiên sửa các điểm nghẽn về tính nhất quán giao diện, tính đúng ngữ cảnh theo role, và hoàn thiện hành vi thật cho các nút quan trọng. Nếu xử lý tốt 3 nhóm này, trải nghiệm sẽ tăng mạnh cả về độ tin cậy lẫn tỷ lệ hoàn thành tác vụ.
