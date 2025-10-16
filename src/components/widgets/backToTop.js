import React, { useState, useEffect } from "react"

import * as backToTopStyles from "../../styles/Components/backToTop.module.css"

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
  }, [])

  return (
    <div
      className={backToTopStyles.btn}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <p className={backToTopStyles.text}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill=""
            stroke="none"
          >
            <path d="M2147 4018 c-246 -601 -447 -1100 -447 -1109 0 -19 61 -79 81 -79 8 0 187 77 399 171 212 94 394 173 405 176 13 3 175 -63 419 -171 220 -97 404 -176 410 -176 12 0 86 71 86 82 0 11 -891 2183 -899 2191 -4 4 -208 -485 -454 -1085z" />
            <path d="M1905 4054 c-275 -93 -560 -272 -774 -485 -332 -331 -527 -717 -596 -1181 -21 -139 -21 -460 0 -603 67 -452 265 -845 590 -1170 293 -294 644 -483 1060 -572 123 -26 144 -27 400 -28 238 0 283 3 385 22 401 77 764 263 1062 542 208 196 397 476 509 759 42 105 94 297 115 428 23 136 26 474 5 609 -92 612 -430 1138 -946 1470 -150 97 -492 251 -512 232 -3 -4 43 -125 104 -269 l109 -263 96 -65 c372 -252 624 -624 720 -1064 19 -88 22 -131 22 -331 1 -218 -1 -236 -28 -350 -106 -449 -353 -804 -729 -1049 -491 -321 -1147 -351 -1668 -79 -711 372 -1051 1172 -831 1958 99 355 355 701 672 908 47 31 95 64 107 74 15 12 60 110 128 277 58 143 104 260 102 262 -1 1 -47 -13 -102 -32z" />
          </g>
        </svg>
        Back To Top
      </p>
    </div>
  )
}

export default ScrollButton
