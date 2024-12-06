import { KeyboardArrowUp } from "@mui/icons-material"
import { motion } from "motion/react"

export const App: React.FC = () => {

    const currentYear:number = new Date().getFullYear()
    return (
        <>
        <main className="bg-black h-screen overflow-x-hidden min-w-[560px]">
            <section className="bg-red h-[80vh] w-screen flex flex-col justify-center items-center animate-fadeIn delay-500 min-w-full">
                <img src="/home.png" alt="imagen portada" className="w-full h-full opacity-0 animate-fadeInImage delay-500"></img>
                <div className="pt-8 opacity-0 animate-slideInUp delay-700">
                    <h1 className="text-white text-8xl mt-6 font-light">PORFOLIO</h1>
                    <h1 className="text-white text-5xl mt-4 font-light">MARISOL ARANCIBIA</h1>
                </div>
            </section>
            <div className="hidden lg:flex justify-between items-center gap-5 pt-8 text-white px-16 text-3xl font-light">
                <a href="#first" className="relative group text-white hover:opacity-85 opacity-50 transition-all duration-500">
                    MORFOLOGIA DEL SER
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                </a>
                <a href="#second" className="relative group text-white hover:opacity-85 opacity-50 transition-all duration-500">
                    DOBLE PERTENENCIA DEL HIBRIDO
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                </a>
            </div>
        </main>
        <div className="bg-black relative min-w-[560px]">
        <article className="h-screen bg-black">
        <motion.div className="w-full h-full"
            initial= {{opacity: 0,scale : 0.8, translateY: 150}}
            whileInView={{opacity: 1,transition: {duration: 1.5},scale: 1, translateY: 0}}>
                <img src="/second.jpg" alt="segunda imagen" className="w-full h-full object-contain py-16"></img>
        </motion.div>
        </article>
        <article id="first" className="h-auto bg-black flex flex-col lg:flex-row justify-center items-center gap-5 overflow-hidden">
        <motion.div
            className="flex justify-center items-center overflow-hidden"
            initial= {{opacity: 0,scale: 0.85,rotate:-30}}
            whileInView={{opacity: 1, scale: 1,transition: {duration: 1.5},rotate:0}}>
                <img src="/third.webp" alt="tercera imagen" className="h-full object-contain w-3/5"></img>
        </motion.div>
        <motion.div
            className="flex justify-center items-center overflow-hidden"
            initial= {{opacity: 0,scale: 0.85,rotate:30}}
            whileInView={{opacity: 1, scale: 1,transition: {duration: 1.5},rotate:0}}>
                <img src="/four.webp" alt="cuarta imagen" className="h-full object-contain w-3/5"></img>
            </motion.div>
            
        </article>
        <article id="second" className="h-screen bg-black flex justify-center">
        <motion.div
            initial= {{opacity: 0,scale: 0.85,translateX:-200}}
            whileInView={{opacity: 1, scale: 1,transition: {duration: 1.5},translateX:0}}>
            <img src="/six.webp" alt="imagen" className="w-full h-full object-contain"></img>
            </motion.div>
            
        </article>
        <article className="h-screen bg-black flex justify-center">
            <motion.div
            initial= {{opacity: 0,scale: 0.7}}
            whileInView={{opacity: 1, scale: 1,transition: {duration: 2}}}>
                <img src="/contact.jpg" alt="contacto" className="w-full h-full object-contain pt-32 pb-32"></img>
            </motion.div>
        </article>
        <motion.div 
        whileHover={{ scale: 1.1, backgroundColor: '#3d3d3d' }}
        whileTap={{ scale: 0.6 }}
        className="sticky bottom-28 left-20 flex h-16 w-16 justify-center items-center text-white cursor-pointer border rounded-full"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <KeyboardArrowUp fontSize="large"></KeyboardArrowUp>
            </motion.div>
        </div>
        <footer className="bg-neutral-950 h-20 flex justify-center items-center min-w-[560px]">
            <h3 className="text-white opacity-50">Hecho por Ulises Molina © {currentYear}</h3>
        </footer>
        </>
    )
}