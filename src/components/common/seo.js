import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/contants"
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, title, image }) {
  const { pathname } = useLocation()

  const url = pathname ? `${SITE_URL}${pathname}` : SITE_URL

  const ogImage = image ? `${SITE_URL}${image}` : DEFAULT_OG_IMAGE

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
          content: ogImage,
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
          content: ogImage,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
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
