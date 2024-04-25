import React, { useState, useEffect } from "react";
import axios from "axios";

const Thu = () => {
  const [provinces, setProvinces] = useState<any>([]);
  const [districts, setDistricts] = useState<any>([]);
  const [wards, setWards] = useState<any>([]);
  console.log("wards :", wards);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://partner.viettelpost.vn/v2/categories/listProvinceById?provinceId="
      )
      .then((response) => {
        console.log("response :", response);
        setProvinces(response.data);
        console.log("setProvinces :", setProvinces);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      axios
        .get(
          `https://partner.viettelpost.vn/v2/categories/listDistrict?provinceId=1`
        )
        .then((response) => {
          setDistricts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setDistricts([]);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      axios
        .get(
          `https://partner.viettelpost.vn/v2/categories/listWards?districtId=1`
        )
        .then((response) => {
          setWards(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setWards([]);
    }
  }, [selectedDistrict]);

  return (
    <div>
      <select
        value={selectedProvince}
        onChange={(event) => setSelectedProvince(event.target.value)}
      >
        {provinces.map((province: any) => (
          <option key={province.PROVINCE_ID} value={province.PROVINCE_ID}>
            {province.PROVINCE_NAME}
          </option>
        ))}
      </select>

      <select
        value={selectedDistrict}
        onChange={(event) => setSelectedDistrict(event.target.value)}
        disabled={!selectedProvince}
      >
        {districts.map((district: any) => (
          <option key={district.DISTRICT_ID} value={district.DISTRICT_ID}>
            {district.WARDS_NAME}
          </option>
        ))}
      </select>

      <select
        value={selectedWard}
        onChange={(event) => setSelectedWard(event.target.value)}
        disabled={!selectedWard}
      >
        {wards.map((ward: any) => (
          <option key={ward.WARDS_ID} value={ward.WARDS_ID}>
            {ward.WARDS_NAME}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Thu;
