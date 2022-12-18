import React from "react";

import "../styles/map.css";
import "../styles/home.scss";
import top1 from "../images/Ornament_01.webp";
import bot1 from "../images/Ornament_02.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountdownTimer from "../components/CountdownTimer";
import couple_02 from "../images/Couple_02.webp";
import pot from "../images/Logo_01.webp";

function Home() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const removeLoading = () => {
    var x = document.querySelector(".loader-map");
    var footer = document.querySelector("footer");
    var header = document.querySelector("header");
    var main = document.querySelector("main");
    var body = document.querySelector("body");
    x.style.display = "none";
    footer.style.opacity = 1;
    main.style.opacity = 1;
    header.style.opacity = 1;
    body.style.backgroundImage = "none";
    body.style.overflow = "scroll";
    body.style.overflowX = "hidden";
    body.style.position = "relative";
  };
  return (
    <>
      <div className="loader-map">
        <div className="main-content">
          <div className="map-base">
            <div className="footsteps footsteps-1">
              <div className="footstep left" />
              <div className="footstep right" />
              <div className="scroll-name">
                <p>Alessandro</p>
              </div>
            </div>
            <div className="footsteps footsteps-2">
              <div className="footstep left" />
              <div className="footstep right" />
              <div className="scroll-name">
                <p>Marta</p>
              </div>
            </div>
            <div className="map-flap flap--1">
              <div className="map-flap__front" />
              <div className="map-flap__back" />
            </div>
            <div className="map-flap flap--2">
              <div className="map-flap__front" />
              <div className="map-flap__back" />
            </div>
            <div className="map-side side-1">
              <div
                className="front"
                style={{
                  background:
                    'url("https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/8.png")',
                }}
              />
              <div className="back" />
            </div>
            <div className="map-side side-2">
              <div
                className="front"
                style={{
                  background:
                    'url("https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/18.png")',
                }}
              />
              <div className="back" />
            </div>
            <div className="map-side side-3">
              <div
                className="front"
                style={{
                  background:
                    'url("https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/7.png")',
                }}
              />
              <div className="back" />
            </div>
            <div className="map-side side-4">
              <div
                className="front"
                style={{
                  background:
                    'url("https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/10.png")',
                }}
              />
            </div>
            <div className="map-side side-5">
              <div
                className="front"
                style={{
                  background:
                    'url("https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/6.png")',
                }}
              />
              <div className="back" />
            </div>
            <div className="map-side side-6">
              <div
                className="front"
                style={{
                  background:
                    'url("https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/11.png")',
                }}
              />
              <div className="back" />
            </div>
          </div>
        </div>
        <div className="ldng-btn-area">
          <button
            onClick={() => {
              removeLoading();
            }}
            className="ldng-btn"
          >
            Home
          </button>
        </div>
        <div id="ui">
          <div className="track track_1">
            <div className="foot left">
              <div className="foot_claw" />
              <div className="foot_claw" />
              <div className="foot_claw" />
            </div>
            <div className="foot right">
              <div className="foot_claw" />
              <div className="foot_claw" />
              <div className="foot_claw" />
            </div>
            <div className="track track_2">
              <div className="foot left">
                <div className="foot_claw" />
                <div className="foot_claw" />
                <div className="foot_claw" />
              </div>
              <div className="foot right">
                <div className="foot_claw" />
                <div className="foot_claw" />
                <div className="foot_claw" />
              </div>
              <div className="track track_3">
                <div className="foot left">
                  <div className="foot_claw" />
                  <div className="foot_claw" />
                  <div className="foot_claw" />
                </div>
                <div className="foot right">
                  <div className="foot_claw" />
                  <div className="foot_claw" />
                  <div className="foot_claw" />
                </div>
                <div className="track track_4">
                  <div className="foot left">
                    <div className="foot_claw" />
                    <div className="foot_claw" />
                    <div className="foot_claw" />
                  </div>
                  <div className="foot right">
                    <div className="foot_claw" />
                    <div className="foot_claw" />
                    <div className="foot_claw" />
                  </div>
                  <div className="track track_5">
                    <div className="foot left">
                      <div className="foot_claw" />
                      <div className="foot_claw" />
                      <div className="foot_claw" />
                    </div>
                    <div className="foot right">
                      <div className="foot_claw" />
                      <div className="foot_claw" />
                      <div className="foot_claw" />
                    </div>
                    <div className="track track_6">
                      <div className="foot left">
                        <div className="foot_claw" />
                        <div className="foot_claw" />
                        <div className="foot_claw" />
                      </div>
                      <div className="foot right">
                        <div className="foot_claw" />
                        <div className="foot_claw" />
                        <div className="foot_claw" />
                      </div>
                      <div className="track track_7">
                        <div className="foot left">
                          <div className="foot_claw" />
                          <div className="foot_claw" />
                          <div className="foot_claw" />
                        </div>
                        <div className="foot right">
                          <div className="foot_claw" />
                          <div className="foot_claw" />
                          <div className="foot_claw" />
                        </div>
                        <div className="track track_8">
                          <div className="foot left">
                            <div className="foot_claw" />
                            <div className="foot_claw" />
                            <div className="foot_claw" />
                          </div>
                          <div className="foot right">
                            <div className="foot_claw" />
                            <div className="foot_claw" />
                            <div className="foot_claw" />
                          </div>
                          <div className="track track_9">
                            <div className="foot left">
                              <div className="foot_claw" />
                              <div className="foot_claw" />
                              <div className="foot_claw" />
                            </div>
                            <div className="foot right">
                              <div className="foot_claw" />
                              <div className="foot_claw" />
                              <div className="foot_claw" />
                            </div>
                            <div className="track track_10">
                              <div className="foot left">
                                <div className="foot_claw" />
                                <div className="foot_claw" />
                                <div className="foot_claw" />
                              </div>
                              <div className="foot right">
                                <div className="foot_claw" />
                                <div className="foot_claw" />
                                <div className="foot_claw" />
                              </div>
                              <div className="track track_11">
                                <div className="foot left">
                                  <div className="foot_claw" />
                                  <div className="foot_claw" />
                                  <div className="foot_claw" />
                                </div>
                                <div className="foot right">
                                  <div className="foot_claw" />
                                  <div className="foot_claw" />
                                  <div className="foot_claw" />
                                </div>
                                <div className="track track_12">
                                  <div className="foot left">
                                    <div className="foot_claw" />
                                    <div className="foot_claw" />
                                    <div className="foot_claw" />
                                  </div>
                                  <div className="foot right">
                                    <div className="foot_claw" />
                                    <div className="foot_claw" />
                                    <div className="foot_claw" />
                                  </div>
                                  <div className="track track_13">
                                    <div className="foot left">
                                      <div className="foot_claw" />
                                      <div className="foot_claw" />
                                      <div className="foot_claw" />
                                    </div>
                                    <div className="foot right">
                                      <div className="foot_claw" />
                                      <div className="foot_claw" />
                                      <div className="foot_claw" />
                                    </div>
                                    <div className="track track_14">
                                      <div className="foot left">
                                        <div className="foot_claw" />
                                        <div className="foot_claw" />
                                        <div className="foot_claw" />
                                      </div>
                                      <div className="foot right">
                                        <div className="foot_claw" />
                                        <div className="foot_claw" />
                                        <div className="foot_claw" />
                                      </div>
                                      <div className="track track_15">
                                        <div className="foot left">
                                          <div className="foot_claw" />
                                          <div className="foot_claw" />
                                          <div className="foot_claw" />
                                        </div>
                                        <div className="foot right">
                                          <div className="foot_claw" />
                                          <div className="foot_claw" />
                                          <div className="foot_claw" />
                                        </div>
                                        <div className="track track_16">
                                          <div className="foot left">
                                            <div className="foot_claw" />
                                            <div className="foot_claw" />
                                            <div className="foot_claw" />
                                          </div>
                                          <div className="foot right">
                                            <div className="foot_claw" />
                                            <div className="foot_claw" />
                                            <div className="foot_claw" />
                                          </div>
                                          <div className="track track_17">
                                            <div className="foot left">
                                              <div className="foot_claw" />
                                              <div className="foot_claw" />
                                              <div className="foot_claw" />
                                            </div>
                                            <div className="foot right">
                                              <div className="foot_claw" />
                                              <div className="foot_claw" />
                                              <div className="foot_claw" />
                                            </div>
                                            <div className="track track_18">
                                              <div className="foot left">
                                                <div className="foot_claw" />
                                                <div className="foot_claw" />
                                                <div className="foot_claw" />
                                              </div>
                                              <div className="foot right">
                                                <div className="foot_claw" />
                                                <div className="foot_claw" />
                                                <div className="foot_claw" />
                                              </div>
                                              <div className="track track_19">
                                                <div className="foot left">
                                                  <div className="foot_claw" />
                                                  <div className="foot_claw" />
                                                  <div className="foot_claw" />
                                                </div>
                                                <div className="foot right">
                                                  <div className="foot_claw" />
                                                  <div className="foot_claw" />
                                                  <div className="foot_claw" />
                                                </div>
                                                <div className="track track_20">
                                                  <div className="foot left">
                                                    <div className="foot_claw" />
                                                    <div className="foot_claw" />
                                                    <div className="foot_claw" />
                                                  </div>
                                                  <div className="foot right">
                                                    <div className="foot_claw" />
                                                    <div className="foot_claw" />
                                                    <div className="foot_claw" />
                                                  </div>
                                                  <div className="track track_21">
                                                    <div className="foot left">
                                                      <div className="foot_claw" />
                                                      <div className="foot_claw" />
                                                      <div className="foot_claw" />
                                                    </div>
                                                    <div className="foot right">
                                                      <div className="foot_claw" />
                                                      <div className="foot_claw" />
                                                      <div className="foot_claw" />
                                                    </div>
                                                    <div className="track track_22">
                                                      <div className="foot left">
                                                        <div className="foot_claw" />
                                                        <div className="foot_claw" />
                                                        <div className="foot_claw" />
                                                      </div>
                                                      <div className="foot right">
                                                        <div className="foot_claw" />
                                                        <div className="foot_claw" />
                                                        <div className="foot_claw" />
                                                      </div>
                                                      <div className="track track_23">
                                                        <div className="foot left">
                                                          <div className="foot_claw" />
                                                          <div className="foot_claw" />
                                                          <div className="foot_claw" />
                                                        </div>
                                                        <div className="foot right">
                                                          <div className="foot_claw" />
                                                          <div className="foot_claw" />
                                                          <div className="foot_claw" />
                                                        </div>
                                                        <div className="track track_24">
                                                          <div className="foot left">
                                                            <div className="foot_claw" />
                                                            <div className="foot_claw" />
                                                            <div className="foot_claw" />
                                                          </div>
                                                          <div className="foot right">
                                                            <div className="foot_claw" />
                                                            <div className="foot_claw" />
                                                            <div className="foot_claw" />
                                                          </div>
                                                          <div className="track track_25">
                                                            <div className="foot left">
                                                              <div className="foot_claw" />
                                                              <div className="foot_claw" />
                                                              <div className="foot_claw" />
                                                            </div>
                                                            <div className="foot right">
                                                              <div className="foot_claw" />
                                                              <div className="foot_claw" />
                                                              <div className="foot_claw" />
                                                            </div>
                                                            <div className="track track_26">
                                                              <div className="foot left">
                                                                <div className="foot_claw" />
                                                                <div className="foot_claw" />
                                                                <div className="foot_claw" />
                                                              </div>
                                                              <div className="foot right">
                                                                <div className="foot_claw" />
                                                                <div className="foot_claw" />
                                                                <div className="foot_claw" />
                                                              </div>
                                                              <div className="track track_27">
                                                                <div className="foot left">
                                                                  <div className="foot_claw" />
                                                                  <div className="foot_claw" />
                                                                  <div className="foot_claw" />
                                                                </div>
                                                                <div className="foot right">
                                                                  <div className="foot_claw" />
                                                                  <div className="foot_claw" />
                                                                  <div className="foot_claw" />
                                                                </div>
                                                                <div className="track track_28">
                                                                  <div className="foot left">
                                                                    <div className="foot_claw" />
                                                                    <div className="foot_claw" />
                                                                    <div className="foot_claw" />
                                                                  </div>
                                                                  <div className="foot right">
                                                                    <div className="foot_claw" />
                                                                    <div className="foot_claw" />
                                                                    <div className="foot_claw" />
                                                                  </div>
                                                                  <div className="track track_29">
                                                                    <div className="foot left">
                                                                      <div className="foot_claw" />
                                                                      <div className="foot_claw" />
                                                                      <div className="foot_claw" />
                                                                    </div>
                                                                    <div className="foot right">
                                                                      <div className="foot_claw" />
                                                                      <div className="foot_claw" />
                                                                      <div className="foot_claw" />
                                                                    </div>
                                                                    <div className="track track_30">
                                                                      <div className="foot left">
                                                                        <div className="foot_claw" />
                                                                        <div className="foot_claw" />
                                                                        <div className="foot_claw" />
                                                                      </div>
                                                                      <div className="foot right">
                                                                        <div className="foot_claw" />
                                                                        <div className="foot_claw" />
                                                                        <div className="foot_claw" />
                                                                      </div>
                                                                      <div className="track track_31">
                                                                        <div className="foot left">
                                                                          <div className="foot_claw" />
                                                                          <div className="foot_claw" />
                                                                          <div className="foot_claw" />
                                                                        </div>
                                                                        <div className="foot right">
                                                                          <div className="foot_claw" />
                                                                          <div className="foot_claw" />
                                                                          <div className="foot_claw" />
                                                                        </div>
                                                                        <div className="track track_32">
                                                                          <div className="foot left">
                                                                            <div className="foot_claw" />
                                                                            <div className="foot_claw" />
                                                                            <div className="foot_claw" />
                                                                          </div>
                                                                          <div className="foot right">
                                                                            <div className="foot_claw" />
                                                                            <div className="foot_claw" />
                                                                            <div className="foot_claw" />
                                                                          </div>
                                                                          <div className="track track_33">
                                                                            <div className="foot left">
                                                                              <div className="foot_claw" />
                                                                              <div className="foot_claw" />
                                                                              <div className="foot_claw" />
                                                                            </div>
                                                                            <div className="foot right">
                                                                              <div className="foot_claw" />
                                                                              <div className="foot_claw" />
                                                                              <div className="foot_claw" />
                                                                            </div>
                                                                            <div className="track track_34">
                                                                              <div className="foot left">
                                                                                <div className="foot_claw" />
                                                                                <div className="foot_claw" />
                                                                                <div className="foot_claw" />
                                                                              </div>
                                                                              <div className="foot right">
                                                                                <div className="foot_claw" />
                                                                                <div className="foot_claw" />
                                                                                <div className="foot_claw" />
                                                                              </div>
                                                                              <div className="track track_35">
                                                                                <div className="foot left">
                                                                                  <div className="foot_claw" />
                                                                                  <div className="foot_claw" />
                                                                                  <div className="foot_claw" />
                                                                                </div>
                                                                                <div className="foot right">
                                                                                  <div className="foot_claw" />
                                                                                  <div className="foot_claw" />
                                                                                  <div className="foot_claw" />
                                                                                </div>
                                                                                <div className="track track_36">
                                                                                  <div className="foot left">
                                                                                    <div className="foot_claw" />
                                                                                    <div className="foot_claw" />
                                                                                    <div className="foot_claw" />
                                                                                  </div>
                                                                                  <div className="foot right">
                                                                                    <div className="foot_claw" />
                                                                                    <div className="foot_claw" />
                                                                                    <div className="foot_claw" />
                                                                                  </div>
                                                                                  <div className="track track_37">
                                                                                    <div className="foot left">
                                                                                      <div className="foot_claw" />
                                                                                      <div className="foot_claw" />
                                                                                      <div className="foot_claw" />
                                                                                    </div>
                                                                                    <div className="foot right">
                                                                                      <div className="foot_claw" />
                                                                                      <div className="foot_claw" />
                                                                                      <div className="foot_claw" />
                                                                                    </div>
                                                                                    <div className="track track_38">
                                                                                      <div className="foot left">
                                                                                        <div className="foot_claw" />
                                                                                        <div className="foot_claw" />
                                                                                        <div className="foot_claw" />
                                                                                      </div>
                                                                                      <div className="foot right">
                                                                                        <div className="foot_claw" />
                                                                                        <div className="foot_claw" />
                                                                                        <div className="foot_claw" />
                                                                                      </div>
                                                                                      <div className="track track_39">
                                                                                        <div className="foot left">
                                                                                          <div className="foot_claw" />
                                                                                          <div className="foot_claw" />
                                                                                          <div className="foot_claw" />
                                                                                        </div>
                                                                                        <div className="foot right">
                                                                                          <div className="foot_claw" />
                                                                                          <div className="foot_claw" />
                                                                                          <div className="foot_claw" />
                                                                                        </div>
                                                                                        <div className="track track_40">
                                                                                          <div className="foot left">
                                                                                            <div className="foot_claw" />
                                                                                            <div className="foot_claw" />
                                                                                            <div className="foot_claw" />
                                                                                          </div>
                                                                                          <div className="foot right">
                                                                                            <div className="foot_claw" />
                                                                                            <div className="foot_claw" />
                                                                                            <div className="foot_claw" />
                                                                                          </div>
                                                                                          <div className="track track_41">
                                                                                            <div className="foot left">
                                                                                              <div className="foot_claw" />
                                                                                              <div className="foot_claw" />
                                                                                              <div className="foot_claw" />
                                                                                            </div>
                                                                                            <div className="foot right">
                                                                                              <div className="foot_claw" />
                                                                                              <div className="foot_claw" />
                                                                                              <div className="foot_claw" />
                                                                                            </div>
                                                                                            <div className="track track_42">
                                                                                              <div className="foot left">
                                                                                                <div className="foot_claw" />
                                                                                                <div className="foot_claw" />
                                                                                                <div className="foot_claw" />
                                                                                              </div>
                                                                                              <div className="foot right">
                                                                                                <div className="foot_claw" />
                                                                                                <div className="foot_claw" />
                                                                                                <div className="foot_claw" />
                                                                                              </div>
                                                                                              <div className="track track_43">
                                                                                                <div className="foot left">
                                                                                                  <div className="foot_claw" />
                                                                                                  <div className="foot_claw" />
                                                                                                  <div className="foot_claw" />
                                                                                                </div>
                                                                                                <div className="foot right">
                                                                                                  <div className="foot_claw" />
                                                                                                  <div className="foot_claw" />
                                                                                                  <div className="foot_claw" />
                                                                                                </div>
                                                                                                <div className="track track_44">
                                                                                                  <div className="foot left">
                                                                                                    <div className="foot_claw" />
                                                                                                    <div className="foot_claw" />
                                                                                                    <div className="foot_claw" />
                                                                                                  </div>
                                                                                                  <div className="foot right">
                                                                                                    <div className="foot_claw" />
                                                                                                    <div className="foot_claw" />
                                                                                                    <div className="foot_claw" />
                                                                                                  </div>
                                                                                                  <div className="track track_45">
                                                                                                    <div className="foot left">
                                                                                                      <div className="foot_claw" />
                                                                                                      <div className="foot_claw" />
                                                                                                      <div className="foot_claw" />
                                                                                                    </div>
                                                                                                    <div className="foot right">
                                                                                                      <div className="foot_claw" />
                                                                                                      <div className="foot_claw" />
                                                                                                      <div className="foot_claw" />
                                                                                                    </div>
                                                                                                    <div className="track track_46">
                                                                                                      <div className="foot left">
                                                                                                        <div className="foot_claw" />
                                                                                                        <div className="foot_claw" />
                                                                                                        <div className="foot_claw" />
                                                                                                      </div>
                                                                                                      <div className="foot right">
                                                                                                        <div className="foot_claw" />
                                                                                                        <div className="foot_claw" />
                                                                                                        <div className="foot_claw" />
                                                                                                      </div>
                                                                                                      <div className="track track_47">
                                                                                                        <div className="foot left">
                                                                                                          <div className="foot_claw" />
                                                                                                          <div className="foot_claw" />
                                                                                                          <div className="foot_claw" />
                                                                                                        </div>
                                                                                                        <div className="foot right">
                                                                                                          <div className="foot_claw" />
                                                                                                          <div className="foot_claw" />
                                                                                                          <div className="foot_claw" />
                                                                                                        </div>
                                                                                                        <div className="track track_48">
                                                                                                          <div className="foot left">
                                                                                                            <div className="foot_claw" />
                                                                                                            <div className="foot_claw" />
                                                                                                            <div className="foot_claw" />
                                                                                                          </div>
                                                                                                          <div className="foot right">
                                                                                                            <div className="foot_claw" />
                                                                                                            <div className="foot_claw" />
                                                                                                            <div className="foot_claw" />
                                                                                                          </div>
                                                                                                          <div className="track track_49">
                                                                                                            <div className="foot left">
                                                                                                              <div className="foot_claw" />
                                                                                                              <div className="foot_claw" />
                                                                                                              <div className="foot_claw" />
                                                                                                            </div>
                                                                                                            <div className="foot right">
                                                                                                              <div className="foot_claw" />
                                                                                                              <div className="foot_claw" />
                                                                                                              <div className="foot_claw" />
                                                                                                            </div>
                                                                                                            <div className="track track_50">
                                                                                                              <div className="foot left">
                                                                                                                <div className="foot_claw" />
                                                                                                                <div className="foot_claw" />
                                                                                                                <div className="foot_claw" />
                                                                                                              </div>
                                                                                                              <div className="foot right">
                                                                                                                <div className="foot_claw" />
                                                                                                                <div className="foot_claw" />
                                                                                                                <div className="foot_claw" />
                                                                                                              </div>
                                                                                                            </div>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />

      <main className="homes">
        <section className="hero-sec">
          <div className="hero-bg"></div>
          <div className="hero-container">
            <div className="hero">
              <img
                src={top1}
                className="top-img"
                alt="marta-alessandro-ornament"
              />
              <div className="hero-names">
                <h1>
                  Alessandro <br /> & <br />
                  Marta
                </h1>
              </div>
              <img
                src={bot1}
                className="bot-img"
                alt="marta-alessandro-ornament"
              />
              <div className="hero-welcome">
                <h2>Si Sposano!</h2>
                <h3>30 Aprile 2023</h3>
                <h4>Antico Borgo di Sutri</h4>
              </div>
            </div>
            <div className="date-area">
              <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </div>
          </div>
        </section>
        <section className="couple-sec">
          <div className="couple-cont">
            <div className="couple-main-img"></div>
            <div className="couple-area">
              <h1>
                “Non possiamo scegliere il nostro <br /> destino, ma possiamo
                scegliere <br />
                le persone”
              </h1>
              <div className="main-couple">
                <div className="img-box">
                  <img src={couple_02} alt="marta-and-alessandro" />
                </div>
                <div className="wedding-cards">
                  <div className="card-item">
                    <div className="card-img">
                      <img src={pot} alt="marts" />
                    </div>
                    <div className="card-wrt">
                      <p>
                        L'amore è quando la felicità di un'altra <br /> persona
                        è più importante della tua. <br />
                        <br /> (H. Jackson Brown)
                      </p>
                      <div className="card-divider"></div>
                      <div className="card-footer">
                        <p>Alessandro Baiano</p>
                        <span>Sposo</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-item v2">
                    <div className="card-img">
                      <img src={pot} alt="marts" />
                    </div>
                    <div className="card-wrt">
                      <p>
                        È in questo che consiste il vero amore: lasciare che{" "}
                        <br /> una persona sia ciò che davvero è. La maggior{" "}
                        <br /> parte delle persone ti ama per quello che
                        pretendono tu sia. <br />
                        <br /> (Jim Morrison)
                      </p>
                      <div className="card-divider"></div>
                      <div className="card-footer">
                        <p>Marta Bizzarro</p>
                        <span>Sposa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="seperator-sec"></section>
        <section className="ben-sec">
          <div className="ben-container">
            <div className="benvenuti">
              <div className="ben-header">
                <h1>Benvenuti</h1>
                <img src={bot1} alt="marta-alessandro-ornament" />
              </div>
              <div className="ben-grid">
                <div className="ben-item">
                  <div className="ben-img-area img1"></div>
                  <div className="ben-nav-btn-area">
                    <a href="#" className="ben-nav-link">
                      La Nostra Storia
                    </a>
                  </div>
                </div>
                <div className="ben-item">
                  <div className="ben-img-area img2"></div>
                  <div className="ben-nav-btn-area">
                    <a href="#" className="ben-nav-link">
                      La Nostre Foto
                    </a>
                  </div>
                </div>
                <div className="ben-item">
                  <div className="ben-img-area img3"></div>
                  <div className="ben-nav-btn-area">
                    <a href="#" className="ben-nav-link">
                      Il Gran Giorno
                    </a>
                  </div>
                </div>
              </div>
              <div className="ben-wrt">
                <h2>
                  “E da allora sono perché tu sei, e da allora sei, <br /> sono
                  e siamo, e per amore sarò, sarai, saremo”
                </h2>
                <h1>Pablo Neruda</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="home-rsvp-sec">
          <div className="home-rsvp-container">
            <div className="hrsvp">
              <h1>Non vediamo l'ora di festeggiare insieme!</h1>
              <p>
                Si prega gentilmente di rispondere all'invito entro e non oltre
                il 31 Gennaio 2023, per motivi organizzativi.{" "}
              </p>
              <div className="hrsvp-btn-area">
                <a href="#" className="hrsvp-btn">
                  RSVP {">"}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
