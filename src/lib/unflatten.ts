type AnyObject = Record<string, any>;

export function unflatten<T extends AnyObject>(flat: AnyObject): T {
  const result: AnyObject = {}; // Object kết quả sau khi unflatten

  // Regex dùng để tách key theo dấu "." và "[]"
  // Ví dụ: "medias[0].url" => ["medias", 0, "url"]

  // Regex này tìm lần lượt các phần trong key:
  // - ([^\.\[\]]+) : khớp với chuỗi ký tự không chứa '.', '[' hoặc ']' → dùng cho tên thuộc tính (vd: "medias", "url")
  // - \[(\d+)\]    : khớp với số nằm trong ngoặc vuông (vd: [0], [1]) → dùng cho chỉ số mảng
  // Cờ 'g' (global) giúp regex nhớ vị trí và tiếp tục tìm phần tiếp theo mỗi lần gọi exec()
  const tokenRe = /([^\.\[\]]+)|\[(\d+)\]/g;

  // Duyệt qua từng key trong object phẳng
  for (const key in flat) {
    if (!Object.prototype.hasOwnProperty.call(flat, key)) continue;
    const value = flat[key]; // Lấy giá trị tương ứng với key

    // Mảng parts sẽ lưu các phần tử đã tách ra từ key
    // Ví dụ key = "medias[0].url" => parts = ["medias", 0, "url"]
    const parts: (string | number)[] = [];

    // Biến m sẽ chứa kết quả match mỗi lần gọi regex.exec()
    let m: RegExpExecArray | null;

    // Chạy regex nhiều lần để lấy hết các phần
    while ((m = tokenRe.exec(key)) !== null) {
      // Nếu m[1] có giá trị → đây là tên thuộc tính bình thường (vd: "medias" hoặc "url")
      if (m[1] !== undefined)
        parts.push(m[1]); // phần text (vd: "a", "b")
      // Ngược lại, nếu m[2] có giá trị → đây là chỉ số mảng (vd: 0, 1, 2)
      else
        parts.push(Number(m[2]));            // phần số trong [] (vd: 0, 1)
    }

    // Biến tạm trỏ vào vị trí hiện tại trong object kết quả
    let curr: any = result;

    // Duyệt qua từng phần trong "parts"
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];                    // phần hiện tại
      const isLast = i === parts.length - 1;    // có phải phần cuối cùng?
      const nextPart = parts[i + 1];            // phần tiếp theo (để đoán kiểu)

      // Nếu phần hiện tại là "chuỗi" (vd: "attributes" hoặc "name")
      if (typeof part === 'string') {
        if (isLast) {
          // Nếu là phần cuối -> gán giá trị trực tiếp
          curr[part] = value;
        } else {
          // Nếu chưa phải phần cuối -> đảm bảo có object hoặc array con
          if (!(part in curr) || typeof curr[part] !== 'object') {
            // Nếu phần tiếp theo là số -> tạo mảng []; ngược lại -> tạo object {}
            curr[part] = typeof nextPart === 'number' ? [] : {};
          }
          // Di chuyển con trỏ xuống cấp con
          curr = curr[part];
        }
      }

      // Nếu phần hiện tại là "số" (chỉ số mảng)
      else {
        // Đảm bảo curr là mảng, nếu không -> chuyển thành mảng
        if (!Array.isArray(curr)) {
          const newArr: any[] = [];
          // (Trường hợp đặc biệt nếu curr ban đầu là object có sẵn thuộc tính)
          for (const k in curr) {
            if (Object.prototype.hasOwnProperty.call(curr, k)) {
              (newArr as any)[k] = (curr as any)[k];
            }
          }
          curr = newArr;
        }

        if (isLast) {
          // Nếu là phần cuối -> gán giá trị
          curr[part] = value;
        } else {
          // Nếu chưa đến cuối -> tạo object hoặc mảng con tiếp theo
          if (curr[part] == null || typeof curr[part] !== 'object') {
            curr[part] = typeof nextPart === 'number' ? [] : {};
          }
          // Di chuyển con trỏ xuống cấp con
          curr = curr[part];
        }
      }
    }
  }

  // Trả về object kết quả đã được unflatten
  return result as T;
}
