import L from "leaflet";
// import React, { ReactDOMServer } from "react";

const iconExisting = L.divIcon({
  className: "custom-icon",
  html: `<svg
      width="75px"
      height="96px"
      viewBox="0 0 75 96"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>pin / existing</title>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Artboard"
          transform="translate(-16.000000, -10.000000)"
          fill="#D01515"
          fill-rule="nonzero"
        >
          <g id="pin-/-existing" transform="translate(16.000000, 10.000000)">
            <path
              d="M37.5,0 C16.875,0 0,16.25 0,36.25 C0,44.1666667 2.70833333,51.6666667 7.5,57.9166667 L35.8333333,95 C36.4583333,95.8333333 37.9166667,96.0416667 38.75,95.4166667 C38.9583333,95.2083333 38.9583333,95.2083333 39.1666667,95 L67.5,57.9166667 C72.2916667,51.6666667 75,44.1666667 75,36.25 C75,16.25 58.125,0 37.5,0 Z M34.5833333,50.4166667 C26.6666667,48.75 21.4583333,41.25 23.125,33.3333333 C24.7916667,25.4166667 32.2916667,20.2083333 40.2083333,21.875 C46.0416667,23.125 50.625,27.5 51.6666667,33.3333333 C53.125,41.25 47.9166667,48.9583333 40.2083333,50.4166667 C38.3333333,50.8333333 36.4583333,50.8333333 34.5833333,50.4166667 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </g>
    </svg>`,
});

const iconRemoved = L.divIcon({
  className: "custom-icon",
  html: `
<svg width="75px" height="96px" viewBox="0 0 75 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>pin / removed</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard" transform="translate(-106.000000, -10.000000)" fill="#1166C8" fill-rule="nonzero">
            <g id="pin-/-removed" transform="translate(106.000000, 10.000000)">
                <path d="M37.5,0 C16.875,0 0,16.25 0,36.25 C0,44.1666667 2.70833333,51.6666667 7.5,57.9166667 L35.8333333,95 C36.4583333,95.8333333 37.9166667,96.0416667 38.75,95.4166667 C38.9583333,95.2083333 38.9583333,95.2083333 39.1666667,95 L67.5,57.9166667 C72.2916667,51.6666667 75,44.1666667 75,36.25 C75,16.25 58.125,0 37.5,0 Z M34.5833333,50.4166667 C26.6666667,48.75 21.4583333,41.25 23.125,33.3333333 C24.7916667,25.4166667 32.2916667,20.2083333 40.2083333,21.875 C46.0416667,23.125 50.625,27.5 51.6666667,33.3333333 C53.125,41.25 47.9166667,48.9583333 40.2083333,50.4166667 C38.3333333,50.8333333 36.4583333,50.8333333 34.5833333,50.4166667 Z" id="Shape"></path>
            </g>
        </g>
    </g>
</svg>`,
});

export { iconExisting, iconRemoved };
