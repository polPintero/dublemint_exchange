<template>
  <svg
    width="22"
    height="22"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_di_1_212)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 2H12V9H5V15H12V22H18V15H25V9H18V2Z"
        fill="url(#paint0_linear_1_212)"
      />
    </g>
    <defs>
      <filter
        id="filter0_di_1_212"
        x="0"
        y="0"
        width="30"
        height="30"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="2.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_212"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_212"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
        />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_212" />
      </filter>
      <linearGradient
        id="paint0_linear_1_212"
        x1="15"
        y1="2"
        x2="15"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#808181" />
        <stop offset="1" stop-color="#5B5A5B" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'PlusIcon'
}
</script>
