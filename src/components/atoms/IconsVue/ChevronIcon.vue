<template>
  <svg
    width="18"
    height="15"
    viewBox="5 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.62193 1.64214L8.27273 1.3014L7.92353 1.64215L4.6508 4.83569L4.28407 5.19355L4.6508 5.5514L12.6508 13.3579L13 13.6986L13.3492 13.3579L21.3492 5.5514L21.7159 5.19355L21.3492 4.83569L18.0765 1.64214L17.7273 1.30139L17.3781 1.64214L13 5.9143L8.62193 1.64214Z"
      stroke="url(#paint0_linear_1_141)"
      stroke-opacity="0.7"
    />
    <g filter="url(#filter0_di_1_141)">
      <path
        d="M13 6.6129L8.27273 2L5 5.19355L13 13L21 5.19355L17.7273 2L13 6.6129Z"
        fill="url(#paint1_linear_1_141)"
      />
    </g>
    <defs>
      <filter
        id="filter0_di_1_141"
        x="0"
        y="0"
        width="26"
        height="21"
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
          result="effect1_dropShadow_1_141"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_141"
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
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_141" />
      </filter>
      <linearGradient
        id="paint0_linear_1_141"
        x1="5"
        y1="7.5"
        x2="21"
        y2="7.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1D262D" />
        <stop offset="1" stop-color="#12161A" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_141"
        x1="5"
        y1="7.5"
        x2="21"
        y2="7.5"
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
  name: 'ChevronIcon'
}
</script>
