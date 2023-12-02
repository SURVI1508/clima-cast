import Link from "next/link";
import React from "react";

const MoreDetails = () => {
  return (
    <div className="w-full md:grid grid-cols-5  h-[50vh] bg-gray-300 relative overflow-hidden">
      <div className="col-span-2 flex flex-col gap-4  border p-3 md:p-4 h-full">
        {/* search  */}
        <div className="w-full flex flex-row overflow-hidden rounded  h-[3.2rem]">
          <input
            type="text"
            placeholder="Search by city or state..."
            className="bg-white outline-none h-full w-[70%] px-4"
          />
          <button className="w-[30%] h-full text-white bg-[#000] font-semibold">
            Search
          </button>
        </div>

        {/* top city  */}

        <div className="w-full flex flex-col gap-1 custom-scrollbar  h-[20rem] md:h-[14rem] overflow-y-auto">
          <div className="w-full flex flex-row items-center bg-white p-3 rounded gap-4">
            <span className="font-semibold text-base">Pune</span>
            <span className="font-light text-sm text-gray-300">maharastra</span>
            <span className="font-light text-sm text-gray-300">INDIA</span>
          </div>
          <div className="w-full flex flex-row items-center bg-white p-3 rounded gap-4">
            <span className="font-semibold text-base">Pune</span>
            <span className="font-light text-sm text-gray-300">maharastra</span>
            <span className="font-light text-sm text-gray-300">INDIA</span>
          </div>{" "}
          <div className="w-full flex flex-row items-center bg-white p-3 rounded gap-4">
            <span className="font-semibold text-base">Pune</span>
            <span className="font-light text-sm text-gray-300">maharastra</span>
            <span className="font-light text-sm text-gray-300">INDIA</span>
          </div>{" "}
          <div className="w-full flex flex-row items-center bg-white p-3 rounded gap-4">
            <span className="font-semibold text-base">Pune</span>
            <span className="font-light text-sm text-gray-300">maharastra</span>
            <span className="font-light text-sm text-gray-300">INDIA</span>
          </div>{" "}
          <div className="w-full flex flex-row items-center bg-white p-3 rounded gap-4">
            <span className="font-semibold text-base">Pune</span>
            <span className="font-light text-sm text-gray-300">maharastra</span>
            <span className="font-light text-sm text-gray-300">INDIA</span>
          </div>{" "}
          <div className="w-full flex flex-row items-center bg-white p-3 rounded gap-4">
            <span className="font-semibold text-base">Pune</span>
            <span className="font-light text-sm text-gray-300">maharastra</span>
            <span className="font-light text-sm text-gray-300">INDIA</span>
          </div>{" "}
          <div className="w-full flex flex-row items-center bg-white p-3 rounded gap-4">
            <span className="font-semibold text-base">Pune</span>
            <span className="font-light text-sm text-gray-300">maharastra</span>
            <span className="font-light text-sm text-gray-300">INDIA</span>
          </div>{" "}
        </div>

        {/* share option  */}
        <div className="flex flex-row items-center gap-[1rem] ">
          <Link href="/">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M0 10.4453C0 10.147 0 9.84874 0 9.55047C0.0293302 9.52014 0.0149137 9.48137 0.0188907 9.44607C0.0169022 9.41774 0.0248561 9.38691 0 9.36405C0 9.30191 0 9.23977 0 9.17763C0.044741 8.92807 0.0372842 8.67404 0.0621403 8.42299C0.125772 7.77524 0.323627 7.16179 0.549818 6.55779C0.949504 5.48947 1.53561 4.52754 2.28676 3.67249C3.06625 2.78463 3.97499 2.05386 5.02342 1.49808C5.874 1.04719 6.76683 0.723063 7.71286 0.548075C8.0171 0.491901 8.32879 0.494386 8.63701 0.471519C8.67877 0.468536 8.7245 0.485438 8.76228 0.453125C8.81199 0.453125 8.86171 0.453125 8.91142 0.453125C8.93627 0.475993 8.96113 0.475993 8.98599 0.453125C9.04813 0.453125 9.11027 0.453125 9.17241 0.453125C9.2594 0.482952 9.3464 0.482952 9.4334 0.453125C9.50797 0.453125 9.58253 0.453125 9.6571 0.453125C9.7441 0.482952 9.8311 0.482952 9.91809 0.453125C9.98023 0.453125 10.0424 0.453125 10.1045 0.453125C10.1418 0.480467 10.1791 0.480467 10.2164 0.453125C10.2412 0.453125 10.2661 0.453125 10.2909 0.453125C10.5842 0.494386 10.882 0.484941 11.1753 0.520237C11.8703 0.60425 12.531 0.816522 13.1752 1.07851C14.3017 1.53636 15.2994 2.19057 16.1818 3.03319C16.9897 3.80423 17.6479 4.68115 18.1504 5.67341C18.5556 6.47378 18.8509 7.3159 19.0045 8.20227C19.0622 8.53584 19.0448 8.87885 19.0905 9.21541C19.0905 9.25269 19.0905 9.28997 19.0905 9.32726C19.0587 9.36007 19.0766 9.40183 19.0716 9.43911C19.0766 9.4764 19.0587 9.51815 19.0905 9.55096C19.0905 9.60068 19.0905 9.65039 19.0905 9.7001C19.0612 9.77467 19.0612 9.84924 19.0905 9.92381C19.0905 9.97352 19.0905 10.0232 19.0905 10.0729C19.0612 10.1475 19.0612 10.2221 19.0905 10.2966C19.0905 10.3464 19.0905 10.3961 19.0905 10.4458C19.0612 10.4761 19.0756 10.5149 19.0716 10.5502C19.0736 10.5785 19.0656 10.6093 19.0905 10.6322C19.0905 10.6943 19.0905 10.7565 19.0905 10.8186C19.0458 11.0682 19.0547 11.3222 19.0284 11.5733C18.9538 12.2827 18.7385 12.9558 18.4716 13.611C18.1067 14.5063 17.6295 15.3405 17.0076 16.0827C16.2778 16.9531 15.4416 17.7023 14.4573 18.2819C13.4969 18.8477 12.4738 19.2444 11.3781 19.4492C11.0674 19.5073 10.7498 19.5004 10.4356 19.5247C10.3874 19.5287 10.3362 19.5088 10.2919 19.5431C10.2546 19.5431 10.2174 19.5431 10.1801 19.5431C10.1498 19.5138 10.111 19.5282 10.0757 19.5242C10.0473 19.5262 10.0165 19.5183 9.99365 19.5431C9.93151 19.5431 9.86937 19.5431 9.80723 19.5431C9.74509 19.5138 9.68295 19.5138 9.62081 19.5431C9.5711 19.5431 9.52139 19.5431 9.47168 19.5431C9.39711 19.5138 9.32254 19.5138 9.24797 19.5431C9.19826 19.5431 9.14855 19.5431 9.09883 19.5431C9.07646 19.5188 9.04664 19.5262 9.0188 19.5242C8.99742 19.5242 8.97604 19.5242 8.95467 19.5242C8.92683 19.5257 8.8975 19.5188 8.87513 19.5431C8.82542 19.5431 8.7757 19.5431 8.72599 19.5431C8.47644 19.4984 8.2229 19.5053 7.97136 19.481C7.37432 19.4233 6.80511 19.2493 6.24684 19.043C5.42908 18.7403 4.65953 18.3441 3.95163 17.83C3.08166 17.1982 2.33101 16.451 1.70314 15.5766C0.969389 14.555 0.468787 13.431 0.169519 12.2131C0.0636317 11.7825 0.048718 11.3441 0.0183935 10.9061C0.0154108 10.8644 0.032313 10.8191 0 10.7808C0 10.7311 0 10.6814 0 10.6317C0.0248561 10.6083 0.0169022 10.578 0.0188907 10.5497C0.0149137 10.5144 0.0298274 10.4761 0 10.4453Z"
                  fill="#2AA71A"
                />
                <path
                  d="M9.43286 0.453125C9.34587 0.505323 9.25887 0.509797 9.17188 0.453125C9.25887 0.453125 9.34587 0.453125 9.43286 0.453125Z"
                  fill="#3CAF2E"
                />
                <path
                  d="M9.91724 0.453125C9.83024 0.509797 9.74325 0.505323 9.65625 0.453125C9.74325 0.453125 9.83024 0.453125 9.91724 0.453125Z"
                  fill="#3DAF2E"
                />
                <path
                  d="M19.0899 9.92292C19.0387 9.84836 19.0367 9.77379 19.0899 9.69922C19.0899 9.77379 19.0899 9.84836 19.0899 9.92292Z"
                  fill="#37AD28"
                />
                <path
                  d="M19.0899 10.296C19.0367 10.2214 19.0387 10.1468 19.0899 10.0723C19.0899 10.1468 19.0899 10.2214 19.0899 10.296Z"
                  fill="#37AD28"
                />
                <path
                  d="M9.24707 19.5429C9.32164 19.4907 9.39621 19.4912 9.47078 19.5429C9.39621 19.5429 9.32164 19.5429 9.24707 19.5429Z"
                  fill="#37AD28"
                />
                <path
                  d="M9.61914 19.5426C9.68128 19.4939 9.74342 19.4934 9.80556 19.5426C9.74342 19.5426 9.68128 19.5426 9.61914 19.5426Z"
                  fill="#37AD28"
                />
                <path
                  d="M10.2163 0.453125C10.1791 0.509797 10.1418 0.498363 10.1045 0.453125C10.1418 0.453125 10.1791 0.453125 10.2163 0.453125Z"
                  fill="#9CD694"
                />
                <path
                  d="M19.057 9.43699C19.058 9.39772 19.0317 9.35099 19.0883 9.32812C19.0883 9.36541 19.0883 9.40269 19.0883 9.43998C19.0759 9.46483 19.0655 9.46384 19.057 9.43699Z"
                  fill="#9ED696"
                />
                <path
                  d="M0.032313 9.43563C0.0377813 9.47789 0.0402669 9.52014 0 9.54947C0 9.51219 0 9.47491 0 9.43762C0.00944533 9.41227 0.0198849 9.41127 0.032313 9.43563Z"
                  fill="#74C66A"
                />
                <path
                  d="M19.0583 9.43567C19.0687 9.43517 19.0792 9.43617 19.0896 9.43865C19.0896 9.47594 19.0896 9.51322 19.0896 9.55051C19.0488 9.52018 19.0523 9.47842 19.0583 9.43567Z"
                  fill="#77C76D"
                />
                <path
                  d="M0 10.4453C0.0402669 10.4751 0.0377813 10.5169 0.032313 10.5592C0.0198849 10.5835 0.00944533 10.5825 0 10.5572C0 10.5199 0 10.4826 0 10.4453Z"
                  fill="#75C66A"
                />
                <path
                  d="M19.0578 10.5592C19.0524 10.5169 19.0494 10.4746 19.0901 10.4453C19.0901 10.4826 19.0901 10.5199 19.0901 10.5572C19.0812 10.583 19.0703 10.5835 19.0578 10.5592Z"
                  fill="#77C76D"
                />
                <path
                  d="M10.0691 19.5117C10.1084 19.5107 10.1541 19.4873 10.178 19.542C10.1407 19.542 10.1034 19.542 10.0661 19.542C10.0408 19.5291 10.0418 19.5191 10.0691 19.5117Z"
                  fill="#90D188"
                />
                <path
                  d="M8.98472 0.453125C8.95987 0.493392 8.93501 0.500849 8.91016 0.453125C8.93501 0.453125 8.95987 0.453125 8.98472 0.453125Z"
                  fill="#94D38C"
                />
                <path
                  d="M0.032313 9.43586C0.0213763 9.43636 0.0109367 9.43686 0 9.43785C0 9.41299 0 9.38814 0 9.36328C0.0387756 9.37521 0.0352957 9.40554 0.032313 9.43586Z"
                  fill="#94D38C"
                />
                <path
                  d="M0 10.5566C0.0109367 10.5576 0.0213763 10.5581 0.032313 10.5586C0.0352957 10.589 0.0387756 10.6193 0 10.6312C0 10.6064 0 10.5815 0 10.5566Z"
                  fill="#95D38D"
                />
                <path
                  d="M19.0572 10.5586C19.0682 10.5581 19.0786 10.5576 19.0895 10.5566C19.0895 10.5815 19.0895 10.6064 19.0895 10.6312C19.0503 10.6198 19.0547 10.589 19.0572 10.5586Z"
                  fill="#98D590"
                />
                <path
                  d="M8.87305 19.5435C8.88448 19.5032 8.9158 19.5087 8.94612 19.5122C8.97297 19.5211 8.97347 19.5315 8.94762 19.5435C8.92276 19.5435 8.8979 19.5435 8.87305 19.5435Z"
                  fill="#A4D99D"
                />
                <path
                  d="M8.94876 19.543C8.94826 19.5326 8.94776 19.5222 8.94727 19.5117C8.97212 19.5117 8.99698 19.5117 9.02134 19.5117C9.04818 19.5202 9.04918 19.5306 9.02333 19.5425C8.99847 19.543 8.97361 19.543 8.94876 19.543Z"
                  fill="#89CF80"
                />
                <path
                  d="M9.0225 19.5437C9.022 19.5333 9.021 19.5228 9.02051 19.5129C9.05183 19.5089 9.07967 19.5139 9.09707 19.5437C9.07221 19.5437 9.04735 19.5437 9.0225 19.5437Z"
                  fill="#72C567"
                />
                <path
                  d="M10.0707 19.5134C10.0702 19.5234 10.0692 19.5333 10.0677 19.5438C10.0429 19.5438 10.018 19.5438 9.99316 19.5438C10.0111 19.513 10.0394 19.5085 10.0707 19.5134Z"
                  fill="#72C567"
                />
                <path
                  d="M9.63255 14.6981C8.85704 14.6907 8.19934 14.5554 7.57794 14.2631C7.47653 14.2154 7.38555 14.2104 7.27519 14.2373C6.55834 14.4118 5.84 14.5783 5.12166 14.7468C4.88702 14.802 4.79505 14.713 4.84327 14.4724C4.9929 13.7307 5.14403 12.9895 5.29913 12.2493C5.31951 12.1523 5.30907 12.0738 5.26731 11.9843C3.91265 9.08759 5.71323 5.73996 8.87642 5.27068C11.5176 4.87944 14.0057 6.83214 14.2483 9.48727C14.4825 12.045 12.7555 14.2532 10.2107 14.6469C9.99048 14.6807 9.76727 14.7056 9.63255 14.6981Z"
                  fill="#FEFEFE"
                />
                <path
                  d="M6.09486 13.4573C6.1744 13.0725 6.23456 12.718 6.32453 12.3715C6.39463 12.1011 6.36778 11.8734 6.23804 11.6154C5.4327 10.0097 5.87315 8.12014 7.28796 7.01902C9.50413 5.2945 12.809 6.63325 13.2052 9.41565C13.5055 11.5249 12.03 13.4274 9.91823 13.6442C9.14421 13.7237 8.41245 13.5656 7.72841 13.1943C7.61805 13.1341 7.51862 13.1207 7.39335 13.153C6.97427 13.2599 6.55122 13.3514 6.09486 13.4573Z"
                  fill="#2AA71A"
                />
                <path
                  d="M10.9349 12.272C10.3185 12.2605 9.88497 12.1179 9.4828 11.8852C8.71375 11.4403 8.07097 10.8537 7.57782 10.113C7.31584 9.71926 7.14732 9.28875 7.15875 8.80505C7.16969 8.31439 7.46349 7.99226 7.83036 7.72779C7.98497 7.61643 8.19426 7.69199 8.28374 7.87742C8.42641 8.17271 8.55517 8.47496 8.68492 8.77672C8.73513 8.89404 8.71176 9.00887 8.6362 9.11078C8.57356 9.19579 8.50446 9.27583 8.44381 9.36233C8.35135 9.49307 8.34787 9.63326 8.44083 9.76152C8.84797 10.3223 9.35703 10.7692 9.96401 11.1042C10.1156 11.1878 10.2732 11.1634 10.3667 11.0302C10.6138 10.6782 10.9195 10.6717 11.2794 10.8179C11.4504 10.8875 11.6368 10.9183 11.8138 10.9755C12.0827 11.0625 12.1673 11.2956 12.0161 11.5338C11.7303 11.9817 11.3634 12.2988 10.9349 12.272Z"
                  fill="#FEFEFE"
                />
              </svg>
            </span>
          </Link>
          <Link href="/">
            <span>
              <svg
                stroke="currentColor"
                fill="#1DA1F2"
                stroke-width="0"
                viewBox="0 0 16 16"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
              </svg>
            </span>
          </Link>
          <Link href="/">
            <span>
              <svg
                stroke="currentColor"
                fill="#4267B2"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
              </svg>
            </span>
          </Link>{" "}
          <Link href="/">
            <span>
              <svg
                stroke="currentColor"
                fill="#F56040"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
              </svg>
            </span>
          </Link>
          <Link href="/">
            <span>
              <svg
                stroke="currentColor"
                fill="#0096D6"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
      <div className="col-span-3 border p-5"></div>
    </div>
  );
};

export default MoreDetails;