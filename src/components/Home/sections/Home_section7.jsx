import React from "react";
import "../../../Styles/css/elements/baby-name-finder.css";
import Title1 from "../Title1";

const Home_section7 = () => {
  return (
    <>
      <section className="section_two pb-0">
        <div className="Bg-cl2">
          <div className="vjl-cntr">
            <div className="vjl-row">
              <div className="vjl-md-12">
                <Title1 title="Baby Name Finder" link="/baby-name-finder" />{" "}
                <svg className="vj_icn vj-smiley1 smiley-icn">
                  <use xlinkHref="#vj-smiley1"></use>
                </svg>
              </div>
            </div>
            <div className="vjl-row">
              <div className="vjl-md-12">
                <div className="BbNmFnd_wr">
                  <div className="BbNmFnd_cn">
                    <div className="BbNmGnd_wr">
                      <div className="BbNmFnd_ttl">Gender</div>

                      <div className="BbNmGnd_btn-wr">
                        <div className="BbNmGnd_btn">
                          <input
                            type="radio"
                            id="test1"
                            name="radio-group"
                            defaultChecked
                          />
                          <label htmlFor="test1">Girl</label>
                        </div>

                        <div className="BbNmGnd_btn">
                          <input type="radio" id="test2" name="radio-group" />
                          <label htmlFor="test2">Boy</label>
                        </div>

                        <div className="BbNmGnd_btn">
                          <input type="radio" id="test3" name="radio-group" />
                          <label htmlFor="test3">All</label>
                        </div>
                      </div>
                    </div>

                    <div className="BbNmRgn_wr">
                      <div className="BbNmFnd_ttl">Religion</div>

                      <div className="BbNmRgn_btn">
                        <input
                          type="radio"
                          id="hindu"
                          name="religion"
                          className="BbNmRgn-inp"
                          defaultChecked
                        />
                        <label htmlFor="hindu">Hindu</label>
                      </div>

                      <div className="BbNmRgn_btn">
                        <input
                          type="radio"
                          id="Muslim"
                          name="religion"
                          className="BbNmRgn-inp"
                        />
                        <label htmlFor="Muslim">Muslim</label>
                      </div>

                      <div className="BbNmRgn_btn">
                        <input
                          type="radio"
                          id="hindu"
                          name="religion"
                          className="BbNmRgn-inp"
                        />
                        <label htmlFor="Sikh">Sikh</label>
                      </div>

                      <div className="BbNmRgn_btn">
                        <input
                          type="radio"
                          id="Christian"
                          name="religion"
                          className="BbNmRgn-inp"
                        />
                        <label htmlFor="Christian">Christian</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="vjl-row">
              <div className="vjl-md-12">
                <div className="BbNm_ltr">
                  <ul className="BbNm_ltr-ul">
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        A
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        B
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        C
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        D
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        E
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        F
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        G
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        H
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        I
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        J
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        K
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        L
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        M
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        N
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        O
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        P
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        Q
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        R
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        S
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        T
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        U
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        V
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        W
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        X
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        Y
                      </a>
                    </li>
                    <li className="BbNm_ltr-li">
                      <a href="#" className="BbNm_ltr-lk">
                        Z
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="vjl-row">
              <div className="vjl-md-12 BbNm_sub-wr">
                <button type="submit" className="BbNm_sub-btn" disabled="">
                  Find Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_section7;
