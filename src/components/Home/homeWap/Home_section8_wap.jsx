import React from "react";
import Title1 from "../Title1";
import { FaPlay } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import "../../../Styles/css/wap-elements/full-rgt-hrscroll.css";

// This component now receives 'videos' and 'error' as props
const Home_section8_wap = ({ videos, error }) => {
  // Add this function for Time Stam convert in miniutes
  const formatDuration = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Add a leading zero if seconds is a single digit
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  };

  // 'loading' state is now handled by the parent Server Component
  if (error) {
    return (
      <section className="section_two">
        <div className="Bg-cl3">
          <div className="vjl-cntr err">Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section_two">
        <div className="Bg-cl3">
          <div className="vjl-cntr">
            <div className="vjl-row">
              <div className="vjl-md-12">
                <Title1 title="Health Videos" link="/video" />
              </div>

              <div className="VDRes_HrSrl-cnt">
                <ul className="HrSrl-RtFl_ul HrSrl-RtFl_ul5">
                  {videos &&
                    videos.map((video) => (
                      <li className="HrSrl-RtFl_li" key={video.id}>
                        <div className="crd-b">
                          <Link className="crd_img" href={video.link}>
                            <div className="img-gr img-gr_a">
                              <Image
                                className="lz_img crd_img-full"
                                alt={video.title}
                                src={video["media:thumbnail"]}
                                width={324}
                                height={188}
                                priority
                              />
                            </div>
                            <div className="VdTgIm-Crd">
                              <div className="VdTgIm-Crd_lt">
                                <span className="VdTgIm-Crd_vd">
                                  <FaPlay className="vj_play" />{" "}
                                  {formatDuration(video["media:duration"])}
                                </span>
                              </div>
                            </div>
                          </Link>
                          <div className="crd_txt-wrp crd-b_Txbg1">
                            <h3 className="crd_D-ttl2">
                              <Link className="crd_lnk" href={video.link}>
                                {video.title}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_section8_wap;
