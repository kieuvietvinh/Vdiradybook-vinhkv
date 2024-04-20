import { useState } from "react";

const quotati = [
  {
    id: 1,
    tabel:
      "1. Nay lên voi, mai xuống ngựa. Đời lắm biến số, đừng kiêu ngạo tự mãn, có ngày, bạn sẽ phải trả giá",
  },
  {
    id: 2,
    tabel:
      "2. Sách hay không đánh giá qua trang bìa. Giàu nghèo cần phải có thời gian. Giàu đến mấy mà ngồi không hưởng lợi cũng có ngày nghèo khổ mà thôi.",
  },
  {
    id: 3,
    tabel:
      "3. Ai trong đời cũng từng trải qua giai đoạn khó khăn, không một xu dính túi. Nghèo một chút để biết ai là bạn, ai là bè.",
  },
  {
    id: 4,
    tabel:
      "4. Không nên đánh giá người khác tốt xấu thế nào, bởi vì tốt xấu của họ không ảnh hưởng tới miếng cơm manh áo của bạn.",
  },
  {
    id: 5,
    tabel:
      "5. Đừng tự mãn quá sớm. Bạn chỉ là những hạt cát trong sa mạc, những ngôi sao nhỏ bé trong bầu trời rộng lớn mà thôi.",
  },
  {
    id: 6,
    tabel:
      "6. Thế giới luôn thay đổi, con người cũng luôn đổi thay. Đừng có chút thành quả đã dương dương tự đắc, ngủ quên trên chiến thắng khi cả xã hội luôn tiến về phía trước.",
  },
  {
    id: 7,
    tabel:
      "7. Muốn cuộc đời tốt đẹp, hãy giảm bớt “cái tôi” cao ngạo và sự khinh thường.",
  },
];

const Quotations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto w-full max-w-[1024px] font-inter">
      <ul className="bg-white rounded-lg relative ">
        <li
          className="cursor-pointer px-4 py-2 font-normal text-xl"
          onClick={toggleMenu}
        >
          <a>Đừng bao giờ xem thường người khác</a>
          <img
            className={`absolute top-3 right-2  ${
              isOpen
                ? "transform rotate-90 delay-75 decoration-slate-100"
                : "transform -rotate-90"
            }`}
            src="/image-left/muiten.png"
            alt=""
          />
        </li>

        {isOpen && (
          <ul className="ml-4 ">
            {quotati.map((quota) => (
              <li key={quota.id} className="p-2 font-normal text-sm">
                {quota.tabel}
              </li>
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Quotations;
