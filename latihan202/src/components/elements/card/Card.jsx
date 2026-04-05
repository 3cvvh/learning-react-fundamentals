export default function Card({title,price,children,category}){
    return (
        <div className="w-64 bg-[#12082480] border border-[#82460380] rounded overflow-hidden">

          {/* Image */}
          <div className="h-44 overflow-hidden">
          <img src="./img/img.png" className="w-full h-full object-cover h-44 bg-[radial-gradient(circle_at_50%_40%,#1a0530,#0a0610)] flex items-center justify-center text-6xl" />
          </div>

          {/* Body */}
          <div className="p-4">

            <div className="text-[10px] tracking-[2.5px] uppercase text-[#6b5490] mb-1">
              {title}
            </div>

            <div className="font-cinzel text-[13px] text-[#e0ccff] mb-1">
              {category}
            </div>

            <p className="text-sm italic text-[#7a6aa0] leading-relaxed font-light mb-4">
              {children.substring(0,50)}....
            </p> 

            <div className="flex items-center justify-between">
              <div className="font-cinzel text-[15px] text-[#c49dff]">
                {"$ "}
                {price.toLocaleString("en-US")}
              </div>
              <button className="bg-[#50148c80] border border-[#a050ff66] text-[#c49dff] px-4 py-1.5 text-[10px] tracking-wider rounded-sm cursor-pointer">
                + Keranjang
              </button>
            </div>

          </div>
        </div>
    )
}