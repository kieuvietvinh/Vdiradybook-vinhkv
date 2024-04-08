import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left  max-w-4xl  mx-auto w-full mt-5 ml-5 font-roboto">
      <div className="relative">
        <button
          type="button"
          className="inline-flex  w-full rounded-t-sm border border-gray-300  px-5 py-4 bg-white text-sm font-normal text-[#3b77db]  "
          onClick={toggleDropdown}
        >
          {selectedOption
            ? selectedOption
            : "ĐỪNG VỘI KHINH THƯỜNG NGƯỜI KHÁC!"}
          <img
            className="absolute right-5"
            src="https://vdiarybook.com/assets/icons/default/dropdown.svg"
            alt=""
          />
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 w-auto rounded-b-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              1. Nay lên voi, mai xuống ngựa. Đời lắm biến số, đừng kiêu ngạo tự
              mãn, có ngày, bạn sẽ phải trả giá.
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              2. Sách hay không đánh giá qua trang bìa. Giàu nghèo cần phải có
              thời gian. Giàu đến mấy mà ngồi không hưởng lợi cũng có ngày nghèo
              khổ mà thôi.
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              3. Ai trong đời cũng từng trải qua giai đoạn khó khăn, không một
              xu dính túi. Nghèo một chút để biết ai là bạn, ai là bè.
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              4. Không nên đánh giá người khác tốt xấu thế nào, bởi vì tốt xấu
              của họ không ảnh hưởng tới miếng cơm manh áo của bạn.
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              5. Đừng tự mãn quá sớm. Bạn chỉ là những hạt cát trong sa mạc,
              những ngôi sao nhỏ bé trong bầu trời rộng lớn mà thôi.
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              6. Thế giới luôn thay đổi, con người cũng luôn đổi thay. Đừng có
              chút thành quả đã dương dương tự đắc, ngủ quên trên chiến thắng
              khi cả xã hội luôn tiến về phía trước.
            </p>
            <p
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              7. Muốn cuộc đời tốt đẹp, hãy giảm bớt “cái tôi” cao ngạo và sự
              khinh thường.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
