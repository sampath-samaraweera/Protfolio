import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { SiGmail } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-3xl ">
        <span 
            className="text-whitecursor-pointer hover:text-blue-500"
            onClick={() => window.location.href = "https://www.linkedin.com/in/sampath-samaraweera/"}
        > 
            <FaLinkedin/> 
        </span>
        <span 
            className="text-whitecursor-pointer hover:text-blue-500"
            onClick={() => window.location.href = "https://github.com/sampath-samaraweera"}
        > 
            <FaGithub/> 
        </span>
        <span 
            className="text-whitecursor-pointer hover:text-blue-500"
            onClick={() => window.location.href = "https://www.facebook.com/profile.php?id=100014468829127&mibextid=ZbWKwL"}
        > 
            <FaFacebook/> 
        </span>
        <span 
            className="text-whitecursor-pointer hover:text-blue-500"
            onClick={() => window.location.href = "https://www.instagram.com/sampath_dimal_?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"}
        > 
            <FaInstagram/> 
        </span>
        {/* <span 
            className="text-whitecursor-pointer hover:text-blue-500"
            onClick={() => window.location.href = "mailto:sampathsamaraweera28@gmail.com"}
        > 
            <SiGmail/> 
        </span> */}
        <span 
            className="text-whitecursor-pointer hover:text-blue-500"
            onClick={() => window.location.href = "https://x.com/SampathDimal"}
        > 
            <FaSquareXTwitter/> 
        </span>
  </div>
  )
}

export default SocialMedia
