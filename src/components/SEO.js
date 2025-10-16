import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

import React from "react"
import { Helmet } from "react-helmet"

function SEO({ description, lang, meta, title, schemaType, url, article }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            image
            siteUrl
          }
        }
      }
    `
  )

  const image = site.siteMetadata.image
  const keywords = site.siteMetadata.keywords
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.siteUrl || "https://anshrathod.github.io"
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}/${image}`

  // JSON-LD Structured Data
  const getSchemaMarkup = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          url: siteUrl,
          name: defaultTitle,
          description: site.siteMetadata.description,
          inLanguage: lang,
        },
        {
          "@type": "Person",
          "@id": `${siteUrl}/#person`,
          name: defaultTitle,
          url: siteUrl,
          image: {
            "@type": "ImageObject",
            url: fullImageUrl,
          },
          sameAs: [
            "https://github.com/anshrathod",
            "https://twitter.com/unshh",
            "https://www.linkedin.com/in/anshrathod",
          ],
          jobTitle: "Software Developer",
          description: site.siteMetadata.description,
        },
      ],
    }

    // Add Article schema for blog posts
    if (schemaType === "Article" && article) {
      baseSchema["@graph"].push({
        "@type": "Article",
        "@id": `${pageUrl}/#article`,
        headline: title,
        description: metaDescription,
        image: fullImageUrl,
        author: {
          "@id": `${siteUrl}/#person`,
        },
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        inLanguage: lang,
      })
    }

    // Add SoftwareApplication schema for projects
    if (schemaType === "SoftwareApplication" && article) {
      baseSchema["@graph"].push({
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}/#software`,
        name: title,
        description: metaDescription,
        image: fullImageUrl,
        author: {
          "@id": `${siteUrl}/#person`,
        },
        applicationCategory: "DeveloperApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      })
    }

    return baseSchema
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      link={[
        {
          rel: "canonical",
          href: pageUrl,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: schemaType === "Article" ? `article` : `website`,
        },
        {
          property: `og:url`,
          content: pageUrl,
        },
        {
          property: `og:image`,
          content: fullImageUrl,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: fullImageUrl,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(getSchemaMarkup())}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  schemaType: `WebSite`,
  url: ``,
  article: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  schemaType: PropTypes.string,
  url: PropTypes.string,
  article: PropTypes.shape({
    datePublished: PropTypes.string,
    dateModified: PropTypes.string,
  }),
}

export default SEO
