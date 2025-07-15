import React from "react";
import "../../../styles/css/elements/BMI-form.css";
import Image from "next/image";
import Title1 from "../Title1";

const Home_section10 = () => {
  return (
    <>
      <section className="section_two">
        <div className="vjl-cntr">
          <div className="vjl-row">
            <div className="vjl-md-12">
              <Title1
                title="Calculate Your Health Metrics Instantly!"
                link="/BMI-calculator"
              />
            </div>
          </div>

          <div className="vjl-row">
            <div className="vjl-md-5">
              <div className="CalcFrm_wr">
                <div className="CalcFrm_cn">
                  <div className="CalcFrm_hd">
                    <div className="CalcFrm_hd-ul">
                      <div className="CalcFrm_hd-li">
                        <a href="#" className="CalcFrm_hd-lk CalcFrm_hd-act">
                          BMI Calculator
                        </a>
                      </div>
                      <div className="CalcFrm_hd-li">
                        <a href="#" className="CalcFrm_hd-lk">
                          Pregnancy Calculator
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="BMIFrm_wr">
                    <div className="BMIFrm_cn">
                      <div className="vjl-row">
                        <div className="vjl-md-12">
                          <div className="CalcFrm-ttl">Gender</div>
                        </div>
                        <div className="vjl-md-12">
                          <div className="BMIFrm_btn">
                            <input
                              type="radio"
                              id="gender"
                              name="gender"
                              className="BMIFrm_btn-inp"
                            />
                            <label htmlFor="gender">
                              <svg className="vj_icn vj-male">
                                <use xlinkHref="#vj-male"></use>
                              </svg>{" "}
                              Male
                            </label>
                          </div>

                          <div className="BMIFrm_btn">
                            <input
                              type="radio"
                              id="gender"
                              name="gender"
                              className="BMIFrm_btn-inp"
                            />
                            <label htmlFor="gender">
                              <svg className="vj_icn vj-Female">
                                <use xlinkHref="#vj-Female"></use>
                              </svg>{" "}
                              Female
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="vjl-row">
                        <div className="vjl-md-6">
                          <div className="CalcFrm-ttl">Age</div>
                          <div className="BMIFrm_txt-fld">
                            <input
                              type="text"
                              id="age"
                              name="age"
                              className="BMIFrm_inp"
                            />
                          </div>

                          <div className="CalcFrm-err">
                            Please insert this field
                          </div>
                        </div>

                        <div className="vjl-md-6">
                          <div className="CalcFrm-ttl">Weight</div>
                          <div className="BMIFrm_txt-fld">
                            <input
                              type="text"
                              id="weight"
                              name="weight"
                              className="BMIFrm_inp"
                            />
                            <div className="BMIFrm_txt-prmt">Kg</div>
                          </div>
                          <div className="CalcFrm-err">
                            Please insert this field
                          </div>
                        </div>
                      </div>

                      <div className="vjl-row">
                        <div className="vjl-md-6">
                          <div className="CalcFrm-ttl">Height</div>
                          <div className="BMIFrm_txt-fld">
                            <input
                              type="text"
                              id="age"
                              name="age"
                              className="BMIFrm_inp"
                            />
                            <div className="BMIFrm_txt-prmt">Feet</div>
                          </div>
                        </div>

                        <div className="vjl-md-6">
                          <div className="CalcFrm-ttl">&nbsp;</div>
                          <div className="BMIFrm_txt-fld">
                            <input
                              type="text"
                              id="weight"
                              name="weight"
                              className="BMIFrm_inp"
                            />
                            <div className="BMIFrm_txt-prmt">Inches</div>
                          </div>
                        </div>

                        <div className="vjl-md-12">
                          <a href="#" className="BMIFrm_swth">
                            Switch To Centimeter
                          </a>
                        </div>
                      </div>
                      <div className="vjl-row">
                        <div className="vjl-md-12">
                          <button type="submit" className="BMIFrm_sub-btn">
                            Calculate{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="vjl-md-7">
              <div className="BMIChrt_wr">
                <div className="BMIChrt_cn">
                  <Image
                    src="https://drop.ndtv.com/test/hk-ndtv/Ndtv-doctor/v2.3/images/doctor/bmi-tool.jpg"
                    alt=""
                    width={520}
                    height={418}
                    className="BMIChrt_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_section10;
