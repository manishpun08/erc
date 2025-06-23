"use client";
import facebookIcon from "@/assets/actRuleDetail/facebook.svg";
import mailIcon from "@/assets/actRuleDetail/mail.svg";
import messangerIcon from "@/assets/actRuleDetail/messanger.svg";
import shareIcon from "@/assets/actRuleDetail/share.svg";
import xIcon from "@/assets/actRuleDetail/x.svg";
import SocialMediaShareModal from "@/components/modal/SocialMediaShareModal";
import { formatToNepaliDate } from "@/utils/formatToNepaliDate";
import Image from "next/image";

import React, { useState } from "react";
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { IActDetailData } from "../app/act/[slug1]/[slug]/interface/actDetail.interface";
import { INewsRecord } from "@/Interface/news.interface";

interface Props {
  detailData: IActDetailData | INewsRecord;
}

const TopDetailPage: React.FC<Props> = ({ detailData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="mt-10 padding-x ">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
        {/* Heading */}
        <div>
          <p className="typography-h3-semi-bold text-text-500">
            {detailData?.title}
          </p>
        </div>

        {/* Share Icons  */}
        <div className="flex items-center gap-3">
          <FacebookShareButton url={currentUrl}>
            <Image
              alt="facebook"
              src={facebookIcon}
              width={24}
              height={24}
              className="w-6 h-6 object-cover object-center"
            />
          </FacebookShareButton>

          <FacebookMessengerShareButton appId="Messenger" url={currentUrl}>
            <Image
              alt="messangerIcon"
              src={messangerIcon}
              width={24}
              height={24}
              className="w-6 h-6 object-cover object-center"
            />
          </FacebookMessengerShareButton>

          <TwitterShareButton url={currentUrl}>
            <Image
              alt="xIcon"
              src={xIcon}
              width={24}
              height={24}
              className="w-6 h-6 object-cover object-center"
            />
          </TwitterShareButton>
          <EmailShareButton url={currentUrl}>
            <Image
              alt="mailIcon"
              src={mailIcon}
              width={24}
              height={24}
              className="w-6 h-6 object-cover object-center"
            />
          </EmailShareButton>

          <Image
            alt="shareIcon"
            src={shareIcon}
            width={24}
            height={24}
            className="w-6 h-6 object-cover object-center cursor-pointer"
            onClick={() => {
              setOpenModal(true);
              setShareLink(currentUrl);
            }}
          />
        </div>
      </div>

      <div className="mt-3.5">
        <p className="typography-p-regular-medium text-text-300">
          Published Date : {formatToNepaliDate(detailData?.created_at)}
        </p>
      </div>

      <SocialMediaShareModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        shareLink={shareLink}
      />
    </div>
  );
};

export default TopDetailPage;
