import React, { useRef } from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaFacebookMessenger,
  FaRegCopy,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
} from "react-share";

import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "sonner";
import { useClickOutside } from "@/hooks/useClickoutside";
interface SocialMediaShareModalProps {
  isOpen: boolean | undefined;
  onClose: () => void;
  shareLink: string | undefined;
}
const SocialMediaShareModal: React.FC<SocialMediaShareModalProps> = ({
  isOpen,
  onClose,
  shareLink,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, isOpen ?? false, onClose);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink || "");
    toast.success("Link copied to clipboard!");
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 text-black">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-auto px-10 py-7 shadow-md rounded-lg bg-white"
            ref={ref}
          >
            <h1 className="text-section-h1 mb-4 text-center">Share to:</h1>
            <div className="flex gap-10">
              <FacebookShareButton url={shareLink || ""}>
                <FaFacebook className="text-blue-600 text-3xl" />
              </FacebookShareButton>{" "}
              <TwitterShareButton url={shareLink || ""}>
                <FaXTwitter className=" text-xl lg:text-3xl" />
              </TwitterShareButton>{" "}
              <WhatsappShareButton url={shareLink || ""}>
                <FaWhatsapp className="text-green-500 text-xl lg:text-3xl" />
              </WhatsappShareButton>{" "}
              <InstapaperShareButton url={shareLink || ""}>
                <FaInstagram className="text-red-500 text-xl lg:text-3xl" />
              </InstapaperShareButton>{" "}
              <FacebookShareButton url={shareLink || ""}>
                <FaFacebookMessenger className="text-blue-500 text-xl lg:text-3xl" />
              </FacebookShareButton>{" "}
              <button onClick={handleCopyLink}>
                <FaRegCopy className="text-gray-500 text-xl lg:text-3xl" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
export default SocialMediaShareModal;
