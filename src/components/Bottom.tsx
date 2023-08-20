import { motion } from "framer-motion"

const Bottom = () => {
  const info = [
    {
      img: "/images/image-retro-pcs.jpg",
      number: 1,
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?"
    },
    {
      img: "/images/image-top-laptops.jpg",
      number: 2,
      title: "Top 10 Laptops of 2023",
      description: "Our best picks for various needs and budgets."
    },
    {
      img: "/images/image-gaming-growth.jpg",
      number: 3,
      title: "The Growth of Gaming",
      description: "How the pandemic has sparkes new oppotunities."
    }
  ]

  return (
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 w-[100%] md:px-8 px-2 py-8">
      {info.map((item, i) => (
        <motion.div
          className="flex gap-x-4 px-4 sm:px-16 lg:px-2"
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 1 + i * 0.5
          }}
          viewport={{ once: true }}
        >
          <img src={item.img} alt="" className="object-cover h-36 w-24 " />
          <div className="flex flex-col gap-y-2 lg:gap-y-4">
            <p className="text-2xl md:text-4xl font-bold text-slate-400">
              0{item.number}
            </p>
            <p className="text-md md:text-xl text-black font-bold hover:text-red-400 cursor-pointer">
              {item.title}
            </p>
            <p className="text-sm md:text-md text-gray-500 ">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Bottom
