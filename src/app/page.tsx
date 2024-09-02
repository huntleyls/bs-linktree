import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>BarScout - Discover the Best Bars</title>
        <meta name="description" content="BarScout helps you find and explore the best bars around. Join us to discover exciting new places and stay updated with our app." />
        <meta name="keywords" content="bars, nightlife, bar finder, drinks, nightlife app, BarScout" />
        <meta name="author" content="BarScout Team" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BarScout - Discover the Best Bars" />
        <meta property="og:description" content="BarScout helps you find and explore the best bars around. Join us to discover exciting new places and stay updated with our app." />
        <meta property="og:image" content="https://barscout.com/og-image.jpg" />
        <meta property="og:url" content="https://barscout.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BarScout - Discover the Best Bars" />
        <meta name="twitter:description" content="BarScout helps you find and explore the best bars around. Join us to discover exciting new places and stay updated with our app." />
        <meta name="twitter:image" content="https://barscout.com/twitter-image.jpg" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-secondary px-4 py-6">
        <div className="w-full max-w-md p-6 bg-secondary rounded-lg shadow-lg">
          {/* Placeholder for Logo */}
          <div className="flex justify-center mb-6">
            <img src="/logo.jpg" alt="Your Brand Logo" className="h-24" />
          </div>

          {/* Links */}
          <nav className="flex flex-col space-y-4">
            <a href="https://bar-scout.com" target="_blank" className="flex items-center p-3 bg-white text-text rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
              <img src="/link-50.png" alt="Your Brand Logo" className="h-12 mr-2" />
              <span className="font-bold">Our Website</span>
            </a>
            <a href="https://apps.apple.com/us/app/bar-scout/id6473463411" target="_blank" className="flex items-center p-3 bg-white text-text rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
              <img src="/apple-50.png" alt="Apple icon" className="h-12 mr-2" />
              <span className="font-bold">Apple</span>
            </a>
            <a href="#" target="_blank" className="flex items-center p-3 bg-white text-text rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
              <img src="/android-50.png" alt="Android icon" className="h-12 mr-2" />
              <span className="font-bold">Android - coming soon</span>
            </a>
            <a href="https://www.instagram.com/barscout.app" target="_blank" className="flex items-center p-3 bg-white text-text rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
              <img src="/icons8-instagram-50.png" alt="Android icon" className="h-12 mr-2" />
              <span className="font-bold">Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@bar.scout" target="_blank" className="flex items-center p-3 bg-white text-text rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
              <img src="/icons8-tik-tok-50.png" alt="Android icon" className="h-12 mr-2" />
              <span className="font-bold">TikTok</span>
            </a>
            <a href="https://x.com/barscout2024" target="_blank" className="flex items-center p-3 bg-white text-text rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
              <img src="/icons8-twitter-50.png" alt="Android icon" className="h-12 mr-2" />
              <span className="font-bold">Twitter</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Home
