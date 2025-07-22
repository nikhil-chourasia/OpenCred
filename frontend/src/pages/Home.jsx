import "react"
import certificateImage from "../assets/undraw_certification_i2m0.svg"
import shield from "../assets/shield.svg"
import zap from "../assets/zap.svg"
import globe from "../assets/globe.svg"
import lock from "../assets/lock.svg"
import usersRound from "../assets/users-round.svg"
import award from "../assets/award.svg"
import FeatureCard from "./components/ui/FeatureCard.jsx"

function Home() {
    return (
        <>
            <div className="hero-container bg-gradient-to-br from-blue-500 to-blue-900 h-[100vh] w-full flex flex-col items-center justify-between py-16">
                <div className="header w-[80%]">
                    <p className="text-7xl font-bold bg-gradient-to-b from-neutral-50 to-stone-300 bg-clip-text text-transparent">
                        OpenCred
                    </p>
                </div>
                <div className="content-container flex w-[80%] justify-between flex-grow items-center">
                    <div className="content flex flex-col w-1/2">
                        <div className="content-heading">
                            <p className="text-5xl font-bold py-[4px]">Secure Certificate</p>
                            <p className="text-5xl font-bold py-[4px] bg-gradient-to-b from-sky-400 to-sky-600 bg-clip-text text-transparent">
                                Verification
                            </p>
                            <p className="text-5xl font-bold py-[4px]">on Blockchain</p>
                        </div>
                        <div className="content-subheading">
                            <p className="text-lg py-4">
                                Revolutionalising verification of Certificates with easy and secure Certificate Verifications using our Blockchain based technology.
                            </p>
                        </div>
                        <div className="buttons flex gap-4 mt-4">
                            <button className="verify-btn bg-gradient-to-r from-sky-500 to-sky-600 px-4 py-2 rounded text-white cursor-pointer" link="/verify">
                                Verify Certificate
                            </button>
                            <button className="issue-btn bg-white text-black px-4 py-2 rounded cursor-pointer">
                                Issue Certificates
                            </button>
                        </div>
                    </div>
                    <div className="image w-1/2 flex justify-center items-center">
                        <img src={certificateImage} alt="Certificate Illustration" className="h-[360px]" />
                    </div>
                </div>
            </div>
            <div className="section-2 h-[100vh] w-[100vw] bg-slate-50 flex flex-col items-center justify-center gap-8">
                <div className="section-2-heading text-4xl font-bold text-black">
                    Why Choose OpenCred?
                </div>
                <div className="section-2-subheading text-center flex flex-col items-center justify-center py-4">
                    <p className="text-lg text-black font-base text-center w-[60%]">
                        OpenCred provides a secure, transparent, and efficient way to verify certificates using blockchain technology. Our platform ensures that credentials are tamper-proof, instantly verifiable, and globally recognized.
                    </p>
                </div>
                <div className="fatures-grid grid grid-cols-3 grid-rows-2 gap-8 justify-center items-center">
                    <FeatureCard icon={shield} feature="Tamper-Proof Security" description="Blockchain-based verification ensures certificates cannot be falsified or altered once issued."/>
                    <FeatureCard icon={zap} feature="Instant Verification" description="Verify credentials in real-time with our advanced blockchain infrastructure and APIs."/>
                    <FeatureCard icon={globe} feature="Global Recognition" description="International standard compliance makes certificates verifiable anywhere in the world."/>
                    <FeatureCard icon={lock} feature="Privacy Protected" description="Advanced encryption keeps sensitive information secure while enabling verification."/>
                    <FeatureCard icon={usersRound} feature="Multi-Party Trust" description="Institutions, employers, and individuals can all trust the same verification system."/>
                    <FeatureCard icon={award} feature="Compliance Ready" description="Meet regulatory requirements with auditable, traceable certification processes."/>
                </div>
            </div>
            <div className="footer h-[5vh] w-full bg-gradient-to-br from-blue-500 to-blue-900 flex items-center justify-center text-white">
                <p className="font-normal text-lg">Made with ❤️ and ☕ in India</p>
            </div>
        </>
    )
}

export default Home
