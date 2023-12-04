"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"
import Link from "next/link"

const Hero = () => {
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find, book, or rent a car — quick and super easy!
                </h1>

                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortless
                    booking process.
                </p>
                <Link href='#searchbar' className="w-[141px] inline-block">
                    <CustomButton
                        title="Explore Cars"
                        containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    />
                </Link>
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="Hero" fill className="object-contain" />
                </div>

                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero
