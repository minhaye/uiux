# BÁO CÁO CHI TIẾT - VAI TRÒ: NGƯỜI CẦN TƯ VẤN

Phạm vi phân tích dựa trên luồng giao diện và các màn hình trong nhánh người cần tư vấn: đăng nhập, tư vấn sức khỏe, lịch sử tư vấn, hồ sơ sức khỏe, theo dõi triệu chứng và đặt lịch khám.

## 1. PHẦN MỘT: GIAO DIỆN (LAYOUT & VISUAL ARCHITECTURE)

### Các điểm nghẽn và lỗi thiết kế giao diện
- Cấu trúc giao diện giữa các màn hình chưa có một hệ khung nhận diện thật sự riêng cho người cần tư vấn. Phần lớn vẫn dùng cùng một kiểu layout thẻ trắng, nền gradient nhẹ và bo góc lớn, nên cảm giác đẹp nhưng khá “đều tay”, thiếu dấu ấn của một luồng sản phẩm chuyên cho tư vấn sức khỏe.
- Màn hình đăng nhập dành cho người cần tư vấn chia thành hai khối rõ rệt, nhưng khối nội dung bên trái và form bên phải chưa tạo được một câu chuyện thị giác xuyên suốt. Phần giới thiệu thương hiệu, lợi ích và form nhập liệu còn tách nhau tương đối mạnh.
- Thanh bên của khu người cần tư vấn có cấu trúc gọn, nhưng mục “Cài đặt” đang trỏ về cùng trang với hồ sơ sức khỏe, khiến kiến trúc điều hướng bị mơ hồ. Đây là lỗi nhỏ về mặt thông tin nhưng ảnh hưởng trực tiếp đến độ rõ ràng của hệ thống.
- Ở màn hình đặt lịch khám, nhiều khối nội dung có độ ưu tiên thị giác gần như ngang nhau. Người dùng phải tự đọc khá nhiều mới hiểu đâu là lựa chọn chính, đâu là thông tin tham chiếu, nên cấu trúc phân cấp chưa thật sắc nét.
- Một số khu vực vẫn thiên về trình bày “đủ thông tin” hơn là “điều khiển hành vi”. Ví dụ màn hình lịch sử tư vấn và hồ sơ sức khỏe trình bày tốt dữ liệu, nhưng chưa đẩy mạnh khung hành động kế tiếp như tiếp tục tư vấn, cập nhật hồ sơ hoặc đặt lịch.

### Điểm sáng thiết kế giao diện
- Tổng thể giao diện sạch, thoáng và có khoảng thở tốt. Việc dùng nền chuyển sắc nhẹ, card trắng bán trong suốt và bo tròn nhất quán giúp sản phẩm có cảm giác hiện đại, thân thiện, phù hợp bối cảnh sức khỏe.
- Màn hình tư vấn chính có bố cục rất rõ: vùng chat là trung tâm hành động, cột phụ bên phải là phần tóm lược thông tin và cảnh báo. Đây là một phân tầng thị giác hợp lý vì nó tách đúng thứ người dùng đang làm và thứ hệ thống đang hỗ trợ.
- Màn hình lịch sử tư vấn theo kiểu master-detail hoạt động tốt. Danh sách bên trái và chi tiết bên phải tạo ra nhịp đọc tự nhiên, giúp người dùng quét lịch sử nhanh rồi đi sâu vào phiên đang chọn mà không bị rối.
- Thanh điều hướng bên trái của toàn bộ layout có nhịp ngắn, biểu tượng rõ và chữ dễ đọc. Với một sản phẩm đa vai trò, đây là một điểm mạnh vì người dùng không phải học lại quá nhiều cách di chuyển khi vào từng phân hệ.
- Các nút chính như gửi tin nhắn, xác nhận đặt lịch, cập nhật hồ sơ đều có kích thước đủ lớn, góc bo đồng nhất và màu nhấn rõ. Điều này làm cho giao diện dễ nhìn và dễ thao tác trên cả máy tính lẫn màn hình nhỏ hơn.

## 2. PHẦN HAI: CÁC NÚT BẤM VÀ DI CHUỘT (INTERACTIONS & MICRO-INTERACTIONS)

### Các lỗi tương tác, nhận diện và phản hồi nút bấm
- Nhiều hành động quan trọng vẫn chưa có phản hồi trạng thái đủ rõ. Màn hình đặt lịch dùng hộp thoại thông báo đơn giản thay vì một luồng xác nhận có trạng thái thành công, lỗi hoặc bước tiếp theo, nên cảm giác tương tác còn ở mức mô phỏng.
- Form đăng nhập của người cần tư vấn chuyển hướng ngay sau khi submit, nhưng không có phản hồi trung gian cho người dùng biết hệ thống đã kiểm tra gì, có lỗi gì hay đang xử lý gì. Đây là khoảng trống lớn ở micro-interaction.
- Màn hình tư vấn có vùng nhập và nút gửi rõ ràng, nhưng chưa thể hiện các trạng thái như đang gõ, đang gửi, gửi lỗi hoặc tin nhắn đã được ghi nhận. Vì vậy trải nghiệm chat vẫn thiên về demo hơn là sản phẩm thật.
- Các thành phần tương tác như chọn phiên lịch sử, chọn khung giờ đặt lịch, tick checklist theo dõi triệu chứng đều có trạng thái active, nhưng độ tương phản giữa trạng thái chọn và không chọn còn khá nhẹ. Khi nhìn nhanh, người dùng chưa luôn nhận ra ngay lựa chọn hiện tại.
- Một số nút bấm mang tính hành động quan trọng như “Cập nhật hồ sơ” hoặc “Xác nhận đặt lịch” chưa đi cùng validation rõ ràng. Người dùng có thể bấm được, nhưng hệ thống chưa cho thấy ngay điều gì sẽ xảy ra sau đó.

### Điểm sáng tương tác đã tốt
- Chatbot tư vấn là điểm tương tác tốt nhất của toàn luồng. Người dùng có thể nhập tự do, dùng gợi ý nhanh, gửi bằng phím Enter và nhận phản hồi tức thì. Đây là một luồng thao tác ngắn, dễ hiểu và đúng ngữ cảnh.
- Các quick reply trong màn hình tư vấn giúp giảm công sức nhập liệu ban đầu. Chỉ cần một cú click là người dùng đã có thể kích hoạt luồng trò chuyện, rất phù hợp với những người đang lo lắng hoặc không biết phải mô tả triệu chứng từ đâu.
- Màn hình lịch sử tư vấn và đặt lịch đều có phản hồi chọn lựa bằng đổi nền, đổi viền và đổi màu chữ. Dù chưa quá mạnh, cơ chế này vẫn đủ để cho người dùng biết mình đang chọn mục nào.
- Ở phần theo dõi triệu chứng, checklist tạo ra tương tác nhẹ và dễ hiểu. Đây là một ví dụ tốt về micro-interaction đơn giản: không cần phức tạp nhưng đủ để người dùng cảm thấy mình đang tham gia vào quá trình ghi nhận sức khỏe.
- Các CTA phụ như “Quay lại chatbot” hay các nút điều hướng nội bộ hoạt động rõ ràng, nên hành trình quay lui hoặc tiếp tục bước sau không gây đứt quãng.

## 3. PHẦN BA: TẦM NHÌN VÀ SỰ CHÚ Ý (VISUAL HIERARCHY & ATTENTION Pattern)

### Điểm gây phân tán và xung đột tiêu điểm thị giác
- Trên layout chung, topbar và sidebar đều có độ hiện diện khá mạnh. Khi kết hợp với nền gradient và các card trắng nổi, mắt người dùng phải xử lý nhiều lớp thông tin cùng lúc. Điều này chưa hẳn xấu, nhưng nếu không kiểm soát tốt có thể làm loãng tiêu điểm chính của từng màn hình.
- Màn hình đăng nhập có hai khối ngang bằng nhau về mặt kích thước thị giác, trong khi mục tiêu thật của người dùng chỉ là đăng nhập hoặc chuyển vai trò. Vì vậy khối giới thiệu bên trái đôi lúc cạnh tranh sự chú ý với form bên phải.
- Màn hình đặt lịch khám đang chứa cả gợi ý cơ sở y tế, thông tin phiên tư vấn gần nhất, lựa chọn hiện tại, khung giờ và CTA xác nhận. Khi mọi thứ đều được đặt trong các khối card tương tự nhau, thứ tự đọc trở nên hơi bằng phẳng.
- Một số màu nhấn dùng khá đồng đều giữa các trạng thái. Khi nhiều phần cùng xanh tím hoặc xanh dương nhạt, hệ thống phân cấp nhìn nhanh chưa đủ mạnh để tách “điều quan trọng nhất” ra khỏi “thông tin hỗ trợ”.

### Điểm xuất sắc về điều hướng tiêu điểm nhìn
- Màn hình tư vấn chính định hướng chú ý rất tốt. Phần hội thoại ở trung tâm là vùng hoạt động chính, còn cột phụ bên phải gom thông tin đã thu thập, cảnh báo và gợi ý tiếp theo. Mắt người dùng gần như luôn đi đúng quỹ đạo: hỏi, đọc phản hồi, xem tóm tắt, rồi bấm hành động kế tiếp.
- Trang lịch sử tư vấn cũng có cách dẫn mắt hiệu quả. Danh sách bên trái đóng vai trò điều hướng, còn khung nội dung bên phải là đích xem chi tiết. Cách chia này rất hợp với nhiệm vụ rà soát quá khứ và đi sâu vào từng phiên tư vấn.
- Trang hồ sơ sức khỏe dùng nhãn, ô giá trị và nhóm thông tin theo khối nên người dùng dễ phân biệt dữ liệu cá nhân, bệnh nền, dị ứng và thuốc đang dùng. Đây là dạng phân cấp thông tin dễ quét, ít gây mệt mắt.
- Màn hình landing ban đầu cũng có điểm sáng về hướng nhìn: ô nhập chat ở giữa, nút đăng nhập ở trên và các gợi ý câu hỏi sẵn ở phía dưới. Bố cục này đưa người dùng đi từ tò mò sang hành động khá mạch lạc.
- Về tổng thể, sản phẩm đang làm tốt việc dẫn mắt bằng bố cục hai cột và card tách lớp. Phần còn thiếu không phải là trật tự thị giác, mà là mức nhấn mạnh rõ hơn cho hành động chính ở từng màn hình.

### Kết luận ngắn
- Giao diện của vai trò người cần tư vấn có nền tảng tốt: sạch, dễ đọc, thân thiện và hợp với ngữ cảnh chăm sóc sức khỏe ban đầu.
- Điểm cần cải thiện nhiều nhất là trạng thái phản hồi của tương tác và độ rõ của phân cấp hành động. Nếu bổ sung loading, success, error, disabled state và một hệ nhấn thị giác mạnh hơn cho CTA chính, trải nghiệm sẽ “ra sản phẩm” hơn nhiều.
