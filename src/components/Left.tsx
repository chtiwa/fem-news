import { motion } from "framer-motion"

const Left = () => {
  return (
    <div className="grid md:grid-cols-1 gap-y-4">
      <motion.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5
        }}
        viewport={{ once: true }}
      >
        <source
          srcSet="/images/image-web-3-mobile.jpg"
          media="(max-width:600px)"
        />
        <img src="/images/image-web-3-desktop.jpg" alt="" />
      </motion.picture>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <motion.h1
          className="text-6xl font-bold text-black px-8 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 1
          }}
          viewport={{ once: true }}
        >
          The Bright Future of Web 3.0?
        </motion.h1>
        <div className="flex flex-col gap-y-8 items-center">
          <motion.p
            className="text-md text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 1.5
            }}
            viewport={{ once: true }}
          >
            We dive into the next evolution of the web that claims to put the
            power of the platfomrs back into the hands of the people. But is it
            really fulfilling its promise?
          </motion.p>
          <motion.button
            className="bg-red-400 text-white text-xl font-medium cursor-pointer w-40 h-12 sm:w-52 sm:h-14 hover:bg-slate-900 transition-colors "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 2
            }}
            viewport={{ once: true }}
          >
            READ MORE
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Left
