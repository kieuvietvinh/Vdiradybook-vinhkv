import React, { useState } from "react";
import Input from "../core/v-input";
import VDropdownModal from "../core/v-dropdown";
import VButton from "../core/v-button";
import RegisterSticker from "../RegisterSticker/RegisterSticker";

const Stickers = (props: any) => {
  const [mediaFile, setMediaFile] = useState<any>(null);
  const [previewUrl, setPreviewUrl] = useState<any>(null);
  const [register, setRegister] = useState(true);

  const handleMediaUpload = (event: any) => {
    const file = event.target.files[0];
    console.log("file :", file);
    setMediaFile(file);
    setPreviewUrl(URL?.createObjectURL(file));
  };
  const [sticker, setSticker] = useState();
  const handleClick = (key: any) => {
    setSticker(key);
  };
  const handleRegister = () => {
    setRegister(false);
  };

  return (
    <div className="">
      <div className=" bg-[#0053E0CC] absolute top-0 w-[100vw] h-[100vh]  ">
        <img
          className="object-cover w-[100vw] h-[100vh] "
          src="/images/stacker.svg"
          alt=""
        />
      </div>
      <div className="mx-auto max-w-[494px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-center">
          <h1 className="font-semibold text-3xl text-white leading-[36.31px] whitespace-nowrap">
            Đăng ký Sticker
          </h1>
          <p className="font-semibold text-base text-white leading-[19.36px] py-4">
            Bạn muốn đăng tải bộ sticker của mình trên VdiaryBook Sticker? Hãy
            đăng ký ngay với VdiaryBook nhé!
          </p>
        </div>
        {register ? (
          <>
            <div className="flex  justify-center">
              <div className="max-w-[416px] w-full bg-white rounded-lg p-4 shadow shadow-[#00000026]">
                <div className="mb-4">
                  <label
                    form="large-input"
                    className="block  mb-2 text-sm font-medium text-[#1F1F1F] leading-[16.94px]"
                  >
                    Tên bộ stickers
                    <span className="text-[#DD2B17] pl-1">*</span>
                  </label>
                  <Input className="h-[38px] rounded-lg px-3 outline-none border-[#CAD0D7] w-full  " />
                </div>
                <div className="mb-4">
                  <label
                    form="default-input"
                    className="block mb-2 text-sm font-medium text-[#1F1F1F] leading-[16.94px]"
                  >
                    Danh mục
                  </label>
                  <VDropdownModal
                    className="w-full !top-8"
                    menu={[
                      {
                        key: "option 1",
                        onClick: () => handleClick("option 1"),
                      },
                      {
                        key: "option 2",
                        onClick: () => handleClick("option 2"),
                      },
                      {
                        key: "option 3",
                        onClick: () => handleClick("option 3"),
                      },
                    ]}
                    menuclassName="w-full"
                    buttonclassName="w-full"
                    label={
                      <div className="justify-between h-[38px] max-w-[400px] flex items-center text-xs px-2 font-normal leading-[14.52px] text-[#636363] rounded-lg  outline-none border border-[#CAD0D7] ">
                        {sticker || "Chọn danh mục"}
                        <img className="" src="/images/dropdown.svg" alt="" />
                      </div>
                    }
                  />
                </div>
                <div>
                  <label
                    form="small-input"
                    className="block mb-2 text-sm font-medium text-[#1F1F1F] leading-[16.94px]"
                  >
                    Ký tự nhận diện
                  </label>
                  <Input className="h-[38px] rounded-lg px-3 outline-none border-[#CAD0D7] w-full" />
                </div>
                <div className="pt-3">
                  <label className="text-[#1F1F1F]  text-sm font-medium leading-[16.94px]">
                    Hình minh họa cho sticker
                  </label>
                  <p className="pt-1 text-xs font-normal leading-[14.52px] italic text-[#1F1F1F]">
                    Định dạng ảnh hoặc video, dung lượng dưới 1Mb
                  </p>
                </div>

                <div className="py-2 ">
                  <div className="bg-white relative ">
                    {mediaFile ? (
                      <div>
                        {previewUrl && (
                          <div>
                            {mediaFile?.type.startsWith("image/") ? (
                              <img
                                src={previewUrl}
                                alt="Preview"
                                className="max-w-[200px] max-h-[200px] rounded-lg w-full"
                              />
                            ) : (
                              <video
                                controls
                                className="max-w-[200px] max-h-[200px] rounded-lg"
                              >
                                <source
                                  src={previewUrl}
                                  type={mediaFile?.type}
                                />
                              </video>
                            )}
                            <label
                              htmlFor="media-upload"
                              className="bg-[#000000B2] w-[184px] ml-2 flex justify-center absolute bottom-2 text-white font-medium py-2 px-4 rounded-lg cursor-pointer"
                            >
                              Thay đổi
                            </label>
                          </div>
                        )}
                      </div>
                    ) : (
                      <label
                        htmlFor="media-upload"
                        className="bg-[#000000B2] w-[184px] flex justify-center text-white font-medium py-2 px-4 rounded-lg cursor-pointer"
                      >
                        Tải lên
                      </label>
                    )}
                    <input
                      id="media-upload"
                      type="file"
                      className="hidden"
                      onChange={handleMediaUpload}
                    />
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-[3px] "
                  />
                  <label
                    form="link-checkbox"
                    className="ms-2 text-sm font-normal text-[#1F1F1F] "
                  >
                    Chấp nhận
                    <a
                      href="#"
                      className="text-[#4284F3] hover:underline text-sm font-medium pl-1"
                    >
                      Điều khoản sử dụng
                    </a>
                  </label>
                </div>
                <div>
                  <VButton
                    onClick={handleRegister}
                    className="rounded-[18px] bg-[#4284f3] px-4 flex items-center gap-2 h-[36px] w-full"
                  >
                    <img src="/images/check.svg" alt="" />
                    <p className="whitespace-nowrap text-sm text-white font-medium leading-[16.94px]">
                      Đăng kí
                    </p>
                  </VButton>
                </div>
              </div>
            </div>
          </>
        ) : (
          <RegisterSticker />
        )}
      </div>
    </div>
  );
};

export default Stickers;
