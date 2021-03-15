import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { SITE_NAME, SITE_URL } from "../../lib/contants"
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, title, image }) {
  const { pathname } = useLocation()

  const url = pathname ? `${SITE_URL}${pathname}` : SITE_URL

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${SITE_NAME}`}
      link={[
        {
          rel: "canonical",
          href: url,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          rel: `canonial`,
          content: url,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: image,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  image:
    "https://res.cloudinary.com/djciv53p8/image/upload/v1615825502/OG_IMAGE_1_dd2450a607.jpg",
  description:
    "Estudio Visual 3D basado en Ciudad de México. Realidad Virtual, Realidad Aumentada, OG Still Images, 3D Models, Rendering, Animación, Diseño UI & UX.",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default SEO
