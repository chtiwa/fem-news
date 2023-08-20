const Left = () => {
  return (
    <div className="grid md:grid-cols-1 gap-y-4">
      <picture>
        <source
          srcSet="/images/image-web-3-mobile.jpg"
          media="(max-width:600px)"
        />
        <img src="/images/image-web-3-desktop.jpg" alt="" />
      </picture>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <h1 className="text-6xl font-bold text-black px-8 mb-4">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col gap-y-8 items-center">
          <p className="text-md text-gray-500">
            We dive into the next evolution of the web that claims to put the
            power of the platfomrs back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-red-400 text-white text-xl font-medium cursor-pointer w-40 h-12 sm:w-52 sm:h-14">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Left
