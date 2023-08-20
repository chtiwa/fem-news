import { motion } from "framer-motion"

const Right = () => {
  const info = [
    {
      title: "Hydrogen Vs Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to FVs?"
    },
    {
      title: "The Fownsides of AI Artistry",
      description:
        "What are the possivle adverse effects of on demand AI image generation"
    },
    {
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC finns is down 50%. We take a look at what tha means"
    }
  ]
  return (
    <motion.div
      className="flex flex-col bg-slate-900 p-4 lg:mx-4 w-[100%] sm:min-w-[400px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.5
      }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold text-red-400 mb-8">New</h1>
      <div className="flex flex-col gap-y-16">
        {info.map((item, i) => (
          <motion.div
            className="flex flex-col gap-y-4"
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 2 + 0.5 * i
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white hover:text-red-400 cursor-pointer">
              {item.title}
            </h3>
            <p className="text-md text-slate-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Right
