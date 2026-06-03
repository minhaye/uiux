# BỘ CHECKLIST KIỂM THỬ UI/UX CHI TIẾT — VAI TRÒ: NGƯỜI CẦN TƯ VẤN

Phiên bản: 1.0
Tác giả: (điền tên người kiểm thử)
Ngày: (dd/mm/yyyy)

---

Mục tiêu: Danh sách kiểm tra này nhằm đảm bảo trải nghiệm người dùng (UI/UX) cho vai trò **Người cần tư vấn** đầy đủ, rõ ràng, dễ dùng, an toàn và nhất quán trên các kịch bản chính của hệ thống.

Hướng dẫn sử dụng: Đánh dấu từng mục bằng `✓` khi vượt qua, ghi chú ở cột `Ghi chú` nếu có lỗi hoặc đề xuất. Thực hiện kiểm tra trên nhiều trình duyệt và thiết bị (desktop, tablet, mobile).

---

## Thông tin bản thử nghiệm
- Thiết bị: 
- Trình duyệt / phiên bản: 
- Độ phân giải: 
- Mạng: 
- Môi trường: `dev` / `staging` / `prod`

---

## 1. Truy cập & Đăng nhập
- [ ] Trang landing rõ ràng, có nút/kêu gọi hành động `Đăng nhập` hoặc `Bắt đầu` (hiển thị đúng cho vai trò người cần tư vấn).
- [ ] Modal đăng nhập hiện khi click vào `Đăng nhập` (không gây nhấp nháy, backdrop hoạt động).
- [ ] Tiêu đề modal chính xác: `Đăng nhập hệ thống` và mô tả phụ: `Chọn vai trò của bạn để tiếp tục`.
- [ ] Không còn mục `Chuyên gia` (đã tạm ẩn theo yêu cầu).
- [ ] Các lựa chọn vai trò hiển thị theo thứ tự mong muốn, biểu tượng và văn bản dễ đọc.
- [ ] Nút đóng (`X`) đóng modal và trả về trạng thái trước đó.
- [ ] Trỏ chuột, phím Tab, và Enter hoạt động để chọn vai trò (kiểm thử keyboard navigation).
- [ ] Khi chọn `Người cần tư vấn`, điều hướng về `route` tương ứng (ví dụ `/consultant`) và trạng thái modal đóng.

## 2. Dashboard / Home (Người cần tư vấn)
- [ ] Tiêu đề trang và tên người dùng hiển thị đầy đủ.
- [ ] Điều hướng chính (sidebar/topbar) có mục rõ ràng cho: đặt lịch, hồ sơ sức khỏe, lịch sử tư vấn, v.v.
- [ ] Bố cục dễ quét: các card, danh sách và CTA có khoảng cách hợp lý.
- [ ] Trạng thái kết nối/phiên (nếu có) hiển thị rõ ràng (ví dụ: trạng thái tư vấn đang mở/đóng).
- [ ] Các thông báo quan trọng (ví dụ: thông báo cuộc hẹn) dễ nhận biết (màu, icon, vị trí).

## 3. Tạo / Đặt lịch tư vấn
- Hiển thị form đặt lịch
  - [ ] Form có các trường cần thiết: chuyên khoa, mô tả triệu chứng (tối thiểu 1 dòng), ngày/giờ, chọn bác sĩ/không (nếu có), phương thức tư vấn (chat/video)
  - [ ] Các label và placeholder rõ ràng, ngôn ngữ dễ hiểu cho người dùng bình thường.
  - [ ] Validation tức thì: thông báo lỗi hiển thị dưới trường (ví dụ khi thiếu nội dung, ngày không hợp lệ).
  - [ ] Nếu chọn ngày/giờ trùng/không hợp lệ thì hiển thị thông báo rõ ràng.
  - [ ] Nút `Đặt lịch` có trạng thái disabled khi form chưa hợp lệ.
  - [ ] Sau đặt lịch thành công: hiển thị thông báo thành công và CTA để xem chi tiết lịch.
  - [ ] Trường `mô tả` có giới hạn ký tự hiển thị và bộ đếm còn lại (ví dụ 0/1000), hoặc gợi ý ngắn về nội dung cần mô tả.

## 4. Màn hình Tư vấn (Chat / Nhắn tin / Video)
- Chat cơ bản
  - [ ] Bố cục chat: danh sách tin nhắn, input nhập tin nhắn, nút gửi, trạng thái tin nhắn (đã gửi, đã đọc)
  - [ ] Tin nhắn hỗ trợ rich text hoặc kí tự đặc biệt mà không bị lỗi layout.
  - [ ] File/image attach: upload thành công, hiển thị thumbnail, có nút mở/luu/xóa.
  - [ ] Kích thước ảnh lớn không làm vỡ layout.
  - [ ] Thông báo lỗi upload rõ ràng khi vượt quá giới hạn.
- Gọi video / thoại
  - [ ] Nút gọi hiển thị rõ ràng, tooltip giải thích chức năng.
  - [ ] Trạng thái kết nối (kết nối thành công, đang kết nối, bị ngắt) hiển thị dễ hiểu.
  - [ ] UI cho bật/tắt mic, camera, chuyển camera (trên mobile) rõ ràng và dễ thao tác.
  - [ ] Khi mất mạng: hiển thị thông báo/đếm ngược/khả năng thử lại.
- UX trạng thái bác sĩ
  - [ ] Hiển thị tên, chuyên môn, hình đại diện bác sĩ chuyên gia (nếu có) khi vào phòng tư vấn.
  - [ ] Thời gian tư vấn đã trôi qua/khung thời gian còn lại hiển thị (nếu có giới hạn thời gian).

## 5. Hồ sơ sức khỏe (Health Profile)
- [ ] Các mục hồ sơ chính: thông tin cá nhân, tiền sử bệnh, dị ứng, thuốc đang dùng, kết quả xét nghiệm.
- [ ] Dữ liệu có thể chỉnh sửa: có nút `Chỉnh sửa`, xác nhận trước khi lưu (modal/xác nhận thay đổi).
- [ ] Khi lưu thành công, hiển thị toast xác nhận và cập nhật view ngay lập tức.
- [ ] Trường ngày/giờ có picker phù hợp và validation.
- [ ] Các phần bắt buộc được đánh dấu rõ ràng.

## 6. Lịch sử tư vấn & Hồ sơ cuộc hẹn
- [ ] Danh sách cuộc tư vấn trước đây: tiêu đề, ngày, trạng thái, tên chuyên gia/bác sĩ.
- [ ] Có bộ lọc theo ngày/chuyên khoa/trạng thái.
- [ ] Có trang chi tiết từng lần tư vấn: ghi chép, file đính kèm, kết luận, đơn thuốc (nếu có).
- [ ] Từ trang lịch sử có thể bắt lại cuộc tư vấn (nếu tính năng hỗ trợ) hoặc liên hệ lại.

## 7. Thông báo & Email
- [ ] Thông báo in-app cho các sự kiện quan trọng: cuộc hẹn sắp tới, bác sĩ trả lời, thay đổi lịch.
- [ ] Các thông báo có mức ưu tiên thể hiện bằng màu/biểu tượng.
- [ ] Nội dung email/notification đúng ngữ cảnh, không quá dài, có CTA rõ ràng.
- [ ] Thiết lập nhận thông báo (bật/tắt) dễ tìm và hoạt động.

## 8. Accessibility (Khả năng tiếp cận)
- [ ] Kiểm tra keyboard navigation: mọi điều khiển quan trọng có thể truy cập bằng Tab/Enter.
- [ ] Focus state rõ ràng (khung hoặc nền nổi bật khi tab vào phần tử).
- [ ] Contrast ratio giữa text và background >= 4.5:1 cho text bình thường.
- [ ] Các hình ảnh có alt text (mô tả ngắn nếu ảnh mang nội dung quan trọng).
- [ ] Form và control có label liên kết đúng (for + id) cho screen readers.
- [ ] ARIA roles/attributes hợp lý với các component động (modal, dialogs, alerts).

## 9. Localization & Copy
- [ ] Tất cả text hiển thị bằng tiếng Việt (không còn chuỗi tiếng Anh) theo ngôn ngữ sản phẩm.
- [ ] Không có text bị cắt hoặc dồn do dài/thiếu wrap.
- [ ] Copy thân thiện, hướng dẫn rõ ràng (ví dụ: gợi ý nhập triệu chứng ngắn gọn).
- [ ] Các lỗi/validation hiển thị bằng ngôn ngữ người dùng, dễ hiểu và đưa hướng xử lý.

## 10. Responsive (Độ tương thích trên kích cỡ màn hình)
- [ ] Layout desktop (>=1024px) hiển thị 2 cột hoặc grid như thiết kế.
- [ ] Tablet (~768–1023px) hiển thị cân bằng, menu hợp lý (collapse nếu cần).
- [ ] Mobile (<768px) các action chính dễ bấm (kích thước tap target >= 44px).
- [ ] Modal đăng nhập hiển thị đầy đủ trên mobile, không bị tràn ra ngoài viewport.
- [ ] Test trên chiều dọc và ngang (portrait/landscape) với mobile.

## 11. Hiệu năng & Tương tác
- [ ] Trang chính load trong < 2s trên mạng 4G (kiểm thử thô).
- [ ] Không có layout shift lớn (CLS thấp) khi load ảnh hoặc component dynamic.
- [ ] Các animation/transition mượt, không gây giật hoặc delay lâu.
- [ ] Hành động gửi form có trạng thái loading rõ ràng (spinner/disabled) để tránh double-submit.

## 12. Bảo mật & Quyền riêng tư
- [ ] Không hiển thị thông tin nhạy cảm trong URL hoặc log client.
- [ ] Các hành động nhạy cảm có xác thực (ví dụ chỉnh sửa hồ sơ yêu cầu đăng nhập).
- [ ] Khi gửi dữ liệu y tế, hệ thống hiển thị thông báo về bảo mật và link tới chính sách (nếu cần).
- [ ] Xác nhận rằng file upload được kiểm duyệt/giới hạn định dạng và kích thước.

## 13. Edge cases & Error states
- [ ] Kiểm thử khi mất kết nối: các thông báo lỗi hiển thị và có khả năng thử lại.
- [ ] Kiểm thử khi server trả về lỗi (4xx/5xx): UI hiển thị thông báo thân thiện.
- [ ] Các trường hợp empty-state (không có lịch, không có hồ sơ) có nội dung hướng dẫn và CTA.
- [ ] Khi token/phiên hết hạn: redirect về trang đăng nhập với thông báo giải thích.

## 14. Visual Design & Consistency
- [ ] Kiểm tra khoảng cách (spacing), kích thước chữ, hệ thống màu theo design token.
- [ ] Các button/CTA nhất quán về shape, elevation và hover/focus state.
- [ ] Iconography phù hợp và thống nhất (kích thước, stroke weight).
- [ ] Hình đại diện dùng placeholder chuẩn khi chưa có ảnh.

## 15. Microcopy & Help
- [ ] Tooltip/placeholder/gợi ý có ích (ví dụ: "Mô tả triệu chứng càng cụ thể càng tốt: triệu chứng, thời gian, thuốc đang dùng").
- [ ] Có link tới trang Hướng dẫn hoặc FAQ nếu người dùng cần hỗ trợ.
- [ ] Các CTA có nhãn hành động rõ ràng (Không dùng "Submit" chung chung).

## 16. Analytics & Tracking (Kiểm tra cơ bản)
- [ ] Sự kiện chính được bắn: `open_login_modal`, `select_role_consultant`, `create_appointment`, `start_chat`.
- [ ] Kiểm tra dữ liệu bắn đúng thông tin (userId anonymized, event properties phù hợp).

## 17. Test Cases & Acceptance Criteria (Mẫu)
- Test Case 1: Mở modal đăng nhập -> chọn `Người cần tư vấn` -> chuyển đến `/consultant`
  - Acceptance: Modal đóng, URL thay đổi, dashboard `Người cần tư vấn` hiển thị.

- Test Case 2: Đặt lịch hẹn hợp lệ
  - Steps: Mở form, nhập đầy đủ, chọn ngày hợp lệ, click `Đặt lịch`.
  - Acceptance: Màn hình xác nhận, lịch xuất hiện trong `Lịch của tôi`.

- Test Case 3: Gửi tin nhắn với ảnh
  - Steps: Vào phòng chat, attach ảnh <= limit, gửi.
  - Acceptance: Tin nhắn hiển thị kèm thumbnail, ảnh mở được.

- Test Case 4: Mất kết nối giữa chừng
  - Steps: Trong cuộc gọi/chat, simulate mất mạng.
  - Acceptance: Hiển thị trạng thái lỗi, có nút `Thử lại` hoặc reconnect.

---

## Ghi chú bổ sung
- Ghi lại mọi lỗi UI/UX với ảnh chụp màn hình, steps to reproduce, và mức ưu tiên.
- Nếu phát hiện inconsistency giữa thiết kế và implementation, tag team design và product owner.

---

Nếu bạn muốn, tôi có thể:
- Xuất checklist này thành một bảng Google Sheets hoặc Excel để dễ theo dõi.
- Thêm cột `Severity` và `Reported By` cho quy trình bug triage.


