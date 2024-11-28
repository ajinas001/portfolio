'use client';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Swiper = () => {
    return (
        <div className="bg-white rounded-lg sticky top-0 z-40 px-16 pt-8">
            <section className="bg-white pt-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h1 className="text-6xl font-bold text-black">
                        What I Offer.
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-xl text-black leading-relaxed">
                        My services go beyond just solutions — they’re the key to transforming your digital presence
                        and achieving your business goals. I’m here to bring your digital vision to life and help you succeed online.
                    </p>
                </div>
            </section>
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
        <section ref={targetRef} className="sticky z-40 h-[300vh] bg-white">
            <div className="sticky top-[8%] flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex flex-row space-x-2">
                    {/* Section 1: Web Development */}
                    <SectionContent
                        number="[01]"
                        title="Web Development"
                        description="A website developed to captivate and convert can elevate your brand to new heights. My custom-coded sites are meticulously crafted to reflect your unique identity, delivering seamless experiences with a focus on animation—keeping your audience engaged and returning."
                        features={[
                            "Custom Website Development",
                            "Responsive Design",
                            "E-commerce Integration",
                            "SEO Optimization",
                        ]}
                    />

                    {/* Section 2: App Development */}
                    <SectionContent
                        number="[02]"
                        title="App Development"
                        description="Transform your ideas into powerful mobile applications. From intuitive design to robust functionality, I create apps that enhance user engagement and streamline your business processes."
                        features={[
                            "Cross-platform Apps",
                            "User-Friendly UI/UX",
                            "Push Notifications",
                            "In-app Purchases",
                        ]}
                    />

                    {/* Section 3: Digital Marketing */}
                    <SectionContent
                        number="[03]"
                        title="Digital Marketing"
                        description="Drive your business forward with cutting-edge digital marketing strategies. I help brands grow through data-driven campaigns, SEO, and social media management."
                        features={[
                            "Social Media Management",
                            "Content Marketing",
                            "PPC Campaigns",
                            "Analytics and Optimization",
                        ]}
                    />
                </motion.div>
            </div>
        </section>
    );
};

const SectionContent = ({ number, title, description, features }) => (
    <div className="px-2 md:px-4 lg:px-8 py-8 min-w-[100vw] md:min-w-[93vw]">
        {/* Horizontal Line */}
        <hr className="origin-top-left bg-[rgba(33,33,33,0.33)] border-0 h-[2px] mt-2" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8">
            <div className="flex items-center">
                <div className="text-3xl font-bold text-black md:text-5xl">{number}</div>
            </div>
            <h2 className="text-2xl font-bold text-black mt-4 md:mt-0 md:text-4xl">{title}</h2>
        </div>

        {/* Description */}
        <p className="mt-4 text-black text-sm leading-relaxed md:text-xl">
            {description}
        </p>

        {/* List of Features */}
        <ul className="mt-6 space-y-4">
            {features.map((feature, index) => (
                <li
                    key={index}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 md:pb-2 text-lg"
                >
                    <span className="text-black">{`0${index + 1}`}</span>
                    <span className="font-semibold text-black mt-2 md:mt-0">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default Swiper;
