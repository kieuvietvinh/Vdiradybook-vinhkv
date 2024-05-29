import React from "react";
import VButton from "../core/v-button";
import router from "next/router";
import Link from "next/link";

const RegisterSticker = () => {
  return (
    <div>
      <div className="flex  justify-center">
        <div className="max-w-[400px] bg-white rounded-2xl p-6 shadow shadow-[#00000026]">
          <div className="justify-center flex">
            <img src="/images/firework.svg" alt="" />
          </div>
          <div className="text-center pt-3">
            <h1 className="font-semibold text-2xl text-[#1F1F1F] leading-[29.05px]">
              Chúc mừng
            </h1>
            <p className="font-normal text-sm text[#1F1F1F] leading-[16.94px] py-2">
              Đăng ký bộ sticker thành công! Vui lòng chờ chúng tôi duyệt trong
              vòng 24 giờ.
            </p>
          </div>
          <div>
            <VButton
              onClick={() => router.back()}
              className="rounded-[18px] bg-[#4284f3] px-4 flex items-center gap-2 h-[36px] w-full"
            >
              <Link
                href="/home"
                className="whitespace-nowrap text-sm text-white font-medium leading-[16.94px]"
              >
                Về trang chủ
              </Link>
            </VButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSticker;
