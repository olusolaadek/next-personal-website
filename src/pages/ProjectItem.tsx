import React from "react";
import Image, { StaticImageData } from "next/image";

export type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};

export function ProjectItem(props: ProjectItemProps) {
  let { name, url, urlDisplay, imageSrc: image } = props;
  return (
    <li>
      <a href={url}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={image} alt={name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2"> {name} </div>
          </div>
          <div className="px-6 pb-4">
            <span
              className="inline-block bg-gray-200 rounded-full px-3
py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              🔗 {urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
