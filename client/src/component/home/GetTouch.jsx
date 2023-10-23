import React from "react";
import "../../style/homeStyle/gettouch.css";

const GetTouch = () => {
  return (
    <div>
      <div className="get_touch_container">
        <div className="get_touch_content">
          <div className="get_touch">
            <div className="get_touch_button">
              <div className="row w-100">
                <div className="col touch">
                   <h3 className="text-white pl-5 pt-5 ">
                     Lets Get in touch with us for your Requirements
                   </h3>
                   <p className="ml-5 get_touch_pass">To create a dream place to live by providing luxury solution with LV Granito.</p>
                </div>
                <div className="col">
                  <div class="wrapper_content">
                    <div class="link_wrapper_content">
                      <a href="#">GET TOUCH</a>
                      <div class="icon_svg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 268.832 268.832"
                        >
                          <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                        </svg>
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
  );
};

export default GetTouch;
