import React from 'react'

const SRC = "https://framerusercontent.com/modules/assets/Y5jpS8UHcHwvmlVxe9WC4ihNqU~_cB0fBrvBY5OBdzsEuD92tOiW5qweviVGV6apaEZZzs.mp4"

import * as styles from 'styles/BackgroundVideo.module.scss'

export default function BackgroundVideo() {
  return <video src={SRC} loop="" autoPlay="" muted="" playsInline="" className={styles.bgVideo} />
}
