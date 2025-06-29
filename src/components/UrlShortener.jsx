import { useEffect, useState } from "react"

import ShortenedLink from "./ShortenedLink.jsx"

const UrlShortener = () => {
  const getStoredLinks = JSON.parse(localStorage.getItem("links")) ?? []
  const [url, setUrl] = useState("")
  const [links, setLinks] = useState(getStoredLinks)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
  }, [links])

  // Function to clear all links
  const clearAllLinks = () => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin menghapus semua link yang tersimpan?"
      )
    ) {
      setLinks([])
      localStorage.removeItem("links")
    }
  }

  // Function to remove individual link
  const removeLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index)
    setLinks(newLinks)
  }

  // API endpoint - hanya menggunakan TinyURL
  const API_ENDPOINTS = [
    {
      name: "tinyurl",
      url: `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`,
      transform: (data) => ({
        original_link: url,
        full_short_link: data,
        short_link: data.replace("https://", "")
      })
    }
  ]

  const tryAPI = async (apiEndpoint) => {
    try {
      const response = await fetch(apiEndpoint.url, {
        method: "GET",
        headers: {
          Accept: "application/json"
        },
        // Add timeout
        signal: AbortSignal.timeout(10000) // 10 second timeout
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.text()

      // Try to parse as JSON first, fallback to text
      let parsedData
      try {
        parsedData = JSON.parse(data)
      } catch {
        parsedData = data
      }

      return apiEndpoint.transform(parsedData)
    } catch (error) {
      console.log(`API ${apiEndpoint.name} failed:`, error.message)
      throw error
    }
  }

  const shortenLink = async (e) => {
    e.preventDefault()
    if (url.replaceAll(" ", "") === "") {
      setError(true)
      setErrorMessage("Please add a valid URL")
      return
    }

    setLoading(true)
    setError(false)
    setErrorMessage("")

    try {
      console.log("Menggunakan TinyURL...")
      const result = await tryAPI(API_ENDPOINTS[0])

      if (result) {
        setLinks([...links, result])
        setUrl("")
        console.log("Link berhasil dipendekkan!")
      }
    } catch (error) {
      console.error("Gagal memendekkan URL:", error.message)
      setError(true)
      setErrorMessage(
        "Gagal memendekkan URL. Silakan coba lagi atau periksa koneksi internet Anda."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-5 lg:mx-20 xl:mx-36 -mt-24 md:-mt-20">
      <form onSubmit={shortenLink}>
        <div className="url-shortener flex flex-col md:flex-row gap-7 py-8 md:py-10 px-6 md:px-12 rounded-lg">
          <div className="w-full relative">
            <input
              type="text"
              name="url"
              id="url"
              value={url}
              onFocus={() => {
                setError(false)
                setErrorMessage("")
              }}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
              placeholder="Shorten a link here..."
              className={`w-full py-3 md:py-4 px-4 md:px-7 border-4 border-solid focus:border-primary-cyan rounded-md focus:outline-none transition-all duration-300 ${
                error ? "border-secondary-red" : "border-transparent"
              } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            />
            <span
              className={`absolute -bottom-6 z-30 left-2 w-max text-secondary-red text-sm transition-all duration-300 ${
                error ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {errorMessage || "Please add a valid URL"}
            </span>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full md:w-[180px] text-white font-semibold py-3 md:py-4 px-4 md:px-8 rounded-md transition-colors duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary-cyan hover:bg-[#63dddd]"
            }`}
          >
            {loading ? "Shortening..." : "Shorten it!"}
          </button>
        </div>
      </form>

      <div
        aria-live={links.length !== 0 ? "polite" : "off"}
        className="flex flex-col gap-5 mt-5"
      >
        {links.length !== 0 && (
          <>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Link yang sudah dipendekkan ({links.length})
              </h3>
              <button
                onClick={clearAllLinks}
                className="text-secondary-red hover:text-red-700 font-medium text-sm px-3 py-1 rounded border border-secondary-red hover:border-red-700 transition-colors"
              >
                Hapus Semua
              </button>
            </div>
            {links.map((link, index) => (
              <ShortenedLink
                key={index}
                data={link}
                onRemove={() => removeLink(index)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default UrlShortener
