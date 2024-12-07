'use client';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Swiper = () => {
    return (
        <div className="bg-white rounded-lg sticky top-0 z-40 px-4 md:px-16 pt-8">
            <motion.section
                className="bg-white pt-16 px-6 md:px-12 lg:px-24"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1.2,
                            ease: "easeInOut",
                            when: "beforeChildren",
                            staggerChildren: 0.25,
                        },
                    },
                }}
            >
                <motion.div
                    className="max-w-9xl mx-0 md:mx-4 text-start"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.0,
                        ease: "easeInOut",
                    }}
                >
                    <motion.h1
                        className="text-3xl md:text-6xl font-bold text-black"
                        variants={{
                            hidden: { opacity: 0, x: -50, scale: 0.95 },
                            visible: { opacity: 1, x: 0, scale: 1 },
                        }}
                        transition={{
                            duration: 1.4,
                            ease: "easeInOut",
                        }}
                    >
                        What I Offer.
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-sm md:text-xl text-black leading-relaxed"
                        variants={{
                            hidden: { opacity: 0, y: 50, rotate: 5 },
                            visible: { opacity: 1, y: 0, rotate: 0 },
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.6,
                        }}
                    >
                        My services go beyond just solutions — they’re the key to transforming your digital presence
                        and achieving your business goals. I’m here to bring your digital vision to life and help you succeed online.
                    </motion.p>
                </motion.div>
            </motion.section>
            <CustomSection />
        </div>
    );
};

const CustomSection = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);

    return (
        <section ref={targetRef} className="sticky z-40 h-[300vh] md:h-[] bg-white">
            <div className="sticky top-[8%] flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex flex-row space-x-2">
                    <SectionContent
                        number="[01]"
                        title="Web Development"
                        description="A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are crafted to reflect your unique identity, delivering seamless experiences."
                        features={[
                            "Custom Website Development",
                            "Responsive Design",
                            "E-Commerce Inetgration",
                        ]}
                    />

                    <SectionContent
                        number="[02]"
                        title="Front-End Development"
                        description="Design intuitive, responsive, and engaging user interfaces. I specialize in creating pixel-perfect designs that bring your brand to life, ensuring seamless user experiences across all devices."
                        features={[
                            "Responsive UI/UX Design",
                            "Interactive Animations",
                            "Cross-Browser Compatibility",
                        ]}
                    />

                    <SectionContent
                        number="[03]"
                        title="Back-End Development"
                        description="Build secure, scalable, and robust server-side solutions. I develop back-end systems that integrate seamlessly with front-end applications, ensuring optimal performance and data management."
                        features={[
                            "API Development",
                            "Database Management",
                            "Scalable Server Architecture",
                        ]}
                    />
                </motion.div>
            </div>
        </section>
    );
};

const SectionContent = ({ number, title, description, features }) => (
    <div className="px-2 md:px-4 lg:px-8 py-8 min-w-[100vw] md:min-w-[93vw]">
        <hr className="origin-top-left bg-[rgba(33,33,33,0.33)] border-0 h-[2px] mt-2" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 md:mt-8">
            <div className="flex items-center">
                <div className="text-3xl font-bold text-black md:text-5xl">{number}</div>
            </div>
            <h2 className="text-2xl font-bold text-black mt-2 md:mt-0 md:text-4xl">{title}</h2>
        </div>
        <p className="mt-4 md:mt-4 text-black text-sm leading-relaxed md:text-xl">
            {description}
        </p>
        <ul className="mt-4 md:mt-6 space-y-2 md:space-y-8">
            {features.map((feature, index) => (
                <li
                    key={index}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black pb-4 md:pb-6 text-lg"
                >
                    <span className="text-black">{`0${index + 1}`}</span>
                    <span className="font-semibold text-black mt-2 md:mt-0">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default Swiper;
