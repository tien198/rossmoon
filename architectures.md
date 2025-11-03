# Kiến trúc Phân lớp (Layered / N-Tier Architecture)
logical layers - physical tiers


# Kiến trúc Sạch (Clean Architecture)
https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html







# 📂 Cấu Trúc Dự Án Mẫu (MVC + N-Layer)

Kiến trúc N-Layer được triển khai bằng cách chia thành các thư mục/project riêng biệt, trong đó:
- Các lớp ngoài chỉ được phép phụ thuộc vào các lớp bên trong.
- ProjectName.Domain là lõi, không phụ thuộc vào bất kỳ lớp nào khác.

---

## 1. Cấu trúc tổng quan (Solution Level)

ProjectName.sln ├── ProjectName.Web (Lớp Trình bày - Presentation Layer) ├── ProjectName.Application (Lớp Nghiệp vụ Cấp Ứng dụng) ├── ProjectName.Domain (Lớp Miền - Lõi Nghiệp vụ) └── ProjectName.Infrastructure (Lớp Hạ tầng - Truy cập Dữ liệu)


---

## 2. Chi tiết từng Lớp (Layer)

### 2.1. ProjectName.Web (Presentation Layer / MVC)

> **Trách nhiệm:** Xử lý các yêu cầu HTTP, ánh xạ dữ liệu đầu vào và đầu ra, gọi Service. Đây là nơi mô hình **MVC (Controller và View)** hoạt động.
>
> **Phụ thuộc:** → ProjectName.Application

* `Controllers/`
    * └── `ProductsController.cs` (Nhận Request, gọi Service từ ProjectName.Application, trả về Response/View)
* `Views/`
    * └── `Products/` (Thư mục cho các View của Product)
        * └── `Index.cshtml` (Giao diện hiển thị danh sách sản phẩm)
* `Models/` (Thường chứa các **ViewModel** chuyên biệt cho View)
* `Program.cs` / `Startup.cs` (Cấu hình ứng dụng, Routing, Dependency Injection)

### 2.2. ProjectName.Application (Application Layer / Service)

> **Trách nhiệm:** Chứa logic cấp ứng dụng (Use Cases), quản lý Transaction và định nghĩa **Interfaces (hợp đồng)** cho các Repository. Đây là **Service Layer**.
>
> **Phụ thuộc:** → ProjectName.Domain, định nghĩa Interfaces cho ProjectName.Infrastructure.

* `Services/` (Lớp triển khai logic nghiệp vụ)
    * ├── `ProductService.cs` (Chứa logic: Ví dụ: `CalculateDiscountedPrice()`, `PlaceOrder()`)
* `Interfaces/` (Các hợp đồng)
    * └── `IProductService.cs` (Interface Service)
    * └── `IProductRepository.cs` (Interface Repository: Định nghĩa các hàm truy cập DB)
* `Features/` (Thường dùng trong mô hình MediatR/CQRS)
* `DTOs/` (Data Transfer Objects)
    * ├── `CreateProductDto.cs` (Được truyền từ Controller vào Service)
    * └── `ProductDetailDto.cs` (Được trả từ Service ra Controller)

### 2.3. ProjectName.Domain (Domain Layer / Core)

> **Trách nhiệm:** Chứa các đối tượng nghiệp vụ cốt lõi, quy tắc và hành vi (Entities). Đây là **lớp độc lập nhất**.
>
> **Phụ thuộc:** **Không có** (zero dependency).

* `Entities/`
    * └── `Product.cs` (Đối tượng Domain cốt lõi, chỉ chứa thuộc tính và hành vi nghiệp vụ)
* `ValueObjects/`
    * └── `Money.cs` (Các đối tượng giá trị không có ID)
* `Enums/`
* `Exceptions/`
    * └── `DomainException.cs` (Các ngoại lệ nghiệp vụ)

### 2.4. ProjectName.Infrastructure (Infrastructure Layer / Data Access)

> **Trách nhiệm:** Triển khai cụ thể các hợp đồng (Interfaces) đã định nghĩa trong `ProjectName.Application` để giao tiếp với thế giới bên ngoài (Database, API bên thứ ba).
>
> **Phụ thuộc:** → ProjectName.Domain, → ProjectName.Application, và các Framework DB (EF Core, Dapper, v.v.).

* `Data/`
    * └── `AppDbContext.cs` (Database Context/Session)
    * └── `Migrations/`
* `Repositories/`
    * └── `ProductRepository.cs` (Triển khai **IProductRepository** để truy vấn DB)
* `ExternalServices/`
    * └── `EmailServiceProvider.cs` (Kết nối API gửi email)
* `Configuration/` (Cấu hình ánh xạ DB cho Entities)

---

Cấu trúc này đảm bảo rằng logic nghiệp vụ cốt lõi (Domain) được bảo vệ và độc lập với các chi tiết kỹ thuật (Database, UI).

Bạn có muốn tôi lấy một ví dụ cụ thể về cách dữ liệu đi qua các lớp này trong một quy trình "Thêm sản phẩm mới" không?